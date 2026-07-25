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
    <section id="top" className="bg-transparent pt-28 md:pt-36">
      <div className="container-page flex flex-col items-center text-center">
        <motion.h1
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(0) }}
          className="max-w-[18ch] text-[clamp(2.25rem,6vw,4rem)] font-medium leading-[1.12] tracking-tight md:max-w-[22ch]"
        >
          <span className="text-ink">{hero.line1} </span>
          <span className="text-muted">{hero.line2}</span>
        </motion.h1>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(1) }}
          className="my-14 flex w-full items-center justify-center md:my-16"
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
