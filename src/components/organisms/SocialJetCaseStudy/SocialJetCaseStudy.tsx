'use client';

import React from 'react';
import styles from '@/styles/components/organisms/SocialJetCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface SocialJetCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

function RunningHeader() {
  return (
    <div className={styles.pageRunningHeader}>
      <div className={styles.headerLeft}>
        <strong>SOCIALJET</strong>
        <span>AI-Powered Influencer Marketing Operating System</span>
      </div>
      <div className={styles.headerRight}>
        <span>PG-AGI · Applied AI &amp; Platform Engineering</span>
      </div>
    </div>
  );
}

function FooterBar({ page }: { page: string }) {
  return (
    <div className={styles.pageFooterBar}>
      <span>Case Study · pgagi.in</span>
      <strong>{page}</strong>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionEyebrow}>{eyebrow}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <hr className={styles.sectionRule} />
    </div>
  );
}

function DownArrow({ caption }: { caption?: string }) {
  return (
    <div className={styles.archArrowRow}>
      <svg className={styles.archArrowSvg} viewBox="0 0 10 12" fill="none" aria-hidden="true">
        <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
        <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
      </svg>
      {caption && <span className={styles.archArrowCaption}>{caption}</span>}
    </div>
  );
}

export default function SocialJetCaseStudy(_props: SocialJetCaseStudyProps) {
  return (
    <div className={styles.socialJetPage}>
      {/* ── Page 1: Cover Sheet ── */}
      <div className={`${styles.pageSheet} ${styles.coverSheet}`}>
        <div className={styles.coverTop}>
          <div className={styles.coverAccentBar} />
          <div className={styles.coverEyebrow}>PG-AGI | APPLIED AI &amp; PLATFORM ENGINEERING</div>
          <h1 className={styles.coverTitle}>SocialJet</h1>
          <p className={styles.coverSubtitle}>
            An AI-powered operating system for<br />influencer marketing
          </p>
        </div>

        <div className={styles.coverBottom}>
          <div className={styles.coverMetaSection}>
            <table className={styles.coverMetaTable}>
              <tbody>
                <tr className={styles.coverMetaRow}>
                  <td className={styles.coverMetaLabel}>Platform type</td>
                  <td className={styles.coverMetaValue}>AI-Powered Influencer Marketing Operating System</td>
                </tr>
                <tr className={styles.coverMetaRow}>
                  <td className={styles.coverMetaLabel}>Architecture</td>
                  <td className={styles.coverMetaValue}>Multi-agent AI · LangGraph orchestration · human-in-the-loop controls</td>
                </tr>
                <tr className={styles.coverMetaRow}>
                  <td className={styles.coverMetaLabel}>Agent families</td>
                  <td className={styles.coverMetaValue}>Sales · Campaign Operations · Finance &amp; Analytics</td>
                </tr>
                <tr className={styles.coverMetaRow}>
                  <td className={styles.coverMetaLabel}>MVP timeline</td>
                  <td className={styles.coverMetaValue}>10-week build plan</td>
                </tr>
                <tr className={styles.coverMetaRow}>
                  <td className={styles.coverMetaLabel}>Prepared by</td>
                  <td className={styles.coverMetaValue}>PG-AGI — Applied AI &amp; Platform Engineering</td>
                </tr>
              </tbody>
            </table>

            {/* Bottom 7 vertical bars graphic */}
            <div className={styles.coverGraphicBars} aria-hidden="true">
              <span className={styles.graphicBar} />
              <span className={styles.graphicBar} />
              <span className={styles.graphicBar} />
              <span className={styles.graphicBar} />
              <span className={styles.graphicBar} />
              <span className={styles.graphicBar} />
              <span className={styles.graphicBar} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Page 2 (02): Section I — What We Built ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader eyebrow="SECTION I" title="What We Built" />

          <p className={styles.sectionParagraph}>
            SocialJet is an AI-powered operating system that automates the end-to-end workflow of an
            influencer-marketing agency — spanning lead capture, proposal generation, influencer discovery,
            outreach, campaign tracking, payouts and post-campaign analytics.
          </p>

          <p className={styles.sectionParagraph}>
            Rather than a single chatbot bolted onto existing tools, it is conceived as a multi-agent platform: specialised AI agents
            orchestrated by LangGraph, served by a FastAPI backend, and operated through a React dashboard, with humans
            retained at every critical decision point.
          </p>

          <div className={styles.calloutBox}>
            <span className={styles.calloutBoxLabel}>The defining principle: human-in-the-loop by default</span>
            Agents recommend, draft, rank and monitor. Every externally visible or financially sensitive action — outreach
            sends, negotiation replies, shortlist approvals, content approvals, payouts — is gated behind a human approval
            queue.
          </div>

          <h3 className={styles.subHeading}>The problem it solves</h3>
          <p className={styles.sectionParagraph}>
            SocialJet addresses four compounding operational problems that fragment influencer-marketing agency workflows.
          </p>

          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
              A 1,500+ influencer database living in CSV and Google Sheets, with no semantic matching between client briefs and creator fit.
            </li>
            <li className={styles.bulletItem}>
              Manual, inconsistent outreach and follow-up across WhatsApp, Email, Telegram and Instagram DM, with no unified workspace.
            </li>
            <li className={styles.bulletItem}>
              Client content review scattered across email threads instead of a single, frictionless approve/comment surface.
            </li>
            <li className={styles.bulletItem}>
              Finance, payouts and post-campaign reporting assembled by hand at month-end rather than generated from structured pipeline data.
            </li>
          </ul>

          <h3 className={styles.subHeading}>What was delivered</h3>
          <p className={styles.sectionParagraph}>
            The 10-week MVP delivered five core capability layers covering the full agency workflow.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Layer</th>
                  <th>Delivered capability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Operational Dashboard</td>
                  <td>React workspace for leads, campaigns, shortlists, outreach, content review, analytics and per-user to-do queues.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Client Portal</td>
                  <td>Magic-link, campaign-scoped portal for shortlist approval and content review with single-action approve and feedback controls.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>AI Agent Layer</td>
                  <td>Eleven specialised agents across Sales, Campaign Operations, and Finance &amp; Analytics, plus a deterministic Operations Monitor.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Discovery Engine</td>
                  <td>pgvector semantic matching of campaign-brief embeddings to creator-profile embeddings (Instagram and TikTok for the MVP).</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Approval &amp; Audit Fabric</td>
                  <td>Human approval queues with full logging of edits, overrides and sends.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <FooterBar page="02" />
      </div>

      {/* ── Page 3 (03): Section II — Core Architecture ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader eyebrow="SECTION II" title="Core Architecture" />

          <p className={styles.sectionParagraph}>
            SocialJet uses a layered, modular architecture that cleanly separates the user interface, the backend
            workflow engine, the AI agent orchestration layer, the role-based access layer and the data-storage
            systems. Each layer scales independently, keeping the platform maintainable and open to future workflow
            modules, channels and analytics.
          </p>

          {/* ── Figure 1 Diagram ── */}
          <div className={styles.archDiagramContainer}>
            <div className={styles.archLegend}>
              <div className={styles.legendItem}>
                <span className={`${styles.legendPill} ${styles.pillPrimary}`} />
                <span>Primary service</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendPill} ${styles.pillPlatform}`} />
                <span>Platform component</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendPill} ${styles.pillDeterministic}`} />
                <span>Deterministic / audit store</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendPill} ${styles.pillHuman}`} />
                <span>Human approval gate</span>
              </div>
            </div>

            <div className={styles.archScrollWrapper}>
              <div className={styles.archGridWrapper}>
                <div className={styles.archLayersCol}>
                  {/* 01 PRESENTATION */}
                <div className={styles.archLayerRow}>
                  <div className={styles.archLayerBadge}>
                    <span className={styles.archBadgeNum}>01</span>
                    <span className={styles.archBadgeName}>PRESENTATION</span>
                  </div>
                  <div className={`${styles.archCardsTrack} ${styles.archGrid3}`}>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>React Dashboard</span>
                      <span className={styles.archCardSub}>Role-aware internal workspace</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Client Portal</span>
                      <span className={styles.archCardSub}>Magic-link, campaign-scoped</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Real-Time Layer</span>
                      <span className={styles.archCardSub}>WebSockets / SSE</span>
                    </div>
                  </div>
                </div>

                {/* Arrow 1: Between 01 and 02 */}
                <div className={styles.archArrowRow}>
                  <div className={styles.archArrowCenter}>
                    <svg className={styles.archArrowSvg} viewBox="0 0 10 12" fill="none" aria-hidden="true">
                      <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                      <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                    </svg>
                  </div>
                </div>

                {/* 02 API & WORKFLOW */}
                <div className={styles.archLayerRow}>
                  <div className={styles.archLayerBadge}>
                    <span className={styles.archBadgeNum}>02</span>
                    <span className={styles.archBadgeName}>API &amp;<br />WORKFLOW</span>
                  </div>
                  <div className={`${styles.archCardsTrack} ${styles.archGridRow2}`}>
                    <div className={`${styles.archCard} ${styles.archCardPrimary}`}>
                      <span className={styles.archCardTitleWhite}>FastAPI Gateway</span>
                      <span className={styles.archCardSubWhite}>Lifecycle state | approval queues | CM assignment | task generation | audit logging</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Event Triggers</span>
                      <span className={styles.archCardSub}>Lead | proposal | campaign | reply | completion</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Redis Workers</span>
                      <span className={styles.archCardSub}>Background tasks</span>
                    </div>
                  </div>
                </div>

                {/* Arrow 2: Between 02 and 03 */}
                <div className={styles.archArrowRow}>
                  <div className={styles.archArrowCenter}>
                    <svg className={styles.archArrowSvg} viewBox="0 0 10 12" fill="none" aria-hidden="true">
                      <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                      <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                    </svg>
                  </div>
                </div>

                {/* 03 AGENT ORCHESTRATION */}
                <div className={styles.archLayerRow}>
                  <div className={styles.archLayerBadge}>
                    <span className={styles.archBadgeNum}>03</span>
                    <span className={styles.archBadgeName}>AGENT<br />ORCHESTRATION</span>
                  </div>
                  <div className={`${styles.archCardsTrack} ${styles.archGrid4}`}>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Sales Agents</span>
                      <span className={styles.archCardSub}>3 agents</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Campaign Ops Agents</span>
                      <span className={styles.archCardSub}>5 agents</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Finance &amp; Analytics</span>
                      <span className={styles.archCardSub}>3 agents</span>
                    </div>
                    <div className={`${styles.archCard} ${styles.archCardDeterministic}`}>
                      <span className={styles.archCardTitle}>Operations Monitor</span>
                      <span className={styles.archCardSub}>Deterministic, no LLM</span>
                    </div>
                  </div>
                </div>

                {/* Arrow 3: Between 03 and 04 (with label to the right) */}
                <div className={styles.archArrowRow}>
                  <div className={styles.archArrowCenter}>
                    <svg className={styles.archArrowSvg} viewBox="0 0 10 12" fill="none" aria-hidden="true">
                      <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                      <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                    </svg>
                  </div>
                  <span className={styles.archArrowLabelRight}>every outbound and financial action</span>
                </div>

                {/* 04 CONTROL */}
                <div className={styles.archLayerRow}>
                  <div className={`${styles.archLayerBadge} ${styles.archBadgePrimary}`}>
                    <span className={styles.archBadgeNumWhite}>04</span>
                    <span className={styles.archBadgeNameWhite}>CONTROL</span>
                  </div>
                  <div className={`${styles.archCardsTrack} ${styles.archGrid1}`}>
                    <div className={`${styles.archCard} ${styles.archCardHuman}`}>
                      <span className={styles.archCardTitleHuman}>HUMAN-IN-THE-LOOP APPROVAL FABRIC</span>
                      <span className={styles.archCardSubHuman}>Approve | Edit | Reject | Rewrite</span>
                    </div>
                  </div>
                </div>

                {/* Arrow 4: Between 04 and 05 (with label to the right) */}
                <div className={styles.archArrowRow}>
                  <div className={styles.archArrowCenter}>
                    <svg className={styles.archArrowSvg} viewBox="0 0 10 12" fill="none" aria-hidden="true">
                      <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                      <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                    </svg>
                  </div>
                  <span className={styles.archArrowLabelRight}>approved sends only</span>
                </div>

                {/* 05 INTEGRATIONS */}
                <div className={styles.archLayerRow}>
                  <div className={styles.archLayerBadge}>
                    <span className={styles.archBadgeNum}>05</span>
                    <span className={styles.archBadgeName}>INTEGRATIONS</span>
                  </div>
                  <div className={`${styles.archCardsTrack} ${styles.archGrid3}`}>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Outreach Channels</span>
                      <span className={styles.archCardSub}>WhatsApp | Email | Telegram | Instagram DM</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Typeform</span>
                      <span className={styles.archCardSub}>T+3 metric collection</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>OpenAI GPT</span>
                      <span className={styles.archCardSub}>Generation and reasoning</span>
                    </div>
                  </div>
                </div>

                {/* Bracket / Connector between 05 and 06 */}
                <div className={styles.archDataConnectorRow}>
                  <span className={styles.archDataConnectorText}>read and written by the API, agent and approval layers</span>
                  <div className={styles.archDataConnectorBracket} />
                </div>

                {/* 06 DATA TIER */}
                <div className={styles.archLayerRow}>
                  <div className={styles.archLayerBadge}>
                    <span className={styles.archBadgeNum}>06</span>
                    <span className={styles.archBadgeName}>DATA TIER</span>
                  </div>
                  <div className={`${styles.archCardsTrack} ${styles.archGrid4}`}>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Neon PostgreSQL</span>
                      <span className={styles.archCardSub}>Operational core</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>pgvector</span>
                      <span className={styles.archCardSub}>Brief &amp; creator embeddings</span>
                    </div>
                    <div className={`${styles.archCard} ${styles.archCardDeterministic}`}>
                      <span className={styles.archCardTitle}>Agent Memory &amp; Logs</span>
                      <span className={styles.archCardSub}>Decisions, traces, approvals</span>
                    </div>
                    <div className={styles.archCard}>
                      <span className={styles.archCardTitle}>Cloudflare R2</span>
                      <span className={styles.archCardSub}>Assets and reports</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Security Sidebar */}
              <div className={styles.archSecurityCol}>
                <span className={styles.archSecurityText}>
                  <span>SECURITY &amp; AUDITABILITY</span>
                  <span>TLS &nbsp; JWT &nbsp; RBAC &nbsp; AUDIT TRAIL</span>
                </span>
              </div>
            </div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 1</strong> — Layered platform architecture. LangGraph orchestrates eleven specialist agents across three families; every outbound or financially sensitive action passes through the human approval fabric before it reaches an external channel.
          </p>

          <h3 className={styles.subHeading}>Presentation layer</h3>
          <p className={styles.sectionParagraph}>
            A role-aware React dashboard for internal teams, and a restricted magic-link client portal scoped to a single client&apos;s
            campaigns. Real-time updates — reply notifications, draft alerts and approval status — ride over WebSockets and
            Server-Sent Events.
          </p>

          <h3 className={styles.subHeading}>Backend and workflow engine</h3>
          <p className={styles.sectionParagraph}>
            FastAPI is the central API gateway. It owns campaign lifecycle state, approval queues,
            campaign-to-campaign-manager assignment, personalised task generation, audit logging and integrations. Event
            triggers — new lead, proposal approved, campaign created, creator replied, campaign completed — activate the
            relevant agent.
          </p>
        </div>
        <FooterBar page="03" />
      </div>

      {/* ── Page 4 (04): Section II Continuation — Tables ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <h3 className={styles.subHeading} style={{ marginTop: 0 }}>Agent orchestration — eleven specialised agents</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Agent family</th>
                  <th>Agents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Sales Agents</td>
                  <td>Lead Capture · Nurture · Sales Intelligence</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Campaign Ops Agents</td>
                  <td>Onboarding · Influencer Discovery · Outreach &amp; Negotiation · Content Tracker · Review Coordinator</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Finance &amp; Analytics Agents</td>
                  <td>Invoice Tracking · Influencer Payment · Post-Campaign Analytics</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Operations Monitor</td>
                  <td>Deterministic service, no LLM — threshold-based checks for stalls, overdue items and unpaid invoices.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Data tier</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Store</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Neon PostgreSQL</td>
                  <td>Core operational data — campaigns, leads, users, progress.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>pgvector</td>
                  <td>Brief and creator embeddings for semantic discovery.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Agent Memory &amp; Logs</td>
                  <td>Decisions, audit traces and approval history.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Cloudflare R2</td>
                  <td>Assets, media and generated reports.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Technology stack</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '180px' }}>Concern</th>
                  <th>Technologies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Frontend</td>
                  <td>React, TailwindCSS, shadcn/ui, React Query, WebSockets / SSE, JWT sessions</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Backend</td>
                  <td>FastAPI, LangGraph orchestration hooks, Redis (background tasks), JWT auth</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>AI / Matching</td>
                  <td>LangGraph, OpenAI GPT models, pgvector similarity search, vector embeddings</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Data &amp; Storage</td>
                  <td>Neon PostgreSQL, pgvector, Cloudflare R2 object storage</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Delivery &amp; Ops</td>
                  <td>Docker, GitHub Actions CI/CD, monitoring dashboards and logging</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <FooterBar page="04" />
      </div>

      {/* ── Page 5 (05): Section III — Credit System and Monetisation ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader eyebrow="SECTION III" title="Credit System and Monetisation" />

          <p className={styles.sectionParagraph}>
            The current architecture includes several economic mechanics that form the foundation for a future
            monetisation layer. A metered credit or licensing model was not part of the MVP scope; the mechanics
            below are the primitives that layer would be built on.
          </p>

          <h3 className={styles.subHeading}>Economic mechanics present in the MVP</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '240px' }}>Mechanic</th>
                  <th>How it works</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Per-campaign budget caps</td>
                  <td>Every campaign carries a pre-defined budget, enforced when proposing and confirming creators.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Internal creator rate cards</td>
                  <td>Historical fees and internal rates per creator and tier — micro, mid and macro — are stored in the influencer database for budgeting and negotiation.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Controlled outreach economics</td>
                  <td>The agent never outreaches beyond the required count, with an optional 20% over-outreach buffer to absorb typical sub-100% acceptance rates.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>What a full credit and monetisation layer would require</h3>
          <p className={styles.sectionParagraph}>
            The platform is structured so that billing can be added without re-architecture. Five components would complete it.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Requirement</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Unit of account</td>
                  <td>A campaign credit, discovery credit or seat-based licence, and its conversion to currency.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Metering hooks</td>
                  <td>Hooks in the FastAPI layer to count billable events — discoveries run, outreach sends, reports generated.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Wallet / ledger model</td>
                  <td>Balances, top-ups and a billing audit trail, layerable onto the existing agent memory and logs tier.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Plan tiers</td>
                  <td>Entitlements wired into the existing RBAC layer for plan-based access control.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Payment gateway</td>
                  <td>Gateway integration was deliberately excluded from the MVP; it is required for full billing automation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.calloutBox}>
            <span className={styles.calloutBoxLabel}>Why this sequencing</span>
            Budget caps, rate cards and outreach ceilings are cost-control mechanics the agency needs on day one.
            Credits, wallets and gateways are revenue mechanics that only matter once the platform is sold as a product
            rather than operated in-house — so the MVP built the former and left clean interfaces for the latter.
          </div>
        </div>
        <FooterBar page="05" />
      </div>

      {/* ── Page 6 (06): Section IV — User-Facing Features ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader eyebrow="SECTION IV" title="User-Facing Features" />

          <h3 className={styles.subHeading} style={{ marginTop: 0 }}>Features by role</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>User</th>
                  <th>What they do in SocialJet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Executives</td>
                  <td>Full visibility across the platform, including the Operations Monitor view of stalled campaigns, overdue items and high-priority actions.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Sales (x2)</td>
                  <td>Lead capture and management, proposal review, AI-drafted call summaries and proposals.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Campaign Managers (x9)</td>
                  <td>Influencer discovery, one-by-one shortlist approval, multi-channel outreach, content tracking and review coordination — scoped to assigned campaigns.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Finance (x1)</td>
                  <td>Finance dashboard to enter invoice values, track invoiced versus pending, update payment status and manage payout records.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Clients</td>
                  <td>Magic-link portal to review shortlists, approve or reject content drafts and track progress — restricted to their own campaigns.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Figure 2: Campaign Lifecycle ── */}
          <div className={styles.lifecycleContainer}>
            <div className={styles.lifecycleLegend}>
              <div className={styles.legendItem}>
                <span className={`${styles.legendPill} ${styles.pillPlatform}`} />
                <span>Agent action (AI drafts, ranks, monitors)</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendPill} ${styles.pillPrimary}`} />
                <span>Pipeline stage</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendPill} ${styles.pillHumanApproval}`} />
                <span>Mandatory human approval</span>
              </div>
            </div>

            <div className={styles.lifecycleScrollWrapper}>
              <div className={styles.lifecycleHeadersRow}>
                <div className={styles.lifecycleHeaderPlaceholder} />
                <span className={styles.lifecycleHeaderAgent}>AGENT ACTS</span>
                <span className={styles.lifecycleHeaderStage}>PIPELINE STAGE</span>
                <span className={styles.lifecycleHeaderHuman}>HUMAN GATE</span>
              </div>

              <div className={styles.lifecyclePhasesWrapper}>
              {/* Phase 1: ACQUIRE */}
              <div className={styles.lifecyclePhaseBlock}>
                <div className={styles.lifecyclePhaseBadge}>
                  <span>ACQUIRE</span>
                </div>
                <div className={styles.lifecyclePhaseStages}>
                  {/* Stage 01 */}
                  <div className={styles.lifecycleStageRow}>
                    <div className={styles.lifecycleAgentCard}>
                      Lead Capture | Nurture
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleStageCard}>
                      <span className={styles.stageNum}>01</span>
                      <span className={styles.stageTitle}>LEAD</span>
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleHumanCard}>
                      Sales qualifies and routes the lead
                    </div>
                  </div>

                  {/* Down Arrow 01 -> 02 */}
                  <div className={styles.lifecycleDownArrowRow}>
                    <div className={styles.lifecycleDownArrowCenter}>
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                        <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                      </svg>
                    </div>
                  </div>

                  {/* Stage 02 */}
                  <div className={styles.lifecycleStageRow}>
                    <div className={styles.lifecycleAgentCard}>
                      Sales Intelligence — AI call summary and proposal draft
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleStageCard}>
                      <span className={styles.stageNum}>02</span>
                      <span className={styles.stageTitle}>PROPOSAL</span>
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleHumanCard}>
                      Sales approves the proposal before it is sent
                    </div>
                  </div>
                </div>
              </div>

              {/* Down Arrow 02 -> 03 */}
              <div className={styles.lifecyclePhaseTransitionArrowRow}>
                <div className={styles.lifecycleDownArrowCenter}>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                    <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                  </svg>
                </div>
              </div>

              {/* Phase 2: PLAN */}
              <div className={styles.lifecyclePhaseBlock}>
                <div className={styles.lifecyclePhaseBadge}>
                  <span>PLAN</span>
                </div>
                <div className={styles.lifecyclePhaseStages}>
                  {/* Stage 03 */}
                  <div className={styles.lifecycleStageRow}>
                    <div className={styles.lifecycleAgentCard}>
                      Onboarding — brief structuring
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleStageCard}>
                      <span className={styles.stageNum}>03</span>
                      <span className={styles.stageTitle}>CAMPAIGN SETUP</span>
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleHumanCard}>
                      Campaign manager assigned; budget cap confirmed
                    </div>
                  </div>

                  {/* Down Arrow 03 -> 04 */}
                  <div className={styles.lifecycleDownArrowRow}>
                    <div className={styles.lifecycleDownArrowCenter}>
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                        <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                      </svg>
                    </div>
                  </div>

                  {/* Stage 04 */}
                  <div className={styles.lifecycleStageRow}>
                    <div className={styles.lifecycleAgentCard}>
                      Influencer Discovery — pgvector brief-to-creator match
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleStageCard}>
                      <span className={styles.stageNum}>04</span>
                      <span className={styles.stageTitle}>INFLUENCER DISCOVERY</span>
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleHumanCard}>
                      CM approves or rejects each creator one-by-one with reasoning visible; slots auto-regenerate
                    </div>
                  </div>
                </div>
              </div>

              {/* Down Arrow 04 -> 05 */}
              <div className={styles.lifecyclePhaseTransitionArrowRow}>
                <div className={styles.lifecycleDownArrowCenter}>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                    <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                  </svg>
                </div>
              </div>

              {/* Phase 3: EXECUTE */}
              <div className={styles.lifecyclePhaseBlock}>
                <div className={styles.lifecyclePhaseBadge}>
                  <span>EXECUTE</span>
                </div>
                <div className={styles.lifecyclePhaseStages}>
                  {/* Stage 05 */}
                  <div className={styles.lifecycleStageRow}>
                    <div className={styles.lifecycleAgentCard}>
                      Outreach &amp; Negotiation — multi-channel drafts; follow-up at 24h then 48h, max 3 attempts
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleStageCard}>
                      <span className={styles.stageNum}>05</span>
                      <span className={styles.stageTitle}>OUTREACH</span>
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleHumanCard}>
                      Every message approved, edited, rejected or rewritten before send; manual takeover available
                    </div>
                  </div>

                  {/* Down Arrow 05 -> 06 */}
                  <div className={styles.lifecycleDownArrowRow}>
                    <div className={styles.lifecycleDownArrowCenter}>
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                        <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                      </svg>
                    </div>
                  </div>

                  {/* Stage 06 */}
                  <div className={styles.lifecycleStageRow}>
                    <div className={styles.lifecycleAgentCard}>
                      Content Tracker | Review Coordinator
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleStageCard}>
                      <span className={styles.stageNum}>06</span>
                      <span className={styles.stageTitle}>CONTENT REVIEW</span>
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleHumanCard}>
                      Internal CM vetting, then one-click client approve or feedback via magic link
                    </div>
                  </div>

                  {/* Down Arrow 06 -> 07 */}
                  <div className={styles.lifecycleDownArrowRow}>
                    <div className={styles.lifecycleDownArrowCenter}>
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                        <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                      </svg>
                    </div>
                  </div>

                  {/* Stage 07 */}
                  <div className={styles.lifecycleStageRow}>
                    <div className={styles.lifecycleAgentCard}>
                      Operations Monitor — deterministic threshold checks
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleStageCard}>
                      <span className={styles.stageNum}>07</span>
                      <span className={styles.stageTitle}>CAMPAIGN LIVE</span>
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleHumanCard}>
                      Stalls and overdue submissions escalated to management
                    </div>
                  </div>
                </div>
              </div>

              {/* Down Arrow 07 -> 08 */}
              <div className={styles.lifecyclePhaseTransitionArrowRow}>
                <div className={styles.lifecycleDownArrowCenter}>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <line x1="5" y1="0" x2="5" y2="8" stroke="#6D28D9" strokeWidth="1.5" />
                    <polygon points="2,7 5,11 8,7" fill="#6D28D9" />
                  </svg>
                </div>
              </div>

              {/* Phase 4: CLOSE */}
              <div className={styles.lifecyclePhaseBlock}>
                <div className={styles.lifecyclePhaseBadge}>
                  <span>CLOSE</span>
                </div>
                <div className={styles.lifecyclePhaseStages}>
                  {/* Stage 08 */}
                  <div className={styles.lifecycleStageRow}>
                    <div className={styles.lifecycleAgentCard}>
                      Invoice Tracking | Influencer Payment | Post-Campaign Analytics
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleStageCard}>
                      <span className={styles.stageNum}>08</span>
                      <span className={styles.stageTitle}>PAYOUT &amp; ANALYTICS</span>
                    </div>
                    <div className={styles.lifecycleConnector}>
                      <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                        <line x1="0" y1="4" x2="16" y2="4" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 2" />
                        <polygon points="15,1 21,4 15,7" fill="#A78BFA" />
                      </svg>
                    </div>
                    <div className={styles.lifecycleHumanCard}>
                      Finance confirms invoice values and approves every payout
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 2</strong> — Campaign lifecycle, from lead to payout, grouped into four operating phases. Each stage pairs an agent action with an explicit human gate; nothing advances on agent authority alone.
          </p>
        </div>
        <FooterBar page="06" />
      </div>

      {/* ── Page 7 (07): Section IV Continuation — Key Feature Set ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <h3 className={styles.subHeading} style={{ marginTop: 0 }}>Key feature set</h3>

          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
              <strong>Campaign lifecycle visualisation</strong> — Lead, Proposal, Campaign Setup, Influencer Discovery, Outreach, Content Review, Campaign Live and Analytics surfaced as a single pipeline.
            </li>
            <li className={styles.bulletItem}>
              <strong>AI influencer discovery with reasoning</strong> — Ranked shortlists from grounded, data-backed matching; one-by-one approve and reject with visible reasoning, and automatic regeneration to fill remaining slots.
            </li>
            <li className={styles.bulletItem}>
              <strong>Multi-channel outreach workspace</strong> — Personalised drafts across WhatsApp, Email, Telegram and Instagram DM, with per-influencer conversation views and a manual reply composer for human takeover.
            </li>
            <li className={styles.bulletItem}>
              <strong>Human-in-the-loop approval queue</strong> — Approve, edit, reject or rewrite agent messages before send; automatic follow-ups at 24 hours then 48 hours, up to three attempts, with optional manual retries.
            </li>
            <li className={styles.bulletItem}>
              <strong>Seamless client review</strong> — Internal campaign-manager vetting first, then one-click client approve or feedback via magic link, with the team notified on every client action.
            </li>
            <li className={styles.bulletItem}>
              <strong>Automated post-campaign insight collection</strong> — A Typeform link dispatched to creators three days after posting feeds the analytics agent with matured metrics.
            </li>
            <li className={styles.bulletItem}>
              <strong>Personalised to-do dashboards</strong> — Every user sees their own pending approvals, follow-ups, reviews and escalations in one place.
            </li>
          </ul>
        </div>
        <FooterBar page="07" />
      </div>

      {/* ── Page 8 (08): Section V — Security and Auditability ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader eyebrow="SECTION V" title="Security and Auditability" />

          <h3 className={styles.subHeading} style={{ marginTop: 0 }}>Security controls</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Control</th>
                  <th>Design intent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Transport &amp; storage encryption</td>
                  <td>TLS in transit and encrypted storage for sensitive campaign data.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Role-based access control</td>
                  <td>Enforced in the FastAPI layer; clients are hard-scoped to their own campaigns with no visibility into internal data.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Authentication</td>
                  <td>JWT session management for internal users; magic-link login for clients.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Secret management</td>
                  <td>Secrets held in a secret manager; hardcoded secrets removed, environment variables used and credentials rotated before handover.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Least-privilege handover</td>
                  <td>Admin repository access to the client, contributor roles on a least-privilege model, and secure private repository delivery.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Auditability</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
              <strong>Human-approval enforcement</strong> — All outbound communication routes through an approval queue by default. Approvals, edits, overrides and final sends are fully logged for traceability.
            </li>
            <li className={styles.bulletItem}>
              <strong>Agent memory and execution traces</strong> — A dedicated layer retains agent decisions, recommendation history, approval events and execution traces — the system&apos;s transparency backbone.
            </li>
            <li className={styles.bulletItem}>
              <strong>Deterministic operational oversight</strong> — The Operations Monitor performs threshold-based checks without an LLM, giving management a reliable live view of bottlenecks that does not depend on model behaviour.
            </li>
          </ul>

          <div className={styles.calloutBox}>
            <span className={styles.calloutBoxLabel}>Audit as the path to autonomy</span>
            The logging layer is not only a compliance artefact. It is the evidence base that determines when approval
            requirements can safely be relaxed for a given agent and action type — trust is earned through logged behaviour
            rather than assumed at deployment.
          </div>
        </div>
        <FooterBar page="08" />
      </div>

      {/* ── Page 9 (09): Section VI — What Makes This Different ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader eyebrow="SECTION VI" title="What Makes This Different" />

          <p className={styles.sectionParagraph}>
            Six design decisions separate SocialJet from both general-purpose AI assistants and conventional
            influencer-marketing tooling.
          </p>

          <div className={styles.differentiatorList}>
            <div className={styles.differentiatorItem}>
              <span className={styles.differentiatorNum}>01</span>
              <div className={styles.differentiatorContent}>
                <h4 className={styles.differentiatorTitle}>Agency OS, not a chatbot</h4>
                <p className={styles.differentiatorDesc}>
                  It automates an entire operating model — lead to payout — inside one platform that both the agency and its
                  clients work in, rather than adding an assistant beside existing tools.
                </p>
              </div>
            </div>

            <div className={styles.differentiatorItem}>
              <span className={styles.differentiatorNum}>02</span>
              <div className={styles.differentiatorContent}>
                <h4 className={styles.differentiatorTitle}>Human-in-the-loop by design</h4>
                <p className={styles.differentiatorDesc}>
                  Agents draft and recommend; humans approve every external or financial action. Approval can be relaxed later
                  once the team trusts the agents, but that trust is earned through logged behaviour, not assumed.
                </p>
              </div>
            </div>

            <div className={styles.differentiatorItem}>
              <span className={styles.differentiatorNum}>03</span>
              <div className={styles.differentiatorContent}>
                <h4 className={styles.differentiatorTitle}>Grounded discovery, not open generation</h4>
                <p className={styles.differentiatorDesc}>
                  Recommendations are constrained to stored creator records and embeddings, with reasoning exposed — a
                  deliberate hallucination-reduction stance for a domain where bad matches cost real money.
                </p>
              </div>
            </div>

            <div className={styles.differentiatorItem}>
              <span className={styles.differentiatorNum}>04</span>
              <div className={styles.differentiatorContent}>
                <h4 className={styles.differentiatorTitle}>Semantic brief-to-creator matching</h4>
                <p className={styles.differentiatorDesc}>
                  Storing a campaign-brief embedding alongside each creator-profile embedding enables matching on what a
                  creator actually delivers, rather than on keyword tags such as &apos;beauty&apos; or &apos;fitness&apos;.
                </p>
              </div>
            </div>

            <div className={styles.differentiatorItem}>
              <span className={styles.differentiatorNum}>05</span>
              <div className={styles.differentiatorContent}>
                <h4 className={styles.differentiatorTitle}>Deterministic where determinism matters</h4>
                <p className={styles.differentiatorDesc}>
                  Operational threshold checks run as a deterministic service, reserving AI for genuinely generative or
                  judgement-based tasks.
                </p>
              </div>
            </div>

            <div className={styles.differentiatorItem}>
              <span className={styles.differentiatorNum}>06</span>
              <div className={styles.differentiatorContent}>
                <h4 className={styles.differentiatorTitle}>Frictionless client approval</h4>
                <p className={styles.differentiatorDesc}>
                  A single magic-link to-do surface with one-click approve and feedback removes the slowest step in most
                  campaigns: getting the client to say yes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterBar page="09" />
      </div>

      {/* ── Page 10 (10): Section VII — Outcomes from the System ── */}
      <div className={styles.pageSheet}>
        <RunningHeader />
        <div className={styles.pageInner}>
          <SectionHeader eyebrow="SECTION VII" title="Outcomes from the System" />

          <p className={styles.sectionParagraph}>
            The outcomes below are the operational results the architecture is designed to produce, mapped to the
            specific mechanism that produces each one. Quantitative performance should be measured post-launch
            against the platform&apos;s own analytics pipeline.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Intended outcome</th>
                  <th>Enabled by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.rowLabelCol}>Faster campaign throughput</td>
                  <td>Consolidating discovery, outreach, review and reporting in one platform lets the team run more campaigns without proportional headcount growth.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Higher-quality matching</td>
                  <td>Embedding-based discovery improves creator-to-brief fit and reduces rejection rates, tightening the over-outreach buffer over time.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Shorter approval cycles</td>
                  <td>One-click magic-link client approvals cut the largest single source of campaign delay.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Reliable operational oversight</td>
                  <td>The deterministic Operations Monitor surfaces stalls, overdue submissions and unpaid invoices before they become failures.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Auditable autonomy</td>
                  <td>Full logging of every agent recommendation and human action builds the evidence base to safely expand agent autonomy.</td>
                </tr>
                <tr>
                  <td className={styles.rowLabelCol}>Cleaner post-campaign reporting</td>
                  <td>Automated three-day-post Typeform collection plus the analytics agent replaces manual month-end assembly with structured, decision-ready reports.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>In closing</h3>
          <p className={styles.sectionParagraph}>
            SocialJet collapses a fragmented, spreadsheet-and-inbox operation into one platform that the entire agency —
            executives, sales, campaign managers and finance — and the agency&apos;s clients all work inside.
          </p>
          <p className={styles.sectionParagraph}>
            Its multi-agent architecture, grounded semantic discovery and human-in-the-loop approval fabric deliver agency-grade
            automation without sacrificing control, auditability, or the quality of human judgement at critical decision points.
          </p>

          <div className={styles.calloutBox}>
            <span className={styles.calloutBoxLabel}>SocialJet is an AI operating system for influencer marketing</span>
            Not a tool, and not a chatbot, but a complete agency workflow engine that automates the routine, augments the
            expert, and keeps humans in control of what matters.
          </div>
        </div>
        <FooterBar page="10" />
      </div>
    </div>
  );
}
