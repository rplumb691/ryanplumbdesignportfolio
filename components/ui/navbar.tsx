"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/unlock") return null;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-black/[0.06] bg-white">
      <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-6">
        {pathname === "/" ? (
          <span />
        ) : (
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-[-0.01em] text-ink"
          >
            Ryan Plumb
          </Link>
        )}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-[14px] transition ${
              pathname === "/" ? "font-medium text-ink" : "text-ink/60 hover:text-ink"
            }`}
          >
            Home
          </Link>
          <a
            href="/placeholders/Ryan%20Plumb%20Resume%202026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-ink/60 transition hover:text-ink"
          >
            Resume
          </a>
          <Link
            href="/contact"
            className={`text-[14px] transition ${
              pathname === "/contact" ? "font-medium text-ink" : "text-ink/60 hover:text-ink"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
