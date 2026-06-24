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
                    content="You read at ~3 tokens per second. Your LLM generates at 100. That gap is not a technical challenge to overcome — it is 97 cents of every dollar you spend on inference evaporating into text you will never read."
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
                        <p className="sh-kicker">AI · Inference Economics</p>
                        <h1 className="sh-h1">Hold the Firehose</h1>
                        <p className="sh-lede">
                            You read at roughly three tokens per second. Your LLM generates at
                            one hundred. That gap is not a technical challenge to overcome — it
                            is 97 cents of every dollar you spend on inference evaporating
                            into text you will never read.
                        </p>
                        <p className="sh-date">June 2026</p>
                    </header>

                    {/* §01 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The math you cannot ignore</span>
                        The waste ratio
                    </h2>
                    <p className="sh-p">
                        Let me start with the number that should bother you more than it does:
                        <strong> 97% of output tokens in a typical interactive LLM session
                        are economically discarded.</strong> The model generates them. Your GPU
                        paid for them. And you never read them.
                    </p>
                    <p className="sh-p">
                        This is not a corner case or an edge of the distribution. It is the
                        default state of every conversation you have with a chatbot, every prompt
                        you type into an assistant, every code suggestion you accept or reject.
                        The entire consumer LLM industry is built on a cost model where the vast
                        majority of what you buy you throw away.
                    </p>
                    <p className="sh-p">
                        The intuition is simple. A human reading dense technical text consumes
                        roughly 200 words per minute — about 3 tokens per second. A model
                        generating at 100 tokens per second produces 33× what you can absorb.
                        The gap is not marginal. It is structural. And it gets worse the faster
                        the model gets, because your reading speed does not change.
                    </p>

                    <table className="sh-table">
                        <thead>
                            <tr>
                                <th>Output rate</th>
                                <th>Generated in 10s</th>
                                <th>You read in 10s</th>
                                <th>Wasted</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>20 tok/s</td>
                                <td>200 tokens</td>
                                <td>~30</td>
                                <td className="accent">85%</td>
                            </tr>
                            <tr>
                                <td>50 tok/s</td>
                                <td>500 tokens</td>
                                <td>~30</td>
                                <td className="accent">94%</td>
                            </tr>
                            <tr>
                                <td>100 tok/s</td>
                                <td>1,000 tokens</td>
                                <td>~30</td>
                                <td className="accent">97%</td>
                            </tr>
                            <tr>
                                <td>150 tok/s</td>
                                <td>1,500 tokens</td>
                                <td>~30</td>
                                <td className="accent">98%</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="sh-p">
                        The waste ratio increases with throughput. Every engineering hour spent
                        squeezing another 10 tok/s out of the inference stack makes the interactive
                        economics <em>worse</em>, not better. The optimization is running in the
                        wrong direction. And because the entire industry fetishizes token-rate as
                        the primary benchmark, nobody stops to ask whether faster output actually
                        creates value for the person reading it.
                    </p>

                    {/* §02 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / The ceiling nobody can move</span>
                        Why your reading speed is fixed
                    </h2>
                    <p className="sh-p">
                        Average adult reading speed in English is 200–250 words per minute for
                        comfortable comprehension. For technical or analytical text — which is
                        mostly what people ask LLMs to produce — that drops to 180–200 wpm.
                        Call it ~12 characters per second, or roughly 3 tokens per second on
                        average.
                    </p>
                    <p className="sh-p">
                        <strong>This is not going to improve.</strong> You cannot train your way
                        past it in any meaningful way. Speed-reading techniques exist but they
                        trade comprehension for pace, which defeats the purpose of reading
                        generated analysis. Your visual system processes around 10–12 fixations
                        per second. Each fixation captures about 1–2 words. The bandwidth of
                        human language comprehension is a biological constant, not a software
                        tweak.
                    </p>
                    <p className="sh-p">
                        Every LLM provider pretends this ceiling does not exist. They benchmark
                        tokens per second as if the human receptor were infinitely fast. It is
                        the equivalent of building a water main that can deliver 30,000 gallons
                        per hour to a kitchen sink with a 1-gallon-per-hour faucet. The
                        infrastructure is not the bottleneck. The tap is. And the tap is you.
                    </p>

                    <div className="sh-callout">
                        The industry is optimizing throughput on the only axis where the
                        performance ceiling is fixed — the human reading system. Every token
                        beyond ~3 per second is compute you paid for and cannot use. The faster
                        the model, the more money you burn per second of attention.
                    </div>

                    {/* §03 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / The cost of speed</span>
                        What you are actually paying for
                    </h2>
                    <p className="sh-p">
                        API pricing is per-token on both sides of the conversation. When you
                        prompt a model and it responds at 100 tok/s for 10 seconds, you are
                        billed for 1,000 output tokens. In those same 10 seconds, you absorbed
                        roughly 30 of them. You paid for 1,000 and used 30. That 97% waste is
                        not theoretical — it is a line item.
                    </p>
                    <p className="sh-p">
                        Run this across a team of ten developers using an LLM for an hour a day.
                        At 50 tok/s average output, each session generates roughly 30,000 output
                        tokens. The team reads maybe 900 of them per session. The rest are
                        discarded. Scale that to enterprise usage — thousands of employees,
                        millions of sessions — and the waste becomes a real line on a real
                        budget. Companies are doing massive OpenAI bills not because they are
                        getting massive value per token, but because they are buying tokens at
                        a rate their people cannot consume.
                    </p>
                    <p className="sh-p">
                        <strong>The provider benefits from this.</strong> A model that generates
                        100 tok/s burns through API credits faster than one that generates 10.
                        The per-token price is the same, so faster models are more profitable
                        per second of wall-clock usage. The incentives are perfectly aligned
                        for the provider to push throughput as high as possible and perfectly
                        misaligned for the user to get value from it. The speed race is not
                        neutral — it is a pricing strategy.
                    </p>
                    <p className="sh-p">
                        The uncomfortable truth: the interactive LLM market functions on a
                        model where the user pays for compute that serves the benchmark, not
                        the experience. Providers compete on throughput because throughput is
                        measurable, impressive, and profitable. They compete on reading-speed
                        value only when someone forces them to.
                    </p>

                    {/* §04 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / The UX cost is downstream</span>
                        Why the waste also feels bad
                    </h2>
                    <p className="sh-p">
                        The economic waste has a user-facing twin. When text streams faster than
                        you can read, you do not read faster — you enter a different cognitive
                        mode entirely: <strong>scan, wait, re-read.</strong> You watch the text
                        accumulate, holding a placeholder in your mind, waiting for it to stop
                        so you can go back and actually absorb what was said. Every second of
                        surplus generation is a second of cognitive overhead.
                    </p>
                    <p className="sh-p">
                        The visual disruption compounds it. At high token rates, the text jumps
                        and reflows constantly. Your place is lost. You scan the same sentence
                        three times because the line broke differently. This is not a minor
                        annoyance — it is a measurable degradation in comprehension that happens
                        every time you use a chat interface for real work.
                    </p>
                    <p className="sh-p">
                        Compare this to reading a book or a well-designed static page. You control
                        the pace. You linger. You re-read. The text does not pull your attention
                        forward. Streaming at 30× reading speed does the opposite — it creates a
                        subtle urgency to &ldquo;keep up&rdquo; that is antithetical to
                        understanding. And because you paid for it by the token, there is an
                        additional psychological friction: <em>I am watching money burn while
                        I try to finish this paragraph.</em>
                    </p>

                    <div className="sh-callout">
                        The UX cost and the economic cost are the same problem seen from
                        different sides. One is experienced as frustration. The other is
                        measured in API bills. Both are caused by generating text faster than
                        the person reading it can keep up.
                    </div>

                    {/* §05 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / When speed is worth the money</span>
                        The two regimes
                    </h2>
                    <p className="sh-p">
                        None of this means fast inference is useless. It means fast inference is
                        useful in a specific regime — <strong>headless processing</strong> — and
                        nearly useless in the other — <strong>interactive text consumption</strong>.
                        The industry conflates them constantly.
                    </p>

                    <div className="sh-pros-cons">
                        <div className="sh-card">
                            <p className="sh-card-label for">Interactive (reading)</p>
                            <ul>
                                <li>Human reads output in real time</li>
                                <li>Throughput cap: ~3 tok/s</li>
                                <li>97%+ of output tokens are wasted</li>
                                <li>Critical metric: time to first coherent thought</li>
                                <li>Model should think ahead during user pause</li>
                                <li>Throttled delivery saves money and improves UX</li>
                            </ul>
                        </div>
                        <div className="sh-card">
                            <p className="sh-card-label against">Batch / agentic (headless)</p>
                            <ul>
                                <li>No human in the read loop</li>
                                <li>Throughput cap: hardware / budget</li>
                                <li>100% of output tokens are consumed (by code)</li>
                                <li>Critical metric: tok/s, cost per token</li>
                                <li>Excess speed is pure value</li>
                                <li>Maximum throughput is always correct</li>
                            </ul>
                        </div>
                    </div>

                    <p className="sh-p">
                        When OpenAI demos a model generating 100+ tok/s on stage, they are
                        selling batch-processing performance in an interactive wrapper. The demo
                        looks impressive because the text appears instantly. But the person
                        watching it does not read faster. They pay more per interaction for the
                        privilege of watching text they cannot read accumulate on a screen.
                    </p>
                    <p className="sh-p">
                        For agentic workflows — where LLMs call tools, analyze data, and pass
                        results to other LLMs — throughput is everything. A three-step reasoning
                        chain at 100 tok/s completes in seconds what would take a minute at
                        10 tok/s. And crucially, <strong>nobody is reading those intermediate
                        tokens.</strong> Every token is consumed by the next agent in the chain.
                        The waste ratio is zero. The cost per useful unit of work is optimized
                        by going faster.
                    </p>
                    <p className="sh-p">
                        The mistake is treating the interactive user the same way. When the
                        consumer is human, the economics invert. Faster does not mean better.
                        Faster means more waste.
                    </p>

                    {/* §06 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / The product that does not exist yet</span>
                        A human-paced inference tier
                    </h2>
                    <p className="sh-p">
                        The natural conclusion of this argument is a product that nobody has
                        cleanly shipped: a <strong>human-paced inference tier.</strong> The same
                        model, contractually throttled to ~3 tokens per second output, offered
                        at a fraction of the per-token cost. You pay for what you actually read.
                    </p>
                    <p className="sh-p">
                        The provider wins because throttled output is predictable output.
                        Predictable output enables better batching, easier scheduling, and no
                        burst-pressure on GPU clusters. The marginal cost of serving a
                        human-paced interaction is lower than a bursty one, even if the model
                        is the same size. The provider captures that efficiency as margin or
                        passes it as discount.
                    </p>
                    <p className="sh-p">
                        The user wins because the bill matches the value. Instead of paying for
                        1,000 tokens and reading 30, they pay for 300 and read 300 — because
                        the model stops generating when the user pauses, or the frontend buffers
                        and releases at reading speed. The UX improves because the text stops
                        jumping. The cost drops because the waste disappears.
                    </p>
                    <p className="sh-p">
                        <strong>The counterargument:</strong> slow inference does not cost
                        proportionally less at the infrastructure layer because the model
                        still needs to attend over the full context window for each token.
                        Attention is O(n²) in context length, not in output speed. A throttled
                        model does not save on KV cache or prompt processing. This is true —
                        the savings are not linear. <strong>But they are real.</strong> The
                        marginal GPU time per output token is lower when you are not racing
                        against a throughput benchmark. You can batch more requests into the
                        same hardware when none of them demand burst output. The savings come
                        from utilization, not from cheaper per-token arithmetic.
                    </p>

                    <div className="sh-callout">
                        The model that wins the interactive race will not be the fastest
                        generator. It will be the one that offers a pricing model aligned
                        with how people actually consume text — and lets the benchmarks chase
                        each other for the batch-processing market.
                    </div>

                    {/* §07 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">07 / The wrong cost curve</span>
                        What to optimize instead
                    </h2>
                    <p className="sh-p">
                        If token-rate is the wrong optimization target for interactive use, what
                        replaces it? Three metrics matter more than throughput:
                    </p>

                    <p className="sh-p">
                        <strong>Time to first coherent thought.</strong> The latency between
                        pressing enter and seeing the beginning of a useful, structured response.
                        This is different from time to first token (TTFT), which measures when
                        <em>any</em> token arrives — including garbage, filler, or hedging
                        phrases. A model that thinks for 800ms and then delivers a sharp,
                        complete opening sentence is infinitely better than one that streams
                        empty tokens in 300ms and rambles toward a point. The metric should
                        measure when the model has <em>decided what to say</em>, not when it
                        started saying it.
                    </p>
                    <p className="sh-p">
                        <strong>Cost per understood word.</strong> Not cost per token, not cost
                        per response, but cost per unit of information the user actually absorbs.
                        This reframes the optimization entirely. A model that generates 3,000
                        tokens at 100 tok/s for a 30-word answer has a terrible cost-per-understood-word.
                        A model that generates 500 tokens at 10 tok/s for the same answer is
                        cheaper and faster from the user&apos;s perspective, even though its
                        token-rate benchmark is lower.
                    </p>
                    <p className="sh-p">
                        <strong>Time to completion of user understanding.</strong> Not time to
                        completion of generation. The wall clock from &ldquo;user asks a
                        question&rdquo; to &ldquo;user fully understands the answer.&rdquo; This
                        is the only metric that captures whether the interaction actually
                        succeeded. It accounts for generation time, re-reading, reflow disruption,
                        and the cognitive cost of scanning ahead. By this measure, a model that
                        outputs at reading speed and lets the user follow along without
                        interruption will often beat a faster model whose output the user has to
                        read twice.
                    </p>

                    <p className="sh-closer">
                        The inference industry is optimizing throughput on the axis where the
                        ceiling is a biological constant and the waste compounds with every
                        improvement. The race to 200 tok/s does not make interactive AI better.
                        It makes it cheaper to run benchmarks and more expensive to run
                        conversations. The true innovation is not a faster model — it is a
                        pricing model and a delivery mechanism aligned with how people actually
                        read. A firehose and a glass deliver the same water. The difference is
                        what you can drink.
                    </p>

                    <footer className="sh-footer">
                        AI · Inference Economics · Human-Computer Interaction
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