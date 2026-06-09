
'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/organisms/projects.module.scss';
import { getSafeImageUrl } from '@/utils/imageUtils';
import { fetchAllCaseStudies } from '@/services/caseStudyService';
import ROUTES from '@/constants/routes';
import { getErrorMessage } from '@/utils/errorUtils';
import caseStudyMeta, { FILTER_TABS, CATEGORIES, type FilterTab } from '@/data/caseStudyMeta';

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
  description?: string;
};

const AI2MD_SLUG = 'ai-mobile-doc';
const AI2MD_PROJECT_IMAGE = '/case-studies/ChatGPT Image May 1, 2026, 04_10_45 PM.png';

const STATS = [
  { value: '85+', line1: 'AI Products', line2: 'shipped' },
  { value: '12+', line1: 'Industries', line2: 'served' },
  { value: '2M+', line1: 'AI interactions', line2: 'processed' },
];

export default function Projects() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeTab, setActiveTab] = useState<FilterTab>('Recent');
  const [activeCategory, setActiveCategory] = useState('All Categories');

  useEffect(() => {
    fetchAllCaseStudies()
      .then((data) => {
        const filtered = (data as unknown as CaseStudy[]).filter(
          (cs) => cs.slug !== 'ai-asr-doctor-clinical-documentation-platform'
        );
        console.log('[SLUGS]', filtered.map((cs) => `"${cs.slug}": "${cs.title}"`).join('\n'));
        setCaseStudies(filtered);
      })
      .catch((e) => setError(getErrorMessage(e)))
      .finally(() => setLoading(false));
  }, []);

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
                onClick={() => { setActiveTab(tab); setVisibleCount(4); }}
              >
                {tab}
              </button>
            ))}
            <div className={styles.categoryWrap}>
              <span className={styles.categoryPill}>Category for:</span>
              <div className={styles.categorySelectContainer}>
                <select
                  className={styles.categorySelect}
                  value={activeCategory}
                  onChange={(e) => { setActiveCategory(e.target.value); setVisibleCount(4); }}
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
          <div className={styles.filterRow}>
            {FILTER_TABS.slice(4).map((tab) => (
              <button
                key={tab}
                className={`${styles.filterBtn} ${activeTab === tab ? styles.filterBtnActive : ''}`}
                onClick={() => { setActiveTab(tab); setVisibleCount(4); }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Case study cards ── */}
      <div className={styles.cardsOuter}>
      <div className={styles.cardsList}>
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={styles.cardSkeleton}>
              <div className={styles.skeletonLeft}>
                <div className={styles.skTitle} />
                <div className={styles.skText} />
                <div className={styles.skTags} />
                <div className={styles.skMetrics} />
                <div className={styles.skBtns} />
              </div>
              <div className={styles.skeletonRight} />
            </div>
          ))
        ) : error ? (
          <p className={styles.errorMsg}>{error}</p>
        ) : filteredStudies.length === 0 ? (
          <p className={styles.emptyMsg}>No case studies match this filter.</p>
        ) : (
          <>
            {filteredStudies.slice(0, visibleCount).map((cs) => {
              const meta = caseStudyMeta[cs.slug] ?? caseStudyMeta[cs.slug?.toLowerCase().trim()];
              const img = cs.slug === AI2MD_SLUG ? AI2MD_PROJECT_IMAGE : cs.coverImage;

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
                      <Link href={ROUTES.CASE_STUDY_SLUG(cs.slug)} className={styles.btnPrimary}>
                        View case study <ArrowUpRight />
                      </Link>
                      {meta?.liveUrl && (
                        <a href={meta.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                          <span className={styles.greenDot} />
                          View Live Product <ArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right — image panel */}
                  <div className={styles.csRight}>
                    <div className={styles.csImgWrap}>
                      <Image
                        src={getSafeImageUrl(img)}
                        alt={cs.title}
                        fill
                        className={styles.csImg}
                        style={{ objectFit: 'cover', objectPosition: cs.slug === AI2MD_SLUG ? 'center' : 'center top' }}
                        onError={(e) => { (e.target as HTMLImageElement).src = '/images/aboutus.png'; }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {visibleCount < filteredStudies.length && (
              <div className={styles.loadMoreWrap}>
                <button className={styles.loadMoreBtn} onClick={() => setVisibleCount(filteredStudies.length)}>
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
      </div>{/* /cardsOuter */}

      {/* ── Fix 5: CTA section — before footer ── */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          See what your AI product<br />could become
        </h2>
        <p className={styles.ctaSubtitle}>
          Work with a team focused on architecture,<br />
          execution, and scalable AI systems.
        </p>
        <div className={styles.ctaButtons}>
          <a href="/contact" className={styles.ctaBtnPrimary}>
            Start Your Project
            <span className={styles.ctaBtnArrow}>→</span>
          </a>
          <a href="/contact" className={styles.ctaBtnSecondary}>
            Book a Strategy Call
          </a>
        </div>
      </div>
    </div>
  );
}
