import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  image: string;
  summary?: string;
}

export function ProjectCard({ slug, title, image, summary }: ProjectCardProps) {
  const homeTitle = title.replace("—", "-");

  return (
    <Link href={`/case-studies/${slug}`} className="flex flex-col gap-3">
      <div className="relative overflow-hidden bg-white">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={`${homeTitle} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="space-y-2 text-ink">
        <p className="text-[16px] font-semibold leading-[1.2] text-ink">{homeTitle}</p>
        {summary ? <p className="text-[16px] leading-[1.28] text-ink/88">{summary}</p> : null}
        <span className="inline-flex items-center text-[16px] leading-none text-[#066f90]">See Work</span>
      </div>
    </Link>
  );
}
