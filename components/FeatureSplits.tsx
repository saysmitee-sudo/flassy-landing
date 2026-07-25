"use client";

import { features } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { FeatureVisual } from "@/components/visuals/FeatureVisual";

export function FeatureSplits() {
  return (
    <>
      {features.map((feature) => (
        <Section
          key={feature.id}
          id={feature.id}
          theme="dark"
          className="!py-12 md:!py-16 lg:!py-20"
        >
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <Reveal
              className={`relative aspect-[5/4] overflow-hidden rounded-2xl media-glow md:aspect-[4/3] ${
                feature.reverse ? "md:order-2" : "md:order-1"
              }`}
              y={32}
            >
              <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-8">
                <FeatureVisual type={feature.visual} />
              </div>
            </Reveal>

            <Reveal
              className={feature.reverse ? "md:order-1" : "md:order-2"}
              delay={0.12}
              y={28}
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-[2rem] lg:leading-snug">
                {feature.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted-dark md:text-[17px]">
                {feature.body}
              </p>
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  );
}
