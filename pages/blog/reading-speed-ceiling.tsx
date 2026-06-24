"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/v2.css";

export default function ReadingSpeedCeiling() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
    }, []);

    const t = dark ? "dark" : "light";

    return (
        <>
            <Head>
                <title>Hold the Firehose — Nick White</title>
                <meta
                    name="description"
                    content="LLM providers are racing to push 100+ tokens per second. But you can only read about 12 characters per second. That gap is the core UX problem nobody is talking about."
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
                    gap: 6px;
                    color: var(--ink-dim);
                    text-decoration: none;
                    font-family: var(--mono);
                    font-size: 13px;
                    letter-spacing: 0.04em;
                    transition: color 0.2s;
                }
                .sh-nav-back:hover {
                    color: var(--ink-strong);
                }
                .sh-toggle {
                    background: transparent;
                    border: 1px solid var(--line);
                    border-radius: 6px;
                    padding: 5px 12px;
                    font-family: var(--mono);
                    font-size: 12px;
                    color: var(--ink-dim);
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                }
                .sh-toggle:hover {
                    border-color: var(--accent);
                    color: var(--ink-strong);
                }
                .sh-wrap {
                    max-width: 740px;
                    margin: 0 auto;
                    padding: 48px 22px 80px;
                }
                .sh-header {
                    margin-bottom: 52px;
                }
                .sh-kicker {
                    font-family: var(--mono);
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: var(--accent);
                    margin-bottom: 16px;
                }
                .sh-h1 {
                    font-family: var(--disp);
                    font-size: clamp(36px, 6vw, 62px);
                    font-weight: 400;
                    line-height: 1.08;
                    letter-spacing: -0.02em;
                    color: var(--ink-strong);
                    margin: 0 0 20px;
                }
                .sh-lede {
                    font-size: 19px;
                    line-height: 1.6;
                    color: var(--ink-dim);
                    margin: 0 0 14px;
                }
                .sh-date {
                    font-family: var(--mono);
                    font-size: 13px;
                    color: var(--ink-dim);
                    margin: 0;
                }
                .sh-h2 {
                    font-family: var(--disp);
                    font-size: 28px;
                    font-weight: 400;
                    line-height: 1.2;
                    color: var(--ink-strong);
                    margin: 52px 0 18px;
                }
                .sh-secnum {
                    display: block;
                    font-family: var(--mono);
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--ink-dim);
                    margin-bottom: 6px;
                    font-weight: 400;
                }
                .sh-p {
                    margin: 0 0 18px;
                    max-width: 66ch;
                    color: var(--ink);
                }
                .sh-p strong {
                    color: var(--ink-strong);
                }
                .sh-callout {
                    border-left: 3px solid var(--accent);
                    background: var(--accent-dim);
                    padding: 18px 22px;
                    margin: 28px 0;
                    border-radius: 0 8px 8px 0;
                    font-size: 17px;
                    line-height: 1.6;
                    color: var(--ink);
                }
                .sh-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 28px 0;
                    font-family: var(--mono);
                    font-size: 14px;
                }
                .sh-table th {
                    text-align: left;
                    color: var(--ink-dim);
                    font-weight: 400;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    font-size: 11px;
                    padding: 10px 12px;
                    border-bottom: 1px solid var(--line);
                }
                .sh-table td {
                    padding: 10px 12px;
                    border-bottom: 1px solid var(--line);
                    color: var(--ink);
                }
                .sh-table td.accent {
                    color: var(--accent);
                    letter-spacing: 0.02em;
                }
                .sh-table td.mono {
                    color: var(--ink-dim);
                }
                .sh-pros-cons {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 18px;
                    margin: 28px 0;
                }
                .sh-card {
                    border: 1px solid var(--line);
                    border-radius: 10px;
                    padding: 18px 20px;
                    background: var(--accent-dim);
                }
                .sh-card-label {
                    font-family: var(--mono);
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin: 0 0 12px;
                }
                .sh-card-label.for {
                    color: var(--accent);
                }
                .sh-card-label.against {
                    color: var(--ink-dim);
                }
                .sh-card ul {
                    margin: 0;
                    padding: 0 0 0 16px;
                }
                .sh-card li {
                    margin-bottom: 6px;
                    font-size: 15px;
                    line-height: 1.5;
                    color: var(--ink);
                }
                .sh-stack {
                    background: var(--accent-dim);
                    border: 1px solid var(--line);
                    border-radius: 8px;
                    padding: 18px 20px;
                    margin: 28px 0;
                    font-family: var(--mono);
                    font-size: 14px;
                    line-height: 1.7;
                    white-space: pre;
                    overflow-x: auto;
                    color: var(--ink);
                }
                .sh-stack span {
                    color: var(--accent);
                }
                .sh-closer {
                    margin: 48px 0 0;
                    font-size: 20px;
                    line-height: 1.5;
                    color: var(--ink-strong);
                    border-top: 1px solid var(--line);
                    padding-top: 32px;
                }
                .sh-footer {
                    margin-top: 48px;
                    font-family: var(--mono);
                    font-size: 12px;
                    color: var(--ink-dim);
                    letter-spacing: 0.04em;
                    padding-top: 24px;
                    border-top: 1px solid var(--line);
                }
                @media (max-width: 600px) {
                    .sh-pros-cons {
                        grid-template-columns: 1fr;
                    }
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
                        <p className="sh-kicker">AI · UX Constraints</p>
                        <h1 className="sh-h1">Hold the Firehose</h1>
                        <p className="sh-lede">
                            Every LLM provider is racing to push 100+ tokens per second — faster
                            inference, speculative decoding, quantized attention, hardware-optimized
                            kernels. And almost none of it matters for the one use case that defines
                            the entire product category: you, sitting in front of a screen, trying
                            to read what the model is telling you.
                        </p>
                        <p className="sh-date">June 2026</p>
                    </header>

                    {/* §01 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The token-rate wars</span>
                        Speed as a benchmark
                    </h2>
                    <p className="sh-p">
                        Look at any LLM leaderboard, any model announcement, any inference
                        benchmark. The headline number is always tokens per second. GPT-4o
                        pushes past 100 tok/s in the API. Claude Sonnet 4.6 benchmarks at 120+.
                        Grok claims 150 on the fastest hardware. DeepSeek R1, even with its
                        chain-of-thought, reportedly pushes 80+ tok/s on optimized infrastructure.
                        The race is real and it is well-funded.
                    </p>
                    <p className="sh-p">
                        And it is, for interactive use, largely irrelevant.
                    </p>
                    <p className="sh-p">
                        Where token-rate matters is batch processing — summarizing a corpus,
                        generating code at scale, translating documents, re-ranking search results.
                        In those scenarios, raw throughput directly reduces wall-clock time and that
                        translates to real value. But those are headless operations. No human is
                        reading the output as it streams.
                    </p>

                    {/* §02 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / The human bottleneck</span>
                        You read at ~12 characters per second
                    </h2>
                    <p className="sh-p">
                        Let&apos;s anchor on real numbers. Average adult reading speed in English
                        is about 200–250 words per minute for comfortable comprehension. For
                        technical or dense text — which is what you&apos;re typically asking an
                        LLM to produce — that drops to 180–200 wpm. A typical English token in an
                        LLM is roughly 3–4 characters. At 200 wpm, you&apos;re consuming about 12–14
                        characters per second.
                    </p>
                    <p className="sh-p">
                        Now overlay the model. At 100 tokens per second, the LLM is generating
                        roughly 350–400 characters per second. That is <strong>30x faster</strong>
                        than you can read it. The gap is not marginal — it is a canyon.
                    </p>

                    <table className="sh-table">
                        <thead>
                            <tr>
                                <th>Layer</th>
                                <th>Rate</th>
                                <th>Relative to reading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Human reading (dense text)</td>
                                <td>~12 char/s (~200 wpm)</td>
                                <td className="mono">1×</td>
                            </tr>
                            <tr>
                                <td>LLM at 20 tok/s</td>
                                <td>~70–80 char/s</td>
                                <td className="accent">~6× reading</td>
                            </tr>
                            <tr>
                                <td>LLM at 50 tok/s</td>
                                <td>~175–200 char/s</td>
                                <td className="accent">~15× reading</td>
                            </tr>
                            <tr>
                                <td>LLM at 100 tok/s</td>
                                <td>~350–400 char/s</td>
                                <td className="accent">~30× reading</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="sh-p">
                        Even at a modest 20 tokens per second — a rate that would have been
                        impressive two years ago — the model still outpaces your reading by a
                        factor of six. The model has generated the entire response before you
                        have finished reading the first sentence. Everything after that is
                        compute surplus.
                    </p>

                    {/* §03 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / The invisible UX cost</span>
                        Why excess speed hurts more than it helps
                    </h2>
                    <p className="sh-p">
                        Streaming text is not neutral. When a response streams faster than you can
                        read, you are forced into a specific cognitive mode: <strong>scan, don&apos;t
                        read</strong>. You watch the text accumulate, waiting for it to finish so you
                        can go back and actually absorb it. This is not an improvement — it is an
                        extra step.
                    </p>
                    <p className="sh-p">
                        Compare this to reading a static page or a book. You control the pace. You
                        linger. You re-read. The text does not pull your attention forward. Streaming
                        at 30× reading speed does exactly that — it creates a subtle urgency to
                        &ldquo;keep up&rdquo; that is antithetical to comprehension.
                    </p>
                    <p className="sh-p">
                        There is also the visual disruption. At high token rates the text jumps and
                        reflows constantly. If you are trying to read at the top of the response
                        while the model is still generating the bottom, every new token shifts the
                        text. Your place is lost. You scan the same sentence three times because the
                        line broke differently. This is not a niche complaint — it is the daily
                        experience of anyone who uses chat interfaces for real work.
                    </p>

                    <div className="sh-callout">
                        The speed of delivery should match the speed of consumption, not the
                        speed of generation. This is basic information physics: the faster a
                        message arrives, the more it disrupts the receiver&apos;s processing
                        loop.
                    </div>

                    {/* §04 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / The right metric</span>
                        Time to first thought
                    </h2>
                    <p className="sh-p">
                        If throughput is the wrong optimization target for interactive use, what
                        is the right one? The answer is <strong>time to first thought</strong> —
                        the latency between pressing enter and seeing the beginning of a coherent,
                        useful response.
                    </p>
                    <p className="sh-p">
                        This is fundamentally different from time to first token (TTFT), which is
                        the industry metric du jour. TTFT measures when <em>any</em> token arrives.
                        What matters is when the model has formulated enough context that the
                        response is <em>actionable</em>. A model that streams garbage tokens for 300ms
                        and then delivers a coherent argument has a great TTFT and terrible UX.
                    </p>
                    <p className="sh-p">
                        The real stack for interactive speed looks like this:
                    </p>

                    <div className="sh-stack">
                        {"  1. User presses enter                                  "}
                        {"     ↓                                                    "}
                        {"  2. Prefill: model processes prompt (~100–500ms)         "}
                        {"     ↓                                                    "}
                        {"  3. First coherent thought emerges (~500–1500ms)         "}
                        {"     ↓                                                    "}
                        {"  4. Output at reading speed (~12 char/s)                "}
                        {"     ↓                                                    "}
                        {"  5. User finishes reading, naturally pauses              "}
                        {"     ↓                                                    "}
                        {"  6. Model pre-computes next section during pause         "}
                    </div>

                    <p className="sh-p">
                        Step 3 is the bottleneck that matters. Everything before it is latency to
                        be minimized. Everything after it is throttled to match the human. The model
                        can be thinking ahead — pre-computing follow-ups, checking its reasoning,
                        planning the next section — <strong>while you are still reading the current
                        one</strong>. That is where speculative compute should be spent, not on
                        shoving text onto your screen faster than you can absorb it.
                    </p>

                    {/* §05 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / When fast actually matters</span>
                        The two regimes
                    </h2>
                    <p className="sh-p">
                        We have been arguing about a specific regime: <strong>interactive text
                        consumption</strong>. There is a second regime where throughput is genuinely
                        critical: <strong>batch and agentic processing</strong>.
                    </p>

                    <div className="sh-pros-cons">
                        <div className="sh-card">
                            <p className="sh-card-label for">Interactive (reading)</p>
                            <ul>
                                <li>User reads output in real time</li>
                                <li>Throughput cap: ~12–14 char/s</li>
                                <li>Critical metric: time to first <em>coherent</em> thought</li>
                                <li>Excess speed degrades UX (reflow, scan pressure)</li>
                                <li>Model should think ahead during user pause</li>
                            </ul>
                        </div>
                        <div className="sh-card">
                            <p className="sh-card-label against">Batch / agentic (headless)</p>
                            <ul>
                                <li>No human in the read loop</li>
                                <li>Throughput cap: hardware / cost budget</li>
                                <li>Critical metric: tokens per second, cost per token</li>
                                <li>Excess speed is pure win</li>
                                <li>Model should maximize output always</li>
                            </ul>
                        </div>
                    </div>

                    <p className="sh-p">
                        The mistake the industry makes is conflating these two regimes. When
                        OpenAI demos a model generating 100+ tok/s on stage, they are selling
                        batch-processing performance in an interactive wrapper. The demo looks
                        impressive because the text appears instantly. But the user watching it
                        does not read faster as a result. They wait differently — and waiting
                        while watching text you cannot read is arguably worse than waiting for a
                        spinner.
                    </p>

                    <p className="sh-p">
                        For agentic workflows — where LLMs call tools, write code, analyze data,
                        and pass results to other LLMs — throughput is everything. A chain of
                        three reasoning steps at 100 tok/s completes in seconds what would take
                        a minute at 10 tok/s. That is real. But nobody is reading those intermediate
                        tokens.
                    </p>

                    {/* §06 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / What this means for products</span>
                        Design for the reader, not the benchmark
                    </h2>
                    <p className="sh-p">
                        If you are building an LLM product, the choice is not between fast and slow.
                        It is between <strong>throttled and unthrottled</strong> delivery to the
                        human channel. Here is what that looks like in practice:
                    </p>

                    <p className="sh-p">
                        <strong>Throttle output to reading speed by default.</strong> The model
                        generates at full speed internally, but the frontend buffers and releases
                        at ~12–14 char/s. The user sees text appear at a pace they can actually
                        read. No reflow chaos. No scan pressure.
                    </p>
                    <p className="sh-p">
                        <strong>Expose a &ldquo;show all&rdquo; button</strong> for users who want
                        the full response immediately — the batch-mode escape hatch. Power users
                        who are copy-pasting or scanning structure will use it. Everyone else gets
                        the gentle flow.
                    </p>
                    <p className="sh-p">
                        <strong>Invest in pre-computation, not throughput.</strong> While the user
                        reads the first paragraph, the model should be preparing the second.
                        Speculative decoding should predict what the user will need next, not just
                        what the model will say next. Think ahead, don&apos;t shout faster.
                    </p>
                    <p className="sh-p">
                        <strong>Measure time to completion of user understanding</strong>, not time
                        to completion of generation. These are different numbers. One captures
                        whether the user got value. The other captures how fast the GPU ran.
                    </p>

                    <div className="sh-callout">
                        The industry is optimizing for a metric that saturates at roughly 12
                        characters per second. Everything beyond that is a flex, not a feature.
                        The flex matters for benchmarks. The feature matters for people.
                    </div>

                    <p className="sh-closer">
                        The reading speed ceiling is not a limitation to overcome — it is the
                        boundary within which a real product lives. The goal of an LLM interface
                        is not to generate text as fast as possible. The goal is to make the
                        user <em>understand</em> as fast as possible. Those are different
                        problems, and they demand different optimizations. The model that wins
                        the interactive race will not be the fastest generator. It will be the
                        one that learns when to wait for you.
                    </p>

                    <footer className="sh-footer">
                        AI · UX Constraints · Human-Computer Interaction
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