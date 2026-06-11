# Homepage — Claude Code Handoff

## Project
Nick White's personal site at **nickwhite.us**. Next.js 14 (pages router), TypeScript, Tailwind, Chakra UI, Supabase auth (Google OAuth). Deployed from `/Users/nickwhite/Development/homepage`.

## What was just built

### Recruiting Opportunities Tracker
Two new files added (not yet pushed — see below):

- `modules/recruiting/index.tsx` — React component with hardcoded seed data of 7 inbound recruiting opportunities, filter tabs (All / Needs Reply / Pending / Closed), expandable cards, inline status controls.
- `pages/app/recruiting/index.tsx` — Page at `/app/recruiting`, gated by Supabase session. Unauthenticated users see the Supabase Auth UI (Google OAuth). Authenticated users see the tracker.

## Pending git push
A git index.lock file got left behind during a sandbox operation. Run this to clean up and push:

```bash
cd /Users/nickwhite/Development/homepage
rm .git/index.lock
git checkout next-env.d.ts   # revert auto-generated file change
git pull origin master
git add modules/recruiting/ pages/app/recruiting/
git commit -m "add recruiting opportunities tracker with supabase auth guard"
git push origin master
```

## Open tasks

### 1. Supabase → self-hosted Postgres migration (Hetzner)
Replace all Supabase client usage with a direct Postgres connection. Scope:
- Swap `@supabase/*` deps for `pg` or `postgres.js`
- Replace `createPagesBrowserClient`, `useSupabaseClient`, `useSession` hooks with a new session strategy (next-auth or custom JWT recommended)
- Update auth flows in: `pages/_app.tsx`, `pages/app/login/index.tsx`, `pages/app/recruiting/index.tsx`, `pages/app/behavior-buzz/index.tsx`
- Update `.env.local` with new connection string
- Replace or regenerate `types/supabase.ts` from the new DB schema

### 2. Automated recruiting tracker updates
Set up a scheduled job that:
1. Searches Gmail for new recruiting threads (Gmail MCP connector available)
2. Diffs against a persisted JSON data file in the repo (e.g. `data/recruiting.json`)
3. Commits updated data and pushes to origin
4. Triggers a redeploy

The `modules/recruiting/index.tsx` component currently reads from a hardcoded array — it should be refactored to read from `data/recruiting.json` as the first step.

Requires: GitHub token in env, Gmail API credentials, a cron runner (GitHub Actions or external).

## Key files
```
pages/_app.tsx                        # Supabase SessionContextProvider, Chakra, global styles
pages/app/recruiting/index.tsx        # NEW — auth-gated recruiting page
pages/app/login/index.tsx             # Supabase Auth UI login page
modules/recruiting/index.tsx          # NEW — recruiting tracker component
modules/home/index.tsx                # Landing page
components/layout/page-wrapper.tsx    # PageWrapper, PageWrapperWithNavBar, PageWrapperWithHeader
types/supabase.ts                     # Auto-generated Supabase types
```

## Auth pattern
Supabase `useSession()` / `useSupabaseClient()` from `@supabase/auth-helpers-react`. Session provider wraps the app in `_app.tsx`. Login via Google OAuth at `/app/login`.
