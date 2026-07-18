type MotifVariant = "book" | "graduation" | "lightbulb" | "compass" | "chakra";

const PATHS: Record<MotifVariant, React.ReactNode> = {
  book: (
    <>
      <path d="M20 34 Q50 20 100 30 Q150 20 180 34 V150 Q150 138 100 148 Q50 138 20 150 Z" />
      <path d="M100 30 V148" />
      <path d="M34 52 Q65 44 92 50" />
      <path d="M34 72 Q65 64 92 70" />
      <path d="M108 50 Q135 44 166 52" />
      <path d="M108 70 Q135 64 166 72" />
    </>
  ),
  graduation: (
    <>
      <path d="M20 70 L100 34 L180 70 L100 106 Z" />
      <path d="M56 86 V126 Q100 148 144 126 V86" />
      <path d="M180 70 V116" strokeLinecap="round" />
      <circle cx="180" cy="126" r="4" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M100 26 Q146 26 146 74 Q146 100 124 116 V138 H76 V116 Q54 100 54 74 Q54 26 100 26 Z" />
      <path d="M82 152 H118" strokeLinecap="round" />
      <path d="M88 168 H112" strokeLinecap="round" />
      <path d="M100 66 Q80 76 88 100" strokeLinecap="round" />
    </>
  ),
  compass: (
    <>
      <circle cx="100" cy="112" r="54" />
      <path d="M100 30 L82 66 L118 66 Z" />
      <circle cx="100" cy="30" r="6" />
      <path d="M100 92 L100 132" strokeLinecap="round" />
      <path d="M78 118 L122 106" strokeLinecap="round" />
    </>
  ),
  chakra: (
    <>
      <circle cx="100" cy="100" r="84" />
      <circle cx="100" cy="100" r="14" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 100 + Math.cos(angle) * 26;
        const y1 = 100 + Math.sin(angle) * 26;
        const x2 = 100 + Math.cos(angle) * 78;
        const y2 = 100 + Math.sin(angle) * 78;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
      })}
    </>
  ),
};

export function Motif({
  variant,
  className,
}: {
  variant: MotifVariant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      className={className}
    >
      {PATHS[variant]}
    </svg>
  );
}
