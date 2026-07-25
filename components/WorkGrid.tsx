"use client";

import { work } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function WorkGrid() {
  return (
    <Section id="work" theme="dark">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {work.headline}
        </h2>
        <p className="mt-3 text-base text-text-muted-dark md:text-[17px]">
          {work.subhead}
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
        {work.items.map((item, i) => (
          <Reveal key={item.title} as="li" delay={0.06 * (i % 3)} y={28}>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-surface">
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-[1.02]`}
              />
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted-dark">
                  {item.category}
                </p>
                <h3 className="mt-1.5 text-base font-semibold tracking-tight text-white md:text-[17px]">
                  {item.title}
                </h3>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
