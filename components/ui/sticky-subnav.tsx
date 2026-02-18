"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StickySubnavProps {
  items: { href: string; label: string }[];
}

export function StickySubnav({ items }: StickySubnavProps) {
  const [active, setActive] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    items.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-2xl border border-border/70 bg-surface/80 p-4 text-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Navigate</p>
        <div className="mt-3 space-y-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-full px-3 py-2 transition",
                active === item.href
                  ? "bg-accent/10 text-ink"
                  : "text-muted hover:text-ink"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
