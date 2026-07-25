"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { HeroGrid } from "@/components/HeroGrid";

const LINE1_BEFORE = "Discover the essence of ";
const LINE1_BRAND = "FLASSY";
const LINE1_AFTER = ", an AI visual content agency. ";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate bg-transparent pt-24 md:pt-28">
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroGrid />
      </motion.div>

      <div className="relative z-10 container-page flex flex-col items-center pb-16 text-center md:pb-24">
        <motion.h1
          initial={
            reduce
              ? false
              : { opacity: 0, y: 14, filter: "blur(12px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.05,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[20ch] text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.12] tracking-tight md:max-w-[24ch]"
        >
          <span className="text-ink">
            {LINE1_BEFORE}
            <span className="font-bold italic">{LINE1_BRAND}</span>
            {LINE1_AFTER}
          </span>
          <span className="text-muted">{hero.line2}</span>
        </motion.h1>

        <motion.div
          initial={
            reduce
              ? false
              : { opacity: 0, y: 10, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.85,
            delay: reduce ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
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
