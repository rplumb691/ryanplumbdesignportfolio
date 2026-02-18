import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { caseStudies, workGrid, type CaseStudy } from "@/data/case-studies";
import { CalloutCard } from "@/components/ui/callout-card";
import { ProjectCard } from "@/components/ui/project-card";
import { GalleryProvider, ClickableImage } from "@/components/ui/clickable-image";
import type { LightboxImage } from "@/components/ui/lightbox";

type SectionKey = "overview" | "challenge" | "approach" | "solution" | "outcomes" | "why";

const SECTION_ORDER: SectionKey[] = ["overview", "challenge", "approach", "solution", "outcomes", "why"];

function collectAllImages(study: CaseStudy): LightboxImage[] {
  const images: LightboxImage[] = [
    { src: study.hero.image, alt: study.hero.alt },
  ];

  for (const section of SECTION_ORDER) {
    const sectionImgs = study.sectionImages?.[section];
    if (sectionImgs) {
      for (const img of sectionImgs) {
        images.push({ src: img.src, alt: img.alt });
      }
    }
  }

  return images;
}

function getImageIndex(allImages: LightboxImage[], src: string): number {
  return allImages.findIndex((img) => img.src === src);
}

function SectionImages({
  study,
  section,
  allImages,
}: {
  study: CaseStudy;
  section: SectionKey;
  allImages: LightboxImage[];
}) {
  const images = study.sectionImages?.[section];
  if (!images?.length) return null;

  return (
    <div className="mx-auto mt-12 max-w-[960px] space-y-12 px-5">
      {images.map((img) => (
        <figure key={img.src} className="space-y-3">
          <ClickableImage index={getImageIndex(allImages, img.src)}>
            <Image
              src={img.src}
              alt={img.alt}
              width={1920}
              height={1080}
              className="h-auto w-full rounded-lg"
              sizes="(max-width:768px) 100vw, 960px"
            />
          </ClickableImage>
          <figcaption className="mx-auto max-w-[680px] text-[14px] leading-relaxed text-muted">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-muted">
      {children}
    </p>
  );
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Ryan`,
    description: study.headline,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const studyIndex = caseStudies.findIndex((item) => item.slug === params.slug);
  if (studyIndex === -1) notFound();

  const study = caseStudies[studyIndex];
  const allImages = collectAllImages(study);

  const otherWork = workGrid
    .filter((w) => w.slug !== study.slug)
    .slice(0, 2);

  const sec = {
    overview: { kicker: "Project overview", title: "The work at a glance", ...study.sections?.overview },
    challenge: { kicker: "The core challenge", title: "What made this hard", ...study.sections?.challenge },
    approach: { kicker: "The approach", title: "How we moved", ...study.sections?.approach },
    solution: { kicker: "The solution", title: "What shipped", ...study.sections?.solution },
    outcomes: { kicker: "Outcomes", title: "What changed", ...study.sections?.outcomes },
    why: { kicker: "Why this works", title: "The principle", ...study.sections?.why },
  };

  const prose = "mx-auto max-w-[680px] px-5";

  return (
    <article id="top" className="bg-white">
      <GalleryProvider images={allImages}>
        {/* Header */}
        <header className={`${prose} pb-10 pt-16`}>
          <Link
            href="/#work"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <h1 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-[-0.02em] text-ink">
            {study.title}
          </h1>
          <p className="mt-4 text-[18px] leading-[1.6] text-muted">{study.headline}</p>
        </header>

        {/* Hero image — full width */}
        <ClickableImage index={0}>
          <div className="w-full">
            <Image
              src={study.hero.image}
              alt={study.hero.alt}
              width={2400}
              height={1350}
              className="h-auto w-full"
              priority
            />
          </div>
        </ClickableImage>

        {/* Content sections */}
        <div className="pb-24 pt-20">
          {/* Overview */}
          <section id="overview" className={prose}>
            <Kicker>{sec.overview.kicker}</Kicker>
            <h2 className="mt-2 font-display text-[clamp(24px,4vw,36px)] leading-[1.15] text-ink">
              {sec.overview.title}
            </h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-ink/90">{study.overview}</p>
            {study.overviewBody?.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-[18px] leading-[1.7] text-ink/90">{p}</p>
            ))}
          </section>
          <SectionImages study={study} section="overview" allImages={allImages} />

          {/* Challenge */}
          <section id="challenge" className={`${prose} mt-20`}>
            <Kicker>{sec.challenge.kicker}</Kicker>
            <h2 className="mt-2 font-display text-[clamp(24px,4vw,36px)] leading-[1.15] text-ink">
              {sec.challenge.title}
            </h2>
            <div className="mt-6">
              {study.challengeFormat === "narrative" ? (
                <div className="space-y-4 text-[18px] leading-[1.7] text-ink/90">
                  {study.challenge.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3 text-[18px] leading-[1.7] text-ink/90">
                  {study.challenge.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[10px] block h-[6px] w-[6px] shrink-0 rounded-full bg-muted" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
          <SectionImages study={study} section="challenge" allImages={allImages} />

          {/* Approach */}
          <section id="approach" className={`${prose} mt-20`}>
            <Kicker>{sec.approach.kicker}</Kicker>
            <h2 className="mt-2 font-display text-[clamp(24px,4vw,36px)] leading-[1.15] text-ink">
              {sec.approach.title}
            </h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-ink/90">{study.approach}</p>
            {study.approachBody?.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-[18px] leading-[1.7] text-ink/90">{p}</p>
            ))}
            {study.approachItems && (
              <ul className="mt-6 space-y-3 text-[18px] leading-[1.7] text-ink/90">
                {study.approachItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] block h-[6px] w-[6px] shrink-0 rounded-full bg-muted" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {study.callouts && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {study.callouts.map((callout) => (
                  <CalloutCard key={callout.label} {...callout} />
                ))}
              </div>
            )}
          </section>
          <SectionImages study={study} section="approach" allImages={allImages} />

          {/* Solution */}
          <section id="solution" className={`${prose} mt-20`}>
            <Kicker>{sec.solution.kicker}</Kicker>
            <h2 className="mt-2 font-display text-[clamp(24px,4vw,36px)] leading-[1.15] text-ink">
              {sec.solution.title}
            </h2>
            <div className="mt-6">
              {study.solutionFormat === "narrative" ? (
                <div className="space-y-4 text-[18px] leading-[1.7] text-ink/90">
                  {study.solution.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4 text-[18px] leading-[1.7]">
                  {study.solution.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[10px] block h-[6px] w-[6px] shrink-0 rounded-full bg-muted" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
          <SectionImages study={study} section="solution" allImages={allImages} />

          {/* Outcomes */}
          <section id="outcomes" className={`${prose} mt-20`}>
            <Kicker>{sec.outcomes.kicker}</Kicker>
            <h2 className="mt-2 font-display text-[clamp(24px,4vw,36px)] leading-[1.15] text-ink">
              {sec.outcomes.title}
            </h2>
            <ul className="mt-6 space-y-3 text-[18px] leading-[1.7]">
              {study.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] block h-[6px] w-[6px] shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <SectionImages study={study} section="outcomes" allImages={allImages} />

          {/* Why */}
          <section id="why" className={`${prose} mt-20`}>
            <Kicker>{sec.why.kicker}</Kicker>
            <h2 className="mt-2 font-display text-[clamp(24px,4vw,36px)] leading-[1.15] text-ink">
              {sec.why.title}
            </h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-ink/90">{study.why}</p>
          </section>
          <SectionImages study={study} section="why" allImages={allImages} />
        </div>
      </GalleryProvider>

      {/* More work */}
      <section className="border-t border-border/70 bg-white py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">More work</p>
          <div className="mt-8 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {otherWork.map((work) => (
              <ProjectCard key={work.slug} {...work} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#ebebeb] py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mx-auto max-w-[1126px] border-t border-[#8a8a8a] pt-8">
            <p className="font-display text-[56px] leading-[1] tracking-[-0.02em] text-ink max-[980px]:text-4xl">Let&apos;s connect</p>
            <a
              href="mailto:ryanplumbdesign@gmail.com"
              className="mt-4 inline-block text-[20px] leading-[1.3] text-ink hover:underline"
            >
              ryanplumbdesign@gmail.com
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
