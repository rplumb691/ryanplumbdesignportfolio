"use client";

import Link from "next/link";

interface UnlockPageProps {
  searchParams: { error?: string; redirectTo?: string };
}

export default function UnlockPage({ searchParams }: UnlockPageProps) {
  const redirectTo =
    typeof searchParams.redirectTo === "string" && searchParams.redirectTo.startsWith("/")
      ? searchParams.redirectTo
      : "/";
  const hasError = Boolean(searchParams.error);

  return (
    <div className="flex min-h-svh items-center justify-center bg-white px-5">
      <div className="w-full max-w-[380px]">
        <div className="mb-10">
          <h1 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-ink">
            Welcome
          </h1>
          <p className="mt-2 text-[15px] leading-[1.5] text-muted">
            Enter the password to view this portfolio.
          </p>
        </div>

        <form method="POST" action="/api/unlock" className="space-y-5">
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div>
            <label htmlFor="password" className="block text-[13px] font-medium text-ink">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              autoComplete="off"
              placeholder="Enter password"
              className="mt-1.5 w-full rounded-lg border border-[#d4d4d4] bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/50 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
            />
            {hasError && (
              <p className="mt-2 text-[13px] text-red-600">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-ink px-4 py-2.5 text-[15px] font-medium text-white transition hover:bg-ink/90"
          >
            Continue
          </button>
        </form>

        <p className="mt-8 text-[13px] text-muted">
          Need access?{" "}
          <Link
            href="mailto:ryanplumbdesign@gmail.com"
            className="text-ink underline underline-offset-2"
          >
            Get in touch
          </Link>
        </p>
      </div>
    </div>
  );
}
