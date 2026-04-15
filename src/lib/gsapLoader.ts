/**
 * Lazy-load GSAP and plugins on-demand to reduce bundle size
 * Only import specific features instead of the full library
 */

let gsapLoaded = false
let scrollTriggerLoaded = false

export const loadGsap = async () => {
  if (gsapLoaded) return
  // Only load core, not plugins
  // Tree-shake by importing specific modules
  const gsap = await import('gsap')
  gsapLoaded = true
  return gsap.default
}

export const loadScrollTrigger = async () => {
  if (scrollTriggerLoaded) return

  const [gsapModule, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ])

  const gsap = gsapModule.default
  gsap.registerPlugin(ScrollTrigger)
  scrollTriggerLoaded = true
  return { gsap, ScrollTrigger }
}

// For components that need GSAP immediately, import selectively
export { default as gsapCore } from 'gsap'
