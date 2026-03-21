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
import styles from "./ScrollStack.module.scss";
import {
  GSAP_EASE,
  MOBILE_MEDIA_QUERY,
  MOTION_DURATION,
  MOTION_SCRUB,
  REDUCED_MOTION_QUERY,
  SCROLL_REFRESH_DEBOUNCE_MS,
} from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollStackItemProps = {
  children: ReactNode;
  className?: string;
};

export const ScrollStackItem = ({
  children,
  className,
}: ScrollStackItemProps) => <div className={className}>{children}</div>;

type ScrollStackProps = {
  children: ReactNode;
  header?: ReactNode;
  className?: string;
  id?: string;
  offset?: number;
  mobileMode?: "flow" | "pinned";
};

const ScrollStack = ({
  children,
  header,
  className,
  id,
  offset = 8,
  mobileMode = "flow",
}: ScrollStackProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items = Children.toArray(children).filter(
    (child): child is ReactElement =>
      isValidElement(child) && child.type === ScrollStackItem,
  );
  const count = items.length;

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );

    if (!section || cards.length < 2) return;

    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const isMobileViewport = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
    const useMobileFlow = mobileMode === "flow" && isMobileViewport;
    const viewport = window.visualViewport;
    let refreshTimeout: number | null = null;

    const getViewportHeight = () =>
      Math.max(window.visualViewport?.height ?? window.innerHeight, 1);

    const requestRefresh = () => {
      if (refreshTimeout) window.clearTimeout(refreshTimeout);
      refreshTimeout = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, SCROLL_REFRESH_DEBOUNCE_MS);
    };

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: MOTION_DURATION.slow,
            ease: GSAP_EASE.premiumOut,
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          },
        );
      }

      gsap.set(cards[0], { y: 50, opacity: 0, force3D: true });
      gsap.to(cards[0], {
        y: 0,
        opacity: 1,
        duration: MOTION_DURATION.cinematic,
        force3D: true,
        ease: GSAP_EASE.premiumOut,
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      if (useMobileFlow) {
        for (let i = 1; i < cards.length; i++) {
          gsap.set(cards[i], { y: 24, opacity: 0, scale: 1, force3D: true });
          gsap.to(cards[i], {
            y: 0,
            opacity: 1,
            duration: MOTION_DURATION.normal,
            ease: GSAP_EASE.premiumOut,
            force3D: true,
            scrollTrigger: {
              trigger: cards[i],
              start: "top 88%",
              once: true,
            },
          });
        }
        return;
      }

      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], { y: getViewportHeight() * 1.1, force3D: true });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${(count - 1) * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: prefersReducedMotion ? false : MOTION_SCRUB.stack,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          preventOverlaps: true,
          fastScrollEnd: true,
        },
      });

      for (let i = 1; i < count; i++) {
        const position = i - 1;

        tl.to(
          cards[i],
          {
            y: offset * i,
            ease: GSAP_EASE.smoothInOut,
            duration: 1,
            force3D: true,
          },
          position,
        );

        for (let j = 0; j < i; j++) {
          tl.to(
            cards[j],
            {
              scale: 1 - (i - j) * 0.03,
              transformOrigin: "top center",
              ease: GSAP_EASE.smoothInOut,
              duration: 1,
              force3D: true,
            },
            position,
          );
        }
      }
    });

    window.addEventListener("resize", requestRefresh);
    window.addEventListener("orientationchange", requestRefresh);
    viewport?.addEventListener("resize", requestRefresh);

    return () => {
      window.removeEventListener("resize", requestRefresh);
      window.removeEventListener("orientationchange", requestRefresh);
      viewport?.removeEventListener("resize", requestRefresh);
      if (refreshTimeout) window.clearTimeout(refreshTimeout);
      ctx.revert();
    };
  }, [count, mobileMode, offset]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${mobileMode === "flow" ? styles.mobileFlow : ""} ${className ?? ""}`}
      id={id}
    >
      <div className={styles.viewport}>
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
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={styles.cardWrapper}
                style={{ zIndex: 10 + i }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
