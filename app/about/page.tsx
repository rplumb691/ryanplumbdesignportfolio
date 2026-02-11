import Link from "next/link";
import { aboutPage } from "@/data/profile";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-surface via-surface to-bg">
      <section className="container grid gap-12 py-24 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink/70">About</p>
          <h1 className="font-display text-5xl text-ink">{aboutPage.hero.title}</h1>
          <p className="text-xl text-ink/80">{aboutPage.hero.intro}</p>
          <div className="space-y-4 text-lg text-ink">
            {aboutPage.hero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ButtonLink href="/#contact">Let’s work together</ButtonLink>
        </div>
        <div className="rounded-3xl border border-border/70 bg-surface/80 p-8 shadow-[0_30px_120px_-80px_rgba(19,18,0,0.85)]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Strengths</p>
          <ul className="mt-4 space-y-3 text-lg">
            {aboutPage.hero.strengths.map((strength) => (
              <li key={strength} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container space-y-10">
          <SectionHeader
            kicker="Principles"
            title="How I design"
            subtitle="A few reminders that keep teams aligned and moving."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {aboutPage.principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-3xl border border-border/70 bg-bg p-6 shadow-[0_20px_80px_-70px_rgba(19,18,0,0.9)]"
              >
                <h3 className="font-display text-2xl text-ink">{principle.title}</h3>
                <p className="mt-3 text-lg text-muted">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container flex flex-col items-center gap-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-ink/70">Next steps</p>
        <h2 className="font-display text-4xl text-ink">Ready to partner up?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="mailto:hello@ryan.design">Email Ryan</ButtonLink>
          <ButtonLink href="/#work" variant="secondary">
            View work
          </ButtonLink>
        </div>
        <Link href="/#contact" className="text-accent">
          Prefer async? Skip to the contact block →
        </Link>
      </section>
    </div>
  );
}
