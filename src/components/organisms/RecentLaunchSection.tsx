"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/organisms/RecentLaunchSection.module.scss";
import ROUTES from "@/constants/routes";
import type { Project, TabId } from "@/data/projects";

// ── Filter tab definitions ────────────────────────────────────────────
const TABS: { id: TabId; label: string }[] = [
  { id: "ai-product",  label: "AI Product" },
  { id: "ai-business", label: "AI Implemented in Business" },
  { id: "ai-iot",      label: "AI X IoT Engineering" },
];

// The sticky offset per card is computed in CSS from `--card-index`
// (see RecentLaunchSection.module.scss `.stickyCard`), so cards pin *below*
// the now-sticky heading + tabs instead of jamming under the navbar.

// ── Arrow icon (card CTA) ────────────────────────────────────────────
const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Arrow icon (See all button) ──────────────────────────────────────
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Single project card ───────────────────────────────────────────────
const ProjectCard = ({ project }: { project: Project }) => (
  <div className={styles.card}>
    {/* LEFT — text content */}
    <div className={styles.cardLeft}>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDescription}>{project.description}</p>

      {/* Tech stack tags */}
      {project.techStack && project.techStack.length > 0 && (
        <ul className={styles.techStack} aria-label="Tech stack">
          {project.techStack.map((tag) => (
            <li key={tag} className={styles.techTag}>{tag}</li>
          ))}
        </ul>
      )}

      {/* Stats */}
      {project.metrics && project.metrics.length > 0 && (
        <div className={styles.statsRow}>
          {project.metrics.map((m) => (
            <div key={m.label} className={styles.statBlock}>
              <span className={styles.statValue}>{m.value}</span>
              <span className={styles.statLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Highlight */}
      {project.highlight && <p className={styles.highlight}>{project.highlight}</p>}

      {/* CTA buttons */}
      <div className={styles.ctaRow}>
        {project.caseStudySlug ? (
          <Link
            href={ROUTES.CASE_STUDY_SLUG(project.caseStudySlug)}
            className={styles.ctaPrimary}
          >
            View case study <ArrowUpRight />
          </Link>
        ) : (
          <span className={styles.ctaPrimary} aria-disabled="true">
            View case study <ArrowUpRight />
          </span>
        )}

        {project.liveUrl != null && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            <span className={styles.liveIndicator} aria-hidden="true" />
            View Live Product <ArrowUpRight />
          </a>
        )}
      </div>
    </div>

    {/* RIGHT — screenshot */}
    <div className={styles.cardRight}>
      <div className={styles.screenshotFrame}>
        <Image
          src={project.screenshot}
          alt={`${project.title} product screenshot`}
          width={720}
          height={450}
          className={styles.screenshot}
          loading="lazy"
          placeholder={project.blurDataURL ? "blur" : "empty"}
          blurDataURL={project.blurDataURL}
        />
      </div>
    </div>
  </div>
);

// ── Main section ──────────────────────────────────────────────────────
// Project data for all three tabs is fetched on the server (see
// getRecentLaunchProjects) and passed in as a prop. Switching tabs is a pure
// state toggle over already-loaded data — no fetch, no loading skeleton, no
// MongoDB round-trip.
type RecentLaunchSectionProps = {
  projects: Record<TabId, Project[]>;
};

const RecentLaunchSection = ({ projects: projectsByTab }: RecentLaunchSectionProps) => {
  const [activeTab, setActiveTab] = useState<TabId>("ai-product");
  const projects = projectsByTab[activeTab] ?? [];

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
  };

  // ── Prefetch the other tabs' covers on idle ──────────────────────────
  // Once the visible tab has settled, quietly warm the inactive tabs' images.
  // Rendering real (hidden) next/image tags guarantees the warmed URL matches
  // the optimized URL the visible tab will request, so switching tabs is an
  // instant cache hit — not a fresh download. Skipped on data-saver / 2G.
  const [prewarm, setPrewarm] = useState(false);
  useEffect(() => {
    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (conn?.saveData || /2g/.test(conn?.effectiveType ?? "")) return;

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setPrewarm(true), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setPrewarm(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const inactiveProjects = prewarm
    ? (Object.keys(projectsByTab) as TabId[])
        .filter((t) => t !== activeTab)
        .flatMap((t) => projectsByTab[t] ?? [])
    : [];

  return (
    <section className={styles.section} id="recent-launch" aria-label="Recent Launch">

      {/* ── Heading + filter tabs ── */}
      <div className={styles.topBlock}>
        <h2 className={styles.heading}>Recent Launch</h2>
        <div className={styles.tabs} role="tablist" aria-label="Filter projects by category">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={activeTab === tab.id ? styles.tabActive : styles.tab}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Cards stack ── */}
      {projects.length === 0 ? (
        <div className={styles.emptyState}>No projects found in this category.</div>
      ) : (
        <div className={styles.cardsStack}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={styles.stickyCard}
              style={{ ["--card-index" as string]: i, zIndex: i + 1 } as React.CSSProperties}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}

      {/* ── See all button ── */}
      <div className={styles.seeAllRow}>
        <Link href={ROUTES.PROJECTS} className={styles.seeAllBtn}>
          See all <ArrowRight />
        </Link>
      </div>

      {/* Idle prefetch of inactive tabs' covers — hidden, off-flow, no layout impact. */}
      {inactiveProjects.length > 0 && (
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", top: 0, width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {inactiveProjects.map((p) => (
            <Image
              key={`warm-${p.tab}-${p.id}`}
              src={p.screenshot}
              alt=""
              width={720}
              height={450}
              loading="eager"
            />
          ))}
        </div>
      )}

    </section>
  );
};

export default RecentLaunchSection;
