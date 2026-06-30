import React from "react";

const links = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Lab", href: "/app" },
] as const;

export const V2IndexNav: React.FunctionComponent<{
    current?: string;
}> = ({ current }) => {
    return (
        <details className="group text-xs">
            <summary className="list-none cursor-pointer uppercase tracking-[0.15em] text-[#2D2926]/40 hover:text-[#2D2926] transition-colors flex items-center gap-2">
                <span className="w-4 h-px bg-[#2D2926]/30 group-open:w-6 group-open:bg-[#B85C38] transition-all"></span>
                Index
            </summary>
            <div className="flex gap-6 text-xs mt-4 pt-4 border-t border-[#E8E6E1]">
                {links.map((link) => {
                    const isCurrent =
                        current?.toLowerCase() === link.name.toLowerCase();
                    return isCurrent ? (
                        <span
                            key={link.name}
                            className="text-[#2D2926] tracking-wide"
                        >
                            {link.name}
                        </span>
                    ) : (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[#2D2926]/50 hover:text-[#B85C38] transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </details>
    );
};
