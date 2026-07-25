"use client";

import { motion, useReducedMotion } from "motion/react";

const shapes = [
  {
    className:
      "absolute -left-[12%] top-[8%] size-[42vw] max-w-[520px] max-h-[520px] rounded-[32%] bg-gradient-to-br from-indigo-300/55 via-violet-400/40 to-transparent blur-[2px]",
    animate: { x: [0, 40, -20, 0], y: [0, 30, 10, 0], rotate: [0, 18, -8, 0] },
    duration: 22,
  },
  {
    className:
      "absolute -right-[8%] top-[4%] size-[36vw] max-w-[440px] max-h-[440px] rounded-full bg-gradient-to-bl from-violet-300/50 via-indigo-400/30 to-transparent",
    animate: { x: [0, -35, 15, 0], y: [0, 45, 20, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 18,
  },
  {
    className:
      "absolute bottom-[6%] left-[18%] size-[28vw] max-w-[360px] max-h-[360px] rounded-[28%] bg-gradient-to-tr from-sky-300/35 via-indigo-300/25 to-transparent rotate-12",
    animate: { x: [0, 25, -15, 0], y: [0, -30, -10, 0], rotate: [12, 28, 6, 12] },
    duration: 20,
  },
  {
    className:
      "absolute bottom-[12%] right-[12%] size-[22vw] max-w-[280px] max-h-[280px] rounded-full bg-gradient-to-tl from-fuchsia-300/30 via-violet-400/25 to-transparent",
    animate: { x: [0, -20, 30, 0], y: [0, -25, 15, 0], scale: [1, 0.92, 1.06, 1] },
    duration: 16,
  },
  {
    className:
      "absolute left-[42%] top-[22%] size-[18vw] max-w-[220px] max-h-[220px] rounded-[24%] bg-gradient-to-br from-white/50 via-indigo-200/35 to-violet-300/20",
    animate: { x: [0, 18, -12, 0], y: [0, -22, 8, 0], rotate: [0, -14, 10, 0] },
    duration: 14,
  },
];

export function HeroBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#f4f2ff]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(167,139,250,0.35),transparent_55%)]" />

      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={shape.className}
          initial={false}
          animate={reduce ? undefined : shape.animate}
          transition={
            reduce
              ? undefined
              : {
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/70" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
