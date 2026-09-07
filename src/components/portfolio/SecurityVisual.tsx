/**
 * Lightweight abstract cybersecurity visual: secure cloud, network nodes and
 * connected infrastructure. Pure inline SVG — no images, no heavy libraries.
 */
export function SecurityVisual() {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Abstract illustration of a secure cloud connected to protected network nodes"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="sv-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="oklch(0.62 0.19 256)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.62 0.19 256)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sv-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.16 245)" />
          <stop offset="100%" stopColor="oklch(0.86 0.13 200)" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="185" r="190" fill="url(#sv-glow)" />

      {[150, 110, 70].map((r, i) => (
        <circle
          key={r}
          cx="210"
          cy="200"
          r={r}
          fill="none"
          stroke="url(#sv-stroke)"
          strokeOpacity={0.16 + i * 0.06}
          strokeWidth="1"
        />
      ))}

      <g stroke="url(#sv-stroke)" strokeWidth="1.2" strokeOpacity="0.55" className="dash-flow">
        <path d="M210 200 L210 50" fill="none" />
        <path d="M210 200 L340 275" fill="none" />
        <path d="M210 200 L80 275" fill="none" />
        <path d="M210 200 L210 350" fill="none" />
        <path d="M210 200 L345 130" fill="none" />
        <path d="M210 200 L75 130" fill="none" />
      </g>

      {[
        [210, 50],
        [340, 275],
        [80, 275],
        [210, 350],
        [345, 130],
        [75, 130],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="16" fill="oklch(0.175 0.032 265)" stroke="url(#sv-stroke)" strokeOpacity="0.6" />
          <circle cx={x} cy={y} r="4.5" fill="oklch(0.86 0.13 200)" />
        </g>
      ))}

      {/* Secure cloud + shield core */}
      <g transform="translate(210 200)">
        <circle r="52" fill="oklch(0.175 0.032 265)" stroke="url(#sv-stroke)" strokeOpacity="0.85" />
        <path
          d="M-26 8 a16 16 0 0 1 3 -31 a21 21 0 0 1 39 -6 a15 15 0 0 1 10 37 z"
          transform="translate(-3 -18) scale(0.85)"
          fill="none"
          stroke="oklch(0.86 0.13 200)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M0 -4 l16 7 v10 c0 10 -7 18 -16 21 c-9 -3 -16 -11 -16 -21 v-10 z"
          fill="oklch(0.62 0.19 256)"
          fillOpacity="0.25"
          stroke="url(#sv-stroke)"
          strokeWidth="1.6"
        />
        <path
          d="M-6 12 l5 5 l9 -10"
          fill="none"
          stroke="oklch(0.92 0.09 200)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
