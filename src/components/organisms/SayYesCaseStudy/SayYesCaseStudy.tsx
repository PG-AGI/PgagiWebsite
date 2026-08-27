'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ChevronRight, RefreshCw, Layers, Sparkles, MessageSquare, MapPin, Users, PieChart } from 'lucide-react';
import styles from '@/styles/components/organisms/SayYesCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';
import ProductVisionCta from '@/components/organisms/ProductVisionCta';

interface SayYesCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const SECTIONS = [
  { id: 'overview', label: '01 Overview' },
  { id: 'problem', label: '02 Problem' },
  { id: 'how-it-works', label: '03 How Ella Works' },
  { id: 'recommendation-engine', label: '04 Venue Engine' },
  { id: 'google-places-api', label: '05 Google Places API' },
  { id: 'collaboration', label: '06 Collaboration' },
  { id: 'budget', label: '07 Budget' },
  { id: 'architecture', label: '08 Architecture' },
  { id: 'results', label: '09 Results' },
  { id: 'roadmap', label: '10 Roadmap' },
];

export default function SayYesCaseStudy({ caseStudy }: SayYesCaseStudyProps) {
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
    <div className={styles.sayYesPage}>
      {/* ── Top Brand Wave Banner (Signature PDF styling) ── */}
      <div className={styles.topWaveWrapper} aria-hidden="true">
        <svg
          className={styles.topWaveSvg}
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C240 70 480 95 720 70C960 45 1200 60 1440 30V120H0V0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className={styles.rail}>
        {/* ── Page 1: Hero & Metadata ── */}
        <section className={styles.heroSection}>
          <div className={styles.breadcrumb}>
            <span>PGAGI</span>
            <span className={styles.slash}>/</span>
            <span>CASE STUDY</span>
            <span className={styles.slash}>/</span>
            <span>APPLIED AI PRODUCT</span>
          </div>

          <h1 className={styles.heroMainTitle}>SayYes.AI</h1>
          <h2 className={styles.heroSubtitle}>
            <span className={styles.accentElla}>Ella</span>, the AI wedding planning companion
          </h2>

          <div className={styles.redAccentBar} />

          <p className={styles.heroLead}>
            A conversational AI platform that understands what a couple actually wants from their wedding, then finds the venues and vendors that match it.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>SayYes.AI</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>Consumer mobile application, AI recommendation systems</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Built By</span>
              <span className={styles.metaValue}>PGAGI</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Core Stack</span>
              <span className={styles.metaValue}>Flutter, FastAPI, Google Places API, semantic retrieval, Google Cloud</span>
            </div>
          </div>
        </section>

        {/* ── Sticky Sub-Navigation ── */}
        <nav className={styles.stickyNav} aria-label="Case study sections">
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
        </nav>

        {/* ── 01 Overview (Page 2) ── */}
        <section id="overview" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            <strong>SayYes.AI</strong> is an AI-first mobile application for couples planning a wedding. The product is built around Ella, a conversational assistant that replaces the checklist-and-directory model most wedding apps use. Instead of asking a couple to browse listings and filter them by hand, Ella holds a conversation, builds an understanding of what the couple wants, and returns a short, ranked set of options that fit.
          </p>

          <p className={styles.sectionParagraph}>
            The platform covers the full planning arc: bringing bridesmaids and family into a shared workspace, building mood boards, capturing functional requirements for each event, recommending venues and vendors, distributing tasks, and tracking the budget as bookings are confirmed.
          </p>

          <p className={styles.sectionParagraph}>
            The engine underneath all of it is <strong>live retrieval</strong>. Rather than maintaining a curated vendor directory that has to be manually onboarded and then goes stale, Ella queries the <strong>Google Places API</strong> at the moment the couple asks. Every venue in a recommendation is pulled from live Places data, matched semantically against what the couple described, and returned as a short ranked shortlist. That single design decision is what separates the product from every listings app in the category: coverage is not limited to who signed up, and the underlying place data does not decay in a database.
          </p>

          <p className={styles.sectionParagraph}>
            PGAGI built the application end to end, including the conversational layer, the Places-backed retrieval and ranking pipeline, the collaboration workspace, and the cloud infrastructure on Google Cloud.
          </p>

          {/* 4 Feature Pillars (Page 2) */}
          <div className={styles.overviewCardsGrid}>
            <div className={styles.overviewCard}>
              <h3 className={styles.overviewCardTitle}>Ella</h3>
              <span className={styles.overviewCardLabel}>
                Conversational planning assistant
              </span>
            </div>
            <div className={styles.overviewCard}>
              <h3 className={styles.overviewCardTitle}>Live</h3>
              <span className={styles.overviewCardLabel}>
                Google Places API retrieval, not a curated directory
              </span>
            </div>
            <div className={styles.overviewCard}>
              <h3 className={styles.overviewCardTitle}>Multi-user</h3>
              <span className={styles.overviewCardLabel}>
                Couple, bridesmaids, family in one workspace
              </span>
            </div>
            <div className={styles.overviewCard}>
              <h3 className={styles.overviewCardTitle}>Top 5</h3>
              <span className={styles.overviewCardLabel}>
                Ranked shortlist with reasoning, per query
              </span>
            </div>
          </div>
        </section>

        {/* ── 02 The Problem We Were Solving (Page 3) ── */}
        <section id="problem" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>The problem we were solving</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Wedding planning is one of the few high-budget, high-emotion purchases most people make exactly once, with no prior experience to draw on. The existing tooling does not account for that.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '260px' }}>Problem</th>
                  <th>What it looks like in practice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.primaryCol}>Directories, not planners</td>
                  <td>
                    Existing apps present a hand-onboarded list of vendors and a set of filters. Coverage stops at whoever signed up, the data ages, and the couple still does all the judgement work: deciding what they want, translating that into filters, and comparing options by hand.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Choice overload</td>
                  <td>
                    A single city can return hundreds of venues. Without a way to express taste, vibe, and constraint together, the couple filters on price and capacity alone and loses the things that actually matter to them.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>No shared workspace</td>
                  <td>
                    Coordination happens across WhatsApp groups, screenshots, and spreadsheets. Bridesmaids and family have no structured way to contribute, and decisions get lost.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>No memory of preference</td>
                  <td>
                    Every search starts from zero. Nothing the couple liked or rejected last week informs what they are shown this week.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Budget drift</td>
                  <td>
                    The budget is set once at the start and then diverges silently as bookings are confirmed, with no running view of the gap.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 03 How Ella Works (Page 4) ── */}
        <section id="how-it-works" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>How Ella works</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Ella is structured as a <strong>loop, not a funnel</strong>. Every interaction feeds back into the couple&apos;s preference profile, so the recommendations narrow as the conversation continues rather than resetting each session.
          </p>

          {/* Figure 1: The Planning Loop Diagram */}
          <div className={styles.figureContainer}>
            <div className={styles.planningLoopOuter}>
              <div className={styles.diagramTitle}>The planning loop</div>
              
              {/* Top row: 01 to 05 */}
              <div className={styles.loopGrid}>
                <div className={styles.loopCard}>
                  <div className={styles.loopCardHeader}>
                    <span className={styles.loopCardNum}>01</span>
                    <span className={styles.loopCardTitle}>Onboarding</span>
                  </div>
                  <span className={styles.loopCardSub}>Culture, style, budget band, event types</span>
                </div>

                <div className={styles.loopCard}>
                  <div className={styles.loopCardHeader}>
                    <span className={styles.loopCardNum}>02</span>
                    <span className={styles.loopCardTitle}>Preference profile</span>
                  </div>
                  <span className={styles.loopCardSub}>Stored, reused, updated</span>
                </div>

                <div className={styles.loopCard}>
                  <div className={styles.loopCardHeader}>
                    <span className={styles.loopCardNum}>03</span>
                    <span className={styles.loopCardTitle}>Requirement capture</span>
                  </div>
                  <span className={styles.loopCardSub}>Per event, per vendor type</span>
                </div>

                <div className={styles.loopCard}>
                  <div className={styles.loopCardHeader}>
                    <span className={styles.loopCardNum}>04</span>
                    <span className={styles.loopCardTitle}>Recommendation</span>
                  </div>
                  <span className={styles.loopCardSub}>Venues and vendors, ranked shortlist</span>
                </div>

                <div className={styles.loopCard}>
                  <div className={styles.loopCardHeader}>
                    <span className={styles.loopCardNum}>05</span>
                    <span className={styles.loopCardTitle}>Shortlist</span>
                  </div>
                  <span className={styles.loopCardSub}>Shared with bridesmaids, family</span>
                </div>
              </div>

              {/* Bottom row: 08 <- 07 <- 06 */}
              <div className={styles.loopGridBottom}>
                <div className={styles.loopCard}>
                  <div className={styles.loopCardHeader}>
                    <span className={styles.loopCardNum}>08</span>
                    <span className={styles.loopCardTitle}>Task distribution</span>
                  </div>
                  <span className={styles.loopCardSub}>Assigned, tracked, reminded</span>
                </div>

                <div className={styles.loopCard}>
                  <div className={styles.loopCardHeader}>
                    <span className={styles.loopCardNum}>07</span>
                    <span className={styles.loopCardTitle}>Booking & budget</span>
                  </div>
                  <span className={styles.loopCardSub}>Confirmed spend tracked against plan</span>
                </div>

                <div className={styles.loopCard}>
                  <div className={styles.loopCardHeader}>
                    <span className={styles.loopCardNum}>06</span>
                    <span className={styles.loopCardTitle}>Decision</span>
                  </div>
                  <span className={styles.loopCardSub}>Like, reject, save</span>
                </div>
              </div>

              {/* Feedback Loop Callout */}
              <div className={styles.feedbackLoopBar}>
                <RefreshCw size={16} />
                <span>Feedback updates the preference profile on every interaction</span>
              </div>
            </div>
            <span className={styles.figureCaption}>
              FIGURE 1 / END TO END PLANNING FLOW, WITH THE PREFERENCE FEEDBACK LOOP
            </span>
          </div>

          <div className={styles.calloutBox}>
            <div className={styles.calloutHeader}>What Ella Captures</div>
            <p className={styles.calloutContent}>
              Requirement capture is deliberately broad, because a wedding is not one purchase. Ella builds a structured picture across every event in the calendar: which functions are happening, whether a given function needs a DJ or live music, the cuisine and service format for catering, decor direction, guest count per event, and the budget band the couple is working inside. That structured picture is what makes downstream recommendation possible.
            </p>
          </div>
        </section>

        {/* ── 04 Deep Dive: Venue Recommendation Engine (Pages 5 & 6) ── */}
        <section id="recommendation-engine" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>Deep dive: the venue recommendation engine</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Venue selection is the highest-stakes decision in the plan. It sets the date, the guest cap, the budget anchor, and the aesthetic direction for everything else. It is also the decision where directory-style search fails hardest, because the things couples care about are not fields in a database.
          </p>

          <p className={styles.sectionParagraph}>
            This is the pipeline we built, and it is the clearest illustration of how the product works.
          </p>

          {/* Figure 2: Venue Recommendation Pipeline Diagram */}
          <div className={styles.figureContainer}>
            <div className={styles.pipelineWrapper}>
              <div className={styles.diagramTitle}>Venue recommendation pipeline</div>

              {/* Step 1 + Preference Profile */}
              <div className={styles.pipelineRow}>
                <div className={styles.pipelineStepCard}>
                  <div className={styles.stepTitle}>Conversational input</div>
                  <div className={styles.stepDesc}>
                    Location and area / vibe and aesthetic / indoor or outdoor / guest count / budget band / event type / date window
                  </div>
                </div>
                <div className={styles.sideSignalCard}>
                  <span className={styles.sideSignalLabel}>Preference Profile</span>
                  <span className={styles.sideSignalValue}>
                    Prior likes and rejections read in as additional signal
                  </span>
                </div>
              </div>

              <div className={styles.pipelineDownArrow}>↓</div>

              {/* Step 2 */}
              <div className={styles.pipelineStepCard}>
                <div className={styles.stepTitle}>Requirement extraction</div>
                <div className={styles.stepDesc}>
                  Free-form conversation resolved into structured, queryable parameters
                </div>
              </div>

              <div className={styles.pipelineDownArrow}>↓</div>

              {/* Step 3 + External Places Source */}
              <div className={styles.pipelineRow}>
                <div className={styles.pipelineStepCard}>
                  <div className={styles.stepTitle}>Candidate retrieval</div>
                  <div className={styles.stepDesc}>
                    Google Places API queried against the structured location and category parameters to build a live candidate pool
                  </div>
                </div>
                <div className={styles.sideSignalCard}>
                  <span className={styles.sideSignalLabel}>External Data Source</span>
                  <span className={styles.sideSignalValue}>
                    Google Places API — Live venue data, not a static list
                  </span>
                </div>
              </div>

              <div className={styles.pipelineDownArrow}>↓</div>

              {/* Step 4: Semantic Matching (Red Highlight Box) */}
              <div className={`${styles.pipelineStepCard} ${styles.highlightRed}`}>
                <div className={styles.stepTitle}>Semantic matching and filtration</div>
                <div className={styles.stepDesc}>
                  The couple’s stated requirement is matched semantically against the retrieved candidate attributes, then hard constraints are applied: capacity, budget band, indoor or outdoor, distance
                </div>
              </div>

              <div className={styles.pipelineDownArrow}>↓</div>

              {/* Step 5 */}
              <div className={styles.pipelineStepCard}>
                <div className={styles.stepTitle}>Top five recommendations</div>
                <div className={styles.stepDesc}>
                  A short ranked shortlist, presented conversationally with reasoning
                </div>
              </div>

              <div className={styles.pipelineDownArrow}>↓</div>

              {/* Step 6 */}
              <div className={styles.pipelineStepCard}>
                <div className={styles.stepTitle}>Couple reacts: likes, rejects, asks for a different direction</div>
                <div className={styles.stepDesc}>
                  Every reaction updates the preference profile, which refines the next round
                </div>
              </div>
            </div>

            <span className={styles.figureCaption}>
              FIGURE 2 / VENUE RECOMMENDATION PIPELINE, CONVERSATION TO RANKED SHORTLIST
            </span>
          </div>

          {/* Why this beats filter-based search (Page 6) */}
          <div className={styles.calloutHeader} style={{ marginTop: '48px' }}>
            Why This Beats Filter-Based Search
          </div>

          <div className={styles.pointsList}>
            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>01</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>The couple never has to translate taste into filters</span>
                <p className={styles.pointText}>
                  A request like an open-air venue that feels intimate for around two hundred guests is a sentence, not a set of dropdowns. Requirement extraction handles the translation so the couple does not have to.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>02</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Retrieval is live, not a curated directory</span>
                <p className={styles.pointText}>
                  Candidates come from the Google Places API at the moment of the query. Coverage is therefore not limited to venues someone manually onboarded, and the underlying place data cannot go stale in a database. Section 05 breaks this down in full.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>03</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Semantic matching does the work filters cannot</span>
                <p className={styles.pointText}>
                  Hard constraints like capacity and distance are handled as filters, because that is what they are. The softer requirement, the vibe and the character of the place, is matched semantically against the retrieved venue attributes. Both layers run, in that order.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>04</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Five options, not five hundred</span>
                <p className={styles.pointText}>
                  The output is deliberately capped at a short ranked shortlist. Presenting five defensible options with reasoning is what moves a decision forward. Presenting a paginated list is what stalls it.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>05</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>The conversation narrows instead of restarting</span>
                <p className={styles.pointText}>
                  Each reaction is signal. Rejecting three banquet halls in favour of a garden property changes what the next round returns, and that carries across sessions rather than resetting.
                </p>
              </div>
            </div>
          </div>

          <p className={styles.sectionParagraph} style={{ fontStyle: 'italic', marginTop: '16px' }}>
            The same pipeline shape is reused for other vendor categories, with the constraint set and the retrieval query changing per category.
          </p>
        </section>

        {/* ── 05 How We Use the Google Places API (Pages 7 & 8) ── */}
        <section id="google-places-api" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>05</span>
            <h2 className={styles.sectionTitle}>How we use the Google Places API</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Retrieval is the part of this product that is genuinely hard, and it is the part worth understanding. The Google Places API is not used as a search box. It is used as a <strong>live geospatial data source</strong> that the intelligence layer queries on demand, with the couple’s requirement already resolved into structured parameters before a single call is made.
          </p>

          {/* 4 Places Badges */}
          <div className={styles.placesBadgesGrid}>
            <div className={styles.placesBadge}>
              <span className={styles.placesBadgeTitle}>Live</span>
              <span className={styles.placesBadgeDesc}>
                Queried at request time, never cached into a stale directory
              </span>
            </div>
            <div className={styles.placesBadge}>
              <span className={styles.placesBadgeTitle}>Open</span>
              <span className={styles.placesBadgeDesc}>
                Coverage is not limited to onboarded vendors
              </span>
            </div>
            <div className={styles.placesBadge}>
              <span className={styles.placesBadgeTitle}>Geospatial</span>
              <span className={styles.placesBadgeDesc}>
                Area and radius reasoning, not text matching on a city name
              </span>
            </div>
            <div className={styles.placesBadge}>
              <span className={styles.placesBadgeTitle}>Enriched</span>
              <span className={styles.placesBadgeDesc}>
                Place attributes feed the semantic scoring layer
              </span>
            </div>
          </div>

          {/* 7-Step Walkthrough */}
          <div className={styles.pointsList}>
            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>01</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>The conversation becomes a structured query</span>
                <p className={styles.pointText}>
                  Before Places is called, requirement extraction has already resolved the couple’s description into parameters the API can act on: the target locality and the area within it, the search radius that area implies, the place category being looked for, and the descriptive keywords that came out of how the couple talked about the space they want.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>02</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Area reasoning, not city-name matching</span>
                <p className={styles.pointText}>
                  A request framed around a neighbourhood, a landmark, or a drive time is resolved geospatially rather than as a text match. This matters in practice, because couples describe location the way people do, by area and proximity, not by administrative boundary. Places handles that natively and the pipeline is built to use it.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>03</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Candidate pool assembly</span>
                <p className={styles.pointText}>
                  The query returns a pool of live candidate places, wider than what the couple will ever see. Results are normalised and de-duplicated, and each candidate carries the attributes Places exposes: category, geographic position, address, rating signal, and imagery. That attribute set is the raw material the next stage reasons over.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>04</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Semantic matching against the pool</span>
                <p className={styles.pointText}>
                  This is the step a filter cannot do. The couple’s stated requirement, including the soft part about vibe and character, is matched semantically against each candidate’s attributes and descriptive signal. The output is a relevance score per candidate that reflects how the place was described, not just whether it clears a numeric threshold.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>05</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Hard constraints applied on top</span>
                <p className={styles.pointText}>
                  Semantic score alone would surface beautiful venues that cannot seat the guest list. So the non-negotiables run as filters after scoring: capacity against guest count, budget band, indoor or outdoor, and distance from the area the couple anchored on. Anything that fails a hard constraint is removed regardless of how well it scored.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>06</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Ranked down to five, with reasoning</span>
                <p className={styles.pointText}>
                  What survives is ranked and cut to five. Each one is presented conversationally with the reason it made the list, so the couple is evaluating a recommendation rather than scrolling a result set.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>07</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>The reaction changes the next query</span>
                <p className={styles.pointText}>
                  Likes, rejections, and redirections are written back to the preference profile, which is read in as additional signal the next time Places is queried. The pipeline runs again with a sharper requirement, so the shortlist converges instead of resetting.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.calloutBox}>
            <div className={styles.calloutHeader}>Why Live Retrieval Was The Right Call</div>
            <p className={styles.calloutContent}>
              The alternative was a curated vendor database, which is what the rest of the category does. It fails in three predictable ways: coverage caps at whoever your sales team onboarded, the data ages the moment it is written, and the couple’s options are silently constrained by your business development pipeline rather than by what actually exists near them. Querying Places live removes all three problems at once, and puts the engineering effort where it creates real value, which is the matching and ranking layer sitting on top of the retrieved pool.
            </p>
          </div>
        </section>

        {/* ── 06 Collaboration & Task Distribution (Page 9) ── */}
        <section id="collaboration" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>06</span>
            <h2 className={styles.sectionTitle}>Collaboration and task distribution</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            A wedding is planned by a group, not an individual. The application treats the couple&apos;s plan as a <strong>shared workspace</strong> rather than a private account.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Capability</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.primaryCol}>Invitations</td>
                  <td>
                    The couple invites bridesmaids and family members into the plan, with visibility into shortlists, mood boards, and the task board.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Mood boards</td>
                  <td>
                    Shared visual boards for decor, attire, and theme direction, built collaboratively rather than by one person.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Task assignment</td>
                  <td>
                    An internal board with assignment, status tracking, and reminders, so responsibility for each item is explicit.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Shared shortlists</td>
                  <td>
                    Venue and vendor shortlists can be circulated for reactions before anything is committed.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Real-time sync</td>
                  <td>
                    Changes propagate to every participant as they happen, so no one in the group is working from a stale view of the plan.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 07 Budget Intelligence (Page 9) ── */}
        <section id="budget" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>07</span>
            <h2 className={styles.sectionTitle}>Budget intelligence</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Ella generates an initial budget allocation from the inputs captured during onboarding and requirement capture, splitting the total across venue, catering, decor, and the other categories in the plan. As bookings are confirmed, the allocation updates against actual committed spend, so the couple sees the gap between plan and reality while there is still time to act on it.
          </p>

          <p className={styles.sectionParagraph}>
            Where a category is running over, Ella surfaces the <strong>trade-off</strong> rather than just the number: what would have to give elsewhere, or which constraint could be relaxed to bring the category back into range.
          </p>
        </section>

        {/* ── 08 Technical Architecture (Page 10) ── */}
        <section id="architecture" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>08</span>
            <h2 className={styles.sectionTitle}>Technical architecture</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            The platform runs end to end on Google Cloud. The layers below separate the application logic from the intelligence layer that drives Ella, so retrieval and ranking can be tuned without touching the workspace, task, or budget services.
          </p>

          {/* Figure 3: Architecture Layers Diagram */}
          <div className={styles.figureContainer}>
            <div className={styles.archStack}>
              <div className={styles.diagramTitle}>Architecture layers</div>

              {/* Client Layer (Red Banner) */}
              <div className={`${styles.archLayer} ${styles.clientLayer}`}>
                <div className={styles.archLayerHeader}>CLIENT LAYER</div>
                <div className={styles.archClientText}>
                  Flutter mobile application, iOS and Android from one codebase
                </div>
              </div>

              {/* Application Layer */}
              <div className={styles.archLayer}>
                <div className={styles.archLayerHeader}>APPLICATION LAYER</div>
                <div className={styles.archSubGrid}>
                  <div className={styles.archSubBox}>FastAPI services</div>
                  <div className={styles.archSubBox}>Auth and workspace</div>
                  <div className={styles.archSubBox}>Task and budget logic</div>
                  <div className={styles.archSubBox}>Real-time sync</div>
                </div>
              </div>

              {/* Intelligence Layer */}
              <div className={styles.archLayer}>
                <div className={styles.archLayerHeader}>INTELLIGENCE LAYER</div>
                <div className={styles.archSubGrid}>
                  <div className={styles.archSubBox}>Conversational agent (Ella)</div>
                  <div className={styles.archSubBox}>Requirement extraction</div>
                  <div className={styles.archSubBox}>Semantic matching and ranking</div>
                  <div className={styles.archSubBox}>Foundation model layer</div>
                </div>
              </div>

              {/* Data Layer */}
              <div className={styles.archLayer}>
                <div className={styles.archLayerHeader}>DATA LAYER</div>
                <div className={`${styles.archSubGrid} ${styles.grid3}`}>
                  <div className={styles.archSubBox}>Relational store, core plan data</div>
                  <div className={styles.archSubBox}>Vector store, embeddings</div>
                  <div className={styles.archSubBox}>Session and conversation memory</div>
                </div>
              </div>

              {/* External & Infrastructure Row */}
              <div className={`${styles.archSubGrid} ${styles.grid2}`} style={{ padding: 0 }}>
                <div className={styles.archLayer}>
                  <div className={styles.archLayerHeader}>EXTERNAL</div>
                  <div style={{ padding: '14px 18px', fontWeight: 600, fontSize: '0.875rem' }}>
                    Google Places API
                  </div>
                </div>
                <div className={styles.archLayer}>
                  <div className={styles.archLayerHeader}>INFRASTRUCTURE</div>
                  <div style={{ padding: '14px 18px', fontWeight: 600, fontSize: '0.875rem' }}>
                    Google Cloud, CI/CD pipeline
                  </div>
                </div>
              </div>
            </div>

            <span className={styles.figureCaption}>
              FIGURE 3 / ARCHITECTURE LAYERS, CLIENT THROUGH INFRASTRUCTURE
            </span>
          </div>

          {/* Architecture Details Table */}
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Layer</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.primaryCol}>Client</td>
                  <td>Flutter, one codebase shipping to both iOS and Android</td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Application</td>
                  <td>
                    FastAPI services in Python, covering auth, the shared workspace, task distribution, and budget logic
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Intelligence</td>
                  <td>
                    Conversational agent, requirement extraction, semantic matching and ranking, and the preference feedback loop
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Data</td>
                  <td>
                    Relational store for core plan data, vector store for embeddings, session store for conversation memory
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>External</td>
                  <td>Google Places API as the live venue and vendor data source</td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Infrastructure</td>
                  <td>Google Cloud, with an automated build and deploy pipeline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 09 Results (Page 11) ── */}
        <section id="results" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>09</span>
            <h2 className={styles.sectionTitle}>Results</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            Ella changed the shape of the planning process, not just the interface to it. The figures below compare how couples planned before the platform against how they plan inside it.
          </p>

          {/* 4 Big Stat Metric Counters (Page 11) */}
          <div className={styles.resultsCountersGrid}>
            <div className={styles.resultCounterCard}>
              <span className={styles.counterValue}>45%</span>
              <span className={styles.counterLabel}>Reduction in overall planning time</span>
            </div>
            <div className={styles.resultCounterCard}>
              <span className={styles.counterValue}>87%</span>
              <span className={styles.counterLabel}>Personalization accuracy</span>
            </div>
            <div className={styles.resultCounterCard}>
              <span className={styles.counterValue}>72%</span>
              <span className={styles.counterLabel}>Daily retention after onboarding</span>
            </div>
            <div className={styles.resultCounterCard}>
              <span className={styles.counterValue}>90%</span>
              <span className={styles.counterLabel}>Adoption of collaborative task sharing</span>
            </div>
          </div>

          {/* Before SayYes.AI vs With Ella Comparison Table */}
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Metric</th>
                  <th style={{ width: '280px' }}>Before SayYes.AI</th>
                  <th>With Ella</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.primaryCol}>Average planning time</td>
                  <td>Around 180 days</td>
                  <td><strong>Reduced by 45 percent</strong></td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Vendor discovery time</td>
                  <td>Around two weeks</td>
                  <td><strong>Under five minutes to a ranked shortlist</strong></td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>User engagement</td>
                  <td>No equivalent</td>
                  <td><strong>72 percent daily retention after onboarding</strong></td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Personalization accuracy</td>
                  <td>No equivalent</td>
                  <td><strong>87 percent</strong></td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Collaboration</td>
                  <td>Manual coordination across side channels</td>
                  <td><strong>90 percent of couples used collaborative task sharing</strong></td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Budget deviation</td>
                  <td>20 to 25 percent over plan</td>
                  <td><strong>Under 10 percent with live tracking</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* What that translates to for a couple */}
          <div className={styles.calloutHeader} style={{ marginTop: '48px' }}>
            What That Translates To For A Couple
          </div>

          <div className={styles.pointsList}>
            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>01</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Confidence</span>
                <p className={styles.pointText}>
                  Recommendations match the taste the couple actually described, so decisions get made instead of deferred. Venue discovery collapses from a fortnight of research into a single conversation.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>02</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Clarity</span>
                <p className={styles.pointText}>
                  The budget is visible against reality throughout the plan rather than reconciled at the end, which is what holds deviation under ten percent.
                </p>
              </div>
            </div>

            <div className={styles.pointItem}>
              <span className={styles.pointNumber}>03</span>
              <div className={styles.pointBody}>
                <span className={styles.pointTitle}>Connection</span>
                <p className={styles.pointText}>
                  Nine in ten couples brought bridesmaids and family into the plan through task sharing, turning coordination from a group chat into a tracked workspace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10 Roadmap (Page 12) ── */}
        <section id="roadmap" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>10</span>
            <h2 className={styles.sectionTitle}>Roadmap</h2>
            <div className={styles.sectionDivider} />
          </div>

          <p className={styles.sectionParagraph}>
            The next phase extends Ella from conversation into perception and transaction.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Area</th>
                  <th>Direction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.primaryCol}>Vision</td>
                  <td>
                    Image-based recognition for attire, decor, and theme, so a couple can upload a reference photo instead of describing it.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Voice</td>
                  <td>
                    A spoken interface to Ella, replacing typed conversation wherever speaking is more natural.
                  </td>
                </tr>
                <tr>
                  <td className={styles.primaryCol}>Vendor integration</td>
                  <td>
                    Direct booking with verified partners, closing the loop between recommendation and confirmed reservation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Final Quote Callout (Page 12) */}
          <div className={styles.finalQuoteSection}>
            <blockquote className={styles.finalQuoteText}>
              “Ella does not hand a couple a longer list. She understands what they asked for, finds what exists, and gives them five options worth deciding between.”
            </blockquote>
          </div>

          {/* Footer Case Study Stamp */}
          <div className={styles.caseStudyFooterBar}>
            <span>PGAGI | SayYes.AI Case Study</span>
            <span>Applied AI Product</span>
          </div>
        </section>
      </div>

      {/* ── Call to action shared section ── */}
      <ProductVisionCta />
    </div>
  );
}
