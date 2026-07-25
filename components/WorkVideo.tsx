"use client";

import Image from "next/image";
import MuxVideo from "@mux/mux-video-react";
import { useEffect, useRef, useState } from "react";

type WorkVideoProps = {
  playbackId?: string;
  poster: string;
  title: string;
  className?: string;
};

export function WorkVideo({
  playbackId,
  poster,
  title,
  className = "",
}: WorkVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !playbackId) return;

    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const reveal = () => {
      setReady(true);
      void video.play().catch(() => {});
    };

    if (video.readyState >= 3) reveal();

    video.addEventListener("canplay", reveal);
    video.addEventListener("playing", reveal);

    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );

    visibility.observe(el);

    return () => {
      video.removeEventListener("canplay", reveal);
      video.removeEventListener("playing", reveal);
      visibility.disconnect();
    };
  }, [shouldLoad, playbackId]);

  const mediaClass = `object-cover transition-[opacity,transform] duration-700 group-hover:scale-[1.04] ${className}`;

  return (
    <div ref={containerRef} className="absolute inset-0 bg-surface">
      <Image
        src={poster}
        alt=""
        fill
        className={`${mediaClass} ${ready ? "pointer-events-none opacity-0" : "opacity-100"}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {shouldLoad && playbackId ? (
        <MuxVideo
          ref={videoRef}
          playbackId={playbackId}
          streamType="on-demand"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          preferPlayback="mse"
          metadata={{ video_title: title }}
          className={`absolute inset-0 size-full ${mediaClass} ${ready ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}
    </div>
  );
}
