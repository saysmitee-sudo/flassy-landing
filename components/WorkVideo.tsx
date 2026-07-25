"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type WorkVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function WorkVideo({ src, poster, className = "" }: WorkVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      setReady(true);
      play();
    }

    const onCanPlay = () => {
      setReady(true);
      play();
    };

    video.addEventListener("canplay", onCanPlay);
    return () => video.removeEventListener("canplay", onCanPlay);
  }, [active]);

  const mediaClass = `object-cover transition-[opacity,transform] duration-700 group-hover:scale-[1.04] ${className}`;

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Image
        src={poster}
        alt=""
        fill
        className={`${mediaClass} ${ready ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {active ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className={`absolute inset-0 size-full ${mediaClass} ${ready ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}
    </div>
  );
}
