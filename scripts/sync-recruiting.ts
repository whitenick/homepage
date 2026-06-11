/**
 * Scans Gmail for new recruiting outreach threads and merges them into
 * data/recruiting.json, then commits and pushes so Vercel redeploys.
 *
 * Runs as a local cron job. Credentials live in .env.local — never
 * need to leave this machine.
 *
 * Required entries in .env.local:
 *   GMAIL_CLIENT_ID=...
 *   GMAIL_CLIENT_SECRET=...
 *   GMAIL_REFRESH_TOKEN=...
 *   ANTHROPIC_API_KEY=...
 *
 * Run manually:
 *   npm run sync-recruiting
 *
 * Set up daily cron (9am):
 *   crontab -e
 *   0 9 * * * cd /Users/nickwhite/Development/homepage && npm run sync-recruiting >> /tmp/sync-recruiting.log 2>&1
 */

import { google } from 'googleapis';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Load .env.local
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length && !key.startsWith('#')) {
      process.env[key.trim()] = rest.join('=').trim();
    }
  }
}

type Status = 'needs-reply' | 'pending' | 'closed';

interface Opportunity {
  id: string;
  company: string;
  role: string;
  recruiter: string;
  recruiterEmail: string;
  agency: string;
  date: string;
  status: Status;
  followUps: number;
  snippet: string;
  comp?: string;
  notes?: string;
}

interface ParsedOpportunity {
  isRecruiting: boolean;
  company?: string;
  role?: string;
  recruiter?: string;
  agency?: string;
  comp?: string;
  snippet?: string;
}

// ---------------------------------------------------------------------------
// Gmail helpers
// ---------------------------------------------------------------------------

function decodeBase64(encoded: string): string {
  return Buffer.from(encoded.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf-8');
}

function extractTextFromParts(parts: any[]): string {
  for (const part of parts) {
    if (part.mimeType === 'text/plain' && part.body?.data) {
      return decodeBase64(part.body.data);
    }
    if (part.parts) {
      const nested = extractTextFromParts(part.parts);
      if (nested) return nested;
    }
  }
  return '';
}

function extractBody(message: any): string {
  const payload = message.payload;
  if (!payload) return '';
  if (payload.body?.data) return decodeBase64(payload.body.data);
  if (payload.parts) return extractTextFromParts(payload.parts);
  return '';
}

function getHeader(message: any, name: string): string {
  return (
    message.payload?.headers?.find(
      (h: any) => h.name.toLowerCase() === name.toLowerCase()
    )?.value ?? ''
  );
}

// ---------------------------------------------------------------------------
// Claude parsing
// ---------------------------------------------------------------------------

async function parseWithClaude(
  anthropic: Anthropic,
  subject: string,
  from: string,
  body: string
): Promise<ParsedOpportunity> {
  const trimmed = body.slice(0, 2000);

  const response = await anthropic.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 400,
    messages: [
      {
        role: 'user',
        content: `You are parsing an email to determine if it is a recruiting/job outreach message.

Email:
Subject: ${subject}
From: ${from}
Body:
${trimmed}

Respond ONLY with valid JSON matching this shape:
{
  "isRecruiting": boolean,
  "company": "target company name (not the recruiter's agency)",
  "role": "job title being recruited for",
  "recruiter": "recruiter's first and last name",
  "agency": "recruiting agency or firm name, or 'Direct' if internal",
  "comp": "compensation range if mentioned, else null",
  "snippet": "one sentence summary of the opportunity"
}

If this is NOT a recruiting/job outreach email, return { "isRecruiting": false } and nothing else.`,
      },
    ],
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '{}';
  try {
    return JSON.parse(text);
  } catch {
    return { isRecruiting: false };
  }
}

// ---------------------------------------------------------------------------
// Git helpers
// ---------------------------------------------------------------------------

function gitPush(repoPath: string, count: number) {
  const today = new Date().toISOString().slice(0, 10);
  execSync('git add data/recruiting.json', { cwd: repoPath, stdio: 'inherit' });
  execSync(
    `git commit -m "chore: sync recruiting opportunities (${count} new, ${today})"`,
    { cwd: repoPath, stdio: 'inherit' }
  );
  execSync('git push origin master', { cwd: repoPath, stdio: 'inherit' });
  console.log('Pushed to origin — Vercel will redeploy.');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const {
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    GMAIL_REFRESH_TOKEN,
    ANTHROPIC_API_KEY,
  } = process.env;

  if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN || !ANTHROPIC_API_KEY) {
    console.error(
      'Missing credentials. Add GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, ' +
      'GMAIL_REFRESH_TOKEN, and ANTHROPIC_API_KEY to .env.local'
    );
    process.exit(1);
  }

  // Auth
  const auth = new google.auth.OAuth2(GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET);
  auth.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });
  const gmail = google.gmail({ version: 'v1', auth });
  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  // Load existing data
  const repoPath = process.cwd();
  const dataPath = path.join(repoPath, 'data', 'recruiting.json');
  const existing: Opportunity[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const existingIds = new Set(existing.map((o) => o.id));

  // Search Gmail — personal outreach in inbox, past 180 days
  const query = [
    'is:inbox',
    '-category:promotions',
    '-category:updates',
    '-from:no-reply',
    '-from:noreply',
    '-from:support@',
    '-from:notifications@',
    'newer_than:180d',
    '(',
      'subject:("engineering manager") OR',
      'subject:("technical lead") OR',
      'subject:("engineering lead") OR',
      'subject:("software engineer") OR',
      'subject:(engineer recruiter) OR',
      'subject:(engineer opportunity) OR',
      'subject:(engineer role) OR',
      'subject:(engineer hiring)',
    ')',
  ].join(' ');

  console.log('Searching Gmail...');
  const listRes = await gmail.users.threads.list({
    userId: 'me',
    q: query,
    maxResults: 50,
  });

  const threads = listRes.data.threads ?? [];
  console.log(`Found ${threads.length} threads matching query.`);

  const newOpportunities: Opportunity[] = [];

  for (const thread of threads) {
    const id = thread.id!;
    if (existingIds.has(id)) {
      console.log(`  Skipping known thread ${id}`);
      continue;
    }

    const threadRes = await gmail.users.threads.get({
      userId: 'me',
      id,
      format: 'full',
    });

    const firstMessage = threadRes.data.messages?.[0];
    if (!firstMessage) continue;

    const subject = getHeader(firstMessage, 'subject');
    const from = getHeader(firstMessage, 'from');
    const date = getHeader(firstMessage, 'date');
    const body = extractBody(firstMessage);
    const followUps = (threadRes.data.messages?.length ?? 1) - 1;

    const emailMatch = from.match(/<(.+?)>/) ?? from.match(/(\S+@\S+)/);
    const recruiterEmail = emailMatch ? emailMatch[1] : from;

    console.log(`  Parsing: "${subject}" from ${from}`);
    const parsed = await parseWithClaude(anthropic, subject, from, body);

    if (!parsed.isRecruiting) {
      console.log('    → Not recruiting, skipping.');
      continue;
    }

    const isoDate = new Date(date).toISOString().slice(0, 10);
    const opportunity: Opportunity = {
      id,
      company: parsed.company ?? 'Unknown',
      role: parsed.role ?? 'Unknown',
      recruiter: parsed.recruiter ?? from.split('<')[0].trim(),
      recruiterEmail,
      agency: parsed.agency ?? 'Unknown',
      date: isoDate,
      status: 'needs-reply',
      followUps,
      snippet: parsed.snippet ?? subject,
      ...(parsed.comp ? { comp: parsed.comp } : {}),
    };

    console.log(`    → Added: ${opportunity.role} at ${opportunity.company}`);
    newOpportunities.push(opportunity);
  }

  if (newOpportunities.length === 0) {
    console.log('\nNo new opportunities found. Nothing to commit.');
    return;
  }

  const updated = [...existing, ...newOpportunities];
  fs.writeFileSync(dataPath, JSON.stringify(updated, null, 2) + '\n');
  console.log(`\nWrote ${newOpportunities.length} new opportunit${newOpportunities.length === 1 ? 'y' : 'ies'} to data/recruiting.json`);

  gitPush(repoPath, newOpportunities.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
