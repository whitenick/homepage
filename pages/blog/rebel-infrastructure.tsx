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
                <title>The server still whispers — Nick White</title>
                <meta
                    name="description"
                    content="The cool thing about building tech was always the hardware. The rack, the cables, the heat coming off a GPU. Software is free. The iron is the commitment. Before AI, after AI — that hasn&apos;t changed."
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
                        <p className="sh-kicker">Hardware · Cyberpunk · DIY</p>
                        <h1 className="sh-h1">
                            The server still whispers<br />
                            <em>and you should listen</em>
                        </h1>
                        <p className="sh-lede">
                            The cool thing about building tech was never the code. It was
                            the hardware. Racking a server in your closet. Running cable
                            through the basement. A GPU that hums when it&apos;s working.
                            The blinking LEDs of a switch at 2am. That&apos;s the cyberpunk
                            — not the abstraction, but the <strong>physical commitment</strong>.
                            Software is free. The iron is the line you draw. Before AI,
                            after AI, that hasn&apos;t changed.
                        </p>
                        <p className="sh-date">June 2026</p>
                    </header>

                    {/* §01 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / This is what was actually cool</span>
                    </h2>
                    <p className="sh-p">
                        What was cool about building tech — before AI, before the cloud
                        became a mall, before every protocol was a subscription — was
                        <strong> having a bunch of physical hardware to hook up</strong>.
                    </p>

                    <p className="sh-p">
                        Not the architecture diagram. Not the perfectly abstracted API layer.
                        The <strong>iron</strong>. Racking a server, running cables through
                        a drop ceiling, crimping your own Ethernet ends, feeling the heat
                        come off a GPU when it&apos;s actually working. A switch with blinking
                        LEDs that tells you which ports have traffic. A NAS that clicks when
                        it spins up. The hum of a 40mm fan at 3am when you&apos;re debugging
                        why the connection dropped.
                    </p>

                    <p className="sh-p">
                        This is not nostalgia. This is the thing itself. The physical
                        commitment is what made it feel real. You couldn&apos;t swipe a
                        credit card and magically have infrastructure. You had to
                        <strong> buy the box, rack it, wire it, power it</strong>. That
                        cost was the price of entry, and it meant something. It meant you
                        were <em>in</em> it.
                    </p>

                    <div className="sh-callout">
                        Software is expression. Hardware is commitment. The software tells
                        you what someone wanted to build. The hardware tells you they
                        actually built it.
                    </div>

                    <p className="sh-p">
                        The cyberpunk novels understood this better than any of them.
                        Case jacking into the matrix wasn&apos;t the point. The point was
                        the deck on the table, the cables, the physical world that connected
                        to the digital one. The fiction got the <strong>feeling</strong>
                        right: that owning the iron was an act of rebellion. The megacorp
                        owned the grid. You owned that box. That distinction never stopped
                        mattering. It just got harder to find.
                    </p>

                    {/* §02 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / Capex is commitment, opex is rent</span>
                        The SaaS model inverted everything
                    </h2>
                    <p className="sh-p">
                        Think about what the SaaS model did. It inverted the cost structure
                        completely. Suddenly the <strong>hardware disappeared</strong> and
                        the <strong>software became the expensive part</strong>. You paid
                        $0 upfront and $200/mo in subscriptions. No capex, just opex. No
                        rack, just receipts. No cables, just a login page.
                    </p>

                    <p className="sh-p">
                        This was sold as liberation from complexity. And in some ways it was.
                        But it also removed the <strong>point of commitment</strong>. When
                        you buy a server, you&apos;re making a statement: I&apos;m going to
                        do something with this. When you subscribe to a service, you&apos;re
                        making a different one: I&apos;ll pay until I stop needing it. One
                        is ownership. The other is temporary access.
                    </p>

                    <p className="sh-p">
                        The cyberpunk move is the opposite: <strong>hardware heavy,
                        software light</strong>. Spend the money once on iron, then let
                        the software be free. The cost is concentrated at the moment of
                        acquisition — that&apos;s the real commitment, the line you draw.
                        After that, the marginal cost of doing anything interesting
                        approaches zero. Your NAS, your GPU, your switch in the closet —
                        they sit there and they work until they don&apos;t, and when they
                        don&apos;t you know why.
                    </p>

                    <div className="sh-callout">
                        The subscription model made software the rent and hardware invisible.
                        That was efficient. It was also empty. The thing that made building
                        feel real was the weight of the box in your hands.
                    </div>

                    <p className="sh-p">
                        You can&apos;t hold a serverless function. You can&apos;t hear
                        a managed database spin up. You can&apos;t feel the heat from a
                        cloud subscription. Those things might be cheaper, faster, more
                        reliable — but they are <strong>not cool</strong>. And cool is not
                        a frivolous category. Cool is what makes people want to build things
                        that didn&apos;t exist before.
                    </p>

                    {/* §03 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / The stack you can touch</span>
                        What the rebel setup looks like in 2026
                    </h2>
                    <p className="sh-p">
                        So what does this look like in practice? A rack. A closet. A desk
                        with a tower under it that is louder than it should be. A switch
                        with more ports than you need, because you&apos;re going to add
                        more. A NAS with drives that you chose and installed yourself. A
                        GPU that&apos;s way overkill for what you&apos;re doing, but you
                        wanted to see how fast it could go.
                    </p>

                    <p className="sh-p">
                        The software on top is free. Linux, Postgres, Caddy, Tailscale,
                        Docker, Ollama, n8n, Qdrant — every piece of the stack costs $0.
                        You might spend on a domain name and electricity. That&apos;s it.
                        The hardware is the only investment, and it&apos;s a one-time
                        investment in <strong>your own capability</strong>.
                    </p>

                    <div className="sh-pros-cons">
                        <div className="sh-card">
                            <div className="sh-card-label for">The rebel stack</div>
                            <ul>
                                <li><strong>Hardware:</strong> Buy once, own forever</li>
                                <li><strong>Software:</strong> Free. All of it.</li>
                                <li><strong>Cost:</strong> Concentrated upfront, near-zero marginal</li>
                                <li><strong>Repair:</strong> You. Your hands. Your multimeter.</li>
                                <li><strong>Cool factor:</strong> High. Rack, cables, LEDs, heat.</li>
                            </ul>
                        </div>
                        <div className="sh-card">
                            <div className="sh-card-label against">The SaaS stack</div>
                            <ul>
                                <li><strong>Hardware:</strong> You never see it</li>
                                <li><strong>Software:</strong> $200/mo in subscriptions</li>
                                <li><strong>Cost:</strong> Zero upfront, endless opex</li>
                                <li><strong>Repair:</strong> Ticket. Wait. Hope.</li>
                                <li><strong>Cool factor:</strong> Low. You have nothing to touch.</li>
                            </ul>
                        </div>
                    </div>

                    <p className="sh-p">
                        And here is the part that matters: the people running their own
                        hardware are the ones finding the next thing. The RTX 3060 in a
                        bedroom running Ollama is where the local-first AI projects happen.
                        The NAS in the closet is where the self-hosted media, the private
                        backups, the knowledge graphs live. The switch with the blinking
                        ports is where you learn how networking actually works — not as
                        an abstraction, but as cable lengths and firewall rules that you
                        wrote yourself.
                    </p>

                    {/* §04 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / What AI changed</span>
                        Nothing. That&apos;s the point.
                    </h2>
                    <p className="sh-p">
                        AI didn&apos;t change any of this. It made the operational layer
                        easier — AI writes your Dockerfile, debugs your Postgres pool,
                        generates your Caddy config. The ops friction that made SaaS look
                        attractive has mostly collapsed. The only question left is whether
                        you want to <strong>own the iron or rent the abstraction</strong>.
                    </p>

                    <p className="sh-p">
                        The most interesting projects in the AI ecosystem right now —
                        local-first LLMs, custom RAG pipelines, personal knowledge graphs,
                        privacy-preserving inference — all require the kind of hardware
                        that managed platforms don&apos;t serve well. They need a GPU you
                        control. They need a NAS you own. They need a machine you can
                        physically reach. The people building those things are the same
                        people who were racking servers ten years ago. The edge hasn&apos;t
                        moved. It&apos;s just gotten quieter.
                    </p>

                    <div className="sh-callout">
                        AI didn&apos;t make hardware irrelevant. It made the software part
                        free. The hardware part — the commitment, the weight, the heat,
                        the hum — that&apos;s still the line you draw. <em>That&apos;s</em>
                        what&apos;s cool.
                    </div>

                    {/* §05 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / The cost of being a cyberpunk</span>
                        Hardware is expensive. Software is free.
                    </h2>
                    <p className="sh-p">
                        Let&apos;s be honest: the barrier to this life is not skill. It&apos;s
                        money. You can have more technical ability than anyone in the room,
                        but if you can&apos;t afford the hardware, you are stuck renting.
                        The GPU. The NAS. The switch. The rack. The cables. The UPS. It adds
                        up, and it adds up fast.
                    </p>

                    <p className="sh-p">
                        That&apos;s the trade. You <strong>spend once</strong> on iron and
                        then the software is yours — free, unencumbered, unsubscriptioned.
                        Every project after the first one costs you nothing in platform fees.
                        Your database is Postgres on your box. Your queue is NATS on your
                        NAS. Your inference runs on your GPU, one electricity bill, no
                        per-token metering. The upfront cost stings. The marginal cost of
                        creation after that is effectively zero.
                    </p>

                    <p className="sh-p">
                        Compare that to the SaaS path. You pay nothing up front and you
                        <strong> never stop paying</strong>. The subscriptions accumulate.
                        The bills creep. You optimize by reducing usage — which means
                        reducing what you build. The SaaS model has a built-in tax on
                        creation. The hardware model has a sunk cost that only gets cheaper
                        the more you use it.
                    </p>

                    <table className="sh-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>SaaS path (monthly)</th>
                                <th>Rebel path (one-time)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>LLM inference</td>
                                <td>$20–200 / mo (API tokens)</td>
                                <td className="accent">~$800 GPU, free software</td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>$25 / mo (Neon, Supabase)</td>
                                <td className="accent">$0. Postgres is free.</td>
                            </tr>
                            <tr>
                                <td>File storage</td>
                                <td>$24 / mo (iCloud, Google One)</td>
                                <td className="accent">~$400 NAS, free software</td>
                            </tr>
                            <tr>
                                <td>Automation</td>
                                <td>$30 / mo (Zapier, Make)</td>
                                <td className="accent">$0. n8n is free.</td>
                            </tr>
                            <tr>
                                <td>Hosting</td>
                                <td>$20 / mo (Vercel, Heroku)</td>
                                <td className="accent">~$6 / mo Hetzner or your own rack</td>
                            </tr>
                            <tr>
                                <td>Network</td>
                                <td>$15 / mo (VPN subscription)</td>
                                <td className="accent">$0. Tailscale + WireGuard.</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="sh-p">
                        The SaaS path is $100–300/mo and you have nothing physical to show
                        for it. The hardware path is a few thousand dollars once and you own
                        the entire stack. Over two years the hardware path is cheaper. Over
                        five years it&apos;s dramatically cheaper. But more importantly,
                        it&apos;s <strong>yours</strong>. You can touch it. You can hear it.
                        You can open the case and see what&apos;s inside.
                    </p>

                    {/* §06 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / The edge you&apos;re looking for</span>
                        It&apos;s a rack. It&apos;s cables. It&apos;s heat.
                    </h2>
                    <p className="sh-p">
                        I don&apos;t mean this as a prescription. Not everything needs to
                        be self-hosted. Email delivery, CDN, managed auth — these are real
                        problems and using them is not surrender. The point is not purity.
                    </p>

                    <p className="sh-p">
                        The point is that the coolest thing about building tech was always
                        the <strong>physical part</strong>. The rack. The cables. The heat
                        coming off a GPU. The blinking LEDs on a switch at 2am. A NAS in
                        the closet that clicks when it spins up. A server you can open and
                        see what&apos;s inside. That&apos;s what made it feel real.
                        That&apos;s the cyberpunk.
                    </p>

                    <p className="sh-p">
                        Software is free. The hardware is the commitment. You pay for iron
                        once, you own it, and everything you build on top of it costs
                        you nothing but creativity and time. The subscription model
                        inverted that — made software the rent, hardware invisible — and
                        that&apos;s why it feels hollow. You can&apos;t put your hands
                        on a cloud subscription.
                    </p>

                    <p className="sh-p">
                        The edge hasn&apos;t moved. It&apos;s still in every person who
                        buys a GPU instead of paying per-token. It&apos;s in the NAS, the
                        switch, the rack, the cables you ran through the wall yourself.
                        It&apos;s in the decision to <strong>own the iron</strong> and
                        let the software be what it was always meant to be: free.
                    </p>

                    <p className="sh-closer">
                        Buy a box. Rack it. Wire it. Make it hum. The rest is just
                        decisions about what rules to run on your own hardware. That&apos;s
                        the edge. It was always the edge. It still is.
                    </p>

                    <footer className="sh-footer">
                        Infrastructure · Hardware · Cyberpunk ·<br />
                        Thanks to Jobin Murphy for the conversation that became this post.
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
