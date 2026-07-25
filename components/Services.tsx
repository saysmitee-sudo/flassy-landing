"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { services } from "@/lib/content";

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="bg-transparent pb-16 pt-0 md:pb-20">
      <div className="container-page">
        <ul className="rounded-[24px] border border-line/80 bg-white/50 px-4 shadow-soft backdrop-blur-sm md:rounded-[28px] md:px-6">
          {services.items.map((service, i) => {
            const isOpen = open === i;
            return (
              <li
                key={service.title}
                className={i < services.items.length - 1 ? "border-b border-line/80" : ""}
              >
                <button
                  type="button"
                  className="relative flex w-full items-center justify-center gap-4 py-5 text-center md:py-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span
                    className={`text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-tight transition-colors ${
                      isOpen ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {service.title}
                  </span>
                  <ChevronDown
                    className={`absolute right-0 size-5 shrink-0 text-ink/50 transition-transform duration-300 md:size-6 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2.5 pb-6 text-center md:pb-7">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-base font-medium text-ink/80 md:text-lg"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
