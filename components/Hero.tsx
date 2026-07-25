"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : { opacity: 0, y: 16 };
  const delay = (i: number) => (reduce ? 0 : 0.08 * i);

  return (
    <section id="top" className="bg-transparent pt-24 md:pt-28">
      <div className="container-page flex flex-col items-center text-center">
        <motion.h1
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(0) }}
          className="max-w-[18ch] text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.12] tracking-tight md:max-w-[22ch]"
        >
          <span className="text-ink">{hero.line1} </span>
          <span className="text-muted">{hero.line2}</span>
        </motion.h1>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(1) }}
          className="my-10 flex w-full items-center justify-center md:my-12"
        >
          <Button
            href={site.telegram.url}
            external
            showArrow
            className="min-w-[12.5rem]"
          >
            {hero.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
