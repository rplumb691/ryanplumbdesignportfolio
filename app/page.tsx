import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import { shortAbout } from "@/data/profile";
import { workGrid } from "@/data/case-studies";

export default function HomePage() {
  return (
    <>
      <section className="hero-atmosphere paper-dots relative overflow-hidden border-b border-border/70">
        <div className="container relative z-10 py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4 text-xs uppercase tracking-[0.24em] text-ink/70 md:text-sm">
              <p className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Product Designer
              </p>
              <p>Based in Utah</p>
            </div>

            <div className="float-in space-y-7">
              <p className="text-lg text-ink/80">Hi, I&apos;m Ryan</p>
              <h1 className="max-w-4xl font-display text-5xl leading-[0.98] text-ink md:text-7xl">
                I design experiences
                <span className="block">with logic &amp; <span className="script-accent text-accent">purpose</span></span>
              </h1>
              <p className="max-w-2xl text-lg text-ink/80 md:text-xl">
                I create usable products that grow businesses through clearer journeys, stronger systems, and confident product storytelling.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <ButtonLink href="/#work" className="min-w-40">
                  View work
                </ButtonLink>
                <ButtonLink href="/about" variant="secondary" className="min-w-28">
                  About
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="paper-dots py-20">
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

      <section className="bg-surface py-20">
        <div className="container grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
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

          <div className="halftone-corner relative rounded-[28px] border border-border/80 bg-gradient-to-br from-accent/8 via-surface to-accent2/8 p-8 shadow-[0_30px_80px_-60px_rgba(19,18,0,0.8)]">
            <p className="text-xs uppercase tracking-[0.24em] text-ink/70">Focus areas</p>
            <ul className="mt-4 space-y-3 text-lg">
              {shortAbout.focus.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
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
