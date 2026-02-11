import { cn } from "@/lib/utils";
import type { CalloutType } from "@/data/case-studies";

const colorMap: Record<CalloutType, string> = {
  risk: "from-signal/15 via-surface to-surface",
  rollout: "from-accent/12 via-surface to-surface",
  insight: "from-accent2/12 via-surface to-surface",
};

interface CalloutCardProps {
  label: string;
  body: string;
  type: CalloutType;
}

export function CalloutCard({ label, body, type }: CalloutCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/90 p-6",
        "bg-gradient-to-br",
        colorMap[type]
      )}
    >
      <div className="absolute inset-y-0 right-0 w-1/2 opacity-20">
        <div className="grid h-full w-full grid-cols-2 gap-2 opacity-30">
          {Array.from({ length: 8 }).map((_, idx) => (
            <span key={idx} className="block h-6 rounded-full border border-border/60" />
          ))}
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="mt-2 text-lg text-ink">{body}</p>
    </div>
  );
}
