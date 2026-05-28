import Head from "next/head";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import AlienSaucer from "@/components/AlienSaucer";
import "../../styles/v2.css";

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-ibm-plex",
    display: "swap",
});

export default function Blog() {
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

            <div className={`${ibmPlexSans.variable}`}>
                <section className="relative v2-page-gradient">
                    {/* Hero banner */}
                    <div className="relative h-[50vh] flex items-center overflow-hidden">
                        <div className="absolute inset-0 v2-desert-gradient"></div>
                        <div className="v2-mesa"></div>

                        {/* UFO (top-left) */}
                        <div
                            className="absolute top-10 left-6 md:left-10 v2-ufo opacity-50"
                            aria-hidden="true"
                        >
                            <Link href="/v2">
                                <AlienSaucer />
                            </Link>
                        </div>

                        {/* Index (top-right) */}
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
                                    <span className="text-[#2D2926] tracking-wide">
                                        Blog
                                    </span>
                                    <a
                                        href="/app"
                                        className="text-[#2D2926]/50 hover:text-[#B85C38] transition-colors tracking-wide"
                                    >
                                        Lab
                                    </a>
                                </div>
                            </details>
                        </div>

                        {/* Page title */}
                        <div className="relative w-full px-8 lg:px-16">
                            <div className="max-w-3xl">
                                <Link href="/v2" className="inline-block mb-2">
                                    <h1 className="hd text-5xl md:text-6xl leading-[0.95] text-[#2D2926] hover:text-[#B85C38] transition-colors">
                                        Blog
                                        <span
                                            className="inline-block text-[0.4em] md:text-[0.35em] align-middle ml-2 opacity-60"
                                            aria-hidden="true"
                                        >
                                            🏜️
                                        </span>
                                    </h1>
                                </Link>
                                <p className="text-xs uppercase tracking-[0.2em] text-[#7D8E7A]">
                                    Thoughts &amp; updates
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full px-8 lg:px-16 py-20 md:py-28">
                        <div className="max-w-3xl">
                            {/* Empty state */}
                            <div className="border border-dashed border-[#E8E6E1] rounded-sm p-12 text-center">
                                <p className="text-sm text-[#2D2926]/50 mb-2">
                                    Nothing here yet
                                </p>
                                <p className="text-xs text-[#2D2926]/30">
                                    Check back soon — or don&apos;t, I&apos;m
                                    not your boss.
                                </p>
                            </div>

                            {/* Footer */}
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
        </div>
    );
}
