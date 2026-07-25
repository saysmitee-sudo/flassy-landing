type FeatureVisualProps = {
  type: "creatives" | "media" | "avatars";
};

export function FeatureVisual({ type }: FeatureVisualProps) {
  if (type === "creatives") {
    return (
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-white/40">Campaign board</span>
        </div>
        <div className="grid grid-cols-2 gap-3 p-4">
          {["Hook A", "Hook B", "Static", "Motion"].map((label, i) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <div
                className={`mb-2 aspect-[4/3] rounded-lg ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-violet-500/50 to-indigo-700/40"
                    : "bg-gradient-to-br from-indigo-400/40 to-purple-800/30"
                }`}
              />
              <p className="text-xs font-medium text-white/80">{label}</p>
              <p className="mt-0.5 text-[10px] text-white/35">Ready to test</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "media") {
    return (
      <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-2xl">
        <div className="border-b border-white/10 px-4 py-3 text-xs text-white/45">
          Generate · Review · Export
        </div>
        <div className="space-y-3 p-4">
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs text-white/50">Prompt</p>
            <p className="mt-1 text-sm text-white/90">
              Soft daylight product still, matte bottle, marble surface
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 p-3">
            <div className="size-14 shrink-0 rounded-lg bg-gradient-to-br from-sky-400/40 to-violet-600/50" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white">hero_v3.png</p>
              <p className="text-xs text-white/40">4K · brand-safe · retouched</p>
            </div>
            <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-black">
              Review
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-2xl">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <div className="size-9 rounded-full bg-gradient-to-br from-violet-300 to-indigo-600" />
        <div>
          <p className="text-sm font-medium text-white">Brand Avatar</p>
          <p className="text-xs text-white/40">On-script · EN / ES / DE</p>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div className="rounded-xl bg-white/5 p-3 text-sm leading-relaxed text-white/80">
          “Meet the new collection — same look, every market, no reshoot.”
        </div>
        <div className="flex items-center justify-between text-xs text-white/40">
          <span>Takes: 12</span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-white/70">
            Export reel
          </span>
        </div>
      </div>
    </div>
  );
}
