'use client';

import React from 'react';
import styles from '@/styles/components/organisms/SocialJetCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface SocialJetCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const IMG = '/case-studies/SocialJet_Images';

type Row = [string, string];

function RunningHeader() {
  return (
    <div className={styles.runningHeader}>
      <span>
        <strong>SOCIALJET</strong> · AI-Powered Influencer Marketing Operating System
      </span>
      <span>PG-AGI Case Study</span>
    </div>
  );
}

function Footer({ page }: { page: string }) {
  return (
    <div className={styles.footer}>
      <span>pgagi.in · Applied AI &amp; Platform Engineering</span>
      <strong>{page}</strong>
    </div>
  );
}

function Page({ page, children }: { page: string; children: React.ReactNode }) {
  return (
    <section className={styles.pageSheet}>
      <RunningHeader />
      <div className={styles.pageInner}>{children}</div>
      <Footer page={page} />
    </section>
  );
}

function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionBadge}>
        <span>SECTION</span>
        <strong>{num}</strong>
      </div>
      <div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionSub}>{sub}</p>
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className={styles.subHeading}>{children}</h3>;
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.callout}>
      <strong>{label}</strong>
      <p>{children}</p>
    </div>
  );
}

function DataTable({ head, rows, labelWidth = '34%' }: { head: Row; rows: Row[]; labelWidth?: string }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: labelWidth }}>{head[0]}</th>
            <th>{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td className={styles.rowLabel}>{a}</td>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Figure({
  src,
  alt,
  num,
  caption,
  frame = true,
}: {
  src: string;
  alt: string;
  num: number;
  caption: string;
  frame?: boolean;
}) {
  return (
    <figure className={styles.figure}>
      {frame ? (
        <div className={styles.browserFrame}>
          <div className={styles.browserBar}>
            <i />
            <i />
            <i />
            <span>SocialJet</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/${src}`} alt={alt} loading="lazy" />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.plainImg} src={`${IMG}/${src}`} alt={alt} loading="lazy" />
      )}
      <figcaption>
        <strong>Figure {num}.</strong> {caption}
      </figcaption>
    </figure>
  );
}

function WorkspaceBar({ name, agents }: { name: string; agents: string }) {
  return (
    <div className={styles.workspaceBar}>
      <div>
        <span>WORKSPACE</span>
        <strong>{name}</strong>
      </div>
      <em>{agents}</em>
    </div>
  );
}

const STATS: Row[] = [
  ['11', 'Specialised AI agents'],
  ['3', 'Agent families'],
  ['5', 'Capability layers'],
  ['4', 'Outreach channels'],
  ['10', 'Week MVP build plan'],
];

const CONTENTS: [string, string, string, string][] = [
  ['01', 'What We Built', 'Problem, principle and delivered capability layers', '03'],
  ['02', 'Core Architecture', 'Six-tier platform, eleven agents, data tier and stack', '05'],
  ['03', 'Credit System and Monetisation', 'Economic mechanics in the MVP and the billing path', '08'],
  ['04', 'User-Facing Features', 'Role-based workspaces, lifecycle and product screens', '10'],
  ['05', 'Security and Auditability', 'Controls, approval enforcement and audit trail', '20'],
  ['06', 'What Makes This Different', 'Six design decisions that set the platform apart', '23'],
  ['07', 'Outcomes from the System', 'Intended outcomes mapped to the mechanisms behind them', '25'],
];

const PROBLEMS: Row[] = [
  ['Fragmented creator data', 'A database of 1,500+ influencers lived in CSV files and Google Sheets, with no semantic matching between a client brief and creator fit.'],
  ['Manual outreach', 'Outreach and follow-up ran by hand across WhatsApp, Email, Telegram and Instagram DM, with no unified workspace and no consistency.'],
  ['Scattered client review', 'Client content approval was spread across email threads instead of one frictionless approve and comment surface.'],
  ['Hand-built finance', 'Payouts, invoicing and post-campaign reporting were assembled manually at month end rather than generated from pipeline data.'],
];

const FEATURES: Row[] = [
  ['Campaign lifecycle visualisation', 'Lead, Proposal, Campaign Setup, Influencer Discovery, Outreach, Content Review, Campaign Live and Analytics surfaced as a single pipeline.'],
  ['AI influencer discovery with reasoning', 'Ranked shortlists from grounded, data-backed matching. Approve or reject one by one with visible reasoning, and slots regenerate automatically.'],
  ['Multi-channel outreach workspace', 'Personalised drafts across WhatsApp, Email, Telegram and Instagram DM, with per-creator conversation views and a manual composer for human takeover.'],
  ['Human-in-the-loop approval queue', 'Approve, edit, reject or rewrite agent messages before send. Follow-ups fire at 24 hours then 48 hours, up to three attempts.'],
  ['Seamless client review', 'Internal campaign manager vetting first, then one-click client approval or feedback via magic link, with the team notified on every client action.'],
  ['Automated post-campaign insight collection', 'A Typeform link sent to creators three days after posting feeds the analytics agent with matured metrics.'],
];

const AUDIT: Row[] = [
  ['Human-approval enforcement', 'All outbound communication routes through an approval queue by default. Approvals, edits, overrides and final sends are fully logged for traceability.'],
  ['Agent memory and execution traces', 'A dedicated layer retains agent decisions, recommendation history, approval events and execution traces. It is the transparency backbone of the system.'],
  ['Deterministic operational oversight', 'The Operations Monitor performs threshold-based checks without an LLM, giving management a reliable live view of bottlenecks that does not depend on model behaviour.'],
];

const DIFFERENTIATORS: Row[] = [
  ['Agency OS, not a chatbot', 'It automates an entire operating model, lead to payout, inside one platform that both the agency and its clients work in, rather than adding an assistant beside existing tools.'],
  ['Human-in-the-loop by design', 'Agents draft and recommend; people approve every external or financial action. Approval can be relaxed once the team trusts the agents, and that trust is earned through logged behaviour.'],
  ['Grounded discovery, not open generation', 'Recommendations are constrained to stored creator records and embeddings, with reasoning exposed. A deliberate hallucination-reduction stance where bad matches cost real money.'],
  ['Semantic brief-to-creator matching', 'A campaign-brief embedding is stored beside each creator-profile embedding, so matching reflects what a creator actually delivers rather than keyword tags such as beauty or fitness.'],
  ['Deterministic where determinism matters', 'Operational threshold checks run as a deterministic service, reserving AI for genuinely generative or judgement-based tasks.'],
  ['Frictionless client approval', 'A single magic-link to-do surface with one-click approve and feedback removes the slowest step in most campaigns: getting the client to say yes.'],
];

export default function SocialJetCaseStudy(_props: SocialJetCaseStudyProps) {
  return (
    <div className={styles.socialJetPage}>
      {/* ── 01 Cover ── */}
      <section className={`${styles.pageSheet} ${styles.cover}`}>
        <div className={styles.coverTopRow}>
          <div className={styles.coverBrand}>
            PG-AGI <span>×</span> <em>SocialJet</em>
          </div>
          <div className={styles.coverPill}>ENTERPRISE CASE STUDY</div>
        </div>

        <div className={styles.coverEyebrow}>APPLIED AI &amp; PLATFORM ENGINEERING</div>
        <h1 className={styles.coverTitle}>SocialJet</h1>
        <p className={styles.coverSubtitle}>An AI-powered operating system for influencer marketing</p>
        <p className={styles.coverLead}>
          A multi-agent platform that runs the full workflow of an influencer marketing agency, from lead capture and
          proposals through creator discovery, outreach, content review, payouts and post-campaign analytics, with a
          human approval gate on every external and financial action.
        </p>

        <div className={styles.coverShot}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/Fig01_Campaigns_Overview.png`} alt="SocialJet Campaigns Overview dashboard" />
        </div>

        <div className={styles.coverStats}>
          {STATS.map(([v, l]) => (
            <div key={l} className={styles.coverStat}>
              <strong>{v}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>

        <div className={styles.coverFoot}>
          <span>Prepared by PG-AGI · Bengaluru, India</span>
          <span>pgagi.in</span>
        </div>
      </section>

      {/* ── 02 Contents ── */}
      <Page page="02">
        <div className={styles.eyebrow}>CONTENTS</div>
        <h2 className={styles.contentsTitle}>Inside this case study</h2>
        <ol className={styles.contentsList}>
          {CONTENTS.map(([n, t, d, p]) => (
            <li key={n}>
              <span className={styles.contentsNum}>{n}</span>
              <div>
                <strong>{t}</strong>
                <span>{d}</span>
              </div>
              <span className={styles.contentsPage}>{p}</span>
            </li>
          ))}
        </ol>

        <div className={styles.eyebrow} style={{ marginTop: 40 }}>PLATFORM AT A GLANCE</div>
        <DataTable
          head={['Attribute', 'Detail']}
          rows={[
            ['Client', 'SocialJet, influencer marketing agency'],
            ['Platform type', 'AI-Powered Influencer Marketing Operating System'],
            ['Architecture', 'Multi-agent AI, LangGraph orchestration, human-in-the-loop controls'],
            ['Agent families', 'Sales, Campaign Operations, Finance and Analytics'],
            ['Core stack', 'React, FastAPI, LangGraph, Claude Opus 5.5, Neon PostgreSQL, pgvector, Redis, Cloudflare R2'],
            ['Users served', 'Executives, Sales, Campaign Managers, Finance and agency clients'],
            ['MVP timeline', '10-week build plan'],
            ['Delivered by', 'PG-AGI, Applied AI and Platform Engineering'],
          ]}
        />
      </Page>

      {/* ── 03 What We Built ── */}
      <Page page="03">
        <SectionHeader num="01" title="What We Built" sub="An agency operating system, not a chatbot bolted onto existing tools." />
        <p className={styles.para}>
          SocialJet is an AI-powered operating system that automates the end-to-end workflow of an influencer marketing
          agency. It spans lead capture, proposal generation, influencer discovery, outreach, campaign tracking, payouts
          and post-campaign analytics inside a single platform.
        </p>
        <p className={styles.para}>
          It is conceived as a multi-agent platform: specialised AI agents orchestrated by LangGraph, served by a FastAPI
          backend and operated through a React dashboard, with people retained at every critical decision point.
        </p>
        <Callout label="Defining principle: human-in-the-loop by default">
          Agents recommend, draft, rank and monitor. Every externally visible or financially sensitive action, including
          outreach sends, negotiation replies, shortlist approvals, content approvals and payouts, is gated behind a human
          approval queue.
        </Callout>

        <SubHeading>The problem it solves</SubHeading>
        <p className={styles.para}>
          SocialJet addresses four compounding operational problems that fragmented the agency&apos;s workflow.
        </p>
        <div className={styles.cardGrid}>
          {PROBLEMS.map(([t, d], i) => (
            <div key={t} className={styles.numCard}>
              <span className={styles.numCardNum}>{String(i + 1).padStart(2, '0')}</span>
              <strong>{t}</strong>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </Page>

      {/* ── 04 What was delivered ── */}
      <Page page="04">
        <SubHeading>What was delivered</SubHeading>
        <p className={styles.para}>The 10-week MVP delivered five capability layers covering the full agency workflow.</p>
        <DataTable
          head={['Layer', 'Delivered capability']}
          rows={[
            ['Operational Dashboard', 'React workspace for leads, campaigns, shortlists, outreach, content review, analytics and per-user to-do queues.'],
            ['Client Portal', 'Magic-link, campaign-scoped portal for shortlist approval and content review with single-action approve and feedback controls.'],
            ['AI Agent Layer', 'Eleven specialised agents across Sales, Campaign Operations, and Finance and Analytics, plus a deterministic Operations Monitor.'],
            ['Discovery Engine', 'pgvector semantic matching of campaign-brief embeddings to creator-profile embeddings, covering Instagram and TikTok for the MVP.'],
            ['Approval and Audit Fabric', 'Human approval queues with full logging of edits, overrides and sends.'],
          ]}
        />
        <Figure
          src="Fig01_Campaigns_Overview.png"
          alt="Campaigns Overview"
          num={1}
          caption="Campaigns Overview, the Campaign Manager home view. Active campaigns, overdue items, reviews due and pending content sit beside the outreach funnel, an AI Discovery Shortlist and AI-optimised message drafts that wait for a send decision."
        />
      </Page>

      {/* ── 05 Core Architecture ── */}
      <Page page="05">
        <SectionHeader num="02" title="Core Architecture" sub="A layered, modular platform where each tier scales independently." />
        <p className={styles.para}>
          SocialJet separates the user interface, the backend workflow engine, the agent orchestration layer, the
          role-based access layer and the data storage systems. Each layer scales on its own, which keeps the platform
          maintainable and open to new workflow modules, channels and analytics.
        </p>
        <Figure
          frame={false}
          src="Fig02_Platform_Architecture.png"
          alt="SocialJet layered platform architecture"
          num={2}
          caption="Layered platform architecture. LangGraph orchestrates eleven specialist agents across three families. Every outbound or financially sensitive action passes through the human approval fabric before it reaches an external channel."
        />
      </Page>

      {/* ── 06 Layers, agents, data tier ── */}
      <Page page="06">
        <SubHeading>Presentation layer</SubHeading>
        <p className={styles.para}>
          A role-aware React dashboard serves internal teams, and a restricted magic-link client portal is scoped to a
          single client&apos;s campaigns. Reply notifications, draft alerts and approval status reach users in real time
          over WebSockets and Server-Sent Events.
        </p>
        <SubHeading>Backend and workflow engine</SubHeading>
        <p className={styles.para}>
          FastAPI is the central API gateway. It owns campaign lifecycle state, approval queues, campaign-to-manager
          assignment, personalised task generation, audit logging and integrations. Event triggers such as new lead,
          proposal approved, campaign created, creator replied and campaign completed activate the relevant agent.
        </p>
        <SubHeading>Agent orchestration: eleven specialised agents</SubHeading>
        <DataTable
          head={['Agent family', 'Agents']}
          rows={[
            ['Sales Agents', 'Lead Capture · Nurture · Sales Intelligence'],
            ['Campaign Ops Agents', 'Onboarding · Influencer Discovery · Outreach and Negotiation · Content Tracker · Review Coordinator'],
            ['Finance and Analytics Agents', 'Invoice Tracking · Influencer Payment · Post-Campaign Analytics'],
            ['Operations Monitor', 'Deterministic service with no LLM. Threshold-based checks for stalls, overdue items and unpaid invoices.'],
          ]}
        />
        <SubHeading>Data tier</SubHeading>
        <DataTable
          head={['Store', 'Purpose']}
          rows={[
            ['Neon PostgreSQL', 'Core operational data: campaigns, leads, users and progress.'],
            ['pgvector', 'Brief and creator embeddings for semantic discovery.'],
            ['Agent Memory and Logs', 'Decisions, audit traces and approval history.'],
            ['Cloudflare R2', 'Assets, media and generated reports.'],
          ]}
        />
      </Page>

      {/* ── 07 Tech stack + onboarding agent ── */}
      <Page page="07">
        <SubHeading>Technology stack</SubHeading>
        <DataTable
          labelWidth="28%"
          head={['Concern', 'Technologies']}
          rows={[
            ['Frontend', 'React, TailwindCSS, shadcn/ui, React Query, WebSockets / SSE, JWT sessions'],
            ['Backend', 'FastAPI, LangGraph orchestration hooks, Redis background tasks, JWT auth'],
            ['AI and Matching', 'LangGraph, Anthropic Claude Opus 5.5 for reasoning, decision making and task execution, pgvector similarity search, vector embeddings'],
            ['Data and Storage', 'Neon PostgreSQL, pgvector, Cloudflare R2 object storage'],
            ['Delivery and Ops', 'Docker, GitHub Actions CI/CD, monitoring dashboards and logging'],
          ]}
        />
        <SubHeading>Event-driven agents in practice</SubHeading>
        <div className={styles.split}>
          <div>
            <p className={styles.para}>
              The Onboarding Agent view shows the event chain the backend drives once a campaign is confirmed. A finance
              notification is drafted for the invoice, the onboarding call agenda is generated, the call summary is
              captured and checked against the sales call notes, and the campaign content plan is assembled.
            </p>
            <p className={styles.para}>
              The status rail at the foot of the screen tracks each step: invoice sent to finance, call agenda drafted,
              onboarding call completed and content plan ready. Proposals with negative sentiment, such as a budget
              objection or a technical gap, are pulled into a separate Flagged for Review queue rather than advancing on
              their own.
            </p>
          </div>
          <Figure
            src="Fig03_Onboarding_Agent_Detail.png"
            alt="Onboarding Agent campaign detail"
            num={3}
            caption="Onboarding Agent, campaign detail. Finance notification, agenda, content plan, call summary and flagged items in one view."
          />
        </div>
      </Page>

      {/* ── 08 Credit System ── */}
      <Page page="08">
        <SectionHeader
          num="03"
          title="Credit System and Monetisation"
          sub="Cost controls built for day one, with clean interfaces for a future billing layer."
        />
        <p className={styles.para}>
          The architecture includes several economic mechanics that form the foundation of a future monetisation layer. A
          metered credit or licensing model was not part of the MVP scope. The mechanics below are the primitives that
          layer would be built on.
        </p>
        <SubHeading>Economic mechanics present in the MVP</SubHeading>
        <DataTable
          head={['Mechanic', 'How it works']}
          rows={[
            ['Per-campaign budget caps', 'Every campaign carries a pre-defined budget, enforced when proposing and confirming creators.'],
            ['Internal creator rate cards', 'Historical fees and internal rates per creator and tier (micro, mid and macro) are stored in the influencer database for budgeting and negotiation.'],
            ['Controlled outreach economics', 'The agent never reaches out beyond the required count, with an optional 20% over-outreach buffer to absorb typical sub-100% acceptance rates.'],
          ]}
        />
        <Figure
          src="Fig04_Influencer_Discovery_Queue.png"
          alt="Influencer Discovery queue"
          num={4}
          caption="Influencer Discovery queue. Each campaign shows its creator slot count and discovery batch, which is how the platform holds outreach to the number of creators the campaign actually needs."
        />
      </Page>

      {/* ── 09 Monetisation layer ── */}
      <Page page="09">
        <SubHeading>What a full credit and monetisation layer would require</SubHeading>
        <p className={styles.para}>
          The platform is structured so billing can be added without re-architecture. Five components would complete it.
        </p>
        <DataTable
          head={['Requirement', 'Description']}
          rows={[
            ['Unit of account', 'A campaign credit, discovery credit or seat-based licence, and its conversion to currency.'],
            ['Metering hooks', 'Hooks in the FastAPI layer to count billable events such as discoveries run, outreach sends and reports generated.'],
            ['Wallet / ledger model', 'Balances, top-ups and a billing audit trail, layered onto the existing agent memory and logs tier.'],
            ['Plan tiers', 'Entitlements wired into the existing RBAC layer for plan-based access control.'],
            ['Payment gateway', 'Deliberately excluded from the MVP and required for full billing automation.'],
          ]}
        />
        <Callout label="Why this sequencing">
          Budget caps, rate cards and outreach ceilings are cost-control mechanics the agency needs on day one. Credits,
          wallets and gateways are revenue mechanics that only matter once the platform is sold as a product rather than
          operated in-house. The MVP built the former and left clean interfaces for the latter.
        </Callout>
        <Figure
          src="Fig05_Finance_Overview.png"
          alt="Finance Overview"
          num={5}
          caption="Finance Overview. Invoiced, collected, pending and paid-out totals, revenue against collection, payouts by campaign, role-specific views for finance, campaign managers and leadership, and critical alerts such as a campaign approaching its budget."
        />
      </Page>

      {/* ── 10 User-Facing Features ── */}
      <Page page="10">
        <SectionHeader
          num="04"
          title="User-Facing Features"
          sub="One platform the whole agency and its clients work inside, scoped by role."
        />
        <SubHeading>Features by role</SubHeading>
        <DataTable
          head={['User', 'What they do in SocialJet']}
          rows={[
            ['Executives', 'Full visibility across the platform, including the Operations Monitor view of stalled campaigns, overdue items and high-priority actions.'],
            ['Sales (x2)', 'Lead capture and management, proposal review, AI-drafted call summaries and proposals.'],
            ['Campaign Managers (x9)', 'Influencer discovery, one-by-one shortlist approval, multi-channel outreach, content tracking and review coordination, scoped to assigned campaigns.'],
            ['Finance (x1)', 'Finance dashboard to enter invoice values, track invoiced against pending, update payment status and manage payout records.'],
            ['Clients', 'Magic-link portal to review shortlists, approve or reject content drafts and track progress, restricted to their own campaigns.'],
          ]}
        />
        <SubHeading>Key feature set</SubHeading>
        <div className={styles.cardGrid}>
          {FEATURES.map(([t, d], i) => (
            <div key={t} className={`${styles.numCard} ${styles.numCardInline}`}>
              <span className={styles.numCardNum}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            </div>
          ))}
          <div className={`${styles.numCard} ${styles.numCardInline} ${styles.numCardWide}`}>
            <span className={styles.numCardNum}>07</span>
            <div>
              <strong>Personalised to-do dashboards</strong>
              <p>Every user sees their own pending approvals, follow-ups, reviews and escalations in one place.</p>
            </div>
          </div>
        </div>
      </Page>

      {/* ── 11 Lifecycle ── */}
      <Page page="11">
        <SubHeading>Campaign lifecycle: lead to payout</SubHeading>
        <p className={styles.para}>
          Every stage of a campaign pairs an agent action with an explicit human gate. The lifecycle is grouped into four
          operating phases, and nothing advances on agent authority alone.
        </p>
        <Figure
          frame={false}
          src="Fig06_Campaign_Lifecycle.png"
          alt="Campaign lifecycle from lead to payout"
          num={6}
          caption="Campaign lifecycle from lead to payout across the Acquire, Plan, Execute and Close phases."
        />
      </Page>

      {/* ── 12 Sales workspace ── */}
      <Page page="12">
        <WorkspaceBar name="Sales" agents="Lead Capture · Nurture · Sales Intelligence" />
        <p className={styles.para}>
          The sales workspace is where demand enters the platform. The Lead Capture view consolidates inbound leads from
          WhatsApp, web forms, Calendly and direct contact, raises new-lead alerts with a Fast Track action, and tracks
          each lead through capture, contact, qualification and conversion alongside its deal value and status.
        </p>
        <Figure
          src="Fig07_Leads_Pipeline.png"
          alt="Leads Pipeline"
          num={7}
          caption="Leads Pipeline. New lead alerts, lead totals by source, the conversion funnel and an all-leads table with status and deal value."
        />
      </Page>

      {/* ── 13 Nurture ── */}
      <Page page="13">
        <SubHeading>Nurture Agent</SubHeading>
        <p className={styles.para}>
          Once a lead is qualified, the Nurture Agent runs a follow-up sequence on the lead&apos;s channel. The sales
          executive sees intent tags, the assigned owner and source, touch and message counts, and the full AI and human
          conversation log. The sequence can be paused and resumed, and the lead marked converted or dead, so the agent
          never acts beyond what the salesperson allows.
        </p>
        <Figure
          src="Fig08_Nurture_Agent.png"
          alt="Nurture Agent lead detail"
          num={8}
          caption="Nurture Agent, lead detail. Intent tags, sequence status with resume control, conversion and dead-lead actions, and the full conversation log between the agent and the prospect."
        />
      </Page>

      {/* ── 14 Campaign Manager workspace ── */}
      <Page page="14">
        <WorkspaceBar name="Campaign Manager" agents="Onboarding · Discovery · Outreach · Content Tracker · Review" />
        <p className={styles.para}>
          Campaign managers work only on the campaigns assigned to them. The Onboarding Agent tracks every new campaign
          through the four onboarding checkpoints: invoice, agenda, onboarding call and content plan. Anything still
          pending is visible at a glance before the campaign moves into discovery.
        </p>
        <Figure
          src="Fig09_Onboarding_Agent_Queue.png"
          alt="Onboarding Agent queue"
          num={9}
          caption="Onboarding Agent queue. Each campaign shows the state of its invoice, agenda, onboarding call and content plan."
        />
        <SubHeading>Grounded creator discovery</SubHeading>
        <p className={styles.para}>
          Discovery ranks creators from stored records and embeddings for the campaign brief. The campaign manager
          approves or rejects each recommendation one by one, with the reasoning for every pick shown on the card, and
          open slots regenerate automatically.
        </p>
      </Page>

      {/* ── 15 Discovery detail ── */}
      <Page page="15">
        <Figure
          src="Fig10_Influencer_Discovery_Detail.png"
          alt="Influencer Discovery campaign detail"
          num={10}
          caption="Influencer Discovery, campaign detail. AI selection criteria, a creator table with platform, followers, engagement and authenticity scores, and ranked recommendations that each explain why the creator was picked."
        />
      </Page>

      {/* ── 16 Outreach ── */}
      <Page page="16">
        <SubHeading>Multi-channel outreach with approval</SubHeading>
        <p className={styles.para}>
          Outreach runs from a single workspace across WhatsApp, Instagram DM, Telegram and Email. The agent prepares a
          draft for each creator and flags it as AI Draft Ready. The campaign manager approves, edits or rewrites it before
          anything is sent, and can take over the conversation manually at any point. Confirmed, awaiting reply and
          negotiating counts sit at the top of the view.
        </p>
        <Figure
          src="Fig11_Outreach_Workspace.png"
          alt="Outreach workspace"
          num={11}
          caption="Outreach workspace. Creator inbox with status labels, channel switcher and the conversation thread where agent drafts wait for approval."
        />
      </Page>

      {/* ── 17 Content tracking + Finance workspace ── */}
      <Page page="17">
        <SubHeading>Content tracking</SubHeading>
        <p className={styles.para}>
          The Content Tracker monitors submission deadlines for every live campaign: content submitted, pending and
          overdue, the campaign status and the creator fee. Overdue items feed the Operations Monitor, which escalates
          stalls to management.
        </p>
        <Figure
          src="Fig12_Content_Tracker.png"
          alt="Content Tracker"
          num={12}
          caption="Content Tracker. Submitted, pending and overdue content per campaign with status and price."
        />
        <WorkspaceBar
          name="Finance and Analytics"
          agents="Invoice Tracking · Influencer Payment · Post-Campaign Analytics"
        />
        <p className={styles.para}>
          When a campaign finishes, the analytics workspace drives the wrap-up: finance status, the creator payout sheet,
          compiled analytics, the post-campaign deck and suggested upsell opportunities.
        </p>
      </Page>

      {/* ── 18 Analytics queue + Client portal ── */}
      <Page page="18">
        <Figure
          src="Fig13_Analytics_Wrapup_Queue.png"
          alt="Analytics wrap-up queue"
          num={13}
          caption="Analytics wrap-up queue. Each completed campaign shows the state of finance, payout sheet, analytics, deck and upsell."
        />
        <WorkspaceBar name="Client Portal" agents="My Campaign · Shortlist Review · Content Review" />
        <p className={styles.para}>
          Clients sign in through a magic link and see only their own campaigns, with progress tracked from onboarding to
          live.
        </p>
        <Figure
          src="Fig14_Client_Portal_My_Campaign.png"
          alt="Client Portal My Campaign"
          num={14}
          caption="Client Portal, My Campaign. Confirmed creators, pending content, go-live date, approved content, the progress rail and recent updates."
        />
      </Page>

      {/* ── 19 Client content review ── */}
      <Page page="19">
        <SubHeading>Client content review</SubHeading>
        <p className={styles.para}>
          Content reaches the client only after the campaign manager has vetted it internally. The client then approves or
          passes on each submission in a single action, with the creator profile and selection reasoning in view. Every
          client action notifies the agency team, which removes the email back-and-forth that usually slows this stage.
        </p>
        <Figure
          src="Fig15_Client_Content_Review.png"
          alt="Client Portal Content Review"
          num={15}
          caption="Client Portal, Content Review. Single-action Approve and Pass controls on each submission, shown with the creator profile and selection reasoning."
        />
      </Page>

      {/* ── 20 Security ── */}
      <Page page="20">
        <SectionHeader
          num="05"
          title="Security and Auditability"
          sub="Least privilege by role, and a log of every agent recommendation and human decision."
        />
        <SubHeading>Security controls</SubHeading>
        <DataTable
          head={['Control', 'Design intent']}
          rows={[
            ['Transport and storage encryption', 'TLS in transit and encrypted storage for sensitive campaign data.'],
            ['Role-based access control', 'Enforced in the FastAPI layer. Clients are hard-scoped to their own campaigns with no visibility into internal data.'],
            ['Authentication', 'JWT session management for internal users; magic-link login for clients.'],
            ['Secret management', 'Secrets held in a secret manager. Hardcoded secrets removed, environment variables used and credentials rotated before handover.'],
            ['Least-privilege handover', 'Admin repository access to the client, contributor roles on a least-privilege model, and secure private repository delivery.'],
          ]}
        />
        <SubHeading>Auditability</SubHeading>
        <div className={styles.stackList}>
          {AUDIT.map(([t, d], i) => (
            <div key={t} className={`${styles.numCard} ${styles.numCardInline}`}>
              <span className={styles.numCardNum}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Page>

      {/* ── 21 Sales Intelligence ── */}
      <Page page="21">
        <SubHeading>Approval gates on generated proposals</SubHeading>
        <p className={styles.para}>
          The Sales Intelligence Agent reads call transcripts, extracts the key data and drafts a proposal, but nothing goes
          to the client until a named reviewer signs off. Calls that show risk, such as cancellation intent, are blocked and
          no proposal is generated. Processed calls, flagged calls and items awaiting review are all counted and listed.
        </p>
        <Figure
          src="Fig16_Sales_Intelligence_Agent.png"
          alt="Sales Intelligence Agent"
          num={16}
          caption="Sales Intelligence Agent. Calls processed, proposals generated, flagged or blocked calls and items awaiting review, with flagged calls held apart from processed ones."
        />
        <Callout label="Audit as the path to autonomy">
          The logging layer is not only a compliance artefact. It is the evidence base that decides when approval
          requirements can safely be relaxed for a given agent and action type. Trust is earned through logged behaviour
          rather than assumed at deployment.
        </Callout>
      </Page>

      {/* ── 22 Account settings ── */}
      <Page page="22">
        <SubHeading>Account, team access and protection</SubHeading>
        <div className={styles.split}>
          <div>
            <p className={styles.para}>
              Account settings bring access control into the product itself. Administrators invite members, assign Admin
              or Editor roles, see when each member was last active and remove access in one action.
            </p>
            <p className={styles.para}>
              The Security panel handles password changes with a strength check and a two-factor authentication toggle.
              Notification preferences let each account choose alerts for campaign updates, weekly reports, approval
              requests and security events such as new device logins.
            </p>
            <p className={styles.para}>
              Billing identity and company details sit in the same view, so the information that drives invoicing is
              maintained by the account that owns it.
            </p>
          </div>
          <Figure
            src="Fig17_Account_Settings.png"
            alt="Account settings"
            num={17}
            caption="Account settings. Team access with roles and status, personal information, password and 2FA, company details and notification preferences."
          />
        </div>
      </Page>

      {/* ── 23 Different ── */}
      <Page page="23">
        <SectionHeader
          num="06"
          title="What Makes This Different"
          sub="Six design decisions that separate SocialJet from general AI assistants and conventional tooling."
        />
        <div className={styles.diffGrid}>
          {DIFFERENTIATORS.map(([t, d], i) => (
            <div key={t} className={styles.diffCard}>
              <span className={styles.diffBadge}>{String(i + 1).padStart(2, '0')}</span>
              <strong>{t}</strong>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </Page>

      {/* ── 24 Shortlist review ── */}
      <Page page="24">
        <SubHeading>Decision 03 and 06 in the product</SubHeading>
        <p className={styles.para}>
          Grounded discovery is visible to the client as well as the agency. In Shortlist Review, every creator card carries
          the platform, follower count, engagement rate and a plain-language reason for the pick. The client approves or
          passes on each creator, and the agency only reaches out to approved creators.
        </p>
        <Figure
          src="Fig18_Client_Shortlist_Review.png"
          alt="Client Portal Shortlist Review"
          num={18}
          caption="Client Portal, Shortlist Review. Shortlist, approved, pending and reviewed counts above creator cards with the selection reasoning and Approve or Pass controls."
        />
      </Page>

      {/* ── 25 Outcomes ── */}
      <Page page="25">
        <SectionHeader
          num="07"
          title="Outcomes from the System"
          sub="Each intended outcome mapped to the mechanism that produces it."
        />
        <p className={styles.para}>
          The outcomes below are the operational results the architecture is designed to produce. Quantitative performance
          is measured post-launch against the platform&apos;s own analytics pipeline.
        </p>
        <DataTable
          head={['Intended outcome', 'Enabled by']}
          rows={[
            ['Faster campaign throughput', 'Consolidating discovery, outreach, review and reporting in one platform lets the team run more campaigns without proportional headcount growth.'],
            ['Higher-quality matching', 'Embedding-based discovery improves creator-to-brief fit and reduces rejection rates, tightening the over-outreach buffer over time.'],
            ['Shorter approval cycles', 'One-click magic-link client approvals cut the largest single source of campaign delay.'],
            ['Reliable operational oversight', 'The deterministic Operations Monitor surfaces stalls, overdue submissions and unpaid invoices before they become failures.'],
            ['Auditable autonomy', 'Full logging of every agent recommendation and human action builds the evidence base to safely expand agent autonomy.'],
            ['Cleaner post-campaign reporting', 'Automated Typeform collection three days after posting, plus the analytics agent, replaces manual month-end assembly with structured, decision-ready reports.'],
          ]}
        />
        <Callout label="SocialJet is an AI operating system for influencer marketing">
          Not a tool and not a chatbot, but a complete agency workflow engine that automates the routine, augments the
          expert and keeps people in control of what matters.
        </Callout>
      </Page>

      {/* ── 26 Campaign close ── */}
      <Page page="26">
        <SubHeading>From campaign close to the next sale</SubHeading>
        <div className={styles.split}>
          <div>
            <p className={styles.para}>
              The post-campaign view shows the reporting outcome in practice. Campaign-level lead, analytics, paid and
              unpaid counts sit above a finance notification drafted for the remaining invoice and a creator payout sheet
              with bank details masked.
            </p>
            <p className={styles.para}>
              Creator performance is charted side by side. The agent drafts the post-campaign deck and identifies upsell
              opportunities from what the client said during the review call.
            </p>
            <p className={styles.para}>
              A Handoff Package bundles the deck, analytics report, upsell brief and payout confirmation, and one action
              hands it to the salesperson for the client review call. The close of one campaign becomes the start of the
              next sales conversation.
            </p>
          </div>
          <Figure
            src="Fig19_Post_Campaign_Analytics.png"
            alt="Post-campaign analytics"
            num={19}
            caption="Post-campaign analytics. Finance notification, creator payout sheet, campaign analytics, deck draft, upsell opportunities and the sales handoff package."
          />
        </div>
      </Page>
    </div>
  );
}
