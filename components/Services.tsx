"use client";

import { servicesIntro } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ServiceVisual } from "@/components/visuals/ServiceVisual";

export function Services() {
  return (
    <Section id="services" theme="dark" className="!pt-20 md:!pt-28">
      <Reveal>
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.5rem] lg:leading-tight">
          {servicesIntro.headline}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-5 lg:gap-6">
        {servicesIntro.items.map((item, i) => (
          <Reveal key={item.id} as="article" className="flex flex-col" delay={0.1 * i}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black">
              <ServiceVisual type={item.id} fill />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-white md:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted-dark md:text-[15px]">
              {item.description}
            </p>
            <div className="mt-5">
              <Button href={item.href} variant="dark" className="text-sm">
                {item.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
