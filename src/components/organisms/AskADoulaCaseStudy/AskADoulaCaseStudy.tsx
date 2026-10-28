'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/organisms/AskADoulaCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface AskADoulaCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const IMG = '/case-studies/Ask-a-Doula-Images/Ask-a-Doula-Images';

type Shot = { src: string; title: string; caption: string };

// Screenshots were captured on Android. IPhone crops the Android status bar
// off the top of the image and draws an iOS one (time, Dynamic Island,
// signal / Wi-Fi / battery) on the app's cream background instead.
function IPhone({ src, alt, priority, bg = '#F5EEDC' }: { src: string; alt: string; priority?: boolean; bg?: string }) {
  return (
    <div className={styles.iphone}>
      <div className={styles.screen} style={{ background: bg }}>
        <div className={styles.statusBar} aria-hidden="true">
          <span className={styles.statusTime}>9:41</span>
          <span className={styles.island} />
          <span className={styles.statusIcons}>
            <svg viewBox="0 0 18 12" className={styles.statusSignal}>
              <rect x="0" y="8" width="3" height="4" rx="1" />
              <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
              <rect x="10" y="3" width="3" height="9" rx="1" />
              <rect x="15" y="0" width="3" height="12" rx="1" />
            </svg>
            <svg viewBox="0 0 16 12" className={styles.statusWifi}>
              <path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.3-1.4A10.6 10.6 0 0 0 8 .3 10.6 10.6 0 0 0 .7 3.2L2 4.6a8.6 8.6 0 0 1 6-2.4Zm0 3.8c1.3 0 2.5.5 3.4 1.3l1.3-1.4A6.9 6.9 0 0 0 8 4.1a6.9 6.9 0 0 0-4.7 1.8l1.3 1.4C5.5 6.5 6.7 6 8 6Zm0 3.7a1.4 1.4 0 0 0-1 .4L8 11.7l1-1.6a1.4 1.4 0 0 0-1-.4Z" />
            </svg>
            <svg viewBox="0 0 27 13" className={styles.statusBattery}>
              <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity="0.4" />
              <rect x="2" y="2" width="20" height="9" rx="2" />
              <path d="M25 4.5v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2Z" opacity="0.4" />
            </svg>
          </span>
        </div>
        <div className={styles.screenCrop}>
          <Image src={src} alt={alt} width={720} height={1600} priority={priority} className={styles.phoneImg} />
        </div>
      </div>
    </div>
  );
}

// Portrait phone screenshots (720x1600), laid out side by side with a blue
// title + grey caption underneath, as in the PDF.
function PhoneRow({ shots }: { shots: Shot[] }) {
  return (
    <div className={`${styles.phoneRow} ${shots.length === 1 ? styles.phoneRowSingle : ''}`}>
      {shots.map((s) => (
        <figure key={s.src} className={styles.phoneFigure}>
          <IPhone src={`${IMG}/${s.src}`} alt={`${s.title} — ${s.caption}`} />
          <figcaption className={styles.figCaption}>
            <span className={styles.figTitle}>{s.title}</span>
            <span className={styles.figText}>{s.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function SectionHead({ num, title, kicker }: { num: string; title: string; kicker: string }) {
  return (
    <>
      <h2 className={styles.sectionHeading}>
        <span className={styles.sectionNum}>{Number(num)}</span>
        {title}
      </h2>
      <span className={styles.eyebrow}>Section {num} / Ask a Doula</span>
      <h3 className={styles.kicker}>{kicker}</h3>
    </>
  );
}

export default function AskADoulaCaseStudy({ caseStudy }: AskADoulaCaseStudyProps) {
  return (
    <div className={styles.doulaPage}>
      {/* ── 1. Hero Section ── */}
      <section className={styles.heroSection}>
        <div className={styles.rail}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.heroEyebrow}>Case Study</span>
              <h1 className={styles.heroTitle}>Ask a Doula</h1>
              <p className={styles.heroSubtitle}>AI-powered pregnancy, postpartum &amp; baby-care companion</p>

              <p className={styles.heroDesc}>
                A mobile-first, AI-powered parenting companion that puts a doula in every new parent&apos;s pocket. It streams child-aware answers from pregnancy through the first year, and a deterministic safety layer surfaces crisis resources the moment a parent needs them. Alongside the chat sit five-area baby-care tracking with trend charts and daily wellness check-ins. Family sharing lets a partner, grandparent or nanny help care for the child under the parent&apos;s plan.
              </p>

              <div className={styles.heroPillGrid}>
                <span className={styles.pill}>AI doula guidance</span>
                <span className={styles.pill}>Safety-first answers</span>
                <span className={styles.pill}>Baby-care tracking</span>
                <span className={styles.pill}>Family sharing</span>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroPhone}>
                <IPhone
                  src={`${IMG}/01_Splash_Screen.jpg`}
                  alt="Ask a Doula splash screen — Trusted answers for every parenting question"
                  priority
                  bg="#F7E6CC"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Quick Meta Facts Bar ── */}
      <div className={styles.metaRail}>
        <div className={styles.rail}>
          <div className={styles.metaTable}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Platforms</span>
              <span className={styles.metaValue}>iOS · Android · Web</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>HealthTech · AI · Consumer Parenting</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Stack</span>
              <span className={styles.metaValue}>FastAPI (Python) · PostgreSQL + pgvector · Google Gemini (Vertex AI) · React Native (Expo) · Next.js (Web) · Google Cloud Run · Stripe + RevenueCat</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Scope</span>
              <span className={styles.metaValue}>Mobile app · Web app · Backend APIs · AI doula &amp; safety engine · Subscriptions &amp; credits · Admin analytics &amp; moderation</span>
            </div>
          </div>

          <div className={`${styles.statsRow} ${styles.statsRowThree}`}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>5</span>
              <span className={styles.statLabel}>Baby-care areas tracked</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>4</span>
              <span className={styles.statLabel}>Parenting stages supported</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>24/7</span>
              <span className={styles.statLabel}>AI doula support</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rail}>
        {/* ── 3. Contents ── */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>Contents</h2>
          <span className={styles.eyebrow}>From 2 a.m. questions to trusted, personal answers</span>

          <div className={styles.tableOuter}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Section</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={styles.firstCell}><a href="#what-we-built" className={styles.tocLink}>01 What We Built</a></td></tr>
                <tr><td className={styles.firstCell}><a href="#core-architecture" className={styles.tocLink}>02 Core Architecture</a></td></tr>
                <tr><td className={styles.firstCell}><a href="#baby-care-tracking" className={styles.tocLink}>03 Baby-Care Tracking &amp; Trends</a></td></tr>
                <tr><td className={styles.firstCell}><a href="#product-walkthrough" className={styles.tocLink}>04 Product Walkthrough</a></td></tr>
                <tr><td className={styles.firstCell}><a href="#ai-doula-safety" className={styles.tocLink}>05 The AI Doula &amp; Safety Layer</a></td></tr>
                <tr><td className={styles.firstCell}><a href="#plans-credits-family" className={styles.tocLink}>06 Plans, Credits &amp; Family Sharing</a></td></tr>
                <tr><td className={styles.firstCell}><a href="#security-privacy" className={styles.tocLink}>07 Security, Privacy &amp; Reliability</a></td></tr>
              </tbody>
            </table>
          </div>

          <PhoneRow
            shots={[
              { src: '02_Login_Welcome_Screen.jpg', title: 'Entry Surface', caption: 'Welcome and sign-up' },
              { src: '03_Ask_a_Doula_Chat_Answer.jpg', title: 'Ask a Doula', caption: 'Streaming, child-aware answers' },
              { src: '04_Child_Care_Todays_Overview.jpg', title: 'Child Care', caption: 'Today’s overview and quick logging' },
            ]}
          />
        </section>

        {/* ── 4. What We Built ── */}
        <section id="what-we-built" className={styles.sectionBlock}>
          <SectionHead num="01" title="What We Built" kicker="A companion that knows the parent, the baby and the stage they’re in." />

          <p className={styles.sectionParagraph}>
            Ask a Doula is a mobile-first, AI-powered support platform for expecting and new parents. It gives them one trusted place to turn when parenting questions arise, instead of bouncing between search engines, forums and conflicting advice. It combines a conversational AI doula, guided baby-care tracking, daily wellness content and family sharing in a single app on iOS and Android, with a companion web app.
          </p>
          <p className={styles.sectionParagraph}>
            Every answer is grounded in the parent’s context: pregnancy or postpartum stage, due date or the baby’s exact age, feeding and birth method, allergies, medical conditions and the latest logged feeds, diapers, sleep and symptoms. A deterministic safety layer runs alongside the AI, so crisis and emergency resources appear immediately, without depending on the model.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>5</span>
              <span className={styles.statLabel}>Baby-care areas — feeding, diaper, sleep, symptoms, pumping</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>11</span>
              <span className={styles.statLabel}>Trend charts across 7, 14 and 30 days</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>4</span>
              <span className={styles.statLabel}>Stages — pregnancy to 12 months</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>2</span>
              <span className={styles.statLabel}>Roles — parent and invited caregiver</span>
            </div>
          </div>

          <h4 className={styles.subHeading}>Core user value</h4>
          <div className={styles.tableOuter}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Value</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.firstCell}>Personalized AI doula</td>
                  <td>Streams warm, plain-language answers scoped to the selected child’s age, profile and recent logs, with a choice of Compact or Detailed responses.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Safety-first guidance</td>
                  <td>Warning signs come first in every answer (“Call now or seek immediate care” / “Call your provider soon”), and crisis language triggers tap-to-call support resources.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Baby-care tracking</td>
                  <td>Guided logging for feeds, diapers, sleep, symptoms and pumping, with live timers, a Today’s Snapshot view and trend charts.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Family sharing</td>
                  <td>Parents invite a partner, grandparent or nanny, choose which children to share, and decide whether that person can chat with the AI doula.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Daily wellness</td>
                  <td>A daily baby insight, a self-care tip, child-specific popular questions and a mood check-in, tuned to the parent’s stage.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className={styles.subHeading}>Care areas</h4>
          <ul className={styles.bulletList}>
            <li>Ask a Doula — AI chat with photo and document understanding</li>
            <li>Feeding — breast (left/right timer), bottle, formula</li>
            <li>Diaper — wet, stool, texture and colour</li>
            <li>Sleep — naps and nights, across midnight</li>
            <li>Symptoms — 7 symptom types × 3 severities</li>
            <li>Pumping — per-side sessions and output</li>
            <li>Learn — expert-backed guides, filtered by topic</li>
          </ul>

          <figure className={styles.wideFigure}>
            <div className={styles.wideFrame}>
              <Image
                src={`${IMG}/05_Web_App_Home_Dashboard.png`}
                alt="Ask a Doula web app home dashboard"
                width={2048}
                height={1015}
                className={styles.wideImg}
              />
            </div>
            <figcaption className={styles.figCaption}>
              <span className={styles.figTitle}>Ask a Doula</span>
              <span className={styles.figText}>Brand and web experience</span>
            </figcaption>
          </figure>

          <PhoneRow
            shots={[
              { src: '06_Today_Snapshot_and_Insight.jpg', title: 'Inside the Day', caption: 'Last feed, diaper, sleep and symptoms at a glance' },
            ]}
          />
        </section>

        {/* ── 5. Core Architecture ── */}
        <section id="core-architecture" className={styles.sectionBlock}>
          <SectionHead num="02" title="Core Architecture" kicker="A layered architecture built around the family’s day." />

          <p className={styles.sectionParagraph}>
            The platform separates identity, family access, child data, AI, safety, billing and analytics into independent service layers, so each concern can change without touching the rest. One FastAPI backend serves the native app and the web app, and both front ends share the same role, child-scope and credit rules.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Responsibility</th>
                  <th>Technology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.firstCell}>Presentation (App + Web)</td>
                  <td>Onboarding, home dashboard, AI chat, baby-care logging and trends, family and billing management</td>
                  <td>React Native (Expo), Next.js (React)</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Auth &amp; Access</td>
                  <td>Email + OTP, Google and Apple sign-in, sessions, single-device enforcement, parent vs caregiver roles, per-child grants</td>
                  <td>FastAPI, JWT, bcrypt</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Family &amp; Child Data</td>
                  <td>Child profiles, family invitations, baby logs, live feeding/pumping timers, snapshots and statistics</td>
                  <td>FastAPI, PostgreSQL</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>AI Doula Intelligence</td>
                  <td>Child-aware prompting, streaming answers, conversation memory and summaries, document and photo understanding, daily insights</td>
                  <td>Google Gemini (Vertex AI), SSE</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Safety &amp; Moderation</td>
                  <td>Crisis and medical-emergency detection, emotional context tracking, crisis resources, admin moderation queue</td>
                  <td>Rule-based safety engine, PostgreSQL</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Knowledge Base</td>
                  <td>Document ingestion, OCR, chunking, embeddings and stage-aware semantic retrieval over admin-approved sources</td>
                  <td>Vertex embeddings, pgvector</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Subscriptions &amp; Credits</td>
                  <td>Plans, trials, top-ups, per-token credit metering, cross-store entitlement sync</td>
                  <td>Stripe (web), RevenueCat (iOS/Android)</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Infrastructure</td>
                  <td>Containerised services, background jobs, schedulers, file storage, CI/CD</td>
                  <td>Google Cloud Run, Cloud Tasks, Cloud Scheduler, Cloud Storage, Cloud SQL, GitHub Actions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 6. Baby-Care Tracking & Trends ── */}
        <section id="baby-care-tracking" className={styles.sectionBlock}>
          <SectionHead num="03" title="Baby-Care Tracking & Trends" kicker="One logging engine, five care areas." />

          <p className={styles.sectionParagraph}>
            Each care area is a guided, step-by-step logging flow that takes seconds one-handed. Every flow writes to the same child-scoped timeline, which feeds Today’s Snapshot, the history list, the trend charts and the AI doula’s context. After a log is saved, the parent can jump straight into a conversation about it.
          </p>

          <ul className={styles.bulletList}>
            <li><strong>Feeding</strong> — Breastfeeding with a live left/right timer (pause, resume, switch side) or manual entry; bottle feeds in oz or mL across six milk types, including pumped, previously frozen and ready-to-feed.</li>
            <li><strong>Diaper</strong> — Wet, stool or both, with stool texture and colour swatches, date, time and notes.</li>
            <li><strong>Sleep</strong> — Naps and night sleep with start and end times that cross midnight.</li>
            <li><strong>Symptoms</strong> — Fever, cough, congestion, rash, diarrhea, vomiting or other, each rated mild, moderate or severe.</li>
            <li><strong>Pumping</strong> — Session timer, then per-side output in oz or mL.</li>
            <li><strong>Entries &amp; history</strong> — Day-grouped history (“Today”, “Yesterday”…) with infinite scroll, plus edit and delete through bottom sheets.</li>
            <li><strong>Trends</strong> — 11 chart cards over 7, 14 or 30 days: feeds per day, left/right nursing balance, changes and stool, night vs nap sleep and a sleep timeline, pumped volume, symptom calendar and most common symptoms.</li>
          </ul>

          <h4 className={styles.subHeading}>Logging flow</h4>
          <div className={styles.flowBar}>
            Quick Action → Guided log → Today’s Snapshot → Trends (7D / 14D / 30D) → Ask a Doula with full context
          </div>

          <PhoneRow
            shots={[
              { src: '07_Breastfeeding_Timer.jpg', title: 'Feeding', caption: 'Live left and right side timer' },
              { src: '08_Feeding_Logs_History.jpg', title: 'History', caption: 'Day-grouped entries with edit and delete' },
            ]}
          />
        </section>

        {/* ── 7. Product Walkthrough ── */}
        <section id="product-walkthrough" className={styles.sectionBlock}>
          <SectionHead num="04" title="Product Walkthrough" kicker="A calm home base, a child-care hub, and a curated library." />

          <p className={styles.sectionParagraph}>
            Home is the parent’s daily base. It opens with a greeting by time of day, a child switcher and a direct “Ask a Doula Now” entry, followed by Today’s Snapshot and daily content written for this child and this stage. The Child Care tab brings every log type together with one-tap Quick Actions, and Learn offers expert-backed guides filtered by topic.
          </p>

          <PhoneRow
            shots={[
              { src: '09_Home_Screen.jpg', title: 'Home', caption: 'Greeting, snapshot and a direct line to the doula' },
              { src: '04_Child_Care_Todays_Overview.jpg', title: 'Child Care', caption: 'Five quick actions and today’s overview' },
              { src: '10_Learn_Library.jpg', title: 'Learn', caption: 'Expert-backed guides, filtered by topic' },
            ]}
          />

          <div className={styles.tableOuter}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Surface</th>
                  <th>Delivered capability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.firstCell}>Home Dashboard</td>
                  <td>Today’s Snapshot (last feed, diaper, sleep, symptoms) with sync status, a daily Personalized Insight, a mood check-in, a daily Self-Care Tip, and child-specific Popular Questions that open the chat pre-filled.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Child Care</td>
                  <td>Today’s Overview across all five care areas, five Quick Actions, and a symptoms shortcut into the AI doula.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Learn Library</td>
                  <td>Admin-curated articles with multi-tag filtering, source and date on every card, opened in an in-app browser.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Check-ins &amp; Settings</td>
                  <td>Gentle morning and evening check-ins personalised with the baby’s name and age, written to invite, never scold (no streaks, no “you missed”); response style, notifications, child profiles and family settings.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 8. The AI Doula & Safety Layer ── */}
        <section id="ai-doula-safety" className={styles.sectionBlock}>
          <SectionHead num="05" title="The AI Doula & Safety Layer" kicker="A doula that knows the baby, and a safety net that never waits on the model." />

          <p className={styles.sectionParagraph}>
            The <strong>AI Doula</strong> is a conversational assistant reachable from its own tab, from Home, from Popular Questions and from every log summary. Answers stream in real time and are scoped to the selected child: the prompt carries the parent’s stage, the baby’s exact age, prematurity, feeding and birth method, allergies, conditions, and the latest feeds, diapers, sleep and symptoms with seven-day statistics. Parents can attach photos and documents, such as discharge summaries, prescriptions or growth charts. The doula summarises each one, explains key points and flags anything urgent. Conversations keep progressive summaries, so long threads stay coherent.
          </p>

          <PhoneRow
            shots={[
              { src: '11_New_Conversation.jpg', title: 'New Conversation', caption: 'Starter prompts by role and stage' },
              { src: '12_Conversation_History.jpg', title: 'Ask a Doula Tab', caption: 'Browsable conversation history' },
            ]}
          />

          <h4 className={styles.subHeading}>The safety layer — deterministic before generative</h4>
          <p className={styles.sectionParagraph}>
            Safety checks run on every message <em>before</em> the model replies, using a rule-based engine tuned for postpartum language. It understands negation (“I don’t want to hurt myself”) and third-party mentions, so it neither misses a real crisis nor alarms a parent who is only asking a question. Every real crisis is also logged as a critical item in the admin moderation queue for human review.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>What happens</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.firstCell}>Self-harm or harm to baby</td>
                  <td>An immediate in-chat support card (“You’re not alone”) lists maternal mental-health and crisis lines with tap-to-call buttons. This alert is never suppressed.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Medical emergency</td>
                  <td>Heavy bleeding, severe pain, chest pain, breathing trouble, fainting or seizure trigger a “Critical Medical Advisory” that directs the parent to their OB/midwife or emergency services. Repeats are de-duplicated for an hour unless the symptom is getting worse.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Emotional distress</td>
                  <td>When several signals agree (low mood, distress tone, high stress, repeated reassurance-seeking), the reply is adjusted using an emotional profile that tracks 11 emotion dimensions and a 0–10 stress level across the conversation.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Everyday questions</td>
                  <td>Answer first, warning signs placed early, then next steps, in plain phone-friendly language. The doula never diagnoses and stays strictly on pregnancy, birth, postpartum and newborn care.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.sectionParagraph}>
            <strong>Onboarding &amp; personalization</strong> — a branching flow personalizes the doula before the first question. It asks for role (parent, or partner/caregiver), stage (pregnant, birth to 6 weeks, 6 to 12 weeks, 3 to 12 months), due date and pregnancy experience (first pregnancy, multiples, high-risk), and support areas: 7 postpartum topics (recovery, feeding, sleep, emotional wellness, development, partner support, safety) or 6 pregnancy topics. It closes with four promises: <strong><em>we’ll tell you what’s normal, help you understand why, what to try, and when to call someone.</em></strong>
          </p>

          <PhoneRow
            shots={[
              { src: '13_Onboarding_Child_Profile.jpg', title: 'Personalizing', caption: 'Building the child profile the doula reasons over' },
            ]}
          />
        </section>

        {/* ── 9. Plans, Credits & Family Sharing ── */}
        <section id="plans-credits-family" className={styles.sectionBlock}>
          <SectionHead num="06" title="Plans, Credits & Family Sharing" kicker="Fair, transparent usage, and a whole care team on one plan." />

          <p className={styles.sectionParagraph}>
            Every new family starts with a 10-day free trial, with no card required. Three plans follow — <strong>Starter</strong>, <strong>Nurture</strong> and <strong>Family</strong> each billed monthly or annually, plus one-off <strong>Quick Top-Up</strong> and <strong>Day Boost</strong> packs for busy days. Usage is metered in credits calculated from the tokens each request uses, so a short question costs less than a document upload. An immutable ledger records every credit movement, and parents see a live daily meter and top-up balance at any time. Tracking, tips and insights stay free.
          </p>
          <p className={styles.sectionParagraph}>
            Billing works the same across every platform. Stripe powers the web app and RevenueCat powers the App Store and Google Play, and webhooks keep both in sync with a single entitlement on the backend. Each app detects where a plan was bought and points the parent to the right place to manage it, which prevents double billing. Downgrades and cancellations are confirmed with an emailed one-time code.
          </p>
          <p className={styles.sectionParagraph}>
            <strong>Family sharing</strong> lets a parent invite a partner, grandparent, nanny or other caregiver. The parent chooses exactly which children to share and whether to grant AI-doula chat access, billed to the parent’s balance. Caregivers get a trimmed, purpose-built app: a family switcher, the shared children’s logs and, if granted, the chat. They never see billing, private insights or profile editing. Caregiver slots scale with the plan, and invitations expire after 48 hours and lock after repeated wrong codes.
          </p>

          <PhoneRow
            shots={[
              { src: '14_Subscription_Plans.jpg', title: 'Plans', caption: 'Starter, Nurture and Family' },
              { src: '15_Plan_Billing_and_Credits.jpg', title: 'Usage & Top-ups', caption: 'Live daily meter and top-up balance' },
              { src: '16_Invite_a_Caregiver.jpg', title: 'Family Sharing', caption: 'Choose children, grant chat access' },
            ]}
          />
        </section>

        {/* ── 10. Security, Privacy & Reliability ── */}
        <section id="security-privacy" className={styles.sectionBlock}>
          <SectionHead num="07" title="Security, Privacy & Reliability" kicker="Sensitive family data, protected at every layer." />

          <p className={styles.sectionParagraph}>
            Accounts are created with email and a 6-digit verification code, or with Google or Apple sign-in. Tokens live in the device’s secure enclave storage and refresh silently, with concurrent requests queued. Signing in on a new device signs the old one out. Role and child-scope checks run on every backend route, including the context the AI is allowed to see, so a caregiver’s chat never reveals the parent’s private data.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Control</th>
                  <th>Implementation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.firstCell}>Session security</td>
                  <td>Short-lived JWTs validated against server-side sessions; silent refresh with a retry queue; auto-logout when refresh fails; tokens kept in SecureStore on device.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Single active device</td>
                  <td>A new login revokes other sessions</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Role &amp; child-scope access</td>
                  <td>Parent-only screens are guarded at the route level, not just hidden; the backend enforces per-child grants on every request; access is re-checked when the app returns to the foreground.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Billing protection</td>
                  <td>Store-billed plans can only be managed in their store; webhook events are audited and idempotent.</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Privacy &amp; deletion</td>
                  <td>Account deletion, short-lived signed URLs for uploaded files, and a full device wipe on logout (tokens, cache, scheduled notifications, session, sign-in and store identities).</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>Reliability &amp; accessibility</td>
                  <td>Offline launch gate and global offline banner, skeleton/error/retry states on every card, a custom in-app alert system, and screen-reader labels and roles across the app.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
