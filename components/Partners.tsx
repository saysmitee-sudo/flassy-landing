"use client";

import { Reveal } from "@/components/ui/Reveal";

const marks = [
  "Ecom",
  "SaaS",
  "Retail",
  "Beauty",
  "Fintech",
  "CPG",
  "Media",
  "Health",
  "Agency",
  "DTC",
];

export function Partners() {
  return (
    <section className="bg-transparent py-14 md:py-20">
      <div className="container-page">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-8 md:gap-y-10">
            {marks.map((mark) => (
              <li
                key={mark}
                className="flex items-center justify-center rounded-xl bg-white/40 px-3 py-4 text-center text-base font-semibold tracking-tight text-ink/80 shadow-soft ring-1 ring-black/[0.04] backdrop-blur-sm md:py-5 md:text-lg"
              >
                {mark}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
