let gsapLoaded = false;
let scrollTriggerLoaded = false;

// Store the result so subsequent calls get the same instance
let gsapInstance: Awaited<ReturnType<typeof import('gsap')>>['default'] | null = null;

export const loadGsap = async () => {
  if (gsapLoaded && gsapInstance) return gsapInstance;
  const gsap = await import('gsap');
  gsapInstance = gsap.default;
  gsapLoaded = true;
  return gsapInstance;
};

export const loadScrollTrigger = async () => {
  // First call: load and register
  if (!scrollTriggerLoaded) {
    const [gsapModule, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);
    const gsap = gsapModule.default;
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerLoaded = true;
    gsapInstance = gsap;
  }

  // All calls (including subsequent): return the instance
  const gsap = gsapInstance ?? (await import('gsap')).default;
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  return { gsap, ScrollTrigger };
};