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
        <p className="text-base font-semibold leading-tight text-ink md:text-[17px]">{homeTitle}</p>
        {summary ? <p className="text-sm leading-[1.33] text-ink/88 md:text-[16px]">{summary}</p> : null}
        <span className="inline-flex items-center text-sm leading-none text-[#2d8abd] md:text-[15px]">
          See Work
          <span className="ml-1">→</span>
        </span>
      </div>
    </Link>
  );
}
