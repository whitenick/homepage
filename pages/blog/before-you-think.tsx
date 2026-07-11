"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/v2.css";

export default function BeforeYouThink() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
    }, []);

    const t = dark ? "dark" : "light";

    return (
        <>
            <Head>
                <title>Before You Think — Nick White</title>
                <meta
                    name="description"
                    content="A conversation about comprehension, consciousness, and the moment machines started understanding faster than humans. From the N400 window to the prefill phase — where we still hold the edge, and for how long."
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
                        <p className="sh-kicker">AI · Cognition</p>
                        <h1 className="sh-h1">Before You Think</h1>
                        <p className="sh-lede">
                            A conversation about comprehension, consciousness, and the exact moment
                            machines started understanding faster than humans. From the N400 window
                            in your brain to the prefill phase in a transformer — where we still
                            hold the edge, and how long that lasts.
                        </p>
                        <p className="sh-date">July 2026</p>
                    </header>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">01 / The Misunderstanding</span>
                        TTFT is not what I thought it was
                    </h2>
                    <p className="sh-p">
                        I asked about TTFT — time to first token. A metric in LLM inference. The
                        milliseconds between submitting a prompt and receiving the first output token.
                        The prefill phase. The attention computation. The answer was clean, technical,
                        and completely wrong for what I actually wanted to know.
                    </p>
                    <p className="sh-p">
                        What I meant was time to first <strong className="sh-strong">thought</strong>.
                        As in, the human one. How long does it take a person to comprehend what they
                        are reading — even the quickest readers? How fast does understanding arrive?
                        And at what point did the machine cross that threshold?
                    </p>
                    <p className="sh-p">
                        The answer to the first question is unsettling. The answer to the second is
                        closer than you think.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">02 / The Neural Timetable</span>
                        Your brain already knows before you do
                    </h2>
                    <p className="sh-p">
                        A human reading a word does not wait for conscious thought to begin
                        comprehension. The brain is already several steps ahead.
                    </p>
                    <table className="sh-table">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Event</th>
                                <th>Conscious?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0–50ms</td>
                                <td>Photons hit retina, signal travels optic nerve</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>50–100ms</td>
                                <td>V1 registers edges, shapes, letterforms</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>100–150ms</td>
                                <td>Visual word form area recognizes pattern as text</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>150–250ms</td>
                                <td>Lexical access — word meaning retrieved from memory (N200)</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>250–400ms</td>
                                <td>Semantic integration — coherence check against context (N400)</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>400–800ms</td>
                                <td>Anomaly detection, syntactic re-analysis (P600)</td>
                                <td>Borderline</td>
                            </tr>
                            <tr>
                                <td>800ms–2s</td>
                                <td>First conscious thought forms</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>2s+</td>
                                <td>Deliberate reasoning, inference, critique</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="sh-p">
                        The N400 component is the most revealing. If you read "I take my coffee with
                        cream and <strong className="sh-strong">socks</strong>," your brain generates
                        a massive N400 spike — electrical activity detectable on the scalp — before
                        you are consciously aware that anything is wrong. Your brain has already
                        checked the semantic fit, found it broken, and flagged the error. All of this
                        happens before you know you have understood anything.
                    </p>
                    <div className="sh-callout">
                        The first conscious thought you have about what you read is not the origin.
                        It is a report on processing that already happened. Your brain has answered
                        before you know you have asked.
                    </div>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">03 / The Crossover</span>
                        The year the machine got faster
                    </h2>
                    <p className="sh-p">
                        The historical timeline of comprehension speed is worth mapping precisely,
                        because the crossing happened recently and quietly.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">2020 — GPT-3.</strong> A short prompt took
                        several seconds of prefill on the hardware of the day. A human could read and
                        understand the same prompt in under a second. Human wins clearly.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">Late 2022 — ChatGPT (GPT-3.5) with optimized
                        inference.</strong> A short prompt processed in 500ms to 1 second. Roughly
                        competitive with human semantic integration time. Close to parity, but not
                        clearly faster.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">Late 2023 — Mistral 7B with FlashAttention on
                        an A100.</strong> A 50-token prompt prefills in ~30–60ms. That is faster than
                        your retina-to-V1 visual processing. Faster than the N400 component. Faster
                        than your brain's unconscious lexical access. The machine has understood the
                        literal meaning of your words before your own brain has even recognized them
                        as words.
                    </p>
                    <p className="sh-p">
                        <strong className="sh-strong">2024–2025 — H100 clusters, FlashAttention-2/3,
                        speculative decoding.</strong> A short prompt on a modern serving stack: 10–30ms
                        TTFT. A 1000-token document: 100–300ms. A human reading 1000 tokens at
                        deep-reading speed (~250 words per minute) takes over four minutes.
                    </p>
                    <p className="sh-p">
                        The machine crossed the human threshold somewhere between late 2022 and late
                        2023, depending on prompt length. For short prompts, it happened when
                        inference optimization reached the point where a model could prefill faster
                        than ~400ms — the time your brain takes to unconsciously integrate semantic
                        meaning.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">04 / Where the Gap Turns Absurd</span>
                        The 5000-token prompt problem
                    </h2>
                    <p className="sh-p">
                        Consider a 5000-token prompt — a short article of about 3500 words.
                    </p>
                    <p className="sh-p">
                        A human at deep-reading speed: ~4–5 tokens per second. Simple comprehension
                        of the full article: ~17 minutes. Deep comprehension with re-reading,
                        cross-referencing, and note-taking: 30 minutes or more.
                    </p>
                    <p className="sh-p">
                        A machine on an H100 in 2025: prefill time of ~500ms to 1.5 seconds.
                    </p>
                    <p className="sh-p">
                        The machine has absorbed and attended to every word in relation to every other
                        word — the full self-attention matrix — in the time it takes your eyes to
                        move across the first line of text. By the time you have read the first
                        sentence, the machine has already processed the entire article, generated its
                        first response token, and is working through the second paragraph of its reply.
                    </p>
                    <div className="sh-callout">
                        Comprehension speed compounds. The machine can read 10,000 documents in an
                        afternoon, cross-reference them all, and produce a synthesis that no human
                        could construct in a lifetime of reading. The speed advantage is not just
                        quantitative. It changes the kind of thinking that is possible.
                    </div>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">05 / What Speed Cannot Buy</span>
                        Sparse signal detection
                    </h2>
                    <p className="sh-p">
                        Speed is not depth. The human who reads the article has lived experience
                        against which to measure it. The human has a model of the world trained on
                        thirteen billion years of causal physics, not fifteen trillion tokens of text.
                        And the human can do something the machine cannot: <strong className="sh-strong">tell
                        you what matters.</strong>
                    </p>
                    <p className="sh-p">
                        A machine trained on text has no model of leverage. It can identify every
                        factual error in a document, but it cannot tell you which error is the one
                        that will bring down an empire. Given 10,000 documents, it will summarize
                        them all equally well. The human can read the same stack and say: "This
                        footnote on page 312 is the one that changes everything."
                    </p>
                    <p className="sh-p">
                        This is not a skill that can be taught through more data. It is a function of
                        having a model of the world that includes stakes, consequences, and the
                        relative importance of things. The machine has read everything. It can tell
                        you what everything says. But it does not know what matters, because nothing
                        actually matters to it.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">06 / Irony and the Unsaid</span>
                        The gap between classification and knowing
                    </h2>
                    <p className="sh-p">
                        Machines have gotten better at detecting sarcasm through training data. They
                        can classify irony with reasonable accuracy. But they do not <strong className="sh-strong">feel</strong> it.
                    </p>
                    <p className="sh-p">
                        Irony depends on a shared model of what is expected and a deliberate deviation
                        from it for effect. The human who reads "Great, another mandatory meeting that
                        could have been an email" understands not just the literal words but the
                        accumulated weight of a thousand such meetings — the resignation, the shared
                        understanding that everyone in the room feels the same way. The machine can
                        classify it as sarcasm. It cannot share the sigh.
                    </p>
                    <p className="sh-p">
                        The same gap applies to the unsaid. A machine processes only what is present
                        in the text. A human detects the absence — the thing the author is avoiding,
                        the argument that is conspicuously not made, the emotion that is being
                        suppressed. The machine reads the silence as nothing. The human knows the
                        silence is the whole point.
                    </p>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">07 / The Map and the Territory</span>
                        First principles where the data runs out
                    </h2>
                    <p className="sh-p">
                        When the training data runs out — when the problem has no precedent, no text
                        corpus, no existing answers — the machine falls back on statistical
                        interpolation. It guesses. It hallucinates a plausible-sounding answer. It
                        has no off-switch for its own confidence.
                    </p>
                    <p className="sh-p">
                        The human, at their best, reasons from first principles. They can say "I don't
                        know, but here is how I would find out" — and then build the knowledge from
                        scratch. The machine cannot admit it does not know. More fundamentally, it
                        does not know that knowing what you do not know matters.
                    </p>
                    <p className="sh-p">
                        A machine can describe grief with perfect fidelity — the stages, the
                        psychology, the literary history, the neurochemistry. It has seen every word
                        ever written about grief. It can write a poem about grief that passes a Turing
                        test. But the machine has never been surprised by grief. Never had grief arrive
                        differently than expected. Never realized, in the middle of it, that all the
                        books were right and somehow completely wrong at the same time.
                    </p>

                    <div className="sh-pros-cons">
                        <div className="sh-card">
                            <p className="sh-card-label for">Machine Wins</p>
                            <ul>
                                <li>Comprehension speed — 10–30ms per short prompt</li>
                                <li>Scale — 10,000 documents in an afternoon</li>
                                <li>Recall — perfect memory of everything it has seen</li>
                                <li>Pattern recognition — across vast corpora</li>
                                <li>No fatigue, no bias, no ego</li>
                            </ul>
                        </div>
                        <div className="sh-card">
                            <p className="sh-card-label against">Human Wins</p>
                            <ul>
                                <li>Knowing what matters — sparse signal detection</li>
                                <li>Irony and the unsaid — shared experience</li>
                                <li>First principles beyond the training distribution</li>
                                <li>Embodied knowledge — lived, not read</li>
                                <li>Knowing the boundaries of what you know</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="sh-h2">
                        <span className="sh-secnum">08 / The Question Nobody Answers</span>
                        How long does this last?
                    </h2>
                    <p className="sh-p">
                        Every gap I have described is real today. But the architectures are changing.
                        Embodied models exist. World models that learn from sensory data rather than
                        text are in development. The human advantage, if it turns out to be permanent,
                        will not be about data or compute. It will be about something the machine
                        cannot replicate because it does not have the hardware for it.
                    </p>
                    <p className="sh-p">
                        Consciousness. The subjective experience of being.
                    </p>
                    <p className="sh-p">
                        That is not a question we have answered yet. And it is the only question that
                        matters for the long game. If consciousness is necessary for the kind of
                        understanding that humans have — the kind that involves knowing what matters,
                        feeling irony, detecting the unsaid — then the machine will remain a savant
                        forever. Brilliant, tireless, and ultimately blind to the things that give
                        comprehension its weight.
                    </p>
                    <p className="sh-p">
                        But if consciousness is an emergent property of sufficient complexity — if
                        it is not a special substance but a phase transition in information processing
                        — then the gap is not permanent. It is just a lead, and the machine is
                        closing.
                    </p>

                    <p className="sh-closer">
                        The machine is catching up on the map. The territory still belongs to those
                        who live in it. For now.
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