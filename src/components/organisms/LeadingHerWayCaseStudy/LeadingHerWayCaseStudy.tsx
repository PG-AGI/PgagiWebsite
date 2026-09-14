'use client';

import React from 'react';
import Image from 'next/image';
import {
  Calendar,
  Lock,
  Plus,
  BookOpen,
  RefreshCw,
} from 'lucide-react';
import styles from '@/styles/components/organisms/LeadingHerWayCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface LeadingHerWayCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

// Crisp iOS status bar icons
function IosStatusBar() {
  return (
    <div className={styles.phoneTopBar}>
      <span className={styles.phoneClock}>9:41</span>
      <div className={styles.phoneStatusIcons}>
        {/* Cellular bars */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="7.5" width="2.5" height="3.5" rx="0.6" />
          <rect x="4.5" y="5" width="2.5" height="6" rx="0.6" />
          <rect x="9" y="2.5" width="2.5" height="8.5" rx="0.6" />
          <rect x="13.5" y="0" width="2.5" height="11" rx="0.6" />
        </svg>
        {/* Wifi icon */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
          <path d="M7.5 3.2C9.6 3.2 11.5 4 12.9 5.3L14.3 3.9C12.5 2.2 10.1 1.2 7.5 1.2C4.9 1.2 2.5 2.2 0.7 3.9L2.1 5.3C3.5 4 5.4 3.2 7.5 3.2ZM7.5 6.4C8.8 6.4 10 6.9 10.9 7.8L12.3 6.4C11.1 5.2 9.4 4.4 7.5 4.4C5.6 4.4 3.9 5.2 2.7 6.4L4.1 7.8C5 6.9 6.2 6.4 7.5 6.4ZM7.5 9.4C8.2 9.4 8.7 9.9 8.7 10.6C8.7 11.3 8.2 11.8 7.5 11.8C6.8 11.8 6.3 11.3 6.3 10.6C6.3 9.9 6.8 9.4 7.5 9.4Z" />
        </svg>
        {/* Battery icon */}
        <svg width="22" height="11" viewBox="0 0 22 11" fill="currentColor">
          <rect x="0.75" y="0.75" width="18" height="9.5" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="2.5" y="2.5" width="12" height="6" rx="1.2" />
          <path d="M20.25 3.75V7.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

export default function LeadingHerWayCaseStudy({ caseStudy }: LeadingHerWayCaseStudyProps) {
  return (
    <div className={styles.lhwPage}>
      {/* ── 1. Hero Section (Vook AI Layout Structure) ── */}
      <section className={styles.heroSection}>
        <div className={styles.rail}>
          <div className={styles.heroGrid}>
            {/* Left Column */}
            <div className={styles.heroLeft}>
              <div className={styles.lhwBrandHeader}>
                <h1 className={styles.lhwMainWordmark}>LHW</h1>
                <span className={styles.lhwSubWordmark}>LEADING HER WAY</span>
              </div>

              <div className={styles.heroHeadlineBlock}>
                <h2 className={styles.heroMainHeadline}>
                  A working day.<br />
                  On her terms.
                </h2>
                <h3 className={styles.heroSecondaryHeadline}>
                  Building a cycle-aware<br />
                  AI productivity platform
                </h3>
                <p className={styles.heroSummaryText}>
                  Cycle context, calendar intelligence and a personal AI coach, brought together in one daily experience.
                </p>
              </div>

              <div className={styles.theBuildSection}>
                <span className={styles.theBuildHeading}>THE BUILD</span>
                <div className={styles.buildItemsList}>
                  <div className={styles.buildBlockItem}>
                    <strong className={styles.buildItemTitle}>Mobile + AI</strong>
                    <span className={styles.buildItemDesc}>React Native for iOS and Android</span>
                  </div>
                  <div className={styles.buildBlockItem}>
                    <strong className={styles.buildItemTitle}>Personalised daily guidance</strong>
                    <span className={styles.buildItemDesc}>Today&apos;s Flow + conversational coaching</span>
                  </div>
                  <div className={styles.buildBlockItem}>
                    <strong className={styles.buildItemTitle}>Designed to grow</strong>
                    <span className={styles.buildItemDesc}>Core intelligence, then community</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image Asset */}
            <div className={styles.heroRight}>
              <div className={styles.heroRightImageContainer}>
                <Image
                  src="/case-studies/leading-her-ways-rightside-image.png"
                  alt="Leading Her Way - A working day on her terms"
                  width={440}
                  height={720}
                  priority
                  quality={100}
                  unoptimized
                  className={styles.heroRightImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Body Sections in .rail (Vook AI Layout Structure) ── */}
      <div className={styles.rail}>
        {/* ── Section 01: The Opportunity ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>01 / THE OPPORTUNITY</span>
          <h2 className={styles.sectionHeading}>
            Make daily planning<br />
            more personal.
          </h2>
          <p className={styles.sectionParagraph}>
            Most productivity tools treat every day the same. Leading Her Way asked PG-AGI to build a mobile experience that adapts recommendations to natural energy rhythms without adding administrative friction.
          </p>

          {/* Full-width Deep Burgundy Callout Banner */}
          <div className={styles.burgundyCalloutBanner}>
            <h3 className={styles.burgundyCalloutText}>
              From knowing your phase to knowing what to do next.
            </h3>
          </div>

          {/* Two-Column Challenge vs Response */}
          <div className={styles.challengeResponseGrid}>
            <div className={styles.columnCard}>
              <h3 className={styles.columnCardTitle}>The challenge</h3>
              <p className={styles.columnCardText}>
                Cycle tracking apps tell users what day they are on, but leave them to figure out what that means for their calendar. Meanwhile standard productivity tools ignore energy rhythms entirely, creating friction when energy shifts.
              </p>
            </div>

            <div className={styles.columnCard}>
              <h3 className={styles.columnCardTitle}>The product response</h3>
              <p className={styles.columnCardText}>
                An intelligent daily companion that pairs cycle phase with today&apos;s schedule to generate clear, adaptive guidance. It meets users at the start of each working day with context they can act on in seconds.
              </p>
            </div>
          </div>

          {/* Core Product Scope Box */}
          <div className={styles.coreScopeBox}>
            <span className={styles.coreScopeHeading}>CORE PRODUCT SCOPE</span>
            <p className={styles.coreScopeList}>
              Cycle tracking and check-ins · Calendar integration · Personalised daily recommendations · Conversational coaching · Notifications · Subscription access
            </p>
            <p className={styles.coreScopeFootnote}>
              Delivery is structured in two phases: core intelligence first; community syncing, administration and baseline analytics as the next phase.
            </p>
          </div>
        </section>

        {/* ── Section 02: The Daily Experience ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>02 / THE DAILY EXPERIENCE</span>
          <h2 className={styles.sectionHeading}>
            One place to begin<br />
            the working day.
          </h2>

          <div className={styles.dailyExperienceGrid}>
            {/* Left Column: Numbered Narrative Steps */}
            <div className={styles.dailyExperienceLeft}>
              <div className={styles.todaysFlowHeader}>
                <span className={styles.todaysFlowEyebrow}>TODAY&apos;S FLOW</span>
                <h3 className={styles.todaysFlowTitle}>
                  A daily plan built from<br />
                  personal context.
                </h3>
                <p className={styles.todaysFlowDesc}>
                  The dashboard brings the current phase, daily guidance and calendar into the same view. Recommendations are framed around what to do, avoid or optimise.
                </p>
              </div>

              <div className={styles.stepsList}>
                <div className={styles.stepItemBlock}>
                  <strong className={styles.stepTitleBurgundy}>
                    <span className={styles.stepNumber}>01</span>
                    <span>Start with the person</span>
                  </strong>
                  <p className={styles.stepDescText}>
                    Onboarding gathers cycle information, goals and preferences.
                  </p>
                </div>

                <div className={styles.stepItemBlock}>
                  <strong className={styles.stepTitleBurgundy}>
                    <span className={styles.stepNumber}>02</span>
                    <span>Add the real schedule</span>
                  </strong>
                  <p className={styles.stepDescText}>
                    Google Calendar or Outlook supplies commitments after the user grants access.
                  </p>
                </div>

                <div className={styles.stepItemBlock}>
                  <strong className={styles.stepTitleBurgundy}>
                    <span className={styles.stepNumber}>03</span>
                    <span>Keep listening</span>
                  </strong>
                  <p className={styles.stepDescText}>
                    Energy, mood and focus feedback helps the system adjust its recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Exact High-Resolution Image Asset */}
            <div className={styles.dailyExperienceRight}>
              <div className={styles.dailyPlanImageWrap}>
                <Image
                  src="/case-studies/a-daily-plan-built-from.png"
                  alt="A daily plan built from personal context - Today's Flow phone mockup"
                  width={250}
                  height={712}
                  priority
                  quality={100}
                  unoptimized
                  className={styles.dailyPlanImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 03: Adaptive Guidance ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>03 / ADAPTIVE GUIDANCE</span>
          <h2 className={styles.sectionHeading}>
            The same interface.<br />
            A different day.
          </h2>
          <p className={styles.sectionParagraph}>
            The supplied designs show guidance changing across luteal, ovulatory and follicular phases while the daily planning layout stays familiar.
          </p>

          {/* User's Exact High-Resolution Asset for The Same Interface */}
          <div className={styles.sameInterfaceImageWrap}>
            <Image
              src="/case-studies/the-same-interface.png"
              alt="The same interface - Adaptive Guidance across Luteal, Ovulatory and Follicular phases"
              width={1200}
              height={1100}
              priority
              quality={100}
              unoptimized
              className={styles.sameInterfaceImg}
            />
          </div>
        </section>

        {/* ── Section 04: Cycle Tracking ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>04 / CYCLE TRACKING</span>
          <h2 className={styles.sectionHeading}>
            Context she can<br />
            review and update.
          </h2>
          <p className={styles.sectionParagraph}>
            Cycle visibility and editable period dates give users a way to check the information behind their daily guidance. Check-ins add how they actually feel to that context.
          </p>

          {/* User's Exact High-Resolution Asset for Context She Can */}
          <div className={styles.contextSheCanImageWrap}>
            <Image
              src="/case-studies/context-she-can.png"
              alt="Context she can review and update - Cycle tracking and period-date editing interface designs"
              width={912}
              height={826}
              priority
              quality={100}
              unoptimized
              className={styles.contextSheCanImg}
            />
          </div>
        </section>

        {/* ── Section 05: The Architecture ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>05 / THE ARCHITECTURE</span>
          <h2 className={styles.sectionHeading}>
            Personalisation runs<br />
            on prepared context.
          </h2>
          <p className={styles.sectionParagraph}>
            The service layer combines cycle phase, calendar workload, feedback and history before requesting AI guidance. Memory remains separate from the model so personalisation can persist as the intelligence layer evolves.
          </p>

          {/* 4-Layer Architecture Stack */}
          <div className={styles.architectureStackWrap}>
            {/* 01 Experience */}
            <div className={styles.archLayerCardCream}>
              <span className={styles.archLayerTag}>01 EXPERIENCE</span>
              <h3 className={styles.archLayerTitle}>React Native</h3>
              <p className={styles.archLayerSubtitle}>
                iOS and Android · Onboarding · Dashboard · Coach · Billing
              </p>
            </div>

            <div className={styles.archConnectorLine} />

            {/* 02 Orchestration */}
            <div className={styles.archLayerCardCream}>
              <span className={styles.archLayerTag}>02 ORCHESTRATION</span>
              <h3 className={styles.archLayerTitle}>Python FastAPI</h3>
              <p className={styles.archLayerSubtitle}>
                Authentication · Cycle engine · Calendar analysis · AI context
              </p>
            </div>

            <div className={styles.archConnectorLine} />

            {/* 03 Intelligence (Solid Burgundy Highlight Card) */}
            <div className={styles.archLayerCardBurgundy}>
              <span className={styles.archLayerTagWhite}>03 INTELLIGENCE</span>
              <h3 className={styles.archLayerTitleWhite}>Gemini 3.1 Pro + AI memory</h3>
              <p className={styles.archLayerSubtitleWhite}>
                Daily recommendations · Contextual coaching · Learned patterns
              </p>
            </div>

            <div className={styles.archConnectorLine} />

            {/* 04 Data & Integrations */}
            <div className={styles.archLayerCardCream}>
              <span className={styles.archLayerTag}>04 DATA &amp; INTEGRATIONS</span>
              <h3 className={styles.archLayerTitle}>MongoDB + connected services</h3>
              <p className={styles.archLayerSubtitle}>
                Google / Outlook · Firebase Cloud Messaging · Stripe / in-app purchases
              </p>
            </div>
          </div>

          {/* Deployment & Feedback Block */}
          <div className={styles.deploymentFeedbackBlock}>
            <span className={styles.deploymentHeading}>DEPLOYMENT &amp; FEEDBACK</span>
            <p className={styles.deploymentLine}>
              Docker on GCP Cloud Run · GitHub Actions CI/CD · GCP Logging.
            </p>
            <p className={styles.deploymentLine}>
              Daily reflection and interaction history feed the next context assembly.
            </p>
          </div>

          <p className={styles.archBelowCaption}>
            Technology and architecture as documented in the PG-AGI source case study.
          </p>
        </section>

        {/* ── Section 06: Trust & Operations ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>06 / TRUST &amp; OPERATIONS</span>
          <h2 className={styles.sectionHeading}>
            Sensitive context.<br />
            Explicit controls.
          </h2>
          <p className={styles.sectionParagraph}>
            Calendar commitments and cycle information require careful access and clear boundaries. The documented design applies controls across identity, data handling, subscriptions and operations.
          </p>

          {/* 5 Key-Value Security Control Rows */}
          <div className={styles.trustControlsContainer}>
            <div className={styles.trustRow}>
              <div className={styles.trustLabelCol}>
                <span className={styles.trustLabelName}>Identity &amp; consent</span>
              </div>
              <div className={styles.trustDescCol}>
                <p className={styles.trustDescText}>
                  OAuth 2.0 calendar access scoped to needed permissions. Clear consent during onboarding with granular controls over what data is shared.
                </p>
              </div>
            </div>

            <div className={styles.trustRow}>
              <div className={styles.trustLabelCol}>
                <span className={styles.trustLabelName}>Data protection</span>
              </div>
              <div className={styles.trustDescCol}>
                <p className={styles.trustDescText}>
                  Cycle and health information encrypted at rest (AES-256) and in transit (TLS 1.3). Personal context never leaves the private database without explicit permission.
                </p>
              </div>
            </div>

            <div className={styles.trustRow}>
              <div className={styles.trustLabelCol}>
                <span className={styles.trustLabelName}>Operational visibility</span>
              </div>
              <div className={styles.trustDescCol}>
                <p className={styles.trustDescText}>
                  GCP-native logging with sanitized payloads. Error tracking through Sentry. Performance monitoring across all API endpoints with alert thresholds.
                </p>
              </div>
            </div>

            <div className={styles.trustRow}>
              <div className={styles.trustLabelCol}>
                <span className={styles.trustLabelName}>Secure handover</span>
              </div>
              <div className={styles.trustDescCol}>
                <p className={styles.trustDescText}>
                  Complete repository documentation, Terraform configurations for cloud infrastructure, and automated CI/CD pipelines for independent deployment.
                </p>
              </div>
            </div>

            <div className={styles.trustRow}>
              <div className={styles.trustLabelCol}>
                <span className={styles.trustLabelName}>Phase 2 Community</span>
              </div>
              <div className={styles.trustDescCol}>
                <p className={styles.trustDescText}>
                  Architected for future community features with role-based access control, content moderation hooks, and private group data isolation.
                </p>
              </div>
            </div>
          </div>

          <p className={styles.archBelowCaption}>
            Operational controls and compliance architecture.
          </p>
        </section>

        {/* ── Section 07: Commercial Model & Measurement ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>07 / COMMERCIAL MODEL &amp; MEASUREMENT</span>
          <h2 className={styles.sectionHeading}>
            Built for recurring<br />
            daily value.
          </h2>
          <p className={styles.sectionParagraph}>
            Subscription access supports the ongoing daily experience. Server-side entitlement checks govern access, with Stripe and native in-app purchases providing the billing paths.
          </p>

          {/* 3 Pricing Stat Cards */}
          <div className={styles.pricingCardsRow}>
            <div className={styles.pricingBox}>
              <span className={styles.pricingValueText}>3 days</span>
              <p className={styles.pricingLabelText}>Full-access trial</p>
            </div>

            <div className={styles.pricingBox}>
              <span className={styles.pricingValueText}>$15</span>
              <p className={styles.pricingLabelText}>Per month</p>
            </div>

            <div className={styles.pricingBox}>
              <span className={styles.pricingValueText}>$150</span>
              <p className={styles.pricingLabelText}>Per year</p>
            </div>
          </div>

          <p className={styles.pricingPlansNote}>
            Plans documented in the source case study; pricing may change.
          </p>

          {/* How Success Will Be Measured Framework */}
          <div className={styles.measurementBlockWrap}>
            <span className={styles.measurementMainHeading}>HOW SUCCESS WILL BE MEASURED</span>
            <p className={styles.measurementIntroText}>
              The source defines a measurement framework, with results still to be populated from production analytics. It does not publish achieved growth, retention or productivity gains.
            </p>

            <div className={styles.measurementRowsList}>
              <div className={styles.measurementRowItem}>
                <span className={styles.measurementCategoryName}>Adoption</span>
                <p className={styles.measurementDetailText}>
                  Trial-to-paid conversion · Daily active usage
                </p>
              </div>

              <div className={styles.measurementRowItem}>
                <span className={styles.measurementCategoryName}>Trust</span>
                <p className={styles.measurementDetailText}>
                  Recommendation acceptance · Notification engagement
                </p>
              </div>

              <div className={styles.measurementRowItem}>
                <span className={styles.measurementCategoryName}>Personalisation</span>
                <p className={styles.measurementDetailText}>
                  Feedback participation · Prediction alignment
                </p>
              </div>

              <div className={styles.measurementRowItem}>
                <span className={styles.measurementCategoryName}>Durability</span>
                <p className={styles.measurementDetailText}>
                  Retention and churn across billing periods
                </p>
              </div>
            </div>
          </div>

          {/* Sources & Assets Attribution */}
          <div className={styles.sourcesAssetsBlock}>
            <span className={styles.sourcesAssetsHeading}>SOURCES &amp; ASSETS</span>
            <div className={styles.sourcesAssetsContent}>
              <p className={styles.sourcesAssetsLine}>
                <strong className={styles.sourcesPrefix}>PG-AGI: Leading Her Way case study</strong> · Product scope and engineering.
              </p>
              <p className={styles.sourcesAssetsLine}>
                <strong className={styles.sourcesPrefix}>leading-her-way.com</strong> · Brand direction. Supplied LHW interface exports.
              </p>
              <p className={styles.sourcesAssetsFootnote}>
                Prepared 14 September 2026. Phase 2 capabilities are presented as planned.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
