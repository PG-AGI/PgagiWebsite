'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Brain,
  Gamepad2,
  Mic,
  Key,
  Layers,
  Globe2,
} from 'lucide-react';
import styles from '@/styles/components/organisms/BrainifyCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';
import ProductVisionCta from '@/components/organisms/ProductVisionCta';

interface BrainifyCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'core-problem', label: 'The Core Problem' },
  { id: 'english-course', label: 'The AI Value Engine' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'product-walkthrough', label: 'Product Walkthrough' },
  { id: 'ai-mentor', label: 'AI Mentor' },
  { id: 'certification', label: 'Certification' },
  { id: 'demonstrates', label: 'What This Demonstrates' },
];

export default function BrainifyCaseStudy({ caseStudy }: BrainifyCaseStudyProps) {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 130;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className={styles.brainifyPage}>
      {/* ── Hero Section (Page 1) ── */}
      <header className={styles.heroSection}>
        {/* Constellation nodes background matching PDF Page 1 */}
        <div className={styles.constellationBg} aria-hidden="true">
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.constellationSvg}>
            <line x1="300" y1="450" x2="400" y2="520" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <line x1="400" y1="520" x2="520" y2="550" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <line x1="520" y1="550" x2="630" y2="480" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <line x1="630" y1="480" x2="740" y2="390" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <line x1="740" y1="390" x2="790" y2="330" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <circle cx="300" cy="450" r="4" fill="#FFFFFF" />
            <circle cx="300" cy="450" r="9" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <circle cx="400" cy="520" r="5" fill="#FFFFFF" />
            <circle cx="400" cy="520" r="11" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <circle cx="520" cy="550" r="6" fill="#FFFFFF" />
            <circle cx="520" cy="550" r="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <circle cx="630" cy="480" r="7" fill="#FFFFFF" />
            <circle cx="630" cy="480" r="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <circle cx="740" cy="390" r="8" fill="#FFFFFF" />
            <circle cx="740" cy="390" r="17" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <circle cx="790" cy="330" r="9" fill="#FFFFFF" />
            <circle cx="790" cy="330" r="19" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className={styles.rail}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <span>PGAGI</span>
              <span className={styles.slash}>/</span>
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
              A mobile-first, invite-only, multilingual learning platform that turns structured skill-building into a daily habit — combining guided progression, AI-driven personalization, and gamified reward loops across 10,000+ learners, with a new voice-first, avatar-led English course now in development.
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
                <span>Multilingual voice AI</span>
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
                <span className={styles.metaValue}>React Native(Expo) · React (Web) · FastAPI (Python) · LangChain + LLM APIs</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Mobile app · Web app · Backend APIs · AI personalization engine · Admin analytics dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Sticky Sub-Navigation ── */}
      <nav className={styles.stickyNav} aria-label="Case study sections">
        <div className={styles.rail}>
          <div className={styles.navScrollRow}>
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`${styles.navLink} ${activeSection === sec.id ? styles.navLinkActive : ''}`}
              >
                {sec.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className={styles.rail}>
        {/* ── 01 Overview (Page 2 & 3) ── */}
        <section id="overview" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>OVERVIEW</span>
            <h2 className={styles.sectionTitle}>
              A learning ecosystem that adapts to the learner — not the other way around.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            <strong>brAInify</strong> is a mobile-first, invite-only, multilingual learning platform that helps users build practical, real-world skills through structured, gamified learning journeys. It combines guided progression, AI-driven personalization, and habit-forming engagement loops — already reaching over 10,000 learners across web and app.
          </p>

          <p className={styles.sectionParagraph}>
            The platform runs six independent learning paths, each with its own three-level progression (Foundational, Builder, Mastery) and eight to ten units per level. Every path keeps its own progress, rewards, analytics, and learning history fully isolated, so the system scales cleanly as new paths are added — most recently, a dedicated English-language course.
          </p>

          <p className={styles.sectionParagraph}>
            Rather than delivering static content, an AI layer continuously evaluates learner performance, identifies weak areas, adjusts difficulty, and personalizes guidance over time — the same intelligence-first approach now extending into voice-based language learning.
          </p>

          {/* 4 Stats Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>10K+</span>
              <span className={styles.statLabel}>Active learners across web and app</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>6</span>
              <span className={styles.statLabel}>Independent, isolated learning paths</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Levels per path — Foundational, Builder, Mastery</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>14</span>
              <span className={styles.statLabel}>Languages worldwide available in 175 countries</span>
            </div>
          </div>

          <div className={styles.subSectionLabel}>CORE USER VALUE</div>

          <div className={styles.cardsGrid2x2}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <Brain size={22} />
              </div>
              <h4 className={styles.featureCardTitle}>AI-personalized feedback</h4>
              <p className={styles.featureCardDesc}>
                Adapts difficulty and recommends revision lessons based on real learner performance, in real time.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <Gamepad2 size={22} />
              </div>
              <h4 className={styles.featureCardTitle}>Gamified progression</h4>
              <p className={styles.featureCardDesc}>
                BP (Brainify Points), streaks, and reward moments turn skill-building into a daily habit rather than a one-off course.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <Globe2 size={22} />
              </div>
              <h4 className={styles.featureCardTitle}>Multilingual delivery</h4>
              <p className={styles.featureCardDesc}>
                Lessons and AI feedback are localized per learner without translating the entire app UI.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <Key size={22} />
              </div>
              <h4 className={styles.featureCardTitle}>Invite-based entitlement</h4>
              <p className={styles.featureCardDesc}>
                Access is granted per learning path through validated invite codes, not open enrollment.
              </p>
            </div>
          </div>

          {/* 6 Learning Paths */}
          <div className={styles.subSectionLabel}>LEARNING PATHS</div>
          <div className={styles.pathsContainer}>
            <div className={styles.pathsGrid}>
              <div className={styles.pathItem}>
                <div className={styles.pathDot} />
                <span>AI Path</span>
              </div>
              <div className={styles.pathItem}>
                <div className={styles.pathDot} />
                <span>Creator Path</span>
              </div>
              <div className={styles.pathItem}>
                <div className={styles.pathDot} />
                <span>Digital Marketing Path</span>
              </div>
              <div className={styles.pathItem}>
                <div className={styles.pathDot} />
                <span>Crypto Path</span>
              </div>
              <div className={styles.pathItem}>
                <div className={styles.pathDot} />
                <span>Financial Literacy Path</span>
              </div>
              <div className={styles.pathItem}>
                <div className={styles.pathDot} />
                <span>Youth Path</span>
              </div>
            </div>
          </div>

          {/* Key Quote Callout Banner (Page 3) */}
          <div className={styles.quoteCalloutSection}>
            <blockquote className={styles.quoteCalloutText}>
              “Every path shares the same progression engine, gamification system, and AI evaluation pipeline — one platform architecture drives all six.”
            </blockquote>
          </div>
        </section>

        {/* ── 02 Architecture (Page 4) ── */}
        <section id="architecture" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>ARCHITECTURE</span>
            <h2 className={styles.sectionTitle}>
              A layered architecture built around the learner lifecycle.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            The platform is organized into independent, interconnected service layers, so each part of the system — onboarding, entitlement, content, gamification, AI, and analytics — can scale on its own without touching the rest of the app.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '240px' }}>Layer</th>
                  <th>Responsibility</th>
                  <th style={{ width: '220px' }}>Technology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCol}>Presentation (App + Web)</td>
                  <td>Onboarding, dashboard, lesson delivery, gamified UI</td>
                  <td><span className={styles.techPill}>React Native, React</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Auth &amp; Entitlement</td>
                  <td>Identity, sessions, invite-code validation, path access</td>
                  <td><span className={styles.techPill}>FastAPI, PostgreSQL</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Learning Content</td>
                  <td>Path → Level → Unit → Lesson hierarchy</td>
                  <td><span className={styles.techPill}>PostgreSQL</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Gamification</td>
                  <td>XP, streaks, rewards, milestone unlocks</td>
                  <td><span className={styles.techPill}>FastAPI, Redis</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>AI Learning Intelligence</td>
                  <td>Adaptive difficulty, feedback generation, weak-area detection</td>
                  <td><span className={styles.techPill}>LLM APIs + LangChain</span></td>
                </tr>
                <tr>
                  <td className={styles.layerCol}>Progress Tracking</td>
                  <td>Converts raw activity into structured progress records</td>
                  <td><span className={styles.techPill}>PostgreSQL, Redis</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.subSectionLabel}>FEATURE MODULES</div>
          <div className={styles.modulesCloud}>
            {[
              'auth',
              'invite-entitlement',
              'dashboard',
              'path-progression',
              'lesson-engine',
              'ai-feedback',
              'gamification',
              'multilingual',
              'english-course',
              'admin-analytics',
              'ai-mentor',
              'certification',
            ].map((module) => (
              <span key={module} className={styles.moduleTag}>
                {module}
              </span>
            ))}
          </div>
        </section>

        {/* ── 03 The Core Problem (Page 4) ── */}
        <section id="core-problem" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>THE CORE PROBLEM</span>
            <h2 className={styles.sectionTitle}>
              Personalizing learning for 10,000+ users, across six isolated paths, without a content bottleneck.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Unlike a static content-delivery app, brAInify&apos;s AI layer has to evaluate every learner&apos;s performance continuously — identifying weak areas, adjusting difficulty, and generating feedback — independently for six learning paths at once, without letting progress or analytics leak across paths.
          </p>

          <p className={styles.sectionParagraph}>
            Each lesson runs a closed learning loop: content is presented, the learner responds, AI evaluates the answer, personalized feedback and rewards are triggered, weak areas are flagged, and a revision lesson is recommended before the next lesson unlocks.
          </p>

          {/* Closed Loop Diagram */}
          <div className={styles.diagramContainer}>
            <div className={styles.flowRow}>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>Step 01</span>
                <span className={styles.flowStepName}>Content</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>Step 02</span>
                <span className={styles.flowStepName}>Response</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>Step 03</span>
                <span className={styles.flowStepName}>AI Evaluation</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>Step 04</span>
                <span className={styles.flowStepName}>Feedback + Reward</span>
              </div>
            </div>
          </div>

          {/* Learner Progression Flow */}
          <div className={styles.subSectionLabel}>LEARNER PROGRESSION FLOW</div>
          <div className={styles.diagramContainer}>
            <div className={styles.flowRow}>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>01</span>
                <span className={styles.flowStepName}>Invite Code</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>02</span>
                <span className={styles.flowStepName}>Dashboard</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>03</span>
                <span className={styles.flowStepName}>Path → Level</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>04</span>
                <span className={styles.flowStepName}>Lesson</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>05</span>
                <span className={styles.flowStepName}>Progress Update</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 English AI Course (Page 5) ── */}
        <section id="english-course" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>THE AI VALUE ENGINE</span>
            <h2 className={styles.sectionTitle}>
              The new English course — an avatar-led, voice-first way to learn a language.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Alongside the six skill paths, brAInify is building a dedicated English course that teaches entirely through spoken conversation with a 3D AI avatar tutor, rather than through tap-and-select exercises. Learners speak, and the avatar listens and replies — a voice-to-voice loop that reads intent and behavior in real time and adapts the lesson accordingly.
          </p>

          <p className={styles.sectionParagraph}>
            The course teaches English through the learner&apos;s own native language, lowering the barrier for complete beginners, and will launch supporting 14 languages — bringing the same AI-personalization philosophy that powers the rest of brAInify into a fully conversational, native-language-first format.
          </p>

          {/* 4 Feature Badges */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3D</span>
              <span className={styles.statLabel}>AI avatar tutor</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>Voice</span>
              <span className={styles.statLabel}>Voice-to-voice interaction, no typing</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>14</span>
              <span className={styles.statLabel}>Languages supported at launch</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>Live</span>
              <span className={styles.statLabel}>Real-time understanding of learner behavior</span>
            </div>
          </div>

          {/* English Course Flow */}
          <div className={styles.subSectionLabel}>ENGLISH COURSE FLOW</div>
          <div className={styles.diagramContainer}>
            <div className={styles.flowRow}>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>Step 01</span>
                <span className={styles.flowStepName}>Learner speaks</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>Step 02</span>
                <span className={styles.flowStepName}>Avatar listens (voice-to-voice)</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>Step 03</span>
                <span className={styles.flowStepName}>AI reads meaning + behavior</span>
              </div>
              <span className={styles.flowArrow}>→</span>
              <div className={styles.flowStep}>
                <span className={styles.flowStepNum}>Step 04</span>
                <span className={styles.flowStepName}>Native-language response</span>
              </div>
            </div>
          </div>

          <div className={styles.cardsGrid2x2}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <Sparkles size={22} />
              </div>
              <h4 className={styles.featureCardTitle}>Avatar-led delivery</h4>
              <p className={styles.featureCardDesc}>
                A 3D avatar leads every lesson through spoken conversation rather than multiple-choice screens.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <Mic size={22} />
              </div>
              <h4 className={styles.featureCardTitle}>Voice-to-voice interaction</h4>
              <p className={styles.featureCardDesc}>
                No typing — the learner speaks, the avatar listens and replies, in a continuous voice loop.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <Brain size={22} />
              </div>
              <h4 className={styles.featureCardTitle}>Behavior-aware AI</h4>
              <p className={styles.featureCardDesc}>
                The avatar reads not just correctness but hesitation, pace, and pattern, adapting the lesson to how the learner is actually engaging.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <Globe2 size={22} />
              </div>
              <h4 className={styles.featureCardTitle}>Native-language-first teaching</h4>
              <p className={styles.featureCardDesc}>
                Instruction is delivered through the learner&apos;s own native language across 14 languages at launch, rather than English-only immersion.
              </p>
            </div>
          </div>
        </section>

        {/* ── 05 Analytics & Admin Intelligence (Page 5) ── */}
        <section id="analytics" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>ANALYTICS &amp; ADMIN INTELLIGENCE</span>
            <h2 className={styles.sectionTitle}>
              Admin visibility across every path, level, and learner.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            An internal analytics dashboard tracks total platform users, users per course, enrollment distribution, progress by path / level / unit / lesson, completion rates, XP velocity, accuracy trends, lesson drop-off points, and feedback data — giving the team a continuous read on engagement and where lesson sequencing or difficulty needs tuning.
          </p>
        </section>

        {/* ── 06 Product Walkthrough (Page 6) ── */}
        <section id="product-walkthrough" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>PRODUCT WALKTHROUGH</span>
            <h2 className={styles.sectionTitle}>
              A guided home base, plus a video library for every path.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            The Paths screen is the learner’s home base — each card tracks live progress and BP (brAInify Points) for that path. Alongside it, a localized Video Library gives tool walkthroughs and platform guides mapped to each path, so learners always know where to start.
          </p>

          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImageWrapper}>
                <Image
                  src="/assets/CaseStudies/brainify/learning-paths.png"
                  alt="brAInify Learning Paths Screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.showcaseImg}
                />
              </div>
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseTitle}>Learning Paths</h3>
                <p className={styles.showcaseCaption}>
                  A structured journey from fundamentals to mastery, with live progress and BP shown on every path card.
                </p>
              </div>
            </div>

            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImageWrapper}>
                <Image
                  src="/assets/CaseStudies/brainify/video-library.png"
                  alt="brAInify Video Library Screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.showcaseImg}
                />
              </div>
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseTitle}>Video Library</h3>
                <p className={styles.showcaseCaption}>
                  Tool walkthroughs and platform guides organized by path — AI, Content Creator, Digital Marketing, Financial Intelligence, and Digital Currency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 AI Mentor (Page 7) ── */}
        <section id="ai-mentor" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>AI MENTOR</span>
            <h2 className={styles.sectionTitle}>
              An assistant that knows the curriculum — and exactly where the learner is in it.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            The AI Mentor is backed by a RAG layer with knowledge of every course and path in brAInify, so it can answer open curriculum questions like a tutor. It’s also screen-aware: it reads the learner’s exact on-screen context — course, level, unit, and chapter — so navigational questions get a grounded answer instead of a generic one.
          </p>

          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImageWrapper}>
                <Image
                  src="/assets/CaseStudies/brainify/curriculum-qa.png"
                  alt="brAInify Curriculum Q&amp;A Screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.showcaseImg}
                />
              </div>
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseTitle}>Curriculum Q&amp;A</h3>
                <p className={styles.showcaseCaption}>
                  Answers general questions — like explaining supervised learning — grounded in the full course library via RAG.
                </p>
              </div>
            </div>

            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImageWrapper}>
                <Image
                  src="/assets/CaseStudies/brainify/screen-aware-context.png"
                  alt="brAInify Screen-aware context Mentor"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.showcaseImg}
                />
              </div>
              <div className={styles.showcaseContent}>
                <h3 className={styles.showcaseTitle}>Screen-aware Context</h3>
                <p className={styles.showcaseCaption}>
                  Asked “where am I,” the Mentor reads the live screen state — Unit 10, Chapter 3/3, AI Made Simple — and answers without the learner explaining anything.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 08 Certification (Page 8) ── */}
        <section id="certification" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>CERTIFICATION</span>
            <h2 className={styles.sectionTitle}>
              A verifiable credential at the end of every path.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Completing a learning path doesn’t just unlock the next one — it issues a certificate naming the specific skills and systems the learner demonstrated, co-signed by PGAGI’s delivery partner, so completion carries real signal outside the app.
          </p>

          {/* Certificate Image Showcase */}
          <div className={styles.certShowcaseBlock}>
            <div className={styles.certImageWrapper}>
              <Image
                src="/assets/CaseStudies/brainify/certificate.png"
                alt="brAInify Path Completion Certificate"
                width={1200}
                height={820}
                className={styles.certImage}
              />
            </div>
            <p className={styles.certCaption}>
              <strong>Path completion certificate.</strong> Awarded automatically on completion, naming the exact skills and systems covered — shown here for the Digital Marketing Path.
            </p>
          </div>
        </section>

        {/* ── 09 What This Demonstrates (Page 9) ── */}
        <section id="demonstrates" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.blueBarLabel}>WHAT THIS DEMONSTRATES</span>
            <h2 className={styles.sectionTitle}>
              One platform spanning mobile, web, and AI-native language learning.
            </h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            brAInify spans the full width of a modern ed-tech product: a gamified progression engine serving 10,000+ learners, an AI layer that personalizes feedback and difficulty per learner across six isolated paths, multilingual content delivery, and — now in development — a voice-first, avatar-led English course built for global reach across 14 languages.
          </p>

          <p className={styles.sectionParagraph}>
            The same principle runs through every layer of the platform: don&apos;t just deliver content — continuously read the learner and adapt to them, whether that&apos;s a weak-area recommendation in the Digital Marketing Path or a native-language reply from a 3D avatar in the English course.
          </p>

          <div className={styles.impactCard}>
            <div className={styles.impactLabelCol}>
              <span className={styles.impactLabel}>Vertical</span>
              <span className={styles.impactValue}>EdTech · AI</span>
            </div>
            <div>
              <span className={styles.impactLabel} style={{ display: 'block', marginBottom: '6px' }}>Delivered</span>
              <p className={styles.impactDesc}>
                Mobile app · Web app · AI personalization engine · Admin analytics dashboard · Multilingual voice-AI English course (in development)
              </p>
            </div>
          </div>

          <div className={styles.caseStudyFooterBar}>
            <span>PGAGI | brAInify Case Study</span>
            <span>EdTech + AI Product</span>
          </div>
        </section>
      </div>

      {/* ── Call to action shared section ── */}
      <ProductVisionCta />
    </div>
  );
}
