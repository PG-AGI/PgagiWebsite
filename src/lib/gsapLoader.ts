/**
 * Lazy-load GSAP and plugins on-demand to reduce bundle size
 */

let gsapLoaded = false;
let scrollTriggerLoaded = false;

export const loadGsap = async () => {
  if (gsapLoaded) return;
  const gsap = await import('gsap');
  gsapLoaded = true;
  return gsap.default;
};

export const loadScrollTrigger = async () => {
  if (scrollTriggerLoaded) return;

  const [gsapModule, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);

  const gsap = gsapModule.default;
  gsap.registerPlugin(ScrollTrigger);
  scrollTriggerLoaded = true;
  return { gsap, ScrollTrigger };
};

// REMOVED: export { default as gsapCore } from 'gsap'
// ↑ This was eagerly bundling GSAP on every page load