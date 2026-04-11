"use client";

import React, {
  useRef,
  useEffect,
  Children,
  isValidElement,
  type ReactNode,
  type ReactElement,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "@/contexts/SmoothScrollContext";
import styles from "@/styles/components/organisms/ScrollStack.module.scss";
import {
  GSAP_EASE,
  MOBILE_MEDIA_QUERY,
  MOTION_DURATION,
  REDUCED_MOTION_QUERY,
} from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
};

const ScrollStack = ({
  children,
  header,
  footer,
  className,
  id,
  offset = 8,
  mobileMode = "flow",
  animated = true,
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

    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const isMobileViewport     = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
    const useMobileFlow        = mobileMode === "flow" && isMobileViewport;

    const getVH = () => Math.max(window.visualViewport?.height ?? window.innerHeight, 1);

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

    // ── Desktop: fake-pin via GSAP translateY ────────────────────
    // Section height = count×100vh provides the scroll room.

    const steps = count - 1;

    // Initial state
    if (headerRef.current) gsap.set(headerRef.current, { opacity: 0, y: 16 });
    gsap.set(cards[0], { opacity: 0, y: 32, force3D: true });
    for (let i = 1; i < cards.length; i++) {
      gsap.set(cards[i], { y: getVH(), force3D: true });
    }

    let headerShown = false;

    /** Drive card positions from 0→1 progress across the pinned zone. */
    const applyProgress = (p: number) => {
      const clamped = Math.max(0, Math.min(1, p));

      // Slide cards in one-by-one
      for (let i = 1; i < count; i++) {
        const segStart = (i - 1) / steps;
        const segEnd   = i / steps;
        const seg      = Math.max(0, Math.min(1, (clamped - segStart) / (segEnd - segStart)));
        const vh       = getVH();
        gsap.set(cards[i], { y: vh * (1 - seg) + offset * i * seg, force3D: true });
      }

      // Scale cards that are being covered
      for (let j = 0; j < count - 1; j++) {
        let totalScaleDown = 0;
        for (let i = j + 1; i < count; i++) {
          const segStart = (i - 1) / steps;
          const segEnd   = i / steps;
          const seg      = Math.max(0, Math.min(1, (clamped - segStart) / (segEnd - segStart)));
          totalScaleDown += seg * 0.03;
        }
        gsap.set(cards[j], { scale: Math.max(0.88, 1 - totalScaleDown), force3D: true });
      }
    };

    const onScroll = ({ scroll }: { scroll: number }) => {
      // getBoundingClientRect().top + scroll = section's document-relative top.
      // Correct regardless of positioned ancestors (unlike offsetTop).
      const sectionTop = section.getBoundingClientRect().top + scroll;
      const vh         = getVH();

      // Header + first card entrance (fires once, before pin zone starts)
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

      // Clamp viewport translateY to [0, steps×vh] and drive card progress
      const viewportY = Math.max(0, Math.min(steps * vh, scroll - sectionTop));
      gsap.set(viewport, { y: viewportY, force3D: true });

      const rawProgress = (scroll - sectionTop) / (steps * vh);
      applyProgress(Math.max(0, Math.min(1, rawProgress)));
    };

    lenis?.on("scroll", onScroll);

    return () => {
      lenis?.off("scroll", onScroll);
      gsap.set(viewport, { clearProps: "transform,y" });
      gsap.set([...cards, headerRef.current].filter(Boolean), {
        clearProps: "transform,opacity,y,scale",
      });
    };
  }, [animated, count, lenis, mobileMode, offset]);

  const layoutClass = animated ? styles.animated : styles.static;

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${layoutClass} ${className ?? ""}`}
      id={id}
      // Explicit height gives the browser the scroll room at render time.
      // This component is loaded via dynamic(ssr:false) so no hydration mismatch.
      style={animated ? { height: `${count * 100}vh` } : undefined}
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
