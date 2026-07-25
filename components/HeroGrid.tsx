/** Soft warped grid backdrop for the hero. */
function buildGridPaths(cols: number, rows: number) {
  const w = 1200;
  const h = 1000;
  const k = 0.18;

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

/** Coarser mesh for phones */
const mobile = buildGridPaths(9, 11);
/** Denser mesh for desktop */
const desktop = buildGridPaths(16, 14);

function GridSvg({
  className,
  paths,
  strokeWidth,
}: {
  className: string;
  paths: { vertical: string[]; horizontal: string[] };
  strokeWidth: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 1000"
      preserveAspectRatio="xMidYMin slice"
    >
      <g
        fill="none"
        stroke="#111111"
        strokeOpacity="0.17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      >
        {paths.vertical.map((d, i) => (
          <path key={`v-${i}`} d={d} />
        ))}
        {paths.horizontal.map((d, i) => (
          <path key={`h-${i}`} d={d} />
        ))}
      </g>
    </svg>
  );
}

export function HeroGrid() {
  return (
    <div className="hero-grid" aria-hidden>
      <GridSvg
        className="hero-grid__svg hero-grid__svg--mobile"
        paths={mobile}
        strokeWidth={1.35}
      />
      <GridSvg
        className="hero-grid__svg hero-grid__svg--desktop"
        paths={desktop}
        strokeWidth={1.2}
      />
    </div>
  );
}
