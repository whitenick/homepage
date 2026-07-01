"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/v2.css";

export default function TheServerStillWhispers() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
    }, []);

    const t = dark ? "dark" : "light";

    return (
        <>
            <Head>
                <title>The Server Still Whispers — Nick White</title>
                <meta
                    name="description"
                    content="The case for owning your own stack, told in two acts. First, the cultural history of physical infrastructure — from toggle switches to complexity rent to the moment AI collapsed the knowledge barrier. Then, the practical playbook: what to run, what it costs, and when to graduate."
                />
                <link rel="icon" href="/mountain.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=IBM+Plex+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <style jsx global>{`
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
                    font-family: "Newsreader", Georgia, serif;
                    font-size: 18px;
                    line-height: 1.7;
                }
                .sh-nav {
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background: var(--bg);
                    border-bottom: 1px solid var(--line);
                    padding: 14px 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .sh-nav-back {
                    color: var(--accent);
                    text-decoration: none;
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 13px;
                    letter-spacing: 0.06em;
                }
                .sh-nav-back:hover {
                    opacity: 0.75;
                }
                .sh-toggle {
                    background: none;
                    border: 1px solid var(--line);
                    color: var(--ink-dim);
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 12px;
                    padding: 4px 12px;
                    cursor: pointer;
                    border-radius: 4px;
                }
                .sh-toggle:hover {
                    border-color: var(--accent);
                    color: var(--accent);
                }
                .sh-wrap {
                    max-width: 740px;
                    margin: 0 auto;
                    padding: 40px 24px 80px;
                }
                .sh-header {
                    margin-bottom: 48px;
                }
                .sh-kicker {
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 12px;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: var(--accent);
                    margin: 0 0 12px;
                }
                .sh-h1 {
                    font-family: "Instrument Serif", Georgia, serif;
                    font-size: clamp(36px, 6vw, 62px);
                    line-height: 1.05;
                    font-weight: 400;
                    color: var(--ink-strong);
                    margin: 0 0 16px;
                }
                .sh-lede {
                    font-size: 19px;
                    line-height: 1.55;
                    color: var(--ink-dim);
                    margin: 0 0 12px;
                    max-width: 66ch;
                }
                .sh-date {
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 13px;
                    color: var(--ink-dim);
                    margin: 0;
                }
                .sh-h2 {
                    font-family: "Instrument Serif", Georgia, serif;
                    font-size: 28px;
                    line-height: 1.25;
                    font-weight: 400;
                    color: var(--ink-strong);
                    margin: 48px 0 16px;
                }
                .sh-secnum {
                    display: block;
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 13px;
                    color: var(--accent);
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    margin-bottom: 4px;
                }
                .sh-p {
                    max-width: 66ch;
                    margin: 0 0 20px;
                    color: var(--ink);
                }
                .sh-strong {
                    color: var(--ink-strong);
                    font-weight: 600;
                }
                .sh-callout {
                    border-left: 3px solid var(--accent);
                    background: var(--accent-dim);
                    padding: 16px 20px;
                    margin: 24px 0;
                    font-size: 17px;
                    line-height: 1.5;
                    color: var(--ink-strong);
                    border-radius: 0 4px 4px 0;
                }
                .sh-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 13px;
                    margin: 24px 0;
                }
                .sh-table th {
                    text-align: left;
                    padding: 8px 12px;
                    border-bottom: 1px solid var(--line);
                    color: var(--ink-dim);
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    font-size: 11px;
                }
                .sh-table td {
                    padding: 10px 12px;
                    border-bottom: 1px solid var(--line);
                    color: var(--ink);
                }
                .sh-table tr:last-child td {
                    border-bottom: none;
                }
                .sh-pros-cons {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin: 24px 0;
                }
                @media (max-width: 600px) {
                    .sh-pros-cons {
                        grid-template-columns: 1fr;
                    }
                }
                .sh-card {
                    border: 1px solid var(--line);
                    border-radius: 8px;
                    padding: 16px 20px;
                }
                .sh-card-label {
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 11px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                }
                .sh-card-label.for {
                    color: #2b8a3e;
                }
                .sh-card-label.against {
                    color: #cc4b37;
                }
                .sh-card ul {
                    margin: 0;
                    padding-left: 18px;
                    font-size: 15px;
                    line-height: 1.6;
                }
                .sh-card li {
                    margin-bottom: 4px;
                }
                .sh-stack {
                    background: var(--accent-dim);
                    border: 1px solid var(--line);
                    border-radius: 6px;
                    padding: 16px 20px;
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 13px;
                    line-height: 1.7;
                    overflow-x: auto;
                    margin: 24px 0;
                    white-space: pre;
                    color: var(--ink);
                }
                .sh-stack-dim {
                    color: var(--ink-dim);
                }
                .sh-stack-accent {
                    color: var(--accent);
                }
                .sh-divider {
                    border: none;
                    border-top: 2px solid var(--line);
                    margin: 64px 0 48px;
                }
                .sh-part-label {
                    font-family: "IBM Plex Mono", monospace;
                    font-size: 11px;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: var(--ink-dim);
                    text-align: center;
                    margin-bottom: 48px;
                }
                .sh-closer {
                    font-size: 19px;
                    line-height: 1.55;
                    color: var(--ink-strong);
                    max-width: 66ch;
                    margin: 40px 0 20px;
                    padding-top: 24px;
                    border-top: 1px solid var(--line);
                }
                .sh-footer {
                    margin-top: 48px;
                    padding-top: 24px;
                    border-top: 1px solid var(--line);
                    font-size: 14px;
                }
            `}</style>

            <div className="sh-root sh-body" data-theme={t}>
                <nav className="sh-nav">
                    <Link href="/blog" className="sh-nav-back">← Blog</Link>
                    <button className="sh-toggle" onClick={() => setDark(d => !d)}>
                        {dark ? "☀ Light" : "☾ Dark"}
                    </button>
                </nav>

                <div className="sh-wrap">
                    <header className="sh-header">
                        <p className="sh-kicker">Infrastructure · Self-Hosting</p>
                        <h1 className="sh-h1">The Server Still Whispers</h1>
                        <p className="sh-lede">
                            The case for owning your own stack, told in two acts. First, the cultural
                            history of physical infrastructure — from toggle switches to complexity
                            rent to the moment AI collapsed the knowledge barrier. Then, the practical
                            playbook: what to run, what it costs, and when to graduate.
                        </p>
                        <p className="sh-date">July 2026</p>
                    </header>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The Homebrew Computer Club</span>
                        Before there was software, there was soldering
                    </h2>
                    <p className="sh-p">
                        The Homebrew Computer Club's first meeting in 1975 was not a software demo.
                        It was a hardware show-and-tell. People brought boards they had etched
                        themselves, chips they had scavenged, power supplies salvaged from discarded
                        electronics. The Altair 8800 — the machine that launched Microsoft — was not
                        a computer as we understand the word. It was a box with toggle switches and
                        blinking lights. To program it, you flipped switches one bit at a time. The
                        reward was a pattern of LEDs.
                    </p>
                    <p className="sh-p">
                        And this was thrilling. Not because the machine was powerful — it was barely
                        functional — but because it was <strong className="sh-strong">yours</strong>.
                        You bought the chips, you wired the bus, you debugged the timing with a logic
                        probe. The machine answered only to you because you had assembled it with your
                        own hands. That feeling — the directness of the relationship between a person
                        and a machine they built — is the thread that runs through every era of
                        computing that mattered.
                    </p>
                    <p className="sh-p">
                        This is where the culture started, and it was a culture of physical making.
                        The Homebrew Club produced Apple not because Wozniak had a brilliant software
                        insight, but because he had designed a board so elegant and complete that it
                        reduced a room of discrete chips to a single PCB. The revelatory moment was
                        not a new program — it was a new piece of hardware that made computing
                        affordable enough to put on your desk.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / The BBS and the Bedroom Server</span>
                        The machine in the closet is older than the data center
                    </h2>
                    <p className="sh-p">
                        By the 1980s, the personal computer had become something new: a node. The BBS
                        era was the first great wave of people running servers out of their homes. A
                        teenager with a Commodore 64, a 300-baud modem, and a second phone line could
                        become an island of connection. Their machine would ring at all hours.
                        Strangers would upload files, leave messages, play games. The server lived in
                        a bedroom, or a basement, or a closet. You could hear it when it was working
                        — the clicks of the hard drive, the whine of the fan, the modem handshake
                        screech.
                    </p>
                    <p className="sh-p">
                        This was not professional infrastructure. It was a tower under a desk running
                        24/7, getting hot, gathering dust, and somehow connecting a neighborhood of
                        strangers into something real. The hardware was not abstract. It was a machine
                        in your room that made the outside world arrive through a wire you had screwed
                        into the wall jack yourself.
                    </p>
                    <p className="sh-p">
                        The warez scene grew out of this same material culture. The groups that traded
                        cracked software and competed on speed runs were not organized through
                        platforms. They organized through private BBS nodes, then FTP servers on
                        rented colocation space, then IRC channels on servers running out of someone's
                        apartment. If you wanted to be a "top site," you needed a T1 line — which
                        meant you needed money, or access, or both. The guys with the hardware were
                        the guys who set the rules. The server was not a metaphor. It was a box in
                        someone's basement that you could, if you knew the right people, go and touch.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / Colocation</span>
                        Racking your own iron in a building full of other people's
                    </h2>
                    <p className="sh-p">
                        By the early 2000s, the bedroom server had a bigger sibling: colocation. You
                        rented a half-rack in a building full of other people's racks. You drove there
                        with a server in your passenger seat, signed in at the front desk, and wheeled
                        your box through a hallway lined with cages. The sound hit you first — a low
                        roar of thousands of fans. The cold air hit you second.
                    </p>
                    <p className="sh-p">
                        Racking a server in a colo facility is one of the most underrated experiences
                        in technology. You slide the rails in. You tighten the screws. You plug in
                        power — redundant, two PSUs. You plug in Ethernet — also redundant. You
                        cable-manage because you have standards. And then you step back and look at
                        your machine, one of hundreds, and you know that it is yours. The blinking
                        light on the front panel — the one that tells you the drive is active — that
                        light is responding to code you wrote.
                    </p>
                    <p className="sh-p">
                        This was never a cost-optimal choice. People did it because they wanted to
                        touch their infrastructure. They wanted to be in the same room as the machine
                        that served their users. They wanted the ritual of the drive to the datacenter,
                        the security badge, the cold aisle, the blinking lights. That ritual was not
                        overhead. It was the point.
                    </p>
                    <div className="sh-callout">
                        Every datacenter has a moment of silence when the cage door closes behind you
                        and you hear your own server above the roar. That sound is not useful. It is
                        not measurable. It is the art of infrastructure.
                    </div>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / The SaaS Deal</span>
                        Complexity was the moat. Subscription was the toll.
                    </h2>
                    <p className="sh-p">
                        Somewhere in the migration from colo to cloud, the relationship flipped. The
                        cloud sold itself as efficiency — no more provisioning hardware, no more
                        patching OSes, no more worrying about power and cooling. But the real product
                        was complexity rent. The unspoken premise was: <strong className="sh-strong">you can't do this yourself, so pay us</strong>.
                    </p>
                    <p className="sh-p">
                        The SaaS model took that premise and industrialized it. Postgres administration
                        was a skill. TLS configuration was a skill. Load balancing, reverse proxying,
                        storage replication — every layer of the stack was a frontier that required
                        months or years to cross. The people who had crossed it charged a toll. Monthly.
                        Per seat. Per request. Per GB. And because the alternative was doing it yourself
                        — which was genuinely hard — you paid.
                    </p>
                    <p className="sh-p">
                        This produced a structural outcome that nobody talked about: the tenant
                        relationship. Every subscription you paid meant someone else owned the keys.
                        Someone else stored your data. Someone else decided what the next version would
                        cost. You were a renter in your own stack. And because the complexity was real,
                        the rent felt fair. For a long time, it was.
                    </p>
                    <p className="sh-p">
                        The subscription economy doesn't just take your money. It shapes your behavior.
                        When every tool is a monthly payment, you stop asking "Do I need this?" — you
                        just let the auto-pay run. The cost becomes invisible. That's the real lock-in,
                        not the API key.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / The Moat Drains</span>
                        What happens when infrastructure costs a prompt
                    </h2>
                    <p className="sh-p">
                        The premise that held for thirty years — that infrastructure requires deep,
                        scarce knowledge — has a hole in it now.
                    </p>
                    <p className="sh-p">
                        A working Postgres config with Caddy reverse proxy, Tailscale auth, automated
                        backups, and a health-check endpoint used to be a week of reading and a hundred
                        Stack Overflow tabs. Today it is a single prompt. AI doesn't just help with
                        the config files — it explains the architecture decisions, handles the edge
                        cases, and debugs the connection string when something doesn't resolve.
                    </p>
                    <p className="sh-p">
                        This changes the economics fundamentally. The barrier to running your own
                        infrastructure was never the cost of the hardware — a Hetzner AX102 is $38/month
                        and is more machine than most teams of ten would need. The barrier was the
                        knowledge. The barrier was knowing how to wire the thing together well enough
                        to trust it with your data.
                    </p>
                    <p className="sh-p">
                        That barrier is gone. Or, more precisely, it has been reduced to a vanishing
                        thin layer: you still need to <strong className="sh-strong">want</strong> to
                        learn. But the gulf between wanting and doing collapsed the day models could
                        generate, explain, and debug a full infrastructure stack in natural language.
                    </p>
                    <div className="sh-callout">
                        The question is no longer "can I run it myself?" The question is "why wouldn't
                        I?" And the only honest answer is: because I don't want to. Which is fine. But
                        it's no longer because I can't. That change is tectonic.
                    </div>

                    <hr className="sh-divider" />
                    <p className="sh-part-label">— Part Two: The Playbook —</p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / The Cost Argument</span>
                        The bill doesn't scale with you
                    </h2>
                    <p className="sh-p">
                        A few years ago the pitch for managed platforms was obvious. You skip the
                        server, skip the sysadmin work, and ship faster. For a solo builder that
                        trade-off made sense when the first $20 was free and everything lived on a
                        hobby tier.
                    </p>
                    <p className="sh-p">
                        That era is over. Vercel's hobby tier cuts off commercial use. Railway charges
                        per-minute for compute that idles most of the day. Supabase is generous at zero
                        but punishing the moment you need a second project or real connection pooling.
                        The pattern is the same everywhere: growth thresholds are engineered to trigger
                        exactly when a project gets interesting, and the jump to the next tier is steep.
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
                                <td>Production compute</td>
                                <td>Hetzner CX42 (4 vCPU, 15 GB RAM)</td>
                                <td>~$24–32/mo</td>
                            </tr>
                            <tr>
                                <td>Entry compute</td>
                                <td>Hetzner CAX11 (2 vCPU, 4 GB RAM)</td>
                                <td>~$6–12/mo</td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>Postgres 17 on same box</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td>Reverse proxy + TLS</td>
                                <td>Caddy (auto-cert, zero maintenance)</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td>CDN / proxy</td>
                                <td>Cloudflare free tier</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td>Deployment</td>
                                <td>Coolify (containers) + systemd (binaries)</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td>LLM inference</td>
                                <td>Ollama (CPU + GPU worker via Tailscale)</td>
                                <td>$0</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="sh-p">
                        The math isn't subtle. For a side project or small internal tool, you are
                        paying a convenience tax on infrastructure you could own outright for a
                        fraction of the cost. The question stopped being "is it worth setting up a
                        server" and became "what exactly am I buying with that premium."
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">07 / The AI Argument</span>
                        The ops tax has mostly disappeared
                    </h2>
                    <p className="sh-p">
                        The honest reason self-hosting fell out of fashion wasn't just laziness — it
                        was cognitive overhead. Nginx configs you had to look up every time. systemd
                        unit files that felt like black magic. TLS renewal, ufw rules, zero-downtime
                        deploys, Postgres tuning. If you weren't a sysadmin by trade, you lost a
                        weekend every time something went sideways.
                    </p>
                    <p className="sh-p">
                        AI changes this in a specific and underrated way: it doesn't make you a
                        sysadmin, it makes it so you don't need to be one. Caddy reverse proxy with
                        automatic TLS, SPA fallback, and API proxying? One prompt. Docker Compose
                        with proper networking, restart policy, and environment variables? One prompt.
                        ufw rules, migration tooling — all of it is one conversation away and
                        immediately correct for your exact setup.
                    </p>
                    <p className="sh-p">
                        More importantly, debugging is faster too. When something breaks at 2 AM,
                        you have a competent ops co-pilot who knows your stack, can read your
                        journalctl output, and will walk you through the fix. The old asymmetry —
                        managed platforms never break in ways you have to fix, self-hosted breaks in
                        ways that cost you hours — has narrowed dramatically.
                    </p>
                    <p className="sh-p">
                        The inflection point isn't that AI writes your app. It's that AI has made the
                        operational layer — the part that used to eat weekends — cheap enough to be
                        irrelevant.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">08 / What It Actually Looks Like</span>
                        One box, pragmatic stack
                    </h2>
                    <p className="sh-p">
                        For Serapio Labs the stack is deliberately boring — the boring choices are
                        the ones that survive contact with reality. A single Hetzner VPS runs the
                        core: Postgres 17 on port 5433 for separation, Caddy as the reverse proxy
                        with built-in automatic TLS, service containers where they make sense and
                        systemd binaries where they don't. Tailscale is the backbone, not a footnote.
                        Cloudflare sits in front for DDoS protection and caching, but it's a
                        one-checkbox upgrade, not a prerequisite.
                    </p>
                    <div className="sh-stack">
Internet → Cloudflare (optional edge layer)
<template className="sh-stack-dim"> │</template>
 → Caddy · auto-TLS (built-in Let's Encrypt)
<template className="sh-stack-dim"> │</template>
 ├── yourapp.lab → React static build
 ├── /api/* → Go binary · systemd unit
 ├── open-webui → Docker · Coolify deploy
 ├── qdrant → Docker · Coolify deploy
 └── Postgres 17 · port 5433 (tuned for 15 GB RAM)
                    </div>
                    <p className="sh-p">
                        Deployment is a mix: Coolify handles the containerized services (Open WebUI,
                        Qdrant, LiteLLM), systemd handles the compiled Go binaries. The choice isn't
                        ideological — Postgres as a container adds complexity you don't need, but
                        managing Qdrant and Open WebUI as raw processes would be genuinely harder.
                    </p>
                    <p className="sh-p">
                        And then there's TARS — the distributed LLM inference cluster at
                        tars.serapiolabs.com. The Hetzner VPS hosts the control plane: Caddy, Open
                        WebUI, Qdrant vector memory, and a CPU-bound Ollama instance running
                        qwen2.5:7b. A Windows PC with an RTX 3060 12 GB acts as the GPU worker,
                        serving qwen2.5:14b over Tailscale. It's the same thesis pushed further:
                        one compute layer that works, distributed only where the bottleneck demands
                        it.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">09 / The Honest Case Against</span>
                        When you should still pay for managed
                    </h2>
                    <p className="sh-p">
                        Self-hosting isn't always right. The case for managed platforms doesn't
                        disappear — it narrows.
                    </p>

                    <div className="sh-pros-cons">
                        <div className="sh-card">
                            <p className="sh-card-label for">For Self-Hosting</p>
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
                                <li>Backups, monitoring, and alerting are now your problem</li>
                                <li>Scaling past one box requires real work</li>
                                <li>Some managed services (auth, email, search) are still hard to replicate cleanly</li>
                                <li>Team environments get complicated fast</li>
                            </ul>
                        </div>
                    </div>

                    <p className="sh-p">
                        The key question is scale and stakes. If you're building something with a
                        team, external SLAs, or traffic that can spike unpredictably, managed
                        infrastructure earns its keep. For a solo builder running internal tools,
                        personal projects, and small client work — the math has flipped.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">10 / The Temporal Factor</span>
                        Self-host to find PMF, graduate when you find it
                    </h2>
                    <p className="sh-p">
                        This is the frame the managed platforms don't want you to see: self-hosting
                        isn't a permanent architectural choice — it's a temporal one. You self-host
                        during the exploration phase, when unknowns outnumber users and every
                        bottleneck is a discovery signal.
                    </p>
                    <p className="sh-p">
                        The architecture tells you what breaks first. If it's compute, you scale up
                        on Hetzner or add a GPU node. If it's concurrency, you graduate to managed.
                        If it's team collaboration, you pay for the seats. Each bottleneck reveals
                        the next investment with surgical precision — no over-engineering, no
                        guesswork.
                    </p>
                    <p className="sh-p">
                        This approach also keeps your software loosely coupled by accident. Because
                        the natural next step when any piece outgrows Hetzner is to extract it into
                        a commercial-grade managed service. You never design for extraction — it
                        happens because the architecture was simple enough to understand in the first
                        place.
                    </p>
                    <div className="sh-callout">
                        Managed platforms solved a real problem when the alternative was painful. AI
                        has made the alternative not painful. The platforms haven't noticed yet —
                        their pricing still assumes you're paying for relief from a burden that mostly
                        doesn't exist anymore. Self-host to find PMF. Graduate when you find it.
                    </div>

                    <p className="sh-closer">
                        The server still whispers. You just have to be in the room to hear it.
                    </p>

                    <footer className="sh-footer">
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
