"use client";

import Image from "next/image";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

function TestimonialCard({
  item,
}: {
  item: (typeof testimonials.items)[number];
}) {
  return (
    <figure className="flex w-[min(85vw,320px)] shrink-0 flex-col rounded-2xl bg-surface p-6 md:w-[340px] md:p-7">
      <Image
        src={item.avatar}
        alt=""
        width={44}
        height={44}
        className="size-11 rounded-full object-cover object-top ring-1 ring-white/10"
      />
      <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/90 md:text-base">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6">
        <p className="text-sm font-medium text-white">{item.name}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const loop = [...testimonials.items, ...testimonials.items];

  return (
    <section className="overflow-hidden bg-bg-dark py-16 text-text-on-dark md:py-24 lg:py-28 !pt-8 md:!pt-12">
      <div className="container-page">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {testimonials.headline}
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12 md:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg-dark to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg-dark to-transparent md:w-20" />

        <div className="overflow-hidden">
          <div className="testimonials-marquee flex w-max gap-4 pl-4 md:gap-5 md:pl-8">
            {loop.map((item, i) => (
              <TestimonialCard key={`${item.name}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
