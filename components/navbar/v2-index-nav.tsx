import React from "react";

const links = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Lab", href: "https://serapiolabs.com" },
] as const;

export const V2IndexNav: React.FunctionComponent<{
    current?: string;
    tone?: "ink" | "paper";
}> = ({ current, tone = "ink" }) => {
    const onArt = tone === "paper";
    return (
        <details className="group text-xs">
            <summary
                className={`list-none cursor-pointer uppercase tracking-[0.15em] transition-colors flex items-center gap-2 ${
                    onArt
                        ? "text-white/60 hover:text-white"
                        : "text-[#2D2926]/40 hover:text-[#2D2926]"
                }`}
            >
                <span
                    className={`w-4 h-px transition-all group-open:w-6 ${
                        onArt
                            ? "bg-white/40 group-open:bg-[#C9A66B]"
                            : "bg-[#2D2926]/30 group-open:bg-[#B85C38]"
                    }`}
                ></span>
                Index
            </summary>
            <div
                className={`flex gap-6 text-xs mt-4 pt-4 border-t ${
                    onArt ? "border-white/20" : "border-[#E8E6E1]"
                }`}
            >
                {links.map((link) => {
                    const isCurrent =
                        current?.toLowerCase() === link.name.toLowerCase();
                    return isCurrent ? (
                        <span
                            key={link.name}
                            className={`tracking-wide ${
                                onArt ? "text-white" : "text-[#2D2926]"
                            }`}
                        >
                            {link.name}
                        </span>
                    ) : (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`tracking-wide transition-colors ${
                                onArt
                                    ? "text-white/70 hover:text-[#C9A66B]"
                                    : "text-[#2D2926]/50 hover:text-[#B85C38]"
                            }`}
                        >
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </details>
    );
};
