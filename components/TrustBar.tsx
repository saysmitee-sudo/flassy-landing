"use client";

import { trust } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section id="clients" className="border-b border-card-border bg-bg pb-14 pt-2 md:pb-16">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-sm font-medium text-muted">{trust.label}</p>
        </Reveal>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {trust.marks.map((mark, i) => (
            <Reveal key={mark} as="li" delay={0.06 * (i + 1)} y={16}>
              <span className="text-sm font-semibold tracking-wide text-ink/35 md:text-base">
                {mark}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
