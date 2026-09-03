'use client';

import React from 'react';
import styles from '@/styles/components/organisms/AIMIBrainCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface AIMIBrainCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const FOOTER_TITLE = 'AIMI Brain · Real-time conversational financial intelligence';

const DOC_FIELDS: { field: string; detail: string }[] = [
  { field: 'Platforms', detail: 'Web · responsive across desktop and mobile' },
  { field: 'Category', detail: 'FinTech · AI · Financial intelligence' },
  { field: 'Stack', detail: 'Node.js microservices · React · Tailwind CSS · WebSockets · vector database · LLM APIs · Stripe · AWS ECS and Fargate · S3 · CloudWatch' },
  { field: 'Scope', detail: 'RAG orchestration pipeline · real-time streaming layer · document ingestion and per-user vector store · web search and source grounding · tiered feature gating and personas · authentication · subscription infrastructure · conversational frontend' },
  { field: 'Audience', detail: 'Retail investors and finance professionals' },
  { field: 'Author', detail: 'PG-AGI · Engineering & AI Research Team' },
  { field: 'Published', detail: '28 April 2026 · 15 min read' },
];

const INDEX_ITEMS: { num: string; title: string; detail: string }[] = [
  { num: '01', title: 'What We Built', detail: 'The platform, who it serves and what it replaces' },
  { num: '02', title: 'Core Architecture', detail: 'Distributed services, the RAG pipeline, streaming and document ingestion' },
  { num: '03', title: 'Credit System and Monetisation', detail: 'Tiered intelligence, quota metering, Stripe lifecycle and unit economics' },
  { num: '04', title: 'User-Facing Features', detail: 'The conversational interface, citations, uploads and personas' },
  { num: '05', title: 'Security and Auditability', detail: 'Authentication, per-user isolation, encryption and source traceability' },
  { num: '06', title: 'What Makes This Different', detail: 'Why this is a financial engine rather than a chat wrapper' },
  { num: '07', title: 'Outcomes', detail: 'What was delivered and the measurement framework' },
];

const CAPABILITIES_TABLE: { capability: string; contributes: string }[] = [
  { capability: 'RAG orchestration', contributes: 'Decides, per query, whether to fetch external data or answer from the model — so retrieval cost is paid only when retrieval is needed.' },
  { capability: 'Live web grounding', contributes: "Keeps answers current in a domain where yesterday's figure is the wrong figure, with citations attached to every claim." },
  { capability: 'Document intelligence', contributes: 'Lets a user interrogate their own filings, reports and spreadsheets, answered with source references back into the document.' },
  { capability: 'Real-time streaming', contributes: 'Makes multi-second retrieval feel like thinking rather than waiting, with status events and token-by-token delivery.' },
];

const ARCHITECTURE_TABLE: { layer: string; responsibility: string; tech: string }[] = [
  { layer: 'Client', responsibility: 'Conversational interface, streaming render, citation display, uploads', tech: 'React, Tailwind CSS' },
  { layer: 'Gateway', responsibility: 'Auth and session validation, tier and quota checks, socket lifecycle', tech: 'REST + WebSockets' },
  { layer: 'Query orchestration', responsibility: 'Intent classification and retrieval routing per query', tech: 'Node.js' },
  { layer: 'RAG pipeline', responsibility: 'Semantic search, web search, re-ranking, grounded synthesis', tech: 'Node.js, vector DB, LLM APIs' },
  { layer: 'Document ingestion', responsibility: 'Parsing, extraction, chunking, embedding', tech: 'Node.js, vector DB' },
  { layer: 'Entitlement', responsibility: 'Feature gates, query limits, model access, persona selection', tech: 'Node.js' },
  { layer: 'Billing', responsibility: 'Subscription lifecycle handling and tier synchronisation', tech: 'Stripe webhooks' },
  { layer: 'Infrastructure', responsibility: 'Containerised deployment, object storage, monitoring', tech: 'AWS ECS + Fargate, S3, CloudWatch' },
];

const SERVICE_MODULES = [
  'auth', 'session', 'ws-gateway', 'query-orchestrator', 'intent-classifier', 'vector-search', 'web-search',
  're-ranker', 'verification', 'synthesis', 'document-ingestion', 'embedding', 'feature-gates', 'persona',
  'quota-metering', 'stripe-webhooks',
].join(' · ');

const TIER_TABLE: { dimension: string; free: string; pro: string }[] = [
  { dimension: 'Query volume', free: 'Capped monthly query limit', pro: 'Substantially higher or unmetered limit' },
  { dimension: 'Model access', free: 'Standard model', pro: 'Advanced and specialised macro models' },
  { dimension: 'Persona depth', free: 'General explanation register', pro: 'Expertise-matched analytical register' },
  { dimension: 'Document intelligence', free: 'Limited upload volume and retention', pro: 'Full per-user vector store' },
  { dimension: 'Retrieval breadth', free: 'Reduced web search depth', pro: 'Full multi-provider search and re-ranking' },
];

const OPERATION_TABLE: { operation: string; when: string; cost: string }[] = [
  { operation: 'Intent classification', when: 'Every query', cost: 'Low, small model' },
  { operation: 'Internal-only answer', when: 'When retrieval is judged unnecessary', cost: 'Low' },
  { operation: 'Semantic search', when: 'When the user has documents relevant to the query', cost: 'Low, vector lookup' },
  { operation: 'Live web search', when: 'When the query needs current data', cost: 'Moderate, per-provider call' },
  { operation: 'Re-ranking', when: 'Whenever multiple sources are gathered', cost: 'Moderate' },
  { operation: 'Multi-stage verification', when: 'Before grounded synthesis', cost: 'Moderate' },
  { operation: 'Grounded synthesis', when: 'Every answered query', cost: 'High, scales with model tier and context' },
  { operation: 'Document ingestion', when: 'On upload, once per document', cost: 'High but one-off, amortised across every later query' },
  { operation: 'Streaming delivery', when: 'Every answered query', cost: 'Negligible' },
];

const DECISIONS: { title: string; desc: string }[] = [
  { title: 'Conditional retrieval, not retrieval by default', desc: 'The pipeline decides per query whether external data is needed. That single routing decision is what keeps latency and inference cost proportional to the difficulty of the question rather than constant across all of them.' },
  { title: 'Grounding as a hard constraint', desc: "Every claim traces to the user's documents or to live web results. Hallucination is addressed architecturally — by requiring a source before synthesis — rather than by instructing a model to be careful." },
  { title: 'Re-ranking before use, not results as retrieved', desc: 'Multiple search APIs are integrated and their results re-ranked, so the citation attached to a claim is the source that actually supports it rather than whatever ranked first upstream.' },
  { title: 'Streaming as an architectural commitment', desc: 'A WebSocket layer carrying status events and token-by-token output means multi-second retrieval reads as thinking. Most implementations bolt streaming onto a request/response design and inherit its silences.' },
  { title: 'Per-user vector partitioning', desc: "Document intelligence is scoped to the account by construction rather than by query filter, which is both a privacy property and the reason citations point into the user's own filings." },
  { title: 'Entitlement derived from billing state', desc: 'Stripe lifecycle events drive tier and permissions in real time. Access and billing cannot drift apart, because one is computed from the other rather than kept in step with it.' },
  { title: 'Built for a domain, not adapted to one', desc: 'The persona system, the macro model selection and the grounding requirement all exist because the domain demands them. A general assistant with a finance prompt has none of these properties.' },
];

const MEASUREMENT_TABLE: { metric: string; measures: string }[] = [
  { metric: 'Time to first token', measures: 'Query submitted to first streamed character' },
  { metric: 'Full response latency', measures: 'Submission to completion event' },
  { metric: 'Retrieval rate', measures: 'Share of queries the orchestrator routes to retrieval' },
  { metric: 'Citation coverage', measures: 'Claims delivered with a resolvable source' },
  { metric: 'Citation click-through', measures: 'Sources users actually open' },
  { metric: 'Web search share', measures: 'Queries requiring live external data' },
  { metric: 'Document query share', measures: 'Queries answered from user uploads' },
  { metric: 'Ingestion success rate', measures: 'Uploads parsed without manual intervention' },
  { metric: 'Ingestion latency', measures: 'Upload to citation-ready' },
  { metric: 'Free to Pro conversion', measures: 'Upgrades against free-tier limit encounters' },
  { metric: 'Quota exhaustion rate', measures: 'Free users reaching the monthly cap' },
  { metric: 'Inference cost per query', measures: 'Blended cost across routed paths' },
  { metric: 'Socket stability', measures: 'Sessions completing without reconnection' },
  { metric: 'Uptime', measures: 'Service availability across containerised services' },
];

const DELIVERED_ITEMS = [
  'RAG orchestration pipeline', 'WebSocket streaming layer', 'document ingestion and per-user vector store',
  'web search and source grounding', 'tiered feature gating and personas', 'authentication',
  'Stripe subscription infrastructure', 'React conversational frontend', 'AWS containerised deployment',
].join(' · ');

function RunningHeader() {
  return (
    <div className={styles.pageRunningHeader}>
      <span>PGAGI · Case Study <strong>AIMI Brain</strong></span>
      <span>FinTech + AI · Confidential</span>
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

function CandlestickChart({ className }: { className: string }) {
  return (
    <svg className={className} width="200" height="120" viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <line x1="0" y1="108" x2="200" y2="108" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <g stroke="currentColor" strokeWidth="1.25">
        <line x1="20" y1="60" x2="20" y2="95" />
        <rect x="12" y="68" width="16" height="20" fill="currentColor" />
        <line x1="55" y1="70" x2="55" y2="100" />
        <rect x="47" y="78" width="16" height="16" fill="#fff" />
        <line x1="90" y1="45" x2="90" y2="85" />
        <rect x="82" y="52" width="16" height="26" fill="currentColor" />
        <line x1="125" y1="35" x2="125" y2="70" />
        <rect x="117" y="42" width="16" height="18" fill="#fff" />
        <line x1="160" y1="20" x2="160" y2="60" />
        <rect x="152" y="28" width="16" height="24" fill="currentColor" />
      </g>
    </svg>
  );
}

function SectionHeader({ num, eyebrow, title }: { num: string; eyebrow: string; title: string }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionNumRow}>
        <span className={styles.sectionNumBadge}>{num}</span>
        <span className={styles.sectionEyebrow}>{eyebrow}</span>
      </div>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
}

function TimelineRow({ actor, text, strong, stream }: { actor: string; text: string; strong?: boolean; stream?: boolean }) {
  return (
    <div className={styles.timelineRow}>
      <span className={`${styles.timelineActor} ${actor === 'CLIENT' ? styles.timelineActorClient : ''} ${stream ? styles.timelineActorStream : ''}`}>{actor}</span>
      <span className={styles.timelineRail}><span className={`${styles.timelineDot} ${stream ? styles.timelineDotStream : ''}`} /></span>
      <span className={`${styles.timelineText} ${strong ? styles.timelineTextStrong : ''}`}>{text}</span>
    </div>
  );
}

export default function AIMIBrainCaseStudy(_props: AIMIBrainCaseStudyProps) {
  return (
    <div className={styles.aimiBrainPage}>
      {/* ── Cover (page 1) ── */}
      <div className={`${styles.pageSheet} ${styles.coverSheet}`}>
        <div className={styles.coverBluePanel}>
          <p className={styles.heroEyebrow}>Case Study · FinTech + AI</p>
          <h1 className={styles.heroMainTitle}>AIMI Brain</h1>
          <h2 className={styles.heroSubtitle}>Real-time conversational financial intelligence</h2>

          <p className={styles.heroLead}>
            A platform that puts institutional-grade macro analysis behind natural language, combining
            retrieval-augmented generation with live web data, per-user document intelligence and a streaming
            architecture built for a market where the answer stops being useful the moment it goes stale.
          </p>
        </div>

        <div className={styles.coverWhitePanel}>
          <div className={styles.heroTagsRow}>
            <span className={styles.heroTag}>RAG orchestration</span>
            <span className={styles.heroTag}>Live web grounding</span>
            <span className={styles.heroTag}>WebSocket streaming</span>
            <span className={styles.heroTag}>Document intelligence</span>
          </div>

          <div className={styles.heroStatsRow}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>RAG</span>
              <span className={styles.heroStatLabel}>grounded, not recalled</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>WS</span>
              <span className={styles.heroStatLabel}>token-by-token streaming</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>2</span>
              <span className={styles.heroStatLabel}>tiers, gated end to end</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>AWS</span>
              <span className={styles.heroStatLabel}>ECS + Fargate, containerised</span>
            </div>
          </div>

          <CandlestickChart className={styles.candleIconDesktop} />
          <CandlestickChart className={styles.candleIconMobile} />

          <div className={styles.coverFooterRow}>
            <span>PGAGI · Confidential</span>
            <span className={styles.coverFooterStrong}>Playing God With AGI</span>
          </div>
        </div>
      </div>

      {/* ── Document / At A Glance / Index (page 2) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <span className={styles.docSectionLabel}>Document</span>
          <h2 className={styles.docTitle}>AIMI Brain — platform case study</h2>

          <table className={styles.fieldTable}>
            <thead>
              <tr>
                <th>Field</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {DOC_FIELDS.map((row) => (
                <tr key={row.field}>
                  <td className={styles.fieldNameCell}>{row.field}</td>
                  <td className={styles.fieldDetailCell}>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <span className={styles.glanceLabel}>At A Glance</span>
          <div className={styles.glanceGrid}>
            <div className={styles.glanceCard}>
              <span className={styles.glanceValue}>RAG</span>
              <span className={styles.glanceCaption}>Every claim grounded in documents or live web</span>
            </div>
            <div className={styles.glanceCard}>
              <span className={styles.glanceValue}>WS</span>
              <span className={styles.glanceCaption}>Token-by-token streaming over a persistent socket</span>
            </div>
            <div className={styles.glanceCard}>
              <span className={styles.glanceValue}>2</span>
              <span className={styles.glanceCaption}>Tiers gated on quota, model access and persona</span>
            </div>
            <div className={styles.glanceCard}>
              <span className={styles.glanceValue}>AWS</span>
              <span className={styles.glanceCaption}>Containerised on ECS and Fargate with CI/CD</span>
            </div>
          </div>

          <span className={`${styles.glanceLabel} ${styles.indexLabelTop}`}>Index</span>
          <div className={styles.indexList}>
            {INDEX_ITEMS.map((item) => (
              <div key={item.num} className={styles.indexRow}>
                <span className={styles.indexNum}>{item.num}</span>
                <span className={styles.indexTitle}>{item.title}</span>
                <span className={styles.indexDetail}>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
        <FooterBar page="02" />
      </div>

      {/* ── 01 What We Built ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader num="01" eyebrow="What We Built" title="Institutional-grade macro analysis, reachable in a sentence." />

          <p className={styles.sectionParagraph}>
            We designed and shipped AIMI Brain — a real-time conversational financial intelligence platform
            that gives retail investors and finance professionals access to institutional-grade macro analysis
            through natural language. The system combines retrieval-augmented generation with live web data,
            document analysis and a high-performance streaming architecture.
          </p>

          <p className={styles.sectionParagraph}>
            The gap it closes is one of access rather than information. Macro analysis of the kind
            institutions run on has always existed; what has not existed is a way to ask it a question in
            plain language and get an answer that cites where it came from. AIMI Brain is built around that
            second requirement, because in finance an unsourced answer is not a shorter answer — it is an
            unusable one.
          </p>

          <div className={styles.highlightBox}>
            The design constraint that shaped everything else: no claim leaves the system unless it is
            grounded in the user&apos;s own documents or in live web results.
          </div>

          <h3 className={styles.plainHeading}>The four capabilities that had to work together</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Capability</th>
                  <th>What It Contributes</th>
                </tr>
              </thead>
              <tbody>
                {CAPABILITIES_TABLE.map((row) => (
                  <tr key={row.capability}>
                    <td className={styles.layerCol}>{row.capability}</td>
                    <td>{row.contributes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeadingBlue}>What the platform replaces</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>Reading a research note to find one macro number, then verifying it elsewhere.</li>
            <li className={styles.bulletItem}>Manually opening a filing to locate the figure behind a question.</li>
            <li className={styles.bulletItem}>Trusting a general-purpose assistant that cannot show where an answer came from.</li>
            <li className={styles.bulletItem}>Waiting on a static page while a long retrieval completes with no feedback.</li>
          </ul>
        </div>
        <FooterBar page="03" />
      </div>

      {/* ── 02 Core Architecture (intro + layer table) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader num="02" eyebrow="Core Architecture" title="A distributed system tuned for low latency and high reliability." />

          <p className={styles.sectionParagraph}>
            AIMI Brain is built on a modern, distributed architecture designed for low latency and high
            reliability. The backend is a Node.js microservices ecosystem; the frontend is a React-based
            conversational interface. Every query passes authentication, session and tier checks at the
            gateway before any expensive work is scheduled.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '170px' }}>Layer</th>
                  <th>Responsibility</th>
                  <th style={{ width: '200px' }}>Technology</th>
                </tr>
              </thead>
              <tbody>
                {ARCHITECTURE_TABLE.map((row) => (
                  <tr key={row.layer}>
                    <td className={styles.layerCol}>{row.layer}</td>
                    <td>{row.responsibility}</td>
                    <td>{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <FooterBar page="04" />
      </div>

      {/* ── Figure 1 + Service modules + Infra + RAG orchestration intro ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <div className={styles.diagramBlock}>
            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>Client</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Conversational UI</span>
                  <span className={styles.diagramBoxCaption}>React · Tailwind · dark theme</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Streaming renderer</span>
                  <span className={styles.diagramBoxCaption}>tokens · status · citations</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Upload surface</span>
                  <span className={styles.diagramBoxCaption}>PDF · reports · spreadsheets</span>
                </div>
              </div>
            </div>
            <div className={styles.diagramArrowRow}>↓</div>

            <div className={`${styles.diagramBar} ${styles.diagramBarBlue}`}>
              REST + WEBSOCKET GATEWAY · auth, session and tier checks on every query · persistent socket per session
            </div>
            <div className={styles.diagramArrowRow}>↓</div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>Node.js Microservices</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>Query Orchestrator</span></div>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>RAG Pipeline</span></div>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>Document Ingestion</span></div>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>Search & Re-rank</span></div>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>Feature Gates & Personas</span></div>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>Billing & Webhooks</span></div>
              </div>
            </div>
            <div className={styles.diagramArrowRow}>↓</div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>Intelligence Layer</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>LLMs</span>
                  <span className={styles.diagramBoxCaption}>tier-gated model access</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Vector database</span>
                  <span className={styles.diagramBoxCaption}>partitioned per user</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Live web search APIs</span>
                  <span className={styles.diagramBoxCaption}>multiple providers</span>
                </div>
              </div>
            </div>
            <div className={styles.diagramArrowRowDashed}>┊</div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>External</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Stripe</span>
                  <span className={styles.diagramBoxCaption}>subscription lifecycle webhooks</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Google OAuth</span>
                  <span className={styles.diagramBoxCaption}>alongside email and password</span>
                </div>
              </div>
            </div>
            <div className={styles.diagramArrowRowDashed}>┊</div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>Infrastructure AWS</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>ECS + Fargate</span>
                  <span className={styles.diagramBoxCaption}>containerised services</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>S3</span>
                  <span className={styles.diagramBoxCaption}>time-limited access URLs</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>CloudWatch + CI/CD</span>
                  <span className={styles.diagramBoxCaption}>monitoring · logging · deploys</span>
                </div>
              </div>
            </div>
            <div className={styles.diagramArrowRow}>│</div>

            <div className={`${styles.diagramBar} ${styles.diagramBarBlack}`}>
              <strong>Every claim carries a citation</strong> · grounded in the user&apos;s own documents or in live web results, never in model recall alone
            </div>
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 1</strong> System architecture. The flow runs from a natural-language query through
            the RAG pipeline to a cited, streamed response, with entitlement resolved at the gateway before
            retrieval begins.
          </p>

          <h3 className={styles.subHeadingBlue}>Service modules</h3>
          <p className={styles.moduleLine}>{SERVICE_MODULES}</p>

          <h3 className={styles.plainHeading}>Infrastructure and deployment</h3>
          <p className={styles.sectionParagraph}>
            The platform is deployed on AWS using a containerised approach with ECS and Fargate. CI/CD
            pipelines support rapid, reliable deployment, with comprehensive monitoring and logging through
            CloudWatch.
          </p>

          <h3 className={styles.plainHeading}>The AI pipeline — RAG orchestration</h3>
          <p className={styles.sectionParagraph}>
            The core of the platform is its retrieval-augmented generation pipeline. Unlike a static LLM
            implementation, the system decides dynamically when to fetch external data and when to rely on
            internal models. That decision is the first stage rather than an afterthought, and it is what
            keeps a simple definitional question from triggering a full web crawl.
          </p>
          <p className={styles.sectionParagraph}>
            The orchestration runs in stages: intent classification, semantic search across a vector
            database, and real-time web search, followed by re-ranking and multi-stage verification before
            anything is synthesised.
          </p>
        </div>
        <FooterBar page="05" />
      </div>

      {/* ── Figure 2 + Real-time streaming intro ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <p className={styles.sectionParagraph}>
            The synthesis model is selected by the user&apos;s tier and its persona by their stated expertise
            level.
          </p>

          <div className={styles.stageGroup}>
            <div className={styles.stageHeader}>
              <span className={styles.stageLabel}>Stage One — Decide What This Query Needs</span>
            </div>
            <div className={styles.stageFlow}>
              <div className={`${styles.stageChip} ${styles.stageChipHighlight}`}>Query received</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Intent classified</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Retrieval decision fetch, or answer internally</div>
            </div>
          </div>

          <div className={styles.stageGroup}>
            <div className={styles.stageHeader}>
              <span className={styles.stageLabel}>Stage Two — Gather And Rank Evidence</span>
              <span className={styles.stageNote}>· run only when retrieval is warranted</span>
            </div>
            <div className={styles.stageFlow}>
              <div className={styles.stageChip}>Semantic search user vector store</div>
              <span className={styles.stageChevron}>+</span>
              <div className={styles.stageChip}>Live web search multiple APIs</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Re-ranking most relevant sources</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Multi-stage verification</div>
            </div>
          </div>

          <div className={styles.stageGroup}>
            <div className={styles.stageHeader}>
              <span className={styles.stageLabel}>Stage Three — Answer, Grounded</span>
              <span className={styles.stageNote}>· model selected by the user&apos;s tier</span>
            </div>
            <div className={styles.stageFlow}>
              <div className={styles.stageChip}>Persona applied expertise level</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Synthesis over selected sources</div>
              <span className={styles.stageChevron}>›</span>
              <div className={`${styles.stageChip} ${styles.stageChipDark}`}>Streamed answer with citations</div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 2</strong> RAG orchestration. Retrieval is conditional, evidence is re-ranked
            before use, and verification sits between gathering and answering.
          </p>

          <h3 className={styles.plainHeading}>Real-time streaming — WebSocket architecture</h3>
          <p className={styles.sectionParagraph}>
            Financial data is time-sensitive, so we implemented a WebSocket architecture supporting
            token-by-token streaming, real-time status updates and live data feeds. The effect is a
            low-latency sense of the system thinking while it does genuinely slow background work —
            searching, parsing, re-ranking.
          </p>
        </div>
        <FooterBar page="06" />
      </div>

      {/* ── Figure 3, Document intelligence, Figure 4, Web search intro ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <div className={styles.timelineBlock}>
            <div className={styles.timelineHeaderBar}>
              WEBSOCKET MESSAGE SEQUENCE<span>· one persistent socket, asynchronous query processing</span>
            </div>
            <div className={styles.timelineRows}>
              <TimelineRow actor="CLIENT" text="Socket opened and authenticated for the session" />
              <TimelineRow actor="CLIENT" text="Query submitted, tier and quota checked before work begins" />
              <TimelineRow actor="SERVER" text="Status event — classifying intent" />
              <TimelineRow actor="SERVER" text="Status event — searching the web / parsing documents" />
              <TimelineRow actor="SERVER" text="Status event — re-ranking sources" />
              <TimelineRow actor="STREAM" text="Token-by-token response begins arriving" strong stream />
              <TimelineRow actor="SERVER" text="Source payload delivered for citation rendering" />
              <TimelineRow actor="SERVER" text="Completion event — quota decremented, turn persisted" />
            </div>
          </div>

          <div className={styles.noteBox}>
            <strong>Why It Matters</strong> · the slow work happens in the background while the interface
            stays responsive, so a multi-second retrieval reads as thinking rather than as a hang.
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 3</strong> WebSocket message sequence. Status events carry the wait; the token
            stream carries the answer; the source payload arrives before the completion event closes the
            turn.
          </p>

          <h3 className={styles.plainHeading}>Document intelligence</h3>
          <p className={styles.sectionParagraph}>
            Users can upload financial reports, PDFs and spreadsheets. Ingestion uses high-precision parsing
            to extract structured data and text, which is chunked and embedded into a per-user vector store.
            That is what lets the system answer specific questions about a user&apos;s own documents with
            full citations.
          </p>

          <div className={styles.stageGroup}>
            <div className={styles.stageHeader}>
              <span className={styles.stageLabel}>Document Ingestion</span>
              <span className={styles.stageNote}>· upload to citation-ready, per user</span>
            </div>
            <div className={styles.stageFlow}>
              <div className={`${styles.stageChip} ${styles.stageChipHighlight}`}>Upload PDF · report · sheet</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>High-precision parsing</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Structured data + text extracted</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Chunked</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Embedded</div>
              <span className={styles.stageChevron}>›</span>
              <div className={`${styles.stageChip} ${styles.stageChipDark}`}>Per-user vector store</div>
            </div>
          </div>

          <div className={styles.noteBox}>
            <strong>Why Per User</strong> · the store is logically partitioned, so a question about your own
            filings can never be answered out of someone else&apos;s uploads.
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 4</strong> Document ingestion. The vector store is partitioned per user, which is
            a security boundary as much as an architectural one.
          </p>

          <h3 className={styles.plainHeading}>Web search and source grounding</h3>
          <p className={styles.sectionParagraph}>
            To prevent hallucination, every claim is grounded in the user&apos;s documents or in live web
            results. We integrated multiple search APIs and a re-ranking algorithm, so the citation attached
            to a claim is the source that actually supports it.
          </p>
        </div>
        <FooterBar page="07" />
      </div>

      {/* ── 03 Credit System intro + Figure 5 + What the tier controls ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader num="03" eyebrow="Credit System and Monetisation" title="Tiered intelligence, metered where inference actually costs." />

          <p className={styles.sectionParagraph}>
            The platform monetises through subscription rather than prepaid balances, but the entitlement
            layer underneath behaves like a metering system: a query consumes quota, and what that query is
            allowed to consume — which model, which retrieval paths, which persona — is resolved from the
            user&apos;s tier before the work is scheduled.
          </p>
          <p className={styles.sectionParagraph}>
            We designed a feature gating system to support different user tiers, covering query limits,
            access to advanced and specialised macro models, and persona-based responses tailored to the
            user&apos;s expertise level. Gating at the gateway rather than in the client is what makes the
            tier a commercial boundary rather than a cosmetic one.
          </p>

          <div className={styles.stageGroup}>
            <div className={styles.stageHeader}>
              <span className={styles.stageLabel}>Entitlement Path</span>
              <span className={styles.stageNote}>· checked before any expensive work is scheduled</span>
            </div>
            <div className={styles.stageFlow}>
              <div className={`${styles.stageChip} ${styles.stageChipHighlight}`}>Query arrives</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Tier resolved free or pro</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Quota checked query limit</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Model gate advanced or standard</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Persona selected expertise level</div>
            </div>
          </div>

          <div className={styles.stageGroup}>
            <div className={styles.stageHeader}>
              <span className={styles.stageLabel}>Subscription Lifecycle</span>
              <span className={styles.stageNote}>· Stripe webhooks drive entitlement, not the other way round</span>
            </div>
            <div className={styles.stageFlow}>
              <div className={styles.stageChip}>Created</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Renewed</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Payment failed</div>
              <span className={styles.stageChevron}>›</span>
              <div className={styles.stageChip}>Cancelled</div>
            </div>
          </div>

          <div className={`${styles.diagramBar} ${styles.diagramBarBlack}`}>
            <strong>Access updates in real time</strong> · every lifecycle event rewrites the user&apos;s tier and permissions immediately, so entitlement and billing never drift apart
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 5</strong> Tiered intelligence and subscription lifecycle. Entitlement is derived
            from billing state, so a failed payment changes access without a manual step.
          </p>

          <h3 className={styles.plainHeading}>What the tier controls</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '190px' }}>Gated Dimension</th>
                  <th>Free</th>
                  <th>Pro</th>
                </tr>
              </thead>
              <tbody>
                {TIER_TABLE.map((row) => (
                  <tr key={row.dimension}>
                    <td className={styles.layerCol}>{row.dimension}</td>
                    <td>{row.free}</td>
                    <td className={styles.mutedCell}>{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.plainHeading}>Where cost is actually incurred</h3>
        </div>
        <FooterBar page="08" />
      </div>

      {/* ── Operation table + unit economics + metering + subscription infra ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <p className={styles.sectionParagraph}>
            Subscription pricing only works if the marginal cost of a query is understood, and in this
            architecture it varies by an order of magnitude depending on the route the orchestrator chooses.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '190px' }}>Operation</th>
                  <th>When It Runs</th>
                  <th style={{ width: '220px' }}>Relative Cost</th>
                </tr>
              </thead>
              <tbody>
                {OPERATION_TABLE.map((row) => (
                  <tr key={row.operation}>
                    <td className={styles.layerCol}>{row.operation}</td>
                    <td>{row.when}</td>
                    <td className={styles.mutedCell}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.plainHeading}>Why conditional retrieval is the unit economics</h3>
          <p className={styles.sectionParagraph}>
            A pipeline that retrieves on every query pays web search and re-ranking costs even for questions
            a small model could answer outright. By making retrieval a routed decision rather than a
            default, the cheap questions stay cheap, and the margin on a subscription tier survives contact
            with users who ask a lot of simple ones.
          </p>

          <h3 className={styles.subHeadingBlue}>Metering and quota mechanics</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}><strong>Checked before work, decremented after.</strong>&nbsp;Tier and quota are validated at query submission and the quota is decremented on the completion event, so a query that fails mid-retrieval costs the user nothing.</li>
            <li className={styles.bulletItem}><strong>Gated at the gateway.</strong>&nbsp;Model access, retrieval breadth and persona are resolved server-side. The client cannot request a model its tier does not carry.</li>
            <li className={styles.bulletItem}><strong>Ingestion charged once.</strong>&nbsp;Parsing and embedding are paid on upload, not per question, so the marginal cost of the hundredth question about a filing is a vector lookup.</li>
          </ul>

          <h3 className={styles.plainHeading}>Subscription infrastructure</h3>
          <p className={styles.sectionParagraph}>
            The platform integrates with Stripe for subscription management. We built a robust webhook
            listener to handle subscription lifecycle events — creation, renewal, cancellation and payment
            failure — automatically updating user tiers and access permissions in real time.
          </p>
        </div>
        <FooterBar page="09" />
      </div>

      {/* ── Billing lifecycle properties (continuation) ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}><strong>Billing is the source of truth.</strong>&nbsp;Entitlement is derived from subscription state rather than maintained alongside it, which removes the class of bug where a cancelled account keeps its access.</li>
            <li className={styles.bulletItem}><strong>Failure is a state, not an exception.</strong>&nbsp;A failed payment is a lifecycle event with a defined effect on permissions, handled by the same listener as a successful renewal.</li>
            <li className={styles.bulletItem}><strong>Real-time propagation.</strong>&nbsp;Tier changes take effect on the next query rather than at the next session, because the gate is evaluated per request.</li>
          </ul>
        </div>
        <FooterBar page="10" />
      </div>

      {/* ── 04 User-Facing Features ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader num="04" eyebrow="User-Facing Features" title="A conversation that shows its working." />

          <p className={styles.sectionParagraph}>
            The frontend is a React-based conversational interface with a dark theme, built with Tailwind CSS
            for a responsive layout that works across desktop and mobile. It handles the states this kind of
            system actually produces — streaming responses, file upload progress, and interactive source
            citations — rather than treating them as edge cases.
          </p>

          <h3 className={styles.plainHeading}>Ask in plain language</h3>
          <p className={styles.sectionParagraph}>
            The entry point is a sentence. There is no query syntax to learn, no ticker field, no report to
            select first. Intent classification happens server-side, so the user does not have to tell the
            system what kind of question they are asking.
          </p>

          <h3 className={styles.plainHeading}>Watch the system work</h3>
          <p className={styles.sectionParagraph}>
            Status events surface what is happening during a retrieval — classifying, searching, parsing,
            re-ranking — and the answer then arrives token by token. For a query that takes several seconds
            of genuine background work, this is the difference between a responsive tool and an apparently
            frozen one.
          </p>

          <h3 className={styles.plainHeading}>Interactive citations</h3>
          <p className={styles.sectionParagraph}>
            Every claim carries its source, and sources are interactive rather than footnoted. A user can
            move from an assertion in the answer to the web result or the passage in their own document that
            supports it — which is the feature that makes the output usable in a context where being
            confidently wrong is expensive.
          </p>

          <h3 className={styles.plainHeading}>Bring your own documents</h3>
          <p className={styles.sectionParagraph}>
            Financial reports, PDFs and spreadsheets can be uploaded and then questioned directly. Because
            ingestion extracts structured data as well as text, questions about figures in a table are
            answerable, not just questions about prose.
          </p>

          <h3 className={styles.plainHeading}>Answers pitched at the reader</h3>
          <p className={styles.sectionParagraph}>
            The persona system tailors the register of a response to the user&apos;s expertise level. The
            same macro question can return a plain-language explanation or an analytical read, without the
            user having to prompt for either.
          </p>

          <div className={styles.pillGrid}>
            <div className={styles.pillCard}>
              <div className={styles.pillTitle}>Plain</div>
              <div className={styles.pillCaption}>Natural language in, no query syntax</div>
            </div>
            <div className={styles.pillCard}>
              <div className={styles.pillTitle}>Live</div>
              <div className={styles.pillCaption}>Status events during background retrieval</div>
            </div>
            <div className={styles.pillCard}>
              <div className={styles.pillTitle}>Cited</div>
              <div className={styles.pillCaption}>Interactive sources on every claim</div>
            </div>
            <div className={styles.pillCard}>
              <div className={styles.pillTitle}>Yours</div>
              <div className={styles.pillCaption}>Questions answered from your own documents</div>
            </div>
          </div>

          <div className={styles.highlightBox}>
            AIMI Brain is not another chat wrapper. It is a purpose-built financial engine that understands
            the nuances of macro-economics and institutional data, and it is designed to deliver actionable
            intelligence rather than generic text.
          </div>
        </div>
        <FooterBar page="11" />
      </div>

      {/* ── 05 Security and Auditability ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader num="05" eyebrow="Security and Auditability" title="Isolated per user, encrypted throughout, traceable to a source." />

          <p className={styles.sectionParagraph}>
            Security and data privacy are not optional in finance. A user&apos;s uploaded filings are
            commercially sensitive, their question history is a signal about their positions, and an answer
            they cannot trace is an answer they cannot act on. The architecture treats all three as
            first-order requirements.
          </p>

          <h3 className={styles.subHeadingBlue}>Authentication and sessions</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>A secure authentication layer supporting email and password alongside Google OAuth, with managed sessions.</li>
            <li className={styles.bulletItem}>User documents and chat histories are isolated per account and encrypted, so an authentication boundary is also a data boundary.</li>
            <li className={styles.bulletItem}>Auth and session validation happen at the gateway on every query, not once at login.</li>
          </ul>

          <h3 className={styles.subHeadingBlue}>Data protection</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>Encryption at rest and in transit, following established best practice.</li>
            <li className={styles.bulletItem}>Uploaded documents are stored in secure S3 buckets accessed through time-limited URLs, so a leaked link expires rather than persisting as an open door.</li>
            <li className={styles.bulletItem}>Vector data is logically partitioned per user, which means retrieval cannot cross an account boundary even when two users ask the same question.</li>
          </ul>

          <h3 className={styles.subHeadingBlue}>Answer traceability</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>Every claim is grounded in a retrievable source — a live web result or a passage in the user&apos;s own document — and the citation is delivered with the answer rather than reconstructed afterwards.</li>
            <li className={styles.bulletItem}>Re-ranking selects the source that supports a claim, so a citation is evidence rather than decoration.</li>
            <li className={styles.bulletItem}>Because retrieval is a routed decision, whether an answer used external data at all is itself part of the record of that turn.</li>
          </ul>

          <h3 className={styles.subHeadingBlue}>Operational visibility</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>Comprehensive monitoring and logging through CloudWatch across containerised services.</li>
            <li className={styles.bulletItem}>CI/CD pipelines make deployments repeatable, which is what allows a security fix to ship quickly rather than carefully.</li>
            <li className={styles.bulletItem}>Quota decrement on completion gives an accurate per-user record of consumption that matches what the system actually did.</li>
          </ul>

          <div className={styles.darkBox}>
            <strong>Design Principle</strong>
            Ground every claim in a source the user can open — in finance, an answer without provenance is
            not a faster answer, it is an unusable one.
          </div>
        </div>
        <FooterBar page="12" />
      </div>

      {/* ── 06 What Makes This Different ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader num="06" eyebrow="What Makes This Different" title="Seven decisions that separate an engine from a wrapper." />

          <div className={styles.decisionList}>
            {DECISIONS.map((d, i) => (
              <div key={d.title} className={styles.decisionItem}>
                <span className={styles.decisionNum}>{String(i + 1).padStart(2, '0')}</span>
                <h4 className={styles.decisionTitle}>{d.title}</h4>
                <p className={styles.decisionDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <FooterBar page="13" />
      </div>

      {/* ── 07 Outcomes ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader num="07" eyebrow="Outcomes" title="What was delivered, and how it is measured." />

          <p className={styles.sectionParagraph}>
            AIMI Brain was designed and shipped as a complete platform — backend, frontend, AI pipeline,
            entitlement layer and subscription infrastructure. The confirmed figures below describe the
            delivery. The measurement framework that follows is the instrumentation the architecture already
            exposes, presented as a framework so reported values stay tied to live telemetry rather than to
            a document.
          </p>

          <span className={styles.glanceLabel}>Confirmed</span>
          <div className={styles.confirmedGrid}>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>2</span>
              <span className={styles.confirmedLabel}>User tiers</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>3</span>
              <span className={styles.confirmedLabel}>Grounding sources</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>1</span>
              <span className={styles.confirmedLabel}>Socket per session</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>AWS</span>
              <span className={styles.confirmedLabel}>ECS + Fargate</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>Stripe</span>
              <span className={styles.confirmedLabel}>Billing integration</span>
            </div>
          </div>

          <h3 className={styles.plainHeading}>Measurement framework</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Instrumented Metric</th>
                  <th>What It Measures</th>
                  <th style={{ width: '110px' }}>Current</th>
                </tr>
              </thead>
              <tbody>
                {MEASUREMENT_TABLE.map((row) => (
                  <tr key={row.metric}>
                    <td className={styles.layerCol}>{row.metric}</td>
                    <td>{row.measures}</td>
                    <td className={styles.mutedCell}>[ populate ]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <FooterBar page="14" />
      </div>

      {/* ── What this demonstrates / Delivered ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <h3 className={styles.plainHeading}>What this demonstrates</h3>
          <p className={styles.sectionParagraph}>
            Real-time financial intelligence is not a prompt problem. It is an architecture problem —
            conditional retrieval to control cost, re-ranked grounding to control correctness, streaming to
            control perceived latency, per-user partitioning to control exposure, and entitlement derived
            from billing state to control access.
          </p>

          <div className={styles.highlightBox}>
            By combining RAG, live web grounding and a high-performance architecture, we built a tool that
            provides real, actionable intelligence rather than generic text — a purpose-built financial
            engine that understands the nuances of macro-economics and institutional data.
          </div>

          <div className={styles.deliveredBar}>
            <strong>Delivered</strong>· {DELIVERED_ITEMS}
          </div>
        </div>
        <FooterBar page="15" />
      </div>
    </div>
  );
}
