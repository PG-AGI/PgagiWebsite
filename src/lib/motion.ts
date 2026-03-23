export const MOTION_DURATION = {
  fast: 0.28,
  normal: 0.48,
  slow: 0.68,
  cinematic: 0.9,
} as const;

export const MOTION_STAGGER = {
  tight: 0.06,
  normal: 0.1,
  relaxed: 0.16,
} as const;

export const FRAMER_EASE = {
  premiumOut: [0.22, 1, 0.36, 1] as const,
  smoothInOut: [0.65, 0, 0.35, 1] as const,
  snappyOut: [0.33, 1, 0.68, 1] as const,
} as const;

export const GSAP_EASE = {
  premiumOut: "power3.out",
  smoothInOut: "power2.inOut",
  snappyOut: "power2.out",
} as const;

export const MOTION_SCRUB = {
  stack: 0.6,
  cinematic: 0.75,
} as const;

export const MOBILE_BREAKPOINT = 768;
export const MOBILE_MEDIA_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
export const SCROLL_REFRESH_DEBOUNCE_MS = 150;

let safeRefreshTimer: number | null = null;

/**
 * Debounced “safe” ScrollTrigger refresh for layout shifts (e.g. images).
 * Prefer this over `window.dispatchEvent(new Event("resize"))`, which runs
 * a full `ScrollTrigger.refresh()` and can blank pinned scrub sections.
 */
export function scheduleScrollTriggerSafeRefresh() {
  if (typeof window === "undefined") return;
  if (safeRefreshTimer) window.clearTimeout(safeRefreshTimer);
  safeRefreshTimer = window.setTimeout(() => {
    safeRefreshTimer = null;
    void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh(true);
    });
  }, SCROLL_REFRESH_DEBOUNCE_MS);
}
