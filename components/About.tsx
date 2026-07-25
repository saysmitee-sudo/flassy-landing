"use client";

import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="bg-transparent py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="mx-auto max-w-[28ch] text-center text-[clamp(1.5rem,4vw,2.75rem)] font-medium leading-[1.15] tracking-tight">
            <span className="text-ink">{about.line1} </span>
            <span className="text-muted">{about.line2}</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
