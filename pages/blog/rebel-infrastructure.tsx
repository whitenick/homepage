"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/v2.css";

export default function RebelInfrastructure() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
    }, []);

    const t = dark ? "dark" : "light";

    return (
        <>
            <Head>
                <title>Rebel Infrastructure — Nick White</title>
                <meta
                    name="description"
                    content="Before the cloud became a mall, building tech felt like cyberpunk. Bare metal, SSH, your own rack in a datacenter. That edge is still alive — and it&apos;s where the real innovation still happens."
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
                        <p className="sh-kicker">Infrastructure · Ethos</p>
                        <h1 className="sh-h1">
                            The server still whispers<br />
                            <em>and you should listen</em>
                        </h1>
                        <p className="sh-lede">
                            Before AI, before the cloud was a mall, building tech felt
                            like cyberpunk. SSH&apos;ing into a bare-metal box in a
                            datacenter. Wiring Caddy to Postgres on a machine you provisioned
                            yourself. A NAS in the closet running your own media, your own
                            backups, your own VPN into your own mesh. That feeling isn&apos;t
                            nostalgia — it&apos;s a signal. The edge that was cool then is
                            still the edge now. Maybe more than ever.
                        </p>
                        <p className="sh-date">June 2026</p>
                    </header>

                    {/* §01 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The feeling that&apos;s hard to name</span>
                        Cyberpunk was never the aesthetic
                    </h2>
                    <p className="sh-p">
                        There was a moment — maybe 2008 through 2016, maybe it started
                        earlier and has no clean edge — when building your own infrastructure
                        carried a charge that was almost aesthetic. You SSH&apos;d into a
                        rented server in some nondescript datacenter and you <strong>owned</strong>
                        that machine. No dashboard. No abstraction. Just you, a shell,
                        and whatever you chose to put on that bare-metal heart. It felt like
                        hacking the world because in a small way, it was.
                    </p>

                    <p className="sh-p">
                        The cyberpunk novels got the <strong>feeling</strong> right even when
                        they got the technology wrong. The core of that genre was never neon
                        streets and chrome implants. It was the idea that
                        <strong> owning the infrastructure was an act of rebellion</strong>.
                        The megacorp owned the grid, but you built your own node. The system
                        wanted passive consumers, but you built a server. That distinction
                        mattered. It still does.
                    </p>

                    <div className="sh-callout">
                        The feeling of wiring a machine to the internet and having it
                        respond to you — not through a dashboard, not through a vendor
                        portal, but <em>because you decided what runs on it</em> — is
                        the same feeling that made the web interesting in the first place.
                        It is the feeling of <strong>agency</strong>.
                    </div>

                    <p className="sh-p">
                        This is not nostalgia for a golden age. It is noticing that something
                        real has been systematically removed from the experience of building
                        tech — and that removal was sold to us as progress.
                    </p>

                    {/* §02 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / The SaaS deal</span>
                        You gave up agency for convenience
                    </h2>
                    <p className="sh-p">
                        Nobody forced anyone onto managed platforms. The trade was real and
                        it was often good. You bypassed sysadmin work that felt like drudgery
                        — nginx configs, yum updates, Postgres WAL tuning, TLS renewal cron
                        jobs, iptables rules that you copy-pasted from a half-remembered blog
                        post. In exchange you paid a premium, and for most builders that was a
                        clear win.
                    </p>

                    <p className="sh-p">
                        But the trade wasn&apos;t neutral. Every SaaS subscription you signed
                        up for was a small transfer of <strong>control</strong>. You stopped
                        knowing how your database was tuned. You stopped knowing how your
                        authentication flowed. You stopped knowing what happened to your data
                        after it left your network. Each transfer felt trivial. Collectively
                        they rewired the relationship between builder and infrastructure.
                    </p>

                    <p className="sh-strong">
                        The act of building shifted from construction to assembly. From
                        engineering to procurement.
                    </p>

                    <p className="sh-p">
                        That shift had consequences beyond cost. It changed who gets to call
                        themselves a builder. When infrastructure is a credit card swipe, the
                        bar is lowered — but the ceiling is too. The people who understand how
                        things actually work, who can reach past the dashboard into the machine
                        itself, became a smaller and smaller minority. The knowledge became
                        specialized, then rare, then almost folkloric.
                    </p>

                    <div className="sh-callout">
                        The most radical thing you can do in 2026 is own your stack.
                        Not because it&apos;s cheaper — though it often is — but because
                        <em>knowing</em> how your system works is a kind of power that
                        subscription models are designed to make you forget you ever had.
                    </div>

                    {/* §03 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / The cyberpunk edge was never about tech</span>
                        It was about who holds the keys
                    </h2>
                    <p className="sh-p">
                        What was actually cool about building pre-SaaS was not the technology.
                        It was the <strong>relationship to power</strong>. You decided where
                        your data lived. You chose the database. You wrote the migration scripts.
                        You knew, because you had to know, the exact path from a user&apos;s
                        request to the disk sector that stored their data. That knowledge was
                        not abstract — it was lived.
                    </p>

                    <p className="sh-p">
                        When you SSH into a box and run <code>htop</code>, you see your
                        machine breathing. Memory pressure, swap activity, load averages —
                        these are not dashboard abstractions. They are the actual behavior of
                        silicon responding to your code. That direct relationship between
                        intent and infrastructure is what the SaaS model dissolves.
                    </p>

                    <p className="sh-p">
                        The cyberpunk ethos was never about having the newest hardware. It was
                        about <strong>knowing the system well enough to bend it</strong>.
                        That same ethos lives today in anyone who runs their own Postgres
                        instead of clicking &ldquo;create database&rdquo;. Anyone who wires
                        Tailscale into their home network instead of paying for a VPN
                        subscription. Anyone who runs Ollama on their own GPU instead of
                        paying per-token for an API. These are not technical decisions — they
                        are <strong>political</strong> ones. They say: I hold my own keys.
                    </p>

                    {/* §04 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / The AI surprise</span>
                        It doesn&apos;t kill the edge — it sharpens it
                    </h2>
                    <p className="sh-p">
                        A reasonable person might ask: if AI can now write your nginx config,
                        debug your Postgres connection pool, and generate your Docker Compose
                        file in a single prompt — doesn&apos;t that remove the last reason to
                        touch bare metal? Hasn&apos;t the operating system been abstracted into
                        irrelevance?
                    </p>

                    <p className="sh-p">
                        The exact opposite is happening. AI makes the operational layer
                        <strong> cheap enough to ignore</strong> — and when ops friction
                        disappears, the remaining barrier is purely one of
                        <strong> will</strong>. If you want to own your stack, the cost of
                        that ownership has never been lower. AI writes your Caddyfile, debugs
                        your Docker network, tunes your Postgres, and walks you through your
                        firewall rules at 2am. The ops tax that made SaaS look attractive is
                        mostly gone.
                    </p>

                    <div className="sh-callout">
                        Before AI, the choice was between paying money or paying time. AI
                        collapsed the time cost. The only question left is: <em>do you want
                        to own your stack or rent it?</em>
                    </div>

                    <p className="sh-p">
                        The builders who <strong>still</strong> run their own infrastructure
                        in 2026 are not Luddites. They are the ones who understand that the
                        deepest insights come from living inside the system, not on top of it.
                        They use AI to move faster — not to outsource understanding. That
                        distinction matters.
                    </p>

                    <p className="sh-p">
                        And something interesting is happening on the edges. The most
                        interesting projects in the AI ecosystem — local-first LLMs,
                        custom RAG pipelines, personal knowledge graphs, privacy-preserving
                        inference — all require infrastructure that the managed market
                        doesn&apos;t serve well. They require bare metal (or near enough).
                        They require you to own the machine. The cyberpunk edge has found
                        a new reason to exist.
                    </p>

                    <table className="sh-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>SaaS version</th>
                                <th>Rebel version</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>LLM inference</td>
                                <td>OpenAI / Anthropic API</td>
                                <td className="accent">Ollama on your own GPU</td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>Supabase / Neon</td>
                                <td className="accent">Postgres on a Hetzner box</td>
                            </tr>
                            <tr>
                                <td>Reverse proxy</td>
                                <td>Vercel / Cloudflare Workers</td>
                                <td className="accent">Caddy + auto-TLS by hand</td>
                            </tr>
                            <tr>
                                <td>Media storage</td>
                                <td>S3 bucket (per-request billing)</td>
                                <td className="accent">NAS in the closet</td>
                            </tr>
                            <tr>
                                <td>Network</td>
                                <td>VPN subscription</td>
                                <td className="accent">Tailscale mesh + WireGuard</td>
                            </tr>
                            <tr>
                                <td>Automation</td>
                                <td>Zapier / Make</td>
                                <td className="accent">n8n on your own infra</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* §05 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / What it looks like in practice</span>
                        A $10 box, a Tailscale key, and a philosophy
                    </h2>
                    <p className="sh-p">
                        The rebel stack in 2026 is not expensive. It is not hard to set up.
                        AI has made it boringly easy. What it requires is a decision about
                        what kind of relationship you want with the systems you build.
                    </p>

                    <p className="sh-p">
                        A single Hetzner CAX11 — two vCPUs, 4 GB RAM, 40 GB SSD, $6/mo — is
                        enough to run Postgres, Caddy, n8n, a Go service, and Ollama on CPU.
                        Tailscale connects your laptop, your phone, your GPU box at home, and
                        your VPS into a single mesh. You manage it through an SSH key and a
                        mental model of the whole system. No dashboard. No surprise bills.
                        No rate limits.
                    </p>

                    <div className="sh-stack">
Your closet NAS <span>───</span> Tailscale <span>───</span> Hetzner VPS ($6/mo){"\n"}
    {"                         │"}{"\n"}
    {"    ┌────────────────────┼────────────────────┐"}{"\n"}
    {"    │                    │                    │"}{"\n"}
Caddy reverse proxy    Postgres 17          Ollama (CPU){"\n"}
    {"    │"} (auto-TLS + SPA)    │ (your data)        │ (local models){"\n"}
    {"    │"}                    │                    │{"\n"}
n8n automations     Qdrant vectors     RTX 3060 node{"\n"}
(no Zapier bill)    (private RAG)      (via Tailscale)
                    </div>

                    <p className="sh-p">
                        Every piece of that stack is something you understand because you
                        placed it there. When something breaks — and it will — you know where
                        to look. When you want to add something new — an LLM agent, a
                        vector store, a queue — you know where it fits. That knowledge is
                        not overhead. It is <strong>ownership</strong>.
                    </p>

                    <p className="sh-p">
                        And here is the part that the managed platform marketing doesn&apos;t
                        want you to know: this stack is not just cheaper and more liberating.
                        It is <strong>where new ideas happen</strong>. The people tinkering
                        with local RAG pipelines on their own hardware are the ones finding
                        the next thing. The people tunneling Ollama across a Tailscale mesh
                        are the ones discovering what &ldquo;agent swarms&rdquo; actually mean
                        in practice. The people running their own Postgres are the ones who
                        know what their query planner is doing — and when it should do
                        something different.
                    </p>

                    <div className="sh-callout">
                        Innovation does not happen in dashboards. It happens at the boundary
                        between what you know and what you can make the machine do. That
                        boundary is closest to the metal.
                    </div>

                    {/* §06 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / The edge you&apos;re looking for</span>
                        It&apos;s the same one that was always there
                    </h2>
                    <p className="sh-p">
                        I don&apos;t mean this as a prescription. You don&apos;t need to
                        self-host everything. Some managed services solve real problems —
                        email delivery, CDN, authentication — and using them is not surrender.
                        The point is not purity.
                    </p>

                    <p className="sh-p">
                        The point is that <strong>the coolest thing about building tech was
                        never the technology</strong>. It was the act of making something
                        yours. Of understanding the system deeply enough to shape it. Of
                        holding your own keys and knowing where the edges are.
                    </p>

                    <p className="sh-p">
                        SaaS and managed platforms have done enormous good. They&apos;ve let
                        more people build than ever before. But they have also flattened the
                        experience of building into something transactional. You sign up. You
                        swipe. You integrate. You ship. The cyberpunk edge — the feeling of
                        being inside the machine, of knowing it from the kernel up — is
                        harder to find.
                    </p>

                    <p className="sh-p">
                        But it&apos;s still there. It&apos;s in every person who runs their
                        own Postgres instead of signing up for another database-as-a-service.
                        It&apos;s in every person who wires Ollama to a GPU in their bedroom
                        instead of paying per-token. It&apos;s in the NAS in the closet, the
                        Tailscale mesh, the handwritten Caddyfile, the n8n instance that
                        replaced three SaaS subscriptions.
                    </p>

                    <p className="sh-p">
                        The edge moves, but it never goes away. Right now it&apos;s in the
                        gap between what the platforms offer and what you can build yourself.
                        That gap is where the interesting stuff lives. It always was.
                    </p>

                    <p className="sh-closer">
                        The cloud, the AI APIs, the managed-everything stack — they are
                        comfortable. They are the blue pill. The red pill is a single VPS,
                        a Tailscale key, and the decision to <em>know</em> your system
                        instead of renting it. The door is still there. You already know
                        which one leads deeper.
                    </p>

                    <footer className="sh-footer">
                        Infrastructure · DIY · Cyberpunk
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
