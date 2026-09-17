'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/organisms/OrderLoopCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface OrderLoopCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const IMG_BASE = '/case-studies/order-loop-case-study-images';

function SectionNumberBar({ number, eyebrow, title }: { number: string; eyebrow: string; title: React.ReactNode }) {
  return (
    <div className={styles.sectionNumberBarOuter}>
      <div className={styles.sectionNumberBar}>
        <div className={styles.sectionNumberBadge}>{number}</div>
        <div className={styles.sectionNumberText}>
          <span className={styles.sectionNumberEyebrow}>{eyebrow}</span>
          <h2 className={styles.sectionNumberTitle}>{title}</h2>
        </div>
      </div>
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className={styles.checklistItem}>
      <span className={styles.checkIcon}>✓</span>
      <span>{children}</span>
    </li>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function OrderLoopCaseStudy({ caseStudy }: OrderLoopCaseStudyProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const reveals = root.querySelectorAll(`.${styles.reveal}`);
    if (reveals.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      reveals.forEach((el) => el.classList.add(styles.revealed));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.orderLoopPage} ref={pageRef}>
      {/* ── Hero / Cover ── */}
      <section className={styles.heroSection}>
        <div className={styles.rail}>
          <p className={styles.confidentialLine}>PG-AGI Confidential</p>
          <p className={styles.dateLine}>Case Study · September 2026</p>

          <h1 className={styles.heroTitle}>ORDER LOOP</h1>
          <h2 className={styles.heroSubtitle}>AI Mail Support and Returns Automation</h2>

          <p className={styles.heroDesc}>
            A two part automation backbone built for Corimori, a multi marketplace seller trading across Amazon and Otto. An AI pipeline reads order mail from ten storefronts, resolves each message against the seller&apos;s own order records, and drafts or sends the reply. Cori, a conversational assistant, keeps the reply playbook current. A separate daily job clears delivered Otto returns so the refund releases.
          </p>
        </div>
      </section>

      {/* ── Hero stat strip + field/detail table (white background, below the navy cover) ── */}
      <div className={styles.rail}>
        <div className={`${styles.statsGrid} ${styles.heroStatsGrid}`}>
          <div className={styles.statBox}>
            <span className={styles.statValue}>10</span>
            <span className={styles.statLabel}>Storefronts Monitored</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>12</span>
            <span className={styles.statLabel}>Live Reply Scenarios</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>100+</span>
            <span className={styles.statLabel}>Customer Queries Daily</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>3,658</span>
            <span className={styles.statLabel}>Pipeline Runs</span>
          </div>
        </div>

        <div className={styles.tableOuter}>
          <table className={styles.compTable}>
            <thead>
              <tr>
                <th>Field</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.fieldLabelCell}>Client</td>
                <td>Corimori, multi marketplace seller across Amazon and Otto</td>
              </tr>
              <tr>
                <td className={styles.fieldLabelCell}>Category</td>
                <td>Customer Support AI, Marketplace Ops Automation, GenAI</td>
              </tr>
              <tr>
                <td className={styles.fieldLabelCell}>Stack</td>
                <td>Fastify, Next.js, Postgres on Neon, SQL Server, AWS Bedrock, Python</td>
              </tr>
              <tr>
                <td className={styles.fieldLabelCell}>Scope</td>
                <td>Full build: mail AI pipeline, Cori assistant, Otto refund automation</td>
              </tr>
              <tr>
                <td className={styles.fieldLabelCell}>Status</td>
                <td>Live in production</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Contents ── */}
      <div className={`${styles.rail} ${styles.reveal}`}>
        <div className={styles.contentsRunningHeader}>
          <span>ORDER LOOP</span>
          <span className={styles.contentsRunningHeaderMuted}>AI Mail Support and Returns Automation</span>
          <span className={styles.contentsRunningHeaderMuted}>Corimori</span>
        </div>

        <span className={styles.contentsEyebrow}>Contents</span>
        <h2 className={styles.contentsHeading}>Order Loop Case Study</h2>

        <div className={styles.tableOuter}>
          <table className={styles.compTable}>
            <thead>
              <tr><th>Section</th><th>Focus</th></tr>
            </thead>
            <tbody>
              <tr className={styles.contentsRow} tabIndex={0} role="button" onClick={() => scrollToSection('section-01')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('section-01')}><td className={styles.labelCell}>01 What We Built</td><td>The problem across ten storefronts and the shape of the response</td></tr>
              <tr className={styles.contentsRow} tabIndex={0} role="button" onClick={() => scrollToSection('section-02')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('section-02')}><td className={styles.labelCell}>02 Core Architecture</td><td>Six layers, two systems, and the six stage reply pipeline</td></tr>
              <tr className={styles.contentsRow} tabIndex={0} role="button" onClick={() => scrollToSection('section-03')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('section-03')}><td className={styles.labelCell}>03 Credit System and Monetisation</td><td>What is metered today and how a credit model would map onto it</td></tr>
              <tr className={styles.contentsRow} tabIndex={0} role="button" onClick={() => scrollToSection('section-04')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('section-04')}><td className={styles.labelCell}>04 User-Facing Features</td><td>The deployed interface: dashboard, playbook, and Cori</td></tr>
              <tr className={styles.contentsRow} tabIndex={0} role="button" onClick={() => scrollToSection('section-05')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('section-05')}><td className={styles.labelCell}>05 Security and Auditability</td><td>Run level replay, data boundaries, and open risks</td></tr>
              <tr className={styles.contentsRow} tabIndex={0} role="button" onClick={() => scrollToSection('section-06')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('section-06')}><td className={styles.labelCell}>06 What Makes This Different</td><td>Design decisions that separate this from a prompt wrapper</td></tr>
              <tr className={styles.contentsRow} tabIndex={0} role="button" onClick={() => scrollToSection('section-07')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('section-07')}><td className={styles.labelCell}>07 Outcomes</td><td>What is live and what it is carrying</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.rail}>
        {/* ══════ Section 01 — What We Built ══════ */}
        <section id="section-01" className={`${styles.sectionBlock} ${styles.reveal}`}>
          <SectionNumberBar number="01" eyebrow="Section One" title="What We Built" />
          <p className={styles.sectionKicker}>From inbox noise to a resolved order.</p>

          <p className={styles.sectionParagraph}>
            Every marketplace order mail starts the same way for a small seller. Someone has to read it, find the order, decide what it actually needs, and answer in whatever language it arrived in. Order Loop runs that decision across ten storefronts for Corimori, handling more than 100 customer queries a day. The mail system does the reading, the order lookup, and the drafting. A human stays in the loop for anything sensitive. A second, independent system closes the return itself once the pipeline no longer needs to.
          </p>

          <h3 className={styles.sectionSubheading}>What the platform had to do</h3>
          <ul className={styles.checklist}>
            <Check><strong>Watch ten storefronts at once.</strong> Tell a real order mail apart from everything else landing in one shared inbox, in whatever language and format each marketplace uses.</Check>
            <Check><strong>Resolve the order, not just the address.</strong> Pull the order ID out of the subject line and walk the seller&apos;s own order system until a matching record and its full delivery address come back.</Check>
            <Check><strong>Decide, draft, and know when not to decide.</strong> Classify what the buyer needs, draft a reply against a maintained playbook, and route anything sensitive to a person instead of guessing.</Check>
            <Check><strong>Put a human interface on the machine.</strong> Let the operator update that playbook by describing the change in plain language, not by editing rows in a table.</Check>
            <Check><strong>Close the loop on returns, independently.</strong> Once a shipment is confirmed delivered back, accept it on the marketplace&apos;s own terms so the refund releases, without waiting on the mail pipeline at all.</Check>
          </ul>

          <h3 className={styles.sectionSubheading}>Build phases: mail pipeline and Cori</h3>
          <p className={styles.captionNote}>Roughly one month of build, 80 commits.</p>
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr><th>Phase</th><th>Shipped</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.labelCell}>Scaffolding</td><td>Postgres backed pipeline skeleton, first Bedrock wiring.</td></tr>
                <tr><td className={styles.labelCell}>Fastify migration</td><td>Framework switch, structured logging, self documented API.</td></tr>
                <tr><td className={styles.labelCell}>Order system hardening</td><td>Full order lookup debugged against real production data.</td></tr>
                <tr><td className={styles.labelCell}>Cron and dedup</td><td>Schedule tuned, duplicate mail and duplicate reply guards added.</td></tr>
                <tr><td className={styles.labelCell}>Cori v1</td><td>Chat backend shipped end to end, then the dashboard UI.</td></tr>
                <tr><td className={styles.labelCell}>Otto onboarding</td><td>Otto added to the pipeline with its own threaded reply format.</td></tr>
                <tr><td className={styles.labelCell}>Architecture rewrite</td><td>Structural rework, delivery address rules tightened.</td></tr>
                <tr><td className={styles.labelCell}>Reliability polish</td><td>LLM order ID fallback, Gmail Drafts sync, single reply enforcement.</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.sectionSubheading}>Build phases: Otto returns automation</h3>
          <p className={styles.captionNote}>Roughly seven weeks of build, running as a standalone service.</p>
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr><th>Phase</th><th>Shipped</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.labelCell}>Initial build</td><td>OAuth2 auth, shipment fetch, acceptance call.</td></tr>
                <tr><td className={styles.labelCell}>Live API exploration</td><td>Hands on testing against the production API to confirm real request and error shapes.</td></tr>
                <tr><td className={styles.labelCell}>Dry run tooling</td><td>A fetch only variant that computes acceptance payloads without ever writing.</td></tr>
                <tr><td className={styles.labelCell}>Daemon scheduling</td><td>Evolved from a single shot script into a long running, self scheduling service.</td></tr>
                <tr><td className={styles.labelCell}>Startup hardening</td><td>Run on start behaviour plus timezone aware scheduling for the final version.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════ Section 02 — Core Architecture ══════ */}
        <section id="section-02" className={`${styles.sectionBlock} ${styles.reveal}`}>
          <SectionNumberBar number="02" eyebrow="Section Two" title="Core Architecture" />
          <p className={styles.sectionKicker}>Two systems, one lifecycle.</p>

          <p className={styles.sectionParagraph}>
            The mail pipeline and Cori share one Postgres backed application. The returns automation is a deliberately separate, standalone job against a different marketplace API. Both close the same loop, a customer&apos;s order reaching a resolved state, from opposite ends.
          </p>

          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src={`${IMG_BASE}/section-2-core-architecture - cropped.jpeg`}
                alt="Order Loop architecture: six layers from inbox ingestion to marketplace refund release"
                width={1908}
                height={1402}
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              Order Loop architecture: six layers from inbox ingestion to marketplace refund release.
            </p>
          </div>

          <h3 className={styles.sectionSubheading}>Layer responsibilities</h3>
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr><th>Layer</th><th>Responsibility</th><th>Technology</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.labelCell}>Mail Ingestion</td><td>Polls the Gmail inbox for unseen mail, filters to sender domains matching the marketplace catalogue.</td><td>imapflow, node cron</td></tr>
                <tr><td className={styles.labelCell}>Order Resolution</td><td>Regex first order ID extraction with an LLM fallback, then a multi path lookup against the seller&apos;s order system per marketplace.</td><td>mssql and Tedious, Bedrock</td></tr>
                <tr><td className={styles.labelCell}>Reply Intelligence</td><td>Classifies each mail against the scenario library and drafts a reply. General cases can auto send, everything else is held.</td><td>AWS Bedrock, Claude</td></tr>
                <tr><td className={styles.labelCell}>Human Review</td><td>Two pane draft and sent inbox with full thread view, one click send, and a live per run inspector.</td><td>Next.js, Fastify REST</td></tr>
                <tr><td className={styles.labelCell}>Cori Assistant</td><td>Conversational front door to the scenario library. Classifies intent, proposes changes, confirms before writing.</td><td>Bedrock Converse, WebSocket</td></tr>
                <tr><td className={styles.labelCell}>Returns Automation</td><td>Authenticates to Otto Partner Connect, fetches delivered shipments, cross checks against Otto&apos;s own ledger, accepts.</td><td>Python, Otto Partner API</td></tr>
                <tr><td className={styles.labelCell}>State and Audit</td><td>Every run, mail, SQL query, and LLM call persisted for replay. Scheduling state tracked independently.</td><td>PostgreSQL on Neon, MongoDB</td></tr>
                <tr><td className={styles.labelCell}>Platform</td><td>Cron scheduling, self documented API, structured per run JSON logs, crash safe error capture.</td><td>Fastify, Swagger</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.sectionSubheading}>The six stage mail reply pipeline</h3>
          <p className={styles.sectionParagraph}>
            Each unseen mail runs the same six stage chain, with one model call at the centre, ending in the version that either sends or waits for a person.
          </p>

          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src={`${IMG_BASE}/The six stage mail reply pipeline - cropped.jpeg`}
                alt="The six stage mail reply pipeline: fetch, filter, extract, resolve, classify and draft, send or hold"
                width={1911}
                height={541}
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              One model call sits at stage five. Stages one to four exist to make that call answerable.
            </p>
          </div>

          <h3 className={styles.sectionSubheading}>Core infrastructure decisions</h3>
          <div className={styles.decisionGrid}>
            <div className={styles.decisionBox}>
              <p className={styles.decisionTitle}>Two data stores, two jobs</p>
              <p className={styles.decisionText}>Postgres holds the application&apos;s own state: runs, mails, scenarios, chat history. A separate, scoped connection into the seller&apos;s order system exists only to resolve orders, never to write to it.</p>
            </div>
            <div className={`${styles.decisionBox} ${styles.decisionBoxNavy}`}>
              <p className={styles.decisionTitle}>Guardrails baked into the pipeline</p>
              <p className={styles.decisionText}>One AI reply per order, ever. A reply with no real content is never auto sent, only drafted.</p>
            </div>
            <div className={`${styles.decisionBox} ${styles.decisionBoxGreen}`}>
              <p className={styles.decisionTitle}>Adversarial QA for the assistant</p>
              <p className={styles.decisionText}>A scripted stress test harness exercises Cori against the conversational failure modes an assistant is most likely to mishandle, and scores the results.</p>
            </div>
          </div>
        </section>

        {/* ══════ Section 03 — Credit System and Monetisation ══════ */}
        <section id="section-03" className={`${styles.sectionBlock} ${styles.reveal}`}>
          <SectionNumberBar number="03" eyebrow="Section Three" title="Credit System and Monetisation" />
          <p className={styles.sectionKicker}>Metered at the call, not estimated at the invoice.</p>

          <p className={styles.sectionParagraph}>
            Order Loop was delivered as an owned internal system rather than a metered product, so no billing engine ships with it. What does ship is the measurement layer that any credit model needs: every LLM call is captured with its prompt, response, input and output token counts, and latency, and every SQL query is captured with row counts and timing. Unit cost per handled mail is therefore a read from the run log rather than an estimate.
          </p>

          <h3 className={styles.sectionSubheading}>What the platform already meters</h3>
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr><th>Metered Unit</th><th>Captured Per Run</th><th>Where It Surfaces</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.labelCell}>LLM classify and draft call</td><td>Input tokens, output tokens, total tokens, latency, model ID</td><td>Run Inspector, LLM Calls tab</td></tr>
                <tr><td className={styles.labelCell}>Order system queries</td><td>Query, row count, execution time</td><td>Run Inspector, SQL Queries tab</td></tr>
                <tr><td className={styles.labelCell}>Pipeline stage timing</td><td>Duration of each of the six stages</td><td>Run Inspector, Steps tab</td></tr>
                <tr><td className={styles.labelCell}>Mail disposition</td><td>Auto sent, held as draft, unmatched</td><td>Dashboard stat cards</td></tr>
                <tr><td className={styles.labelCell}>Cori sessions</td><td>Message count and timestamp per session</td><td>AI Assistant history</td></tr>
                <tr><td className={styles.labelCell}>Returns acceptance</td><td>Shipments fetched, cross checked, accepted</td><td>Returns job log</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.sectionSubheading}>Observed cost shape of a single handled mail</h3>
          <p className={styles.sectionParagraph}>
            Figures below are read directly from a captured production run and describe that run only. They are not an average across the corpus, and per mail cost will move with mail length, scenario complexity, and model pricing at the time of billing.
          </p>
          <div className={`${styles.statsGrid} ${styles.statsGridAlt}`}>
            <div className={styles.statBox}>
              <span className={styles.statValue}>9,244</span>
              <span className={styles.statLabel}>Input Tokens</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>475</span>
              <span className={styles.statLabel}>Output Tokens</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>4,597<span className={styles.statSuffix}>ms</span></span>
              <span className={styles.statLabel}>Model Latency</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>1</span>
              <span className={styles.statLabel}>Model Call Per Mail</span>
            </div>
          </div>

          <h3 className={styles.sectionSubheading}>Credit model, illustrative</h3>
          <p className={styles.sectionParagraph}>
            The structure below is an illustrative rate card showing how the existing meters would map onto a credit system. It is a design proposal, not a confirmed or deployed price list, and no figure here has been agreed commercially.
          </p>
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr><th>Chargeable Action</th><th>Suggested Credit Basis</th><th>Rationale</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.labelCell}>Mail resolved end to end</td><td>1 credit per mail that reaches send or hold</td><td>The unit the operator actually cares about</td></tr>
                <tr><td className={styles.labelCell}>Order lookup</td><td>Bundled into the mail credit</td><td>Lookup cost is small and always paired with an mail</td></tr>
                <tr><td className={styles.labelCell}>Held draft reviewed and sent</td><td>No additional credit</td><td>Human review should not be penalised</td></tr>
                <tr><td className={styles.labelCell}>Cori assistant session</td><td>Metered on message count</td><td>Session length varies widely, 3 to 144 messages observed</td></tr>
                <tr><td className={styles.labelCell}>Returns acceptance</td><td>1 credit per accepted shipment</td><td>Directly tied to a released refund</td></tr>
                <tr><td className={styles.labelCell}>Storefront onboarding</td><td>Fixed setup fee, not credits</td><td>One time configuration work</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.sectionSubheading}>Populate ready commercial KPIs</h3>
          <p className={styles.sectionParagraph}>
            These are the fields a monetisation review would need. They are left blank because no confirmed commercial data was supplied for this engagement, and inventing them would misrepresent the build.
          </p>
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr><th>Commercial KPI</th><th>Basis</th><th>Value</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.labelCell}>Cost per handled mail</td><td>Token spend plus infrastructure share</td><td>To be populated</td></tr>
                <tr><td className={styles.labelCell}>Blended monthly platform cost</td><td>Bedrock, Neon, hosting, scheduler</td><td>To be populated</td></tr>
                <tr><td className={styles.labelCell}>Operator hours saved per week</td><td>Baseline manual handling time per mail</td><td>To be populated</td></tr>
                <tr><td className={styles.labelCell}>Refund cycle time reduction</td><td>Days from delivery to refund release</td><td>To be populated</td></tr>
                <tr><td className={styles.labelCell}>Break even query volume</td><td>Fixed cost divided by per query margin</td><td>To be populated</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════ Section 04 — User-Facing Features ══════ */}
        <section id="section-04" className={`${styles.sectionBlock} ${styles.reveal}`}>
          <SectionNumberBar number="04" eyebrow="Section Four" title="User-Facing Features" />
          <p className={styles.sectionKicker}>Six screens from the deployed application, not mockups.</p>

          <p className={styles.sectionParagraph}>
            Order specific identifiers and the workspace name are redacted. Everything else is the live interface the operator works in every day.
          </p>

          <h3 className={styles.sectionSubheading}>Pipeline dashboard and manual trigger</h3>
          <p className={styles.sectionParagraph}>
            Live stat cards for total runs, mails, drafts, and auto sent replies, with a manual trigger and a per run history feed below.
          </p>
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src={`${IMG_BASE}/Pipeline dashboard and manual trigger.png`}
                alt="Pipeline dashboard and manual trigger"
                width={1870}
                height={826}
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              Dashboard: 3,658 runs, 848 mails processed, 112 drafts awaiting review, 206 auto sent.
            </p>
          </div>

          <h3 className={styles.sectionSubheading}>The reply playbook</h3>
          <p className={styles.sectionParagraph}>
            Scenarios split into a general auto reply column and a critical human review column, each carrying trigger keywords in the buyer&apos;s own language. Ten general scenarios and two critical ones are live, and each is independently editable without a deploy.
          </p>
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src={`${IMG_BASE}/The reply playbook.png`}
                alt="The reply playbook: general auto-reply and critical human review scenarios"
                width={1861}
                height={861}
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              Scenarios: 10 general and 2 critical, keyword triggered, multilingual, independently editable.
            </p>
          </div>

          <h3 className={styles.sectionSubheading}>Cori, the conversational scenario manager</h3>
          <p className={styles.sectionParagraph}>
            Cori is the front door to that playbook. The operator describes a change in plain language and Cori classifies the intent, proposes the edit, and confirms before writing anything. Every session is saved and resumable. One real session ran to 144 messages.
          </p>
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src={`${IMG_BASE}/Cori, the conversational scenario manager.png`}
                alt="Cori, the conversational scenario manager: AI Assistant session history"
                width={1218}
                height={835}
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              AI Assistant: searchable session history with message counts and timestamps.
            </p>
          </div>

          <h3 className={styles.sectionSubheading}>Feature inventory delivered</h3>
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr><th>Area</th><th>Delivered</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.labelCell}>Mail Ingestion</td><td>IMAP fetch, marketplace domain filtering, cron scheduling with manual trigger.</td></tr>
                <tr><td className={styles.labelCell}>Order Resolution</td><td>Regex and LLM order ID extraction, multi path order system lookup, full delivery address retrieval.</td></tr>
                <tr><td className={styles.labelCell}>Reply Intelligence</td><td>Scenario based classification and drafting, general and critical routing, single reply and empty draft guardrails.</td></tr>
                <tr><td className={styles.labelCell}>Cori Assistant</td><td>Classify first routing, propose then confirm, confirm then write, background conversation compaction.</td></tr>
                <tr><td className={styles.labelCell}>Human Review</td><td>Two pane drafts and sent inbox, thread view, one click send, live run inspector.</td></tr>
                <tr><td className={styles.labelCell}>Returns Automation</td><td>OAuth2 auth, shipment fetch, ledger cross check, batch acceptance, self scheduling daemon.</td></tr>
                <tr><td className={styles.labelCell}>Platform</td><td>Self documented API, structured per run JSON logging, crash safe error capture.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════ Section 05 — Security and Auditability ══════ */}
        <section id="section-05" className={`${styles.sectionBlock} ${styles.reveal}`}>
          <SectionNumberBar number="05" eyebrow="Section Five" title="Security and Auditability" />
          <p className={styles.sectionKicker}>Every run is replayable, down to the prompt.</p>

          <p className={styles.sectionParagraph}>
            Observability was built into the pipeline rather than bolted on afterwards. Every SQL query and every LLM call made during a run is captured to a structured per run log and surfaced directly in the dashboard, so an operator can answer why a given mail was answered the way it was without reading a server log file.
          </p>

          <h3 className={styles.sectionSubheading}>Run inspector: stages</h3>
          <p className={styles.sectionParagraph}>Each run&apos;s six stages, timed individually, with per step drill down.</p>
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src={`${IMG_BASE}/Run inspector stages - cropped.jpeg`}
                alt="Run inspector: stages tab"
                width={1523}
                height={707}
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              Steps tab: fetch, filter and extract, lookup, classify, send, each with its own duration.
            </p>
          </div>

          <h3 className={styles.sectionSubheading}>Run inspector: SQL queries</h3>
          <p className={styles.sectionParagraph}>Every query issued during order resolution, with row counts and timing. Order reference values are redacted in this capture.</p>
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src={`${IMG_BASE}/Run inspector SQL queries - cropped.jpeg`}
                alt="Run inspector: SQL queries tab"
                width={1216}
                height={523}
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              SQL Queries tab: five queries, five rows returned, low millisecond execution.
            </p>
          </div>

          <h3 className={styles.sectionSubheading}>Run inspector: model calls</h3>
          <p className={styles.sectionParagraph}>The full prompt, response, token count, and latency behind a single classify and draft call, inspectable in place.</p>
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src={`${IMG_BASE}/Run inspector model calls - cropped.jpeg`}
                alt="Run inspector: model calls / LLM calls tab"
                width={1228}
                height={812}
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              LLM Calls tab: 9,244 input and 475 output tokens, 4,597ms latency, full response inspectable.
            </p>
          </div>

          <h3 className={styles.sectionSubheading}>Access and data boundaries</h3>
          <ul className={styles.checklist}>
            <Check><strong>Read only intent into the order system.</strong> The order lookup path exists to resolve orders and never writes back to the seller&apos;s system.</Check>
            <Check><strong>Separation of state.</strong> Application state lives in Postgres on Neon. The seller&apos;s order data stays in its own SQL Server and is only ever read.</Check>
            <Check><strong>Human gate on sensitive cases.</strong> Critical scenarios such as return and refund pending and cancellation requests are never auto sent and always route to a person.</Check>
            <Check><strong>Single reply enforcement.</strong> An order can receive at most one AI reply, ever, which bounds the blast radius of any classification error.</Check>
            <Check><strong>Redaction in the record.</strong> Order specific identifiers and workspace naming are redacted in any material leaving the workspace, including this document.</Check>
          </ul>

          <h3 className={styles.sectionSubheading}>Current state and known risks</h3>
          <p className={styles.sectionParagraph}>
            Documented openly rather than hidden. Each item below is tracked and sequenced, not discovered after the fact.
          </p>
          <div className={styles.riskList}>
            <div className={styles.riskBox}>
              <p className={styles.riskTitle}>Order system read access is broader than least privilege calls for</p>
              <p className={styles.riskText}>The order lookup fallback path was built against a scoped, read only role. Provisioning that exact grant is still open.</p>
            </div>
            <div className={styles.riskBox}>
              <p className={styles.riskTitle}>No authentication layer yet on the dashboard or its API</p>
              <p className={styles.riskText}>A deliberate sequencing choice for a tool that has so far stayed internal only. It becomes mandatory the moment the surface is exposed beyond the operator&apos;s network.</p>
            </div>
            <div className={styles.riskBox}>
              <p className={styles.riskTitle}>Returns automation fetches a single page per run</p>
              <p className={styles.riskText}>The marketplace&apos;s own ledger does paginate. Volume has not required a second page yet, so pagination headroom sits in the backlog.</p>
            </div>
            <div className={styles.riskBox}>
              <p className={styles.riskTitle}>Documentation lags two implementation changes</p>
              <p className={styles.riskText}>The pipeline&apos;s state store moved from an early SQLite design to Postgres, and its cron cadence moved from every five minutes to hourly during the build.</p>
            </div>
          </div>
        </section>

        {/* ══════ Section 06 — What Makes This Different ══════ */}
        <section id="section-06" className={`${styles.sectionBlock} ${styles.reveal}`}>
          <SectionNumberBar number="06" eyebrow="Section Six" title="What Makes This Different" />
          <p className={styles.sectionKicker}>An answering machine is easy. A system that knows when not to answer is not.</p>

          <ul className={styles.checklist}>
            <Check><strong>One model call, four stages of preparation.</strong> Most mail automation throws the raw message at a model and hopes. Order Loop spends four stages establishing which real order the message is about before a model is allowed to write a single word, so the reply is grounded in a record rather than in the mail&apos;s own claims.</Check>
            <Check><strong>The refusal path is a first class feature.</strong> Twelve scenarios exist and two of them exist specifically so the system stops. Critical cases, empty drafts, and anything unmatched are held for a person. The classifier is graded as much on what it declines as on what it sends.</Check>
            <Check><strong>Multilingual by resolution, not by translation.</strong> Trigger keywords are maintained in the buyer&apos;s own language and the reply is drafted in that language. Nothing is round tripped through English first.</Check>
            <Check><strong>The playbook is editable by the operator, not the engineer.</strong> Cori turns scenario maintenance into a conversation. Classify first routing, propose then confirm, and confirm then write mean the assistant cannot claim an action it did not take.</Check>
            <Check><strong>Two systems instead of one convenient one.</strong> The returns job is deliberately independent of the mail pipeline. A refund releasing should not depend on an inbox poller being healthy, so it does not.</Check>
            <Check><strong>Observability at the level of the decision.</strong> Not just that a run happened, but the exact prompt, the exact response, the token counts, and every SQL query behind it, replayable per run from the dashboard.</Check>
          </ul>

          <h3 className={styles.sectionSubheading}>Bugs that were root caused, not patched around</h3>
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr><th>Defect</th><th>Resolution</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.labelCell}>Single reply guarantee</td><td>Closed a gap where an order could receive more than one AI reply, and stopped content free drafts from ever auto sending.</td></tr>
                <tr><td className={styles.labelCell}>IMAP fetch deadlock</td><td>Flagging messages as read mid fetch was deadlocking the mailbox connection. Fixed by deferring the flag update to one bulk call after the fetch completes.</td></tr>
                <tr><td className={styles.labelCell}>Otto reply threading</td><td>Otto&apos;s relay routing depends on a reference ID surviving the reply chain. Fixed across two rounds after real threads broke it.</td></tr>
                <tr><td className={styles.labelCell}>Duplicate run guard</td><td>A frontend double fire on the manual trigger was launching two pipeline runs per click. De duplicated at the request layer.</td></tr>
                <tr><td className={styles.labelCell}>Scenario delete correctness</td><td>A bug in removing scenarios was fixed by moving to a soft delete flag instead of a hard row delete.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════ Section 07 — Outcomes ══════ */}
        <section id="section-07" className={`${styles.sectionBlock} ${styles.reveal}`}>
          <SectionNumberBar number="07" eyebrow="Section Seven" title="Outcomes" />
          <p className={styles.sectionKicker}>Two automations, carrying one order lifecycle.</p>

          <div className={`${styles.statsGrid} ${styles.statsGridAlt}`}>
            <div className={styles.statBox}>
              <span className={styles.statValue}>100+</span>
              <span className={styles.statLabel}>Queries Handled Daily</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>848</span>
              <span className={styles.statLabel}>Mails Processed</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>206</span>
              <span className={styles.statLabel}>Replies Auto Sent</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>112</span>
              <span className={styles.statLabel}>Drafts Held For Review</span>
            </div>
          </div>

          <ul className={styles.checklist}>
            <Check><strong>Full mail to resolution lifecycle live across ten storefronts.</strong> Fetch, filter, extract, resolve, classify and draft, then send or hold, running on an hourly schedule with a manual trigger available for testing.</Check>
            <Check><strong>More than 100 customer queries handled every day.</strong> Across nine Amazon country domains and Otto DE, from a single shared inbox and one configuration file.</Check>
            <Check><strong>3,658 pipeline runs have processed 848 mails to date.</strong> 206 replies auto sent and 112 held for human review, with the remainder filtered out as non order mail.</Check>
            <Check><strong>Cori gives the operator a conversational front door to the scenario library.</strong> With structural guardrails against the assistant ever claiming an action it did not take.</Check>
            <Check><strong>A separate daily job closes the loop on the physical side of returns.</strong> Delivered shipments are accepted to release the refund without anyone touching Otto Partner Connect by hand.</Check>
            <Check><strong>Built in observability throughout.</strong> Every SQL query and every LLM call is inspectable per run, not just logged to a file after the fact.</Check>
            <Check><strong>Known gaps are tracked, not hidden.</strong> A least privilege order system grant, dashboard authentication, and ledger pagination headroom are next in line.</Check>
          </ul>

          <div className={styles.statusBanner}>
            <span className={styles.statusEyebrow}>Status</span>
            <h3 className={styles.statusTitle}>Live in production</h3>
            <p className={styles.statusDesc}>
              The mail pipeline, Cori, and the Otto returns job are all running against live marketplace traffic for Corimori.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
