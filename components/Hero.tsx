"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/LogoMark";
import { HeroBackground } from "@/components/HeroBackground";

export function Hero() {
  const reduce = useReducedMotion();
  const delay = (i: number) => (reduce ? 0 : 0.08 * i);
  const initial = reduce ? false : { opacity: 0, y: 18 };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#f4f2ff] pb-16 pt-28 md:pb-24 md:pt-36 lg:pb-28 lg:pt-40"
    >
      <HeroBackground />
      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(0), ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 md:mb-7"
          role="img"
          aria-label="FLASSY logo"
        >
          <LogoMark size={56} className="md:hidden" />
          <LogoMark size={72} className="hidden md:block" />
        </motion.div>

        <motion.h1
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(1), ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          {hero.brand}
        </motion.h1>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(2), ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-lg font-medium leading-snug text-secondary md:mt-6 md:text-xl"
        >
          {hero.headline}
        </motion.p>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(3), ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-lg text-base leading-relaxed text-muted md:text-[17px]"
        >
          {hero.subhead}
        </motion.p>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(4), ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
        >
          <Button
            href={site.telegram.url}
            external
            showArrow
            variant="primary"
            className="w-full sm:w-auto"
          >
            {hero.primaryCta}
          </Button>
          <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
            {hero.secondaryCta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
