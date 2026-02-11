"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { caseStudies } from "@/data/case-studies";

interface UnlockPageProps {
  searchParams: { error?: string; redirectTo?: string };
}

export default function UnlockPage({ searchParams }: UnlockPageProps) {
  const redirectTo =
    typeof searchParams.redirectTo === "string" && searchParams.redirectTo.startsWith("/")
      ? searchParams.redirectTo
      : "/";
  const hasError = Boolean(searchParams.error);

  const slides = useMemo(() => caseStudies.map((study) => study.hero.image), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    document.body.classList.add("unlock-mode");
    return () => {
      document.body.classList.remove("unlock-mode");
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <div
        className={`fixed inset-0 z-20 cursor-pointer overflow-hidden transition-transform duration-700 ${
          showForm ? "-translate-y-full" : "translate-y-0"
        }`}
        onClick={() => setShowForm(true)}
      >
        {slides.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Case study preview"
              fill
              className={`h-full w-full object-cover ${
                index % 3 === 0 ? "kenburns-forward" : index % 3 === 1 ? "kenburns-reverse" : "kenburns-pan"
              }`}
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex h-1/3 items-center justify-center text-center">
          <span className="text-[120px] font-semibold uppercase tracking-[0.4em] text-white">COMING SOON</span>
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div
          className={`max-w-md flex-1 rounded-3xl border border-border bg-surface/95 p-10 shadow-card transition-opacity duration-700 ${
            showForm ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="space-y-2 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/70">Portfolio Access</p>
            <h1 className="font-display text-3xl text-ink">Enter Password</h1>
            <p className="text-sm text-ink/70">
              This preview is private. Enter the password to continue.
            </p>
          </div>
          <form method="POST" action="/api/unlock" className="mt-8 space-y-4">
            <input type="hidden" name="redirectTo" value={redirectTo} />
            <label className="block text-sm font-medium text-ink" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-base text-ink focus:border-accent focus:outline-none"
              placeholder="Enter password"
              autoComplete="off"
            />
            {hasError && (
              <p className="text-sm text-signal">Incorrect password. Please try again.</p>
            )}
            <button
              type="submit"
              className="w-full rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white transition hover:bg-signal/90"
            >
              Unlock portfolio
            </button>
          </form>
          <p className="mt-6 text-center text-xs text-ink/60">
            Need access? Contact <Link href="mailto:hello@ryan.design" className="text-accent">Ryan</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
