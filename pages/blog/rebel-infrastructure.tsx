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
                    content="From the Homebrew Computer Club to the NAS in your closet. A short history of why the physical culture of computing — the hardware, the cables, the heat — was always the point."
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
                        <p className="sh-kicker">History · Hardware · Cyberpunk</p>
                        <h1 className="sh-h1">
                            The server still whispers
                        </h1>
                        <p className="sh-lede">
                            In March 1975, a group of hobbyists gathered in a garage
                            in Menlo Park, California, to stare at a machine that did
                            almost nothing. It had no monitor. No keyboard. No operating
                            system. It was a bag of chips and a circuit board, and the
                            people in that room could not stop touching it. Fifty years
                            later, all the abstraction in the world has not replaced
                            the feeling of your hands on the hardware.
                        </p>
                        <p className="sh-date">June 2026</p>
                    </header>

                    {/* §01 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The Homebrew Computer Club</span>
                        Before there was software, there was soldering
                    </h2>
                    <p className="sh-p">
                        The Homebrew Computer Club&apos;s first meeting in 1975 was not a
                        software demo. It was a hardware show-and-tell. People brought
                        boards they had etched themselves, chips they had scavenged,
                        power supplies they had salvaged from discarded electronics. The
                        Altair 8800 — the machine that launched Microsoft — was not a
                        computer as we understand the word today. It was a box with
                        toggle switches and blinking lights. To program it, you flipped
                        switches one bit at a time. The reward was a pattern of LEDs.
                    </p>

                    <p className="sh-p">
                        And this was thrilling. Not because the machine was powerful —
                        it was barely functional — but because it was
                        <strong> yours</strong>. You built it. You bought the chips, you
                        wired the bus, you debugged the timing with a logic probe. The
                        machine answered only to you because you had assembled it with
                        your own hands. That feeling — the directness of the relationship
                        between a person and a machine they built — is the thread that
                        runs through every era of computing that mattered.
                    </p>

                    <p className="sh-p">
                        This is where the culture started, and it was a culture of
                        <strong> physical making</strong>. The Homebrew Club produced
                        Apple, not because Wozniak had a brilliant software insight, but
                        because he had designed a board so elegant and complete that it
                        reduced a room of discrete chips to a single PCB. The revelatory
                        moment was not a new program — it was a new piece of hardware
                        that made computing affordable enough to put on your desk.
                    </p>

                    <div className="sh-callout">
                        Wozniak didn&apos;t sell software. He sold a board. The first
                        Apple was not a computer you used — it was a computer you
                        <em> connected to a TV</em> and <em>typed into yourself</em>.
                        The hardware was the product. The software was what you brought
                        to it.
                    </div>

                    {/* §02 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / The BBS and the bedroom server</span>
                        The machine in the closet is older than the data center
                    </h2>
                    <p className="sh-p">
                        By the 1980s, the personal computer had become something new: a
                        node. The BBS era was the first great wave of people running
                        servers out of their homes. A teenager with a Commodore 64, a
                        ­300-baud modem, and a second phone line could become an island
                        of connection. Their machine would ring at all hours. Strangers
                        would upload files, leave messages, play games. The server
                        lived in a bedroom, or a basement, or a closet. You could hear
                        it when it was working — the clicks of the hard drive, the
                        whine of the fan, the screech of the modem handshake.
                    </p>

                    <p className="sh-p">
                        This was not professional infrastructure. It was the opposite.
                        It was a kid who had convinced their parents that the second
                        phone line was for emergencies. It was a tower under a desk
                        running 24/7, getting hot, gathering dust, and somehow
                        connecting a neighborhood of strangers into something real.
                        The hardware was not abstract. It was a machine in your room
                        that made the outside world arrive through a wire you had
                        screwed into the wall jack yourself.
                    </p>

                    <p className="sh-p">
                        The warez scene grew out of this same material culture. The
                        groups that traded cracked software and traded speed runs were
                        not organized through platforms. They organized through private
                        BBS nodes, then through FTP servers on rented colocation space,
                        then through IRC channels on servers that someone was running
                        out of their apartment. The hardware was always the constraint.
                        If you wanted to be a &ldquo;top site,&rdquo; you needed a T1
                        line — which meant you needed money, or access, or both. The
                        guys with the hardware were the guys who set the rules.
                    </p>

                    <div className="sh-callout">
                        The scene was a perfect expression of the physical layer as
                        power. You couldn&apos;t download your way into it. You had to
                        build your way in — find the money for the drive, the bandwidth,
                        the electricity. The server was not a metaphor. It was a box in
                        someone&apos;s basement that you could, if you knew the right
                        people, go and touch.
                    </div>

                    {/* §03 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / Colocation and the first datacenter feeling</span>
                        Racking your own iron in a building full of other people&apos;s
                    </h2>
                    <p className="sh-p">
                        By the early 2000s, the bedroom server had a bigger sibling:
                        colocation. You rented a half-rack or a full rack in a building
                        full of other people&apos;s racks. You drove there with a
                        server in your passenger seat, signed in at the front desk, and
                        wheeled your box through a hallway lined with cages. The sound
                        hit you first — a low roar of thousands of fans. The cold air
                        hit you second.
                    </p>

                    <p className="sh-p">
                        Racking a server in a colo facility is one of the most
                        underrated experiences in technology. You slide the rails in.
                        You tighten the screws. You plug in power — redundant, two PSUs.
                        You plug in Ethernet — also redundant. You cable-manage because
                        you have standards. And then you step back and look at your
                        machine, one of hundreds, and you know that it is
                        <strong> yours</strong>. The blinking light on the front panel
                        — the one that tells you the drive is active — that light is
                        responding to code you wrote. That heat coming off the front
                        grille is your process. Your database. Your users.
                    </p>

                    <p className="sh-p">
                        This was never a cost-optimal choice. Colocation was not cheaper
                        than shared hosting. It was not even cheaper than a managed
                        provider. People did it because they wanted to
                        <strong> touch their infrastructure</strong>. They wanted to be
                        in the same room as the machine that served their users. They
                        wanted the ritual of the drive to the datacenter, the security
                        badge, the cold aisle, the blinking lights. That ritual was not
                        overhead. It was the point.
                    </p>

                    <div className="sh-callout">
                        Every datacenter has a moment of silence when the cage door
                        closes behind you and you hear your own server above the
                        roar. That sound is not useful. It is not measurable. It is
                        the <em>art</em> of infrastructure.
                    </div>

                    {/* §04 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / The abstraction wave</span>
                        What was gained, and what went quiet
                    </h2>
                    <p className="sh-p">
                        Then the cloud happened, and then SaaS, and then serverless, and
                        the hardware got quiet. The abstraction layer was so effective
                        that millions of people built software for years without ever
                        touching a physical machine. They deployed to platforms that had
                        no blinking lights. They stored data in systems they had never
                        seen. They paid subscriptions for services that ran on hardware
                        someone else had bought, racked, wired, and maintained.
                    </p>

                    <p className="sh-p">
                        This was a genuine achievement. Computing became accessible to
                        people who would never have racked a server. The barrier
                        dropped from &ldquo;buy a box&rdquo; to &ldquo;swipe a card.&rdquo;
                        A generation of builders grew up in the abstraction layer, and
                        they built incredible things. The cloud is not a mistake. It is
                        a miracle of engineering that made the invisible visible —
                        except that it also made the hardware invisible, and with it,
                        something else went away.
                    </p>

                    <p className="sh-p">
                        The texture went away. Building became frictionless and
                        therefore forgettable. You could deploy a full-stack application
                        without ever knowing what a CPU looked like. You could store
                        terabytes without ever hearing a hard drive click. You could
                        ship code without ever being in the same room as the machine
                        that ran it. The experience of computing became purely cognitive
                        — a flow of abstractions through a screen. The body was no
                        longer involved.
                    </p>

                    <div className="sh-callout">
                        The homelab community survived the abstraction wave intact
                        because it was never about efficiency. It was about
                        <em> having something to hold</em>. A server you can touch is
                        a different category of thing from a cloud subscription.
                    </div>

                    <p className="sh-p">
                        The people who kept building their own hardware during the SaaS
                        boom were often dismissed as hobbyists, tinkerers, people who
                        hadn&apos;t gotten the memo about the cloud. But that dismissal
                        missed the point. They weren&apos;t failing to understand
                        abstraction. They were preserving something that abstraction
                        was designed to erase: the direct physical relationship
                        between builder and machine.
                    </p>

                    {/* §05 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / The homelab renaissance</span>
                        Why people still buy racks
                    </h2>
                    <p className="sh-p">
                        The homelab community — the people who build servers in their
                        homes, their closets, their garages — never went away. What
                        changed is that they stopped being a niche and started being a
                        signal. In 2026, the homelab is larger than it has ever been,
                        not despite the cloud but because of it. The easier the cloud
                        makes pure software, the more the hardware becomes the
                        differentiator. The more abstraction flattens experience, the
                        more people seek the texture of something real.
                    </p>

                    <p className="sh-p">
                        A homelab is not a rational choice. It is a
                        <strong> cultural</strong> one. You buy a rack because you want
                        to own the stack from the metal up. You wire a switch because
                        you want to understand how the packets actually flow. You
                        install a GPU because you want to hear it work. The fact that
                        AI has made the software layer nearly free has only sharpened
                        this: if the code costs nothing, the <strong>hardware</strong>
                        is the only commitment that matters. The machine in your closet
                        is not infrastructure. It is a statement.
                    </p>

                    <p className="sh-p">
                        The modern homelab connects directly back to the Homebrew
                        Computer Club, to the BBS operator, to the colo cage. The
                        hardware is different but the impulse is identical: I am going
                        to build my own machine, and it is going to answer only to me.
                        Fifty years of abstraction have not erased that impulse. They
                        have only made it more deliberate.
                    </p>

                    <div className="sh-callout">
                        The people building homelabs today are preserving a tradition
                        that predates the commercial internet. They are the direct
                        descendants of the hobbyists in that Menlo Park garage. The
                        components have changed. The feeling hasn&apos;t.
                    </div>

                    {/* §06 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / The server still whispers</span>
                        The feeling you can&apos;t abstract
                    </h2>
                    <p className="sh-p">
                        I mentioned earlier that in March 1975, a group of strangers
                        gathered in a garage to stare at a machine that did almost
                        nothing. What I didn&apos;t say is what they did with the rest
                        of the evening: they talked, they argued, they showed each other
                        what they had built. The machine was a catalyst. The real
                        meeting was the people, and the things they brought to show.
                    </p>

                    <p className="sh-p">
                        That pattern repeats every time someone racks a server, crimps
                        a cable, or installs a drive in their NAS. The hardware is an
                        invitation. It says: I built this. I understand it. If you want
                        to talk about it, I can show you.
                    </p>

                    <p className="sh-p">
                        The cloud gave us efficiency, scale, and access. It took away
                        the weight, the noise, and the heat. For most people, that
                        trade was worth it. But something was lost, and pretending
                        otherwise is how you end up with a generation of engineers who
                        can deploy anything and understand nothing — who can spin up a
                        cluster but have never been in the same room as one.
                    </p>

                    <p className="sh-p">
                        The server in your closet is not a productivity optimization.
                        It is not a cost savings. It is a connection to the culture
                        that made computing interesting in the first place — the
                        culture of people who built their own machines and showed them
                        to each other. That culture did not end with the Homebrew
                        Computer Club. It did not end with the BBS. It is still alive
                        in every person who buys a switch, racks a server, and feels
                        the heat come off the front grille.
                    </p>

                    <p className="sh-closer">
                        There is a room in Menlo Park, California, that no longer
                        exists as a garage. But the feeling that started there — the
                        feeling of building your own machine, of being physically
                        connected to the system you control — is still here. You can
                        find it in any closet, any basement, any desk with a tower
                        under it that is louder than it should be. The hardware is the
                        history. The cables are the continuity. The server still
                        whispers.
                    </p>

                    <footer className="sh-footer">
                        History · Hardware · Homelab · Cyberpunk ·<br />
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