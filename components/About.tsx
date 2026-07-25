"use client";

import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="bg-transparent py-14 md:py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="mx-auto max-w-[28ch] text-center text-[clamp(1.35rem,3vw,2.15rem)] font-medium leading-[1.2] tracking-tight">
            <span className="text-ink">{about.line1} </span>
            <span className="text-muted">{about.line2}</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
