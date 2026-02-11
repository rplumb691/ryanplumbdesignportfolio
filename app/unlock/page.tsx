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
    <div className="paper-dots flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="max-w-md flex-1 rounded-3xl border border-border bg-surface/90 p-10 shadow-card">
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
  );
}
