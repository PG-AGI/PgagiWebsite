// src/services/imagePlaceholder.ts
//
// Server-only: derive a tiny "dominant colour" placeholder for a cover image,
// used as next/image `blurDataURL`. It is a 1x1 average of the image, so when
// next/image renders it under `placeholder="blur"` it shows as a clean SOLID
// COLOUR (blurring a single pixel is a no-op) — no blurry preview, no quality
// impact. The real HD image fades in over it.
//
// Computed at build/revalidation time (ISR), so there is zero per-request cost.
// Falls back to a neutral tint for remote or missing sources.

import 'server-only';
import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';

const NEUTRAL_HEX = '#e9edf1';

async function solidColour(hex: string): Promise<string> {
  const buf = await sharp({ create: { width: 1, height: 1, channels: 3, background: hex } })
    .png()
    .toBuffer();
  return 'data:image/png;base64,' + buf.toString('base64');
}

export async function coverPlaceholder(coverImage?: string): Promise<string> {
  try {
    // Only local /public assets can be read at build time; remote URLs → tint.
    if (!coverImage || !coverImage.startsWith('/')) return solidColour(NEUTRAL_HEX);

    const file = path.join(process.cwd(), 'public', coverImage);
    const src = await fs.readFile(file);
    const px = await sharp(src).resize(1, 1, { fit: 'cover' }).png().toBuffer();
    return 'data:image/png;base64,' + px.toString('base64');
  } catch {
    return solidColour(NEUTRAL_HEX);
  }
}
