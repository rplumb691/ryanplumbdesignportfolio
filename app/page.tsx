import Link from "next/link";

import { Divider } from "@/components/ui/divider";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import { shortAbout } from "@/data/profile";
import { workGrid } from "@/data/case-studies";

export default function HomePage() {
  return (
    <>
      <section className="hero-atmosphere relative overflow-hidden border-b border-border/70">
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl space-y-6">
            <div className="float-in space-y-6">
              <p className="text-lg text-ink/80">Hey, I&apos;m Ryan</p>
              <h1 className="max-w-4xl font-display text-5xl leading-[0.98] text-ink md:text-7xl">
                I build <span className="script-accent text-accent">clarity</span> into complex products.
              </h1>
              <p className="max-w-2xl text-lg text-ink md:text-xl">
                Product design leader scaling high-trust ecommerce, subscription, and systems work for growth-stage teams.
              </p>
              <p className="text-sm text-ink/70">
                Currently partnering with SaaS and commerce orgs on adoption journeys, product storytelling, and design systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-20">
        <div className="container">
          <SectionHeader
            kicker="Selected work"
            title="Recent case studies"
            subtitle="Four projects focused on adoption, trust, conversion, and interaction clarity."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {workGrid.map((work) => (
              <ProjectCard key={work.slug} {...work} />
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <Divider />
      </div>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeader
              kicker={shortAbout.kicker}
              title="Know me better"
              subtitle={shortAbout.body}
            />
            <p className="text-lg text-muted">
              I partner with product, research, and engineering to turn complex requirements into clean, usable experiences.
            </p>
            <Link href="/about" className="inline-flex items-center text-sm font-semibold text-accent">
              Read about Ryan &rarr;
            </Link>
          </div>

          <div className="rounded-[28px] border border-border/80 bg-surface p-8 shadow-[0_30px_80px_-60px_rgba(19,18,0,0.8)]">
            <p className="text-xs uppercase tracking-[0.24em] text-ink/70">How I work</p>
            <p className="mt-4 text-lg text-ink">
              Grounded discovery, confident storytelling, and hands-on systems building. I connect messy product problems to clear narratives teams can rally behind.
            </p>
            <p className="mt-3 text-sm text-ink/70">
              From first insight to shipped experience, I guide cross-functional teams through workshops, prototypes, and playbooks that keep everyone aligned.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="paper-dots py-20">
        <div className="container">
          <div className="halftone-corner relative grid gap-8 overflow-hidden rounded-[30px] border border-border/80 bg-surface p-10 shadow-[0_40px_120px_-85px_rgba(19,18,0,0.9)] md:grid-cols-2">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent2 to-accent" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink/70">Let&apos;s talk</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink">Open to product roles and select freelance.</h2>
              <p className="mt-4 text-lg text-muted">
                If you&apos;re building a meaningful product and want stronger UX direction, let&apos;s connect.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@ryan.design"
                className="inline-flex items-center justify-center rounded-full bg-signal px-6 py-4 text-lg font-semibold text-white shadow-[0_25px_50px_-32px_rgba(19,18,0,0.8)]"
              >
                hello@ryan.design
              </a>
              <p className="text-sm text-muted">
                Share role, timeline, and context. I typically reply within two business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
