import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { caseStudies } from "@/data/case-studies";
import { CalloutCard } from "@/components/ui/callout-card";
import { ImageFrame } from "@/components/ui/image-frame";
import { SectionHeader } from "@/components/ui/section-header";
import { StickySubnav } from "@/components/ui/sticky-subnav";
import { ButtonLink } from "@/components/ui/button";

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
  const previous = caseStudies[(studyIndex - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(studyIndex + 1) % caseStudies.length];

  const subnavItems = [
    { href: "#overview", label: "Overview" },
    { href: "#challenge", label: "Challenge" },
    { href: "#approach", label: "Approach" },
    { href: "#solution", label: "Solution" },
    { href: "#outcomes", label: "Outcomes" },
    { href: "#why", label: "Why" },
  ];

  return (
    <article id="top" className="bg-white">
      <section className="py-16">
        <div className="container space-y-6">
          <h1 className="font-display text-5xl leading-tight text-ink">{study.title}</h1>
          <p className="text-lg text-ink/80">{study.headline}</p>
        </div>
      </section>

      <section>
        <div className="relative w-full">
          <Image
            src={study.hero.image}
            alt={study.hero.alt}
            width={2400}
            height={1350}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="container grid gap-12 py-20 lg:grid-cols-[220px_1fr]">
        <StickySubnav items={subnavItems} />
        <div className="space-y-16">
          <div id="overview" className="space-y-6">
            <SectionHeader kicker="Project overview" title="The work at a glance" subtitle={study.overview} />
          </div>

          <div id="challenge" className="space-y-6">
            <SectionHeader kicker="The core challenge" title="What made this hard" />
            <ul className="space-y-3 text-lg text-ink">
              {study.challenge.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 block h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="approach" className="space-y-6">
            <SectionHeader kicker="The approach" title="How we moved" />
            <p className="text-lg text-ink">{study.approach}</p>
            {study.callouts && (
              <div className="grid gap-6 md:grid-cols-2">
                {study.callouts.map((callout) => (
                  <CalloutCard key={callout.label} {...callout} />
                ))}
              </div>
            )}
          </div>

          <div id="solution" className="space-y-6">
            <SectionHeader kicker="The solution" title="What shipped" />
            <ul className="space-y-4 text-lg">
              {study.solution.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-10 rounded-full bg-accent2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid gap-8 md:grid-cols-2">
              {study.gallery.map((image) => (
                <ImageFrame key={image.src} src={image.src} alt={study.title} caption={image.caption} />
              ))}
            </div>
          </div>

          <div id="outcomes" className="space-y-6">
            <SectionHeader kicker="Outcomes" title="What changed" />
            <ul className="space-y-3 text-lg">
              {study.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="why" className="space-y-6">
            <SectionHeader kicker="Why this works" title="The principle" />
            <p className="text-lg text-ink">{study.why}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-white py-16">
        <div className="container flex flex-col gap-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">More work</p>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center">
            <ButtonLink href={`/case-studies/${previous.slug}`} variant="secondary">
              ← {previous.title}
            </ButtonLink>
            <ButtonLink href="/#work" variant="ghost">
              Back to work grid
            </ButtonLink>
            <ButtonLink href={`/case-studies/${next.slug}`}>
              Next: {next.title} →
            </ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
