---
version: alpha
name: OpenAI Minimal Light
description: A spacious, high-contrast, product-forward system with restrained chrome and soft neutrality.
colors:
  primary: "#000000"
  secondary: "#111827"
  tertiary: "#6B7280"
  neutral: "#E5E7EB"
  surface: "#FFFFFF"
  on-surface: "#000000"
  error: "#DC2626"
  border: "#0000001F"
  card-border: "#E5E7EB"
typography:
  headline-display:
    fontFamily: "OpenAI Sans"
    fontSize: "41px"
    fontWeight: 700
    lineHeight: "49px"
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "OpenAI Sans"
    fontSize: "31px"
    fontWeight: 500
    lineHeight: "46.7561px"
    letterSpacing: "-1.06817px"
  headline-md:
    fontFamily: "OpenAI Sans"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: "29px"
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "OpenAI Sans"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "22px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "OpenAI Sans"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "24px"
    letterSpacing: "0px"
  body-md:
    fontFamily: "OpenAI Sans"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "19.6px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "OpenAI Sans"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "OpenAI Sans"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "OpenAI Sans"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "19.6px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "OpenAI Sans"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0px"
  caption:
    fontFamily: "OpenAI Sans"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 10px
  sm: 20px
  md: 32px
  lg: 52px
  xl: 112px
  gutter: 24px
  margin: 32px
components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "13px 12px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "13px 12px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "13px 12px"
    height: "40px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "0px"
    height: "auto"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "10px 14px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    padding: "0px"
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    size: "40px"
---

# OpenAI Minimal Light

## Overview
This interface feels calm, confident, and highly restrained, with a product-first focus rather than decorative flair. The composition is intentionally spacious, making it feel approachable for a broad audience while still reading as professional and technically sophisticated. The visual tone is neutral and low-noise, with strong typographic hierarchy doing most of the work.

## Colors
- **Primary (#000000):** The core ink color used for the strongest text, key actions, and brand emphasis. It creates the crisp, editorial contrast that defines the interface.
- **Secondary (#111827):** A near-black support tone for secondary emphasis when a slightly softer contrast is needed.
- **Tertiary (#6B7280):** A muted gray used for low-priority labels, helper text, iconography, and chips. It keeps supporting UI quiet.
- **Neutral (#E5E7EB):** A light gray for borders and subtle structural separation, especially on cards and controls.
- **Surface (#FFFFFF):** The dominant background and component fill color, reinforcing the clean white canvas.
- **On-surface (#000000):** The default readable text color on white surfaces; nearly everything important leans on this for clarity.
- **Error (#DC2626):** Reserved for destructive states and validation feedback, with a vivid but restrained red.
- **Border (#0000001F):** A translucent black border token that produces the soft, hairline chrome visible in navigation and pill controls.
- **Card-border (#E5E7EB):** The card edge color used for light framing without adding visual heaviness.

## Typography
The system uses **OpenAI Sans** throughout, with a consistent sans-serif fallback stack for reliability. Headlines range from bold display treatment to medium-weight section headings, while body and label styles stay compact and legible. The visual language favors moderate-to-tight line heights and minimal letter spacing; the only notable tracking shift is the slightly compressed `headline-lg` style, which helps large headings feel stable and refined rather than airy.

Use:
- **headline-display** for the most prominent page statements.
- **headline-lg** for large section intros and hero questions.
- **headline-md** and **headline-sm** for product and content hierarchy.
- **body-md** and **body-lg** for descriptive copy.
- **label-md**, **label-lg**, and **label-sm** for buttons, chips, and navigation.
- **caption** for subtle auxiliary text.

Uppercase is not a dominant convention in this source; labels remain sentence case and understated.

## Layout & Spacing
The layout is built around a wide, centered composition with generous vertical breathing room. Navigation sits in a thin top bar, while the hero content is centered and isolated with substantial whitespace, making the page feel uncluttered and focused. The spacing rhythm is intentionally simple: small control gaps use `xs` and `sm`, while major section separation jumps to `lg` and `xl`.

Card and control padding is compact rather than lush, typically around 12–16px inside pills, inputs, and cards. Large visual modules sit in a broad content column, with image tiles and hero blocks allowed to stretch horizontally while preserving clean margins and alignment.

## Elevation & Depth
Depth is extremely subtle. The interface relies more on borders, tonal contrast, and whitespace than on shadow-heavy layering. Where shadows appear, they are soft and barely perceptible, supporting affordances without creating a raised, material look.

Most components are flat white surfaces with thin gray or translucent borders. This keeps the hierarchy crisp and modern, and it helps the content feel trustworthy and product-centric rather than ornamental.

## Shapes
The shape language is soft but disciplined. Buttons and chips use fully rounded pills (`rounded.full`), while larger containers and cards use modest radii (`rounded.md` to `rounded.lg`) to soften the otherwise minimal structure. The overall feel is approachable and polished, with no sharp architectural corners dominating the design.

## Components
Buttons are simple and highly restrained:
- **Primary button (`button-primary`):** White or surface-filled pill with dark text, thin border, and 40px height. Padding is compact, and the emphasis comes from contrast and shape rather than color saturation.
- **Secondary button (`button-secondary`):** Use a stronger filled treatment only when a command needs to read as the dominant action; keep the same pill silhouette and sizing.
- **Tertiary button (`button-tertiary`):** Borderless text or icon action, used for low-emphasis utilities and inline actions.
- Hover states should stay subtle, using slightly warmer or grayer surface shifts rather than dramatic animation or color inversion.

Inputs are large, rounded, and lightly outlined:
- Use `input` for prompt fields and search-like entry points.
- Maintain generous internal padding and a quiet border so the text area feels open.
- Placeholder text should stay muted and secondary.

Cards are clean containers with restrained framing:
- Use `card` for content tiles, previews, and feature modules.
- Keep borders thin and backgrounds white.
- Avoid heavy drop shadows; separation should come from spacing and edge definition.

Chips and navigation items are similarly minimal:
- **Chips (`chip`):** Small rounded pills with light borders and muted text, suitable for topic shortcuts and filters.
- **Nav links (`nav-link`):** Plain text links with no background treatment; spacing and typographic weight carry the hierarchy.
- **Icon buttons (`icon-button`):** 40px circular controls with soft fills and simple glyphs, suitable for submit, search, or utility actions.

## Do's and Don'ts
- Do keep most surfaces white and let typography establish hierarchy.
- Do use thin borders and subtle contrast instead of heavy shadows.
- Do preserve pill shapes for buttons, chips, and small utility actions.
- Do keep spacing generous around the hero and top-level navigation.
- Don't introduce saturated brand colors into core UI chrome.
- Don't use sharp corners on primary controls.
- Don't make cards feel raised or glossy.
- Don't overuse uppercase, tracking, or decorative typography effects.