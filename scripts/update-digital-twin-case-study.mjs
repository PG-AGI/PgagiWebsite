#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { MongoClient } from 'mongodb';

const TARGET_SLUG = 'digital-twin-ai-powered-expert-knowledge-platform';
const FALLBACK_URI = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const MONGODB_URI = process.env.MONGODB_URI || FALLBACK_URI;

const FIGURE_BASE = '/assets/CaseStudies/digital-twin';

const figure = (name, alt, caption) => ({
  type: 'image',
  src: `${FIGURE_BASE}/${name}`,
  alt,
  caption,
});

const paragraph = (content) => ({ type: 'paragraph', content });
const highlight = (content) => ({ type: 'highlight', content });
const box = (heading, text) => ({ type: 'box', content: { heading, text } });
const table = (headers, rows) => ({ type: 'table', content: { headers, rows } });

const NEW_SECTIONS = [
  {
    title: 'I. Overview',
    content: [
      paragraph('User interaction with a Digital Twin is not limited to passive or read-only responses. Once access is granted through platform connect tokens, users actively converse with the selected twin to explain their problem context, clarify constraints, and iteratively work toward resolution.'),
      paragraph('The Digital Twin functions as an intelligent problem-solving counterpart that reasons strictly within the boundaries of structured, expert-submitted knowledge captured through mandatory document ingestion and refined through voice-based clarification.'),
      paragraph('Connecting with the real expert is optional and not required for the core workflow. The primary value is the twin\'s ability to independently help users understand, diagnose, and resolve issues grounded in proven real-world experience.'),
      box('Open Product Decisions Captured During Discovery', '1) Once a twin is published in Phase 1, should knowledge be immutable or versioned with revisions? 2) If coverage is weak for a query, should the system refuse or return low-confidence output with a disclaimer? 3) Should connect tokens be consumed per session, question, contact reveal, or another rubric? 4) On incremental updates, should historical knowledge states remain accessible for auditability? 5) Should voice clarification insights be persisted as structured knowledge or treated as transient enrichment only?'),
      highlight('Recommendation: Razorpay should be used for payment processing, while token balances and usage remain in an internal ledger. A sample expert document set is required to validate document structure and ingestion assumptions.'),
    ],
  },
  {
    title: 'II. System Overview',
    content: [
      paragraph('The platform follows a modular, service-oriented architecture centered on two flows: expert knowledge capture and user discovery. Both expert and client users interact through a web frontend secured via centralized authentication (JWT/OAuth). Token purchases are processed externally, while balances and usage are tracked internally for correctness and decoupling.'),
      figure('fig-1-system-architecture.png', 'Figure 1: System Architecture', 'Figure 1: System Architecture'),
      paragraph('Digital Twin creation is document-led. Experts upload structured documents that are validated, normalized, and stored as structured knowledge units. A context-aware voice clarification layer resolves ambiguities, and refinements are applied through a dedicated Twin Creation and Update Service with explicit metadata and version control.'),
      paragraph('As a Phase-1 extension, experts get a private Playground to test their own twin before publication. This test-before-launch workflow keeps incomplete reasoning out of production while allowing iterative refinement of tone, coverage, and answer quality.'),
      paragraph('Discovery uses a problem-first contextual search engine. Query text is normalized, embedded, and matched to knowledge-unit embeddings. Retrieved units are grouped by twin and ranked deterministically before answer generation.'),
      figure('fig-2-contextual-search-engine.png', 'Figure 2: Contextual Search Engine', 'Figure 2: Contextual Search Engine'),
      table(
        ['Ranking Signal', 'Weight'],
        [
          ['Semantic similarity', '0.50'],
          ['Problem frequency', '0.20'],
          ['Experience years', '0.15'],
          ['Successful outcomes', '0.10'],
          ['Recency', '0.05'],
        ]
      ),
      paragraph('This deterministic scoring keeps discovery auditable and separates ranking from generation. Once a user selects a twin, answer generation runs through a twin-scoped RAG pipeline limited strictly to that twin\'s knowledge with citations and confidence indicators.'),
      paragraph('Expert workflow in Phase 1: authentication, profile creation, manual verification, structured knowledge upload, optional voice clarification, review, and publish.'),
      figure('fig-3-expert-workflow.png', 'Figure 3: Expert Workflow', 'Figure 3: Expert Workflow'),
      paragraph('User workflow in Phase 1: authentication, problem query (text or voice), deterministic twin ranking, token check, optional purchase, twin chat (text or voice), and optional expert contact reveal based on confidence and intent.'),
      figure('fig-4-user-workflow.png', 'Figure 4: User Workflow', 'Figure 4: User Workflow'),
      paragraph('The Twin Playground is isolated, non-discoverable, and non-impacting. Responses are ephemeral, analytics isolation is enforced, and all production changes must be committed through the twin update service to preserve auditability.'),
      figure('fig-5-twin-playground-architecture.png', 'Figure 5: Twin Playground Architecture', 'Figure 5: Twin Playground Architecture'),
      paragraph('Security and auditability are enforced through centralized cloud logging with append-only records, RBAC-restricted access, and least-privilege IAM policies. Playground logs are retained only for security/compliance and are never reused for ranking or model learning unless explicitly committed through update workflows.'),
    ],
  },
  {
    title: 'III. Enterprise Architecture (Phase 2)',
    content: [
      paragraph('Enterprise Mode extends the architecture to support private, organization-scoped twins in isolated enterprise workspaces. Enterprise twins are never discoverable in the public platform by default.'),
      figure('fig-6-enterprise-architecture.png', 'Figure 6: Enterprise Architecture', 'Figure 6: Enterprise Architecture'),
      paragraph('Each enterprise account defines the administrative boundary. Administrators create workspaces for departments, teams, or projects; each workspace has isolated users and twins. Workspace membership and role determine visibility, interaction, and update permissions.'),
      paragraph('Enterprise data is logically isolated from public data across authentication, storage, and retrieval layers. Data is encrypted at rest and in transit with enterprise-scoped authorization controls.'),
      figure('fig-7-enterprise-mode-workflow.png', 'Figure 7: Enterprise Mode Workflow', 'Figure 7: Enterprise Mode Workflow'),
      box('Enterprise IAM Model', 'Enterprise administrators can create/delete workspaces, add/remove users, and assign roles. Workspace membership controls which twins are visible and actionable. Every action is authorization-checked and auditable.'),
    ],
  },
  {
    title: 'IV. Technical Stack',
    content: [
      table(
        ['Layer', 'Technology', 'Responsibilities'],
        [
          ['Backend', 'FastAPI (Python)', 'Auth/RBAC, twin lifecycle orchestration, search, ranking, Q&A APIs, token checks'],
          ['Twin Creation Pipeline', 'Twin Creation Service + structuring modules', 'Document ingestion, voice clarification integration, normalization, schema validation'],
          ['Search + Ranking', 'Embeddings + deterministic ranking engine', 'Problem-first similarity retrieval and auditable twin ranking'],
          ['AI Layer', 'LLM integration + twin-scoped RAG', 'Grounded answer generation with citations/confidence; no cross-twin context'],
          ['Data', 'PostgreSQL + vector store', 'Profiles, twin metadata, structured knowledge units, token ledger, embeddings'],
          ['Payments', 'Razorpay + internal credit ledger', 'Purchase processing via webhooks; authoritative in-platform token accounting'],
          ['Frontend', 'Next.js', 'Expert dashboard, discovery UI, chat interface, token purchase flows'],
          ['Auth', 'JWT-based sessions', 'Role-enforced API access'],
          ['Infrastructure', 'GCP/Azure managed services + Docker', 'Containerized deployment, storage, logging/monitoring, secret management'],
        ]
      ),
      paragraph('The architecture keeps payment confirmation decoupled from usage accounting and keeps discovery deterministic while answering remains twin-scoped and explainable.'),
    ],
  },
  {
    title: 'V. Timeline (7 + 1 Weeks) (Phase 1)',
    content: [
      paragraph('<strong>Week 1:</strong> Backend foundation, architecture lock, auth scaffolding, PostgreSQL schema setup, vector pipeline scaffolding, and frontend base structure.'),
      paragraph('<strong>Week 2:</strong> Expert workflow and twin creation pipeline, including structured document ingestion, manual verification path, and voice-clarification ingestion path.'),
      paragraph('<strong>Week 3:</strong> Contextual search and deterministic ranking engine with ranked twin discovery API and initial frontend integration.'),
      paragraph('<strong>Week 4:</strong> Twin interaction through twin-scoped RAG chat, citation/confidence formatting, and token-gated access flows.'),
      paragraph('<strong>Week 5:</strong> Razorpay integration, webhook-driven ledger updates, API hardening, performance optimizations, and feature freeze.'),
      paragraph('<strong>Week 6:</strong> Expert-only Twin Playground (pre-publish), isolated execution context, prompt mode separation, ephemeral response handling, and usage isolation.'),
      paragraph('<strong>Week 7:</strong> Integration freeze, E2E stabilization, logging/monitoring validation, and pre-QA bug fixing.'),
      paragraph('<strong>Week 8:</strong> Full QA, edge-case testing, LLM consistency tuning, documentation, final demo, and handover.'),
    ],
  },
  {
    title: 'VI. PG-AGI Value Proposition',
    content: [
      paragraph('At PG-AGI, we envision a synergistic future where artificial intelligence and human intellect work together to build a more efficient world. We focus on practical, production-grade AI systems that help businesses operate smarter, faster, and more sustainably.'),
      paragraph('The team combines leadership, AI research, applied AI engineering, backend development, UI/UX, and program management to deliver full-stack AI products from architecture to production deployment.'),
      figure('clients-who-trust-us.png', 'Clients logos', ''),
    ],
  },
  {
    title: 'VII. Concluding Note',
    content: [
      paragraph('We value your feedback and collaboration and look forward to delivering a high-quality, customized solution aligned with your requirements.'),
    ],
  },
];

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const apply = args.has('--apply');

if (!dryRun && !apply) {
  console.error('Usage: node scripts/update-digital-twin-case-study.mjs --dry-run | --apply');
  process.exit(1);
}

function summarizeSections(sections = []) {
  return sections.map((section, index) => {
    const images = (section.content || []).filter((b) => b.type === 'image').map((b) => b.src);
    return {
      index: index + 1,
      title: section.title,
      blockCount: (section.content || []).length,
      imageCount: images.length,
      images,
    };
  });
}

function collectImagePaths(sections = []) {
  return (sections || [])
    .flatMap((section) => section.content || [])
    .filter((block) => block.type === 'image')
    .map((block) => block.src);
}

function validateImagePaths(paths) {
  return paths.map((src) => {
    const relative = src.startsWith('/') ? src.slice(1) : src;
    const fullPath = path.join(process.cwd(), 'public', relative.replace(/^assets\//, 'assets/'));
    return {
      src,
      exists: fs.existsSync(fullPath),
      fullPath,
    };
  });
}

function stableStringify(value) {
  return JSON.stringify(value);
}

const client = new MongoClient(MONGODB_URI);

try {
  await client.connect();
  const db = client.db();
  const collection = db.collection('caseStudies');

  const existing = await collection.findOne({ slug: TARGET_SLUG });
  if (!existing) {
    console.error(`Case study not found for slug: ${TARGET_SLUG}`);
    process.exit(1);
  }

  console.log(`Target slug: ${TARGET_SLUG}`);
  console.log(`Current title: ${existing.title}`);
  console.log(`Current section count: ${(existing.sections || []).length}`);
  console.log('--- Current section summary ---');
  console.table(summarizeSections(existing.sections || []));

  console.log('--- New section summary ---');
  console.table(summarizeSections(NEW_SECTIONS));

  const imagePaths = collectImagePaths(NEW_SECTIONS);
  console.log('--- Referenced image paths ---');
  imagePaths.forEach((src) => console.log(src));
  console.log('--- Asset existence check ---');
  console.table(validateImagePaths(imagePaths));

  if (dryRun && !apply) {
    console.log('Dry run complete. No database changes applied.');
    process.exit(0);
  }

  const sectionsUnchanged = stableStringify(existing.sections || []) === stableStringify(NEW_SECTIONS);

  if (sectionsUnchanged) {
    console.log('--- Update result ---');
    console.log('No-op: sections already match target payload (idempotent apply).');
  } else {
    const result = await collection.updateOne(
      { slug: TARGET_SLUG },
      {
        $set: {
          sections: NEW_SECTIONS,
          updatedAt: new Date(),
        },
      }
    );

    console.log('--- Update result ---');
    console.log(`matchedCount: ${result.matchedCount}`);
    console.log(`modifiedCount: ${result.modifiedCount}`);
  }

  const updated = await collection.findOne(
    { slug: TARGET_SLUG },
    { projection: { _id: 0, slug: 1, title: 1, sections: 1, updatedAt: 1, publishDate: 1, readTime: 1, coverImage: 1, author: 1 } }
  );

  console.log('--- Post-update verification ---');
  console.log(JSON.stringify({
    slug: updated.slug,
    title: updated.title,
    publishDate: updated.publishDate,
    readTime: updated.readTime,
    coverImage: updated.coverImage,
    author: updated.author,
    sectionCount: (updated.sections || []).length,
    sectionTitles: (updated.sections || []).map((s) => s.title),
    updatedAt: updated.updatedAt,
  }, null, 2));
} catch (error) {
  console.error('Failed to update Digital Twin case study:', error);
  process.exit(1);
} finally {
  await client.close();
}
