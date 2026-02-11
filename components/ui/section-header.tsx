import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "left",
  tone = "default",
}: SectionHeaderProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("space-y-3", align === "center" ? "text-center" : "text-left")}>
      {kicker && (
        <p
          className={cn(
            "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]",
            isLight ? "text-white/70" : "text-ink"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", isLight ? "bg-white/80" : "bg-accent")}
          />
          {kicker}
        </p>
      )}
      <div className="space-y-3">
        <h2 className={cn("font-display text-4xl leading-[1.05] md:text-5xl", isLight ? "text-white" : "text-ink")}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn("max-w-2xl text-lg", isLight ? "text-white/70" : "text-muted")}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
