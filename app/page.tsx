import Image from "next/image";

import { ProjectCard } from "@/components/ui/project-card";
import { workGrid } from "@/data/case-studies";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src="/placeholders/GradientColor.png"
            alt="Gradient backdrop"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative min-h-[320px] pt-12 md:min-h-[460px] md:pt-0">
          <div className="grid min-h-[320px] gap-8 md:min-h-[460px] md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-14">
            <div className="relative flex h-full items-end md:self-end">
              <Image
                src="/placeholders/RyanPlumb.png"
                alt="Ryan Plumb"
                width={1466}
                height={1360}
                priority
                className="h-[260px] w-auto object-contain object-left-bottom md:h-[405px]"
              />
            </div>
            <div className="pb-10 md:pb-0 md:self-center">
              <h1 className="font-display text-5xl leading-none text-ink md:text-[76px]">Ryan Plumb</h1>
              <p className="mt-4 max-w-[500px] text-base leading-[1.3] text-[#5d5965] md:text-[16px]">
                Solving complex problems through thoughtful design to create meaningful experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-bg py-20 md:py-28">
        <div className="container">
          <div className="max-w-[620px]">
            <h2 className="text-5xl font-semibold leading-none text-ink md:text-[56px]">Design Work</h2>
          </div>
          <p className="mt-5 max-w-[780px] text-base leading-[1.35] text-ink/90 md:text-[17px]">
            Selected work focused on complex systems, product thinking, and real-world impact. Strategy, craft, and execution come together to shape products people use every day.
          </p>
          <div className="mt-11 grid gap-x-7 gap-y-11 md:grid-cols-2">
            {workGrid.map((work) => (
              <ProjectCard key={work.slug} {...work} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#d2d2d4] py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-[1024px] border-t border-[#818181] pt-9">
            <p className="font-display text-4xl leading-none text-ink md:text-[56px]">Let&apos;s connect</p>
            <a
              href="mailto:ryanplumbdesign@gmail.com"
              className="mt-4 inline-block text-lg leading-[1.3] text-ink hover:underline md:text-[29px]"
            >
              ryanplumbdesign@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
