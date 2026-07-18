"use client";

import { useEffect, useState } from "react";

export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-28 hidden w-48 shrink-0 self-start lg:block">
      <p className="mb-3 text-xs font-medium tracking-wide text-ink-faint uppercase">
        Di halaman ini
      </p>
      <ul className="flex flex-col gap-0.5 border-l border-line text-[14px]">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`-ml-px block border-l-2 py-1.5 pl-4 transition-colors duration-200 ${
                active === item.id
                  ? "border-accent font-medium text-accent-ink"
                  : "border-transparent text-ink-faint hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
