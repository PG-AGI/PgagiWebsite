'use client';

import React from 'react';
import styles from '@/styles/components/organisms/LeadingHerWayCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface LeadingHerWayCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const FOOTER_TITLE = 'Cycle-aware AI productivity platform';

const INDEX_ITEMS: { num: string; title: string; detail: string }[] = [
  { num: 'I', title: 'What We Built', detail: 'Product definition, delivery phases, and the problem being solved' },
  { num: 'II', title: 'Core Architecture', detail: 'Layered system design, technology stack, and data flow' },
  { num: 'III', title: 'Credit System & Monetisation', detail: 'Entitlement model, subscription tiers, and trial gating' },
  { num: 'IV', title: 'User-Facing Features', detail: "Today's Flow, AI coach, calendar intelligence, notifications" },
  { num: 'V', title: 'Security & Auditability', detail: 'Authentication, consent, encryption, logging, and handover' },
  { num: 'VI', title: 'What Makes This Different', detail: 'Six structural differentiators against adjacent categories' },
  { num: 'VII', title: 'Outcomes', detail: 'Measurement framework and instrumented KPI set' },
];

const PHASE_TABLE: { phase: string; scope: string }[] = [
  { phase: 'Phase 1 — Core intelligence', scope: 'Cycle tracking, adaptive AI recommendations, calendar syncing, predictive insights, notification strategy, and the subscription model.' },
  { phase: 'Phase 2 — Community & admin', scope: 'Community Syncing for anonymised connections between users in similar cycle phases, an admin panel, and baseline analytics insights.' },
];

const TECH_STACK_TABLE: { layer: string; tech: string; purpose: string }[] = [
  { layer: 'Mobile', tech: 'React Native', purpose: 'iOS and Android app: onboarding, dashboard, AI chat, calendar, subscriptions.' },
  { layer: 'Backend', tech: 'Python FastAPI', purpose: 'Auth, cycle calculation, AI orchestration, calendar processing, notifications, billing.' },
  { layer: 'AI / LLM', tech: 'Gemini 3.1 Pro', purpose: 'Daily recommendations, contextual reasoning, conversational coaching.' },
  { layer: 'Database', tech: 'MongoDB', purpose: 'User profiles, cycle data, behavioural inputs, interaction history.' },
  { layer: 'AI memory', tech: 'AI memory store', purpose: 'Learned patterns and historical insight used for personalisation.' },
  { layer: 'Calendar', tech: 'Google Calendar API / Outlook API', purpose: 'Secure schedule reading and workload analysis.' },
  { layer: 'Notifications', tech: 'Firebase Cloud Messaging', purpose: 'Daily plans, energy-based reminders, schedule alerts.' },
  { layer: 'Payments', tech: 'Stripe + in-app purchases', purpose: 'Subscription billing and trial management.' },
  { layer: 'Infrastructure', tech: 'Docker on GCP Cloud Run', purpose: 'Containerised, horizontally scalable backend deployment.' },
  { layer: 'CI / CD', tech: 'GitHub Actions', purpose: 'Automated build, test, and deploy.' },
];

const ENTITLEMENT_TABLE: { mechanism: string; behaviour: string }[] = [
  { mechanism: 'Access flag', behaviour: "A server-side subscription state resolved on every authenticated request; the client never decides its own entitlement." },
  { mechanism: 'Trial gating', behaviour: 'New users receive a three-day free trial with full functionality. On expiry, access is gated until a paid plan is active.' },
  { mechanism: 'Billing rails', behaviour: 'Stripe for card-based subscriptions, plus native in-app purchases for store-originated signups on iOS and Android.' },
  { mechanism: 'Lifecycle events', behaviour: 'Renewals, cancellations, refunds, and store receipts update subscription state, which immediately changes what the app will serve.' },
  { mechanism: 'Cost containment', behaviour: 'Model spend is bounded by the notification and generation cadence rather than by user-triggered volume, keeping unit economics predictable per subscriber.' },
];

const PLANS_TABLE: { plan: string; price: string; notes: string }[] = [
  { plan: 'Free trial', price: 'Free — 3 days', notes: 'Full entry experience before a paid plan is required.' },
  { plan: 'Monthly', price: '$15 / month', notes: 'Recurring monthly access to the complete feature set.' },
  { plan: 'Annual', price: '$150 / year', notes: 'Recurring yearly plan — a one-sixth discount against twelve monthly payments.' },
];

const NOTIFICATION_TABLE: { trigger: string; timing: string; content: string }[] = [
  { trigger: "Today's Flow", timing: 'Morning, daily', content: 'Key recommendations and task priorities for the day ahead.' },
  { trigger: 'Contextual alert', timing: 'Mid-day, conditional', content: 'Fires only on high workload, an energy dip, or a schedule mismatch.' },
  { trigger: 'Reflection prompt', timing: 'Evening, optional', content: 'Invites feedback on energy, mood, and focus to close the learning loop.' },
];

const SECURITY_TABLE: { domain: string; controls: string }[] = [
  { domain: 'Authentication', controls: 'JWT-based authentication with OAuth2 secures user sessions and API access.' },
  { domain: 'Consent-based access', controls: 'Calendar data is read only with explicit user consent, obtained through the official Google and Outlook authorisation flows.' },
  { domain: 'Encryption', controls: 'User data is encrypted in transit and at rest across secure APIs, following a privacy-first design.' },
  { domain: 'Anonymisation', controls: 'Phase 2 community features operate on anonymised data, so users can be grouped by cycle phase without exposing identities.' },
  { domain: 'Entitlement control', controls: 'Subscription state is resolved server-side on every request, so feature access cannot be altered from the client.' },
  { domain: 'Secrets & handover', controls: 'Secrets are held in environment variables with secure token handling and credential rotation before handover; hardcoded secrets are removed and repository access follows a least-privilege model.' },
  { domain: 'Activity records', controls: 'MongoDB retains interaction history and the subscription record keeps billing and access state, together forming a traceable record of activity and entitlement.' },
  { domain: 'Operational logging', controls: 'GCP Logging tracks AI performance, API latency, and notification delivery across the production system.' },
  { domain: 'Observable deployment', controls: 'Deployment runs on Docker via GCP Cloud Run with CI/CD through GitHub Actions, giving consistent and observable releases.' },
];

const DIFFERENTIATORS: { title: string; desc: string }[] = [
  { title: 'Cycle-aware, not cycle-blind', desc: "Guidance is built around the user's biological rhythm rather than a rigid one-size-fits-all system, aligning work with how the user is likely to feel on that specific day." },
  { title: 'Proactive, not a passive tracker', desc: 'Instead of logging data for the user to interpret, the system generates a daily plan of what to focus on, avoid, and postpone — and delivers it unprompted.' },
  { title: 'Reasoning, not bare suggestions', desc: 'The AI explains why, including how sustained workload patterns may drive burnout, so the user understands the recommendation rather than following it blindly.' },
  { title: 'Calendar-integrated intelligence', desc: "By reading the real schedule and combining it with cycle phase, advice is grounded in the user's actual commitments instead of generic wellness tips." },
  { title: 'A closed learning loop', desc: 'Daily feedback on energy, mood, and focus lets the system detect prediction mismatches, adjust in real time, and become more personalised the longer it is used.' },
  { title: 'Privacy-first community by design', desc: 'The Phase 2 community layer is architected around anonymised grouping, so connection never comes at the cost of exposing sensitive personal data.' },
];

const OUTCOMES_TABLE: { metric: string; definition: string; target: string }[] = [
  { metric: 'Trial-to-paid conversion', definition: 'Share of trial users who subscribe after the three-day trial.', target: 'Set at launch' },
  { metric: 'Daily active usage', definition: "Users opening Today's Flow each day.", target: 'Set at launch' },
  { metric: 'Notification engagement', definition: 'Open and action rate on daily and contextual alerts.', target: 'Set at launch' },
  { metric: 'Recommendation acceptance', definition: 'Share of AI suggestions users follow or keep.', target: 'Set at launch' },
  { metric: 'Feedback participation', definition: 'Users submitting energy, mood, and focus feedback.', target: 'Set at launch' },
  { metric: 'Prediction alignment', definition: 'Agreement between predicted phase and reported state.', target: 'Set per model' },
  { metric: 'Retention / churn', definition: 'Subscriber retention across billing periods.', target: 'Set per cohort' },
];

function RunningHeader() {
  return (
    <div className={styles.pageRunningHeader}>
      <span><strong>LHW</strong> · LEADING HER WAY</span>
      <span>PG-AGI ENTERPRISE CASE STUDY</span>
    </div>
  );
}

function FooterBar({ page }: { page: string }) {
  return (
    <div className={styles.pageFooterBar}>
      <span>{FOOTER_TITLE}</span>
      <strong>{page}</strong>
    </div>
  );
}

function DownArrow() {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" />
      <path d="M0 11L6 19L12 11H0Z" fill="currentColor" />
    </svg>
  );
}

function LoopArrowHead() {
  return (
    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
      <path d="M4.5 0L8.4 6.5H0.6L4.5 0Z" fill="currentColor" />
    </svg>
  );
}

function DiagramArrow({ caption }: { caption: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.diagramArrow} ${visible ? styles.diagramArrowVisible : ''}`}>
      <span className={styles.diagramArrowGlyph}><DownArrow /></span>
      <span className={styles.diagramArrowCaption}>{caption}</span>
    </div>
  );
}

function SectionHeader({ numeral, title, subtitle }: { numeral: string; title: string; subtitle: string }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionEyebrowRow}>
        <span className={styles.sectionNumeral}>{numeral}</span>
        <div className={styles.sectionTitleCol}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionSubtitle}>{subtitle}</p>
        </div>
      </div>
      <hr className={styles.sectionRule} />
    </div>
  );
}

export default function LeadingHerWayCaseStudy(_props: LeadingHerWayCaseStudyProps) {
  return (
    <div className={styles.lhwPage}>
      {/* ── Cover (page 1) ── */}
      <div className={`${styles.pageSheet} ${styles.coverSheet}`}>
        <div className={styles.coverBody}>
          <div className={styles.coverEyebrowRow}>
            <span>PG-AGI · Applied AI &amp; Platform Engineering</span>
            <span>Enterprise Case Study</span>
          </div>

          <h1 className={styles.coverWordmark}>
            LHW
            <span className={styles.coverWordmarkSub}>Leading Her Way</span>
          </h1>

          <hr className={styles.coverRule} />

          <h2 className={styles.coverTitle}>A Cycle-Aware AI Productivity Platform</h2>
          <p className={styles.coverLead}>
            Turning cycle data and a live calendar into a daily plan of what to do, what to avoid, and when —
            delivered through Today&apos;s Flow and a conversational AI coach.
          </p>
        </div>

        <div className={styles.coverStatBand}>
          <div className={styles.coverStatCell}>
            <span className={styles.coverStatValue}>iOS + Android</span>
            <span className={styles.coverStatLabel}>React Native App</span>
          </div>
          <div className={styles.coverStatCell}>
            <span className={styles.coverStatValue}>Gemini 3.1 Pro</span>
            <span className={styles.coverStatLabel}>Intelligence Layer</span>
          </div>
          <div className={styles.coverStatCell}>
            <span className={styles.coverStatValue}>2 Phases</span>
            <span className={styles.coverStatLabel}>Core, Then Community</span>
          </div>
          <div className={styles.coverStatCell}>
            <span className={styles.coverStatValue}>3-day trial</span>
            <span className={styles.coverStatLabel}>Then Subscription</span>
          </div>
        </div>

        <div className={styles.coverFooterStrip}>
          <div className={styles.coverFooterCol}>
            <span>PG-AGI · APPLIED AI &amp; PLATFORM ENGINEERING</span>
            <span>Tech37, Electronic City Phase 2, Bengaluru</span>
          </div>
          <div className={`${styles.coverFooterCol} ${styles.coverFooterColRight}`}>
            <span>ENTERPRISE CASE STUDY</span>
            <span>MOBILE + AI · CONSUMER HEALTH &amp; PRODUCTIVITY</span>
          </div>
        </div>
      </div>

      {/* ── Index (page 2 · 01) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <h2 className={styles.docTitle}>Index</h2>
          <hr className={styles.docRule} />

          <div className={styles.indexList}>
            {INDEX_ITEMS.map((item) => (
              <div key={item.num} className={styles.indexRow}>
                <span className={styles.indexNum}>{item.num}</span>
                <div className={styles.indexContent}>
                  <span className={styles.indexTitle}>{item.title}</span>
                  <span className={styles.indexDetail}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.calloutBox} style={{ marginTop: '28px' }}>
            <span className={styles.calloutBoxLabel}>In One Line</span>
            LHW is not a cycle tracker with productivity features bolted on. It is a productivity system that
            treats the menstrual cycle as a first-class scheduling input.
          </div>
        </div>
        <FooterBar page="01" />
      </div>

      {/* ── I What We Built (page 3 · 02) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader numeral="I" title="What We Built" subtitle="Product definition and delivery scope" />

          <p className={styles.sectionParagraph}>
            LHW (Leading Her Way) is an intelligent, cycle-aware productivity platform that helps women align
            their work and decisions with their biological rhythms instead of forcing themselves through
            rigid, uniform systems. It moves beyond simple cycle tracking to act as a proactive AI assistant
            that guides the user every day on what to focus on, what to avoid, and how to optimise both
            output and wellbeing.
          </p>

          <p className={styles.sectionParagraph}>
            The product is a React Native mobile application for iOS and Android, backed by a scalable
            Python FastAPI and MongoDB service layer. At its core, an AI intelligence layer powered by
            Gemini 3.1 Pro generates personalised daily recommendations, adapts to user feedback, and
            continuously learns each user&apos;s behavioural patterns over time.
          </p>

          <p className={styles.sectionParagraph}>
            A defining capability is calendar integration. With explicit consent, the platform reads the
            user&apos;s Google Calendar or Microsoft Outlook schedule, combines it with the current cycle
            phase, and intelligently suggests which tasks to prioritise, postpone, or adjust — while
            explaining how sustained workload patterns may affect energy levels and hormonal balance over
            time.
          </p>

          <h3 className={styles.plainHeading}>The gap this closes</h3>
          <p className={styles.sectionParagraph}>
            Two mature product categories exist on either side of this user, and neither serves her.
            Productivity tools are cycle-blind: they assume constant capacity across every day of the month.
            Cycle apps are productivity-blind: they log and predict, then leave interpretation entirely to
            the user. LHW occupies the space between the two — it converts biological state into an
            operational decision about the working day.
          </p>

          <h3 className={styles.plainHeading}>Delivered in two phases</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '240px' }}>Phase</th>
                  <th>Scope</th>
                </tr>
              </thead>
              <tbody>
                {PHASE_TABLE.map((row) => (
                  <tr key={row.phase}>
                    <td className={styles.rowLabelCol}>{row.phase}</td>
                    <td>{row.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.calloutBox}>
            <span className={styles.calloutBoxLabel}>Design Principle</span>
            Every recommendation the system makes must be explainable to the user. Guidance without
            reasoning is indistinguishable from a horoscope.
          </div>
        </div>
        <FooterBar page="02" />
      </div>

      {/* ── II Core Architecture (page 4 · 03) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader numeral="II" title="Core Architecture" subtitle="Layered system design and data flow" />

          <p className={styles.sectionParagraph}>
            The platform uses a modular, layered architecture that cleanly separates responsibilities across
            the mobile frontend, the backend orchestration layer, the AI intelligence layer, external
            integrations, and data storage. This keeps the Phase 1 build focused and efficient while leaving
            the system extensible enough to grow into community syncing, deeper behavioural analytics, and
            predictive health insight.
          </p>

          <div className={styles.diagramBlock}>
            <div className={styles.diagramLoopScope}>
              <div className={styles.diagramLayer}>
                <div className={styles.diagramLayerLabel}>Client Layer — React Native (iOS · Android)</div>
                <div className={styles.diagramLayerBoxes}>
                  <div className={styles.diagramBox}>Onboarding &amp; profile</div>
                  <div className={`${styles.diagramBox} ${styles.diagramBoxRed}`}>Today&apos;s Flow dashboard</div>
                  <div className={`${styles.diagramBox} ${styles.diagramBoxRed}`}>AI coach chat</div>
                  <div className={styles.diagramBox}>Subscription &amp; billing UI</div>
                </div>
              </div>
              <DiagramArrow caption="HTTPS · JWT session" />

              <div className={styles.diagramLayer}>
                <div className={styles.diagramLayerLabel}>Orchestration Layer — Python FastAPI</div>
                <div className={styles.diagramLayerBoxes}>
                  <div className={styles.diagramBox}>Auth JWT / OAuth2</div>
                  <div className={styles.diagramBox}>Cycle phase engine</div>
                  <div className={styles.diagramBox}>Calendar workload analysis</div>
                  <div className={styles.diagramBox}>AI orchestration</div>
                  <div className={styles.diagramBox}>Notification scheduler</div>
                  <div className={styles.diagramBox}>Entitlement &amp; billing</div>
                </div>
              </div>
              <DiagramArrow caption="assembled context" />

              <div className={styles.diagramLayer}>
                <div className={styles.diagramLayerLabel}>Intelligence Layer</div>
                <div className={styles.diagramLayerBoxes}>
                  <div className={`${styles.diagramBox} ${styles.diagramBoxRed}`}>Gemini 3.1 Pro — reasoning &amp; daily recommendations</div>
                  <div className={`${styles.diagramBox} ${styles.diagramBoxRed}`}>AI memory store — learned patterns &amp; history</div>
                </div>
              </div>

              <div className={styles.diagramLoopRail}>
                <span className={styles.diagramLoopArrowHead}><LoopArrowHead /></span>
                <span className={styles.diagramLoopLabel}>personalisation loop</span>
              </div>
            </div>
            <DiagramArrow caption="persist & learn" />

            <div className={styles.diagramLayer}>
              <div className={styles.diagramLayerLabel}>Data &amp; Integration Layer</div>
              <div className={styles.diagramLayerBoxes}>
                <div className={styles.diagramBox}>MongoDB profiles · cycles · history</div>
                <div className={styles.diagramBox}>Google Calendar / Outlook API</div>
                <div className={styles.diagramBox}>Firebase Cloud Messaging</div>
                <div className={styles.diagramBox}>Stripe + in-app purchases</div>
              </div>
            </div>
            <DiagramArrow caption="deployed on" />

            <div className={styles.diagramLayer}>
              <div className={styles.diagramLayerLabel}>Platform Layer</div>
              <div className={styles.diagramLayerBoxes}>
                <div className={styles.diagramBox}>Docker on GCP Cloud Run</div>
                <div className={styles.diagramBox}>GitHub Actions CI / CD</div>
                <div className={styles.diagramBox}>GCP Logging &amp; observability</div>
              </div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 1</strong> — LHW platform architecture. Cycle data, calendar workload, and daily
            feedback flow through FastAPI orchestration into the Gemini intelligence layer, and return to the
            client as Today&apos;s Flow. The dashed path is the personalisation loop.
          </p>
        </div>
        <FooterBar page="03" />
      </div>

      {/* ── Technology stack + How a day is assembled + Scalability (page 5 · 04) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <h3 className={styles.plainHeading} style={{ marginTop: '8px' }}>Technology stack by layer</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '140px' }}>Layer</th>
                  <th style={{ width: '220px' }}>Technology</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {TECH_STACK_TABLE.map((row) => (
                  <tr key={row.layer}>
                    <td className={styles.rowLabelCol}>{row.layer}</td>
                    <td>{row.tech}</td>
                    <td>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.plainHeading}>How a day is assembled</h3>
          <p className={styles.sectionParagraph}>
            The orchestration layer is deliberately thin on intelligence and heavy on context preparation.
            Before the model is called, FastAPI resolves the user&apos;s current cycle phase, pulls the
            consented calendar window, retrieves prior feedback and learned patterns from the memory store,
            and assembles a single structured context. The model reasons over that context rather than over
            raw records, which keeps output stable and grounded in the user&apos;s actual commitments.
          </p>
          <p className={styles.sectionParagraph}>
            Because the memory store sits alongside the model rather than inside it, personalisation
            persists independently of the model version. The system can be re-pointed at a newer model
            without losing what it has learned about the individual user.
          </p>

          <h3 className={styles.plainHeading}>Scalability posture</h3>
          <p className={styles.sectionParagraph}>
            The FastAPI service layer is stateless: all user state lives in MongoDB and the memory store, so
            instances can be added or replaced without session loss. Running as containers on GCP Cloud Run
            means capacity follows request volume rather than being provisioned in advance, and GitHub
            Actions gives a repeatable path from commit to running revision.
          </p>
          <p className={styles.sectionParagraph}>
            Generation load is bounded by cadence rather than by user behaviour. Because the daily plan is
            produced on a schedule and the notification budget is capped at one to two sends, the heaviest
            component of platform cost scales linearly with subscribers and stays predictable under growth.
          </p>
        </div>
        <FooterBar page="04" />
      </div>

      {/* ── III Credit System & Monetisation (page 6 · 05) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader numeral="III" title="Credit System &amp; Monetisation" subtitle="Entitlement model, tiers, and trial gating" />

          <p className={styles.sectionParagraph}>
            LHW does not operate a consumable credit currency. Because the platform delivers one bounded,
            predictable unit of value per day — a daily plan plus conversational access — metering
            individual AI calls would add billing friction without improving fairness or margin control. The
            commercial model is therefore a subscription entitlement: a single access flag, checked
            server-side, that governs the full feature set.
          </p>

          <h3 className={styles.plainHeading}>Entitlement model</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '190px' }}>Mechanism</th>
                  <th>Behaviour</th>
                </tr>
              </thead>
              <tbody>
                {ENTITLEMENT_TABLE.map((row) => (
                  <tr key={row.mechanism}>
                    <td className={styles.rowLabelCol}>{row.mechanism}</td>
                    <td>{row.behaviour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.plainHeading}>Published plans</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '150px' }}>Plan</th>
                  <th style={{ width: '150px' }}>Price</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {PLANS_TABLE.map((row) => (
                  <tr key={row.plan}>
                    <td className={styles.rowLabelCol}>{row.plan}</td>
                    <td>{row.price}</td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.calloutBox}>
            <span className={styles.calloutBoxLabel}>Why A Flag And Not A Ledger</span>
            Consumable credits make sense when value is bursty and expensive. LHW&apos;s value arrives once a
            day, every day — so the unit of sale is the day, not the request.
          </div>
        </div>
        <FooterBar page="05" />
      </div>

      {/* ── IV User-Facing Features (page 7 · 06) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader numeral="IV" title="User-Facing Features" subtitle="Daily experience, calendar intelligence, notifications" />

          <h3 className={styles.plainHeading} style={{ marginTop: '8px' }}>Daily experience</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}><strong>Onboarding.</strong> The user enters cycle data, goals, and preferences, then connects a calendar through a guided first-run flow.</li>
            <li className={styles.bulletItem}><strong>Today&apos;s Flow.</strong> A daily dashboard showing the current cycle phase, recommended tasks framed as Do / Avoid / Optimize, energy insight, and calendar-aware suggestions.</li>
            <li className={styles.bulletItem}><strong>Conversational AI coach.</strong> The user can ask what to prioritise, when to schedule a task, or why they feel a certain way, and receives contextual answers with the reasoning behind each recommendation.</li>
            <li className={styles.bulletItem}><strong>Feedback capture.</strong> Quick energy, mood, and focus inputs let the system detect mismatches between the predicted phase and how the user actually feels.</li>
          </ul>

          <div className={styles.pipelineFlow}>
            <div className={styles.pipelineChip}>
              <span className={styles.pipelineChipTitle}>Cycle phase</span>
              <span className={styles.pipelineChipCaption}>predicted day &amp; phase</span>
            </div>
            <div className={styles.pipelineChip}>
              <span className={styles.pipelineChipTitle}>Calendar workload</span>
              <span className={styles.pipelineChipCaption}>Google / Outlook events</span>
            </div>
            <div className={styles.pipelineChip}>
              <span className={styles.pipelineChipTitle}>Daily feedback</span>
              <span className={styles.pipelineChipCaption}>energy · mood · focus</span>
            </div>
            <span className={styles.pipelineChevron}>›</span>
            <div className={styles.pipelineChip}>
              <span className={styles.pipelineChipTitle}>Context assembly</span>
              <span className={styles.pipelineChipCaption}>cycle + schedule + history</span>
            </div>
            <span className={styles.pipelineChevron}>›</span>
            <div className={`${styles.pipelineChip} ${styles.pipelineChipHighlight}`}>
              <span className={styles.pipelineChipTitle}>Gemini 3.1 Pro</span>
              <span className={styles.pipelineChipCaption}>reasoning over the day</span>
            </div>
            <span className={styles.pipelineChevron}>›</span>
            <div className={`${styles.pipelineChip} ${styles.pipelineChipHighlight}`}>
              <span className={styles.pipelineChipTitle}>Do · Avoid · Optimize</span>
              <span className={styles.pipelineChipCaption}>Today&apos;s Flow + 1 notification</span>
            </div>
          </div>
          <p className={styles.pipelineLoopNote}>
            evening reflection re-enters the model — mismatch detection &amp; re-personalisation
          </p>

          <p className={styles.figureCaption}>
            <strong>Figure 2</strong> — Today&apos;s Flow pipeline. Cycle phase, calendar workload, and daily
            feedback are assembled into a single context, reasoned over by the model, and returned as Do /
            Avoid / Optimize guidance with a single morning notification.
          </p>
        </div>
        <FooterBar page="06" />
      </div>

      {/* ── Calendar intelligence + Notifications + Phase 2 (page 8 · 07) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <h3 className={styles.plainHeading} style={{ marginTop: '8px' }}>Calendar intelligence</h3>
          <p className={styles.sectionParagraph}>
            The user securely connects Google Calendar or Outlook to bring real schedule data into the daily
            analysis. The platform combines workload with cycle phase to suggest what to prioritise,
            postpone, or adjust, and explains the potential burnout risk arising from sustained high workload
            rather than simply flagging a busy day.
          </p>

          <h3 className={styles.plainHeading}>Notification strategy</h3>
          <p className={styles.sectionParagraph}>
            Notifications are deliberately restrained to one or two per day. Engagement in this category is
            won by being trusted, not by being frequent; a cycle-aware assistant that nags undermines its own
            premise.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '170px' }}>Trigger</th>
                  <th style={{ width: '190px' }}>Timing</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                {NOTIFICATION_TABLE.map((row) => (
                  <tr key={row.trigger}>
                    <td className={styles.rowLabelCol}>{row.trigger}</td>
                    <td>{row.timing}</td>
                    <td>{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.plainHeading}>Phase 2 — Community Syncing</h3>
          <p className={styles.sectionParagraph}>
            The planned community layer connects users who are in similar cycle phases, so that shared
            experience becomes available without exposing identity. It is architected on anonymised grouping
            from the outset rather than retrofitted onto identified profiles, alongside an admin panel and
            baseline analytics.
          </p>
        </div>
        <FooterBar page="07" />
      </div>

      {/* ── V Security & Auditability (page 9 · 08) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader numeral="V" title="Security &amp; Auditability" subtitle="Controls across identity, consent, data, and operations" />

          <p className={styles.sectionParagraph}>
            The platform handles two of the most sensitive data classes a consumer app can hold: reproductive
            health data and a complete professional calendar. The control set is built around that reality —
            consent is explicit, access is least-privilege, and every layer assumes the data must never be
            casually readable.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Domain</th>
                  <th>Controls</th>
                </tr>
              </thead>
              <tbody>
                {SECURITY_TABLE.map((row) => (
                  <tr key={row.domain}>
                    <td className={styles.rowLabelCol}>{row.domain}</td>
                    <td>{row.controls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.calloutBox}>
            <span className={styles.calloutBoxLabel}>Auditability Posture</span>
            Interaction history, billing state, and operational logs are separable records. Any question
            about what a user was shown, what they were entitled to, and whether the system delivered it can
            be answered from stored evidence.
          </div>
        </div>
        <FooterBar page="08" />
      </div>

      {/* ── VI What Makes This Different (page 10 · 09) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader numeral="VI" title="What Makes This Different" subtitle="Six structural differentiators" />

          <p className={styles.sectionParagraph}>
            Most productivity apps are cycle-blind, and most cycle apps stop at tracking. LHW sits
            deliberately between the two, and the differences are structural rather than cosmetic.
          </p>

          <div className={styles.decisionList}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} className={styles.decisionItem}>
                <span className={styles.decisionNum}>{String(i + 1).padStart(2, '0')}</span>
                <h4 className={styles.decisionTitle}>{d.title}</h4>
                <p className={styles.decisionDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <FooterBar page="09" />
      </div>

      {/* ── VII Outcomes (page 11 · 10) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader numeral="VII" title="Outcomes" subtitle="Measurement framework and instrumented KPI set" />

          <p className={styles.sectionParagraph}>
            The platform ships instrumented against a defined KPI set rather than against retrospective
            narrative. Targets are established at launch and per cohort, and results are populated from
            production analytics as the subscriber base matures — the framework below is the measurement
            contract, not a claim of achieved performance.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '210px' }}>Metric</th>
                  <th>Definition</th>
                  <th style={{ width: '150px' }}>Target</th>
                  <th style={{ width: '120px' }}>Measured Result</th>
                </tr>
              </thead>
              <tbody>
                {OUTCOMES_TABLE.map((row) => (
                  <tr key={row.metric}>
                    <td className={styles.rowLabelCol}>{row.metric}</td>
                    <td>{row.definition}</td>
                    <td>{row.target}</td>
                    <td>—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.plainHeading}>What the framework is designed to prove</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}><strong>That the guidance is trusted.</strong> Recommendation acceptance and notification engagement together separate a product being read from a product being followed.</li>
            <li className={styles.bulletItem}><strong>That the model is honest.</strong> Prediction alignment measures the system against the user&apos;s reported reality, which is the only ground truth available in this category.</li>
            <li className={styles.bulletItem}><strong>That the value compounds.</strong> Retention across billing periods is the test of whether the learning loop is actually making the product better for the individual over time.</li>
          </ul>
        </div>
        <FooterBar page="10" />
      </div>
    </div>
  );
}
