import Image from "next/image";

import { ProjectCard } from "@/components/ui/project-card";
import { workGrid } from "@/data/case-studies";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/50 bg-white">
        <div className="absolute inset-0">
          <Image
            src="/placeholders/GradientColor.png"
            alt="Gradient backdrop"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative flex flex-col gap-12 py-16 md:flex-row md:items-end md:justify-between lg:py-24">
          <div className="max-w-2xl space-y-6 text-ink">
            <p className="text-lg text-ink/80">Product Design Leader</p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-7xl">Ryan Plumb</h1>
            <p className="text-xl text-ink/80">
              Solving complex problems through thoughtful design to create meaningful experiences.
            </p>
          </div>
          <div className="relative flex w-full items-end justify-center md:max-w-md">
            <div className="relative aspect-[4/5] w-full max-w-sm">
              <Image
                src="/placeholders/RyanPlumb.png"
                alt="Ryan Plumb"
                fill
                priority
                className="object-contain drop-shadow-[0_40px_80px_rgba(19,18,0,0.35)]"
                sizes="(max-width: 768px) 80vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-20">
        <div className="container space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink/60">Design Work</p>
            <h2 className="font-display text-4xl text-ink">Selected projects</h2>
            <p className="max-w-3xl text-lg text-ink/80">
              Selected work focused on complex systems, product thinking, and real-world impact. Strategy, craft, and execution come
              together to shape products people use every day.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {workGrid.map((work) => (
              <ProjectCard key={work.slug} {...work} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#dfdfdf] py-16">
        <div className="container">
          <div className="rounded-[34px] border border-border/60 bg-white/90 px-10 py-12 shadow-[0_30px_70px_-55px_rgba(19,18,0,0.85)]">
            <div className="h-px w-full bg-border" />
            <div className="mt-10 space-y-4">
              <p className="font-display text-3xl text-ink">Let&apos;s connect</p>
              <a
                href="mailto:ryanplumbdesign@gmail.com"
                className="text-lg font-medium text-ink hover:underline"
              >
                ryanplumbdesign@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
