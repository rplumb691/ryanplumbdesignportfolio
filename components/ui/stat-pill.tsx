interface StatPillProps {
  label: string;
  description?: string;
}

export function StatPill({ label, description }: StatPillProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface px-6 py-5 text-center shadow-[0_20px_50px_-38px_rgba(19,18,0,0.8)]">
      <div className="absolute -left-5 -top-7 h-20 w-20 rounded-full bg-accent/10 blur-2xl" />
      <p className="relative font-display text-2xl text-ink">{label}</p>
      {description && <p className="relative text-sm text-muted">{description}</p>}
    </div>
  );
}
