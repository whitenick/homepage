import Head from "next/head";
import { IBM_Plex_Sans } from "next/font/google";
import AlienSaucer from "@/components/AlienSaucer";
import "../../styles/v2.css";

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-ibm-plex",
    display: "swap",
});

export default function Index() {
    return (
        <div className="bg-[#F9F7F4] text-[#2D2926] antialiased v2-grain min-h-screen">
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
                        <details className="group text-xs">
                            <summary className="list-none cursor-pointer uppercase tracking-[0.15em] text-[#2D2926]/40 hover:text-[#2D2926] transition-colors flex items-center gap-2">
                                <span className="w-4 h-px bg-[#2D2926]/30 group-open:w-6 group-open:bg-[#B85C38] transition-all"></span>
                                Index
                            </summary>
                            <div className="flex gap-6 text-xs mt-4 pt-4 border-t border-[#E8E6E1]">
                                <a
                                    href="/v2/about"
                                    className="text-[#2D2926]/50 hover:text-[#B85C38] transition-colors tracking-wide"
                                >
                                    About
                                </a>
                                <a
                                    href="/v2/blog"
                                    className="text-[#2D2926]/50 hover:text-[#B85C38] transition-colors tracking-wide"
                                >
                                    Blog
                                </a>
                                <a
                                    href="/app"
                                    className="text-[#2D2926]/50 hover:text-[#B85C38] transition-colors tracking-wide"
                                >
                                    Lab
                                </a>
                            </div>
                        </details>
                    </div>

                    <div className="relative w-full px-8 lg:px-16">
                        <div className="max-w-3xl">
                            <p className="hd text-xs uppercase tracking-[0.2em] text-[#7D8E7A] mb-6">
                                Software Engineer &amp; Builder
                            </p>

                            <h1 className="hd text-6xl md:text-7xl leading-[0.95] text-[#2D2926] mb-3">
                                Nick
                                <br />
                                White
                                <span
                                    className="inline-block text-[0.4em] md:text-[0.35em] align-middle ml-2 opacity-60"
                                    aria-hidden="true"
                                >
                                    🏜️
                                </span>
                            </h1>
                            <div className="v2-accent-bar mb-8"></div>

                            <p className="text-base text-[#2D2926]/55 font-light leading-relaxed max-w-lg mb-8">
                                Building products at the intersection of
                                technology and real-life impact. Passionate
                                about AI, self-learning, and creating tools that
                                help others in daily life.
                            </p>

                            <div className="flex gap-8 text-xs uppercase tracking-[0.12em]">
                                <a
                                    href="https://github.com/whitenick"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#2D2926]/40 hover:text-[#B85C38] transition-colors"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nick-white-a4ba63110/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#2D2926]/40 hover:text-[#B85C38] transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="mailto:nick@serapiolabs.com"
                                    className="text-[#2D2926]/40 hover:text-[#B85C38] transition-colors"
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
                        <h2 className="hd text-xs uppercase tracking-[0.2em] text-[#7D8E7A] mb-8">
                            Projects
                        </h2>

                        <a
                            href="https://mlb-4e2.pages.dev/create-account"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="v2-card block rounded-sm px-6 py-6 mb-6 shadow-cool hover:shadow-cool-lg transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="hd text-2xl text-[#2D2926]">
                                    DishSync
                                </h3>
                                <span className="text-[#2D2926]/30 text-sm">
                                    →
                                </span>
                            </div>
                            <p className="text-sm text-[#2D2926]/50 mb-3">
                                AI-powered meal planning and nutrition tracking
                            </p>
                            <div className="flex gap-2">
                                <span className="v2-tag v2-tag-red">AI</span>
                                <span className="v2-tag">Health</span>
                                <span className="v2-tag">SaaS</span>
                            </div>
                        </a>

                        <div className="space-y-1">
                            <a
                                href="/app/behavior-buzz"
                                className="flex items-center justify-between py-3 px-2 rounded-sm hover:bg-[rgba(184,92,56,0.03)] transition-colors group"
                            >
                                <div>
                                    <span className="text-sm font-medium group-hover:text-[#B85C38] transition-colors">
                                        BehaviorBuzz
                                    </span>
                                    <p className="text-xs text-[#2D2926]/40">
                                        Classroom behavior tracking for teachers
                                    </p>
                                </div>
                                <span className="text-[#2D2926]/20 group-hover:text-[#B85C38] text-xs transition-colors">
                                    →
                                </span>
                            </a>

                            <a
                                href="/app/bird-tv"
                                className="flex items-center justify-between py-3 px-2 rounded-sm hover:bg-[rgba(184,92,56,0.03)] transition-colors group"
                            >
                                <div>
                                    <span className="text-sm font-medium group-hover:text-[#7D8E7A] transition-colors">
                                        Bird TV
                                    </span>
                                    <p className="text-xs text-[#2D2926]/40">
                                        Live bird feeder camera stream
                                    </p>
                                </div>
                                <span className="text-[#2D2926]/20 group-hover:text-[#7D8E7A] text-xs transition-colors">
                                    →
                                </span>
                            </a>

                            <a
                                href="/app/space"
                                className="flex items-center justify-between py-3 px-2 rounded-sm hover:bg-[rgba(184,92,56,0.03)] transition-colors group"
                            >
                                <div>
                                    <span className="text-sm font-medium group-hover:text-[#C9A66B] transition-colors">
                                        Space Explorer
                                    </span>
                                    <p className="text-xs text-[#2D2926]/40">
                                        3D space exploration experience
                                    </p>
                                </div>
                                <span className="text-[#2D2926]/20 group-hover:text-[#C9A66B] text-xs transition-colors">
                                    →
                                </span>
                            </a>

                            <a
                                href="/app/games"
                                className="flex items-center justify-between py-3 px-2 rounded-sm hover:bg-[rgba(184,92,56,0.03)] transition-colors group"
                            >
                                <div>
                                    <span className="text-sm font-medium group-hover:text-[#B85C38] transition-colors">
                                        Games
                                    </span>
                                    <p className="text-xs text-[#2D2926]/40">
                                        Collection of browser-based games
                                    </p>
                                </div>
                                <span className="text-[#2D2926]/20 group-hover:text-[#B85C38] text-xs transition-colors">
                                    →
                                </span>
                            </a>
                        </div>

                        <div className="v2-divider mt-20 mb-6"></div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-[#2D2926]/25 tracking-wide">
                                © 2026 · Austin, TX
                            </p>
                            <div className="flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#B85C38]/40"></span>
                                <span className="w-2 h-2 rounded-full bg-[#C9A66B]/40"></span>
                                <span className="w-2 h-2 rounded-full bg-[#7D8E7A]/40"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
