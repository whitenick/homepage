"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/v2.css";

export default function LatencyGlobalMarkets() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
    }, []);

    const t = dark ? "dark" : "light";

    return (
        <>
            <Head>
                <title>The Geography of Milliseconds — Nick White</title>
                <meta
                    name="description"
                    content="As compression of latency shrinks the effective distance between you and any server on earth, global markets for compute are opening up. For solo devs who can tolerate a few extra milliseconds, the arbitrage is enormous."
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
                        <p className="sh-kicker">Infrastructure · Markets</p>
                        <h1 className="sh-h1">The Geography of Milliseconds</h1>
                        <p className="sh-lede">
                            The effective distance between you and any server on earth is measured in
                            milliseconds, not miles. As that latency compresses, global markets for
                            compute open up. The solo developer who can tolerate 80ms of delay has
                            access to prices that the hyperscale tenant will never see.
                        </p>
                        <p className="sh-date">July 2026</p>
                    </header>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The Map Is Not the Territory</span>
                        What distance actually costs
                    </h2>
                    <p className="sh-p">
                        The naive view of internet geography is that you rent a server where your
                        users are. West Coast US app? Deploy to us-west-2. European customers? Use
                        Frankfurt. This is the hyperscaler model, and it is optimized for one thing:
                        getting the last five milliseconds off a page load.
                    </p>
                    <p className="sh-p">
                        That optimization comes at a premium. AWS's us-east-1 is the most expensive
                        compute region on the planet because it serves the largest concentration of
                        latency-sensitive traffic on earth. Every millisecond matters in Manhattan,
                        so Manhattan-adjacent compute commands Manhattan-adjacent pricing.
                    </p>
                    <p className="sh-p">
                        But here is the thing that changes everything: <strong className="sh-strong">the map
                        of what a millisecond costs is not the same as the map of what compute costs.</strong>
                        A cycle in Frankfurt costs roughly the same as a cycle in São Paulo if you are
                        buying from the same provider. But a cycle from a hyperscaler in any region
                        costs 3–5x a cycle from a smaller provider in that same building.
                    </p>
                    <div className="sh-callout">
                        The premium you pay on AWS or GCP is not a compute premium. It is a
                        convenience premium — the price of not having to care about where your compute
                        lives. The moment you start caring, you can cut your bill by 60–80%.
                    </div>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / The Latency Arbitrage</span>
                        Why 80ms is the new zero
                    </h2>
                    <p className="sh-p">
                        Here is the realization that unlocked this for me. My personal applications
                        are not trading platforms. They are not real-time multiplayer games. They are
                        not voice or video. They are things like: a blog, an agent orchestrator, a
                        file server, a build runner, a background job queue. Every single one of them
                        works fine at 80ms round-trip. Most work fine at 200ms.
                    </p>
                    <p className="sh-p">
                        The user does not notice 80ms. The page loads. The API responds. The job
                        completes. The only people who care about sub-20ms latency are high-frequency
                        traders, live event streaming platforms, and multiplayer shooter games. That
                        is a set of use cases. It is not the universe.
                    </p>
                    <p className="sh-p">
                        Once you accept that 80ms is fine, the effective map of the earth shrinks to
                        the radius of anything within ~3000 miles of a major peering point. That
                        opens up a lot of territory.
                    </p>

                    <table className="sh-table">
                        <thead>
                            <tr>
                                <th>From</th>
                                <th>To</th>
                                <th>Round-trip</th>
                                <th>Cost per vCPU/mo</th>
                                <th>vs. us-east-1</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Austin, TX</td>
                                <td>us-east-1 (AWS)</td>
                                <td>~25ms</td>
                                <td>~$34 (t3.medium)</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>Austin, TX</td>
                                <td>Nuremberg (Hetzner)</td>
                                <td>~110ms</td>
                                <td>~$8 (AX102)</td>
                                <td>-76%</td>
                            </tr>
                            <tr>
                                <td>Austin, TX</td>
                                <td>Helsinki (Hetzner)</td>
                                <td>~120ms</td>
                                <td>~$5 (CX32)</td>
                                <td>-85%</td>
                            </tr>
                            <tr>
                                <td>Austin, TX</td>
                                <td>Bangalore (any)</td>
                                <td>~250ms</td>
                                <td>~$12 (mid-tier)</td>
                                <td>-65%</td>
                            </tr>
                            <tr>
                                <td>Austin, TX</td>
                                <td>Johannesburg (OVH)</td>
                                <td>~280ms</td>
                                <td>~$10 (mid-tier)</td>
                                <td>-71%</td>
                            </tr>
                            <tr>
                                <td>Austin, TX</td>
                                <td>Ashburn (DO)</td>
                                <td>~30ms</td>
                                <td>~$24 (droplet)</td>
                                <td>-29%</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="sh-p">
                        The table is not perfectly precise — prices fluctuate, bandwidth costs differ,
                        and Hetzner's ARM offering is even cheaper. But the shape is real. A vCPU in
                        Helsinki costs a fifth of what it costs in Virginia. The latency penalty for
                        a US-based user is roughly 100ms.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / The Infrastructure Stack</span>
                        How to build around geography
                    </h2>
                    <p className="sh-p">
                        The objection is always the same: "But what about egress costs? What about
                        network reliability? What about latency for dynamic content?"
                    </p>
                    <p className="sh-p">
                        These are real concerns. They are also solvable.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">Egress.</strong> Hetzner charges ~1€/TB for
                        outbound traffic beyond 20TB. AWS charges ~$0.09/GB. That is a 45x difference.
                        If your application is bandwidth-heavy, the egress savings alone can justify
                        the latency trade. And if you are serving static content, Cloudflare or
                        Bunny CDN in front of a foreign origin solves the last-mile problem entirely.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">Network reliability.</strong> Hetzner's
                        Nuremberg and Helsinki data centers have better peering with the US east
                        coast than most people realize. I have run production workloads on a $10/mo
                        Hetzner box for three months. Zero downtime. Full SSH session latency of
                        ~100ms — noticeable, but not prohibitive for anything except interactive
                        terminal work.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">Dynamic content.</strong> If your app has a
                        database behind it, the limiting factor is rarely the network hop. It is the
                        query time. An API that takes 50ms to compute and returns 10KB of JSON does
                        not care whether the server is 30ms or 120ms away. The request takes 160ms
                        instead of 80ms. The user does not notice.
                    </p>

                    <div className="sh-stack"><span className="sh-stack-dim"># A stack that works great across continents</span>
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│ Cloudflare   │────▶│ Hetzner      │────▶│ Postgres    │
│ CDN + DNS    │     │ (Helsinki)   │     │ + Redis     │
│ (edge cache) │     │ (€10/mo)     │     │ (local)     │
└─────────────┘     └──────────────┘     └─────────────┘
       │                    │
       │                    │
       ▼                    ▼
User in Austin       User in Europe
~25ms to CF          ~5ms to server
~110ms upstream      direct</div>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / The Market That Is Opening</span>
                        Latency compression as a trade liberalizer
                    </h2>
                    <p className="sh-p">
                        There is a deeper structural shift here that goes beyond personal hosting
                        choices. The compression of latency is acting as a form of trade
                        liberalization for the compute market.
                    </p>
                    <p className="sh-p">
                        Historically, distance created friction in the following way: the further a
                        server was from its users, the higher the latency, and the worse the
                        experience. That friction acted as a natural tariff wall, protecting local
                        providers from foreign competition. If you were building an app for US users,
                        you had to use US data centers. If you were in Europe, you used European
                        ones. The market was naturally balkanized.
                    </p>
                    <p className="sh-p">
                        What has changed is not the physics of light through fiber. It is the
                        <strong className="sh-strong"> tolerance budget</strong> of modern
                        applications. As applications have shifted from real-time interactivity to
                        asynchronous, agent-driven, and batch-oriented architectures, the latency
                        budget has expanded. A Slack notification can arrive 200ms late without
                        anyone caring. An AI agent's response can take two seconds. A CI/CD pipeline
                        trigger can wait five seconds.
                    </p>

                    <div className="sh-callout">
                        The hyperscalers built their moats on latency. When applications no longer
                        require sub-50ms response times, that moat becomes a canal — still a
                        barrier, but one you can swim across with a good CDN and a credit card.
                    </div>

                    <p className="sh-p">
                        The result is a genuinely global compute market for the first time. A solo
                        developer in Austin can provision VMs in Helsinki, run databases in
                        Nuremberg, and cache through Cloudflare edges in 330 cities — and pay less
                        than the cost of a single AWS t3.medium in us-east-1. The effective price
                        of compute is converging globally because the latency penalty for buying
                        from a distant provider is converging on zero for an increasingly large
                        class of workloads.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / The Real Constraint</span>
                        Egress and regulatory lock-in
                    </h2>
                    <p className="sh-p">
                        If latency is the first-order constraint that is weakening, egress pricing
                        and data residency regulation are the second-order constraints that are only
                        starting to bend.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">Egress.</strong> The incumbents charge
                        egress margins that are purely rent-seeking. AWS egress is ~$0.09/GB.
                        Hetzner is ~$0.001/GB. The difference is not a cost difference — it is a
                        switching cost. The hyperscalers know that once your data is in their S3
                        bucket, moving it costs more than keeping it there. The European Data Act
                        is beginning to chip away at this by mandating data portability and fair
                        pricing. But as of 2026, egress still represents the most effective lock-in
                        mechanism in the industry.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">Regulatory lock-in.</strong> GDPR, data
                        sovereignty requirements, and financial services regulations all create
                        artificial boundaries in the compute market. If your data must stay in the
                        EU, you cannot buy compute in South Africa, even if it is cheaper. These
                        constraints are real and will not disappear. But they are bounded — they
                        create boundaries, not a general restriction on global arbitrage.
                    </p>
                    <p className="sh-p">
                        The practical reality for most solo developers and small teams is that
                        regulatory constraints are a non-issue. Your user data is wherever you put
                        it. Your application code does not care about GDPR residency unless you are
                        processing PII in a specific jurisdiction. For the personal projects,
                        side hacks, and small SaaS apps that drive most innovation on the internet,
                        these constraints do not apply.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / The Personal Calculation</span>
                        What I run, where, and why
                    </h2>
                    <p className="sh-p">
                        Here is the concrete personal setup that made me write this post, because
                        the theory matters less than the monthly bill.
                    </p>

                    <table className="sh-table">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Provider</th>
                                <th>Location</th>
                                <th>Latency (from US)</th>
                                <th>Monthly</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Agent orchestrator</td>
                                <td>Hetzner VPS</td>
                                <td>Helsinki</td>
                                <td>~120ms</td>
                                <td>~$10</td>
                            </tr>
                            <tr>
                                <td>Personal site + blog</td>
                                <td>Cloudflare Pages</td>
                                <td>Edge</td>
                                <td>~5ms</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td>File server + build runners</td>
                                <td>Hetzner VPS</td>
                                <td>Nuremberg</td>
                                <td>~110ms</td>
                                <td>~$12</td>
                            </tr>
                            <tr>
                                <td>Postgres + Redis</td>
                                <td>Hetzner dedicated</td>
                                <td>Helsinki</td>
                                <td>~120ms</td>
                                <td>~$35</td>
                            </tr>
                            <tr>
                                <td>Monitoring + alerting</td>
                                <td>Hetzner VPS</td>
                                <td>Helsinki</td>
                                <td>~120ms</td>
                                <td>~$5</td>
                            </tr>
                            <tr>
                                <td colSpan={4}></td>
                                <td><strong className="sh-strong">~$62/mo total</strong></td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="sh-p">
                        The equivalent stack on AWS in us-east-1, with comparable specs (not
                        comparable — AWS instance types are not 1:1 with Hetzner dedicated hardware),
                        would run somewhere around $350–$500/mo. RDS alone for a similarly
                        provisioned Postgres instance would be $150–$200. The savings are not 20%.
                        They are 80–87%.
                    </p>
                    <p className="sh-p">
                        What do I give up? About 100ms of round-trip latency. The first time you
                        SSH into a server in Finland from Texas, you feel the pause. After the
                        second time, you stop noticing. The page loads, the API responds, the
                        database queries run, and everything works. The only time I notice is when
                        I am running interactive CLI operations — but I do that rarely enough that
                        it is a non-issue.
                    </p>

                    <div className="sh-callout">
                        The premium for sub-50ms latency from AWS is not a compute premium. It is
                        a friction tax. You are paying 5x not for better hardware, but for the
                        absence of an 80ms delay. That is a valid choice for production workloads
                        serving millions of users. For everything else, it is an expensive habit.
                    </div>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">07 / The Opportunity</span>
                        The global compute market is still fragmented
                    </h2>
                    <p className="sh-p">
                        The most interesting implication of this shift is not the personal savings.
                        It is the market structure. The global compute market is still heavily
                        fragmented along geographic lines. Most developers provision in the closest
                        data center to themselves or their users, even when that choice costs 4x
                        more than an equivalent resource a few thousand miles away.
                    </p>
                    <p className="sh-p">
                        That fragmentation is an arbitrage opportunity for anyone willing to build
                        around it. Companies like Hetzner, OVH, Scaleway, and Leaseweb are
                        competing on price in regions where the hyperscalers have not bothered to
                        compete, because the hyperscalers are selling latency, not compute. When the
                        customer stops caring about the latency, the premium evaporates.
                    </p>
                    <p className="sh-p">
                        The infrastructure is in place. Undersea cables are abundant. Peering is
                        cheap. CDNs have solved the last mile. What remains is a cognitive bias —
                        the assumption that your server should be near your users. For an
                        increasingly large class of applications, that assumption is false.
                    </p>

                    <p className="sh-closer">
                        The geography of milliseconds is not the geography of kilometers. It is the
                        geography of attention — what you are willing to notice, and what you are
                        willing to pay to not notice it. Once you stop noticing the pause, you stop
                        paying the premium. And that changes everything.
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
