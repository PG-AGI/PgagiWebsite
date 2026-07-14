import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/organisms/coreExpertiseAreas.module.scss';
import ROUTES from '@/constants/routes';

/* ─────────────────────────────────────────────────────────────────
   "Core Expertise Areas" — /expertise page section.
   Figma: file YzkZAfJMUWfPTISbqurW41, heading 2113:4814, grid cards
   2113:4817 / 4876 / 4901 / 4928, full-width spotlight 2113:4842.

   Band/icon colors confirmed by the design team (2026-07-14).
   ───────────────────────────────────────────────────────────────── */

type ExpertiseArea = {
  slug: string;
  title: string;
  description: string;
  bandColor: string;
  iconBg: string;
  /** Badge icon: WebP extracted from the Figma SVG exports (which embed
      450px rasters) — served at 3× display size, ~5–10 KB each. `size` is
      the icon's CSS size inside the 64px badge, per the Figma export. */
  icon: { src: string; size: number };
  /** Pill rows exactly as designed — each inner array is one row. */
  pillRows: string[][];
  /** Full-width spotlight card extras (Enterprise AI only). */
  spotlight?: {
    eyebrow: string;
    note: string;
  };
};

const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    slug: 'ai-ml',
    icon: { src: '/expertise/coreExpertiseImg1.webp', size: 54 },
    title: 'AI & Machine Learning',
    description:
      'LLM integration, retrieval, agents, memory, and orchestration, engineered into production systems.',
    bandColor: '#3859f9',
    iconBg: '#bedffd',
    pillRows: [
      ['Closed & open models', 'RAG architecture', 'AI agents & memory'],
      ['Tool / function calling', 'Orchestration'],
    ],
  },
  {
    slug: 'ai-iot',
    icon: { src: '/expertise/coreExpertiseImg2.webp', size: 60 },
    title: 'AI + IoT',
    description:
      'Device and sensor data processed and modelled for prediction, anomaly detection, and automated response.',
    bandColor: '#02693e',
    iconBg: '#aef1d5',
    pillRows: [
      ['Sensor pipelines', 'Predictive maintenance', 'Anomaly detection'],
      ['Edge AI', 'Live dashboards'],
    ],
  },
  {
    slug: 'ai-saas',
    icon: { src: '/expertise/coreExpertiseImg3.webp', size: 44 },
    title: 'AI SaaS Platforms',
    description:
      'Multi-tenant, secure, and scalable platforms architected for production workloads.',
    bandColor: '#cc089e',
    iconBg: '#f7cced',
    pillRows: [
      ['Multi-tenant', 'RBAC & auth', 'Microservices'],
      ['Real-time', 'Billing & usage', 'Cloud infra'],
    ],
  },
  {
    slug: 'mobile-ai',
    icon: { src: '/expertise/coreExpertiseImg4.webp', size: 38 },
    title: 'Mobile + AI',
    description:
      'Complete mobile products spanning application, backend, AI layer, and deployment.',
    bandColor: '#6d4cd6',
    iconBg: '#dad0f9',
    pillRows: [
      ['Native & Flutter', 'AI chat & voice', 'Offline-first'],
      ['Push & auth', 'App store'],
    ],
  },
  {
    slug: 'enterprise-ai',
    icon: { src: '/expertise/coreExpertiseImg5.webp', size: 44 },
    title: 'Enterprise AI',
    description:
      'AI systems that run entirely inside your environment — self-hosted small language models, optimised to run on CPU, with a boundary designed so that data does not leave your control.',
    // #191919 base with a soft #9f0000 glow at the right edge, strongest
    // just below the eyebrow and fading out by mid-card
    bandColor:
      'radial-gradient(50% 160% at 100% 45%, rgba(159, 0, 0, 0.5) 0%, rgba(159, 0, 0, 0) 68%), #191919',
    iconBg: '#e5e7eb',
    pillRows: [
      ['On-premise / private VPC', 'Air-gap capable', 'Self-hosted SLMs', 'RBAC & audit'],
      ['CPU-optimised', 'No data egress', 'Data residency'],
    ],
    spotlight: {
      eyebrow: 'SPOTLIGHT · AREA OF SPECIALISATION',
      note: 'The deployment model we specialise in for regulated and data-sensitive organisations.',
    },
  },
];

const ArrowUpRight = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path
      d="M5 17L17 5M17 5H8M17 5V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CoreExpertiseAreas = () => (
  <section className={styles.section} id="core-expertise" aria-label="Core Expertise Areas">
    <div className={styles.rail}>
      <div className={styles.headingBlock}>
        <h2 className={styles.heading}>Core Expertise Areas</h2>
        <p className={styles.subheading}>
          Deep technical capabilities across the modern technology stack.
        </p>
      </div>

      <div className={styles.grid}>
        {EXPERTISE_AREAS.map((area) => (
          <Link
            key={area.slug}
            href={ROUTES.EXPERTISE_VERTICAL(area.slug)}
            aria-label={`${area.title} — detailed capabilities`}
            className={area.spotlight ? `${styles.cell} ${styles.cellWide}` : styles.cell}
          >
            <div className={styles.iconBadge} style={{ background: area.iconBg }}>
              {/* priority: badge icons must be visible the moment the page
                  opens — never lazy-loaded on scroll */}
              <Image
                src={area.icon.src}
                alt=""
                width={area.icon.size}
                height={area.icon.size}
                priority
                unoptimized
              />
            </div>

            <article className={styles.card}>
              <header className={styles.band} style={{ background: area.bandColor }}>
                {area.spotlight && (
                  <span className={styles.eyebrow}>{area.spotlight.eyebrow}</span>
                )}
                <h3 className={styles.bandTitle}>{area.title}</h3>
                <p className={styles.bandDesc}>{area.description}</p>
              </header>

              <div className={styles.body}>
                <div className={styles.pills}>
                  {area.pillRows.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.pillRow}>
                      {row.map((pill) => (
                        <span key={pill} className={styles.pill}>
                          {pill}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                {area.spotlight && <p className={styles.note}>{area.spotlight.note}</p>}

                <div className={styles.ctaRow}>
                  <span className={styles.ctaLabel}>Detailed Capabilities</span>
                  <span className={styles.ctaBtn} aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CoreExpertiseAreas;
