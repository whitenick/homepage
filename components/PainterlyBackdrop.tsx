/**
 * PainterlyBackdrop — an original, self-contained recreation of the
 * "Multica background" technique for the nickwhite.us hero.
 *
 * Technique (scoped from Multica's open-source web app):
 *   - A full-bleed painterly landscape sits behind the page content as a
 *     decorative layer (absolute inset-0, pointer-events-none).
 *   - The scene uses layered ridges that fade into atmospheric haze, a pale
 *     sun/moon disc, billowing clouds, and a tiny figure for scale — the
 *     signature "dreamy, vast landscape" composition.
 *
 * This version is drawn as inline SVG in the Mesa Brutalist v2 palette
 * (cream/sand/terracotta/sage) so it is original artwork, needs no external
 * image asset, and stays license-clean. `preserveAspectRatio="xMidYMid slice"`
 * mirrors Multica's `object-cover` behavior: whatever the viewport, the
 * painting crops to fill it.
 */
export default function PainterlyBackdrop() {
  return (
    <svg
      className="pointer-events-none h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Painterly desert mesa landscape at dawn"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sky wash: cream at the top (keeps the dark hero text readable),
            warming to sand near the horizon. */}
        <linearGradient id="pb-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9F7F4" />
          <stop offset="45%" stopColor="#F3ECDD" />
          <stop offset="75%" stopColor="#EBD9C0" />
          <stop offset="100%" stopColor="#E2C9A3" />
        </linearGradient>

        {/* Sun/moon glow */}
        <radialGradient id="pb-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FDF3DC" stopOpacity="1" />
          <stop offset="30%" stopColor="#F6E6C8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F6E6C8" stopOpacity="0" />
        </radialGradient>

        {/* Foreground ridge: terracotta toward the base, like the v2 mesa. */}
        <linearGradient id="pb-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A66B" />
          <stop offset="55%" stopColor="#B85C38" />
          <stop offset="100%" stopColor="#2D2926" />
        </linearGradient>

        {/* Soft atmospheric blur for the middle-distance ridges. */}
        <filter id="pb-haze" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id="pb-haze-sm" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>

        {/* Painterly grain: the same feTurbulence trick as the v2-grain
            overlay, kept very subtle so it reads as brush texture. */}
        <filter id="pb-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="0 0 0 0 0.45  0 0 0 0 0.40  0 0 0 0 0.35  0 0 0 0.04 0" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1440" height="900" fill="url(#pb-sky)" />

      {/* Sun disc + halo */}
      <circle cx="1110" cy="188" r="150" fill="url(#pb-glow)" />
      <circle cx="1110" cy="188" r="52" fill="#FDF3DC" opacity="0.9" />

      {/* Distant range — haziest, coolest (sage-blue) */}
      <g filter="url(#pb-haze)" opacity="0.55">
        <path
          d="M0 505 L140 452 L300 470 L470 428 L640 462 L810 420 L980 458 L1150 430 L1320 466 L1440 444 L1440 900 L0 900 Z"
          fill="#8FA48F"
        />
      </g>

      {/* Mid range — sand + sage, medium haze */}
      <g filter="url(#pb-haze-sm)" opacity="0.75">
        <path
          d="M0 560 L120 512 L260 536 L420 494 L600 528 L760 490 L920 522 L1080 492 L1240 530 L1440 502 L1440 900 L0 900 Z"
          fill="#C9BE9D"
        />
        <path
          d="M0 590 L180 552 L340 574 L520 540 L700 570 L880 536 L1060 566 L1240 540 L1440 566 L1440 900 L0 900 Z"
          fill="#C9A66B"
          opacity="0.85"
        />
      </g>

      {/* Billowing horizon clouds */}
      <g filter="url(#pb-haze-sm)" opacity="0.6">
        <ellipse cx="300" cy="560" rx="240" ry="26" fill="#F3E4C8" />
        <ellipse cx="900" cy="530" rx="300" ry="30" fill="#F6E8CC" />
        <ellipse cx="1300" cy="620" rx="220" ry="24" fill="#EFDFC0" />
      </g>

      {/* Near mesa complex — terracotta foreground */}
      <path
        d="M0 660 L100 622 L240 650 L380 600 L540 640 L700 596 L860 634 L1020 606 L1180 640 L1320 604 L1440 632 L1440 900 L0 900 Z"
        fill="url(#pb-near)"
      />

      {/* A second, darker ridge silhouette at the very base */}
      <path
        d="M0 760 L140 720 L300 750 L460 710 L620 748 L780 716 L940 750 L1100 720 L1260 752 L1440 726 L1440 900 L0 900 Z"
        fill="#2D2926"
        opacity="0.75"
      />

      {/* Tiny hiker for scale — the Multica-style figure lost in the vastness */}
      <g transform="translate(1050 642)">
        <circle cx="0" cy="-16" r="4" fill="#2D2926" />
        <rect x="-2.5" y="-12" width="5" height="9" rx="2" fill="#2D2926" transform="rotate(-8)" />
        <rect x="-7" y="-11" width="4" height="8" rx="1.5" fill="#7D8E7A" />
        <line x1="0" y1="-4" x2="4" y2="0" stroke="#2D2926" strokeWidth="1.6" />
      </g>
      {/* Trail the hiker walks */}
      <path
        d="M1010 660 Q1050 650 1090 668 T1190 700"
        fill="none"
        stroke="#E8D9C5"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Wildflower accents — coral + turquoise, echoing the v2 palette */}
      <g fill="#B85C38" opacity="0.7">
        <circle cx="240" cy="742" r="3" />
        <circle cx="330" cy="756" r="2.4" />
        <circle cx="520" cy="736" r="2.6" />
        <circle cx="720" cy="762" r="3.2" />
        <circle cx="880" cy="748" r="2.4" />
        <circle cx="1210" cy="756" r="2.8" />
        <circle cx="1350" cy="738" r="2.4" />
      </g>
      <g fill="#5E9A93" opacity="0.7">
        <circle cx="300" cy="766" r="2.6" />
        <circle cx="460" cy="758" r="3" />
        <circle cx="640" cy="748" r="2.4" />
        <circle cx="800" cy="772" r="3" />
        <circle cx="1020" cy="754" r="2.4" />
        <circle cx="1140" cy="768" r="2.8" />
      </g>

      {/* Brush texture overlay */}
      <rect width="1440" height="900" filter="url(#pb-grain)" opacity="0.5" />
    </svg>
  );
}