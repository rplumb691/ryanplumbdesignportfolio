'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isUnlock, setIsUnlock] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsUnlock(document.body.classList.contains("unlock-mode"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setIsUnlock(document.body.classList.contains("unlock-mode"));
    return () => observer.disconnect();
  }, []);

  if (isUnlock) return null;

  const headerClasses = cn(
    "sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-300",
    scrolled ? "border-border/60 bg-bg/90" : "border-transparent bg-transparent"
  );

  return (
    <header className={headerClasses}>
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="font-display text-xl tracking-tight">
          Ryan
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-ink/80">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/#contact"
            className={cn(
              "rounded-full border border-transparent bg-signal px-4 py-2 font-medium text-white shadow-sm transition",
              "hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70"
            )}
          >
            Let’s talk
          </Link>
          <Link
            href="mailto:hello@ryan.design"
            className="text-ink/80 transition hover:text-ink"
          >
            hello@ryan.design
          </Link>
        </div>
      </div>
    </header>
  );
}
