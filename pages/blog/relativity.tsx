"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AlienSaucer from "@/components/AlienSaucer";
import "../../styles/v2.css";

export default function Relativity() {
    const [dark, setDark] = useState(false);
    const [speed, setSpeed] = useState(50);
    const sliderRef = useRef<HTMLInputElement>(null);

    // Respect system preference on first load
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
    }, []);

    const beta = speed / 100;
    const gamma = 1 / Math.sqrt(1 - beta * beta);

    function fmt(x: number) {
        if (x >= 100) return x.toFixed(0);
        if (x >= 10) return x.toFixed(1);
        return x.toFixed(2);
    }

    function speedNote(pct: number, g: number) {
        if (pct < 10)
            return "At low speed γ ≈ 1 — clocks tick together. This is the world you live in.";
        if (pct < 60)
            return "The gap is opening up, but you'd need precise instruments to notice it.";
        if (pct < 90)
            return `Now it's dramatic: while the traveler lives 1 year, Earth runs through ${fmt(g)}.`;
        if (pct < 99)
            return `Extreme regime — a year aboard ship costs the traveler ${fmt(g)} years of home.`;
        return "Near light-speed γ skyrockets. The smallest push closer to c stretches Earth-time enormously.";
    }

    const t = dark ? "dark" : "light";

    return (
        <>
            <Head>
                <title>Why Travelers Age Slower — Nick White</title>
                <meta
                    name="description"
                    content="A ground-up visual explainer of special and general relativity, time dilation, and the twin paradox."
                />
                <link rel="icon" href="/mountain.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500&family=IBM+Plex+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <style jsx global>{`
                .rel-root {
                    --fig-bg1: #0f1422;
                    --fig-bg2: #131a2c;
                    --fig-lab1: #0c1120;
                    --fig-lab2: #0a0f1c;
                    --fig-line: #243049;
                    --fig-ink: #e9e7df;
                    --fig-dim: #9aa3b5;
                    --fig-stat: #0a0e1a;
                    --earth: #5fd3e8;
                    --trav: #f5b942;
                    --photon: #ff5d6c;
                    --serif: "Newsreader", Georgia, serif;
                    --disp: "Instrument Serif", Georgia, serif;
                    --mono: "IBM Plex Mono", monospace;
                }
                .rel-root[data-theme="light"] {
                    --bg: #f5f2ec;
                    --ink: #1b2030;
                    --ink-strong: #0a0d16;
                    --ink-dim: #56607a;
                    --line: #d8d0c0;
                    --earth-txt: #0e7490;
                    --trav-txt: #b45309;
                    --glow-a: rgba(14, 116, 144, 0.06);
                    --glow-b: rgba(180, 83, 9, 0.05);
                }
                .rel-root[data-theme="dark"] {
                    --bg: #080b14;
                    --ink: #e9e7df;
                    --ink-strong: #ffffff;
                    --ink-dim: #9aa3b5;
                    --line: #243049;
                    --earth-txt: #5fd3e8;
                    --trav-txt: #f5b942;
                    --glow-a: rgba(95, 211, 232, 0.08);
                    --glow-b: rgba(245, 185, 66, 0.06);
                }
                .rel-body {
                    background: radial-gradient(
                            1200px 600px at 80% -10%,
                            var(--glow-a),
                            transparent 60%
                        ),
                        radial-gradient(
                            900px 500px at -10% 30%,
                            var(--glow-b),
                            transparent 55%
                        ),
                        var(--bg);
                    background-attachment: fixed;
                    transition: background 0.25s ease, color 0.25s ease;
                    color: var(--ink);
                    font-family: var(--serif);
                    font-size: 18px;
                    line-height: 1.65;
                    min-height: 100vh;
                }
                .rel-wrap {
                    max-width: 820px;
                    margin: 0 auto;
                    padding: 0 22px 120px;
                }
                .rel-header {
                    padding: 56px 0 30px;
                    border-bottom: 1px solid var(--line);
                }
                .rel-kicker {
                    font-family: var(--mono);
                    font-size: 12px;
                    letter-spacing: 0.32em;
                    text-transform: uppercase;
                    color: var(--earth-txt);
                    margin: 0 0 18px;
                }
                .rel-h1 {
                    font-family: var(--disp);
                    font-weight: 400;
                    font-size: clamp(40px, 8vw, 72px);
                    line-height: 1.02;
                    margin: 0;
                    letter-spacing: -0.01em;
                    color: var(--ink);
                }
                .rel-h1 em {
                    color: var(--trav-txt);
                    font-style: italic;
                }
                .rel-lede {
                    font-size: 20px;
                    color: var(--ink-dim);
                    margin: 26px 0 0;
                    max-width: 62ch;
                }
                .rel-h2 {
                    font-family: var(--disp);
                    font-weight: 400;
                    font-size: clamp(26px, 5vw, 38px);
                    margin: 70px 0 6px;
                    letter-spacing: -0.01em;
                    color: var(--ink);
                }
                .rel-secnum {
                    font-family: var(--mono);
                    font-size: 12px;
                    letter-spacing: 0.3em;
                    color: var(--trav-txt);
                    text-transform: uppercase;
                }
                .rel-p {
                    margin: 18px 0;
                    max-width: 64ch;
                }
                .rel-strong {
                    font-weight: 500;
                    color: var(--ink-strong);
                }
                .earth-t {
                    color: var(--earth-txt);
                }
                .trav-t {
                    color: var(--trav-txt);
                }
                /* Dark figure panels */
                .rel-card {
                    background: linear-gradient(
                        180deg,
                        var(--fig-bg1),
                        var(--fig-bg2)
                    );
                    border: 1px solid var(--fig-line);
                    border-radius: 14px;
                    padding: 24px;
                    margin: 30px 0;
                    box-shadow: 0 24px 60px -34px rgba(0, 0, 0, 0.75);
                }
                .rel-cap {
                    font-family: var(--mono);
                    font-size: 12.5px;
                    color: var(--fig-dim);
                    letter-spacing: 0.02em;
                    margin-top: 14px;
                    text-align: center;
                    line-height: 1.5;
                }
                .rel-formula {
                    font-family: var(--mono);
                    text-align: center;
                    font-size: clamp(20px, 4.4vw, 28px);
                    color: #fff;
                    margin: 8px 0;
                    letter-spacing: 0.01em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.4em;
                }
                .rel-frac {
                    display: inline-flex;
                    flex-direction: column;
                    text-align: center;
                    vertical-align: middle;
                }
                .rel-frac-top {
                    border-bottom: 1.5px solid var(--fig-ink);
                    padding: 0 0.35em;
                }
                .rel-frac-bot {
                    padding: 0 0.35em;
                }
                /* Slider lab */
                .rel-lab {
                    background: linear-gradient(
                        180deg,
                        var(--fig-lab1),
                        var(--fig-lab2)
                    );
                    border: 1px solid var(--fig-line);
                    border-radius: 16px;
                    padding: 26px 24px;
                    margin: 30px 0;
                }
                .rel-readout {
                    display: flex;
                    gap: 14px;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin: 6px 0 22px;
                }
                .rel-stat {
                    flex: 1 1 150px;
                    text-align: center;
                    background: var(--fig-stat);
                    border: 1px solid var(--fig-line);
                    border-radius: 11px;
                    padding: 16px 10px;
                }
                .rel-stat-n {
                    font-family: var(--mono);
                    font-size: 30px;
                    color: #fff;
                    line-height: 1;
                }
                .rel-stat-l {
                    font-size: 13px;
                    color: var(--fig-dim);
                    margin-top: 8px;
                    letter-spacing: 0.02em;
                }
                .rel-stat.earth-s {
                    border-color: rgba(95, 211, 232, 0.45);
                }
                .rel-stat.earth-s .rel-stat-n {
                    color: var(--earth);
                }
                .rel-stat.trav-s {
                    border-color: rgba(245, 185, 66, 0.45);
                }
                .rel-stat.trav-s .rel-stat-n {
                    color: var(--trav);
                }
                .rel-slider {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 100%;
                    height: 6px;
                    border-radius: 6px;
                    background: linear-gradient(
                        90deg,
                        var(--earth),
                        var(--trav)
                    );
                    outline: none;
                    margin: 6px 0;
                }
                .rel-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 26px;
                    width: 26px;
                    border-radius: 50%;
                    background: #fff;
                    border: 3px solid var(--trav);
                    cursor: pointer;
                    box-shadow: 0 0 16px rgba(245, 185, 66, 0.6);
                }
                .rel-slider::-moz-range-thumb {
                    height: 22px;
                    width: 22px;
                    border-radius: 50%;
                    background: #fff;
                    border: 3px solid var(--trav);
                    cursor: pointer;
                }
                .rel-vlabel {
                    display: flex;
                    justify-content: space-between;
                    font-family: var(--mono);
                    font-size: 13px;
                    color: var(--fig-dim);
                    margin-top: 4px;
                }
                .rel-vbig {
                    text-align: center;
                    font-family: var(--mono);
                    font-size: 22px;
                    color: #fff;
                    margin-bottom: 4px;
                }
                /* Table */
                .rel-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 15.5px;
                    margin: 8px 0;
                }
                .rel-table th,
                .rel-table td {
                    text-align: left;
                    padding: 11px 12px;
                    border-bottom: 1px solid var(--line);
                }
                .rel-table th {
                    font-family: var(--mono);
                    font-size: 11.5px;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--ink-dim);
                    font-weight: 400;
                }
                .rel-table .m {
                    font-family: var(--mono);
                    color: var(--ink-strong);
                }
                .rel-table .tcell {
                    font-family: var(--mono);
                    color: var(--trav-txt);
                }
                .pill {
                    display: inline-block;
                    font-family: var(--mono);
                    font-size: 11px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 3px 9px;
                    border-radius: 20px;
                    border: 1px solid var(--line);
                    color: var(--ink-dim);
                }
                .pill.two {
                    color: var(--trav-txt);
                    border-color: var(--trav-txt);
                }
                .rel-oneline {
                    font-family: var(--disp);
                    font-size: clamp(22px, 4.5vw, 30px);
                    line-height: 1.4;
                    color: var(--ink-strong);
                    max-width: 60ch;
                }
                .rel-oneline em {
                    font-style: italic;
                    color: var(--trav-txt);
                }
                .rel-footer {
                    margin-top: 80px;
                    padding-top: 26px;
                    border-top: 1px solid var(--line);
                    color: var(--ink-dim);
                    font-size: 14px;
                    font-family: var(--mono);
                    letter-spacing: 0.02em;
                }
                .photon-dot {
                    filter: drop-shadow(0 0 6px #ff5d6c);
                }
                /* Starfield in dark mode */
                .rel-body::before {
                    content: "";
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    z-index: 0;
                    opacity: 0;
                    transition: opacity 0.25s;
                    background-image: radial-gradient(
                            1px 1px at 20% 30%,
                            rgba(255, 255, 255, 0.6),
                            transparent
                        ),
                        radial-gradient(
                            1px 1px at 70% 60%,
                            rgba(255, 255, 255, 0.45),
                            transparent
                        ),
                        radial-gradient(
                            1px 1px at 40% 80%,
                            rgba(255, 255, 255, 0.4),
                            transparent
                        ),
                        radial-gradient(
                            1px 1px at 90% 20%,
                            rgba(255, 255, 255, 0.5),
                            transparent
                        ),
                        radial-gradient(
                            1px 1px at 55% 12%,
                            rgba(255, 255, 255, 0.35),
                            transparent
                        ),
                        radial-gradient(
                            1px 1px at 12% 70%,
                            rgba(255, 255, 255, 0.4),
                            transparent
                        );
                }
                .rel-body.is-dark::before {
                    opacity: 0.5;
                }
                /* Top nav bar */
                .rel-nav {
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
                .rel-nav-back {
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
                .rel-nav-back:hover {
                    color: var(--earth-txt);
                }
                .rel-toggle {
                    font-family: var(--mono);
                    font-size: 12px;
                    letter-spacing: 0.08em;
                    padding: 7px 14px;
                    border-radius: 30px;
                    border: 1px solid var(--line);
                    background: transparent;
                    color: var(--ink);
                    cursor: pointer;
                    transition: transform 0.15s ease, background 0.25s,
                        color 0.25s;
                }
                .rel-toggle:hover {
                    transform: translateY(-1px);
                }
            `}</style>

            <div
                className={`rel-root rel-body${dark ? " is-dark" : ""}`}
                data-theme={t}
            >
                {/* Sticky nav */}
                <nav className="rel-nav">
                    <Link href="/blog" className="rel-nav-back">
                        ← Blog
                    </Link>
                    <button
                        className="rel-toggle"
                        onClick={() => setDark((d) => !d)}
                        aria-label="Toggle light or dark theme"
                    >
                        {dark ? "☀ Light" : "☾ Dark"}
                    </button>
                </nav>

                <div className="rel-wrap" style={{ position: "relative", zIndex: 1 }}>
                    <header className="rel-header">
                        <p className="rel-kicker">
                            Special &amp; General Relativity · Time Dilation
                        </p>
                        <h1 className="rel-h1">
                            Why the traveler comes home <em>younger</em>
                        </h1>
                        <p className="rel-lede">
                            You leave Earth, fly far and fast, and return to
                            find everyone has aged more than you have. This
                            isn&apos;t science fiction — it&apos;s measured
                            every day. Here&apos;s the actual reason, built
                            from the ground up.
                        </p>
                        <p
                            style={{
                                fontFamily: "var(--mono)",
                                fontSize: 12,
                                letterSpacing: "0.06em",
                                color: "var(--ink-dim)",
                                marginTop: 22,
                            }}
                        >
                            June 2026
                        </p>
                    </header>

                    {/* §01 */}
                    <h2 className="rel-h2">
                        <span className="rel-secnum">
                            01 / The one rule everything follows
                        </span>
                        <br />
                        The speed of light never changes
                    </h2>
                    <p className="rel-p">
                        Almost everything you intuit about motion is relative.
                        If you walk forward on a moving train, someone on the
                        platform sees your speed as{" "}
                        <em>train speed + walking speed</em>. Speeds just add.
                    </p>
                    <p className="rel-p">
                        <span className="rel-strong">
                            Light refuses to play that game.
                        </span>{" "}
                        No matter how fast you chase a beam of light, you
                        always measure it moving away from you at exactly the
                        same speed — about 300,000 km per second, written{" "}
                        <span
                            className="trav-t"
                            style={{ fontFamily: "var(--mono)" }}
                        >
                            c
                        </span>
                        . Standing still, sprinting, or riding a rocket at half
                        light-speed: you get the same number every time. This
                        is the single experimental fact that Einstein took
                        seriously, and the entire strange story below is just
                        the logical consequence of it.
                    </p>
                    <p className="rel-p">
                        If the speed of light can&apos;t change, then something
                        else has to bend to keep it constant. That something is{" "}
                        <span className="rel-strong">time itself</span>.
                    </p>

                    {/* §02 */}
                    <h2 className="rel-h2">
                        <span className="rel-secnum">
                            02 / The light clock
                        </span>
                        <br />
                        Watch a moving clock tick slower
                    </h2>
                    <p className="rel-p">
                        Imagine the simplest possible clock: a pulse of light
                        bouncing straight up and down between two mirrors. Each
                        round trip is one &ldquo;tick.&rdquo; Now compare what
                        two people see.
                    </p>

                    <div className="rel-card">
                        <svg
                            viewBox="0 0 720 340"
                            style={{ display: "block", width: "100%", height: "auto" }}
                            role="img"
                            aria-label="Light clock comparison"
                        >
                            <line x1="360" y1="20" x2="360" y2="300" stroke="#243049" strokeWidth="1" strokeDasharray="4 6" />
                            <text x="170" y="38" fill="#5fd3e8" fontFamily="IBM Plex Mono, monospace" fontSize="13" textAnchor="middle" letterSpacing="2">CLOCK AT REST (your view)</text>
                            <rect x="120" y="70" width="100" height="7" rx="2" fill="#5fd3e8" />
                            <rect x="120" y="253" width="100" height="7" rx="2" fill="#5fd3e8" />
                            <line x1="170" y1="77" x2="170" y2="253" stroke="#ff5d6c" strokeWidth="2" strokeDasharray="3 5" opacity="0.55" />
                            <circle r="7" fill="#ff5d6c" className="photon-dot">
                                <animate attributeName="cy" values="80;250;80" dur="1.6s" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="linear" />
                                <animate attributeName="cx" values="170;170;170" dur="1.6s" repeatCount="indefinite" />
                            </circle>
                            <text x="170" y="290" fill="#9aa3b5" fontFamily="IBM Plex Mono, monospace" fontSize="12" textAnchor="middle">short path → fast tick</text>
                            <text x="540" y="38" fill="#f5b942" fontFamily="IBM Plex Mono, monospace" fontSize="13" textAnchor="middle" letterSpacing="2">SAME CLOCK, MOVING →</text>
                            <g opacity="0.28"><rect x="410" y="70" width="80" height="6" rx="2" fill="#f5b942" /><rect x="410" y="254" width="80" height="6" rx="2" fill="#f5b942" /></g>
                            <g opacity="0.55"><rect x="510" y="70" width="80" height="6" rx="2" fill="#f5b942" /><rect x="510" y="254" width="80" height="6" rx="2" fill="#f5b942" /></g>
                            <g opacity="1"><rect x="610" y="70" width="80" height="6" rx="2" fill="#f5b942" /><rect x="610" y="254" width="80" height="6" rx="2" fill="#f5b942" /></g>
                            <polyline points="450,257 550,73 650,257" fill="none" stroke="#ff5d6c" strokeWidth="2" strokeDasharray="3 5" opacity="0.6" />
                            <circle r="7" fill="#ff5d6c" className="photon-dot">
                                <animate attributeName="cx" values="450;550;650;550;450" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.25;0.5;0.75;1" calcMode="linear" />
                                <animate attributeName="cy" values="255;75;255;75;255" dur="2.4s" repeatCount="indefinite" keyTimes="0;0.25;0.5;0.75;1" calcMode="linear" />
                            </circle>
                            <line x1="410" y1="320" x2="690" y2="320" stroke="#f5b942" strokeWidth="1.5" markerEnd="url(#arrow)" />
                            <text x="550" y="313" fill="#9aa3b5" fontFamily="IBM Plex Mono, monospace" fontSize="12" textAnchor="middle">longer path → slow tick</text>
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                                    <path d="M0,0 L6,3 L0,6 Z" fill="#f5b942" />
                                </marker>
                            </defs>
                        </svg>
                        <p className="rel-cap">
                            Same clock, same light, same speed{" "}
                            <span style={{ color: "#fff" }}>c</span>. But to
                            you, the moving clock&apos;s light must travel a{" "}
                            <span style={{ color: "#f5b942" }}>
                                longer diagonal
                            </span>{" "}
                            to make one bounce — and since light can&apos;t
                            speed up, that bounce simply{" "}
                            <span style={{ color: "#fff" }}>
                                takes more time
                            </span>
                            . The moving clock ticks slower.
                        </p>
                    </div>

                    <p className="rel-p">
                        That&apos;s the whole trick. The traveler&apos;s
                        &ldquo;clock&rdquo; includes <em>everything</em> —
                        their wristwatch, their heartbeat, the chemistry of
                        aging, the firing of their neurons. From your point of
                        view back on Earth, all of it runs in slow motion. The
                        traveler notices nothing unusual; their own second feels
                        perfectly normal. Slowness is something{" "}
                        <span className="rel-strong">you</span> observe in{" "}
                        <span className="rel-strong">them</span>.
                    </p>

                    {/* §03 */}
                    <h2 className="rel-h2">
                        <span className="rel-secnum">
                            03 / The exact amount
                        </span>
                        <br />
                        The Lorentz factor, γ
                    </h2>
                    <p className="rel-p">
                        Geometry turns that diagonal into a precise formula.
                        The stretch factor — how much slower the moving clock
                        runs — is called{" "}
                        <span className="rel-strong">gamma (γ)</span>:
                    </p>

                    <div className="rel-card">
                        <div className="rel-formula">
                            <span>γ &nbsp;=&nbsp;</span>
                            <span className="rel-frac">
                                <span className="rel-frac-top">1</span>
                                <span className="rel-frac-bot">
                                    √(1 − v²/c²)
                                </span>
                            </span>
                        </div>
                        <p
                            className="rel-cap"
                            style={{ marginTop: 18 }}
                        >
                            <span style={{ color: "#fff" }}>v</span> = your
                            speed &nbsp;·&nbsp;{" "}
                            <span style={{ color: "#fff" }}>c</span> = speed of
                            light &nbsp;·&nbsp; Time on Earth = γ × time for
                            the traveler
                        </p>
                    </div>

                    <p className="rel-p">
                        At everyday speeds,{" "}
                        <span style={{ fontFamily: "var(--mono)" }}>v/c</span>{" "}
                        is so tiny that γ is essentially 1.000000 — which is
                        why you&apos;ve never noticed this. But as you approach
                        the speed of light, γ rockets toward infinity. Drag the
                        slider:
                    </p>

                    {/* Interactive lab */}
                    <div className="rel-lab">
                        <div className="rel-vbig">
                            v = {speed.toFixed(1)}% of light-speed
                        </div>
                        <input
                            ref={sliderRef}
                            type="range"
                            className="rel-slider"
                            min="0"
                            max="99.9"
                            step="0.1"
                            value={speed}
                            onChange={(e) =>
                                setSpeed(parseFloat(e.target.value))
                            }
                        />
                        <div className="rel-vlabel">
                            <span>slow (0)</span>
                            <span>nearly light-speed (99.9%)</span>
                        </div>
                        <div
                            className="rel-readout"
                            style={{ marginTop: 24 }}
                        >
                            <div className="rel-stat">
                                <div className="rel-stat-n">
                                    {fmt(gamma)}
                                </div>
                                <div className="rel-stat-l">
                                    γ — time stretch factor
                                </div>
                            </div>
                            <div className="rel-stat trav-s">
                                <div className="rel-stat-n">1.00</div>
                                <div className="rel-stat-l">
                                    year for the traveler
                                </div>
                            </div>
                            <div className="rel-stat earth-s">
                                <div className="rel-stat-n">
                                    {fmt(gamma)}
                                </div>
                                <div className="rel-stat-l">
                                    years pass on Earth
                                </div>
                            </div>
                        </div>
                        <p
                            className="rel-cap"
                            style={{ marginTop: 4 }}
                        >
                            {speedNote(speed, gamma)}
                        </p>
                    </div>

                    {/* γ curve */}
                    <div className="rel-card">
                        <svg
                            viewBox="0 0 720 300"
                            style={{ display: "block", width: "100%", height: "auto" }}
                            role="img"
                            aria-label="Graph of the Lorentz factor gamma versus speed"
                        >
                            <line x1="70" y1="250" x2="690" y2="250" stroke="#243049" strokeWidth="1.5" />
                            <line x1="70" y1="250" x2="70" y2="30" stroke="#243049" strokeWidth="1.5" />
                            <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#9aa3b5">
                                <line x1="66" y1="250" x2="70" y2="250" /><text x="58" y="254" textAnchor="end">1</text>
                                <line x1="66" y1="195" x2="70" y2="195" /><text x="58" y="199" textAnchor="end">2</text>
                                <line x1="66" y1="140" x2="70" y2="140" /><text x="58" y="144" textAnchor="end">4</text>
                                <line x1="66" y1="85" x2="70" y2="85" /><text x="58" y="89" textAnchor="end">10</text>
                                <text x="40" y="150" textAnchor="middle" transform="rotate(-90 40 150)" fill="#f5b942">γ</text>
                            </g>
                            <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#9aa3b5">
                                <text x="70" y="270" textAnchor="middle">0</text>
                                <text x="225" y="270" textAnchor="middle">0.5c</text>
                                <text x="380" y="270" textAnchor="middle">0.8c</text>
                                <text x="535" y="270" textAnchor="middle">0.95c</text>
                                <text x="660" y="270" textAnchor="middle">→ c</text>
                                <text x="380" y="290" textAnchor="middle" fill="#5fd3e8">speed v</text>
                            </g>
                            <path d="M70,249 C200,247 280,240 360,222 C440,200 500,170 560,135 C610,105 645,75 668,40" fill="none" stroke="#f5b942" strokeWidth="3" />
                            <line x1="685" y1="30" x2="685" y2="250" stroke="#5fd3e8" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
                            <text x="678" y="46" fill="#5fd3e8" fontFamily="IBM Plex Mono, monospace" fontSize="11" textAnchor="end">c (unreachable)</text>
                        </svg>
                        <p className="rel-cap">
                            γ barely moves until you&apos;re going seriously
                            fast — then it explodes. Reaching{" "}
                            <span style={{ color: "#5fd3e8" }}>c</span> itself
                            would require infinite energy, so light-speed stays
                            forever out of reach for anything with mass.
                        </p>
                    </div>

                    {/* §04 */}
                    <h2 className="rel-h2">
                        <span className="rel-secnum">
                            04 / The twin paradox
                        </span>
                        <br />
                        One twin leaves, one stays — who ages?
                    </h2>
                    <p className="rel-p">
                        Here&apos;s the famous version. Two twins. One boards a
                        ship to a star 4 light-years away, cruising at{" "}
                        <span style={{ fontFamily: "var(--mono)" }}>0.8c</span>
                        , then turns around and comes home. The other stays on
                        Earth. When they reunite, the{" "}
                        <span className="trav-t">
                            traveling twin is measurably younger
                        </span>
                        .
                    </p>

                    <div className="rel-card">
                        <svg
                            viewBox="0 0 720 380"
                            style={{ display: "block", width: "100%", height: "auto" }}
                            role="img"
                            aria-label="Spacetime diagram of the twin paradox"
                        >
                            <line x1="120" y1="350" x2="120" y2="30" stroke="#243049" strokeWidth="1.5" />
                            <line x1="120" y1="350" x2="640" y2="350" stroke="#243049" strokeWidth="1.5" />
                            <text x="92" y="190" fill="#9aa3b5" fontFamily="IBM Plex Mono, monospace" fontSize="12" textAnchor="middle" transform="rotate(-90 92 190)">TIME →</text>
                            <text x="380" y="374" fill="#9aa3b5" fontFamily="IBM Plex Mono, monospace" fontSize="12" textAnchor="middle">DISTANCE FROM EARTH →</text>
                            <text x="560" y="44" fill="#9aa3b5" fontFamily="IBM Plex Mono, monospace" fontSize="12" textAnchor="middle">★ distant star</text>
                            <line x1="560" y1="50" x2="560" y2="350" stroke="#243049" strokeWidth="1" strokeDasharray="2 6" />
                            <line x1="120" y1="350" x2="120" y2="50" stroke="#5fd3e8" strokeWidth="4" />
                            <g fill="#5fd3e8" fontFamily="IBM Plex Mono, monospace" fontSize="10">
                                <circle cx="120" cy="350" r="3" /><circle cx="120" cy="290" r="3" /><circle cx="120" cy="230" r="3" />
                                <circle cx="120" cy="170" r="3" /><circle cx="120" cy="110" r="3" /><circle cx="120" cy="50" r="3" />
                            </g>
                            <text x="108" y="48" fill="#5fd3e8" fontFamily="IBM Plex Mono, monospace" fontSize="13" textAnchor="end" fontWeight="500">10 yrs</text>
                            <polyline points="120,350 560,200 120,50" fill="none" stroke="#f5b942" strokeWidth="4" />
                            <g fill="#f5b942" fontFamily="IBM Plex Mono, monospace" fontSize="10">
                                <circle cx="120" cy="350" r="3" /><circle cx="267" cy="300" r="3" /><circle cx="413" cy="250" r="3" />
                                <circle cx="560" cy="200" r="3" /><circle cx="413" cy="150" r="3" /><circle cx="267" cy="100" r="3" /><circle cx="120" cy="50" r="3" />
                            </g>
                            <text x="455" y="195" fill="#f5b942" fontFamily="IBM Plex Mono, monospace" fontSize="13" fontWeight="500">6 yrs</text>
                            <circle cx="120" cy="50" r="7" fill="none" stroke="#fff" strokeWidth="2" />
                            <text x="135" y="46" fill="#fff" fontFamily="IBM Plex Mono, monospace" fontSize="12">reunion: ages differ</text>
                            <text x="135" y="350" fill="#9aa3b5" fontFamily="IBM Plex Mono, monospace" fontSize="12">departure</text>
                            <rect x="430" y="320" width="14" height="4" fill="#5fd3e8" /><text x="452" y="328" fill="#9aa3b5" fontFamily="IBM Plex Mono, monospace" fontSize="12">stay-home twin</text>
                            <rect x="430" y="338" width="14" height="4" fill="#f5b942" /><text x="452" y="346" fill="#9aa3b5" fontFamily="IBM Plex Mono, monospace" fontSize="12">traveling twin</text>
                        </svg>
                        <p className="rel-cap">
                            Both twins start and end at the same two points.
                            The{" "}
                            <span style={{ color: "#5fd3e8" }}>
                                straight path
                            </span>{" "}
                            through spacetime racks up the most aging; the{" "}
                            <span style={{ color: "#f5b942" }}>bent path</span>{" "}
                            covers less of its own time. At 0.8c (γ = 1.67),
                            ~10 Earth-years pass while the traveler ages only
                            ~6.
                        </p>
                    </div>

                    <p className="rel-p">
                        <span className="rel-strong">
                            So why isn&apos;t it symmetric?
                        </span>{" "}
                        The natural objection: motion is relative, so
                        couldn&apos;t the traveler equally say <em>Earth</em>{" "}
                        moved away and came back? No — and this is the
                        resolution. The stay-at-home twin never changes their
                        motion. The traveler must{" "}
                        <span className="rel-strong">
                            fire engines to slow, turn, and accelerate home
                        </span>
                        . That turnaround is a real, felt, non-relative event —
                        it breaks the symmetry. The bent path is unambiguously
                        the one that experiences less time. There&apos;s no
                        paradox, just one straight worldline and one bent one.
                    </p>

                    {/* §05 */}
                    <h2 className="rel-h2">
                        <span className="rel-secnum">
                            05 / Gravity does it too
                        </span>
                        <br />
                        Distance from Earth&apos;s mass matters
                    </h2>
                    <p className="rel-p">
                        So far this was all about <em>speed</em> (special
                        relativity). But there&apos;s a second effect from{" "}
                        <span className="rel-strong">general relativity</span>:{" "}
                        <span className="rel-strong">
                            clocks run slower deeper inside a gravity well, and
                            faster the farther you are from a mass.
                        </span>
                    </p>
                    <p className="rel-p">
                        Earth&apos;s gravity is like a dent in spacetime. Down
                        at the surface, time runs slightly slower; high up in
                        orbit or out in deep space, away from that dent, time
                        runs slightly{" "}
                        <span className="trav-t">faster</span>. So a traveler
                        far from Earth gets two things happening at once,
                        pulling in opposite directions:
                    </p>

                    <table className="rel-table">
                        <thead>
                            <tr>
                                <th>Effect</th>
                                <th>Cause</th>
                                <th>On the traveler&apos;s clock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Velocity (special rel.)</td>
                                <td>moving fast</td>
                                <td className="m">runs slower</td>
                            </tr>
                            <tr>
                                <td>Altitude (general rel.)</td>
                                <td>far from Earth&apos;s mass</td>
                                <td className="tcell">runs faster</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="rel-p">
                        Whichever effect wins depends on the situation — which
                        is exactly why this isn&apos;t just theory. We engineer
                        around it constantly.
                    </p>

                    {/* §06 */}
                    <h2 className="rel-h2">
                        <span className="rel-secnum">
                            06 / This is measured, not imagined
                        </span>
                        <br />
                        Real numbers from the real world
                    </h2>

                    <table className="rel-table">
                        <thead>
                            <tr>
                                <th>Scenario</th>
                                <th>What happens</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="pill">ISS astronauts</span>
                                </td>
                                <td>
                                    Orbiting at ~7.7 km/s, the speed effect
                                    wins slightly. After ~6 months, an
                                    astronaut ages a few <em>thousandths of
                                    a second</em> less than people on the
                                    ground. Tiny — but real and repeatedly
                                    confirmed.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="pill">GPS satellites</span>
                                </td>
                                <td>
                                    High up and fast, their clocks drift ~38
                                    microseconds per day relative to the
                                    ground (altitude speeds them up more than
                                    orbital speed slows them down). Left
                                    uncorrected, your map position would drift
                                    off by{" "}
                                    <span className="rel-strong">
                                        ~10 km every day
                                    </span>
                                    . GPS literally cannot work without
                                    relativity baked in.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="pill">
                                        Atomic clocks on jets
                                    </span>
                                </td>
                                <td>
                                    In 1971, atomic clocks flown around the
                                    world on commercial airliners came back
                                    disagreeing with ground clocks by exactly
                                    the predicted billionths of a second.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="pill two">
                                        Interstellar ship
                                    </span>
                                </td>
                                <td>
                                    At 99% of light-speed (γ ≈ 7), a 5-year
                                    voyage for the crew would see{" "}
                                    <span className="rel-strong">~35 years</span>{" "}
                                    pass on Earth. Push to 99.9% and a crew
                                    could cross the galaxy in a lifetime —
                                    returning to an Earth tens of thousands of
                                    years older.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* §07 */}
                    <h2 className="rel-h2">
                        <span className="rel-secnum">
                            07 / The one-sentence version
                        </span>
                    </h2>
                    <p className="rel-oneline">
                        Because the speed of light is fixed for everyone,
                        moving fast and being far from gravity both make{" "}
                        <em>your</em> clock run slow as seen by those you left
                        behind — so when you return, less time has passed for
                        you, and you&apos;ve aged less.
                    </p>

                    <footer className="rel-footer">
                        Time dilation · Δt(earth) = γ · Δt(traveler) · γ =
                        1/√(1−v²/c²)
                        <br />
                        Toggle light/dark above · Drag the §03 slider to feel
                        how violently γ climbs near light-speed.
                        <div style={{ marginTop: 20 }}>
                            <Link
                                href="/blog"
                                style={{
                                    color: "var(--earth-txt)",
                                    textDecoration: "none",
                                }}
                            >
                                ← Back to Blog
                            </Link>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
