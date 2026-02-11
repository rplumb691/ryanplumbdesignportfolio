import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  headline: string;
  tags: string[];
  image: string;
}

export function ProjectCard({ slug, title, headline, tags, image }: ProjectCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className={cn(
        "group halftone-corner relative flex flex-col overflow-hidden rounded-[28px] border border-border/80 bg-surface shadow-[0_28px_60px_-44px_rgba(19,18,0,0.85)] transition duration-300",
        "hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-40px_rgba(19,18,0,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-accent/10 via-surface to-accent2/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgb(var(--accent)_/_0.2),transparent_45%)]" />
        <Image
          src={image}
          alt={`${title} thumbnail`}
          fill
          className="scale-[1.03] object-cover transition duration-500 group-hover:scale-[1.07]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-35" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.24em] text-ink/80">{title}</p>
            <h3 className="font-display text-2xl leading-tight text-ink">{headline}</h3>
          </div>
          <div className="rounded-full border border-border/80 p-2 text-muted transition group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent">
            <ArrowUpRight size={20} />
          </div>
        </div>
        <p className="mt-auto text-sm uppercase tracking-[0.2em] text-muted">
          {tags.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
