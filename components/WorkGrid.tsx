"use client";

import Image from "next/image";
import { work } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function WorkGrid() {
  return (
    <section id="work" className="bg-transparent">
      <div className="container-page">
        <div className="grid gap-8 sm:grid-cols-2 md:gap-10 lg:gap-12">
          {work.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.06 * (i % 2)}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-surface shadow-soft ring-1 ring-black/5 transition-[box-shadow,transform] duration-500 group-hover:shadow-lift md:rounded-[40px]">
                  {item.type === "video" ? (
                    <video
                      src={item.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`size-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${item.focus}`}
                    />
                  ) : (
                    <Image
                      src={item.media}
                      alt=""
                      fill
                      className={`object-contain p-8 transition-transform duration-700 group-hover:scale-[1.03] md:p-12 ${item.focus}`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>
                <div className="mt-5 px-1 text-center md:mt-6">
                  <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="my-16 flex justify-center md:my-24">
          <p className="text-center text-[clamp(1.5rem,3.5vw,2.25rem)] font-medium tracking-tight text-muted">
            …and so much more.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
