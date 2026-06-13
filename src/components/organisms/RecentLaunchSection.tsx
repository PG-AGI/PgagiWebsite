"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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

// Sticky top offset per card index — gives a "peeking deck" feel
const CARD_STICKY_TOP = 88; // px — base top for the first card
const CARD_STACK_OFFSET = 10; // px — additional offset per card index

// ── Arrow icon ────────────────────────────────────────────────────────
const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
        />
      </div>
    </div>
  </div>
);

// ── Session-storage cache helpers ────────────────────────────────────
// sessionStorage is cleared when the tab/session closes, so users always
// get fresh data on a new visit — no stale project risk.
const SESSION_KEY = (tab: TabId) => `pgagi_projects_${tab}`;

const readSession = (tab: TabId): Project[] | null => {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY(tab));
    return raw ? (JSON.parse(raw) as Project[]) : null;
  } catch {
    return null;
  }
};

const writeSession = (tab: TabId, data: Project[]) => {
  try { sessionStorage.setItem(SESSION_KEY(tab), JSON.stringify(data)); } catch {}
};

// ── Main section ──────────────────────────────────────────────────────
const RecentLaunchSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("ai-product");
  const [projects,  setProjects]  = useState<Project[]>([]);
  const [loading,   setLoading]   = useState(true);
  const memCache = useRef<Partial<Record<TabId, Project[]>>>({});

  const fetchProjects = useCallback(async (tab: TabId) => {
    // Layer 1 — in-memory (component lifetime)
    if (memCache.current[tab]) {
      setProjects(memCache.current[tab]!);
      setLoading(false);
      return;
    }
    // Layer 2 — sessionStorage (survives page navigation, clears on session end)
    const sessionCached = readSession(tab);
    if (sessionCached) {
      memCache.current[tab] = sessionCached;
      setProjects(sessionCached);
      setLoading(false);
      return;
    }
    // Layer 3 — network fetch
    setLoading(true);
    try {
      const res = await fetch(`/api/projects?category=${tab}`);
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data: Project[] = await res.json();
      memCache.current[tab] = data;
      writeSession(tab, data);
      setProjects(data);
    } catch (err) {
      console.error("[RecentLaunchSection]", err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects(activeTab);
  }, [activeTab, fetchProjects]);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
  };

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
      {loading ? (
        <div className={styles.cardsStack}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={styles.stickyCard}
              style={{ top: `${CARD_STICKY_TOP + i * CARD_STACK_OFFSET}px`, zIndex: i + 1 }}
            >
              <div className={styles.cardSkeleton}>
                <div className={styles.skeletonLeft}>
                  <div className={styles.skTitle} />
                  <div className={styles.skText} />
                  <div className={styles.skTags} />
                  <div className={styles.skMetrics} />
                  <div className={styles.skBtns} />
                </div>
                <div className={styles.skeletonRight} />
              </div>
            </div>
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className={styles.emptyState}>No projects found in this category.</div>
      ) : (
        <div className={styles.cardsStack}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={styles.stickyCard}
              style={{
                top: `${CARD_STICKY_TOP + i * CARD_STACK_OFFSET}px`,
                zIndex: i + 1,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default RecentLaunchSection;
