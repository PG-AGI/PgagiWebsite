'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/organisms/BeaverCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface BeaverCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

const IMG = '/case-studies/RS-Engine_Beaver_Images';

type CheckItem = { lead?: string; text: string };

function CheckList({ items }: { items: CheckItem[] }) {
  return (
    <ul className={styles.checkList}>
      {items.map((it, i) => (
        <li key={i}>
          <span className={styles.check} aria-hidden="true">✓</span>
          <span>
            {it.lead && <strong>{it.lead} </strong>}
            {it.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Shot({
  src,
  width,
  height,
  title,
  text,
  caption,
  priority,
}: {
  src: string;
  width: number;
  height: number;
  title: string;
  text: React.ReactNode;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className={styles.shot}>
      <h3 className={styles.shotTitle}>{title}</h3>
      <p className={styles.shotText}>{text}</p>
      {/* Tap opens the full-resolution screenshot — wide app screens are
          hard to read at phone width otherwise. */}
      <a href={`${IMG}/${src}`} target="_blank" rel="noopener noreferrer" className={styles.photoFrame}>
        <Image
          src={`${IMG}/${src}`}
          alt={caption}
          width={width}
          height={height}
          priority={priority}
          className={styles.photoImg}
          sizes="(max-width: 960px) 100vw, 1100px"
        />
      </a>
      <figcaption className={styles.shotCaption}>{caption}</figcaption>
    </figure>
  );
}

function DataTable({ head, rows, firstColClass }: { head: string[]; rows: string[][]; firstColClass?: string }) {
  return (
    <div className={styles.tableOuter}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td
                  key={j}
                  data-label={head[j]}
                  className={j === 0 ? firstColClass ?? styles.keyCell : undefined}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const PLATFORM_HAD_TO_DO: CheckItem[] = [
  { lead: 'Keep the client’s templates as the authority:', text: 'consume Beaver’s approved Word templates and their marker grammar as they are — never translate them into another templating language.' },
  { lead: 'Refuse the wrong sheet:', text: 'a workbook that is not the approved template, or that belongs to a different project, is stopped before its values are read for content.' },
  { lead: 'Check before generating:', text: 'units, ranges, relationships and formulas are verified by code; an AI review explains what code cannot decide, in plain sentences; a failed or out-of-date check blocks generation.' },
  { lead: 'Separate the numbers from the sign-off:', text: 'the engineer owns the values, the reviewer owns approval, and downloads and overrides route to a Super Admin.' },
  { lead: 'Keep every version:', text: 'every input edit and every regeneration is a numbered, restorable version that can be compared page against page.' },
  { lead: 'Leave a record that outlives the project:', text: 'an immutable activity trail, and every AI call recorded in full before it is made.' },
];

const PLATFORM_THINKS: CheckItem[] = [
  { lead: 'The approved template is law.', text: 'An uploaded sheet is compared with the approved template cell by cell; changing a label, unit or row is refused, while repeating tables are allowed to grow or shrink.' },
  { lead: 'A part, not a section, is the unit of work.', text: 'Section 3 ships as ten templates and Section 4 as three; each has its own input, validation, draft, review and issue state, and a section’s status is rolled up from its parts.' },
  { lead: 'AI advises; a person decides.', text: 'The review flags, explains and asks. It never edits a value or a document, and never cites what it was not given.' },
  { lead: 'Red means substituted.', text: 'Values taken from project data print in red and fixed template wording in black, so a reviewer sees at a glance what came from the project; the issued PDF is all black.' },
  { lead: 'Nothing leaves without a record.', text: 'A final document can only be downloaded through a request with a stated reason and a recorded decision — including a Super Admin’s own.' },
];

const BUILD_PHASES: string[][] = [
  ['Foundation (Aug 18–31, 2026)', 'Requirements lock-in, Microsoft sign-in, backend and frontend deployed, AWS database and storage provisioned as Terraform modules, first Aspose template-fill and rendered-page diff prototypes.'],
  ['UI/UX approval & backend foundation (Sep 1–7)', 'UI screens and user flow approved by the client; projects workspace live; project-scoped access; templates library with pinned revisions; build-record ledger; artefacts in object storage; repository secret scan clean.'],
  ['Sections 1–2 (Sep 8–14)', 'Marker-grammar engine with the black/red colour contract; Section 2 code-register reader; build log for every generation attempt; compare/diff with restore; AI configuration and prompt-version recording held outside the code.'],
  ['Sections 3–4 & v1.0 (Sep 15–21)', 'Ten Section 3 templates with per-rock-class repeating blocks; Sections 4.1–4.3 with computed values; document versioning; v1.0 released.'],
  ['Validation layer (Sep 24 – Oct 13)', 'Template-integrity check, deterministic rules per section, and AI review for Sections 1, 3 and 4 — each AI call logged before it is made; calculation pre-computed so review reads what the report will print.'],
  ['Figures & typography (Sep 30 – Oct 14)', 'Section 4.3 figures generated from the report’s own values and placed at their captions; real subscripts and superscripts; consistent number printing.'],
  ['Milestone 4 & release control (Oct)', 'Milestone 4 completed on 14 Oct; role hierarchy with inheriting capabilities; authorised download and Super Admin self-approval; comparison upload checks; contractor and client issue numbering.'],
];

const ARCH_LAYERS: string[][] = [
  ['Frontend', 'Project and section workspace; Excel grid editor with staged changes; validation panel; rendered-page review with anchored comments; version comparison; admin screens. Routes are project-scoped and role-guarded.', 'React 18, Vite, React Router, pdf.js'],
  ['API', '71 endpoints; request-context middleware; every call written as a structured JSON log line.', 'FastAPI'],
  ['Access', 'Microsoft Entra ID and email sign-in; a four-role capability map mirrored on the frontend and enforced server-side; project-scoped membership.', 'PyJWT, Microsoft OAuth'],
  ['Excel Input', 'Cell-level reader; template-integrity check; versioned edits with a change log and restore.', 'openpyxl'],
  ['Validation', 'Deterministic rules per section; AI review for Sections 1, 3 and 4; structured findings stored with their sheet and cell.', 'Python rules, Anthropic Claude API'],
  ['Generation', 'Marker grammar, repeating blocks, derived-value computation (Section 4), generated figures, subscripts and superscripts, the black/red colour contract.', 'Aspose.Words, matplotlib, NumPy'],
  ['Review & Issue', 'Anchored Major/Minor comments with an acknowledgement gate; approval; contractor and client numbered issues; revisions with a stated reason; authorised download.', 'FastAPI services, PostgreSQL'],
  ['Comparison', 'Both versions rendered as laid-out pages with the difference painted on; either side may be a system version or an uploaded .docx.', 'Aspose.Words'],
  ['Storage', 'Uploads bucket and a versioned, object-locked artefacts bucket; the database holds references only, never file bytes.', 'AWS S3'],
  ['Audit', 'Immutable activity log; every AI call recorded with its request, raw response, token usage and prompt version.', 'PostgreSQL'],
];

const CORE_INFRA: CheckItem[] = [
  { lead: 'Access control:', text: 'four ranked roles — Reviewer, Engineer, Admin, Super Admin — where each holds every capability of the roles below it. An unknown capability is denied, so a typo in a route fails closed.' },
  { lead: 'Storage:', text: 'Word templates and generated .docx/.pdf live in the object-locked artefacts bucket; engineer-supplied workbooks live in a separate private uploads bucket. Both are encrypted, versioned and closed to public access.' },
  { lead: 'Database:', text: 'PostgreSQL 16 on AWS RDS with IAM authentication and deletion protection; 23 SQL migrations; audit and AI-invocation tables that are written, never updated.' },
  { lead: 'Deployment:', text: 'FastAPI behind nginx with TLS on EC2, React frontend on AWS Amplify, secrets pulled from AWS Secrets Manager at deploy time, GitHub Actions CI/CD authenticating through OIDC, the whole environment defined in Terraform.' },
];

const PIPELINE: { title: string; text: string }[] = [
  { title: 'Excel Input', text: 'The engineer uploads the input sheet against the part’s pinned template revision. The sheet is checked against the approved template and this project. Edits are staged in a grid editor and saved as a new sheet version with a change log; any earlier version can be restored.' },
  { title: 'Validate', text: 'Template integrity, then deterministic checks, then AI review. Findings are stored with category, severity (Serious, Minor or Observation), field, stated value, expectation, reasoning, sheet and cell. A Serious flag must be answered with a justification.' },
  { title: 'Draft', text: 'Word and PDF are generated from the pinned template revision. Derived values are computed and figures drawn before printing. Every regeneration is a numbered version, and a part cannot regenerate while a reviewer’s comment on its latest version is unacknowledged.' },
  { title: 'Review & Issue', text: 'Reviewers comment on passages of the rendered document; the engineer replies and acknowledges each comment; only a reviewer closes a concern. Approval is final. Approved versions are issued as all-black PDFs; an editable Word copy needs a request and an approval.' },
];

const VALIDATION_LAYERS: string[][] = [
  ['1 · Template integrity', 'Has anyone changed the approved template itself?', 'Fixed rows are aligned to the approved template by Field Key and Parameter, so repeating tables can grow without false alarms; editable cells are read from the workbook’s own input fill; cosmetic formatting is ignored. If it fails, nothing further runs — results on a sheet whose labels have moved would be about the wrong fields.'],
  ['2 · Deterministic checks', 'Is each value possible?', 'Units, number and chainage formats, allowed options and stated relationships; Section 3 formulas are re-computed; Section 4’s calculation runs first so the review reads what the report will print. Section 2 (a code register) is deterministic only. A defect that would stop the Section 4.3 build is a Serious flag per field, with no AI call.'],
  ['3 · AI review', 'Does it make sense in context?', 'One call for the whole sheet, grounded in the project’s own record and in what code has already verified. The model never calculates: relations the platform can evaluate are computed and passed in with their results. Six checks on the answer reject a quote not found in its cell, a source not sent, or a number in no quote or cell, and severity is held to an allowed band.'],
];

const VALIDATION_RULES: CheckItem[] = [
  { lead: 'Logged before it is sent:', text: 'each AI call writes its full request and who caused it, and commits it before the request leaves. If that write fails, the model is not called.' },
  { lead: 'Unavailable AI is a visible state:', text: 'if the AI step cannot run, the result says so in plain words rather than reporting a sheet as reviewed when it was not.' },
  { lead: 'Reads, never writes:', text: 'validation never touches the values it judges, and generation reads the same input version validation read.' },
];

const ROLES: string[][] = [
  ['Engineer', 'The numbers', 'Uploads and edits input sheets, runs validation and generation, edits draft prose, responds to and acknowledges review comments.'],
  ['Reviewer', 'Sign-off', 'Raises Major or Minor concerns on the rendered document, resolves them, approves a version, logs contractor outcomes and sends to the client.'],
  ['Admin', 'The workspace', 'Creates projects and assigns engineers and reviewers; manages templates and users; reads the logs; runs comparisons.'],
  ['Super Admin', 'Release control', 'Approves download requests, overrides an issue, grants the Admin role. An admin who could promote themselves would not be a limit on an admin.'],
];

const BUILD_EVIDENCE: string[][] = [
  ['Report templates generating end to end', '15 across 4 sections'],
  ['Input fields across those templates', '~650'],
  ['Engine verbs callable independently of the web screens', '3 (validate, generate, compare)'],
  ['API endpoints', '71'],
  ['Automated test functions', '707 across 46 test files'],
  ['SQL migrations applied to the production schema', '23'],
  ['AWS resources created by one Terraform command', '42'],
  ['Architecture decision records', '5'],
  ['Commits, 24 Aug to 29 Oct 2026', '354'],
  ['Application code (excluding tests and developer scripts)', '~26,000 lines backend Python; ~19,500 lines frontend'],
];

const DEPLOYMENT: string[][] = [
  ['Backend', 'FastAPI on a single EC2 instance (Ubuntu 24.04) behind nginx with TLS, run as a systemd service under a dedicated user.'],
  ['Frontend', 'React / Vite static build on AWS Amplify, calling the API on its own domain.'],
  ['Database', 'PostgreSQL 16 on AWS RDS in the VPC; IAM authentication and deletion protection; schema managed by migrations.'],
  ['Storage', 'Two S3 buckets — uploads, and artefacts with object lock — encrypted, versioned, public access blocked.'],
  ['Secrets', 'AWS Secrets Manager is the runtime source; the deploy regenerates the server’s environment file from it. No secret is committed to the repository.'],
  ['CI/CD', 'GitHub Actions: a Gitleaks secret scan of every pushed commit, then an AWS role assumed through OIDC, then deploy to the server and restart.'],
  ['Infrastructure as code', 'Terraform with remote state and locking: audit (CloudTrail), EC2, IAM, RDS and S3 — 42 resources. Manual steps not covered by Terraform are reduced to one documented page.'],
];

const QA: CheckItem[] = [
  { lead: 'Automated tests:', text: '707 test functions across 46 files cover the marker grammar and its conformance to Beaver’s reference, generation, template integrity, validation and AI review for each section, version approval, the review gate, issued copies, comparison, document issues, and frontend/backend permission parity.' },
  { lead: 'Gates, not guidance:', text: 'a failed or stale validation blocks generation; an unacknowledged comment blocks regeneration; a newer version cannot be approved while the previous one is still waiting on the contractor or the client.' },
  { lead: 'AI review noise, root-caused:', text: 'the first live run of the Section 1 review on a clean worked example returned 15 items, most of them not real problems. Per-category calls had also lost context, reading a ring-road corridor as a closed loop. The review was rebuilt as one sheet-wide call grounded in the project record and in what code had already verified, with checks on the model’s own answer.' },
  { lead: 'Fail loudly at startup:', text: 'the server prints every missing or misconfigured environment variable on boot; a hard-coded server address that had silently gone stale was removed so a missed update now fails at once.' },
  { lead: 'Native-runtime crash fixed at the root:', text: 'a missing system library crashed the whole process, not just one request, when the document engine loaded on the Linux host. It was diagnosed to its cause and fixed on the server.' },
  { lead: 'Secrets:', text: 'a full repository scan was clean at Milestone 2, and every pushed commit is scanned in CI.' },
];

const RISKS: CheckItem[] = [
  { lead: 'AI review sends project values to the model provider’s API without masking.', text: 'The review needs real authority and project names to catch mismatches; masking and data-residency terms remain an open item with the client.' },
  { lead: 'AI validation covers Sections 1, 3 and 4.', text: 'Section 2 is a catalogue of codes and has deterministic checks only; a deeper check against code clauses awaits the client’s code-limit library.' },
  { lead: 'Report output depends on the completeness of the client’s inputs and templates.', text: 'A blank required value prints a visible VALUE MISSING marker by design, and some Section 4 templates are still being polished with the client.' },
  { lead: 'The document engine needs a production licence in the client’s account;', text: 'development licences were PGAGI’s.' },
  { lead: 'One backend instance, no auto-scaling,', text: 'and a deploy that resets to the latest commit with no automatic rollback.' },
  { lead: 'Time saved per report is not yet measured', text: 'against the client’s manual process.' },
];

const COMPONENTS: string[][] = [
  ['Authentication & Roles', 'Microsoft Entra ID and email sign-in, JWT sessions, four-role inheriting capability map, project-scoped membership, Admin / Super Admin separation.'],
  ['Project Setup', 'Report type, template package and revision pinned at creation; engineer and reviewer assignment; direct-to-client or via-contractor route.'],
  ['Excel Input', 'Template-integrity check, cell-level reader, grid editor with staged changes, versioned edits with change log and restore, Section 2 code-register reader.'],
  ['Validation', 'Deterministic rules per section, Section 3 formula re-computation, Section 4 calculation pre-pass, AI review for Sections 1, 3 and 4, structured findings, justification of Serious flags.'],
  ['Document Generation', 'One engine for all 15 templates: five marker forms, black/red colour contract, repeating and nested blocks, self-resolving tables, heading keep-with-next, subscripts and superscripts.'],
  ['Figures', 'Four generated Section 4.3 figures placed at their captions; undrawable inputs reported and the build stopped.'],
  ['Review & Versioning', 'Anchored Major/Minor comments, four-turn replies, acknowledgement gate, numbered versions, side-by-side rendered comparison with restore.'],
  ['Issue & Release', 'Approval, contractor and client numbered issues, revisions with a stated reason, all-black issued PDF, authorised download and Word-copy requests.'],
  ['Audit & Observability', 'Immutable activity log, build log for every generation attempt, AI invocation log with prompt version and token usage, structured JSON request logs, searchable admin Logs screen.'],
  ['Engine Access', 'JSON endpoints for validate, generate and compare, independent of the web screens.'],
  ['Testing', '707 automated test functions in 46 files.'],
  ['Infrastructure', 'Terraform (S3, RDS, EC2, IAM, CloudTrail), Docker-based secret scan, GitHub Actions with OIDC, nginx and TLS, Amplify.'],
];

const OUTCOME: CheckItem[] = [
  { text: 'Full lifecycle operational end to end: Excel input → three-layer validation → generation → review → issue, across all four in-scope sections.' },
  { text: 'All 15 templates generate from the client’s example input sheets, with Section 4.3’s figures drawn from the report’s own values.' },
  { text: 'AI is bounded: it flags, explains and asks, every call is recorded before it is made, and a person decides every time.' },
  { text: 'Every input edit and every regeneration is a restorable version; any two can be compared as real pages.' },
  { text: 'Four roles with separate powers; a final document can leave the system only through a recorded request.' },
  { text: 'The whole environment can be rebuilt from code, in a clean account, with one page of manual steps.' },
  { text: 'Known, deferred risks — data handling, coverage limits, licensing, single-instance hosting — are documented transparently rather than hidden.' },
];

const FLOW = ['Excel Input', 'Validate', 'Draft', 'Review', 'Issue'];

function Flow() {
  return (
    <div className={styles.flowBar}>
      {FLOW.map((step, i) => (
        <React.Fragment key={step}>
          <span className={styles.flowStep}>{step}</span>
          {i < FLOW.length - 1 && <span className={styles.flowArrow} aria-hidden="true">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function BeaverCaseStudy(_props: BeaverCaseStudyProps) {
  return (
    <div className={styles.beaverPage}>
      {/* ── 1. Hero ── */}
      <section className={styles.heroSection}>
        <div className={styles.rail}>
          <div className={styles.heroBand}>
            <span className={styles.heroBrand}>PGAGI</span>
            <span className={styles.heroBandSub}>Case Study&nbsp;&nbsp;Beaver Infra Consultants</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>AI-Assisted Engineering Report Production</h1>
              <p className={styles.heroDesc}>
                A production report-generation platform for an infrastructure design consultancy, turning structured Excel inputs into reviewed, issued engineering reports — built on the client’s own approved templates, a three-layer validation gate with a bounded AI review, rendered-page version comparison, role-separated review and release, and an immutable audit trail, and shipped end to end to production on the client’s own AWS account.
              </p>
              <div className={styles.heroPillRow}>
                <span className={styles.pillDark}>Template-driven generation</span>
                <span className={styles.pillLight}>Three-layer validation</span>
                <span className={styles.pillLight}>Bounded AI review</span>
                <span className={styles.pillLight}>Immutable audit trail</span>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroImgFrame}>
                <Image
                  src={`${IMG}/Beaver-cover-image.png`}
                  alt="RS-Engine — Beaver Infra Consultants report platform"
                  width={1918}
                  height={820}
                  priority
                  className={styles.photoImg}
                  sizes="(max-width: 960px) 100vw, 680px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Headline stats ── */}
      <div className={styles.rail}>
        <div className={styles.statStrip}>
          <div className={`${styles.statTile} ${styles.tileNavy}`}>
            <span className={styles.statValue}>15</span>
            <span className={styles.statLabel}>Report templates generating end to end across 4 report sections</span>
          </div>
          <div className={`${styles.statTile} ${styles.tileDarkNavy}`}>
            <span className={styles.statValue}>~650</span>
            <span className={styles.statLabel}>Input fields read, validated and mapped into the report</span>
          </div>
          <div className={`${styles.statTile} ${styles.tileGrey}`}>
            <span className={styles.statValue}>4</span>
            <span className={styles.statLabel}>Roles with deliberately separate powers</span>
          </div>
          <div className={`${styles.statTile} ${styles.tileBlue}`}>
            <span className={styles.statValue}>707</span>
            <span className={styles.statLabel}>Automated test functions across 46 test files</span>
          </div>
        </div>
      </div>

      {/* ── 3. Meta facts ── */}
      <div className={styles.metaRail}>
        <div className={styles.rail}>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>Beaver Infra Consultants Pvt. Ltd.</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>Engineering Document Automation · Validation &amp; Review Workflow · GenAI</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Stack</span>
              <span className={styles.metaValue}>FastAPI · React / Vite · PostgreSQL (AWS RDS) · Aspose.Words · Anthropic Claude API · AWS S3 · Terraform · GitHub Actions</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Scope</span>
              <span className={styles.metaValue}>Full build · Excel input &amp; validation · Template-driven generation · Versioning &amp; comparison · Review, issue &amp; download control · Role-based access · Audit trail · Infrastructure as code &amp; deployment</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rail}>
        {/* What the platform covers */}
        <section className={styles.coversBlock}>
          <h3 className={styles.subHeading}>What the platform covers:</h3>
          <ul className={styles.dotList}>
            <li><strong>Report type delivered:</strong> the Detailed Project Report for a twin-tube tunnel — four sections made of fifteen templates: Introduction, Codes &amp; Standards, Geotechnical Design Basis (ten sub-templates) and Design of the Support System (three sub-templates).</li>
            <li><strong>One workflow:</strong> Excel Input → Validate → Draft → Review → Issue, with a record of who did what at every step.</li>
          </ul>
        </section>

        {/* ── 4. Overview ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Overview</span>
          <h2 className={styles.sectionHeading}>From an engineer’s Excel sheet to an issued report, with a record of every step.</h2>
          <p className={styles.sectionParagraph}>
            Beaver’s engineers fill structured Excel input sheets. The platform checks each sheet, generates the Word and PDF report from Beaver’s own approved template, runs it through a reviewer, and issues it — with every upload, edit, generation, comment, approval and download recorded against the person who did it.
          </p>

          <div className={styles.statPair}>
            <div className={`${styles.statTile} ${styles.tileNavy}`}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Validation layers run before any document is generated — template integrity, deterministic checks, AI review</span>
            </div>
            <div className={`${styles.statTile} ${styles.tileDarkNavy}`}>
              <span className={styles.statValue}>42</span>
              <span className={styles.statLabel}>AWS resources stood up by a single Terraform command</span>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>What The Platform Had To Do</h3>
            <CheckList items={PLATFORM_HAD_TO_DO} />
          </div>
        </section>

        {/* ── 5. Project Origin ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Project Origin</span>
          <h2 className={styles.sectionHeading}>Built around the client’s own template pack, not a blank page.</h2>
          <p className={styles.sectionParagraph}>
            Beaver writes long, formal engineering reports — Detailed Project Reports and design-basis reports that can run to several hundred pages — for clients and government authorities, where the engineer is personally accountable for what is signed. Before the platform, input values were typed in by hand, review meant re-reading whole documents to find what had changed, and a reviewer’s feedback could be lost when a new draft was generated.
          </p>
          <p className={styles.sectionParagraph}>
            The engagement began in August 2026 with requirements lock-in and a handover pack from Beaver: approved Word templates, matching Excel input sheets, and an Assembly Logic guide describing a marker grammar and a reference renderer. PGAGI ported that grammar to Aspose.Words as a contract rather than a suggestion — the templates stay Beaver’s, and the platform learns to read them. Phase 1 was planned as five milestones over six weeks, with Beaver signing off the UI screens and user flow at Milestone 2 before any section work began.
          </p>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>How The Platform Thinks</h3>
            <CheckList items={PLATFORM_THINKS} />
          </div>

          <p className={styles.flowLead}>The result is a fixed, linear flow the application follows today:</p>
          <Flow />

          <h3 className={styles.subHeading}>Build Phases At A Glance</h3>
          <DataTable head={['Phase', 'What Shipped']} rows={BUILD_PHASES} />
        </section>

        {/* ── 6. Architecture ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Architecture</span>
          <h2 className={styles.sectionHeading}>A sheet becomes a validated input, an input becomes a report, a report becomes an issued record.</h2>
          <p className={styles.sectionParagraph}>
            The service is organised around one lifecycle: an engineer uploads an input sheet against a part’s pinned template revision; the sheet is read cell by cell, checked and validated; Aspose.Words fills the approved template and builds a numbered version; a reviewer comments on the rendered pages; an approved version is issued, in the order the project’s route requires, with each audience numbering its own issues.
          </p>

          <DataTable head={['Layer', 'Responsibility', 'Technology']} rows={ARCH_LAYERS} />

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Core Infrastructure</h3>
            <CheckList items={CORE_INFRA} />
          </div>
        </section>

        {/* ── 7. Report Pipeline ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>The Report Pipeline</span>
          <div className={styles.pipeline}>
            {PIPELINE.map((step, i) => (
              <div key={step.title} className={styles.pipeRow}>
                <div className={styles.pipeNum}>{i + 1}</div>
                <div className={styles.pipeTitle}>{step.title}</div>
                <p className={styles.pipeText}>{step.text}</p>
              </div>
            ))}
          </div>
          <p className={styles.noteText}>
            A blank required value never silently drops a clause. Depending on the sheet’s own <em>If Blank</em> policy it prints a visible <strong>VALUE MISSING</strong> marker or omits the clause, and the validation step has already told the engineer which.
          </p>
        </section>

        {/* ── 8. Validation Before Generation ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Validation Before Generation</span>
          <h2 className={styles.sectionHeading}>Three layers, in a fixed order — each runs only if the one before it allows.</h2>

          <DataTable head={['Layer', 'The question it answers', 'How it answers it']} rows={VALIDATION_LAYERS} />

          <div className={styles.card}>
            <CheckList items={VALIDATION_RULES} />
          </div>

          <h3 className={styles.subHeading}>Roles, Deliberately Separate</h3>
          <DataTable head={['Role', 'Owns', 'Typical actions']} rows={ROLES} />
        </section>

        {/* ── 9. From The Product ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>From The Product</span>
          <h2 className={styles.sectionHeading}>Real screens from the deployed application, not mock-ups.</h2>
          <p className={styles.sectionParagraph}>
            The screens below follow the report lifecycle: the input sheet and its validation, review and issue, comparison and audit, and the documents the platform generates.
          </p>

          <Shot
            src="01_Screenshot1_Input_Sheet_Section3.1_v2.png"
            width={1112}
            height={572}
            title="Screenshot 1 — The input sheet."
            text={<>Each template ships with a companion Excel sheet. Every row carries a Field Key, parameter, unit, governing code basis, type, required flag and an <em>If Blank</em> policy. Only the yellow Value column is editable; repeating blocks, such as one row per rock-class reach, grow with the project.</>}
            caption="Section 3.1 input sheet: locked metadata, a yellow Value column, and a repeating block for each reach."
          />
          <Shot
            src="02_Screenshot2_Excel_Input_Step_v2.png"
            width={1917}
            height={931}
            title="Screenshot 2 — The Excel Input step."
            text={<>The sheet opens in the browser beside its approved template and worked example, with a Change Log, the template download, file replacement and a <strong>Validate Excel</strong> action. Every saved edit is a new sheet version.</>}
            caption="Excel Input step for Section 1 — Introduction: sheet versions, validation state and the sheet grid."
          />
          <Shot
            src="03_Screenshot3_Staged_Edits_v2.png"
            width={1917}
            height={925}
            title="Screenshot 3 — Staged edits."
            text="An edit is staged, not written. The pending change is listed beside the grid and a banner warns that the review reads values as they currently stand in the workbook until the change is applied. Saving writes all staged changes as one new version."
            caption="One staged change (State: Maharashtra → Delhi) held in the Changes panel before it is saved."
          />
          <Shot
            src="04_Screenshot4_Validate_Excel_Stages.png"
            width={1917}
            height={927}
            title="Screenshot 4 — Validate Excel."
            text="Validation runs as visible stages, in order: reading the sheet, checking it against this project, resolving units against each field’s definition, comparing values with their code limits, and cross-reading values against each other."
            caption="The five validation stages shown to the engineer while the sheet is checked."
          />
          <Shot
            src="05_Screenshot5_System_Validation_v2.png"
            width={1012}
            height={672}
            title="Screenshot 5 — System Validation."
            text="Findings are grouped by what they test: unit sanity, range against a code limit, cross-value consistency. Here the Section 3.5 sheet raises two observations. The review asks whether an RMR of 4 beside a Q of 0.01 really is the intended design ground for Class V, and whether a full-face 11.2 m span would be accepted in ground that poor. It asks the question; it does not change the value."
            caption="System Validation for Section 3.5: 13 inputs read, 0 serious, 0 minor, 2 observations; AI review validated."
          />
          <Shot
            src="06_Screenshot6_Review_Anchored_Comments_v2.png"
            width={1917}
            height={930}
            title="Screenshot 6 — Review with anchored comments."
            text={<>A reviewer selects a passage of the rendered document and attaches a comment with a Major or Minor severity. Each comment appears in the Reviews panel marked <em>Needs acknowledgement</em>; the engineer must acknowledge it before the part can generate a new version. Approving the version is final and opens the Issue step.</>}
            caption="Version 10 in review, with a highlighted passage and two comments waiting for the engineer."
          />
          <Shot
            src="07_Screenshot7_Issue_Version_Ladder.png"
            width={1917}
            height={928}
            title="Screenshot 7 — Issue and the version ladder."
            text="An approved version is issued as a PDF. Internal versions (V1) are visible to Beaver only; the client’s numbering (C0) is separate. From here a user can open the sealed record, request a download or an editable Word copy, or start a revision with a stated reason."
            caption="Issue step for Section 3.1: internal V1 and client C0 numbered separately, with release actions."
          />
          <Shot
            src="08_Screenshot8_Comparison_Real_Pages_v3.png"
            width={1917}
            height={922}
            title="Screenshot 8 — Comparison on real pages."
            text="Two versions are rendered as the documents themselves, not as extracted text. Removed text is painted red, added text green, and the two sides scroll together. Either side can be a system version or an uploaded .docx."
            caption="Section 1 — Introduction, version 3 against version 10, side by side with differences highlighted."
          />
          <Shot
            src="09_Screenshot9_Logs.png"
            width={1530}
            height={587}
            title="Screenshot 9 — Logs."
            text="Every action is recorded against the person who took it, one row per action. Filters combine engineer, project, session, level and date range so one thread of work can be followed end to end."
            caption="Admin log view with filters and a per-action trail (signed in, started session, requested download, previewed document)."
          />
          <Shot
            src="10_Screenshot10_Generated_Output_Section3.10_v3.png"
            width={1917}
            height={935}
            title="Screenshot 10 — Generated output."
            text="Section 3.10 as an approved version on the Issue tab. The per-rock-class tables are repeating blocks filled from the sheet, laid out to Beaver’s worked example."
            caption="Section 3.10 Assumptions & Limitations — tables rendered as repeating blocks (document V0)."
          />
          <Shot
            src="11_Screenshot11_Generated_Figure_Q-Support_Chart_v2.png"
            width={1490}
            height={561}
            title="Screenshot 11 — Generated figures."
            text="The four Section 4.3 figures are drawn from the report’s own values and placed at their captions. Here the project’s short-term and ultimate design points are added to the base Q-support chart. Inputs that cannot be drawn are reported as a list and stop the build."
            caption="Figure 4.3.1-1 — Q-support chart with the project’s design points added to the base NGI / Grimstad & Barton chart."
          />

          {/* Screenshot 12 — three-up detail grid, as laid out in the PDF */}
          <figure className={styles.shot}>
            <h3 className={styles.shotTitle}>Screenshot 12 — Details that matter in an engineering document.</h3>
            <p className={styles.shotText}>
              Every version is kept and can be opened from the version selector. Authored subscripts survive generation (D<sub>e</sub>), and every validation call returns structured, machine-readable findings rather than only a message.
            </p>
            <div className={styles.detailGrid}>
              <div className={styles.detailLeft}>
                <div className={styles.photoFrame}>
                  <Image src={`${IMG}/12a_Screenshot12_Version_Selector.png`} alt="Version selector" width={656} height={415} className={styles.photoImg} />
                </div>
                <span className={styles.shotCaption}>Versions 16 (latest), 12, 1 and 0 of an issued document.</span>
              </div>
              <div className={styles.detailRight}>
                <div className={styles.photoFrame}>
                  <Image src={`${IMG}/12b_Screenshot12_Subscript_Preserved.png`} alt="Subscript preserved" width={497} height={95} className={styles.photoImg} />
                </div>
                <span className={styles.shotCaption}>A real subscript preserved in the generated document.</span>
                <a href={`${IMG}/12c_Screenshot12_Validation_Finding_JSON.png`} target="_blank" rel="noopener noreferrer" className={styles.photoFrame}>
                  <Image src={`${IMG}/12c_Screenshot12_Validation_Finding_JSON.png`} alt="Validation finding JSON" width={1357} height={235} className={styles.photoImg} />
                </a>
                <span className={styles.shotCaption}>One finding returned by validate: category, severity, field, stated, reasoning, sheet and cell.</span>
              </div>
            </div>
          </figure>
        </section>

        {/* ── 10. Build Evidence ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Build Evidence</span>
          <h2 className={styles.sectionHeading}>Counted from the repository, not estimated.</h2>
          <DataTable head={['Measure', 'Count']} rows={BUILD_EVIDENCE} />
          <p className={styles.noteText}>
            These are counts, not benchmarks. Hours saved per report have not yet been measured against Beaver’s manual process.
          </p>
        </section>

        {/* ── 11. Deployment ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Deployment</span>
          <h2 className={styles.sectionHeading}>Shipped to the client’s own AWS account.</h2>
          <DataTable head={['Category', 'Details']} rows={DEPLOYMENT} />
          <p className={styles.statusLine}>
            <strong>Status:</strong> <span>Live on the client’s AWS account; v1.0 released September 2026.</span>
          </p>
        </section>

        {/* ── 12. QA & Reliability ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>QA &amp; Reliability</span>
          <h2 className={styles.sectionHeading}>Correctness held by tests, gates and a record — and problems root-caused, not patched around.</h2>
          <div className={styles.card}>
            <CheckList items={QA} />
          </div>

          <div className={`${styles.card} ${styles.riskCard}`}>
            <h3 className={styles.cardTitle}>Known, Accepted, And Documented Risks</h3>
            <CheckList items={RISKS} />
          </div>
        </section>

        {/* ── 13. Technical Components Delivered ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Technical Components Delivered</span>
          <DataTable head={['Category', 'Components']} rows={COMPONENTS} />
        </section>

        {/* ── 14. Project Outcome ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Project Outcome</span>
          <h2 className={styles.sectionHeading}>A production report platform, live on the client’s own infrastructure.</h2>
          <div className={styles.card}>
            <CheckList items={OUTCOME} />
          </div>

          <div className={styles.bannerTeal}>Phase 1 Delivered — Live On The Client’s AWS Account</div>
          <div className={styles.bannerBlue}>Ready For Next Phase: Hardening &amp; Follow-Up</div>
        </section>

      </div>
    </div>
  );
}
