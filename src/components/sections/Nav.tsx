"use client";

import { ArrowUpRight, GitFork } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Wordmark } from "@/components/Logo";
import { REPO_URL } from "@/lib/constants";

const LINKS = [
  { href: "/guide", label: "Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/changelog", label: "Changelog" },
  { href: "/docs", label: "Docs" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => router.push(href), 180);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group relative flex items-center gap-1 rounded-full px-3 py-1.5 transition-all duration-200 hover:bg-paper-soft hover:text-ink ${
        leaving ? "scale-95 text-accent" : ""
      }`}
    >
      {label}
      <ArrowUpRight
        className={`size-3 transition-all duration-200 ${
          leaving
            ? "translate-x-0 translate-y-0 opacity-100 text-accent"
            : "-translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-50"
        }`}
      />
    </a>
  );
}

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = navRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  }

  if (!isHome) return null;

  return (
    <header className="sticky top-0 z-30">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_35%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_35%,transparent)]"
      />
      <div className="relative px-4 pt-4 pb-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/"
            aria-label="CAKRA-AI"
            className="shrink-0 rounded-full border border-line bg-card/90 px-5 py-2.5 shadow-[0_8px_24px_-16px_rgba(27,23,18,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:opacity-70"
          >
            <Wordmark />
          </Link>

          <div
            ref={navRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
            className="relative flex items-center gap-1 overflow-hidden rounded-full border border-line bg-card/90 py-1.5 pr-1.5 pl-3 shadow-[0_8px_24px_-16px_rgba(27,23,18,0.4)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_10px_30px_-14px_rgba(27,23,18,0.5)]"
          >
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: spot.active ? 1 : 0,
                background: `radial-gradient(160px circle at ${spot.x}px ${spot.y}px, rgba(193,68,14,0.14), transparent 72%)`,
              }}
            />
            <nav className="relative z-10 hidden items-center gap-0.5 pr-2 text-[13.5px] font-medium text-ink-soft md:flex">
              {LINKS.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex cursor-pointer items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-paper shadow-[0_6px_16px_-6px_rgba(193,68,14,0.55)] transition-all hover:-translate-y-0.5 hover:bg-accent-ink"
            >
              <GitFork className="size-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
