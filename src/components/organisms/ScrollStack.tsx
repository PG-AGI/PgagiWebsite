"use client";

import React, {
  useRef,
  useEffect,
  Children,
  isValidElement,
  type ReactNode,
  type ReactElement,
} from "react";
import { loadScrollTrigger } from "@/lib/gsapLoader";
import { useSmoothScroll } from "@/contexts/SmoothScrollContext";
import styles from "@/styles/components/organisms/ScrollStack.module.scss";
import {
  GSAP_EASE,
  MOBILE_MEDIA_QUERY,
  MOTION_DURATION,
  REDUCED_MOTION_QUERY,
} from "@/lib/motion";



type ScrollStackItemProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ScrollStackItem = ({
  children,
  className,
  style,
}: ScrollStackItemProps) => <div className={className} style={style}>{children}</div>;

type ScrollStackProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  id?: string;
  offset?: number;
  mobileMode?: "flow" | "pinned";
  animated?: boolean;
  cardOverlap?: number;
  preRoll?: number;
  scrollMultiplier?: number;
  /** Desktop only: vertically centre the pinned card in the viewport
      instead of pinning it to the top of the stack area. */
  centerCards?: boolean;
  /** Mobile only: keep the section heading pinned just below the navbar while
      the cards stack beneath it (instead of the heading scrolling away). */
  mobileStickyHeader?: boolean;
};

const ScrollStack = ({
  children,
  header,
  footer,
  className,
  id,
  offset = 8,
  mobileMode = "pinned",
  animated = true,
  cardOverlap = 0.35,
  preRoll = 0,
  scrollMultiplier = 1,
  centerCards = false,
  mobileStickyHeader = false,
}: ScrollStackProps) => {
  const sectionRef   = useRef<HTMLElement>(null);
  const viewportRef  = useRef<HTMLDivElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const { lenis }    = useSmoothScroll();

  const items = Children.toArray(children).filter(
    (child): child is ReactElement =>
      isValidElement(child) && child.type === ScrollStackItem,
  );
  const count = items.length;

 useEffect(() => {
  if (!animated) return;

  const section  = sectionRef.current;
  const viewport = viewportRef.current;
  const cards    = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);

  if (!section || !viewport || cards.length < 2) return;

  // Mobile (non-"flow") uses a pure-CSS sticky stack (see ScrollStack.module.scss):
  // no rAF loop, no scroll listener, no GSAP download — the compositor does all the
  // work off the main thread. Only the explicit `flow` mode keeps a JS path on mobile.
  const isMobile = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
  if (isMobile && mobileMode !== "flow") return;

  let cleanup: (() => void) | undefined;
  let cancelled = false;
  const currentLenis = lenis;
  loadScrollTrigger().then((result) => {
    // Component may have unmounted while GSAP was loading
    if (cancelled || !result) return;
    const { gsap } = result;
    cleanup = initializeGSAP(gsap, currentLenis);
  });

  return () => {
    cancelled = true;
    cleanup?.();
  };

  function initializeGSAP(gsap: typeof import("gsap").default,currentLenis: typeof lenis) {
    const section  = sectionRef.current;
    const viewport = viewportRef.current;
    const cards    = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);

    if (!section || !viewport || cards.length < 2) return;

    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const isMobileViewport     = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
    const useMobileFlow        = mobileMode === "flow" && isMobileViewport;

    const getVH = () => Math.max(window.innerHeight, 1);

    // ── Mobile: simple scroll-in fade per card ────────────────────
    if (useMobileFlow || prefersReducedMotion) {
      if (headerRef.current) gsap.set(headerRef.current, { opacity: 1 });
      const ctx = gsap.context(() => {
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 20, opacity: 0 },
            {
              y: 0, opacity: 1,
              duration: MOTION_DURATION.normal,
              ease: GSAP_EASE.premiumOut,
              delay: i * 0.08,
              scrollTrigger: { trigger: card, start: "top 88%", once: true },
            },
          );
        });
      });
      return () => ctx.revert();
    }

    // ── Stacking animation ────────────────────────────────────────
    const steps = count - 1;

    if (headerRef.current) gsap.set(headerRef.current, { opacity: 0, y: 16 });
    gsap.set(cards[0], { opacity: 0, y: 32, force3D: true });
    for (let i = 1; i < cards.length; i++) {
      gsap.set(cards[i], { y: getVH(), force3D: true });
    }

    let headerShown = false;
    const landingOffset = isMobileViewport ? 0 : offset;

    // Promote cards to compositor layers only while the section is on screen,
    // instead of a permanent `will-change` in CSS that reserves GPU memory for
    // every card on the page for the whole session.
    let promoted = false;
    const setPromoted = (on: boolean) => {
      if (on === promoted) return;
      promoted = on;
      gsap.set(cards, { willChange: on ? "transform" : "auto" });
    };

    const applyProgress = (p: number) => {
      const clamped = Math.max(0, Math.min(1, p));
      const scrollP = Math.max(0, clamped - preRoll);

      const segLen     = 1 / steps;
      const getSegment = (i: number) => {
        const shift = cardOverlap * segLen * (i - 1);
        return [
          Math.max(0, (i - 1) * segLen - shift),
          Math.min(1, i * segLen - shift),
        ] as const;
      };
      const easeSeg = (r: number) =>
        currentLenis
          ? r < 0.5 ? 2 * r * r : 1 - (-2 * r + 2) ** 2 / 2
          : r;

      for (let i = 1; i < count; i++) {
        const [segStart, segEnd] = getSegment(i);
        const rawSeg = Math.max(0, Math.min(1, (scrollP - segStart) / (segEnd - segStart)));
        const seg    = easeSeg(rawSeg);
        const vh     = getVH();
        gsap.set(cards[i], { y: vh * (1 - seg) + landingOffset * i * seg, force3D: true });
      }

      for (let j = 0; j < count - 1; j++) {
        let totalScaleDown = 0;
        for (let i = j + 1; i < count; i++) {
          const [segStart, segEnd] = getSegment(i);
          const rawSeg = Math.max(0, Math.min(1, (scrollP - segStart) / (segEnd - segStart)));
          totalScaleDown += easeSeg(rawSeg) * 0.03;
        }
        gsap.set(cards[j], { scale: Math.max(0.88, 1 - totalScaleDown), force3D: true });
      }
    };

    let cachedSectionTop = section.getBoundingClientRect().top + window.scrollY;

    const refreshSectionTop = () => {
      cachedSectionTop = section.getBoundingClientRect().top + window.scrollY;
    };

    window.addEventListener("resize", refreshSectionTop, { passive: true });

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && section.parentElement) {
      ro = new ResizeObserver(refreshSectionTop);
      ro.observe(section.parentElement);
    }

    const onWindowLoad = () => refreshSectionTop();
    window.addEventListener("load", onWindowLoad);

    const t1 = setTimeout(refreshSectionTop, 200);
    const t2 = setTimeout(refreshSectionTop, 800);

    const onScroll = ({ scroll }: { scroll: number }) => {
      const sectionTop = cachedSectionTop;
      const vh         = getVH();

      // Section height in px must mirror the JSX `height` formula below.
      const sectionHeightPx = ((count - 1) * scrollMultiplier + 1) * vh;
      setPromoted(sectionTop < scroll + vh && sectionTop + sectionHeightPx > scroll);

      if (!headerShown && scroll + vh * 0.85 >= sectionTop) {
        headerShown = true;
        if (headerRef.current) {
          gsap.to(headerRef.current, {
            opacity: 1, y: 0,
            duration: MOTION_DURATION.fast,
            ease: GSAP_EASE.premiumOut,
          });
        }
        gsap.to(cards[0], {
          y: 0, opacity: 1,
          duration: MOTION_DURATION.normal,
          ease: GSAP_EASE.premiumOut,
        });
      }

      const rawProgress = (scroll - sectionTop) / (steps * vh * scrollMultiplier);
      applyProgress(Math.max(0, Math.min(1, rawProgress)));
    };

    let rafId: number;
    let lastScrollY = -1;
    let rafRunning  = true;

    const nativeTick = () => {
      if (!rafRunning) return;
      const scrollY = window.scrollY;
      if (scrollY !== lastScrollY) {
        lastScrollY = scrollY;
        onScroll({ scroll: scrollY });
      }
      rafId = requestAnimationFrame(nativeTick);
    };

    if (currentLenis) {
      currentLenis.on("scroll", onScroll);
    } else {
      onScroll({ scroll: window.scrollY });
      rafId = requestAnimationFrame(nativeTick);
    }

    return () => {
      window.removeEventListener("resize", refreshSectionTop);
      window.removeEventListener("load", onWindowLoad);
      ro?.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      if (currentLenis) {
        currentLenis.off("scroll", onScroll);
      } else {
        rafRunning = false;
        cancelAnimationFrame(rafId);
      }
      gsap.set([...cards, headerRef.current].filter(Boolean), {
        clearProps: "transform,opacity,y,scale,willChange",
      });
    };
  }
}, [animated, cardOverlap, count, lenis, mobileMode, offset, preRoll, scrollMultiplier]);

  // ── Mobile sticky-header: publish the heading's live height as a CSS var ──
  // The heading is pinned below the navbar (pure CSS); the cards pin just below
  // it, offset by this height. Measuring it (rather than hard-coding) keeps the
  // cards aligned no matter how the title wraps on a given phone. This is a
  // ResizeObserver only — no scroll listener, no rAF, no GSAP.
  useEffect(() => {
    if (!mobileStickyHeader) return;
    const section = sectionRef.current;
    const header  = headerRef.current;
    if (!section || !header) return;

    const mq = window.matchMedia(MOBILE_MEDIA_QUERY);
    const measure = () => {
      if (mq.matches) {
        section.style.setProperty("--sticky-header-h", `${Math.ceil(header.offsetHeight)}px`);
      } else {
        section.style.removeProperty("--sticky-header-h");
      }
    };
    measure();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure);
      ro.observe(header);
    }
    mq.addEventListener?.("change", measure);
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      ro?.disconnect();
      mq.removeEventListener?.("change", measure);
      window.removeEventListener("resize", measure);
      section.style.removeProperty("--sticky-header-h");
    };
  }, [mobileStickyHeader, count]);

  const layoutClass    = animated ? styles.animated : styles.static;
  const mobileFlowClass = mobileMode === "flow" ? styles.mobileFlow : "";
  const centerClass     = centerCards ? styles.centered : "";
  const stickyHeaderClass = mobileStickyHeader ? styles.stickyHeaderMobile : "";

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${layoutClass} ${mobileFlowClass} ${centerClass} ${stickyHeaderClass} ${className ?? ""}`.trim()}
      id={id}
      // Height = scroll room the animation actually consumes ((count-1) steps ×
      // multiplier) + one viewport for the final card to rest. Using `count`
      // here (the old formula) left ~100·(multiplier-1)vh of dead pinned scroll
      // after the last card landed, before the next section appeared.
      style={animated ? { height: `${(count - 1) * 100 * scrollMultiplier + 100}vh` } : undefined}
    >
      <div ref={viewportRef} className={styles.viewport}>
        <div className={styles.container}>
          {header && (
            <div ref={headerRef} className={styles.headerArea}>
              {header}
            </div>
          )}
          <div className={styles.stackArea}>
            {items.map((child, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={styles.cardWrapper}
                // Drives the mobile CSS sticky-stack offset (top per card index).
                style={{ ["--card-index" as string]: i } as React.CSSProperties}
              >
                {child}
              </div>
            ))}
          </div>
          {footer && (
            <div className={styles.footerArea}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
