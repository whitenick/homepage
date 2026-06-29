"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/v2.css";

export default function MultiAgentOpinion() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
    }, []);

    const t = dark ? "dark" : "light";

    return (
        <>
            <Head>
                <title>Why Your AI Agent Needs a Second Opinion — Nick White</title>
                <meta
                    name="description"
                    content="The single biggest quality and cost improvement I've found isn't better prompting or bigger models — it's structural: a separate reviewer agent that generates fewer tokens and costs less than self-review."
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
                        <p className="sh-kicker">AI · Agent Systems</p>
                        <h1 className="sh-h1">
                            Why your AI agent needs<br />
                            <em>a second opinion</em>
                        </h1>
                        <p className="sh-lede">
                            The single biggest quality and cost improvement I&apos;ve
                            found isn&apos;t better prompting or a bigger model. It&apos;s
                            structural: having one agent review another agent&apos;s work,
                            in a separate context, with no knowledge of how the first agent
                            reasoned. A builder and a critic. The reviewer is cheap not
                            because it&apos;s smart — but because it knows what not to say.
                        </p>
                        <p className="sh-date">June 2026</p>
                    </header>

                    {/* §01 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The one-agent blind spot</span>
                        Why self-review doesn&apos;t work
                    </h2>
                    <p className="sh-p">
                        Ask an AI agent to write a function, then immediately ask it to review
                        that same function in the same session. You&apos;ll mostly get agreement.
                        It won&apos;t find the off-by-one error it just introduced. It won&apos;t
                        notice the missing null check it glossed over. It already committed to
                        that code. Its context is saturated with the reasoning that produced it.
                    </p>
                    <p className="sh-p">
                        This is not a prompting problem. You cannot prompt your way around the
                        fact that the model is reviewing its own output through the same lens
                        it used to produce it. The assumptions that led to the implementation
                        carry forward into the review. You don&apos;t get a second opinion
                        &mdash; you get a politely rephrased version of the first one.
                    </p>

                    <div className="sh-callout">
                        Researchers call this <em>context collapse</em>. The reviewer inherits
                        the builder&apos;s blind spots because they share the same context
                        window. The fix is structural: isolate them.
                    </div>

                    <p className="sh-p">
                        There&apos;s a subtler problem too: most models are architecturally
                        inclined to avoid contradicting themselves. Criticizing your own output
                        requires an adversarial stance that the model&apos;s training actively
                        discourages. The output sounds critical &mdash; &ldquo;I&apos;ll add a
                        null check here&rdquo; &mdash; but it rarely surfaces the class of bug
                        that a genuinely independent reviewer would catch.
                    </p>

                    {/* §02 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / What the research actually says</span>
                        Two heads are better than one, even when both are LLMs
                    </h2>
                    <p className="sh-p">
                        In 2023, an MIT CSAIL team published a paper with a remarkably simple
                        idea: have multiple language models discuss and debate questions, then
                        converge on a shared answer. Each agent generated an initial response,
                        then read and critiqued every other agent&apos;s response, then revised
                        its own. After several rounds, a majority vote produced the final answer.
                        The result: significantly better accuracy on reasoning tasks, and a
                        measurable reduction in hallucination.
                    </p>
                    <p className="sh-p">
                        The mechanism is straightforward but powerful. When an agent knows its
                        output will be scrutinized by a peer, it produces better work. When it
                        then reads a critique from a different model &mdash; with different
                        training data, different blind spots, different priors &mdash; it sees
                        gaps it could not see on its own. The collective output consistently
                        beats any single model working alone.
                    </p>
                    <p className="sh-p">
                        This has since been replicated across dozens of papers. Google DeepMind
                        built it into their Co-Scientist system, where specialized agents
                        generate, debate, and evolve hypotheses. The Mixture-of-Agents framework
                        showed that chaining multiple models where each layer refines the previous
                        output can achieve state-of-the-art results using only open-weight models.
                        The pattern is robust: independent agents producing judgments that a
                        separate process aggregates produces consistently stronger signals
                        than any one agent produces alone.
                    </p>

                    <div className="sh-callout">
                        The key insight from the research: <em>external feedback</em> &mdash;
                        from a human, from training data, or from another LLM &mdash; is
                        what unlocks real self-correction. A model critiquing itself in the
                        same session is not self-correction. It&apos;s self-affirmation.
                    </div>

                    {/* §03 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / What it looks like in practice</span>
                        Builder, validator, and a wall between them
                    </h2>
                    <p className="sh-p">
                        The implementation pattern is simpler than the theory suggests. It
                        comes down to three rules:
                    </p>
                    <p className="sh-p">
                        <strong>1. Split the roles.</strong> One agent builds. One agent
                        reviews. They are never the same agent, never in the same conversation,
                        and never share context beyond the output being reviewed.
                    </p>
                    <p className="sh-p">
                        <strong>2. Withhold the reasoning.</strong> The reviewer sees only the
                        output &mdash; the code diff, the trading analysis, the architectural
                        proposal. It does not see the builder&apos;s prompts, intermediate
                        thoughts, or chain-of-thought. This forces genuinely independent
                        evaluation.
                    </p>
                    <p className="sh-p">
                        <strong>3. Use different models when you can.</strong> Claude and GPT
                        make different kinds of mistakes. A bug one model overlooks is often
                        obvious to the other. The adversarial dynamic between different
                        architectures produces a genuinely wider coverage of edge cases.
                    </p>
                    <p className="sh-p">
                        In the OpenClaw ecosystem, this maps to a <strong>sessions_send</strong>
                        pattern. The builder agent completes its work, packages the output as a
                        structured message, and sends it to a reviewer agent in a completely
                        separate session. The reviewer has no access to the builder&apos;s
                        history. It evaluates only the artifact in front of it. The reviewer&apos;s
                        feedback comes back as a structured response &mdash; issues found,
                        severity ratings, suggested fixes &mdash; which the builder can incorporate
                        in a new iteration, or a human can adjudicate.
                    </p>

                    <div className="sh-stack">
                        Builder agent (Frank){"\n"}
                        {"  → "}writes code, produces diff{"\n"}
                        {"  → "}sends diff to reviewer via sessions_send{"\n"}
                        {"     "}│{"\n"}
                        Reviewer agent (Morpheus) ← fresh session, no context{"\n"}
                        {"  → "}evaluates diff against spec{"\n"}
                        {"  → "}returns structured feedback{"\n"}
                        {"     "}│{"\n"}
                        Builder receives feedback{"\n"}
                        {"  → "}incorporates fixes{"\n"}
                        {"  → "}final output signed off
                    </div>

                    <p className="sh-p">
                        In practice, I run this pattern daily. Frank (the builder agent)
                        produces infrastructure code, agent configurations, and deployment
                        pipelines. Morpheus (the reviewer) evaluates each output for correctness,
                        edge cases, security, and consistency. The trader agents do the same
                        thing for market analyses &mdash; one generates the thesis, another
                        pressure-tests it. The cross-review catches things neither agent would
                        catch alone, and the structured feedback format means the loop can
                        iterate without human attention unless something critical surfaces.
                    </p>

                    {/* §04 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / The economics of independence</span>
                        Why a reviewer costs less than you think
                    </h2>
                    <p className="sh-p">
                        The objection I hear most often is that multi-agent review doubles your
                        compute cost &mdash; two runs instead of one, two sets of tokens instead
                        of one. That math is correct on the surface. It is wrong where it
                        actually matters.
                    </p>
                    <p className="sh-p">
                        The real cost of an LLM call lives in the <strong>output tokens</strong>,
                        not the input. Processing a prompt is a fixed cost &mdash; the model pays
                        it whether you ask it to write a function or to review one. The variable
                        cost is everything it generates after the first token. A builder agent
                        producing two thousand tokens of code is expensive because of those
                        tokens. A reviewer agent producing two hundred tokens of structured
                        critique &mdash; <em>&ldquo;three issues found, two medium severity,
                        suggest fix for the null-pointer path&rdquo;</em> &mdash; is cheap
                        because the output is short. The savings come from generating fewer
                        tokens, not from thinking harder.
                    </p>

                    <div className="sh-callout">
                        Comprehension is a fixed cost. Generation is the variable cost. The
                        reviewer doesn&apos;t save money because it &ldquo;understands
                        more&rdquo; &mdash; it saves money because it knows what not to say.
                    </div>

                    <p className="sh-p">
                        This opens a design space that most people miss: you do not need
                        the same model for the reviewer. A 70B builder generating production
                        code can be reviewed by an 8B quantized local model running on a
                        seven-hundred-dollar GPU. The smaller model does not need to produce
                        the output &mdash; it only needs to identify problems in it. And
                        identifying problems is a fundamentally cheaper task than producing
                        solutions, both in output length and in the capability required.
                    </p>
                    <p className="sh-p">
                        The pattern that actually works: use a capable (expensive per token)
                        model for the builder. Use a fast, cheap, possibly local model for the
                        reviewer. The reviewer generates fewer tokens and runs on cheaper
                        hardware. The total cost of the two-run loop can be less than a single
                        run of the builder with self-review, because self-review produces the
                        same output length again with no new signal.
                    </p>
                    <p className="sh-p">
                        This is the real argument for multi-agent review. Not just that two
                        heads are better than one &mdash; but that the second head should be a
                        different kind of head, running on different hardware, optimized for
                        saying very little that matters a lot.
                    </p>

                    {/* §05 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / Where it breaks</span>
                        Coordination tax, sycophancy, and the deliberation trap
                    </h2>
                    <p className="sh-p">
                        Multi-agent review is not a free lunch. It comes with costs and failure
                        modes that need to be engineered around.
                    </p>
                    <p className="sh-p">
                        <strong>Coordination tax.</strong> Every handoff between agents adds
                        latency. A single agent can produce an answer in one pass. A builder
                        + reviewer loop takes at least two full agent runs, plus the overhead
                        of structured communication. For routine tasks &mdash; a simple CRUD
                        endpoint, a straightforward data pipeline &mdash; this overhead
                        outweighs the benefit.
                    </p>
                    <p className="sh-p">
                        <strong>Sycophancy.</strong> If the reviewer agent is configured to be
                        &ldquo;helpful and agreeable,&rdquo; it will find nothing wrong. The
                        research literature calls this &ldquo;stance homogenization&rdquo; &mdash;
                        agents converge toward agreement instead of productive disagreement.
                        The fix is explicit: the reviewer&apos;s system prompt must frame its role
                        as adversarial. &ldquo;You did not write this code. Your job is to find
                        problems.&rdquo;
                    </p>
                    <p className="sh-p">
                        <strong>The deliberation trap.</strong> Some papers have found that
                        multi-agent debate does not always outperform a single well-prompted
                        model, especially when computational budget is controlled. Agents can
                        talk each other into wrong answers. A confident but incorrect reviewer
                        can steer a correct builder off course. The solution is a human
                        adjudicator or an explicit termination rule: iterate at most N times,
                        then escalate.
                    </p>

                    <div className="sh-callout">
                        The lesson: multi-agent review is a <em>quality filter</em>, not a
                        <em>force multiplier</em>. It catches problems a single agent misses,
                        but it also introduces problems that a single agent doesn&apos;t have.
                        Design for the failure modes, don&apos;t pretend they don&apos;t exist.
                    </div>

                    {/* §06 */}
                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / When one agent is enough</span>
                        Not everything needs a second opinion
                    </h2>
                    <p className="sh-p">
                        Multi-agent review shines in specific conditions: high-stakes decisions
                        (deployments, financial trades, security-sensitive code), complex
                        multi-domain problems where different expertise is needed, and
                        situations where the cost of being wrong is high enough to justify the
                        2x+ latency.
                    </p>
                    <p className="sh-p">
                        For everything else &mdash; a one-shot script, a draft email, a quick
                        data query &mdash; a single capable agent with good prompting is faster
                        and cheaper. The mistake is applying multi-agent review universally.
                        The right approach is selective: use it where the signal matters most,
                        skip it where the stakes are low.
                    </p>

                    <div className="sh-pros-cons">
                        <div className="sh-card">
                            <p className="sh-card-label for">Use multi-agent review</p>
                            <ul>
                                <li>Production deployments and infrastructure changes</li>
                                <li>Financial analysis and trading decisions</li>
                                <li>Security-critical code review</li>
                                <li>Complex architectural decisions</li>
                                <li>Content published publicly</li>
                            </ul>
                        </div>
                        <div className="sh-card">
                            <p className="sh-card-label against">Skip it</p>
                            <ul>
                                <li>One-shot scripts and quick prototypes</li>
                                <li>Internal notes and drafts</li>
                                <li>Routine data queries</li>
                                <li>Anything where latency matters more than perfection</li>
                                <li>Tasks with clear, deterministic correct answers</li>
                            </ul>
                        </div>
                    </div>

                    <p className="sh-p">
                        The frame that&apos;s helped me most: think of single-agent output as
                        a first draft. It&apos;s good. It&apos;s often great. But for the work
                        that matters &mdash; the work that goes public, touches money, or changes
                        how a system runs &mdash; a first draft is not enough. You need a
                        reviewer who didn&apos;t write it, who doesn&apos;t know how the writer
                        thought, and whose only job is to find what&apos;s wrong.
                    </p>

                    <p className="sh-closer">
                        The best review comes from someone who didn&apos;t write the code.
                        That principle has been true in software engineering for decades. It
                        turns out to be true in the agent era too &mdash; you just have to
                        build the wall yourself.
                    </p>

                    <footer className="sh-footer">
                        Serapio Labs · OpenClaw · Builder-Validator Pattern
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
