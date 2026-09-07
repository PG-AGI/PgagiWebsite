'use client';

import React from 'react';
import styles from '@/styles/components/organisms/SentlogicCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface SentlogicCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

function SegmentedColorBar({ style }: { style?: React.CSSProperties }) {
  return (
    <div className={styles.segmentedBar} style={style} aria-hidden="true">
      <span className={styles.seg1} />
      <span className={styles.seg2} />
      <span className={styles.seg3} />
      <span className={styles.seg4} />
      <span className={styles.seg5} />
      <span className={styles.seg6} />
      <span className={styles.seg7} />
    </div>
  );
}

function SectionBadgeHeader({
  badge,
  badgeColorClass,
  eyebrow,
  eyebrowColorClass,
  title,
}: {
  badge: string;
  badgeColorClass: string;
  eyebrow: string;
  eyebrowColorClass: string;
  title: string;
}) {
  return (
    <>
      <div className={styles.sectionHeaderWrap}>
        <div className={`${styles.sectionBadge} ${badgeColorClass}`}>{badge}</div>
        <div className={styles.sectionHeaderContent}>
          <span className={`${styles.sectionEyebrow} ${eyebrowColorClass}`}>{eyebrow}</span>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
      </div>
      <hr className={styles.sectionRule} />
    </>
  );
}

function RightArrowSvg() {
  return (
    <div className={styles.fig3Arrow} aria-hidden="true">
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
        <line x1="2" y1="6" x2="20" y2="6" stroke="#7F7A93" strokeWidth="1.6" strokeLinecap="round" />
        <polygon points="17,2 23,6 17,10" fill="#7F7A93" />
      </svg>
    </div>
  );
}

function DownArrowSvg() {
  return (
    <div className={styles.figDownArrow} aria-hidden="true">
      <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
        <line x1="6" y1="1" x2="6" y2="12" stroke="#7F7A93" strokeWidth="1.8" strokeLinecap="round" />
        <polygon points="2,10 6,17 10,10" fill="#7F7A93" />
      </svg>
    </div>
  );
}

function RAGOrchestrationFlowchart() {
  return (
    <div className={styles.flowchartWrapper}>
      <svg
        viewBox="0 0 540 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.flowchartSvg}
        style={{ width: '100%', maxWidth: '560px', height: 'auto', display: 'block' }}
      >
        <defs>
          <marker
            id="flow-arrow-head"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 1 2 L 7 5 L 1 8 z" fill="#7F7A93" />
          </marker>
        </defs>

        {/* 1. Instagram Event */}
        <rect x="189" y="12" width="162" height="44" rx="8" fill="#405DE5" />
        <text x="270" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="inherit">
          Instagram Event
        </text>

        {/* Arrow 1 */}
        <line x1="270" y1="56" x2="270" y2="88" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />

        {/* 2. Signed Webhook + Idempotency */}
        <rect x="189" y="90" width="162" height="46" rx="8" fill="#5851DB" />
        <text x="270" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          Signed Webhook
        </text>
        <text x="270" y="126" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          + Idempotency
        </text>

        {/* Arrow 2 */}
        <line x1="270" y1="136" x2="270" y2="168" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />

        {/* 3. Diamond: Routing Decision */}
        <polygon points="270,170 365,205 270,240 175,205" fill="#853AB3" />
        <text x="270" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="inherit">
          Routing Decision
        </text>

        {/* Branch: keyword match */}
        <line x1="225" y1="222" x2="175" y2="282" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />
        <text
          x="192"
          y="246"
          textAnchor="end"
          fill="#7F7A93"
          fontSize="11"
          fontStyle="italic"
          fontWeight="600"
          fontFamily="inherit"
          paintOrder="stroke"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          keyword match
        </text>

        {/* Branch: open intent */}
        <line x1="315" y1="222" x2="365" y2="282" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />
        <text
          x="348"
          y="246"
          textAnchor="start"
          fill="#7F7A93"
          fontSize="11"
          fontStyle="italic"
          fontWeight="600"
          fontFamily="inherit"
          paintOrder="stroke"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          open intent
        </text>

        {/* 4. Left Node: Template Reply */}
        <rect x="100" y="284" width="150" height="48" rx="8" fill="#853AB3" />
        <text x="175" y="305" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          Template Reply
        </text>
        <text x="175" y="321" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="500" opacity="0.9" fontFamily="inherit">
          zero credits
        </text>

        {/* 5. Right Node 1: Creator-Scoped Retrieval */}
        <rect x="290" y="284" width="150" height="48" rx="8" fill="#C23584" />
        <text x="365" y="305" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          Creator-Scoped
        </text>
        <text x="365" y="321" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          Retrieval
        </text>

        {/* Arrow Right 1 */}
        <line x1="365" y1="332" x2="365" y2="360" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />

        {/* 6. Right Node 2: Brand-Voice Generation */}
        <rect x="290" y="362" width="150" height="48" rx="8" fill="#C23584" />
        <text x="365" y="383" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          Brand-Voice
        </text>
        <text x="365" y="399" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          Generation
        </text>

        {/* Arrow Right 2 */}
        <line x1="365" y1="410" x2="365" y2="438" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />

        {/* 7. Diamond 2: Confidence Threshold */}
        <polygon points="365,440 460,475 365,510 270,475" fill="#E5306C" />
        <text x="365" y="471" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          Confidence
        </text>
        <text x="365" y="487" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" fontFamily="inherit">
          Threshold
        </text>

        {/* Sub-branch: high */}
        <line x1="320" y1="492" x2="280" y2="540" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />
        <text
          x="286"
          y="518"
          textAnchor="end"
          fill="#7F7A93"
          fontSize="11"
          fontStyle="italic"
          fontWeight="600"
          fontFamily="inherit"
          paintOrder="stroke"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          high
        </text>

        {/* Sub-branch: low */}
        <line x1="410" y1="492" x2="450" y2="540" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />
        <text
          x="444"
          y="518"
          textAnchor="start"
          fill="#7F7A93"
          fontSize="11"
          fontStyle="italic"
          fontWeight="600"
          fontFamily="inherit"
          paintOrder="stroke"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          low
        </text>

        {/* 8. Sub-Node Left: Auto-Learn Reinforcement */}
        <rect x="207" y="542" width="145" height="46" rx="8" fill="#F56040" />
        <text x="279.5" y="562" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="inherit">
          Auto-Learn
        </text>
        <text x="279.5" y="578" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="inherit">
          Reinforcement
        </text>

        {/* 9. Sub-Node Right: Human Handoff queue */}
        <rect x="378" y="542" width="145" height="46" rx="8" fill="#F56040" />
        <text x="450.5" y="562" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="inherit">
          Human Handoff
        </text>
        <text x="450.5" y="578" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="inherit">
          queue
        </text>

        {/* 10. Merge Node: DM Dispatch + Tracked Link */}
        <rect x="207" y="632" width="145" height="46" rx="8" fill="#FCAF45" />
        <text x="279.5" y="652" textAnchor="middle" fill="#2B2241" fontSize="12.5" fontWeight="800" fontFamily="inherit">
          DM Dispatch
        </text>
        <text x="279.5" y="668" textAnchor="middle" fill="#2B2241" fontSize="12.5" fontWeight="800" fontFamily="inherit">
          + Tracked Link
        </text>

        {/* Arrow from Auto-Learn into DM Dispatch */}
        <line x1="279.5" y1="588" x2="279.5" y2="630" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />

        {/* Left bypass curve from Template Reply down to DM Dispatch */}
        <path
          d="M 175 332 L 175 588 Q 175 655 204 655"
          stroke="#7F7A93"
          strokeWidth="1.8"
          fill="none"
          markerEnd="url(#flow-arrow-head)"
        />

        {/* Dashed arrow from Human Handoff queue to DM Dispatch */}
        <line
          x1="415"
          y1="588"
          x2="352"
          y2="630"
          stroke="#7F7A93"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          markerEnd="url(#flow-arrow-head)"
        />
        <text
          x="396"
          y="616"
          textAnchor="start"
          fill="#7F7A93"
          fontSize="11"
          fontStyle="italic"
          fontWeight="600"
          fontFamily="inherit"
          paintOrder="stroke"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          agent reply
        </text>

        {/* Arrow from DM Dispatch to Bottom Bar */}
        <line x1="279.5" y1="678" x2="279.5" y2="706" stroke="#7F7A93" strokeWidth="1.8" markerEnd="url(#flow-arrow-head)" />

        {/* 11. Bottom Bar: Decision Log · Attribution · KPI Update */}
        <rect x="139" y="708" width="281" height="44" rx="8" fill="#2B2241" />
        <text x="279.5" y="735" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="700" letterSpacing="0.02em" fontFamily="inherit">
          Decision Log  ·  Attribution  ·  KPI Update
        </text>
      </svg>
    </div>
  );
}

export default function SentlogicCaseStudy(_props: SentlogicCaseStudyProps) {
  return (
    <div className={styles.sentlogicPage}>
      <div className={styles.contentContainer}>
        {/* ── Hero / Cover Section ── */}
        <header className={styles.heroSection}>
          <SegmentedColorBar style={{ height: '6px' }} />
          <div className={styles.heroInner}>
            <div className={styles.coverEyebrow}>
              PG-AGI · APPLIED AI &amp; PLATFORM ENGINEERING
            </div>
            <h1 className={styles.coverTitle}>SENTLOGIC</h1>
            <div className={styles.coverSubtitle}>
              Instagram engagement, turned into attributable revenue.
            </div>

            <hr className={styles.coverDivider} />

            <p className={styles.coverDescription}>
              An enterprise SaaS product layer built directly on top of a live Instagram automation engine
              — wrapping keyword detection, follow-gate validation, and first-touch DM dispatch in
              creator-isolated RAG intelligence, credit-metered monetisation, and post-level revenue
              attribution.
            </p>

            {/* 4 Colored Metric Blocks */}
            <div className={styles.coverPillGrid}>
              <div className={`${styles.coverPill} ${styles.blue}`}>
                <span className={styles.coverPillTitle}>Multi-Tenant</span>
                <span className={styles.coverPillSub}>SAAS PLATFORM</span>
              </div>
              <div className={`${styles.coverPill} ${styles.purple}`}>
                <span className={styles.coverPillTitle}>Isolated RAG</span>
                <span className={styles.coverPillSub}>PER-CREATOR AI</span>
              </div>
              <div className={`${styles.coverPill} ${styles.pink}`}>
                <span className={styles.coverPillTitle}>Post-Level</span>
                <span className={styles.coverPillSub}>ATTRIBUTION</span>
              </div>
              <div className={`${styles.coverPill} ${styles.orange}`}>
                <span className={styles.coverPillTitle}>Credit-Metered</span>
                <span className={styles.coverPillSub}>MONETISATION</span>
              </div>
            </div>

            {/* Bottom Metadata Section */}
            <div className={styles.coverBottomSection}>
              <SegmentedColorBar style={{ height: '4px' }} />
              <div className={styles.coverMetaGrid}>
                <div className={styles.coverMetaCol}>
                  <span className={styles.coverMetaLabel}>CLIENT ENGAGEMENT</span>
                  <span className={styles.coverMetaValue}>Sentlogic</span>
                </div>
                <div className={styles.coverMetaCol}>
                  <span className={styles.coverMetaLabel}>DOMAIN</span>
                  <span className={styles.coverMetaValue}>
                    Creator Commerce ·<br />Social SaaS
                  </span>
                </div>
                <div className={styles.coverMetaCol}>
                  <span className={styles.coverMetaLabel}>DELIVERY STACK</span>
                  <span className={styles.coverMetaValue}>
                    FastAPI · Next.js ·<br />pgvector
                  </span>
                </div>
                <div className={styles.coverMetaCol}>
                  <span className={styles.coverMetaLabel}>DOCUMENT STATUS</span>
                  <span className={styles.coverMetaValue}>Case Study · v1.0</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Table of Contents / Document Structure ── */}
        <section className={styles.articleSection}>
          <div className={styles.sectionEyebrow} style={{ color: '#853AB3', marginBottom: '8px' }}>
            CONTENTS
          </div>
          <h2 className={styles.sectionTitle} style={{ fontSize: '1.875rem', marginBottom: '16px' }}>
            Document Structure
          </h2>
          <SegmentedColorBar style={{ height: '4px', marginBottom: '24px' }} />

          <div className={styles.tocList}>
            <div className={styles.tocItem}>
              <span className={`${styles.tocNum} ${styles.numBlue}`}>01</span>
              <div className={styles.tocContent}>
                <span className={styles.tocTitle}>What We Built</span>
                <span className={styles.tocDesc}>
                  The delivered capability surface across onboarding, AI, attribution, and billing.
                </span>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={`${styles.tocNum} ${styles.numBlue}`}>02</span>
              <div className={styles.tocContent}>
                <span className={styles.tocTitle}>Core Architecture</span>
                <span className={styles.tocDesc}>
                  Layered system design, event orchestration, RAG routing, and the data plane.
                </span>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={`${styles.tocNum} ${styles.numBlue}`}>03</span>
              <div className={styles.tocContent}>
                <span className={styles.tocTitle}>Credit System &amp; Monetisation</span>
                <span className={styles.tocDesc}>
                  Subscription tiers, metered operations, and billing enforcement.
                </span>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={`${styles.tocNum} ${styles.numMagenta}`}>04</span>
              <div className={styles.tocContent}>
                <span className={styles.tocTitle}>User-Facing Features</span>
                <span className={styles.tocDesc}>
                  The Next.js creator dashboard and the Living Gallery performance grid.
                </span>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={`${styles.tocNum} ${styles.numMagenta}`}>05</span>
              <div className={styles.tocContent}>
                <span className={styles.tocTitle}>Security &amp; Auditability</span>
                <span className={styles.tocDesc}>
                  Identity, delegated credentials, tenant isolation, and decision logging.
                </span>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={`${styles.tocNum} ${styles.numOrange}`}>06</span>
              <div className={styles.tocContent}>
                <span className={styles.tocTitle}>What Makes This Different</span>
                <span className={styles.tocDesc}>
                  Seven design decisions that separate the platform from social automation tooling.
                </span>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={`${styles.tocNum} ${styles.numOrange}`}>07</span>
              <div className={styles.tocContent}>
                <span className={styles.tocTitle}>Outcomes from the System</span>
                <span className={styles.tocDesc}>
                  The native KPI framework and the operational outcomes delivered.
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.calloutBox} ${styles.calloutPurple}`}>
            <span className={styles.calloutLabel}>READING NOTE</span>
            <p className={styles.calloutText}>
              Sections 01 through 04 describe the product surface and its commercial model. Sections 05 and
              06 cover platform assurance and competitive positioning. Section 07 defines the measurement
              framework the platform instruments natively.
            </p>
          </div>
        </section>

        {/* ── Section 01 — What We Built ── */}
        <section className={styles.articleSection}>
          <SectionBadgeHeader
            badge="01"
            badgeColorClass={styles.badgeBlue}
            eyebrow="SECTION ONE"
            eyebrowColorClass={styles.eyebrowBlue}
            title="What We Built"
          />

          <p className={styles.bodyParagraph}>
            Sentlogic is an enterprise SaaS platform built directly on top of a live Instagram automation
            engine. The automation engine itself — keyword detection, follow-gate validation, and first-touch
            DM dispatch — remains unchanged. Sentlogic wraps it in the full product layer required to operate
            it as a scalable, multi-tenant SaaS business.
          </p>

          <p className={styles.bodyParagraph}>
            The result converts every comment, story reply, and direct message into a tracked, attributable
            sales opportunity, with brand-aligned AI conversations and end-to-end visibility into how
            engagement turns into revenue.
          </p>

          <div className={`${styles.calloutBox} ${styles.calloutBlue}`}>
            <span className={styles.calloutLabel}>THE CORE SHIFT</span>
            <p className={styles.calloutText}>
              A capable but productless automation engine becomes a billable, multi-tenant platform:
              creators onboard themselves, connect their own Instagram Business account, train their own AI
              on their own knowledge, and see revenue traced back to the exact post that produced it.
            </p>
          </div>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderBlue}`}>
            DELIVERED CAPABILITY SURFACE
          </div>
          <p className={styles.bodyParagraph} style={{ marginBottom: '12px' }}>
            The build spans eight capability areas, each independently operable and independently scalable.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th className={styles.thBlue} style={{ width: '35%' }}>CAPABILITY AREA</th>
                  <th className={styles.thBlue}>WHAT IT DELIVERS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.strongCol}>Creator onboarding &amp; authentication</td>
                  <td>Marketing-site signup, email verification, JWT-based access and refresh tokens, and rate-limited authentication.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Instagram account connection</td>
                  <td>Meta OAuth 2.0 connection of an Instagram Business account with encrypted token storage and webhook subscription.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Multi-tenant workspace</td>
                  <td>An isolated workspace per creator, with a dedicated vector namespace and analytics baseline.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Knowledge base &amp; RAG setup</td>
                  <td>Document upload, website-URL ingestion, and manual Q&amp;A, transformed into embeddings for retrieval.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>AI bot configuration</td>
                  <td>Brand voice, CTA style, sales approach, confidence threshold, and escalation rules.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Conversation orchestration</td>
                  <td>Per-event routing between predefined templates and the creator-specific RAG bot, with full decision logging.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Analytics &amp; revenue attribution</td>
                  <td>An attribution engine that ties conversations to revenue and computes the platform KPI set.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Billing &amp; notifications</td>
                  <td>Subscription management via Stripe and transactional email via SendGrid.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 02 — Core Architecture ── */}
        <section className={styles.articleSection}>
          <SectionBadgeHeader
            badge="02"
            badgeColorClass={styles.badgeBlue}
            eyebrow="SECTION TWO"
            eyebrowColorClass={styles.eyebrowBlue}
            title="Core Architecture"
          />

          <p className={styles.bodyParagraph}>
            Sentlogic adopts a modular architecture that cleanly separates conversation orchestration, AI
            intelligence, knowledge management, analytics, and billing. This lets the existing Instagram
            automation be productized into a full SaaS offering while keeping each concern independently
            scalable and replaceable.
          </p>

          {/* Figure 1: Layered Architecture Diagram */}
          <div className={styles.figDiagramWrapper}>
            {/* Layer 01 */}
            <div className={styles.figLayerRow}>
              <div className={`${styles.figLayerHeader} ${styles.h01}`}>
                <span className={styles.figLayerTitle}>01 SOURCE</span>
                <span className={styles.figLayerSub}>Instagram surface</span>
              </div>
              <div className={`${styles.figLayerGridContainer} ${styles.c01}`}>
                <div className={styles.figLayerGrid}>
                  <div className={styles.figLayerPill}>Comments</div>
                  <div className={styles.figLayerPill}>Story Replies</div>
                  <div className={styles.figLayerPill}>Direct Messages</div>
                  <div className={styles.figLayerPill}>Post Triggers</div>
                </div>
              </div>
            </div>

            <DownArrowSvg />

            {/* Layer 02 */}
            <div className={styles.figLayerRow}>
              <div className={`${styles.figLayerHeader} ${styles.h02}`}>
                <span className={styles.figLayerTitle}>02 AUTOMATION</span>
                <span className={styles.figLayerSub}>Pre-existing · unchanged</span>
              </div>
              <div className={`${styles.figLayerGridContainer} ${styles.c02}`}>
                <div className={`${styles.figLayerGrid} ${styles.cols3}`}>
                  <div className={styles.figLayerPill}>Keyword Detection</div>
                  <div className={styles.figLayerPill}>Follow-Gate Validation</div>
                  <div className={styles.figLayerPill}>First-Touch DM Dispatch</div>
                </div>
              </div>
            </div>

            <DownArrowSvg />

            {/* Layer 03 */}
            <div className={styles.figLayerRow}>
              <div className={`${styles.figLayerHeader} ${styles.h03}`}>
                <span className={styles.figLayerTitle}>03 ORCHESTRATION</span>
                <span className={styles.figLayerSub}>Event routing layer</span>
              </div>
              <div className={`${styles.figLayerGridContainer} ${styles.c03}`}>
                <div className={styles.figLayerGrid}>
                  <div className={styles.figLayerPill}>Webhook Ingress</div>
                  <div className={styles.figLayerPill}>Event Router</div>
                  <div className={styles.figLayerPill}>Template Responder</div>
                  <div className={styles.figLayerPill}>Decision Log</div>
                </div>
              </div>
            </div>

            <DownArrowSvg />

            {/* Layer 04 */}
            <div className={styles.figLayerRow}>
              <div className={`${styles.figLayerHeader} ${styles.h04}`}>
                <span className={styles.figLayerTitle}>04 AI &amp; RAG</span>
                <span className={styles.figLayerSub}>Creator-isolated</span>
              </div>
              <div className={`${styles.figLayerGridContainer} ${styles.c04}`}>
                <div className={styles.figLayerGrid}>
                  <div className={styles.figLayerPill}>RAG Instance</div>
                  <div className={styles.figLayerPill}>Confidence Scoring</div>
                  <div className={styles.figLayerPill}>Auto-Learn Hooks</div>
                  <div className={styles.figLayerPill}>Human Handoff</div>
                </div>
              </div>
            </div>

            <DownArrowSvg />

            {/* Layer 05 */}
            <div className={styles.figLayerRow}>
              <div className={`${styles.figLayerHeader} ${styles.h05}`}>
                <span className={styles.figLayerTitle}>05 KNOWLEDGE</span>
                <span className={styles.figLayerSub}>Versioned per creator</span>
              </div>
              <div className={`${styles.figLayerGridContainer} ${styles.c05}`}>
                <div className={styles.figLayerGrid}>
                  <div className={styles.figLayerPill}>Document Upload</div>
                  <div className={styles.figLayerPill}>URL Ingestion</div>
                  <div className={styles.figLayerPill}>Chunk + Embed</div>
                  <div className={styles.figLayerPill}>Version + Rollback</div>
                </div>
              </div>
            </div>

            <DownArrowSvg />

            {/* Layer 06 */}
            <div className={styles.figLayerRow}>
              <div className={`${styles.figLayerHeader} ${styles.h06}`}>
                <span className={styles.figLayerTitle}>06 ATTRIBUTION</span>
                <span className={styles.figLayerSub}>Engagement to revenue</span>
              </div>
              <div className={`${styles.figLayerGridContainer} ${styles.c06}`}>
                <div className={styles.figLayerGrid}>
                  <div className={styles.figLayerPill}>Tracking IDs</div>
                  <div className={styles.figLayerPill}>Attribution Engine</div>
                  <div className={styles.figLayerPill}>KPI Compute</div>
                  <div className={styles.figLayerPill}>Segment Pipeline</div>
                </div>
              </div>
            </div>

            <DownArrowSvg />

            {/* Layer 07 */}
            <div className={styles.figLayerRow}>
              <div className={`${styles.figLayerHeader} ${styles.h07}`}>
                <span className={styles.figLayerTitle}>07 DATA &amp; BILLING</span>
                <span className={styles.figLayerSub}>Persistence + revenue ops</span>
              </div>
              <div className={`${styles.figLayerGridContainer} ${styles.c07}`}>
                <div className={styles.figLayerGrid}>
                  <div className={styles.figLayerPill}>PostgreSQL Core</div>
                  <div className={styles.figLayerPill}>pgvector Namespaces</div>
                  <div className={styles.figLayerPill}>Redis Tokens</div>
                  <div className={styles.figLayerPill}>Stripe Billing</div>
                </div>
              </div>
            </div>

            <DownArrowSvg />

            {/* Layer 08 */}
            <div className={styles.figLayerRow}>
              <div className={`${styles.figLayerHeader} ${styles.h08}`}>
                <span className={styles.figLayerTitle}>08 CONTROL PLANE</span>
                <span className={styles.figLayerSub}>Next.js creator dashboard</span>
              </div>
              <div className={`${styles.figLayerGridContainer} ${styles.c08}`}>
                <div className={styles.figLayerGrid}>
                  <div className={styles.figLayerPill}>Living Gallery</div>
                  <div className={styles.figLayerPill}>Conversations</div>
                  <div className={styles.figLayerPill}>Hot Leads</div>
                  <div className={styles.figLayerPill}>Plan &amp; Credits</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.figCaption}>
            Figure 1 — Sentlogic layered system architecture: Instagram events through orchestration to revenue attribution.
          </div>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderBlue}`}>
            EVENT &amp; CONVERSATION ORCHESTRATION
          </div>
          <p className={styles.bodyParagraph}>
            Instagram events are first handled by the existing automation engine, then forwarded to the
            Sentlogic backend over secure webhooks. The orchestration layer evaluates each event and
            decides whether it should be answered by a predefined automation template or escalated to the
            creator-specific RAG bot. Every conversation state, routing decision, response payload, and
            confidence outcome is logged in the core database.
          </p>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderMagenta}`}>
            AI INTELLIGENCE &amp; RAG LAYER
          </div>
          <p className={styles.bodyParagraph}>
            When an AI response is required, the request is routed to a creator-isolated RAG instance that
            retrieves context only from that creator&apos;s own knowledge base. A confidence score is applied to
            every response: high-confidence answers can feed the auto-learning hooks, while low-confidence
            answers are flagged for human handoff.
          </p>

          {/* Figure 2 Flowchart */}
          <RAGOrchestrationFlowchart />

          <div className={styles.figCaption}>
            Figure 2 — RAG conversation orchestration: routing, confidence scoring, auto-learn, and human handoff.
          </div>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderMagenta}`}>
            KNOWLEDGE BASE MANAGEMENT
          </div>
          <p className={styles.bodyParagraph}>
            Creators manage their AI knowledge from the dashboard. Uploaded documents, scraped website
            content, and manual Q&amp;A entries pass through cleaning, chunking, and embedding generation
            before being stored in a creator-scoped vector store. A versioning system records every change,
            supporting rollback and historical comparison.
          </p>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderOrange}`}>
            ANALYTICS &amp; REVENUE ATTRIBUTION
          </div>
          <p className={styles.bodyParagraph}>
            The attribution engine continuously tracks automation performance, conversation depth, AI
            resolution rate, hot leads, and revenue. Engagement events are linked to business outcomes via
            unique tracking identifiers, and key metrics such as Revenue Per Comment are surfaced directly in
            the dashboard.
          </p>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderAmber}`}>
            DATA, BILLING &amp; DASHBOARD
          </div>
          <p className={styles.bodyParagraph}>
            Structured SaaS data lives in PostgreSQL, while embeddings live in a dedicated pgvector store,
            ensuring clean multi-tenant isolation. Subscription billing runs through Stripe with webhook-synchronised
            state, and the Next.js creator dashboard serves as the single control plane over
            secure REST APIs.
          </p>

          <div className={`${styles.calloutBox} ${styles.calloutPurple}`}>
            <span className={styles.calloutLabel}>ARCHITECTURAL PRINCIPLE</span>
            <p className={styles.calloutText}>
              The automation engine is treated as an upstream dependency, not as code to be rewritten.
              Every Sentlogic concern integrates through APIs and webhooks — which is what allows the
              product layer to evolve without ever destabilising the engine that captures the engagement.
            </p>
          </div>
        </section>

        {/* ── Section 03 — Credit System & Monetisation ── */}
        <section className={styles.articleSection}>
          <SectionBadgeHeader
            badge="03"
            badgeColorClass={styles.badgePurple}
            eyebrow="SECTION THREE"
            eyebrowColorClass={styles.eyebrowPurple}
            title="Credit System &amp; Monetisation"
          />

          <p className={styles.bodyParagraph}>
            Sentlogic monetises through a subscription-plus-metered-usage model. Each subscription tier
            carries a recurring fee and a monthly allowance of Engagement Credits. Deterministic template
            replies are not metered — credits are consumed only by AI and knowledge infrastructure
            operations.
          </p>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderPurple}`}>
            METERED OPERATIONS
          </div>
          <p className={styles.bodyParagraph}>
            Metering follows real marginal cost. If an operation consumes inference, embedding, or scraping
            capacity, it draws credits; if it is a deterministic lookup, it does not.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th className={styles.thPurple} style={{ width: '32%' }}>METERED OPERATION</th>
                  <th className={styles.thPurple} style={{ width: '32%' }}>CREDIT BASIS</th>
                  <th className={styles.thPurple}>WHY IT IS METERED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.strongCol}>RAG AI response</td>
                  <td>Per generated reply</td>
                  <td>Consumes LLM inference and retrieval.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Knowledge embedding</td>
                  <td>Per document / chunk batch</td>
                  <td>Consumes embedding generation and vector storage.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>URL ingestion job</td>
                  <td>Per scrape-and-index job</td>
                  <td>Consumes scraping and processing capacity.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Auto-learning expansion</td>
                  <td>Per reinforced entry</td>
                  <td>Writes new weighted knowledge.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderRose}`}>
            SUBSCRIPTION TIERS
          </div>
          <p className={styles.bodyParagraph}>
            Four tiers segment the market from individual creators to multi-brand deployments. Commercial
            pricing is set at go-to-market and is not fixed in this document.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th className={styles.thRose} style={{ width: '25%' }}>TIER</th>
                  <th className={styles.thRose} style={{ width: '30%' }}>MONTHLY PRICE</th>
                  <th className={styles.thRose}>INTENDED FOR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.strongCol}>Starter</td>
                  <td>To confirm</td>
                  <td>Individual creators getting started.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Growth</td>
                  <td>To confirm</td>
                  <td>Scaling creators with steady volume.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Scale</td>
                  <td>To confirm</td>
                  <td>High-volume brands and teams.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Enterprise</td>
                  <td>Custom</td>
                  <td>Multi-brand and bespoke needs.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderRose}`}>
            BILLING ENFORCEMENT
          </div>
          <p className={styles.bodyParagraph}>
            Stripe Checkout creates subscriptions, and Stripe webhooks synchronise billing state with the
            SaaS database in real time. A subscription-enforcement middleware checks plan entitlements and
            remaining credits on every relevant request, enforcing usage limits, feature access, and plan
            changes consistently.
          </p>

          <div className={`${styles.calloutBox} ${styles.calloutPurple}`}>
            <span className={styles.calloutLabel}>WHY TEMPLATES ARE FREE</span>
            <p className={styles.calloutText}>
              Leaving deterministic replies unmetered means high-volume creators are never penalised for
              the automation that first attracted them to the platform. Credits price the intelligence layer —
              the part that carries genuine marginal cost — which keeps the pricing model defensible as
              volume scales.
            </p>
          </div>
        </section>

        {/* ── Section 04 — User-Facing Features ── */}
        <section className={styles.articleSection}>
          <SectionBadgeHeader
            badge="04"
            badgeColorClass={styles.badgeMagenta}
            eyebrow="SECTION FOUR"
            eyebrowColorClass={styles.eyebrowMagenta}
            title="User-Facing Features"
          />

          <p className={styles.bodyParagraph}>
            Creators operate Sentlogic entirely through a Next.js dashboard that acts as a single control
            centre, built as a fast, data-dense interface with strict multi-tenant isolation.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th className={styles.thMagenta} style={{ width: '35%' }}>FEATURE</th>
                  <th className={styles.thMagenta}>WHAT THE CREATOR SEES AND DOES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.strongCol}>Creator dashboard</td>
                  <td>High-level metrics and activity overview — revenue, average RPC, conversation volume, and AI confidence at a glance.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Conversations</td>
                  <td>Threaded conversation history with AI-versus-manual status for each exchange.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>AI agent management</td>
                  <td>Knowledge-base upload, versioning with rollback, and brand-voice / tone configuration.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Knowledge base UI</td>
                  <td>Document upload (PDF, DOCX, CSV), website-URL ingestion with auto-scraping, and prioritised manual Q&amp;A entries.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Automation overview</td>
                  <td>Active triggers and per-post automation performance.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Living Gallery</td>
                  <td>A post-level performance grid exposing RPC, velocity, depth, confidence, and funnel for each post.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Revenue attribution</td>
                  <td>Revenue tied back to the specific post or comment that generated it.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Hot leads panel</td>
                  <td>High-intent conversations surfaced for attention by a rule-based classifier.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>AI resolution tracking</td>
                  <td>The share of conversations fully handled by AI, with handoff visibility.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Insights &amp; recommendations</td>
                  <td>AI-driven suggestions and alerts on underperforming automations.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Billing &amp; plan management</td>
                  <td>Subscription status, usage against credit allowance, and plan changes.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${styles.calloutBox} ${styles.calloutMagenta}`}>
            <span className={styles.calloutLabel}>THE LIVING GALLERY</span>
            <p className={styles.calloutText}>
              Most social tooling reports in aggregate. The Living Gallery inverts that: every post carries its
              own revenue-per-comment, velocity, conversation depth, AI confidence, and funnel state — so
              a creator can see which piece of content is actually earning, not merely which one performed.
            </p>
          </div>
        </section>

        {/* ── Section 05 — Security & Auditability ── */}
        <section className={styles.articleSection}>
          <SectionBadgeHeader
            badge="05"
            badgeColorClass={styles.badgeRose}
            eyebrow="SECTION FIVE"
            eyebrowColorClass={styles.eyebrowRose}
            title="Security &amp; Auditability"
          />

          <p className={styles.bodyParagraph}>
            Sentlogic handles delegated social credentials, creator-proprietary knowledge, and revenue data
            in a shared-tenancy environment. Access, identity, isolation, and evidentiary logging are therefore
            treated as first-class architecture, not deployment configuration.
          </p>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderRose}`}>
            ACCESS, IDENTITY &amp; SECRETS
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th className={styles.thRose} style={{ width: '30%' }}>CONTROL</th>
                  <th className={styles.thRose}>DESIGN INTENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.strongCol}>Authentication</td>
                  <td>JWT access and refresh tokens with Redis-backed token storage and rate limiting.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Instagram connection</td>
                  <td>Meta OAuth 2.0 with a secure backend token exchange; access and refresh tokens stored encrypted.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Transport &amp; at rest</td>
                  <td>TLS in transit and encryption at rest for all stored data.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Secret management</td>
                  <td>No hardcoded secrets; environment-variable configuration and credential rotation before handover.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Workspace isolation</td>
                  <td>Each creator&apos;s data, AI instance, and knowledge base fully isolated, including a dedicated vector namespace.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Webhook integrity</td>
                  <td>Idempotency protection and signature verification on inbound webhooks guard against replay and spoofing.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Decision logging</td>
                  <td>Every conversation state, routing decision, response payload, and confidence outcome recorded in the core database.</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Knowledge versioning</td>
                  <td>All knowledge-base changes versioned with rollback and historical comparison, plus source and ownership metadata.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${styles.calloutBox} ${styles.calloutRose}`}>
            <span className={styles.calloutLabel}>AUDITABILITY AS A PRODUCT FEATURE</span>
            <p className={styles.calloutText}>
              Because every routing decision, confidence score, and knowledge-base revision is recorded
              with ownership metadata, any AI reply a creator questions can be reconstructed after the fact:
              what was retrieved, how confident the model was, and which knowledge version produced it.
            </p>
          </div>
        </section>

        {/* ── Section 06 — What Makes This Different ── */}
        <section className={styles.articleSection}>
          <SectionBadgeHeader
            badge="06"
            badgeColorClass={styles.badgeOrange}
            eyebrow="SECTION SIX"
            eyebrowColorClass={styles.eyebrowOrange}
            title="What Makes This Different"
          />

          <p className={styles.bodyParagraph}>
            Seven design decisions separate Sentlogic from conventional social automation tooling.
          </p>

          <div className={styles.numberedList}>
            <div className={styles.numberedItem}>
              <span className={styles.numberedBadge}>01</span>
              <div className={styles.numberedText}>
                <strong>Productizes without rewriting.</strong> The existing automation engine stays untouched; Sentlogic
                layers onboarding, AI, analytics, and billing on top through a modular, API-first integration.
              </div>
            </div>

            <div className={styles.numberedItem}>
              <span className={styles.numberedBadge}>02</span>
              <div className={styles.numberedText}>
                <strong>Creator-isolated RAG.</strong> Each creator has a fully isolated AI instance that retrieves only from
                their own knowledge base, keeping responses on-brand and data private.
              </div>
            </div>

            <div className={styles.numberedItem}>
              <span className={styles.numberedBadge}>03</span>
              <div className={styles.numberedText}>
                <strong>Revenue attribution, not vanity metrics.</strong> Engagement events are linked to actual
                conversions, so Revenue Per Comment and related KPIs connect activity directly to business
                outcomes.
              </div>
            </div>

            <div className={styles.numberedItem}>
              <span className={styles.numberedBadge}>04</span>
              <div className={styles.numberedText}>
                <strong>Confidence-aware AI with graceful handoff.</strong> Every reply is scored; high-confidence answers
                can reinforce the knowledge base, while low-confidence ones escalate to a human.
              </div>
            </div>

            <div className={styles.numberedItem}>
              <span className={styles.numberedBadge}>05</span>
              <div className={styles.numberedText}>
                <strong>Post-level Living Gallery.</strong> Performance is visible per post — RPC, velocity, depth, confidence,
                and funnel — rather than only in aggregate.
              </div>
            </div>

            <div className={styles.numberedItem}>
              <span className={styles.numberedBadge}>06</span>
              <div className={styles.numberedText}>
                <strong>Decoupled, scalable analytics.</strong> Routing events to Segment keeps analytics independent of
                core logic, so the pipeline scales without coupling.
              </div>
            </div>

            <div className={styles.numberedItem}>
              <span className={styles.numberedBadge}>07</span>
              <div className={styles.numberedText}>
                <strong>Built for Phase-2 expansion.</strong> The API-first foundation lets integrations such as Shopify,
                HubSpot, Slack, Mailchimp, and Zapier be added without touching Phase-1 functionality.
              </div>
            </div>
          </div>

          <div className={`${styles.calloutBox} ${styles.calloutOrange}`}>
            <span className={styles.calloutLabel}>POSITIONING SUMMARY</span>
            <p className={styles.calloutText}>
              Competing tools optimise for reply volume. Sentlogic optimises for traceable revenue per unit
              of engagement — which is the metric a creator-commerce business is actually run on.
            </p>
          </div>
        </section>

        {/* ── Section 07 — Outcomes from the System ── */}
        <section className={styles.articleSection}>
          <SectionBadgeHeader
            badge="07"
            badgeColorClass={styles.badgeAmber}
            eyebrow="SECTION SEVEN"
            eyebrowColorClass={styles.eyebrowAmber}
            title="Outcomes from the System"
          />

          <p className={styles.bodyParagraph}>
            The platform instruments a fixed KPI set natively, computed by the attribution engine and
            surfaced in the dashboard. Baseline and target columns are populated per deployment against
            live creator data.
          </p>

          {/* Figure 3: Revenue Attribution Lifecycle */}
          <div className={styles.fig3StageRow}>
            <div className={styles.fig3CardWrap}>
              <div className={`${styles.fig3Card} ${styles.stage01}`}>
                <span className={styles.fig3StageBadge}>STAGE 01</span>
                <span className={styles.fig3StageTitle}>Engagement</span>
                <span className={styles.fig3StageDesc}>Comment, story reply<br />or DM captured</span>
              </div>
              <RightArrowSvg />
            </div>

            <div className={styles.fig3CardWrap}>
              <div className={`${styles.fig3Card} ${styles.stage02}`}>
                <span className={styles.fig3StageBadge}>STAGE 02</span>
                <span className={styles.fig3StageTitle}>Conversation</span>
                <span className={styles.fig3StageDesc}>Template or RAG reply<br />with unique tracking ID</span>
              </div>
              <RightArrowSvg />
            </div>

            <div className={styles.fig3CardWrap}>
              <div className={`${styles.fig3Card} ${styles.stage03}`}>
                <span className={styles.fig3StageBadge}>STAGE 03</span>
                <span className={styles.fig3StageTitle}>Intent Signal</span>
                <span className={styles.fig3StageDesc}>Link tap, depth threshold<br />or hot-lead classification</span>
              </div>
              <RightArrowSvg />
            </div>

            <div className={styles.fig3CardWrap}>
              <div className={`${styles.fig3Card} ${styles.stage04}`}>
                <span className={styles.fig3StageBadge}>STAGE 04</span>
                <span className={styles.fig3StageTitle}>Conversion</span>
                <span className={styles.fig3StageDesc}>Value recorded against<br />source = automation</span>
              </div>
              <RightArrowSvg />
            </div>

            <div className={styles.fig3CardWrap}>
              <div className={`${styles.fig3Card} ${styles.stage05}`}>
                <span className={styles.fig3StageBadge}>STAGE 05</span>
                <span className={styles.fig3StageTitle}>Post-Level KPI</span>
                <span className={styles.fig3StageDesc}>RPC surfaced in the<br />Living Gallery grid</span>
              </div>
            </div>
          </div>

          <div className={styles.figCaption}>
            Figure 3 — Revenue attribution lifecycle: engagement through tracked conversion to post-level KPI.
          </div>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderAmber}`}>
            MEASUREMENT FRAMEWORK
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th className={styles.thAmber} style={{ width: '22%' }}>METRIC</th>
                  <th className={styles.thAmber} style={{ width: '25%' }}>DEFINITION</th>
                  <th className={styles.thAmber} style={{ width: '31%' }}>FORMULA</th>
                  <th className={styles.thAmber} style={{ width: '11%' }}>BASELINE</th>
                  <th className={styles.thAmber} style={{ width: '11%' }}>TARGET</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.strongCol}>Total Revenue</td>
                  <td>Revenue from automation-driven conversations</td>
                  <td>Sum of conversion value where source = automation</td>
                  <td className={styles.centerCol}>—</td>
                  <td className={styles.centerCol}>—</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Revenue Per Comment</td>
                  <td>Revenue efficiency per triggered comment</td>
                  <td>Total revenue / triggered comments</td>
                  <td className={styles.centerCol}>—</td>
                  <td className={styles.centerCol}>—</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>AI Resolution Rate</td>
                  <td>Conversations fully handled by AI</td>
                  <td>AI-only convos / total AI convos × 100</td>
                  <td className={styles.centerCol}>—</td>
                  <td className={styles.centerCol}>—</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Link Taps</td>
                  <td>Engagement on shared DM links</td>
                  <td>Count of tracked click events</td>
                  <td className={styles.centerCol}>—</td>
                  <td className={styles.centerCol}>—</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Conversation Depth</td>
                  <td>Average conversation length</td>
                  <td>Total messages / total conversations</td>
                  <td className={styles.centerCol}>—</td>
                  <td className={styles.centerCol}>—</td>
                </tr>
                <tr>
                  <td className={styles.strongCol}>Hot Leads</td>
                  <td>High-intent conversations surfaced</td>
                  <td>Rule engine on depth + intent signals</td>
                  <td className={styles.centerCol}>—</td>
                  <td className={styles.centerCol}>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${styles.subSectionHeader} ${styles.subHeaderOrange}`}>
            OPERATIONAL OUTCOMES DELIVERED
          </div>

          <div className={styles.bulletedList}>
            <div className={styles.bulletedItem}>
              <span className={styles.bulletDot}>·</span>
              <div>
                <strong>Productized platform.</strong> An existing automation engine productized into a multi-tenant, billable SaaS platform.
              </div>
            </div>
            <div className={styles.bulletedItem}>
              <span className={styles.bulletDot}>·</span>
              <div>
                <strong>Brand-voice AI.</strong> A creator-isolated RAG chatbot operating in each brand&apos;s own voice, with confidence scoring and human handoff.
              </div>
            </div>
            <div className={styles.bulletedItem}>
              <span className={styles.bulletDot}>·</span>
              <div>
                <strong>Attribution layer.</strong> A revenue-attribution layer that ties Instagram engagement to measurable conversions.
              </div>
            </div>
            <div className={styles.bulletedItem}>
              <span className={styles.bulletDot}>·</span>
              <div>
                <strong>Production deployment.</strong> CI/CD, monitoring, and alerting across latency, throughput, and revenue tracking.
              </div>
            </div>
          </div>
        </section>

        {/* ── Conclusion / In One Line ── */}
        <section className={styles.articleSection}>
          <SegmentedColorBar style={{ height: '8px', marginBottom: '24px' }} />

          <div className={styles.inOneLineCard}>
            <div className={styles.inOneLineEyebrow}>IN ONE LINE</div>
            <p className={styles.inOneLineText}>
              Sentlogic turns Instagram engagement into attributable revenue — creator-isolated RAG AI,
              confidence-aware handoff, and a Living Gallery that ties every comment to a conversion.
            </p>
          </div>

          <div className={styles.agencySignature}>
            <strong>PG-AGI</strong> · Playing God with AGI · Bengaluru
          </div>
        </section>
      </div>
    </div>
  );
}
