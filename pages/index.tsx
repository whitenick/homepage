import Head from "next/head";
import { IBM_Plex_Sans } from "next/font/google";
import AlienSaucer from "@/components/AlienSaucer";
import { V2IndexNav } from "@/components/navbar/v2-index-nav";
import { Card, Badge } from '@serapiolabs/design-system';
import "../styles/v2.css";

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-ibm-plex",
    display: "swap",
});

export default function Index() {
    return (
        <div className="bg-[var(--color-background)] text-[var(--color-text)] antialiased v2-grain min-h-screen">
            <style jsx global>{`
                :root {
                    --font-ibm-plex: ${ibmPlexSans.style.fontFamily};
                }
                body {
                    font-family: var(--font-ibm-plex), sans-serif;
                }
                h1,
                h2,
                h3,
                .hd {
                    font-family: var(--font-fraunces), serif;
                }
            `}</style>

            <Head>
                <title>Nick White — Mesa Brutalist v2</title>
                <meta
                    name="description"
                    content="Building products at the intersection of technology and real-life impact."
                />
                <link rel="icon" href="/mountain.ico" />
            </Head>

            <section className="relative v2-page-gradient">
                {/* ── HERO ── */}
                <div className="relative min-h-screen flex items-center overflow-hidden">
                    <div className="absolute inset-0 v2-desert-gradient"></div>
                    <div className="v2-mesa"></div>

                    <div
                        className="absolute top-10 left-6 md:left-10 v2-ufo opacity-50"
                        aria-hidden="true"
                    >
                        <AlienSaucer />
                    </div>

                    <div className="absolute top-10 right-6 md:right-10">
                        <V2IndexNav />
                    </div>

                    <div className="relative w-full px-8 lg:px-16">
                        <div className="max-w-3xl">
                            <p className="hd text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-6">
                                Software Engineer &amp; Builder
                            </p>

                            <h1 className="hd text-6xl md:text-7xl leading-[0.95] text-[var(--color-text)] mb-3">
                                Nick
                                <br />
                                White
                            </h1>
                            <div className="v2-accent-bar mb-8"></div>

                            <p className="text-base text-[var(--color-text)]/55 font-light leading-relaxed max-w-lg mb-8">
                                Building.
                            </p>

                            <div className="flex gap-8 text-xs uppercase tracking-[0.12em]">
                                <details className="group/repos relative">
                                    <summary className="list-none cursor-pointer text-[var(--color-text)]/40 hover:text-[var(--color-accent)] transition-colors">
                                        REPOS
                                    </summary>
                                    <div className="absolute left-0 top-full mt-2 flex flex-col gap-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-sm px-4 py-3 shadow-md min-w-[100px]">
                                        <a
                                            href="https://github.com/whitenick"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors tracking-wide whitespace-nowrap"
                                        >
                                            GITHUB
                                        </a>
                                        <a
                                            href="https://gitlab.com/whitenick"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors tracking-wide whitespace-nowrap"
                                        >
                                            GITLAB
                                        </a>
                                    </div>
                                </details>
                                <a
                                    href="https://www.linkedin.com/in/nicholas-white-a4ba63110/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-text)]/40 hover:text-[var(--color-accent)] transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="mailto:nick@serapiolabs.com"
                                    className="text-[var(--color-text)]/40 hover:text-[var(--color-accent)] transition-colors"
                                >
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── PROJECTS ── */}
                <div className="w-full px-8 lg:px-16 py-28 md:py-36">
                    <div className="max-w-3xl">
                        <h2 className="hd text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-8">
                            Projects
                        </h2>

                        <Card className="block mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="hd text-2xl text-[var(--color-text)]">
                                    DishSync
                                </h3>
                                <span className="text-[var(--color-text)]/30 text-sm">
                                    →
                                </span>
                            </div>
                            <p className="text-sm text-[var(--color-text)]/50 mb-3">
                                AI-powered meal planning and nutrition tracking
                            </p>
                            <div className="flex gap-2">
                                <Badge variant="default">AI</Badge>
                                <Badge variant="secondary">Health</Badge>
                                <Badge variant="secondary">SaaS</Badge>
                            </div>
                        </Card>

                        <div className="space-y-1">
                            <a
                                href="https://foreclosures.serapiolabs.com"
                                className="flex items-center justify-between py-3 px-2 rounded-sm hover:bg-accent/5 transition-colors group"
                            >
                                <div>
                                    <span className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors">
                                        Foreclosures
                                    </span>
                                    <p className="text-xs text-[var(--color-text)]/40">
                                        Foreclosure market analysis tool.
                                    </p>
                                </div>
                                <span className="text-[var(--color-text)]/20 group-hover:text-[var(--color-accent)] text-xs transition-colors">
                                    →
                                </span>
                            </a>

                            <a
                                href="https://whitenick.github.io/recipes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-3 px-2 rounded-sm hover:bg-accent/5 transition-colors group"
                            >
                                <div>
                                    <span className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors">
                                        Recipes
                                    </span>
                                    <p className="text-xs text-[var(--color-text)]/40">
                                        Searchable recipe collection and meal inspiration
                                    </p>
                                </div>
                                <span className="text-[var(--color-text)]/20 group-hover:text-[var(--color-accent)] text-xs transition-colors">
                                    →
                                </span>
                            </a>

                            <a
                                href="/app/games"
                                className="flex items-center justify-between py-3 px-2 rounded-sm hover:bg-accent/5 transition-colors group"
                            >
                                <div>
                                    <span className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors">
                                      Animations
                                    </span>
                                    <p className="text-xs text-[var(--color-text)]/40">
                                        Collection of browser-based animations (Three.js).
                                    </p>
                                </div>
                                <span className="text-[var(--color-text)]/20 group-hover:text-[var(--color-accent)] text-xs transition-colors">
                                    →
                                </span>
                            </a>
                        </div>

                        <div className="v2-divider mt-20 mb-6"></div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-[var(--color-text)]/25 tracking-wide">
                                © 2026 · Austin, TX
                            </p>
                            <div className="flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]/40"></span>
                                <span className="w-2 h-2 rounded-full bg-[#C9A66B]/40"></span>
                                <span className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]/40"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}