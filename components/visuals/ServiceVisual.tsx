type ServiceVisualProps = {
  type: "creatives" | "media" | "avatars";
  fill?: boolean;
};

export function ServiceVisual({ type, fill = false }: ServiceVisualProps) {
  if (type === "creatives") {
    if (fill) {
      return (
        <video
          src="/media/creator-before-after.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover object-[50%_19%]"
        />
      );
    }

    return (
      <div className="flex h-full items-end justify-center">
        <div className="w-full max-w-[240px] overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
          </div>
          <div className="space-y-2 p-3">
            <div className="h-16 rounded-lg bg-gradient-to-br from-violet-500/40 to-indigo-600/30" />
            <div className="h-2 w-[75%] rounded bg-white/20" />
            <div className="h-2 w-1/2 rounded bg-white/10" />
            <div className="flex gap-2 pt-1">
              <div className="h-6 flex-1 rounded-full bg-white/90" />
              <div className="h-6 w-6 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "media") {
    if (fill) {
      return (
        <video
          src="/media/vanta-jacket-preview.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover object-center"
        />
      );
    }

    return (
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-[220px] overflow-hidden rounded-xl border border-white/10 bg-[#141414] shadow-2xl">
          <div className="relative aspect-video overflow-hidden bg-black">
            <video
              src="/media/vanta-jacket-preview.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 size-full object-cover object-center"
            />
          </div>
          <div className="space-y-2 p-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-20 rounded bg-white/25" />
              <div className="h-5 rounded-full bg-white/90 px-2 text-[9px] font-medium leading-5 text-black">
                Export
              </div>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full bg-violet-400" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "avatars") {
    if (fill) {
      return (
        <video
          src="/media/maya-avatar-preview.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover object-[50%_12%]"
        />
      );
    }

    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full max-w-[200px] flex-col items-center gap-3 rounded-xl border border-white/10 bg-[#141414] p-4 shadow-2xl">
          <div className="size-16 rounded-full bg-gradient-to-br from-violet-300 to-indigo-600 shadow-inner" />
          <div className="h-2 w-24 rounded bg-white/25" />
          <div className="h-2 w-16 rounded bg-white/10" />
          <div className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2">
            <div className="h-2 w-full rounded bg-white/15" />
            <div className="mt-1.5 h-2 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
