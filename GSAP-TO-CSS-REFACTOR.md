# GSAP → CSS Animation Refactor Plan

## Why

GSAP ScrollTrigger runs JavaScript on **every scroll frame** across all active instances simultaneously.
Each instance recalculates positions, checks trigger thresholds, and updates styles.
With 7+ components using GSAP, that's 7+ JS callbacks firing 60–120 times per second while scrolling.

CSS animations driven by `IntersectionObserver` fire **once** — when the element enters the viewport.
After that: zero JS, zero scroll listeners, pure GPU composited rendering.

---

## Audit: What GSAP Is Doing Per Component

### Replaceable with CSS + IntersectionObserver

| Component | GSAP animation | CSS equivalent |
|-----------|---------------|----------------|
| `EcosystemSection.tsx` | Title: `opacity: 0, y: 28, skewY: 1` → in | `opacity` + `translateY` + `skewY` transition |
| `EcosystemSection.tsx` | Cards: `opacity: 0, y: 40, scale: 0.97` → in with stagger | `opacity` + `translateY` + `scale` transition with CSS `animation-delay` per card |
| `ProcessTimelineSection.tsx` | Title: `opacity: 0, x: -28` → in | `opacity` + `translateX` transition |
| `ProcessTimelineSection.tsx` | Panel: `opacity: 0, y: 32` → in | `opacity` + `translateY` transition |
| `ProcessTimelineSection.tsx` | Cards: `opacity: 0, y: 24, scale: 0.96` → in with stagger | `opacity` + `translateY` + `scale` with delay per card |

These are all one-shot entrance animations triggered when the section scrolls into view.
GSAP is overkill for this. IntersectionObserver + CSS handles it natively.

### Cannot replace — keep GSAP

| Component | Why CSS can't do it |
|-----------|-------------------|
| `ScrollStack.tsx` | Per-frame scroll math: cards move based on a custom easing function applied to live scroll position. Position is recalculated every RAF. Pure physics. |
| `BuildEcosystemSection.tsx` | Scroll-linked horizontal pan with `pin` + `scrub`. CSS `scroll-snap` can't replicate pinned viewport + scrubbed translation simultaneously. |
| `NewPage.tsx` | SVG `MotionPathPlugin` — dot animates along an SVG `<path>`. CSS `offset-path` isn't supported in all targets and can't do the loop-with-pause timing. |

---

## Replacement Pattern

Replace the GSAP `fromTo` + `scrollTrigger` pattern with this:

### Before (GSAP)
```tsx
gsap.fromTo(
  title,
  { opacity: 0, y: 28 },
  {
    opacity: 1, y: 0,
    duration: 0.7,
    ease: 'power3.out',
    scrollTrigger: { trigger: section, start: 'top 80%', once: true },
  }
);
```

### After (CSS + IntersectionObserver hook)

**Hook — `useInView.ts`** (shared, created once)
```ts
import { useEffect, useRef } from 'react';

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.dataset.inView = 'true';
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
```

**Component**
```tsx
const sectionRef = useInView<HTMLElement>({ threshold: 0.2 });

<section ref={sectionRef}>
  <h2 className={styles.title}>...</h2>
</section>
```

**CSS**
```scss
.title {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  [data-in-view='true'] & {
    opacity: 1;
    transform: none;
  }
}
```

**Staggered cards**
```scss
.card {
  opacity: 0;
  transform: translateY(40px) scale(0.97);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  [data-in-view='true'] & {
    opacity: 1;
    transform: none;
  }

  &:nth-child(1) { transition-delay: 0ms; }
  &:nth-child(2) { transition-delay: 80ms; }
  &:nth-child(3) { transition-delay: 160ms; }
  &:nth-child(4) { transition-delay: 240ms; }
}
```

---

## Execution Plan

### Phase 1 — Create shared hook
- Create `src/hooks/useInView.ts`

### Phase 2 — Migrate EcosystemSection
- Remove `gsap`, `ScrollTrigger` imports
- Remove `useEffect` GSAP block
- Add `useInView` hook
- Move animations to `EcosystemSection.module.scss`

### Phase 3 — Migrate ProcessTimelineSection
- Remove `gsap`, `ScrollTrigger` imports
- Remove `useEffect` GSAP block
- Add `useInView` hook
- Move animations to `ProcessTimelineSection.module.scss`

### Phase 4 — Clean up
- Remove `gsap.registerPlugin(ScrollTrigger)` from `VisionSystemSection.tsx` (it only uses `ScrollStack`, GSAP registration should live in `ScrollStack.tsx`)
- Verify GSAP is still imported correctly in the 3 components that keep it

---

## Expected outcome

| | Before | After |
|---|---|---|
| JS scroll listeners | 7+ (one per ScrollTrigger instance) | 3 (only ScrollStack, BuildEco, NewPage) |
| Work per scroll frame | All 7 instances recalculate | Only 3 instances (complex ones) |
| EcosystemSection animation | GSAP JS | CSS GPU — zero JS after mount |
| ProcessTimelineSection animation | GSAP JS | CSS GPU — zero JS after mount |
| GSAP bundle loaded by | Every section on mount | Only sections that still need it |

The `motion-lite` shim already handles `whileInView` with IntersectionObserver, so the pattern is already proven in the codebase — this just applies the same principle to the GSAP-only components.
