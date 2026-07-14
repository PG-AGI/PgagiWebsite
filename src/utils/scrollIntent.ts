// One-shot, in-memory scroll target shared across a client-side navigation.
//
// Set it right before navigating (e.g. the "View Case Study" button on a
// vertical page) and consume it once on the destination page. Because it lives
// in module memory it survives an SPA route change but resets on a full page
// load — so a refresh of, or a direct visit to, the destination scrolls
// nowhere. No URL param, no hash.

let pendingSlug: string | null = null;

export function setScrollIntent(slug: string): void {
  pendingSlug = slug;
}

/** Returns the pending scroll target (if any) and clears it. */
export function consumeScrollIntent(): string | null {
  const slug = pendingSlug;
  pendingSlug = null;
  return slug;
}
