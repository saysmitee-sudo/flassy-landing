/** Soft warped grid backdrop for the hero (barrel distortion). */
function buildGridPaths() {
  const w = 1200;
  const h = 900;
  const cols = 20;
  const rows = 15;
  const k = 0.22;

  const distort = (x: number, y: number) => {
    const nx = (x / w) * 2 - 1;
    const ny = (y / h) * 2 - 1;
    const r2 = nx * nx + ny * ny;
    const f = 1 + k * r2;
    return [(nx * f + 1) * 0.5 * w, (ny * f + 1) * 0.5 * h] as const;
  };

  const line = (points: Array<readonly [number, number]>) =>
    points
      .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
      .join(" ");

  const vertical: string[] = [];
  for (let i = 0; i <= cols; i++) {
    const x = (i / cols) * w;
    const pts: Array<readonly [number, number]> = [];
    for (let j = 0; j <= 36; j++) {
      pts.push(distort(x, (j / 36) * h));
    }
    vertical.push(line(pts));
  }

  const horizontal: string[] = [];
  for (let j = 0; j <= rows; j++) {
    const y = (j / rows) * h;
    const pts: Array<readonly [number, number]> = [];
    for (let i = 0; i <= 48; i++) {
      pts.push(distort((i / 48) * w, y));
    }
    horizontal.push(line(pts));
  }

  return { vertical, horizontal };
}

const { vertical, horizontal } = buildGridPaths();

export function HeroGrid() {
  return (
    <div className="hero-grid" aria-hidden>
      <svg
        className="hero-grid__svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g
          fill="none"
          stroke="#111111"
          strokeOpacity="0.18"
          strokeWidth="1.25"
          strokeLinecap="round"
        >
          {vertical.map((d, i) => (
            <path key={`v-${i}`} d={d} />
          ))}
          {horizontal.map((d, i) => (
            <path key={`h-${i}`} d={d} />
          ))}
        </g>
      </svg>
      <div className="hero-grid__fade" />
    </div>
  );
}
