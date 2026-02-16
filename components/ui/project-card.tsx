import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  headline: string;
  tags: string[];
  image: string;
  summary?: string;
}

export function ProjectCard({ slug, title, image, summary }: ProjectCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="group flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_30px_60px_-50px_rgba(19,18,0,0.9)]">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="space-y-2 text-ink">
        <p className="font-semibold text-lg">{title}</p>
        {summary ? <p className="text-base text-ink/80">{summary}</p> : null}
        <span className="inline-flex items-center text-sm font-semibold text-[#2e6cce]">
          See Work
          <span className="ml-1 transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
