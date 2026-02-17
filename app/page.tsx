import Image from "next/image";

import { ProjectCard } from "@/components/ui/project-card";
import { workGrid } from "@/data/case-studies";

export default function HomePage() {
  return (
    <>
      <section className="relative h-[500px] overflow-hidden bg-white max-[900px]:h-[min(580px,85svh)]">
        <div className="absolute inset-0">
          <Image
            src="/placeholders/FullImage.png"
            alt="Ryan Plumb hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover max-[900px]:hidden"
          />
          <Image
            src="/placeholders/FullImageMobile.png"
            alt="Ryan Plumb hero background mobile"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover max-[900px]:block max-[900px]:object-[50%_66%]"
          />
        </div>
        {/* Mobile text — completely separate from the desktop grid */}
        <div className="relative z-10 hidden px-6 pt-16 max-[900px]:block">
          <h1 className="font-display text-[clamp(44px,12vw,64px)] font-semibold leading-[0.95] tracking-[-0.02em] text-ink">
            Ryan Plumb
          </h1>
          <p className="mt-3 max-w-[420px] text-[16px] leading-[1.24] tracking-[-0.01em] text-[#5d5965]">
            Solving complex problems through thoughtful design to create meaningful experiences.
          </p>
        </div>
        {/* Desktop grid — hidden entirely on mobile */}
        <div className="relative mx-auto grid h-full max-w-[1440px] grid-cols-[640px_1fr] max-[1150px]:grid-cols-[560px_1fr] max-[900px]:hidden">
          <div className="h-full" aria-hidden />
          <div className="flex items-center pr-8">
            <div className="max-w-[560px] max-[1150px]:max-w-[480px]">
              <h1 className="font-display text-[84px] font-semibold leading-[0.95] tracking-[-0.02em] text-ink max-[1200px]:text-[72px]">
                Ryan Plumb
              </h1>
              <p className="mt-8 max-w-[560px] text-[20px] leading-[1.22] tracking-[-0.01em] text-[#5d5965] max-[1200px]:text-[18px]">
                Solving complex problems through thoughtful design to create meaningful experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white py-[90px]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-[620px]">
            <h2 className="text-[56px] font-semibold leading-[1] tracking-[-0.02em] text-ink max-[980px]:text-4xl">
              Design Work
            </h2>
          </div>
          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.25] tracking-[-0.01em] text-ink/90">
            Selected work focused on complex systems, product thinking, and real-world impact. Strategy, craft, and execution come together to shape products people use every day.
          </p>
          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {workGrid.map((work) => (
              <ProjectCard key={work.slug} {...work} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#ebebeb] py-24">
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
    </>
  );
}
