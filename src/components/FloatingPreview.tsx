import { Circle, MonitorPlay } from "lucide-react";

const NODES = [
  { cx: 90, cy: 34, r: 5.5 },
  { cx: 34, cy: 78, r: 4.5 },
  { cx: 150, cy: 88, r: 4.5 },
  { cx: 58, cy: 128, r: 4 },
  { cx: 118, cy: 140, r: 4 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
];

export function FloatingPreview() {
  return (
    <div className="relative mx-auto h-[480px] w-full max-w-lg sm:h-[520px]">
      {/* Kartu proyektor — live transcript */}
      <div
        className="drift absolute top-0 right-0 w-[270px] rounded-lg bg-ink p-4 text-paper shadow-[0_24px_50px_-20px_rgba(27,23,18,0.5)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-16px_rgba(27,23,18,0.65)] sm:right-4"
        style={{ "--drift-rot": "-3deg", transform: "rotate(-3deg)" } as React.CSSProperties}
      >
        <div className="mb-3 flex items-center justify-between text-[10.5px] tracking-wide text-paper/50 uppercase">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent" />
            Live di proyektor
          </span>
          <MonitorPlay className="size-4" />
        </div>
        <p className="font-serif text-[14.5px] leading-snug text-paper/90">
          “...fotosintesis mengubah cahaya matahari jadi energi kimia
          <span className="blink-cursor">|</span>”
        </p>
      </div>

      {/* Kartu peta pikiran */}
      <div
        className="drift absolute top-[132px] left-0 w-[268px] rounded-lg border border-line bg-card p-4.5 shadow-[0_28px_60px_-24px_rgba(27,23,18,0.35)] transition-shadow duration-300 hover:shadow-[0_32px_70px_-18px_rgba(27,23,18,0.45)] sm:top-36"
        style={{ "--drift-rot": "2deg", transform: "rotate(2deg)", animationDelay: "0.6s" } as React.CSSProperties}
      >
        <div className="mb-2 flex items-center gap-1.5 text-[10.5px] tracking-wide text-ink-faint uppercase">
          <span className="size-1.5 rounded-full bg-confirm" />
          Peta pikiran
        </div>
        <svg viewBox="0 0 180 160" className="h-28 w-full">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].cx}
              y1={NODES[a].cy}
              x2={NODES[b].cx}
              y2={NODES[b].cy}
              stroke="var(--color-line)"
              strokeWidth="1.5"
            />
          ))}
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={i === 0 ? "var(--color-accent)" : "var(--color-ink)"}
              opacity={i === 0 ? 1 : 0.75}
            />
          ))}
        </svg>
      </div>

      {/* Kartu kuis */}
      <div
        className="drift absolute right-0 bottom-0 w-[250px] rounded-lg border border-line bg-card p-4.5 shadow-[0_24px_50px_-20px_rgba(27,23,18,0.35)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-16px_rgba(27,23,18,0.45)] sm:right-6"
        style={{ "--drift-rot": "-1.5deg", transform: "rotate(-1.5deg)", animationDelay: "1.1s" } as React.CSSProperties}
      >
        <div className="mb-2.5 flex items-center gap-1.5 text-[10.5px] tracking-wide text-ink-faint uppercase">
          <span className="size-1.5 rounded-full bg-accent" />
          Kuis kelas
        </div>
        <p className="mb-2.5 text-[13.5px] font-medium text-ink">Apa hasil fotosintesis?</p>
        <div className="flex flex-col gap-1.5">
          {["Oksigen & glukosa", "Karbon dioksida", "Nitrogen"].map((opt, i) => (
            <div
              key={opt}
              className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[12px] ${
                i === 0
                  ? "border-confirm/40 bg-confirm/10 text-confirm"
                  : "border-line text-ink-soft"
              }`}
            >
              <Circle className="size-2.5 shrink-0" fill={i === 0 ? "currentColor" : "none"} />
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
