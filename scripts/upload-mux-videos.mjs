/**
 * Upload work videos to Mux (adaptive HLS) and write playback IDs.
 *
 * Usage:
 *   MUX_TOKEN_ID=... MUX_TOKEN_SECRET=... npm run upload:mux
 *
 * Create a token at: https://dashboard.mux.com/settings/access-tokens
 * (Video Read + Write)
 */

import { readFileSync, writeFileSync, statSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import Mux from "@mux/mux-node";

const root = join(fileURLToPath(import.meta.url), "../..");
const mediaDir = join(root, "media-source");
const outFile = join(root, "lib/mux-assets.json");

const videos = [
  {
    key: "vanta-nightshift-capsule",
    file: "vanta-nightshift-capsule.mp4",
    title: "Product Campaign",
  },
  {
    key: "creator-before-after",
    file: "creator-before-after.mp4",
    title: "Ad Creatives",
  },
  {
    key: "maya-avatar-preview",
    file: "maya-avatar-preview.mp4",
    title: "AI-avatars for brands",
  },
  {
    key: "royal-trader",
    file: "royal-trader.mp4",
    title: "Digital characters",
  },
];

function loadEnvLocal() {
  try {
    const raw = readFileSync(join(root, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (!m) continue;
      const key = m[1].trim();
      const value = m[2].trim().replace(/^['"]|['"]$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // optional
  }
}

async function sleep(ms) {
  await new Promise((r) => setTimeout(r, ms));
}

async function uploadFile(mux, { key, file, title }) {
  const path = join(mediaDir, file);
  const size = statSync(path).size;
  console.log(`\n→ ${title} (${basename(path)}, ${(size / 1024 / 1024).toFixed(1)}MB)`);

  const upload = await mux.video.uploads.create({
    cors_origin: "*",
    new_asset_settings: {
      playback_policies: ["public"],
      video_quality: "plus",
      meta: { title },
      passthrough: key,
    },
  });

  const body = readFileSync(path);
  const res = await fetch(upload.url, {
    method: "PUT",
    body,
    headers: {
      "Content-Type": "video/mp4",
      "Content-Length": String(size),
    },
  });

  if (!res.ok) {
    throw new Error(`Upload failed for ${file}: ${res.status} ${await res.text()}`);
  }

  console.log("  uploaded, waiting for Mux encoding…");

  let assetId = upload.asset_id;
  for (let i = 0; i < 90; i++) {
    const current = await mux.video.uploads.retrieve(upload.id);
    assetId = current.asset_id ?? assetId;
    if (current.status === "asset_created" && assetId) break;
    if (current.status === "errored") {
      throw new Error(`Mux upload errored for ${file}: ${JSON.stringify(current.error)}`);
    }
    await sleep(2000);
  }

  if (!assetId) throw new Error(`No asset_id for ${file}`);

  let playbackId;
  for (let i = 0; i < 90; i++) {
    const asset = await mux.video.assets.retrieve(assetId);
    if (asset.status === "ready") {
      playbackId = asset.playback_ids?.[0]?.id;
      break;
    }
    if (asset.status === "errored") {
      throw new Error(`Mux asset errored for ${file}: ${JSON.stringify(asset.errors)}`);
    }
    await sleep(2000);
  }

  if (!playbackId) throw new Error(`No playback_id for ${file}`);

  console.log(`  ready → ${playbackId}`);
  return { key, playbackId, assetId, title };
}

async function main() {
  loadEnvLocal();
  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;
  if (!tokenId || !tokenSecret) {
    console.error(
      "Missing MUX_TOKEN_ID / MUX_TOKEN_SECRET.\nCreate a token: https://dashboard.mux.com/settings/access-tokens",
    );
    process.exit(1);
  }

  const mux = new Mux({ tokenId, tokenSecret });
  const existing = (() => {
    try {
      return JSON.parse(readFileSync(outFile, "utf8"));
    } catch {
      return {};
    }
  })();

  const next = { ...existing };
  for (const video of videos) {
    if (next[video.key]?.playbackId && process.env.MUX_FORCE !== "1") {
      console.log(`skip ${video.key} (already uploaded, set MUX_FORCE=1 to reupload)`);
      continue;
    }
    const result = await uploadFile(mux, video);
    next[video.key] = {
      playbackId: result.playbackId,
      assetId: result.assetId,
      title: result.title,
    };
    writeFileSync(outFile, JSON.stringify(next, null, 2) + "\n");
  }

  console.log(`\nWrote ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
