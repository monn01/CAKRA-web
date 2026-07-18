export function ChakraMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 16 + Math.cos(angle) * 4.2;
        const y1 = 16 + Math.sin(angle) * 4.2;
        const x2 = 16 + Math.cos(angle) * 12.4;
        const y2 = 16 + Math.sin(angle) * 12.4;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={`font-serif text-[19px] font-semibold tracking-tight text-ink ${className ?? ""}`}
    >
      CAKRA<span className="text-accent">-AI</span>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="flex size-8 items-center justify-center rounded-full bg-ink text-paper">
        <ChakraMark className="size-[18px]" />
      </span>
      <span className="font-serif text-[17px] font-semibold tracking-tight text-ink">
        CAKRA<span className="text-accent">-AI</span>
      </span>
    </span>
  );
}
