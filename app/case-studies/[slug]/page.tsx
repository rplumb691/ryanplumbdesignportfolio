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
    <article id="top" className="bg-gradient-to-b from-surface via-surface to-bg">
      <section className="border-b border-border/60 bg-surface py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/70">Case study</p>
            <h1 className="font-display text-5xl leading-tight text-ink">{study.title}</h1>
            <p className="text-lg text-ink/80">{study.headline}</p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-surface/80 p-6 shadow-[0_30px_120px_-80px_rgba(19,18,0,0.85)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">What I did</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-border/50 pb-2">
                <dt className="text-muted">Role</dt>
                <dd className="font-medium text-ink">{study.details.role}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border/50 pb-2">
                <dt className="text-muted">Team</dt>
                <dd className="font-medium text-ink">{study.details.team}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border/50 pb-2">
                <dt className="text-muted">Timeline</dt>
                <dd className="font-medium text-ink">{study.details.timeline}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Platforms</dt>
                <dd className="font-medium text-ink">{study.details.platforms}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-bg py-12">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-surface/60 p-4">
            <Image
              src={study.hero.image}
              alt={study.hero.alt}
              width={1600}
              height={1200}
              className="h-auto w-full rounded-2xl object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 10% 20%, rgb(var(--accent) / 0.2), transparent 50%)",
              }}
            />
          </div>
        </div>
      </section>

      <section className="container grid gap-12 py-20 lg:grid-cols-[220px_1fr]">
        <StickySubnav items={subnavItems} />
        <div className="space-y-16">
          <div
            id="overview"
            className="rounded-3xl border border-border/70 bg-surface/80 p-10 shadow-[0_40px_120px_-80px_rgba(19,18,0,0.9)]"
          >
            <SectionHeader kicker="Project overview" title="The work at a glance" subtitle={study.overview} />
          </div>

          <div id="challenge" className="rounded-3xl border border-border/70 bg-bg p-10">
            <SectionHeader kicker="The core challenge" title="What made this hard" />
            <ul className="mt-6 space-y-3 text-lg text-ink">
              {study.challenge.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 block h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="approach" className="rounded-3xl border border-border/70 bg-surface/80 p-10">
            <SectionHeader kicker="The approach" title="How we moved" />
            <p className="mt-6 text-lg text-ink">{study.approach}</p>
            {study.callouts && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {study.callouts.map((callout) => (
                  <CalloutCard key={callout.label} {...callout} />
                ))}
              </div>
            )}
          </div>

          <div id="solution" className="rounded-3xl border border-border/70 bg-surface/80 p-10">
            <SectionHeader kicker="The solution" title="What shipped" />
            <ul className="mt-6 space-y-4 text-lg">
              {study.solution.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-10 rounded-full bg-accent2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {study.gallery.map((image) => (
                <ImageFrame key={image.src} src={image.src} alt={study.title} caption={image.caption} />
              ))}
            </div>
          </div>

          <div id="outcomes" className="rounded-3xl border border-border/70 bg-bg p-10">
            <SectionHeader kicker="Outcomes" title="What changed" />
            <ul className="mt-6 space-y-3 text-lg">
              {study.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="why" className="rounded-3xl border border-border/70 bg-surface/80 p-10">
            <SectionHeader kicker="Why this works" title="The principle" />
            <p className="mt-6 text-lg text-ink">{study.why}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-surface py-16">
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
