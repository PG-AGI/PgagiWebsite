'use client';

import React from 'react';
import styles from '@/styles/components/organisms/EmailLoveCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface EmailLoveCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const DOC_FIELDS: { field: string; detail: string }[] = [
  { field: 'Platforms', detail: 'Backend service · Figma plugin integration · campaign management tooling' },
  { field: 'Category', detail: 'MarTech · AI · Design automation' },
  { field: 'Stack', detail: 'Multi-modal LLMs (vision + language) · MJML JSON as the intermediate format · schema-driven blueprints · vision-based render evaluation · programmatic API' },
  { field: 'Scope', detail: 'Component library ingestion · semantic summary layer · template generation pipeline · autonomous MJML repair pipeline · API integration' },
  { field: 'Delivered', detail: "Two production AI pipelines, integrated into the client's existing Figma plugin backend. No frontend formed part of this engagement." },
  { field: 'Author', detail: 'Shibajyoti · MD' },
  { field: 'Published', detail: '24 April 2026 · 5 min read' },
];

const INDEX_ITEMS: { num: string; title: string; detail: string }[] = [
  { num: '01', title: 'What We Built', detail: 'The starting point, the two pipelines and what the engagement removed' },
  { num: '02', title: 'Core Architecture', detail: 'Shared foundation, the generation pipeline and the iterative repair loop' },
  { num: '03', title: 'Credit System and Monetisation', detail: 'Metered generation, capped repair, holds, ledger and reconciliation' },
  { num: '04', title: 'User-Facing Features', detail: 'What changes inside the Figma plugin and the campaign workflow' },
  { num: '05', title: 'Security and Auditability', detail: 'Non-destructive editing, deterministic blueprints and artefact provenance' },
  { num: '06', title: 'What Makes This Different', detail: 'The architectural decisions that separate this from prompt-to-code generation' },
  { num: '07', title: 'Outcomes', detail: 'Confirmed figures and the measurement framework' },
];

const PIPELINES_TABLE: { pipeline: string; input: string; output: string }[] = [
  { pipeline: 'Pipeline One — Generation', input: "A campaign brief, plus the client's ingested component library", output: 'A complete, structurally coherent MJML template, assembled from real component variants' },
  { pipeline: 'Pipeline Two — Repair', input: 'A malformed MJML export, plus the original Figma design as ground truth', output: 'A repaired template, selected as the closest match to the design across multiple passes' },
];

const ARCHITECTURE_TABLE: { component: string; tech: string; role: string }[] = [
  { component: 'AI models', tech: 'Multi-modal LLMs for image understanding and language reasoning', role: 'Component analysis, matching, copy adaptation, visual fault detection' },
  { component: 'Intermediate format', tech: 'MJML JSON', role: 'All generation and repair operates at the JSON level, never on rendered markup' },
  { component: 'Blueprint format', tech: 'Structured and schema-driven', role: 'Makes component selection deterministic and auditable' },
  { component: 'Repair evaluation', tech: 'Vision-based rendering comparison', role: 'Serves as the evaluation function for every repair pass' },
  { component: 'Integration', tech: 'Programmatic API', role: "Called from the client's Figma plugin backend or campaign tooling" },
];

const REPAIR_PASS_TABLE: { step: string; what: string }[] = [
  { step: 'Visual comparison', what: 'Rendered MJML output is placed alongside the original Figma design and a vision model identifies regions of divergence — misaligned columns, missing images, broken text hierarchy, collapsed sections.' },
  { step: 'Structured fault analysis', what: 'The model produces a step-by-step breakdown of the visual discrepancies, each one localised and described.' },
  { step: 'Code-level repair', what: 'Targeted edits are applied to the relevant MJML JSON sections — precise corrections, not rewrites.' },
  { step: 'Iterative refinement', what: 'The cycle repeats up to three times, each pass building on the corrections before it.' },
  { step: 'Best-result selection', what: 'Every iteration is compared against the target design and the most accurate one is returned.' },
];

const PIPELINE_MODULES = [
  'library-ingestion', 'component-vision-analysis', 'semantic-summary', 'blueprint-builder', 'section-matcher',
  'mjml-json-editor', 'section-merger', 'render-service', 'visual-diff', 'fault-analyser', 'repair-executor',
  'best-of-n-selector', 'credit-metering',
];

const CREDIT_OPS_TABLE: { op: string; unit: string; driver: string }[] = [
  { op: 'Library onboarding', unit: 'Per component variant analysed', driver: 'Vision plus language inference, one-off' },
  { op: 'Library re-index', unit: 'Per changed variant only', driver: 'Incremental, triggered when the library evolves' },
  { op: 'Blueprint creation', unit: 'Per brief', driver: 'Language inference' },
  { op: 'Section matching', unit: 'Per blueprint section', driver: 'Reasoning across candidate summaries' },
  { op: 'Targeted MJML editing', unit: 'Per section edited', driver: 'Constrained field-level generation' },
  { op: 'Template delivery', unit: 'Per template', driver: 'Merge and validation, negligible' },
  { op: 'Repair pass', unit: 'Per iteration, capped at three', driver: 'Render, vision comparison, fault analysis, repair' },
  { op: 'Best-of-N selection', unit: 'Bundled into the final pass', driver: 'Vision comparison across candidates' },
];

const FREE_OPS_TABLE: { op: string; unit: string; driver: string }[] = [
  { op: 'Composing in Figma', unit: 'Not metered', driver: 'No AI involved' },
  { op: 'Clean MJML export', unit: 'Not metered', driver: 'No AI involved' },
  { op: 'Re-downloading a template', unit: 'Not metered', driver: 'Served from the artefact store' },
];

const PLAN_TABLE: { tier: string; volume: string; scope: string; included: string }[] = [
  { tier: 'Starter', volume: 'Low monthly template volume, overage priced per template', scope: 'One component library', included: '—' },
  { tier: 'Team', volume: 'Mid monthly volume with pooled credits', scope: 'One library, incremental re-index included', included: 'Repair pipeline enabled' },
  { tier: 'Agency', volume: 'High pooled volume across client accounts', scope: 'Multiple isolated libraries', included: 'Per-library reporting' },
  { tier: 'Enterprise', volume: 'Contracted annual volume', scope: 'Unlimited isolated libraries', included: 'Dedicated throughput, provenance export, custom blueprint schema' },
];

const DECISIONS: { title: string; desc: string }[] = [
  { title: 'Semantic understanding over keyword matching', desc: 'Most retrieval systems match on labels and metadata. We built a semantic layer grounded in both visual and structural analysis, so the system reasons about fitness for a campaign rather than similarity of a name.' },
  { title: 'Non-destructive editing over code generation', desc: "By editing production-tested MJML JSON instead of generating from scratch, an entire class of model-induced structural error is removed rather than mitigated. The design system's integrity is preserved by default, not by validation." },
  { title: 'Visual feedback as the repair signal', desc: 'Using the Figma design image as ground truth — rather than a schema validator or a linter — means the repair system targets perceptual correctness. That is what actually determines whether an email renders acceptably.' },
  { title: 'Multi-pass evaluation with best-of-N selection', desc: 'Rather than trusting a single repair attempt, the system produces multiple candidates and returns the most accurate. Reliability improves substantially without putting a human back in the loop.' },
  { title: 'The blueprint decouples intent from implementation', desc: 'Turning a brief into a structured blueprint before touching any component means the "what" is settled and reviewable before the "how" begins — and it is what makes the cost of a run quotable in advance.' },
  { title: 'Bounded cost on an unbounded-looking problem', desc: 'Autonomous repair reads as open-ended. Capping it at three passes and billing only the passes that run turns it into a line item, which is the difference between a research demo and a product.' },
  { title: 'Removal rather than acceleration', desc: 'The system does not make MJML authorship faster. It takes MJML authorship out of the workflow, which is why the outcome does not degrade when the person who knew MJML leaves.' },
];

const MEASUREMENT_TABLE: { metric: string; measures: string }[] = [
  { metric: 'Templates generated', measures: 'Completed generation runs delivered' },
  { metric: 'First-pass acceptance', measures: 'Templates shipped with no human edit' },
  { metric: 'Mean sections per template', measures: 'Blueprint complexity of a typical run' },
  { metric: 'Repair success at pass 1', measures: 'Repairs resolved in a single iteration' },
  { metric: 'Repair success within cap', measures: 'Repairs resolved inside three passes' },
  { metric: 'Mean passes per repair', measures: 'Actual cost shape of the repair pipeline' },
  { metric: 'Visual fidelity score', measures: 'Best-of-N match against the target design' },
  { metric: 'Time to send', measures: 'Brief submitted to campaign-ready template' },
  { metric: 'Engineering touches avoided', measures: 'Design-to-engineering round trips removed' },
  { metric: 'Credits per template', measures: 'Blended cost of a delivered template' },
  { metric: 'Library onboarding cost', measures: 'One-off credits per component variant' },
  { metric: 'Re-index frequency', measures: 'How often a library changes materially' },
  { metric: 'Brand adherence', measures: 'Generated output conforming to design tokens' },
];

const DELIVERED_ITEMS = [
  'component library ingestion', 'semantic summary layer', 'blueprint engine', 'AI template generation pipeline',
  'autonomous MJML repair pipeline', 'credit and metering system', 'programmatic API integration',
].join(' · ');

function SectionHeader({ num, eyebrow, title }: { num: string; eyebrow: string; title: string }) {
  return (
    <>
      <span className={styles.eyebrow}>
        <span className={styles.eyebrowNum}>{num}</span>
        {eyebrow}
      </span>
      <h2 className={styles.sectionHeading}>{title}</h2>
    </>
  );
}

function Callout({ text }: { text: string }) {
  return (
    <div className={styles.calloutDivider}>
      <span className={styles.calloutLine} />
      <h3 className={styles.calloutText}>{text}</h3>
    </div>
  );
}

function CheckList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className={styles.checkList}>
      {items.map((item, i) => (
        <li key={i} className={styles.checkItem}>
          <span className={styles.checkMark}>✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EmailLoveCaseStudy(_props: EmailLoveCaseStudyProps) {
  return (
    <div className={styles.emailLovePage}>
      {/* ── 1. Hero Section ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroPeach}>
          <div className={styles.rail}>
            <p className={styles.heroEyebrow}>Case Study · MarTech + AI</p>
            <h1 className={styles.heroMainTitle}>Email Love</h1>
            <h2 className={styles.heroSubtitle}>AI-powered email template generation and autonomous repair</h2>

            <p className={styles.heroLead}>
              A two-pipeline backend system that ingests a client&apos;s Figma component library, understands
              it, and then either generates complete email templates from a campaign brief or autonomously
              detects and repairs broken ones — removing MJML authorship from the workflow entirely for a
              platform serving 50,000+ users.
            </p>
          </div>
        </div>

        <div className={styles.heroWhite}>
          <div className={`${styles.rail} ${styles.heroWhiteInner}`}>
            <div className={styles.heroTagsRow}>
              <span className={styles.heroTag}>AI email automation</span>
              <span className={styles.heroTag}>Figma to MJML</span>
              <span className={styles.heroTag}>Generative AI pipeline</span>
              <span className={styles.heroTag}>Autonomous template repair</span>
            </div>

            <div className={styles.heroStatsRow}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>50K+</span>
                <span className={styles.heroStatLabel}>platform users served</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>2</span>
                <span className={styles.heroStatLabel}>AI pipelines delivered</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>3</span>
                <span className={styles.heroStatLabel}>repair passes, hard cap</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>0</span>
                <span className={styles.heroStatLabel}>lines of MJML authored</span>
              </div>

              <svg className={styles.heroEnvelope} width="146" height="112" viewBox="0 0 130 100" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="128" height="98" rx="2" stroke="currentColor" strokeWidth="1.25" />
                <path d="M1 1L65 59L129 1" stroke="currentColor" strokeWidth="1.25" />
                <circle cx="65" cy="59" r="2.75" fill="currentColor" />
                <circle cx="28" cy="82" r="2.75" fill="currentColor" />
                <circle cx="102" cy="82" r="2.75" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Quick Meta Facts Bar ── */}
      <div className={styles.metaRail}>
        <div className={styles.rail}>
          <span className={styles.docSectionLabel}>Document</span>
          <h2 className={styles.docTitle}>Email Love — platform case study</h2>
          <div className={styles.metaGrid}>
            {DOC_FIELDS.map((row) => (
              <div key={row.field} className={styles.metaItem}>
                <span className={styles.metaLabel}>{row.field}</span>
                <span className={styles.metaValue}>{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rail}>
        {/* ── 3. At A Glance + Index ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>At A Glance</span>
          <div className={`${styles.confirmedGrid} ${styles.confirmedGridFour}`}>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>50K+</span>
              <span className={styles.confirmedLabel}>Users on the platform the pipelines serve</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>2</span>
              <span className={styles.confirmedLabel}>Independent AI pipelines on one shared foundation</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>3</span>
              <span className={styles.confirmedLabel}>Repair passes, hard-capped for bounded cost</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>0</span>
              <span className={styles.confirmedLabel}>Lines of MJML authored by hand</span>
            </div>
          </div>

          <span className={styles.eyebrow}>Index</span>
          <div className={styles.indexList}>
            {INDEX_ITEMS.map((item) => (
              <div key={item.num} className={styles.indexRow}>
                <span className={styles.indexNum}>{item.num}</span>
                <span className={styles.indexTitle}>{item.title}</span>
                <span className={styles.indexDetail}>{item.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. 01 What We Built ── */}
        <section className={styles.sectionBlock}>
          <SectionHeader num="01" eyebrow="What We Built" title="Two AI pipelines that take MJML authorship out of the workflow entirely." />

          <p className={styles.sectionParagraph}>
            Email marketing remains one of the highest-return channels in digital communication, but the
            distance between a finished Figma design and a production-ready, cross-client-compatible email
            has always been expensive to cross. Designers work in Figma. Developers wrestle with MJML.
            Campaigns slip and quality drifts.
          </p>

          <p className={styles.sectionParagraph}>
            We were brought in to close that gap outright — not by making the manual workflow faster, but by
            automating it with AI at the centre. What we delivered is a two-pipeline backend system that
            ingests a client&apos;s component library, understands it, and then either generates complete
            email templates from a campaign brief or autonomously detects and repairs broken ones.
          </p>

          <Callout text="The starting point" />
          <p className={styles.sectionParagraph}>
            The client already ran a working Figma plugin. Their users — marketing teams and designers —
            composed email layouts inside a curated component library, and the plugin exported the finished
            composition to MJML for delivery.
          </p>
          <p className={styles.sectionParagraph}>
            Two bottlenecks emerged as the library grew and briefs became more sophisticated. Template
            creation was still manual: someone had to know which components to pick, how to arrange them and
            how to adapt their content to each campaign. And the exported MJML was sometimes broken, because
            not every Figma design follows the structural rules the export layer depends on.
          </p>

          <div className={styles.highlightBox}>
            The brief was to build intelligent backends for both problems — one that composes a template
            from intent, and one that repairs a template from evidence.
          </div>

          <Callout text="What the two pipelines do" />
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Pipeline</th>
                  <th>Input</th>
                  <th>Output</th>
                </tr>
              </thead>
              <tbody>
                {PIPELINES_TABLE.map((row) => (
                  <tr key={row.pipeline}>
                    <td data-label="<tr>
                  <th style={{ width: '220px' }}>Pipeline" className={styles.layerCol}>{row.pipeline}</td>
                    <td data-label="Input">{row.input}</td>
                    <td data-label="Output">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.featureCard}>
            <h3 className={styles.cardTitle}>What the engagement removed</h3>
            <CheckList
              items={[
                'Manual component selection and arrangement for every campaign.',
                'Hand-editing of MJML to adapt copy, type and colour to a new brief.',
                'The design-to-engineering round trip when an export rendered incorrectly.',
                'The dependency on whoever on the team happens to know MJML.',
              ]}
            />
          </div>
        </section>

        {/* ── 5. 02 Core Architecture ── */}
        <section className={styles.sectionBlock}>
          <SectionHeader num="02" eyebrow="Core Architecture" title="Two pipelines, one shared foundation." />

          <p className={styles.sectionParagraph}>
            Both pipelines are backend services called programmatically from the client&apos;s existing
            plugin backend. They share four components — the semantic index built from the component
            library, the blueprint schema, the MJML JSON editor and the vision evaluator — which is why
            adding the second pipeline did not mean building a second system.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '180px' }}>Component</th>
                  <th>Technology / Approach</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {ARCHITECTURE_TABLE.map((row) => (
                  <tr key={row.component}>
                    <td data-label="<tr>
                  <th style={{ width: '180px' }}>Component" className={styles.layerCol}>{row.component}</td>
                    <td data-label="Technology / Approach">{row.tech}</td>
                    <td data-label="Role">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Figure 1 — System architecture */}
          <div className={styles.diagramContainer}>
            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>Client Surface</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Figma Plugin</span>
                  <span className={styles.diagramBoxCaption}>curated component library · composition</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Campaign Tooling</span>
                  <span className={styles.diagramBoxCaption}>campaign briefs · send workflow</span>
                </div>
              </div>
            </div>
            <div className={styles.diagramArrowRow}>↓</div>

            <div className={`${styles.diagramBar} ${styles.diagramBarOrange}`}>
              Programmatic API · backend-only engagement · called from the client&apos;s existing plugin backend
            </div>
            <div className={styles.diagramArrowRow}>↓</div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>Pipelines</div>
              <div className={styles.diagramRowBoxes}>
                <div className={`${styles.diagramBox} ${styles.diagramBoxHighlight}`}>
                  <span className={styles.diagramBoxTitle}>Pipeline One</span>
                  <span className={styles.diagramBoxCaption}>brief in, template out</span>
                </div>
                <div className={`${styles.diagramBox} ${styles.diagramBoxHighlight}`}>
                  <span className={styles.diagramBoxTitle}>Pipeline Two</span>
                  <span className={styles.diagramBoxCaption}>broken template in, repaired template out</span>
                </div>
              </div>
            </div>
            <div className={styles.diagramArrowRow}>↓</div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>Shared Foundation</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>Component Semantic Index</span></div>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>Blueprint Schema</span></div>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>MJML JSON Editor</span></div>
                <div className={styles.diagramBox}><span className={styles.diagramBoxTitle}>Vision Evaluator</span></div>
              </div>
            </div>
            <div className={styles.diagramArrowRow}>↓</div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>AI Providers</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Multi-modal LLMs — Vision</span>
                  <span className={styles.diagramBoxCaption}>component and render understanding</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Multi-modal LLMs — Language</span>
                  <span className={styles.diagramBoxCaption}>reasoning, matching, copy adaptation</span>
                </div>
              </div>
            </div>
            <div className={styles.diagramArrowRow}>│</div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramRowLabel}>Artefact Store</div>
              <div className={styles.diagramRowBoxes}>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>Component summaries · blueprints</span>
                  <span className={styles.diagramBoxCaption}>rebuilt when the library changes</span>
                </div>
                <div className={styles.diagramBox}>
                  <span className={styles.diagramBoxTitle}>MJML JSON versions · repair iterations</span>
                  <span className={styles.diagramBoxCaption}>every pass retained</span>
                </div>
              </div>
            </div>
            <div className={styles.diagramArrowRow}>│</div>

            <div className={`${styles.diagramBar} ${styles.diagramBarBlack}`}>
              <strong>Reasoning attached to every selection</strong> · why a variant was chosen · what the blueprint required · which fields were edited
            </div>
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 1</strong> System architecture. The engagement was backend-only — the client&apos;s
            plugin and campaign tooling remain the surface, and both pipelines sit behind one programmatic
            API.
          </p>
        </section>

        {/* ── 6. Dark Feature Banner — Pipeline One ── */}
        <div className={styles.darkBanner}>
          <div className={styles.darkContent}>
            <span className={styles.darkEyebrow}>Core Architecture</span>
            <h2 className={styles.darkTitle}>Pipeline One — automated template generation</h2>
            <p className={styles.darkDesc}>
              Before any template can be generated automatically, the system has to understand what it is
              working with. We ingest the full component library and analyse every component twice over:
              structurally, through its MJML JSON schema, its nesting and its configurable fields; and
              visually, through the rendered image of the component.
            </p>
          </div>
        </div>

        <section className={styles.sectionBlock}>
          <p className={styles.sectionParagraph}>
            From that, a vision-capable model produces a semantic summary of each component — what it
            visually communicates, which campaign types it suits, what its content slots expect, and its
            design characteristics in terms of density, tone and visual weight. This summary layer is the
            foundation of the whole pipeline. Without it, component selection is pattern-matching against
            names and types. With it, the system reasons about fit.
          </p>
          <p className={styles.sectionParagraph}>
            When a brief arrives, the system first builds a structured campaign blueprint capturing intent,
            emotional tone, the structural sections required and the constraints that apply. That step
            matters because it separates what the client wants from how it will be built. The blueprint is
            then matched section by section — header, hero, card, product list, testimonial, call to action,
            footer — against the summaries of the available variants, weighing whether a header&apos;s visual
            weight suits the campaign tone or whether a card layout has the right slots for the number of
            products being featured. Each selection carries its reasoning with it.
          </p>
          <p className={styles.sectionParagraph}>
            The editing step is where naive approaches go wrong. Rather than regenerating MJML from scratch,
            we extract the actual MJML JSON of each selected variant and make surgical edits only to the
            fields that must change: text content, font styles, colour tokens and image placeholder
            references. Layout structure, padding and responsive breakpoints are left untouched. The sections
            are then merged in blueprint order into a complete template. The pipeline runs end to end without
            a human touching a line of MJML.
          </p>

          {/* Figure 2 — Generation pipeline */}
          <div className={styles.diagramContainer}>
            <div className={styles.stageGroup}>
              <div className={styles.stageHeader}>
                <span className={styles.stageLabel}>Stage One — Understand The Library</span>
                <span className={styles.stageNote}>· rebuilt only when the library changes</span>
              </div>
              <div className={styles.stageFlow}>
                <div className={`${styles.stageChip} ${styles.stageChipHighlight}`}>Component library ingested</div>
                <span className={styles.stageChevron}>›</span>
                <div className={styles.stageChip}>Multi-modal analysis schema + rendered image</div>
                <span className={styles.stageChevron}>›</span>
                <div className={styles.stageChip}>Semantic summary per component variant</div>
              </div>
            </div>

            <div className={styles.stageGroup}>
              <div className={styles.stageHeader}>
                <span className={styles.stageLabel}>Stage Two — Generate The Template</span>
                <span className={styles.stageNote}>· run per campaign brief</span>
              </div>
              <div className={styles.stageFlow}>
                <div className={`${styles.stageChip} ${styles.stageChipHighlight}`}>Campaign brief submitted</div>
                <span className={styles.stageChevron}>›</span>
                <div className={styles.stageChip}>Blueprint built intent · tone · sections</div>
                <span className={styles.stageChevron}>›</span>
                <div className={styles.stageChip}>Variant matched per section</div>
                <span className={styles.stageChevron}>›</span>
                <div className={styles.stageChip}>Targeted MJML JSON edits</div>
                <span className={styles.stageChevron}>›</span>
                <div className={styles.stageChip}>Merged in blueprint order</div>
                <span className={styles.stageChevron}>›</span>
                <div className={`${styles.stageChip} ${styles.stageChipDark}`}>Template delivered</div>
              </div>
            </div>
          </div>

          <div className={styles.neverDoneBox}>
            <strong>What Is Never Done</strong> · MJML is not generated from scratch. Layout, padding and
            responsive breakpoints are never rewritten · only content, type, colour tokens and image
            references change.
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 2</strong> The generation pipeline. Stage one is amortised across every template
            the library ever produces; stage two runs per brief.
          </p>
        </section>

        {/* ── 7. Dark Feature Banner — Pipeline Two ── */}
        <div className={styles.darkBanner}>
          <div className={styles.darkContent}>
            <span className={styles.darkEyebrow}>Core Architecture</span>
            <h2 className={styles.darkTitle}>Pipeline Two — autonomous MJML repair</h2>
            <p className={styles.darkDesc}>
              Even experienced Figma users do not always follow every structural convention the MJML export
              layer depends on. When constraints are violated — improper nesting, a missing required element,
              an unsupported layout pattern — the exported JSON can be malformed or render incorrectly in email
              clients. Rather than returning an error and asking the user to go and fix their design, the
              system attempts the repair itself.
            </p>
          </div>
        </div>

        <section className={styles.sectionBlock}>
          <p className={styles.sectionParagraph}>
            The pipeline is built on one insight: the ground truth for what an email should look like is the
            original Figma design. So the system does not try to fix MJML by reading code alone. It reasons
            about the visual gap between what the broken template renders and what the design intended.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Pass Step</th>
                  <th>What Happens</th>
                </tr>
              </thead>
              <tbody>
                {REPAIR_PASS_TABLE.map((row) => (
                  <tr key={row.step}>
                    <td data-label="<tr>
                  <th style={{ width: '220px' }}>Pass Step" className={styles.layerCol}>{row.step}</td>
                    <td data-label="What Happens">{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.sectionParagraph}>
            This is robust against exactly the class of error that static analysis struggles with. Visual
            fidelity becomes the measurable objective, and the loop lets the system correct itself
            progressively rather than succeeding or failing in one shot.
          </p>

          {/* Figure 3 — Iterative repair loop */}
          <div className={styles.diagramContainer}>
            <svg className={styles.repairLoopSvg} viewBox="0 0 600 380" role="img" aria-label="The iterative repair loop">
              <defs>
                <marker id="repairArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#E2672D" />
                </marker>
              </defs>

              <path d="M175,90 L235,52" stroke="#E2672D" strokeWidth="1.5" fill="none" markerEnd="url(#repairArrow)" />
              <path d="M345,55 L425,150" stroke="#E2672D" strokeWidth="1.5" fill="none" markerEnd="url(#repairArrow)" />
              <path d="M470,205 L345,282" stroke="#E2672D" strokeWidth="1.5" fill="none" markerEnd="url(#repairArrow)" />
              <path d="M235,300 L150,270" stroke="#E2672D" strokeWidth="1.5" fill="none" markerEnd="url(#repairArrow)" />
              <path d="M105,225 L100,140" stroke="#E2672D" strokeWidth="1.5" fill="none" markerEnd="url(#repairArrow)" />

              <rect x="365" y="223" width="90" height="16" fill="#F7F7F8" />
              <text x="410" y="235" textAnchor="middle" fontSize="11" fontWeight="700" fill="#C34F1D">up to 3 passes</text>

              <rect x="20" y="80" width="150" height="50" rx="8" fill="#fff" stroke="#E7DFD6" />
              <text x="95" y="100" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">Structured</text>
              <text x="95" y="116" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">fault analysis</text>

              <rect x="235" y="10" width="170" height="50" rx="8" fill="#fff" stroke="#E7DFD6" />
              <text x="320" y="30" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">Code-level repair</text>
              <text x="320" y="46" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">on MJML JSON</text>

              <rect x="425" y="150" width="150" height="50" rx="8" fill="#fff" stroke="#E7DFD6" />
              <text x="500" y="170" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">Candidate</text>
              <text x="500" y="186" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">re-rendered</text>

              <rect x="15" y="225" width="185" height="50" rx="8" fill="#fff" stroke="#E7DFD6" />
              <text x="107" y="245" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">Visual comparison</text>
              <text x="107" y="261" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">against the Figma design</text>

              <rect x="235" y="290" width="170" height="50" rx="8" fill="#FCEEE2" stroke="#E2672D" strokeWidth="1.5" />
              <text x="320" y="310" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">Broken MJML</text>
              <text x="320" y="326" textAnchor="middle" fontSize="12" fontWeight="600" fill="#17171A">rendered</text>

              <text x="290" y="168" textAnchor="middle" fontSize="13" fontWeight="800" fill="#17171A">ITERATIVE REPAIR LOOP</text>
              <text x="290" y="189" textAnchor="middle" fontSize="11" fill="#6B6B72">the Figma design is the ground truth,</text>
              <text x="290" y="204" textAnchor="middle" fontSize="11" fill="#6B6B72">not a schema validator</text>
              <text x="290" y="224" textAnchor="middle" fontSize="11" fontWeight="700" fill="#E2672D">best result selected across passes</text>
            </svg>
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 3</strong> The iterative repair loop. Because the evaluation function is
            perceptual rather than syntactic, the system targets what actually matters for email rendering.
          </p>

          <div className={styles.featureCard}>
            <h3 className={styles.cardTitle}>Pipeline modules</h3>
            <div className={styles.moduleTags}>
              {PIPELINE_MODULES.map((m, i) => (
                <span key={m} className={`${styles.moduleTag} ${i === 0 ? styles.moduleTagActive : ''}`}>{m}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. 03 Credit System and Monetisation ── */}
        <section className={styles.sectionBlock}>
          <SectionHeader num="03" eyebrow="Credit System and Monetisation" title="Metered where compute is spent, capped where cost could run away." />

          <p className={styles.sectionParagraph}>
            The system is consumed as an API rather than as seats, so the commercial unit is the operation
            rather than the user. Credits are priced against the three things that genuinely cost money —
            understanding a library, generating a template and running a repair pass — and everything else is
            free at the point of use.
          </p>

          {/* Figure 4 — Metering model */}
          <div className={styles.diagramContainer}>
            <div className={styles.meterGroup}>
              <div className={styles.meterLabelBar}>
                Generation Credits <span className={styles.meterNote}>· metered per template · sub-metered by blueprint section count</span>
              </div>
              <div className={styles.meterBoxRow}>
                <div className={`${styles.meterBox} ${styles.meterBoxHighlight}`}>Brief received hold placed</div>
                <div className={styles.meterBox}>Sections counted cost quoted</div>
                <div className={styles.meterBox}>Pipeline runs</div>
                <div className={styles.meterBox}>Settled on delivery failed run released</div>
                <div className={styles.meterBox}>Ledger debit idempotent</div>
              </div>
            </div>

            <div className={styles.meterGroup}>
              <div className={styles.meterLabelBar}>
                Repair Credits <span className={styles.meterNote}>· metered per iteration · hard-capped at three · unused passes never billed</span>
              </div>
              <div className={styles.meterBoxRow}>
                <div className={`${styles.meterBox} ${styles.meterBoxHighlight}`}>Pass 1 billed succeeds in most cases</div>
                <div className={styles.meterBox}>Pass 2 billed only if pass 1 fell short</div>
                <div className={styles.meterBox}>Pass 3 is the ceiling best-of-N then returned</div>
              </div>
            </div>

            <div className={styles.freeBox}>
              <span className={styles.freeLabel}>Free at the point of use</span>
              <span>composing in Figma</span>
              <span>exporting an already-clean MJML</span>
              <span>re-downloading a delivered template</span>
            </div>

            <div className={`${styles.diagramBar} ${styles.diagramBarBlack}`}>
              <strong>Reconciliation</strong> · credit debits reconciled against multi-modal provider invoices, split by pipeline and by pass
            </div>
          </div>

          <p className={styles.figureCaption}>
            <strong>Figure 4</strong> The metering model. Generation is quoted before it runs; repair is
            billed per pass against a hard ceiling of three.
          </p>

          <Callout text="What consumes credits" />
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Metered Operation</th>
                  <th>Unit of Consumption</th>
                  <th>Primary Cost Driver</th>
                </tr>
              </thead>
              <tbody>
                {CREDIT_OPS_TABLE.map((row) => (
                  <tr key={row.op}>
                    <td data-label="<tr>
                  <th style={{ width: '220px' }}>Metered Operation" className={styles.layerCol}>{row.op}</td>
                    <td data-label="Unit of Consumption">{row.unit}</td>
                    <td data-label="Primary Cost Driver">{row.driver}</td>
                  </tr>
                ))}
                {FREE_OPS_TABLE.map((row) => (
                  <tr key={row.op}>
                    <td data-label="<tr>
                  <th style={{ width: '220px' }}>Metered Operation" className={styles.layerCol}>{row.op}</td>
                    <td data-label="Unit of Consumption" className={styles.mutedCell}>{row.unit}</td>
                    <td data-label="Primary Cost Driver" className={styles.mutedCell}>{row.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout text="Why the repair cap is a commercial decision" />
          <p className={styles.sectionParagraph}>
            An autonomous repair loop with no ceiling is an unbounded bill. Capping the loop at three passes
            turns worst-case cost into a number that can be quoted before the work starts, which is what
            makes autonomous repair sellable rather than merely impressive. Passes are billed only if they
            run — when the first pass lands, the second and third are never charged, so the common case is
            also the cheap case.
          </p>

          <div className={styles.featureCard}>
            <h3 className={styles.cardTitle}>Cost shape</h3>
            <CheckList
              items={[
                <><strong>Library cost is paid once.</strong>&nbsp;The semantic index is built per library, not per template, so the marginal cost of the thousandth template is the same as the second.</>,
                <><strong>Generation cost scales with structure, not length.</strong>&nbsp;A nine-section newsletter costs more than a three-section transactional email because it runs more matching and editing operations, and that is quoted from the blueprint before the pipeline executes.</>,
                <><strong>Repair cost is bounded by design.</strong>&nbsp;Three passes is the ceiling, and the ceiling is a contract term rather than an implementation detail.</>,
              ]}
            />
          </div>

          <Callout text="Plan structure" />
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '110px' }}>Tier</th>
                  <th>Committed Volume</th>
                  <th>Library Scope</th>
                  <th>Included Beyond Credits</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_TABLE.map((row) => (
                  <tr key={row.tier}>
                    <td data-label="<tr>
                  <th style={{ width: '110px' }}>Tier" className={styles.layerCol}>{row.tier}</td>
                    <td data-label="Committed Volume">{row.volume}</td>
                    <td data-label="Library Scope">{row.scope}</td>
                    <td data-label="Included Beyond Credits">{row.included}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.implCard}>
            <h3 className={styles.implCardTitle}>Ledger integrity</h3>
            <CheckList
              items={[
                <><strong>Quote before execution.</strong>&nbsp;The blueprint is built first, so the section count — and therefore the cost — is known before the expensive part of the pipeline runs.</>,
                <><strong>Pre-authorisation holds.</strong>&nbsp;Credits are held when a run starts and settled on delivery. A run that fails to produce a deliverable template releases its hold, so the client never pays for nothing.</>,
                <><strong>Idempotent debits.</strong>&nbsp;A retried brief submission or a dropped connection cannot double-charge, because the debit is keyed to the run rather than the request.</>,
                <><strong>Append-only ledger.</strong>&nbsp;Every debit records the pipeline, the operation, the pass number, the model identifier, the credits consumed and a correlation identifier back to the artefact produced.</>,
                <><strong>Per-library scoping.</strong>&nbsp;Credit allocation is partitioned by library, so one agency client&apos;s volume cannot consume another&apos;s.</>,
                <><strong>Reconciliation.</strong>&nbsp;Debits are reconciled against multi-modal provider invoices split by pipeline and by pass, which keeps credit pricing anchored above true unit cost as model rates change.</>,
              ]}
            />
          </div>
        </section>

        {/* ── 9. 04 User-Facing Features ── */}
        <section className={`${styles.sectionBlock} ${styles.docSection}`}>
          <div className={styles.sectionNumRow}>
            <span className={styles.sectionNumBadge}>04</span>
            <span className={styles.sectionEyebrowPlain}>User-Facing Features</span>
          </div>
          <h2 className={styles.sectionTitle}>The surface does not change. What happens behind it does.</h2>

          <p className={styles.sectionParagraph}>
            No frontend was built as part of this engagement. That is deliberate: the client&apos;s users
            already had a Figma plugin they knew, and the value of the work is that the same plugin now does
            considerably more without asking anyone to learn a new tool. What follows is what changes from
            the user&apos;s side.
          </p>

          <h3 className={styles.plainHeading}>Compose, or just describe</h3>
          <p className={styles.sectionParagraph}>
            The existing path stays intact — a user can still assemble a layout from the curated component
            library and export it. What is new is that they no longer have to. Submitting a campaign brief
            produces a complete template built from the same library, with components chosen for fit rather
            than habit.
          </p>

          <h3 className={styles.plainHeading}>Briefs instead of component decisions</h3>
          <p className={styles.sectionParagraph}>
            The user describes the campaign — what it is for, who it is going to, what tone it should carry,
            what has to appear in it. They no longer need to know which of five hero variants suits a
            promotional send, or which card layout holds four products without breaking. That knowledge now
            lives in the semantic index.
          </p>

          <h3 className={styles.plainHeading}>Copy adapted, design preserved</h3>
          <p className={styles.sectionParagraph}>
            Generated templates carry campaign-appropriate copy in the component slots that expect it, with
            type and colour drawn from the client&apos;s own design tokens. Because editing is surgical rather
            than generative, what comes back looks like the design system it came from — not like an
            approximation of it.
          </p>

          <h3 className={styles.plainHeading}>Broken exports repair themselves</h3>
          <p className={styles.sectionParagraph}>
            Previously, a design that violated an export constraint produced an error and a round trip. Now
            the repair pipeline takes the malformed output, compares its render against the original design,
            and returns a corrected template. The user&apos;s experience of a structural mistake changes from
            a blocked send to a fixed file.
          </p>

          <h3 className={styles.plainHeading}>Consistency that does not depend on who is working</h3>
          <p className={styles.sectionParagraph}>
            For teams with mixed technical skill, the quality of the output stops being a function of who
            happens to know MJML. For teams running high campaign volumes, the effect is faster
            time-to-send, fewer engineering bottlenecks and more consistent brand adherence across every
            email.
          </p>

          <div className={styles.pillGrid}>
            <div className={styles.pillCard}>
              <div className={styles.pillTitle}>Brief</div>
              <div className={styles.pillCaption}>Input is intent, not component picks</div>
            </div>
            <div className={styles.pillCard}>
              <div className={styles.pillTitle}>MJML</div>
              <div className={styles.pillCaption}>Never authored or edited by hand</div>
            </div>
            <div className={styles.pillCard}>
              <div className={styles.pillTitle}>Auto</div>
              <div className={styles.pillCaption}>Broken exports repaired without a round trip</div>
            </div>
            <div className={styles.pillCard}>
              <div className={styles.pillTitle}>API</div>
              <div className={styles.pillCaption}>Delivered behind the tools users already have</div>
            </div>
          </div>

          <div className={styles.highlightBox}>
            What we built is not a tool that helps designers write MJML faster. It is a system that removes
            MJML authorship from the workflow, replacing it with a structured, AI-mediated pipeline that
            starts from intent and ends with a deliverable.
          </div>
        </section>

        {/* ── 10. 05 Security and Auditability ── */}
        <section className={styles.sectionBlock}>
          <SectionHeader num="05" eyebrow="Security and Auditability" title="Non-destructive by default, deterministic where it counts." />

          <p className={styles.sectionParagraph}>
            When a system produces production assets on a client&apos;s behalf, three questions matter: can
            the output drift outside the design system, can a given template be explained after the fact, and
            can one client&apos;s library influence another&apos;s output. The architecture answers all three
            structurally rather than by policy.
          </p>

          <div className={styles.implCardGrid}>
            <div className={styles.implCard}>
              <h3 className={styles.implCardTitle}>Design-system integrity</h3>
              <CheckList
                items={[
                  <><strong>Editing is non-destructive.</strong>&nbsp;Production-tested MJML JSON is modified field by field rather than regenerated, which eliminates an entire class of structurally invalid output before it can occur.</>,
                  <><strong>Layout, padding and breakpoints are never in scope for an edit</strong>, so output cannot break responsive behaviour the client already validated.</>,
                  <><strong>Type, colour and spacing come from the client&apos;s own component tokens.</strong>&nbsp;The system has no mechanism for inventing a brand value that is not already in the library.</>,
                ]}
              />
            </div>
            <div className={styles.implCard}>
              <h3 className={styles.implCardTitle}>Determinism and explainability</h3>
              <CheckList
                items={[
                  <><strong>Blueprints are schema-driven</strong>, which makes component selection deterministic and auditable rather than a black-box outcome of a single long prompt.</>,
                  <><strong>Every selection carries its reasoning</strong> — what the blueprint required and why this variant satisfied it — so a questioned template can be explained without a re-run.</>,
                  <><strong>Prompt version and model identifier are recorded per run</strong>, so output produced under an earlier model generation remains attributable.</>,
                ]}
              />
            </div>
            <div className={styles.implCard}>
              <h3 className={styles.implCardTitle}>Artefact provenance</h3>
              <CheckList
                items={[
                  'Component summaries, blueprints, intermediate MJML JSON and every repair iteration are retained as versioned artefacts.',
                  'Any delivered template traces back to the exact variants it came from, field by field.',
                  'Repair runs retain each pass and the comparison scores behind the best-of-N choice, so the selection is reviewable rather than asserted.',
                ]}
              />
            </div>
            <div className={styles.implCard}>
              <h3 className={styles.implCardTitle}>Tenancy and asset handling</h3>
              <CheckList
                items={[
                  <><strong>Component libraries and their semantic indexes are tenant-scoped.</strong>&nbsp;A summary derived from one library never enters another&apos;s candidate set — which matters most in the agency case, where several brands sit behind one account.</>,
                  <>Generated templates reference image placeholders rather than embedding media, so campaign assets stay in the client&apos;s own store and never transit as payload.</>,
                  <>Because the engagement is backend-only, the exposed surface is the programmatic API. Authentication and session handling remain with the client&apos;s plugin backend.</>,
                ]}
              />
            </div>
          </div>

          <div className={styles.darkBox}>
            <strong>Design Principle</strong>
            Edit what has already been proven to work rather than generating a replacement for it — the
            design system stays intact by construction, not by review.
          </div>
        </section>

        {/* ── 11. 06 What Makes This Different ── */}
        <section className={styles.sectionBlock}>
          <div className={styles.darkBanner}>
            <div className={styles.darkContent}>
              <span className={styles.darkEyebrow}>06 · What Makes This Different</span>
              <h2 className={styles.darkTitle}>Seven decisions that separate this from prompt-to-code generation.</h2>
            </div>
          </div>

          <div className={styles.decisionList}>
            {DECISIONS.map((d, i) => (
              <div key={d.title} className={styles.decisionItem}>
                <h3 className={styles.decisionTitle}>
                  <span className={styles.decisionNum}>{String(i + 1).padStart(2, '0')}</span>
                  {d.title}
                </h3>
                <p className={styles.decisionDesc}>{d.desc}</p>
              </div>
            ))}
          </div>

          <Callout text="Extensibility" />
          <p className={styles.sectionParagraph}>
            The architecture is built to be re-pointed rather than rebuilt. The component summary layer can
            be regenerated whenever the library evolves. The blueprint schema can be extended to capture new
            campaign types. The repair loop&apos;s iteration count and evaluation criteria are tunable. The
            core mechanisms are general enough to adapt as both the design system and the email requirements
            grow.
          </p>
        </section>

        {/* ── 12. 07 Outcomes ── */}
        <section className={styles.sectionBlock}>
          <SectionHeader num="07" eyebrow="Outcomes" title="What was delivered, and how it is measured." />

          <p className={styles.sectionParagraph}>
            Both pipelines were delivered as production backend systems and integrated into the client&apos;s
            existing Figma plugin backend. The confirmed figures below describe the delivery and its
            operating context. The measurement framework that follows is the instrumentation these pipelines
            expose — presented as a framework so reported values stay tied to live telemetry rather than to a
            document.
          </p>

          <Callout text="Confirmed" />
          <div className={styles.confirmedGrid}>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>50K+</span>
              <span className={styles.confirmedLabel}>Platform users</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>2</span>
              <span className={styles.confirmedLabel}>AI pipelines live</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>3</span>
              <span className={styles.confirmedLabel}>Repair pass ceiling</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>0</span>
              <span className={styles.confirmedLabel}>Frontend delivered</span>
            </div>
            <div className={styles.confirmedCard}>
              <span className={styles.confirmedValue}>1</span>
              <span className={styles.confirmedLabel}>Shared foundation</span>
            </div>
          </div>

          <Callout text="Measurement framework" />
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '260px' }}>Instrumented Metric</th>
                  <th>What It Measures</th>
                  <th style={{ width: '120px' }}>Current</th>
                </tr>
              </thead>
              <tbody>
                {MEASUREMENT_TABLE.map((row) => (
                  <tr key={row.metric}>
                    <td data-label="<tr>
                  <th style={{ width: '260px' }}>Instrumented Metric" className={styles.layerCol}>{row.metric}</td>
                    <td data-label="What It Measures">{row.measures}</td>
                    <td data-label="Current" className={styles.mutedCell}>[ populate ]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout text="What this demonstrates" />
          <p className={styles.sectionParagraph}>
            AI-powered email template generation and autonomous template repair are not hypothetical
            capabilities. Both were built and delivered as parts of one coherent backend system, grounded in
            real design-system data, real campaign intent and real visual output.
          </p>

          <div className={styles.highlightBox}>
            The project shows what becomes possible when generative AI is applied not as a replacement for
            human creativity, but as an intelligent layer between creative assets and production deliverables
            — automating the translation work that has always demanded design expertise and engineering skill
            at the same time.
          </div>
        </section>

        {/* ── 13. Delivered (closing box, in place of Vook's CTA) ── */}
        <div className={styles.deliveredBox}>
          <span className={styles.deliveredLabel}>Delivered</span>
          <p>{DELIVERED_ITEMS}</p>
        </div>
      </div>
    </div>
  );
}
