'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from '@/styles/components/organisms/MetaAdsCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface MetaAdsCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'origin', label: 'Project Origin' },
  { id: 'build-phases', label: 'Build Phases' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'from-the-product', label: 'From The Product' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'qa-reliability', label: 'QA & Reliability' },
  { id: 'components-delivered', label: 'Components Delivered' },
  { id: 'current-state-risks', label: 'Current State & Risks' },
  { id: 'outcome', label: 'Project Outcome' },
];

const BUILD_PHASES: { phase: string; shipped: string }[] = [
  { phase: 'Milestone 1', shipped: 'Core pipeline: runs, variants, 5-agent writer chain, hybrid Postgres + filesystem storage, JWT auth, basic roles.' },
  { phase: 'Model curation', shipped: 'Replaced the open-ended model picker with a client-curated, tier-colour-coded, test-verified 16-model catalogue.' },
  { phase: 'Launch Packages + Image Studio (Mode 1)', shipped: 'Approved-script list → competitor-image analysis → prompt enhancement → OpenRouter image generation → Assets Outbox auto-feed.' },
  { phase: 'Production hardening', shipped: 'GCS-backed image storage, Notion integration, RBAC expanded to 4 roles, cost split by category.' },
  { phase: 'Metadata & naming-convention system', shipped: 'Brief-only extraction of filename/URL metadata at run setup, editable Script IDs, deterministic filename assembly.' },
  { phase: 'Script-centric reorg', shipped: 'App reorganized around the script as the unit of work: Compare Scripts diff tool, script-level Product URL, live Notion schema migration, editable Run ID.' },
  { phase: 'Reliability pass', shipped: 'Root-caused and fixed a silent script-truncation bug, a CORS-on-error infra bug, and several race-condition / re-assembly data-loss bugs.' },
  { phase: 'Image Studio Modes 2 & 3', shipped: 'Manual Scene Builder and script-driven batch image generation with categories, versioning, and image-editing.' },
  { phase: 'QA hardening batch', shipped: 'Run ID validation, preset bugs, atomicity fixes, layout overflow fixes, version-history visibility fixes.' },
];

const ARCHITECTURE_LAYERS: { layer: string; responsibility: string; tech: string }[] = [
  { layer: 'Run Creation', responsibility: 'Guided wizard captures Run Setup, Inputs, Variations, and Review & Submit; freezes six input fields into an immutable snapshot.', tech: 'React / Vite wizard' },
  { layer: 'AI Pipeline', responsibility: 'Fans each variant through a 5-stage agent chain, one OpenRouter LLM call per stage, with retry/regenerate.', tech: 'FastAPI, OpenRouter' },
  { layer: 'Review & Versioning', responsibility: 'Text-selection rewrite comments, independent version history, and a hand-rolled Compare Scripts diff engine.', tech: 'React, custom diff engine' },
  { layer: 'Metadata & Naming', responsibility: 'Single structured-output call extracts filename/URL metadata; lookup tables resolve deterministic filenames.', tech: 'FastAPI, Postgres' },
  { layer: 'Launch & Assets', responsibility: 'Approved-script list, Assets Outbox auto-population, and image-generation lock rules.', tech: 'React, FastAPI' },
  { layer: 'Image Studio', responsibility: 'Three generation modes sharing one master prompt template, with versioned, editable images.', tech: 'OpenRouter image models' },
  { layer: 'Integrations', responsibility: 'Per-script Notion pages via the 3-step File Upload API; GCS-backed image storage.', tech: 'Notion API, Google Cloud Storage' },
  { layer: 'Platform', responsibility: 'JWT auth, 4-role permission matrix, dark/light mode, toast notifications.', tech: 'JWT, bcrypt, React' },
];

const PIPELINE_STAGES: { title: string; desc: string }[] = [
  { title: 'Writer', desc: 'Produces the first draft under one of three modes — Adapt (competitor-aware adaptation), Iterate (minimal-diff edit of an approved Control), or Rewrite (rebuilt around the core problem/solution).' },
  { title: 'Copy Chief', desc: 'Strengthens persuasion, structure, and flow while preserving the core message.' },
  { title: 'Auditor', desc: 'Runs an independent quality pass, flagging weaknesses ahead of reconciliation.' },
  { title: 'Reconciler', desc: "Resolves conflicts between the Writer's output and the Auditor's findings into one clean set of recommendations." },
  { title: 'Revision Writer', desc: 'Applies the reconciled recommendations and produces the final version that enters the human review queue.' },
];

const DEPLOYMENT_ROWS: { area: string; detail: string }[] = [
  { area: 'Backend', detail: 'FastAPI + Gunicorn/Uvicorn workers, Dockerized, deployed to Google Cloud Run (min-instances 0) via a GitHub Actions workflow using Workload Identity Federation — no long-lived service-account keys.' },
  { area: 'Frontend', detail: 'Vite static build served via Nginx or any static host; the production build takes the API URL at build time.' },
  { area: 'Database', detail: "Postgres via Neon, migrated with Alembic; an idempotent seed script for default users/prompts/settings, and a separate script to rotate existing users' passwords without duplicating rows." },
  { area: 'Runbook', detail: 'A full deployment runbook exists for DevOps: environment setup, systemd units, Docker Compose, and a troubleshooting checklist.' },
];

const COMPONENTS_DELIVERED: { area: string; detail: string }[] = [
  { area: 'Authentication & Roles', detail: 'JWT auth (bcrypt), 4-role permission matrix (Owner/Admin/User/Viewer), Team management page.' },
  { area: 'Run Creation', detail: 'Guided wizard, immutable run snapshots, input presets, 16-model curated catalogue.' },
  { area: 'AI Pipeline', detail: '5-stage agent chain (Writer, Copy Chief, Auditor, Reconciler, Revision Writer), retry/regenerate, token-budget & reasoning-token fixes.' },
  { area: 'Review & Versioning', detail: 'Text-selection rewrite comments, full independent version history, Compare Scripts diff engine.' },
  { area: 'Metadata & Naming', detail: 'Single-call structured extraction, deterministic filename assembly, editable lookup tables.' },
  { area: 'Launch & Assets', detail: 'Launch Packages, Assets Outbox with auto-population and lock rules.' },
  { area: 'Image Studio', detail: '3 generation modes (Competitor Image, Scene Builder, Script-Driven Batch), versioned images, image editing.' },
  { area: 'Integrations', detail: 'Notion (per-script pages via File Upload API), GCS-backed image storage.' },
  { area: 'Configuration', detail: 'Global editable prompts, lookup tables, workspace defaults.' },
  { area: 'Dashboard', detail: 'Live stat cards with separated cost categories.' },
  { area: 'Platform / UX', detail: 'Dark/light mode, toast notifications, auth-gated image loading, shared layout conventions.' },
  { area: 'Infrastructure', detail: 'CORS/middleware fix, atomic commits, race-condition fix, build-tree hardening.' },
  { area: 'Deployment', detail: 'Docker, Google Cloud Run, GitHub Actions CI/CD (Workload Identity Federation), Postgres/Neon + Alembic.' },
];

const PRODUCT_SCREENS: { title: string; desc: string; caption: string }[] = [
  {
    title: 'Run Creation & The Model Catalogue',
    desc: 'The guided wizard — Run Setup → Inputs → Variations → Review & Submit — and the client-curated, tier-coloured 16-model catalogue behind it.',
    caption: 'New Sandbox Test — Run Setup step of the guided wizard, with the 4-step progress rail and per-agent model selection.',
  },
  {
    title: 'The Live Pipeline',
    desc: 'A completed 5-stage run — Writer through Revision Writer — with per-stage model, token count, and cost visible at a glance.',
    caption: 'Live Pipeline view for a Control variant: all five stages completed, each showing model, token usage, and cost.',
  },
  {
    title: 'Human Review, Rewrite & Comments',
    desc: 'Reviewers select any passage, attach a targeted comment, and trigger a rewrite — every rewrite inserts a new version rather than overwriting the last.',
    caption: 'Reviewer workspace: a highlighted passage with an attached rewrite comment, ready to submit against the pipeline output.',
  },
  {
    title: 'RBAC & Team Management',
    desc: 'The Owner-only Team page: add members, assign one of four roles, deactivate accounts, and reactivate them later without losing run history.',
    caption: 'Team page showing active and removed members across the Owner / Admin / User / Viewer role set.',
  },
  {
    title: 'Global Prompts & Settings',
    desc: 'Every agent system prompt — 5 writer-chain agents, 3 writer-mode variants, extraction prompts, and 3 Image Studio prompts — is editable Markdown with Customized/Default badges.',
    caption: 'Global Prompts screen: prompt categories in the sidebar, with the Adapt Writer Agent system prompt open for editing.',
  },
  {
    title: 'Metadata & Naming-Convention System',
    desc: 'A single structured-output call extracts product, condition, mechanism, and per-variation URL/offer/flags at run-setup time; the Script ID is the one operator-editable field in an otherwise read-only panel.',
    caption: 'URL Report: destination URL, offer terms, and resolution flags per variant, assembled from the run-setup extraction.',
  },
  {
    title: 'Image Studio — Script-Driven Batch',
    desc: 'Mode 3 lets a reviewer pick a batch of images, assign each a category, and let an LLM draft one editable scene per image from the approved script before generating.',
    caption: 'Image Studio, Mode 3: scene-generation step with the approved script visible alongside the drafted scene description.',
  },
  {
    title: 'Assets Outbox',
    desc: 'Every completed script and generated image lands here automatically — filterable by run, type, and date range, with multi-select batch push to Notion.',
    caption: 'Assets Outbox: generated images with their source run, variant, and Notion upload status.',
  },
  {
    title: 'Notion Integration',
    desc: "A manual, per-asset “Send to Notion” action appends images to that script's own Notion page as real embedded file blocks via Notion's 3-step File Upload API.",
    caption: "Upload to Notion dialog: adset naming convention, product URL, and status prior to sending images to the script's page.",
  },
  {
    title: 'Dashboard — Logs & Cost',
    desc: 'Cost is tracked per stage, per model, and per variant, and reported as two genuinely separate categories: script production spend and image generation spend.',
    caption: 'Logs & Cost view for a run: total spend, per-stage cost breakdown, and per-model cost breakdown.',
  },
];

export default function MetaAdsCaseStudy(_props: MetaAdsCaseStudyProps) {
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
    <div className={styles.metaAdsPage}>
      {/* ── Hero (page 1) ── */}
      <header className={styles.heroSection}>
        <div className={styles.rail}>
          <div className={styles.heroContent}>
            <div className={styles.runningHeader}>PGAGI Confidential | Unisphere Corp Case Study | August 2026</div>

            <h1 className={styles.heroMainTitle}>Unisphere Corp</h1>
            <h2 className={styles.heroSubtitle}>Automated Campaign Creation and Optimization</h2>

            <p className={styles.heroLead}>
              An internal AI production platform that turns a marketing hypothesis into a campaign-ready
              script and launch-ready creative set — built on a 5-stage AI writing pipeline, human-in-the-loop
              review with full version history, 4-role RBAC, and a 3-mode Image Studio, and shipped end to
              end from proof-of-concept discovery to a production deployment on Google Cloud Run.
            </p>

            <div className={styles.heroPillsGrid}>
              <div className={styles.heroPill}>5-Stage AI Writing Pipeline</div>
              <div className={styles.heroPill}>4-Role RBAC &amp; Team Management</div>
              <div className={styles.heroPill}>3-Mode Image Studio</div>
              <div className={styles.heroPill}>Google Cloud Run Deployment</div>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>Unisphere Corp (formerly PROTUS)</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Category</span>
                <span className={styles.metaValue}>AI Sales Ops · Internal Tooling · GenAI</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Stack</span>
                <span className={styles.metaValue}>FastAPI · React/Vite · Postgres (Neon) · OpenRouter</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Full build · 5-stage AI pipeline · RBAC · Image Studio · Deployment</span>
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
        {/* ── Overview (pages 1–2) ── */}
        <section id="overview" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.redBarLabel}>Overview</span>
            <h2 className={styles.sectionTitle}>From a read-only PoC walkthrough to a production script factory.</h2>
          </div>

          <p className={styles.sectionParagraph}>
            Unisphere Corp (originally scoped and built under the working name PROTUS) is an internal AI
            production platform that takes a marketing hypothesis through a 5-stage AI writing pipeline, a
            human review and rewrite workflow with full version history, an approval gate, and on into a
            3-mode Image Studio for campaign creative — with an optional Notion handoff and cost tracked
            separately for script production and image generation throughout.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>5</span>
              <span className={styles.statLabel}>AI agent stages per script — Writer, Copy Chief, Auditor, Reconciler, Revision Writer</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>4</span>
              <span className={styles.statLabel}>RBAC roles with a dedicated Team management page</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>16</span>
              <span className={styles.statLabel}>Client-curated, test-verified models in the writer catalogue</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Image Studio generation modes, each with versioning</span>
            </div>
          </div>

          <div className={styles.checklistBox}>
            <h4 className={styles.checklistBoxTitle}>What The Platform Had To Do</h4>
            <ul className={styles.checklist}>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Freeze inputs:</strong> every run&apos;s brief, competitor script, control breakdown, and avatar research locked into an immutable snapshot at creation.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Pipeline the writing:</strong> fan each run out across script variants and push every one through the same 5-stage chain.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Keep a human in the loop:</strong> reviewers rewrite, comment, and compare versions before anything is approved.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Close the loop to creative:</strong> an approved script becomes a Launch Package and can generate campaign images without leaving the app.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Project Origin (page 2) ── */}
        <section id="origin" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.redBarLabel}>Project Origin</span>
            <h2 className={styles.sectionTitle}>Reverse-engineered from a vague brief, not built from a finished spec.</h2>
          </div>

          <p className={styles.sectionParagraph}>
            Before any code was written, the team ran a read-only walkthrough of the client&apos;s own
            proof-of-concept tool (&ldquo;Writer Flow PoC,&rdquo; Centaurtea) to reverse-engineer the intended
            product. That exploration established the mental model the whole build is based on, and
            produced the open-questions list — including the absence of confirmed auth and roles in the
            client&apos;s own tool — that shaped every subsequent conversation and became one of this
            build&apos;s own headline features.
          </p>

          <div className={styles.checklistBox}>
            <h4 className={styles.checklistBoxTitle}>Mental Model Established From The PoC Walkthrough</h4>
            <ul className={styles.checklist}>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>A run is a marketing experiment:</strong> shared inputs frozen into an immutable snapshot, fanned out across variants (Clean/Control, Iteration A/B/C).</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Each variant is pipelined:</strong> every variant is pushed through the multi-stage AI writing pipeline independently.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>A human decides:</strong> pipeline output is handed to a reviewer for review, scoring, and approval before anything ships.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Approval unlocks Launch:</strong> approval feeds a Launch Package stage — naming, asset/image generation, and handoff.</span>
              </li>
            </ul>
          </div>

          <p className={styles.sectionParagraph}>The result was a clean, linear flow that the application follows today:</p>
          <div className={styles.diagramContainer}>
            <div className={styles.flowRow}>
              {['Create', 'Monitor', 'Review', 'Launch', 'Admin'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <div className={styles.flowStep}>{step}</div>
                  {i < arr.length - 1 && <span className={styles.flowArrow}>→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── Build Phases At A Glance (page 3) ── */}
        <section id="build-phases" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Build Phases At A Glance</h2>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '260px' }}>Phase</th>
                  <th>What Shipped</th>
                </tr>
              </thead>
              <tbody>
                {BUILD_PHASES.map((row) => (
                  <tr key={row.phase}>
                    <td className={styles.layerCol}>{row.phase}</td>
                    <td>{row.shipped}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Architecture (pages 4–5, includes Core Infrastructure + the 5-Stage Pipeline) ── */}
        <section id="architecture" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.redBarLabel}>Architecture</span>
            <h2 className={styles.sectionTitle}>A run becomes a script, a script becomes a launch package.</h2>
          </div>

          <p className={styles.sectionParagraph}>
            The platform is organised around a single lifecycle: a run is created through a guided wizard,
            its inputs are frozen, its variants are pushed through the AI writing pipeline, a human reviews
            and approves the output, and the approved script flows into a Launch Package and, optionally,
            Image Studio and Notion. Later in the build this model shifted from run-centric to script-centric,
            so that the script — not the run — became the consistent unit of work across every surface of the
            app.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Layer</th>
                  <th>Responsibility</th>
                  <th style={{ width: '220px' }}>Technology</th>
                </tr>
              </thead>
              <tbody>
                {ARCHITECTURE_LAYERS.map((row) => (
                  <tr key={row.layer}>
                    <td className={styles.layerCol}>{row.layer}</td>
                    <td>{row.responsibility}</td>
                    <td>{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.checklistBox}>
            <h4 className={styles.checklistBoxTitle}>Core Infrastructure</h4>
            <ul className={styles.checklist}>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Auth:</strong> JWT-based login using bcrypt directly (no passlib), for bcrypt 5.x compatibility.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Permissions:</strong> single source-of-truth matrix (7 permissions × 4 roles), enforced server-side and mirrored on the frontend so the UI gates purely off server-returned permissions.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Storage:</strong> hybrid Postgres + filesystem at first, later GCS-backed image storage once Cloud Run&apos;s ephemeral filesystem made that necessary.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Deployment:</strong> Dockerized FastAPI on Google Cloud Run, GitHub Actions CI/CD using Workload Identity Federation — no long-lived service-account keys.</span>
              </li>
            </ul>
          </div>

          <h3 className={styles.plainHeading}>The 5-Stage AI Writing Pipeline</h3>
          <p className={styles.sectionParagraph}>
            Each selected variant runs the same chain, one OpenRouter LLM call per stage, ending in the
            version that enters human review.
          </p>

          <div className={styles.pipelineList}>
            {PIPELINE_STAGES.map((stage, i) => (
              <div key={stage.title} className={styles.pipelineStep}>
                <div className={styles.pipelineNum}>{i + 1}</div>
                <div>
                  <h4 className={styles.pipelineStepTitle}>{stage.title}</h4>
                  <p className={styles.pipelineStepDesc}>{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.sectionParagraph}>
            Every system prompt in this chain is editable Markdown, versioned through the global prompts
            mechanism used across the app — and every candidate model in the 16-model catalogue was fired
            against OpenRouter with a real completion before being wired in, with 4 of the original 20
            candidates excluded as invalid or perpetually rate-limited.
          </p>
        </section>

        {/* ── From The Product (pages 6–10) ── */}
        <section id="from-the-product" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.redBarLabel}>From The Product</span>
            <h2 className={styles.sectionTitle}>Ten screens that show the platform actually running.</h2>
          </div>

          <p className={styles.sectionParagraph}>
            The sessions below evidence the completed work across the full project — real screens from the
            deployed application, not mockups.
          </p>

          <div className={styles.showcaseList}>
            {PRODUCT_SCREENS.map((screen) => (
              <div key={screen.title} className={styles.showcaseItem}>
                <h3 className={styles.showcaseTitle}>{screen.title}</h3>
                <p className={styles.sectionParagraph}>{screen.desc}</p>
                <div className={styles.showcasePlaceholder}>Screenshot pending</div>
                <p className={styles.showcaseCaption}>{screen.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deployment (pages 15–16) ── */}
        <section id="deployment" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.redBarLabel}>Deployment</span>
            <h2 className={styles.sectionTitle}>Shipped to Cloud Run, not left on a laptop.</h2>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '160px' }}>Area</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {DEPLOYMENT_ROWS.map((row) => (
                  <tr key={row.area}>
                    <td className={styles.layerCol}>{row.area}</td>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <span className={styles.statusBadge}>Status: Completed</span>
        </section>

        {/* ── QA & Reliability (page 16) ── */}
        <section id="qa-reliability" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.redBarLabel}>QA &amp; Reliability</span>
            <h2 className={styles.sectionTitle}>Bugs that were root-caused, not patched around.</h2>
          </div>

          <p className={styles.sectionParagraph}>
            A ticketed QA pass validated the whole script-versioning / review / compare / launch /
            image-generation surface. Two fixes stand out because they were invisible until traced to their
            root cause:
          </p>

          <div className={styles.checklistBox}>
            <h4 className={styles.checklistBoxTitle}>Reliability Fixes Worth Naming</h4>
            <ul className={styles.checklist}>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Silent script truncation:</strong> a hardcoded token cap was cutting off scripts with no visible error — raised across the full model catalogue, with usage/finish-reason logging added at the single LLM choke point, and a deeper fix for hidden reasoning tokens silently consuming the entire budget on large prompts (which also reduced cost).</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>CORS-masking infrastructure bug:</strong> preset save failures on long names were traced back to a CORS issue that was masking the real error, and fixed at the root rather than around the symptom.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Version-history visibility gaps:</strong> two screens were fetching the full version array and discarding everything except the latest — the underlying data was always correct; the fix reused a version-pill pattern already proven elsewhere in the app.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Regeneration bug cluster:</strong> a stale version row that never refreshed, a crash on runs older than a schema change, and a provider-specific JSON-schema rejection — found and fixed together.</span>
              </li>
            </ul>
          </div>

          <p className={styles.sectionParagraph}>
            Also closed out in the same pass: Run ID uniqueness and length enforcement, a category-filtered
            preset visibility mismatch (documented as intentional rather than silently hidden), and a set of
            reported layout-overflow tickets confirmed already fixed by an earlier commit — verified against
            current CSS rather than re-doing completed work.
          </p>

          <span className={styles.statusBadge}>Status: Completed</span>
        </section>

        {/* ── Technical Components Delivered (page 17) ── */}
        <section id="components-delivered" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technical Components Delivered</h2>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Area</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {COMPONENTS_DELIVERED.map((row) => (
                  <tr key={row.area}>
                    <td className={styles.layerCol}>{row.area}</td>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Current State & Known Risks (pages 17–18) ── */}
        <section id="current-state-risks" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.redBarLabel}>Current State &amp; Known Risks</span>
            <h2 className={styles.sectionTitle}>Documented openly, not hidden.</h2>
          </div>

          <p className={styles.sectionParagraph}>
            The application covers the full lifecycle the original PoC exploration mapped out — and goes
            beyond it in places the client explicitly asked for: 4-role RBAC with a Team page (which the
            client&apos;s own PoC was missing), script-centric navigation instead of run-centric, live
            metadata/naming-convention extraction, and three distinct image-generation modes with versioning
            and editing.
          </p>

          <div className={styles.checklistBox}>
            <h4 className={styles.checklistBoxTitle}>Known, Accepted, And Documented Risks</h4>
            <ul className={styles.checklist}>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>Script/log artifacts still live on local disk in production</strong> (Cloud Run&apos;s ephemeral filesystem) — only images were moved to GCS; this is a deliberate, scoped decision, not an oversight, and remains open if the client wants it closed later.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>No database-level uniqueness constraint on Run ID</strong> (application-level check only, to avoid a dedup pass against existing duplicate data).</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span><strong>No hard-delete audit trail</strong> beyond what&apos;s described in this document; archival semantics for old runs were resolved pragmatically as the build progressed rather than against a formal spec document.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Project Outcome (page 18) ── */}
        <section id="outcome" className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.redBarLabel}>Project Outcome</span>
            <h2 className={styles.sectionTitle}>A script-centric platform, deployed and in production.</h2>
          </div>

          <div className={styles.checklistBox}>
            <h4 className={styles.checklistBoxTitle}>What Shipped</h4>
            <ul className={styles.checklist}>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Full run lifecycle operational end-to-end: creation → 5-stage AI pipeline → human review, rewrite, and comparison → approval → launch package → image generation (3 modes) → optional Notion handoff.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>4-role RBAC with a dedicated Team management page, closing a gap identified in the client&apos;s own original PoC.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>The script — not the run — is now the consistent unit of work across every surface of the platform.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Cost is tracked and reported separately for script production and image generation.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>A number of latent reliability bugs — script truncation, race conditions, commit atomicity, CORS-masking, stale version displays — were root-caused and fixed rather than patched around.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Production-deployed on Google Cloud Run with GCS-backed image storage and GitHub Actions CI/CD using Workload Identity Federation.</span>
              </li>
              <li className={styles.checklistItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Known, deferred risks are documented transparently rather than hidden.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Closing (page 19, verbatim) ── */}
        <div className={styles.closingCtaBox}>
          <h2 className={styles.closingCtaTitle}>See what your AI product could become</h2>
          <p className={styles.closingCtaText}>
            We engineer production-grade AI platforms, human-in-the-loop review systems, and
            creative-generation pipelines for teams that need more than a prompt wrapper.
          </p>
          <p className={styles.confidentialityNote}>PGAGI Confidential — For Client Use Only</p>
          <p className={styles.copyrightLine}>© 2023–2026 PG-AGI. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
