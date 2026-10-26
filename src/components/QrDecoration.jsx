/* Decorative QR-style pattern — deterministic, generated from a fixed seed.
   This is a VISUAL DEMONSTRATION ONLY and does not encode a real destination. */

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SIZE = 21;

function buildModules() {
  const rand = mulberry32(20251021);
  const modules = [];
  const inFinder = (r, c) =>
    (r < 7 && c < 7) || (r < 7 && c >= SIZE - 7) || (r >= SIZE - 7 && c < 7);
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (!inFinder(r, c) && rand() > 0.52) {
        modules.push([r, c]);
      }
    }
  }
  return modules;
}

export default function QrDecoration({ size = 116 }) {
  const modules = buildModules();
  return (
    <figure className="qr-wrap">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="img"
        aria-label="Decorative QR-style pattern — visual demonstration only, not a scannable code"
      >
        <g fill="var(--accent)">
          {modules.map(([r, c]) => (
            <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} />
          ))}
          {/* finder squares */}
          <g fill="none" stroke="var(--accent)" strokeWidth={1}>
            <rect x={0.5} y={0.5} width={6} height={6} />
            <rect x={SIZE - 6.5} y={0.5} width={6} height={6} />
            <rect x={0.5} y={SIZE - 6.5} width={6} height={6} />
          </g>
          <rect x={2} y={2} width={3} height={3} />
          <rect x={SIZE - 5} y={2} width={3} height={3} />
          <rect x={2} y={SIZE - 5} width={3} height={3} />
        </g>
      </svg>
      <figcaption>Decorative demo pattern — not a live code</figcaption>
    </figure>
  );
}
