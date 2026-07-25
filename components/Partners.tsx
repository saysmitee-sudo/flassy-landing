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
    <section className="bg-transparent py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-x-10 md:gap-y-14">
            {marks.map((mark) => (
              <li
                key={mark}
                className="flex items-center justify-center rounded-2xl bg-white/40 px-3 py-5 text-center text-lg font-semibold tracking-tight text-ink/80 shadow-soft ring-1 ring-black/[0.04] backdrop-blur-sm md:py-6 md:text-xl"
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
