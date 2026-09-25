'use client';

import React from 'react';
import Image from 'next/image';
import {
  Brain,
  Gamepad2,
  Mic,
  Key,
} from 'lucide-react';
import styles from '@/styles/components/organisms/BrainifyCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface BrainifyCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const IMG = '/case-studies/brAInify_images';

export default function BrainifyCaseStudy({ caseStudy }: BrainifyCaseStudyProps) {
  return (
    <div className={styles.brainifyPage}>
      {/* ── Hero Section (Page 1) ── */}
      <header className={styles.heroSection}>
        <div className={styles.constellationBg} aria-hidden="true">
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.constellationSvg}>
            <line x1="300" y1="450" x2="400" y2="520" stroke="rgba(31,58,99,0.35)" strokeWidth="1.5" />
            <line x1="400" y1="520" x2="520" y2="550" stroke="rgba(31,58,99,0.4)" strokeWidth="1.5" />
            <line x1="520" y1="550" x2="630" y2="480" stroke="rgba(31,58,99,0.4)" strokeWidth="1.5" />
            <line x1="630" y1="480" x2="740" y2="390" stroke="rgba(31,58,99,0.4)" strokeWidth="1.5" />
            <line x1="740" y1="390" x2="790" y2="330" stroke="rgba(31,58,99,0.35)" strokeWidth="1.5" />
            <circle cx="300" cy="450" r="4" fill="#1F3A63" />
            <circle cx="300" cy="450" r="9" stroke="rgba(31,58,99,0.5)" strokeWidth="1.5" />
            <circle cx="400" cy="520" r="5" fill="#1F3A63" />
            <circle cx="400" cy="520" r="11" stroke="rgba(31,58,99,0.5)" strokeWidth="1.5" />
            <circle cx="520" cy="550" r="6" fill="#1F3A63" />
            <circle cx="520" cy="550" r="13" stroke="rgba(31,58,99,0.5)" strokeWidth="1.5" />
            <circle cx="630" cy="480" r="7" fill="#1F3A63" />
            <circle cx="630" cy="480" r="15" stroke="rgba(31,58,99,0.5)" strokeWidth="1.5" />
            <circle cx="740" cy="390" r="8" fill="#1F3A63" />
            <circle cx="740" cy="390" r="17" stroke="rgba(31,58,99,0.5)" strokeWidth="1.5" />
            <circle cx="790" cy="330" r="9" fill="#1F3A63" />
            <circle cx="790" cy="330" r="19" stroke="rgba(31,58,99,0.5)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className={styles.rail}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.breadcrumb}>
                <span>CASE STUDY</span>
                <span className={styles.slash}>·</span>
                <span>EDTECH + AI</span>
              </div>

              <h1 className={styles.heroMainTitle}>
                br<span className={styles.brandAi}>AI</span>nify
              </h1>
              <h2 className={styles.heroSubtitle}>
                AI-personalized language &amp; skill learning platform
              </h2>

              <div className={styles.heroDividerBar} />

              <p className={styles.heroLead}>
                A mobile-first, invite-based, multilingual learning platform that turns structured skill-building into a daily habit — guided progression, AI-driven personalization, and gamified reward loops across seven independent learning paths, headlined by a new voice-first, avatar-led English Coach built around live spoken conversation.
              </p>

              <div className={styles.heroPillsGrid}>
                <div className={styles.heroPill}>
                  <Brain size={16} />
                  <span>AI-personalized learning</span>
                </div>
                <div className={styles.heroPill}>
                  <Gamepad2 size={16} />
                  <span>Gamified progression</span>
                </div>
                <div className={styles.heroPill}>
                  <Mic size={16} />
                  <span>Voice-first English coaching</span>
                </div>
                <div className={styles.heroPill}>
                  <Key size={16} />
                  <span>Invite-based access</span>
                </div>
              </div>

              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Platforms</span>
                  <span className={styles.metaValue}>Web · Android · iOS</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Category</span>
                  <span className={styles.metaValue}>EdTech · AI · Consumer Learning</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Stack</span>
                  <span className={styles.metaValue}>FastAPI (Python) · Firebase / Firestore · LangChain + Gemini (LLM/RAG) · React Native (Expo) · React (Web)</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Scope</span>
                  <span className={styles.metaValue}>Mobile app · Web app · Backend APIs · AI personalization &amp; voice engine · Admin analytics dashboard</span>
                </div>
              </div>
            </div>

            <div className={styles.heroImgWrap}>
              <Image
                src={`${IMG}/01_cover_learning-paths-home.jpg`}
                alt="brAInify Learning Paths home screen"
                fill
                priority
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── Quick facts (7 / 15K+ / 14 / 174) ── */}
      <div className={styles.rail}>
        <div className={styles.statsGrid} style={{ marginTop: '48px' }}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>7</span>
            <span className={styles.statLabel}>Independent learning paths</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>15K+</span>
            <span className={styles.statLabel}>Active learners across web and app</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>14+</span>
            <span className={styles.statLabel}>Languages localized</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>174</span>
            <span className={styles.statLabel}>Countries reached</span>
          </div>
        </div>
      </div>

      {/* ── Contents (Page 2) ── */}
      <section className={styles.contentsSection}>
        <div className={styles.rail}>
          <div className={styles.contentsHeaderBar}>
            <span>PG-AGI / CASE STUDY / <strong>BRAINIFY</strong></span>
            <span>EDTECH + AI</span>
          </div>

          <h2 className={styles.contentsTitle}>Contents</h2>
          <div className={styles.contentsSubtitle}>FROM DOCUMENTED CURRICULUM TO A DAILY LEARNING HABIT</div>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th>Section</th>
                  <th style={{ width: '120px', textAlign: 'right' }}>Page</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['01  What We Built', '3'],
                  ['02  Core Architecture', '5'],
                  ['03  Learning Paths & Progression', '7'],
                  ['04  Product Walkthrough', '8'],
                  ['05  AI Mentor & the English Voice Coach', '9'],
                  ['06  Gamification, Certification & Handbook', '12'],
                  ['07  Security, Accessibility & Localization', '13'],
                  ['08  Admin Analytics, What Makes This Different & Outcomes', '14'],
                  ['09  Outcomes', '15'],
                ].map(([label, page]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td style={{ textAlign: 'right' }}>{page}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Preview Row (Entry Surface / Video Library / English Coach) ── */}
      <section className={styles.heroPreviewSection}>
        <div className={styles.rail}>
          <div className={styles.heroPreviewGrid}>
            <div className={styles.heroPreviewCard}>
              <div className={styles.heroPreviewImgWrap}>
                <Image src={`${IMG}/02_entry-surface_sign-in.jpg`} alt="Entry Surface / Invite-provisioned sign-in" fill />
              </div>
              <p className={styles.heroPreviewCaption}><strong>Entry Surface</strong> / Invite-provisioned sign-in</p>
            </div>
            <div className={styles.heroPreviewCard}>
              <div className={styles.heroPreviewImgWrap}>
                <Image src={`${IMG}/02_video-library.jpg`} alt="Video Library / Tool walkthroughs and platform guides by path" fill />
              </div>
              <p className={styles.heroPreviewCaption}><strong>Video Library</strong> / Tool walkthroughs and platform guides by path</p>
            </div>
            <div className={styles.heroPreviewCard}>
              <div className={styles.heroPreviewImgWrap}>
                <Image src={`${IMG}/02_english-coach_entry-pitch.jpg`} alt="English Coach / Entry pitch before onboarding begins" fill />
              </div>
              <p className={styles.heroPreviewCaption}><strong>English Coach</strong> / Entry pitch before onboarding begins</p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.rail}>
        {/* ── 01 What We Built ── */}
        <section id="what-we-built" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>1&nbsp;&nbsp;What We Built</h3>
            <span className={styles.blueBarLabel}>SECTION 01 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              A learning ecosystem that adapts to the learner — not the other way around.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            <strong>brAInify</strong> is a mobile-first, invite-only, multilingual learning platform that helps users build practical, real-world skills through structured, gamified learning journeys. It combines guided progression, AI-driven personalization, and habit-forming engagement loops across more than 15,000 learners on web and app.
          </p>

          <p className={styles.sectionParagraph}>
            The platform runs seven independent learning paths, each with its own three-level progression (Foundation, Builder, Mastery). Every path keeps its own progress, rewards, analytics, and learning history isolated, so the system scales cleanly as new paths are added — most recently the English Coach, a fully voice-driven spoken-English course led by a 3D AI mentor.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>7</span>
              <span className={styles.statLabel}>Learning paths, fully isolated</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Levels per path — Foundation, Builder, Mastery</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>14</span>
              <span className={styles.statLabel}>Languages, localized per learner</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>15K+</span>
              <span className={styles.statLabel}>Active learners</span>
            </div>
          </div>

          <div className={styles.subSectionLabel}>CORE USER VALUE</div>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Value</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCol}>AI-personalized feedback</td>
                  <td>An AI mentor narrates lessons, answers curriculum questions, and is screen-aware — it knows which path, unit, and chapter the learner is on.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Gamified progression</td>
                  <td>BP, streaks, animated progress bars, and toast celebrations turn skill-building into a daily habit rather than a one-off course.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Voice-first language coaching</td>
                  <td>The English Coach replaces tap-and-select drills with live spoken conversation, scored against a five-skill rubric.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Multilingual delivery</td>
                  <td>The full UI is localized into 14 languages; language choice persists across sessions.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Invite-based entitlement</td>
                  <td>Accounts are provisioned rather than self-serve, with per-path access and a forced password change on first use.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.subSectionLabel}>LEARNING PATHS</div>
          <div className={styles.pathsWithImageRow}>
            <div className={styles.pathsContainer}>
              <div className={styles.pathsListVertical}>
                {[
                  'AI Foundation Path',
                  'Creator Path',
                  'Digital Marketing Path',
                  'Digital Currency Path',
                  'Financial Literacy Path',
                  'Youth Path',
                  'English Coach — voice-first, avatar-led spoken',
                ].map((p) => (
                  <div className={styles.pathItem} key={p}>
                    <div className={styles.pathDot} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.photoWrapper} style={{ margin: 0, maxWidth: '340px' }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/03_learning-paths_path-cards.jpg`} alt="Learning Paths / Path cards on the Learning Paths screen" width={437} height={949} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>LEARNING PATHS</div>
              <p className={styles.photoCaption}><strong>Learning Paths</strong> / Path cards on the Learning Paths screen</p>
            </div>
          </div>

          <div className={styles.photoWrapper} style={{ maxWidth: '520px', margin: '36px auto 0' }}>
            <div className={styles.photoFrame}>
              <Image src={`${IMG}/04_ai-foundation_path-trailer.jpg`} alt="AI Foundation / Path trailer artwork" width={949} height={437} className={styles.photoImg} />
            </div>
            <div className={styles.photoEyebrow}>AI FOUNDATION</div>
            <p className={styles.photoCaption}><strong>AI Foundation</strong> / Path trailer artwork</p>
          </div>

          <div className={styles.photoWrapper} style={{ maxWidth: '340px', margin: '32px auto 40px' }}>
            <div className={styles.photoFrame}>
              <Image src={`${IMG}/04_inside-a-path_lesson-list.jpg`} alt="Inside a Path / A unit's lesson list and level progress" width={432} height={940} className={styles.photoImg} />
            </div>
            <div className={styles.photoEyebrow}>INSIDE A PATH</div>
            <p className={styles.photoCaption}><strong>Inside a Path</strong> / A unit&apos;s lesson list and level progress</p>
          </div>
        </section>

        {/* ── 02 Core Architecture ── */}
        <section id="architecture" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>2&nbsp;&nbsp;Core Architecture</h3>
            <span className={styles.blueBarLabel}>SECTION 02 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              A layered architecture built around the learner lifecycle.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            The platform separates onboarding, entitlement, content, gamification, AI, and analytics into independent service layers, so each concern can evolve without touching the rest of the app.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Layer</th>
                  <th>Responsibility</th>
                  <th style={{ width: '220px' }}>Technology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCol}>Presentation (App + Web)</td>
                  <td>Onboarding, dashboard, lesson delivery, gamified UI</td>
                  <td><span className={styles.techPill}>React Native (Expo), React</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Auth &amp; Entitlement</td>
                  <td>Identity, sessions, invite provisioning, forced password change, per-path access</td>
                  <td><span className={styles.techPill}>FastAPI, JWT, Firebase Auth</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Learning Content</td>
                  <td>Path → Level → Unit → Chapter hierarchy</td>
                  <td><span className={styles.techPill}>Firestore</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Gamification</td>
                  <td>BP, streaks, milestone unlocks, certificates, Handbook</td>
                  <td><span className={styles.techPill}>FastAPI, Firestore</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>AI Learning Intelligence</td>
                  <td>Curriculum RAG, screen-aware AI Mentor, adaptive difficulty, English Coach voice pipeline</td>
                  <td><span className={styles.techPill}>LangChain + Gemini, Google ASR/TTS</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Progress Tracking</td>
                  <td>Converts learner activity into structured progress and mentor-analytics records</td>
                  <td><span className={styles.techPill}>Firestore</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image src={`${IMG}/05_core-architecture_diagram.jpg`} alt="brAInify core architecture diagram" width={1400} height={1000} className={styles.photoImg} style={{ objectFit: 'contain' }} />
            </div>
            <div className={styles.photoEyebrow}>SYSTEM DIAGRAM</div>
            <p className={styles.photoCaption}>
              Presentation, service, data, external AI, and infrastructure layers — each independently scalable, all sitting on Google Cloud / Firebase.
            </p>
          </div>

          <div className={styles.twoPhotoGrid} style={{ maxWidth: '520px', margin: '0 auto 40px' }}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/06_ai-mentor_narrating-chapter.jpg`} alt="AI Learning Intelligence / The mentor narrating a chapter inline" width={479} height={1042} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>AI LEARNING INTELLIGENCE</div>
              <p className={styles.photoCaption}>The mentor narrating a chapter inline</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/06_progress-dashboard.jpg`} alt="Progress Tracking / Surfaced on the learner-facing dashboard" width={479} height={1042} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>PROGRESS TRACKING</div>
              <p className={styles.photoCaption}>Surfaced on the learner-facing dashboard</p>
            </div>
          </div>
        </section>

        {/* ── 03 Learning Paths & Progression ── */}
        <section id="learning-paths" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>3&nbsp;&nbsp;Learning Paths &amp; Progression</h3>
            <span className={styles.blueBarLabel}>SECTION 03 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              One shared engine, seven distinct curricula.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Every standard path lays out units as a visual path map, with chapters composed of interactive slide types — multiple-choice, fill-in-the-blank, match-pairs, swipe-to-sort, tap-to-reveal, before/after comparisons, checklist tasks, and AI-evaluated free-text questions — narrated by an AI mentor overlay. A first-run tutorial teaches new learners how to navigate lessons.
          </p>

          <div className={styles.cardsGrid2x2}>
            <div className={styles.featureCard}>
              <h4 className={styles.featureCardTitle}>AI Foundation</h4>
              <p className={styles.featureCardDesc}>Foundation/Builder/Mastery AI curriculum; includes the NovaMind AI Business Preview, 8 real business deliverables a learner has built by day 30.</p>
            </div>
            <div className={styles.featureCard}>
              <h4 className={styles.featureCardTitle}>Creator</h4>
              <p className={styles.featureCardDesc}>AI-powered content creation; the Content Creation Lab is a multi-phase workflow simulation with live stat tracking.</p>
            </div>
            <div className={styles.featureCard}>
              <h4 className={styles.featureCardTitle}>Digital Marketing</h4>
              <p className={styles.featureCardDesc}>AI tools for analytics, ad creation, and business suites, on the same level/unit/chapter structure.</p>
            </div>
            <div className={styles.featureCard}>
              <h4 className={styles.featureCardTitle}>Digital Currency</h4>
              <p className={styles.featureCardDesc}>Cryptocurrency and digital-currency concepts and tools.</p>
            </div>
            <div className={styles.featureCard}>
              <h4 className={styles.featureCardTitle}>Financial Literacy</h4>
              <p className={styles.featureCardDesc}>Financial literacy and trading concepts; the Financial Challenge Lab is a trading simulator with live charts and a replay feature.</p>
            </div>
            <div className={styles.featureCard}>
              <h4 className={styles.featureCardTitle}>Youth</h4>
              <p className={styles.featureCardDesc}>Builder tracks for younger learners — AI Agent, Game, Music, Short Film, Storybook, and YouTube Creator builders; mission checklists and showcase screens.</p>
            </div>
          </div>

          <div className={styles.subSectionLabel}>LEARNER PROGRESSION FLOW</div>
          <div className={styles.diagramContainer}>
            <div className={styles.flowRow}>
              {['Invite code', 'Onboarding tutorial', 'Path', 'Level', 'Unit', 'Chapter', 'BP & progress update'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <div className={styles.flowStep}>
                    <span className={styles.flowStepName}>{step}</span>
                  </div>
                  {i < arr.length - 1 && <span className={styles.flowArrow}>→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.threePhotoGrid}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/07_path-overview.jpg`} alt="Path Overview / Foundation level, 0 of 1,872 BP" width={396} height={862} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>PATH OVERVIEW</div>
              <p className={styles.photoCaption}>Foundation level, 0 of 1,872 BP</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/07_unit-1_lesson-list.jpg`} alt="Unit 1 / Lesson list and level progress" width={396} height={862} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>UNIT 1</div>
              <p className={styles.photoCaption}>Lesson list and level progress</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/07_chapter-video.jpg`} alt="Chapter Video / A path expert speaking on camera" width={396} height={862} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>CHAPTER VIDEO</div>
              <p className={styles.photoCaption}>A path expert speaking on camera</p>
            </div>
          </div>
        </section>

        {/* ── 04 Product Walkthrough ── */}
        <section id="product-walkthrough" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>4&nbsp;&nbsp;Product Walkthrough</h3>
            <span className={styles.blueBarLabel}>SECTION 04 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              A guided home base, plus live sessions and a video library for every path.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            The Paths screen is the learner&apos;s home base — each card tracks live progress and BP (brAInify Points), with a floating AI Mentor bubble reachable from anywhere in the app. The Live Hub adds a calendar of scheduled classes with one-tap join and local reminder notifications; the Video hub gives dubbed or subtitled tool walkthroughs per path.
          </p>

          <div className={styles.threePhotoGrid}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/08_learning-paths_home.jpg`} alt="Learning Paths / Live progress and BP per path card" width={396} height={862} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>LEARNING PATHS</div>
              <p className={styles.photoCaption}>Live progress and BP per path card.</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/08_live-hub_calendar.jpg`} alt="Live Hub / Month and week calendar of live classes" width={396} height={862} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>LIVE HUB</div>
              <p className={styles.photoCaption}>Month and week calendar of live classes.</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/08_video-library.jpg`} alt="Video Library / App intro, trainer intro, and bootcamp sessions" width={396} height={862} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>VIDEO LIBRARY</div>
              <p className={styles.photoCaption}>App intro, trainer intro, and bootcamp sessions.</p>
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Surface</th>
                  <th>Delivered capability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCol}>Progress Dashboard</td>
                  <td>Completion ring, mascot robot center-piece, per-level locked/in-progress/completed cards.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Video Library</td>
                  <td>Standalone intro videos plus admin-managed libraries; dual dubbed/subtitled playback; auto-categorized downloadable resources (PDFs, decks, docs, repos, links).</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Simulation Labs</td>
                  <td>AI Application Lab, Content Creation Lab, Financial Challenge Lab, NovaMind Business Preview — proof-of-skill exercises distinct from passive lessons.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Live Hub</td>
                  <td>Calendar of live classes, in-app join, automatic local reminders, recordings with external fallback.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 05 AI Mentor & the English Voice Coach ── */}
        <section id="ai-mentor" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>5&nbsp;&nbsp;AI Mentor &amp; the English Voice Coach</h3>
            <span className={styles.blueBarLabel}>SECTION 05 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              An assistant that knows the curriculum — and a coach that hears the learner speak.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            The AI Mentor is a persistent chat assistant, available via its own tab and a floating draggable bubble from anywhere in the app. It streams responses in real time, is screen-aware (it reads which path/unit/chapter the learner is on), keeps a full browsable history, and surfaces rotating conversation-starters and proactive streak reminders.
          </p>

          <div className={styles.threePhotoGrid}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/09_ai-mentor_floating-bubble.jpg`} alt="Floating Bubble / A proactive nudge on the Paths screen" width={380} height={826} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>FLOATING BUBBLE</div>
              <p className={styles.photoCaption}>A proactive nudge on the Paths screen</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/09_ai-mentor_full-screen-tab.jpg`} alt="Full-Screen Tab / Browsable conversation history" width={380} height={826} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>FULL-SCREEN TAB</div>
              <p className={styles.photoCaption}>Browsable conversation history</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/09_ai-mentor_in-lesson-overlay.jpg`} alt="In-Lesson Overlay / Nova narrating a chapter" width={380} height={826} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>IN-LESSON OVERLAY</div>
              <p className={styles.photoCaption}>Nova narrating a chapter</p>
            </div>
          </div>

          <div className={styles.subSectionTitle}>The English Coach — a 3D voice mentor</div>
          <p className={styles.sectionParagraph}>
            The signature feature of the English Path is a live, spoken-conversation experience with a 3D animated mentor that lip-syncs between idle and speaking states, supports natural barge-in (the learner can interrupt mid-sentence), and shows a live waveform with dual-side transcripts. A text-chat fallback is available mid-session.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '160px' }}>Mode</th>
                  <th>What happens</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCol}>Practice</td>
                  <td>Open-ended spoken practice on a lesson topic, no scoring pressure.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Mission</td>
                  <td>A graded spoken challenge tied to the curriculum unit (10-minute cap), ending in an AI-scored performance report: pass/fail, a 5-skill breakdown (pronunciation, fluency, vocabulary, grammar, confidence), written feedback, and a retry path.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.sectionParagraph}>
            <strong>Onboarding &amp; placement</strong> — an 8-step wizard personalizes the mentor before the first lesson: name/gender, native language, learning goal, current level (self-selected or via a 3-question AI-evaluated speaking placement test), mentor teaching style, mentor voice (with audio preview), daily practice goal and reminders, and a completion screen.
          </p>

          <div className={styles.fourPhotoGrid}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/10_english-coach_entry-pitch.jpg`} alt="Entry Pitch / Speak English with confidence" width={297} height={647} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>ENTRY PITCH</div>
              <p className={styles.photoCaption}>Speak English with confidence</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/10_onboarding_step-1-name.jpg`} alt="Step 1 of 7 / What should we call you" width={297} height={647} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>STEP 1 OF 7</div>
              <p className={styles.photoCaption}>What should we call you</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/10_onboarding_step-2-first-language.jpg`} alt="Step 2 of 7 / What's your first language" width={297} height={647} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>STEP 2 OF 7</div>
              <p className={styles.photoCaption}>What&apos;s your first language</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/10_onboarding_step-7-daily-goal.jpg`} alt="Step 7 of 7 / Daily practice goal" width={297} height={647} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>STEP 7 OF 7</div>
              <p className={styles.photoCaption}>Daily practice goal</p>
            </div>
          </div>

          <div className={styles.photoWrapper} style={{ maxWidth: '340px', margin: '0 auto 40px' }}>
            <div className={styles.photoFrame}>
              <Image src={`${IMG}/10_english-mentor_live-conversation.jpg`} alt="English Mentor / Learn English while conversing with our Mentor" width={498} height={982} className={styles.photoImg} />
            </div>
            <div className={styles.photoEyebrow}>ENGLISH MENTOR</div>
            <p className={styles.photoCaption}>Learn English while conversing with our Mentor</p>
          </div>

          <div className={styles.twoPhotoGrid} style={{ maxWidth: '520px', margin: '0 auto 40px' }}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/11_personalizing-program.jpg`} alt="Personalizing / Building the program from the learner's answers" width={429} height={934} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>PERSONALIZING</div>
              <p className={styles.photoCaption}>Building the program from the learner&apos;s answers</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/11_personalization-complete.jpg`} alt="Completion / Level, focus, and daily goal confirmed" width={429} height={934} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>COMPLETION</div>
              <p className={styles.photoCaption}>Level, focus, and daily goal confirmed</p>
            </div>
          </div>
        </section>

        {/* ── 06 Gamification, Certification & Handbook ── */}
        <section id="gamification" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>6&nbsp;&nbsp;Gamification, Certification &amp; Handbook</h3>
            <span className={styles.blueBarLabel}>SECTION 06 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              Skill-building as a daily habit, with a credential at the end of every path.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            BP (Brainify Points) and daily streaks are shown across Progress and Profile, with tappable tooltips explaining how they work; BP toasts celebrate in-lesson milestones. Achievements (units completed), Nova Tips (chapters completed), and total BP appear as stat cards, alongside a step-tracker strip of every level as a connected path.
          </p>

          <p className={styles.sectionParagraph}>
            Completing a path issues a downloadable, shareable certificate naming the specific skills and systems demonstrated — both full-course and level-specific variants exist, with locked certificates showing what is required to unlock them. The Handbook is a personal, unlockable reference library that fills up as chapters complete, each entry a saved, categorized takeaway with branded artwork revealed on unlock.
          </p>

          <div className={styles.threePhotoGrid}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/06_progress-dashboard.jpg`} alt="Stat Cards / Achievements, Nova Tips, and BP earned" width={479} height={1042} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>STAT CARDS</div>
              <p className={styles.photoCaption}>Achievements, Nova Tips, and BP earned</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/12_what-youll-build.jpg`} alt="What You'll Build / The milestone screen before certification" width={429} height={934} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>WHAT YOU&apos;LL BUILD</div>
              <p className={styles.photoCaption}>The milestone screen before certification</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/12_official-certification.jpg`} alt="Official Certification / Named, signed, and accredited" width={429} height={934} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>OFFICIAL CERTIFICATION</div>
              <p className={styles.photoCaption}>Named, signed, and accredited</p>
            </div>
          </div>
        </section>

        {/* ── 07 Security, Accessibility & Localization ── */}
        <section id="security" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>7&nbsp;&nbsp;Security, Accessibility &amp; Localization</h3>
            <span className={styles.blueBarLabel}>SECTION 07 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              Control who can sign in, and make the app legible wherever they are.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Accounts are provisioned via invite rather than open signup; new users issued a temporary password are routed to a mandatory password-change screen. JWT-backed sessions support saved-account quick switching and biometric login. Self-service password reset runs confirm-email → reset-link → new-password.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Control</th>
                  <th>Implementation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCol}>Session security</td>
                  <td>JWT-based sessions; biometric login for returning users.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Forced password change</td>
                  <td>Temporary-password accounts are routed to a mandatory change screen before first use.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Multi-language UI</td>
                  <td>Full app localized into 14 languages; persists across sessions, changeable via a searchable flag picker, including a dedicated first-run language screen.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Theming &amp; sound</td>
                  <td>Dark mode by default with one-tap light/dark toggle; global sound effects mute/unmute.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Support &amp; privacy</td>
                  <td>In-app live support chat, AI-assisted support surface, bug/issue reporter, privacy policy, terms of use, and permanent account deletion with confirmation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.twoPhotoGrid} style={{ maxWidth: '520px', margin: '0 auto 40px' }}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/13_entry-surface_sign-in.jpg`} alt="Entry Surface / Invite-provisioned sign-in" width={429} height={934} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>ENTRY SURFACE</div>
              <p className={styles.photoCaption}>Invite-provisioned sign-in</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/13_language-selection.jpg`} alt="First-Run Language Screen / 14 languages available" width={429} height={934} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>FIRST-RUN LANGUAGE SCREEN</div>
              <p className={styles.photoCaption}>14 languages available</p>
            </div>
          </div>
        </section>

        {/* ── 08 Admin Analytics & What Makes This Different ── */}
        <section id="analytics" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>8&nbsp;&nbsp;Admin Analytics &amp; What Makes This Different</h3>
            <span className={styles.blueBarLabel}>SECTION 08 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              Visibility into every path, level, and learner — and the choices that make it hold together.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            An internal analytics dashboard tracks enrollment distribution, progress by path/level/unit/chapter, completion rates, BP velocity, mentor conversation trends, and English Coach mission scores — giving the team a continuous read on engagement and where lesson sequencing needs tuning.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Design choice</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCol}>Path isolation</td>
                  <td>Progress, rewards, and analytics never leak across the seven learning paths, so new paths add without side effects.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Screen-aware mentor</td>
                  <td>The AI Mentor reads live on-screen state, so navigational questions get a grounded answer instead of a generic one.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Voice-native coaching</td>
                  <td>The English Coach reasons over speech directly (ASR → behavior-aware evaluation → TTS), not typed proxies for spoken skill.</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Native-language onboarding</td>
                  <td>The English Coach teaches through the learner&apos;s own language across 14 languages, lowering the barrier for complete beginners.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.twoPhotoGrid}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/14_analytics_crash-free-engagement.jpg`} alt="Analytics / Crash Free Users & Average Engagement Time" width={900} height={506} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>ANALYTICS</div>
              <p className={styles.photoCaption}>Crash Free Users &amp; Average Engagement Time</p>
            </div>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image src={`${IMG}/14_analytics_active-users.jpg`} alt="Analytics / Active Users Across a month and more" width={900} height={506} className={styles.photoImg} />
              </div>
              <div className={styles.photoEyebrow}>ANALYTICS</div>
              <p className={styles.photoCaption}>Active Users Across a month and more</p>
            </div>
          </div>
        </section>

        {/* ── 09 Outcomes ── */}
        <section id="outcomes" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionNumberedTitle}>9&nbsp;&nbsp;Outcomes</h3>
            <span className={styles.blueBarLabel}>SECTION 09 / BRAINIFY</span>
            <h2 className={styles.sectionTitle}>
              One platform spanning mobile, web, and AI-native voice coaching.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            brAInify spans the full width of a modern ed-tech product: a gamified progression engine serving 15,000+ learners, an AI mentor personalized and screen-aware across seven isolated paths, multilingual delivery in 14 languages, and a voice-first, avatar-led English Coach built for global reach.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>15K+</span>
              <span className={styles.statLabel}>Active learners across web and app</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>7</span>
              <span className={styles.statLabel}>Independent, isolated learning paths</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>14</span>
              <span className={styles.statLabel}>Languages localized</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>174</span>
              <span className={styles.statLabel}>Countries reached</span>
            </div>
          </div>

          <div className={styles.subSectionLabel}>AS MEASURED ACROSS A MONTH</div>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th>Delivered outcome</th>
                  <th>Value</th>
                  <th style={{ width: '160px' }}>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCol}>Active User Growth</td>
                  <td>Rapid user growth</td>
                  <td>+288%</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>7 Day Retention</td>
                  <td>Strong repeat usage</td>
                  <td>47.9%</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Average Engagement Time</td>
                  <td>Users spend meaningful time learning</td>
                  <td>28.8 min/user/day</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Crash Free Users</td>
                  <td>Production reliability</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Daily engagement (DAU/WAU)</td>
                  <td>Strong daily engagement relative to weekly users</td>
                  <td>28.6%</td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Mentor engagement</td>
                  <td>AI feature adoption</td>
                  <td>3685 views</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.sectionParagraph} style={{ marginTop: '32px' }}>
            <strong>The delivered system.</strong> A complete learning path from invite to certificate — gamified progression, a screen-aware AI Mentor, seven isolated curricula, and a voice-first English Coach that teaches through the learner&apos;s own language, with admin analytics feeding continued content improvement.
          </p>

          <div className={styles.caseStudyFooterBar}>
            <span>PGAGI | brAInify Case Study</span>
            <span>EdTech + AI Product</span>
          </div>
        </section>
      </div>
    </div>
  );
}
