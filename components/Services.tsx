"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Clapperboard,
  Layers,
  Megaphone,
  Plus,
  ScanFace,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const serviceIcons: LucideIcon[] = [Megaphone, Clapperboard, ScanFace, Layers];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="services" className="bg-transparent pb-16 pt-2 md:pb-20 md:pt-4">
      <div className="container-page max-w-3xl">
        <ul>
          {services.items.map((service, i) => {
            const isOpen = open === i;
            const Icon = serviceIcons[i] ?? Layers;
            return (
              <Reveal key={service.title} delay={0.05 * i} y={18}>
                <li className="border-b border-ink/10 first:border-t">
                  <button
                    type="button"
                    className="group relative flex w-full items-center gap-4 py-6 text-left transition-colors md:gap-5 md:py-7"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span
                      className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:size-10 ${
                        isOpen
                          ? "border-ink/15 bg-ink text-white shadow-soft scale-105"
                          : "border-ink/10 bg-white/50 text-ink group-hover:border-ink/20 group-hover:scale-105"
                      }`}
                    >
                      <Icon className="size-4 md:size-[18px]" aria-hidden strokeWidth={1.75} />
                    </span>
                    <span
                      className={`flex-1 text-[clamp(1.65rem,3.4vw,2.35rem)] font-medium leading-[1.1] tracking-tight text-ink transition-opacity ${
                        isOpen ? "opacity-100" : "opacity-90 group-hover:opacity-100"
                      }`}
                    >
                      {service.title}
                    </span>
                    <Plus
                      className={`size-5 shrink-0 text-ink/50 transition-transform duration-300 md:size-6 ${
                        isOpen ? "rotate-45 text-ink" : "group-hover:text-ink group-hover:rotate-90"
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.ul
                            key="items"
                            initial={reduce ? false : { opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduce ? undefined : { opacity: 0, y: 4 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-2.5 pb-7 pl-[3.25rem] md:pb-8 md:pl-[3.75rem]"
                          >
                            {service.items.map((item, j) => (
                              <motion.li
                                key={item}
                                initial={reduce ? false : { opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.35,
                                  delay: reduce ? 0 : 0.04 * j,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="flex gap-3 text-[15px] font-medium leading-snug text-ink md:text-base"
                              >
                                <span
                                  className="mt-[0.55em] size-1 shrink-0 rounded-full bg-ink"
                                  aria-hidden
                                />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
