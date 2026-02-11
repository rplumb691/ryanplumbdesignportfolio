import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
  className?: string;
}

export function QuoteBlock({ quote, author, role, className }: QuoteBlockProps) {
  return (
    <figure
      className={cn(
        "rounded-3xl border border-border/80 bg-surface/90 p-8 text-lg text-ink shadow-[0_30px_80px_-60px_rgba(19,18,0,0.55)]",
        className
      )}
    >
      <svg
        aria-hidden
        className="mb-4 h-8 w-8 text-accent"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M9 11H6.5a.5.5 0 0 1-.5-.5V6.5A.5.5 0 0 1 6.5 6H11V3H6.5A3.5 3.5 0 0 0 3 6.5V11a3 3 0 0 0 3 3H9v8h4V11H9Zm12 0h-2.5a.5.5 0 0 1-.5-.5V6.5a.5.5 0 0 1 .5-.5H23V3h-4.5A3.5 3.5 0 0 0 15 6.5V11a3 3 0 0 0 3 3h2v8h4V11h-3Z" />
      </svg>
      <blockquote className="font-display text-2xl leading-tight">{quote}</blockquote>
      {(author || role) && (
        <figcaption className="mt-4 text-sm text-muted">
          {author && <span className="font-semibold text-ink">{author}</span>}
          {role && ` — ${role}`}
        </figcaption>
      )}
    </figure>
  );
}
