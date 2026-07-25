export const hero = {
  brand: "FLASSY",
  headline: "AI visual content for brands that need to ship.",
  subhead:
    "Creatives, photo & video generation, and AI avatars — produced for marketing teams who move fast.",
  primaryCta: "Message on Telegram",
  secondaryCta: "Send a brief",
} as const;

export const trust = {
  label: "Trusted by marketing teams across",
  marks: ["E-commerce", "SaaS", "Retail", "Media", "Agencies"],
} as const;

export const servicesIntro = {
  headline: "The best way to scale visual content",
  items: [
    {
      id: "creatives",
      title: "Ad creatives that convert",
      description:
        "Scroll-stopping static and motion creatives for Meta, TikTok, and display — iterated at brand speed.",
      cta: "Explore creatives",
      href: "#feature-creatives",
      gradient: "from-[#7c8cff] via-[#9b7bff] to-[#c4b5fd]",
    },
    {
      id: "media",
      title: "Photo & video generation",
      description:
        "Product shots, lifestyle scenes, and short-form video generated and refined for real campaigns.",
      cta: "See media gen",
      href: "#feature-media",
      gradient: "from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]",
    },
    {
      id: "avatars",
      title: "AI avatars for brands",
      description:
        "On-brand presenters and spokespeople for ads, explainers, and social — consistent across every cut.",
      cta: "View avatars",
      href: "#feature-avatars",
      gradient: "from-[#818cf8] via-[#a78bfa] to-[#ddd6fe]",
    },
  ],
} as const;

export const features = [
  {
    id: "feature-creatives",
    title: "Built for real campaign workflows",
    body: "Brief once. Get variations that match your brand system — formats, hooks, and CTAs ready for media buyers to test the same day.",
    visual: "creatives" as const,
    reverse: false,
  },
  {
    id: "feature-media",
    title: "Designed for multi-format production",
    body: "From hero stills to 9:16 reels, we generate and polish assets that feel shot — not templated — so your feed stays premium at volume.",
    visual: "media" as const,
    reverse: true,
  },
  {
    id: "feature-avatars",
    title: "Avatars that stay on brand",
    body: "Lock a look, voice, and wardrobe once. Ship localized or seasonal scripts without reshoots, talent fees, or scheduling chaos.",
    visual: "avatars" as const,
    reverse: false,
  },
] as const;

export const work = {
  headline: "Selected work",
  subhead: "A sample of the visual systems we build for growth teams.",
  items: [
    {
      category: "Ad creatives",
      title: "Performance pack for DTC apparel",
      gradient: "from-[#312e81] via-[#4c1d95] to-[#1e1b4b]",
    },
    {
      category: "Product photo",
      title: "Catalog refresh for beauty brand",
      gradient: "from-[#1e3a5f] via-[#312e81] to-[#0f172a]",
    },
    {
      category: "Short video",
      title: "UGC-style reels for SaaS launch",
      gradient: "from-[#4c1d95] via-[#5b21b6] to-[#1e1b4b]",
    },
    {
      category: "AI avatar",
      title: "Always-on presenter for fintech",
      gradient: "from-[#1e293b] via-[#312e81] to-[#0f172a]",
    },
    {
      category: "Motion",
      title: "Brand film stills for retail",
      gradient: "from-[#3730a3] via-[#6d28d9] to-[#1e1b4b]",
    },
    {
      category: "Social system",
      title: "Weekly content engine for CPG",
      gradient: "from-[#1e3a8a] via-[#4338ca] to-[#0f172a]",
    },
  ],
} as const;

export const testimonials = {
  headline: "What clients are saying",
  items: [
    {
      quote:
        "We were drowning in ad variations before every launch. FLASSY turned a two-week scramble into something we can ship the same week — and it still looks like us.",
      name: "Maya Chen",
      avatar: "/avatars/avatar-maya.png",
    },
    {
      quote:
        "Honestly didn’t expect AI creatives to feel this human. The reels we got back outperformed our old UGC tests, and we didn’t have to chase creators for weeks.",
      name: "Jordan Blake",
      avatar: "/avatars/avatar-jordan.png",
    },
    {
      quote:
        "I brief them once on Telegram and get back options that are actually usable. No fluff, no weird AI artifacts — just content ready for paid.",
      name: "Sofia Alvarez",
      avatar: "/avatars/avatar-sofia.png",
    },
    {
      quote:
        "Product shoots used to stall every release. Now we get lifestyle frames that sit next to real photography and nobody asks which is which.",
      name: "Ethan Park",
      avatar: "/avatars/avatar-ethan.png",
    },
    {
      quote:
        "Our AI presenter finally feels on-brand. Same face, same energy across markets — localization stopped being a production headache.",
      name: "Aisha Rahman",
      avatar: "/avatars/avatar-aisha.png",
    },
    {
      quote:
        "Fast replies, clean delivery, zero agency theater. If you need visual content that keeps up with a small team, these guys get it.",
      name: "Leo Hartmann",
      avatar: "/avatars/avatar-leo.png",
    },
    {
      quote:
        "We use them for seasonal campaigns and always-on social. Quality stays high even when we ask for volume — that’s rare.",
      name: "Nora Whitfield",
      avatar: "/avatars/avatar-nora.png",
    },
    {
      quote:
        "The before/after creatives they made for us became our best-performing ads last quarter. Clear, sharp, and surprisingly on-taste.",
      name: "Daniel Okoye",
      avatar: "/avatars/avatar-daniel.png",
    },
  ],
} as const;

export const contact = {
  headline: "Tell us what you need to ship",
  subhead:
    "Prefer Telegram — that’s where we move fastest. Or send a brief below and we’ll follow up.",
  telegramLabel: "Message @flassystudio",
  formTitle: "Send a brief",
  fields: {
    name: "Name",
    email: "Work email",
    company: "Company (optional)",
    message: "Brief",
  },
  submit: "Send brief",
  success:
    "Thanks — we received your brief. Prefer a faster reply? Message us on Telegram @flassystudio.",
} as const;
