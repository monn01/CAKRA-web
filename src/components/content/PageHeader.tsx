import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-4" />
        Kembali
      </Link>
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 text-xs font-medium tracking-wide text-accent-ink uppercase">
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
        <h1 className="mt-4 font-serif text-4xl leading-[1.1] font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
