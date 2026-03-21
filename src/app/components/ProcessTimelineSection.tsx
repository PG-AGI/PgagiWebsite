"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { Blocks, Gauge, Rocket, Search, Wrench } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProcessTimelineSection.module.scss";
import { GSAP_EASE, MOTION_DURATION, MOTION_STAGGER } from "@/lib/motion";

type TimelineStep = {
  title: string;
  description: string;
  color: string;
  iconColor: string;
  icon: LucideIcon;
};

const timelineSteps: TimelineStep[] = [
  {
    title: "Discovery",
    description:
      "Understand your business goals, challenges, and high-impact AI opportunities.",
    color: "#f08787",
    iconColor: "#f8fbff",
    icon: Search,
  },
  {
    title: "Architecture",
    description:
      "Design a secure, scalable system aligned with product performance and ROI.",
    color: "#dfbf3f",
    iconColor: "#f8fbff",
    icon: Blocks,
  },
  {
    title: "Build",
    description:
      "Develop production-ready AI systems using user-first and engineering best practices.",
    color: "#9db1ca",
    iconColor: "#f8fbff",
    icon: Wrench,
  },
  {
    title: "Deploy",
    description:
      "Launch, integrate, and validate systems in real-world production environments.",
    color: "#ef5850",
    iconColor: "#f8fbff",
    icon: Rocket,
  },
  {
    title: "Optimize",
    description:
      "Monitor performance, refine models, and continuously improve outcomes.",
    color: "#f6f6f6",
    iconColor: "#111417",
    icon: Gauge,
  },
];

const ProcessTimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = timelineRef.current;
    if (!scroller) return;

    let frame: number | null = null;
    let cachedCards: HTMLElement[] = [];

    const updateActiveStep = () => {
      frame = null;
      if (cachedCards.length === 0) {
        cachedCards = Array.from(
          scroller.querySelectorAll<HTMLElement>("[data-timeline-card='true']"),
        );
      }
      if (!cachedCards.length) return;

      const viewportCenter = scroller.scrollLeft + scroller.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Infinity;

      for (let i = 0; i < cachedCards.length; i++) {
        const card = cachedCards[i];
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = i;
        }
      }

      setActiveIndex(nearestIndex);
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(updateActiveStep);
    };

    const onResize = () => {
      cachedCards = []; // Force re-cache
      onScroll();
    };

    updateActiveStep();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  /* ── Section entrance animations ── */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const title = titleRef.current;
    const panel = panelRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, x: -28 },
          {
            opacity: 1, x: 0,
            duration: MOTION_DURATION.slow,
            ease: GSAP_EASE.premiumOut,
            scrollTrigger: { trigger: section, start: "top 82%", once: true },
          },
        );
      }

      if (panel) {
        gsap.fromTo(
          panel,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0,
            duration: MOTION_DURATION.cinematic,
            ease: GSAP_EASE.premiumOut,
            scrollTrigger: { trigger: section, start: "top 78%", once: true },
          },
        );

        const cards = panel.querySelectorAll("[data-timeline-card='true']");
        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 24, scale: 0.96 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: MOTION_DURATION.normal,
              ease: GSAP_EASE.snappyOut,
              stagger: MOTION_STAGGER.tight,
              scrollTrigger: { trigger: section, start: "top 72%", once: true },
            },
          );
        }
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="process-timeline" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.panel} ref={panelRef}>
          <div className={styles.contentLayout}>
            <h2 className={styles.title} ref={titleRef}>
              Process <span>timeline</span>
            </h2>

            <div
              ref={timelineRef}
              className={styles.timelineScroller}
              aria-label="PGAGI process timeline"
            >
              {timelineSteps.map((step, index) => {
                const StepIcon = step.icon;
                const nextColor =
                  timelineSteps[index + 1]?.color ?? timelineSteps[0].color;

                return (
                  <article
                    key={step.title}
                    className={`${styles.stepCard} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                    data-timeline-card="true"
                    style={
                      {
                        "--step-color": step.color,
                        "--step-end-color": nextColor,
                        "--icon-color": step.iconColor,
                      } as CSSProperties
                    }
                  >
                    <div
                      className={styles.copyBlock}
                      style={{ animationDelay: `${index * 1.5 + 0.6}s` }}
                    >
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>

                    <div className={styles.track} aria-hidden="true">
                      <svg
                        className={styles.arc}
                        viewBox="0 0 220 130"
                        preserveAspectRatio="none"
                      >
                        <path
                          className={styles.arcPath}
                          d="M 0 122 C 36 16, 184 16, 220 122"
                        />
                        <path
                          className={styles.arcGlow}
                          d="M 0 122 C 36 16, 184 16, 220 122"
                          style={{ animationDelay: `${index * 1.5}s` }}
                        />
                        {index === 0 && (
                          <circle
                            className={styles.startDot}
                            cx="0"
                            cy="122"
                            r="4"
                            style={{ animationDelay: `${index * 1.5}s` }}
                          />
                        )}
                        <circle
                          className={styles.endDot}
                          cx="220"
                          cy="122"
                          r="4"
                          style={{ animationDelay: `${(index + 1) * 1.5}s` }}
                        />
                      </svg>

                      {/* CSS pulse animation — zero JS, runs on compositor */}
                      <span
                        className={styles.iconBadge}
                        style={{
                          transform: "translate(-50%, -50%)",
                          animationDelay: `${index * 1.5 + 0.6}s`,
                        }}
                      >
                        <StepIcon size={14} strokeWidth={2.2} />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <p className={styles.mobileHint}>Swipe horizontally to explore each step.</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
