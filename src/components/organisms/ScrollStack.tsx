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

  let cleanup: (() => void) | undefined;
  let cancelled = false;

  loadScrollTrigger().then((result) => {
    // Component may have unmounted while GSAP was loading
    if (cancelled || !result) return;
    const { gsap } = result;
    cleanup = initializeGSAP(gsap);
  });

  return () => {
    cancelled = true;
    cleanup?.();
  };

  function initializeGSAP(gsap: import("gsap").gsap) {
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
        lenis
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

    if (lenis) {
      lenis.on("scroll", onScroll);
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
      if (lenis) {
        lenis.off("scroll", onScroll);
      } else {
        rafRunning = false;
        cancelAnimationFrame(rafId);
      }
      gsap.set([...cards, headerRef.current].filter(Boolean), {
        clearProps: "transform,opacity,y,scale",
      });
    };
  }
}, [animated, cardOverlap, count, lenis, mobileMode, offset, preRoll, scrollMultiplier]);

  const layoutClass    = animated ? styles.animated : styles.static;
  const mobileFlowClass = mobileMode === "flow" ? styles.mobileFlow : "";

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${layoutClass} ${mobileFlowClass} ${className ?? ""}`.trim()}
      id={id}
      style={animated ? { height: `${count * 100 * scrollMultiplier}vh` } : undefined}
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
