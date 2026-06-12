"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/v2.css";

export default function SelfHosting() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
    }, []);

    const t = dark ? "dark" : "light";

    return (
        <>
            <Head>
                <title>Self-Hosting Is Back — Nick White</title>
                <meta
                    name="description"
                    content="Why I moved everything off managed platforms onto a $10/mo Hetzner box — and why AI is what made it finally click."
                />
                <link rel="icon" href="/mountain.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500&family=IBM+Plex+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <style jsx global>{`
                .sh-root {
                    --serif: "Newsreader", Georgia, serif;
                    --disp:  "Instrument Serif", Georgia, serif;
                    --mono:  "IBM Plex Mono", monospace;
                }
                .sh-root[data-theme="light"] {
                    --bg:        #f5f2ec;
                    --ink:       #1b2030;
                    --ink-strong:#0a0d16;
                    --ink-dim:   #56607a;
                    --line:      #d8d0c0;
                    --accent:    #b85c38;
                    --accent-dim:rgba(184,92,56,0.08);
                }
                .sh-root[data-theme="dark"] {
                    --bg:        #080b14;
                    --ink:       #e9e7df;
                    --ink-strong:#ffffff;
                    --ink-dim:   #9aa3b5;
                    --line:      #243049;
                    --accent:    #f5b942;
                    --accent-dim:rgba(245,185,66,0.07);
                }
                .sh-body {
                    background: var(--bg);
                    color: var(--ink);
                    font-family: var(--serif);
                    font-size: 18px;
                    line-height: 1.7;
                    min-height: 100vh;
                    transition: background 0.25s, color 0.25s;
                }
                .sh-nav {
                    position: sticky;
                    top: 0;
                    z-index: 40;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 22px;
                    border-bottom: 1px solid var(--line);
                    background: var(--bg);
                    transition: background 0.25s;
                }
                .sh-nav-back {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: var(--mono);
                    font-size: 12px;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--ink-dim);
                    text-decoration: none;
                    transition: color 0.15s;
                }
                .sh-nav-back:hover { color: var(--accent); }
                .sh-toggle {
                    font-family: var(--mono);
                    font-size: 12px;
                    letter-spacing: 0.08em;
                    padding: 7px 14px;
                    border-radius: 30px;
                    border: 1px solid var(--line);
                    background: transparent;
                    color: var(--ink);
                    cursor: pointer;
                    transition: transform 0.15s, background 0.25s, color 0.25s;
                }
                .sh-toggle:hover { transform: translateY(-1px); }
                .sh-wrap {
                    max-width: 740px;
                    margin: 0 auto;
                    padding: 0 22px 120px;
                }
                .sh-header {
                    padding: 60px 0 32px;
                    border-bottom: 1px solid var(--line);
                }
                .sh-kicker {
                    font-family: var(--mono);
                    font-size: 12px;
                    letter-spacing: 0.32em;
                    text-transform: uppercase;
                    color: var(--accent);
                    margin: 0 0 18px;
                }
                .sh-h1 {
                    font-family: var(--disp);
                    font-weight: 400;
                    font-size: clamp(36px, 7vw, 62px);
                    line-height: 1.04;
                    margin: 0;
                    letter-spacing: -0.01em;
                    color: var(--ink-strong);
                }
                .sh-h1 em {
                    font-style: italic;
                    color: var(--accent);
                }
                .sh-lede {
                    font-size: 19px;
                    color: var(--ink-dim);
                    margin: 24px 0 0;
                    max-width: 60ch;
                    line-height: 1.6;
                }
                .sh-date {
                    font-family: var(--mono);
                    font-size: 12px;
                    letter-spacing: 0.06em;
                    color: var(--ink-dim);
                    margin-top: 22px;
                }
                .sh-h2 {
                    font-family: var(--disp);
                    font-weight: 400;
                    font-size: clamp(24px, 4.5vw, 34px);
                    margin: 64px 0 4px;
                    letter-spacing: -0.01em;
                    color: var(--ink-strong);
                }
                .sh-secnum {
                    display: block;
                    font-family: var(--mono);
                    font-size: 11px;
                    letter-spacing: 0.3em;
                    color: var(--accent);
                    text-transform: uppercase;
                    margin-bottom: 6px;
                }
                .sh-p {
                    margin: 20px 0;
                    max-width: 66ch;
                }
                .sh-strong {
                    font-weight: 500;
                    color: var(--ink-strong);
                }
                .sh-callout {
                    border-left: 3px solid var(--accent);
                    background: var(--accent-dim);
                    border-radius: 0 8px 8px 0;
                    padding: 18px 22px;
                    margin: 32px 0;
                    font-size: 17px;
                    color: var(--ink);
                    max-width: 62ch;
                }
                .sh-callout em {
                    font-style: italic;
                    color: var(--accent);
                }
                .sh-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 15px;
                    margin: 28px 0;
                }
                .sh-table th,
                .sh-table td {
                    text-align: left;
                    padding: 11px 14px;
                    border-bottom: 1px solid var(--line);
                }
                .sh-table th {
                    font-family: var(--mono);
                    font-size: 11px;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--ink-dim);
                    font-weight: 400;
                }
                .sh-table .mono { font-family: var(--mono); color: var(--ink-strong); }
                .sh-table .accent { color: var(--accent); font-family: var(--mono); }
                .sh-pros-cons {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin: 32px 0;
                }
                @media (max-width: 580px) {
                    .sh-pros-cons { grid-template-columns: 1fr; }
                }
                .sh-card {
                    border: 1px solid var(--line);
                    border-radius: 10px;
                    padding: 20px 22px;
                }
                .sh-card-label {
                    font-family: var(--mono);
                    font-size: 11px;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    margin-bottom: 14px;
                }
                .sh-card-label.for  { color: var(--accent); }
                .sh-card-label.against { color: var(--ink-dim); }
                .sh-card ul {
                    margin: 0;
                    padding: 0 0 0 16px;
                    font-size: 15.5px;
                    color: var(--ink);
                    line-height: 1.65;
                }
                .sh-card ul li { margin-bottom: 8px; }
                .sh-stack {
                    font-family: var(--mono);
                    font-size: 13.5px;
                    background: var(--accent-dim);
                    border: 1px solid var(--line);
                    border-radius: 8px;
                    padding: 18px 20px;
                    margin: 28px 0;
                    line-height: 1.8;
                    color: var(--ink);
                }
                .sh-stack span { color: var(--accent); }
                .sh-closer {
                    font-family: var(--disp);
                    font-size: clamp(20px, 4vw, 26px);
                    line-height: 1.45;
                    color: var(--ink-strong);
                    max-width: 58ch;
                    margin: 48px 0 0;
                }
                .sh-closer em {
                    font-style: italic;
                    color: var(--accent);
                }
                .sh-footer {
                    margin-top: 72px;
                    padding-top: 24px;
                    border-top: 1px solid var(--line);
                    color: var(--ink-dim);
                    font-size: 13.5px;
                    font-family: var(--mono);
                    letter-spacing: 0.02em;
                }
            `}</style>

            <div className="sh-root sh-body" data-theme={t}>
                <nav className="sh-nav">
                    <Link href="/blog" className="sh-nav-back">← Blog</Link>
                    <button
                        className="sh-toggle"
                        onClick={() => setDark(d => !d)}
                        aria-label="Toggle theme"
                    >
                        {dark ? "☀ Light" : "☾ Dark"}
                    </button>
                </nav>

                <div className="sh-wrap">
                    <header className="sh-header">
                        <p className="sh-kicker">Infrastructure · Solo Dev</p>
                        <h1 className="sh-h1">
                            Self-hosting is back.<br />
                            <em>AI</em> is why.
                        </h1>
                        <p className="sh-lede">
                            Managed platforms were a deal: pay more per month, get back hours of
                            your life. That deal is breaking down. Costs are rising faster than
                            solo projects can absorb them — and AI has quietly eliminated most of
                            the ops complexity that made the deal worth it in the first place.
                        </p>
                        <p className="sh-date">June 2026</p>
                    </header>

                    {/* §01 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The cost argument</span>
                        The bill doesn&apos;t scale with you
                    </h2>
                    <p className="sh-p">
                        A few years ago the pitch for managed platforms was obvious. You skip the
                        server, skip the sysadmin work, and ship faster. For a solo builder that
                        trade-off made a lot of sense when the first $20 was free and everything
                        lived on a hobby tier.
                    </p>
                    <p className="sh-p">
                        That era is over. Vercel&apos;s hobby tier cuts off commercial use. Railway
                        charges per-minute for compute that idles most of the day. Supabase is
                        generous at zero but punishing the moment you need a second project or
                        real connection pooling. The pattern is the same everywhere: growth
                        thresholds are engineered to trigger exactly when a project gets
                        interesting, and the jump to the next tier is steep.
                    </p>

                    <div className="sh-callout">
                        A $6/mo Hetzner CAX11 ARM box — the cheapest they sell — has 2 vCPUs,
                        4 GB RAM, and 40 GB SSD. It runs Postgres, Caddy, n8n, and multiple
                        Go services. The equivalent across managed services
                        is <em>$80–120/mo and climbing</em>.{" "}
                        The production machine that actually runs Serapio Labs is a CX42-class
                        with 4 vCPUs, 15 GB RAM, and a 200 GB volume — still{" "}
                        <em>$24–32/mo</em>, still a fraction of managed.
                    </div>

                    <p className="sh-p">
                        The math isn&apos;t subtle. For a side project or a small internal tool,
                        you are paying a convenience tax on infrastructure you could own outright
                        for a fraction of the cost. The question stopped being &ldquo;is it worth
                        setting up a server&rdquo; and became &ldquo;what exactly am I buying with
                        that premium.&rdquo;
                    </p>

                    {/* §02 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / The AI argument</span>
                        The ops tax has mostly disappeared
                    </h2>
                    <p className="sh-p">
                        The honest reason self-hosting fell out of fashion wasn&apos;t just
                        laziness — it was the cognitive overhead. Nginx configs you had to look
                        up every time. systemd unit files that felt like black magic. TLS
                        renewal, ufw rules, zero-downtime deploys, Postgres tuning. If you
                        weren&apos;t a sysadmin by trade, you lost a weekend every time something
                        went sideways.
                    </p>
                    <p className="sh-p">
                        AI changes this in a specific and underrated way: it doesn&apos;t make
                        you a sysadmin, it makes it so you don&apos;t need to be one. Caddy
                        reverse proxy with automatic TLS, SPA fallback, and API proxying? One prompt.
                        Docker Compose with proper networking, restart policy, and environment
                        variables? One prompt. ufw rules, migration
                        tooling — all of it is one conversation away and immediately correct
                        for your exact setup.
                    </p>

                    <div className="sh-callout">
                        The inflection point isn&apos;t that AI writes your app. It&apos;s that
                        AI has made the <em>operational layer</em> — the part that used to eat
                        weekends — cheap enough to be irrelevant.
                    </div>

                    <p className="sh-p">
                        More importantly, debugging is faster too. When something breaks at 2am,
                        you have a competent ops co-pilot who knows your stack, can read your
                        journalctl output, and will walk you through the fix. The old asymmetry
                        — managed platforms never break in ways you have to fix, self-hosted
                        breaks in ways that cost you hours — has narrowed dramatically.
                    </p>

                    {/* §03 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / What it actually looks like</span>
                        One box, pragmatic stack
                    </h2>
                    <p className="sh-p">
                        For Serapio Labs the stack is deliberately boring — but the boring
                        choices are the ones that survive contact with reality. A single
                        Hetzner VPS runs the core: Postgres 17 on port 5433 for separation,
                        <strong> Caddy</strong> as the reverse proxy with built-in automatic
                        TLS (no Certbot, no renewal cron), service containers where they
                        make sense (Open WebUI, Qdrant vector memory) and systemd binaries
                        where they don&apos;t. Tailscale is the backbone, not a footnote.
                        Cloudflare sits in front for DDoS protection and caching, but it&apos;s
                        a one-checkbox upgrade, not a prerequisite.
                    </p>

                    <div className="sh-stack">
                        <span>Internet</span>{" → "}Cloudflare (optional edge layer){"\n"}
                        {"  → "}Caddy · auto-TLS (built-in Let&apos;s Encrypt){"\n"}
                        {"      ├── "}yourapp.serapiolabs.com <span>→</span> React static build{"\n"}
                        {"      ├── "}/api/* <span>→</span> Go binary · systemd unit{"\n"}
                        {"      ├── "}open-webui <span>→</span> Docker · Coolify deploy{"\n"}
                        {"      ├── "}qdrant <span>→</span> Docker · Coolify deploy{"\n"}
                        {"      └── "}Postgres 17 · port 5433 (tuned for 15GB RAM)
                    </div>

                    <p className="sh-p">
                        Deployment is a mix: <strong>Coolify</strong> handles the containerized
                        services (Open WebUI, Qdrant, LiteLLM), systemd handles the compiled
                        Go binaries. The choice isn&apos;t ideological — Postgres as a container
                        adds complexity you don&apos;t need, but managing Qdrant and Open WebUI
                        as raw processes would be genuinely harder. Use what fits.
                    </p>

                    <p className="sh-p">
                        <strong>And then there&apos;s TARS.</strong> The distributed LLM
                        inference cluster running at tars.serapiolabs.com. The Hetzner VPS
                        hosts the control plane — Caddy, Open WebUI, Qdrant vector memory,
                        and a CPU-bound Ollama instance running qwen2.5:7b. A Windows PC with
                        an RTX 3060 12GB acts as the GPU worker, serving qwen2.5:14b over
                        Tailscale. It&apos;s the same thesis pushed further: one compute layer
                        that works, distributed only where the bottleneck demands it.
                    </p>

                    <table className="sh-table">
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>Choice</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Compute</td>
                                <td>Hetzner CX42 (production)</td>
                                <td className="accent">~$24–32/mo</td>
                            </tr>
                            <tr>
                                <td>Entry compute</td>
                                <td>Hetzner CAX11 (starting)</td>
                                <td className="accent">~$6–12/mo</td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>Postgres 17 on same box</td>
                                <td className="mono">$0</td>
                            </tr>
                            <tr>
                                <td>Reverse proxy + TLS</td>
                                <td>Caddy (auto-cert, no maintenance)</td>
                                <td className="mono">$0</td>
                            </tr>
                            <tr>
                                <td>CDN / proxy</td>
                                <td>Cloudflare free tier</td>
                                <td className="mono">$0</td>
                            </tr>
                            <tr>
                                <td>Deployment</td>
                                <td>Coolify (containers) + systemd (binaries)</td>
                                <td className="mono">$0</td>
                            </tr>
                            <tr>
                                <td>LLM inference</td>
                                <td>Ollama (CPU on VPS, GPU via Tailscale)</td>
                                <td className="mono">$0</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* §04 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / The honest case against</span>
                        When you should still pay for managed
                    </h2>
                    <p className="sh-p">
                        I&apos;m not arguing that self-hosting is always right. The case for
                        managed platforms doesn&apos;t disappear — it just narrows.
                    </p>

                    <div className="sh-pros-cons">
                        <div className="sh-card">
                            <p className="sh-card-label for">For self-hosting</p>
                            <ul>
                                <li>You control the cost ceiling absolutely</li>
                                <li>AI has made ops maintenance tractable for non-sysadmins</li>
                                <li>No per-seat, per-project, or per-connection pricing surprises</li>
                                <li>Stack is yours — no vendor lock-in, no deprecation notices</li>
                                <li>Bottlenecks reveal themselves naturally — you know what to fix or outsource next</li>
                            </ul>
                        </div>
                        <div className="sh-card">
                            <p className="sh-card-label against">Against</p>
                            <ul>
                                <li>You own uptime — no SLA, no on-call team</li>
                                <li>Backups, monitoring, alerting are now your problem</li>
                                <li>Scaling past one box requires real work</li>
                                <li>Some managed services (auth, email, search) are still genuinely hard to replicate cleanly</li>
                                <li>Team environments get complicated fast</li>
                            </ul>
                        </div>
                    </div>

                    <p className="sh-p">
                        The key question is scale and stakes. If you&apos;re building something
                        with a team, external SLAs, or traffic that can spike unpredictably,
                        managed infrastructure earns its keep. For a solo builder running
                        internal tools, personal projects, and small client work — the math
                        has flipped. The friction cost of self-hosting has dropped faster than
                        the price of managed services has.
                    </p>

                    {/* §05 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / The temporal factor</span>
                        Self-host to find PMF, graduate when you find it
                    </h2>
                    <p className="sh-p">
                        This is the frame the managed platforms don&apos;t want you to see:
                        self-hosting isn&apos;t a permanent architectural choice — it&apos;s a
                        <strong> temporal one</strong>. You self-host during the exploration
                        phase, when unknowns outnumber users and every bottleneck is a discovery
                        signal.
                    </p>

                    <p className="sh-p">
                        The architecture tells you what breaks first. If it&apos;s compute, you
                        scale up on Hetzner or add a GPU node (like TARS did). If it&apos;s
                        concurrency, you graduate to managed. If it&apos;s team collaboration,
                        you pay for the seats. Each bottleneck reveals the next investment
                        with surgical precision — no over-engineering, no guesswork.
                    </p>

                    <p className="sh-p">
                        This approach also keeps your software <strong>loosely coupled by
                        accident</strong>. Because the natural next step when any piece outgrows
                        Hetzner is to extract it into a commercial-grade managed service. You
                        never design for extraction — it happens because the architecture was
                        simple enough to understand in the first place.
                    </p>

                    <p className="sh-closer">
                        Managed platforms solved a real problem when the alternative was painful.
                        AI has made the alternative <em>not painful</em>. The platforms haven&apos;t
                        noticed yet — their pricing still assumes you&apos;re paying for relief
                        from a burden that mostly doesn&apos;t exist anymore. Self-host to find
                        PMF. Graduate when you find it.
                    </p>

                    <footer className="sh-footer">
                        Serapio Labs · Hetzner + Caddy + Coolify + Go + Postgres
                        <div style={{ marginTop: 20 }}>
                            <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>
                                ← Back to Blog
                            </Link>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}