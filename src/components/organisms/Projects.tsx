
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/organisms/projects.module.scss';
import { getSafeImageUrl } from '@/utils/imageUtils';
import ROUTES from '@/constants/routes';
import caseStudyMeta, { FILTER_TABS, CATEGORIES, type FilterTab } from '@/data/caseStudyMeta';
import ProductVisionCta from './ProductVisionCta';

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type CaseStudy = {
  slug: string;
  title: string;
  coverImage: string;
  description?: string;
  blurDataURL?: string;
};

// Slugs to hide from the public listing.
const HIDDEN_SLUGS = new Set<string>([]);


// Slugs that must appear first, in this exact order
const PRIORITY_SLUG_KEYWORDS: string[] = [
  'brainify',
  'email-love',
  'cracked-ai',
  'mirror-me',
  'nuaiy',
  'aimi-brain',
  'skillina',
  'jove',
  'digital-twin',
];

function priorityIndex(slug: string): number {
  const idx = PRIORITY_SLUG_KEYWORDS.findIndex((kw) => slug.includes(kw));
  return idx === -1 ? Infinity : idx;
}

const STATS = [
  { value: '85+', line1: 'AI Products', line2: 'shipped' },
  { value: '12+', line1: 'Industries', line2: 'served' },
  { value: '2M+', line1: 'AI interactions', line2: 'processed' },
];

export default function Projects({ initialStudies }: { initialStudies: CaseStudy[] }) {
  // Data is server-rendered and handed in as a prop — no client fetch, no
  // loading state. Filtering is deterministic from props, so server and
  // client first renders match (no hydration mismatch).
  const [caseStudies] = useState<CaseStudy[]>(() =>
    initialStudies.filter((cs) => !HIDDEN_SLUGS.has(cs.slug))
  );
  const [activeTab, setActiveTab] = useState<FilterTab>('Show All');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  // Tracks which card's "View case study" link was clicked so we can show a
  // spinner while Next.js navigates to the (slower) case-study page.
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

  const filteredStudies = useMemo(() => {
    let result = [...caseStudies].reverse();

    if (activeTab === 'Recent') {
      result = result.slice(0, 4);
    } else if (activeTab !== 'Show All') {
      result = result.filter((cs) => caseStudyMeta[cs.slug]?.tags.includes(activeTab));
    }

    if (activeCategory !== 'All Categories') {
      result = result.filter((cs) => caseStudyMeta[cs.slug]?.category === activeCategory);
    }

    result.sort((a, b) => priorityIndex(a.slug) - priorityIndex(b.slug));

    return result;
  }, [caseStudies, activeTab, activeCategory]);

  return (
    <div className={styles.projectsPage}>

      {/* ── Hero section ── */}
      <div className={styles.heroOuter}>
        <div className={styles.heroHeader}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Live AI products
              <br />
              Proven at scale
            </h1>
            <p className={styles.heroDesc}>
              Real AI products built for real business outcomes.
              Explore how we help founders and enterprises turn complex
              ideas into scalable, production-ready systems.
            </p>
          </div>
          <div className={styles.heroStats}>
            {STATS.map((s) => (
              <div key={s.value} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>
                  <span className={styles.statLine}>{s.line1}</span>
                  <span className={styles.statLine}>{s.line2}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter section ── */}
      <div className={styles.filterOuter}>
        <div className={styles.filterSection}>
          <div className={styles.filterRow}>
            {FILTER_TABS.slice(0, 4).map((tab) => (
              <button
                key={tab}
                className={`${styles.filterBtn} ${activeTab === tab ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            {/* Desktop keeps a deliberate 4+4 split via this forced line break;
                on mobile it collapses so all tabs wrap continuously and no
                single tab (e.g. "Research") gets orphaned on its own line. */}
            <span className={styles.rowBreak} aria-hidden="true" />
            {FILTER_TABS.slice(4).map((tab) => (
              <button
                key={tab}
                className={`${styles.filterBtn} ${activeTab === tab ? styles.filterBtnActive : ''}`}
                onClick={() => { setActiveTab(tab); }}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Category dropdown: pinned top-right on desktop, flows to the
              bottom-right below the tab rows on mobile (see .categoryWrap). */}
          <div className={styles.categoryWrap}>
            <span className={styles.categoryPill}>Category for:</span>
            <div className={styles.categorySelectContainer}>
              <select
                className={styles.categorySelect}
                value={activeCategory}
                onChange={(e) => { setActiveCategory(e.target.value); }}
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              {/* Fix 2: SVG chevron for a crisp, consistent arrow */}
              <span className={styles.selectArrow} aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Case study cards ── */}
      <div className={styles.cardsOuter}>
      <div className={styles.cardsList}>
        {filteredStudies.length === 0 ? (
          <p className={styles.emptyMsg}>No case studies match this filter.</p>
        ) : (
          <>
            {filteredStudies.map((cs, idx) => {
              const meta = caseStudyMeta[cs.slug] ?? caseStudyMeta[cs.slug?.toLowerCase().trim()];

              return (
                <div key={cs.slug} className={styles.csCard}>
                  {/* Left */}
                  <div className={styles.csLeft}>
                    <h2 className={styles.csTitle}>{cs.title}</h2>
                    <p className={styles.csDesc}>
                      {cs.description ||
                        'Advancing industry standards with bespoke AI integrations and high-performance system architectures.'}
                    </p>

                    {meta?.techStack && (
                      <div className={styles.techRow}>
                        {meta.techStack.map((t) => (
                          <span key={t} className={styles.techPill}>{t}</span>
                        ))}
                      </div>
                    )}

                    {meta?.metrics && (
                      <div className={styles.metricsRow}>
                        {meta.metrics.map((m) => (
                          <div key={m.label} className={styles.metricBlock}>
                            <span className={styles.metricNum}>{m.value}</span>
                            <span className={styles.metricLbl}>{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {meta?.highlight && (
                      <p className={styles.highlightText}>{meta.highlight}</p>
                    )}

                    <div className={styles.actions}>
                      <Link
                        href={ROUTES.CASE_STUDY_SLUG(cs.slug)}
                        className={styles.btnPrimary}
                        aria-busy={loadingSlug === cs.slug}
                        onClick={() => setLoadingSlug(cs.slug)}
                      >
                        <span className={styles.btnLabel}>
                          View case study <ArrowUpRight />
                        </span>
                        {loadingSlug === cs.slug && (
                          <span className={styles.btnSpinner} aria-hidden="true" />
                        )}
                      </Link>
                      {meta?.liveUrl && (
                        <a href={meta.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                          <span className={styles.greenDot} />
                          {meta.appStoreUrl ? 'Android' : 'View Live Product'} <ArrowUpRight />
                        </a>
                      )}
                      {meta?.appStoreUrl && (
                        <a href={meta.appStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                          <span className={styles.greenDot} />
                          iOS <ArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right — image panel */}
                  <div className={styles.csRight}>
                    <div className={styles.csImgWrap}>
                      <Image
                        src={getSafeImageUrl(cs.coverImage)}
                        alt={cs.title}
                        fill
                        sizes="(max-width: 900px) 92vw, (max-width: 1600px) 48vw, 760px"
                        quality={82}
                        // First two cards are above the fold: preload eagerly
                        // (in the initial HTML) instead of lazy-loading.
                        priority={idx < 2}
                        // Solid dominant-colour placeholder while the HD image
                        // downloads — no blur, fades to the full image.
                        placeholder={cs.blurDataURL ? 'blur' : 'empty'}
                        blurDataURL={cs.blurDataURL}
                        className={styles.csImg}
                        onError={(e) => { (e.target as HTMLImageElement).src = '/images/aboutus.png'; }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

          </>
        )}
      </div>
      </div>{/* /cardsOuter */}

      {/* ── Fix 5: CTA section — before footer (shared component) ── */}
      <ProductVisionCta />
    </div>
  );
}
