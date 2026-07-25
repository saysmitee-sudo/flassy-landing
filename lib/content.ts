import muxAssets from "@/lib/mux-assets.json";

export const hero = {
  line1: "Discover the essence of FLASSY, an AI visual content agency.",
  line2: "Let's shape your brand into a masterpiece together.",
  cta: "Message us",
} as const;

function workVideo(
  key: keyof typeof muxAssets,
  localFile: string,
  focus: string,
) {
  const asset = muxAssets[key];
  const playbackId = asset.playbackId || undefined;
  return {
    title: asset.title,
    type: "video" as const,
    focus,
    playbackId,
    poster: `/media/posters/${localFile.replace(/\.mp4$/, ".jpg")}`,
  };
}

export const work = {
  items: [
    workVideo("vanta-nightshift-capsule", "vanta-nightshift-capsule.mp4", "object-center"),
    workVideo("creator-before-after", "creator-before-after.mp4", "object-[50%_14%]"),
    workVideo("maya-avatar-preview", "maya-avatar-preview.mp4", "object-[50%_12%]"),
    workVideo("royal-trader", "royal-trader.mp4", "object-[50%_42%]"),
  ],
} as const;

export const services = {
  items: [
    {
      title: "Ad Creatives",
      items: [
        "Performance creatives for Meta & TikTok",
        "Hook & variation testing packs",
        "Static and motion ad systems",
        "Brand-safe campaign iterations",
      ],
    },
    {
      title: "Photo & Video Gen",
      items: [
        "Product and lifestyle photography",
        "Short-form video generation",
        "Campaign stills and reels",
        "Retouch and export for paid media",
      ],
    },
    {
      title: "AI Avatars",
      items: [
        "On-brand AI presenters",
        "Localized scripts and takes",
        "Always-on spokespeople",
        "Social and explainer formats",
      ],
    },
    {
      title: "Content Systems",
      items: [
        "Weekly visual content engines",
        "Template and brand kits",
        "Multi-format production pipelines",
        "Ongoing creative support",
      ],
    },
  ],
} as const;

export const about = {
  line1: "FLASSY helps brands ship scroll-stopping visuals with AI — without losing taste, consistency, or speed.",
  line2: "We partner with marketing teams who need volume and quality in the same brief.",
} as const;

export const contact = {
  headline: "Let's start creating together",
  cta: "Let's talk",
} as const;

export const footer = {
  note: "FLASSY — AI Visual Content Agency",
  links: [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
