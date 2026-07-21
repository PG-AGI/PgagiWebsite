/**
 * Vertical landing pages (rendered by `src/app/expertise/[vertical]/page.tsx`).
 *
 * Each entry is one dedicated page reached from the "Explore this vertical"
 * cards on the home page. Content is driven from here so the layout components
 * (VerticalHero, VerticalIntro, …) stay reusable across verticals.
 *
 * NOTE (2026-07-20): ai-iot, ai-ml, ai-saas, and mobile-ai are built full-page,
 * desktop-first.
 */

export type VerticalIntro = {
  heading: string;
  body: string;
};

export type FeatureBullet = {
  /** Optional bold lead-in rendered before the text, e.g. "Predictive maintenance:". */
  lead?: string;
  text: string;
};

/** Keys for the illustrated diagrams that can slot into the "build" section. */
export type BuildDiagramKey =
  | 'device-cloud'
  | 'foundation-llm'
  | 'multi-tenant'
  | 'mobile-ai'
  | 'enterprise-isolated'
  | 'deployment-options'
  | 'governance-loop'
  | 'rag-architecture'
  | 'ai-orchestration';

/** Keys for the diagrams a wide `VerticalFeature` card can embed in place of/above its bullets. */
export type FeatureDiagramKey = 'rag-architecture' | 'ai-orchestration';

export type VerticalFeature = {
  /** Public path to the 3D icon, e.g. "/assets/verticals/ai-iot/collection.png". */
  icon: string;
  title: string;
  /** Optional one-line subtitle rendered under the title, above the bullets. */
  description?: string;
  /** Full-width card (spans both columns). */
  wide?: boolean;
  /** Illustrated diagram rendered above the bullets (bullets are optional when set). */
  diagram?: FeatureDiagramKey;
  bullets: FeatureBullet[];
};

export type UseCaseItem = {
  eyebrow: string;
  title: string;
  body: string;
  /** Public path to the icon; optional until the Figma asset is committed. */
  icon?: string;
};

export type VerticalUseCases = {
  heading: string;
  subtitle: string;
  items: UseCaseItem[];
};

export type Vertical = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** Hero headline, e.g. "AI + IoT". */
  heroTitle: string;
  heroDescription: string;
  /** Destination of the hero "View Case Study" button; omit to hide the button. */
  caseStudyHref?: string;
  intro: VerticalIntro;
  /** Illustrated diagram rendered between the intro and the feature cards, if any. */
  buildDiagram?: BuildDiagramKey;
  features: VerticalFeature[];
  /** Additional illustrated diagrams rendered after the feature cards, before use cases. */
  secondaryDiagrams?: BuildDiagramKey[];
  useCases: VerticalUseCases;
};

export const VERTICALS: Record<string, Vertical> = {
  'ai-iot': {
    slug: 'ai-iot',
    metaTitle: 'AI + IoT | PGAGI',
    metaDescription:
      'How we collect, process, and model data from connected devices and sensors — edge inference, real-time pipelines, and automated response.',
    heroTitle: 'AI + IoT',
    heroDescription:
      'This section describes how we collect, process, and model data from connected devices and sensors, and how model output is used to drive prediction, anomaly detection, and automated response.',
    // Clicking "View Case Study" opens the VOOK AI case study directly.
    caseStudyHref: '/case-study/vook-ai-wireless-microphone-companion-app',
    intro: {
      heading: 'Processing and modelling data from connected devices.',
      body: 'Connected devices produce a continuous stream of data, much of which is never used. We build the pipeline that collects it reliably, processes it in real time, and runs AI models on it, so that the system can identify patterns, anticipate failures before they occur, and automate the response. Where it is appropriate, inference is moved to the edge so that devices respond locally without a cloud round-trip, and the output is connected back into your business applications so that a prediction results in a work order, an alert, or an automated control action.',
    },
    buildDiagram: 'device-cloud',
    features: [
      {
        icon: '/assets/verticals/ai-iot/collection.png',
        title: 'Collection, pipelines & real-time monitoring',
        bullets: [
          { text: 'Device-to-cloud ingestion over MQTT, HTTP, and streaming (Kafka / Kinesis) with buffering for unreliable connectivity.' },
          { text: 'Sensor data pipelines: validation, normalization, time-series storage, and aggregation at scale.' },
          { text: 'Real-time device monitoring with live status, health, and throughput visibility.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-iot/prediction.png',
        title: 'Prediction, anomaly detection & automation',
        bullets: [
          { lead: 'Predictive maintenance:', text: 'forecasting wear and failure windows so service happens before breakdown, not after' },
          { lead: 'AI-based anomaly detection:', text: 'catching abnormal readings, drift, and rare events that fixed thresholds miss.' },
          { lead: 'Smart alerts & automation:', text: 'routing alerts to the right person and triggering automated control or workflow actions.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-iot/edge.png',
        title: 'Edge AI & architecture',
        wide: true,
        bullets: [
          { text: 'Edge inference on-device or on-gateway for instant reaction and reduced bandwidth/cloud cost.' },
          { text: 'Device-to-cloud architecture with secure provisioning, OTA-friendly design, and clear data contracts.' },
          { text: 'Dashboards & reporting for live and historical IoT data, plus integration into AI models and business apps.' },
        ],
      },
    ],
    useCases: {
      heading: 'Practical Use Cases',
      subtitle: 'Applied examples of complex systems we design and deploy.',
      items: [
        { eyebrow: 'MANUFACTURING', title: 'Predict failures on the line', body: 'Vibration and temperature trends forecast equipment failure windows; the system schedules maintenance and cuts unplanned downtime.', icon: '/assets/AixIOT/AixIOT-1.svg' },
        { eyebrow: 'FACILITIES / ENERGY', title: 'Anomaly detection on consumption', body: 'Models flag abnormal energy or water usage in real time and alert the right team before it becomes a cost or a fault.', icon: '/assets/AixIOT/AixIOT-2.svg' },
        { eyebrow: 'FLEET / LOGISTICS', title: 'Condition-based monitoring', body: 'Live device telemetry feeds dashboards and triggers automated actions when readings cross learned, not fixed, limits.', icon: '/assets/AixIOT/AixIOT-3.svg' },
        { eyebrow: 'OPERATIONS', title: 'Fewer eyes on screens', body: 'Smart alerting replaces constant manual monitoring — people are pulled in only when the system detects something worth attention.', icon: '/assets/AixIOT/AixIOT-4.svg' },
      ],
    },
  },
  'ai-ml': {
    slug: 'ai-ml',
    metaTitle: 'AI & Machine Learning | PGAGI',
    metaDescription:
      'LLM integration, retrieval, agents, memory, and orchestration — the AI engineering stack we design and deploy into production systems.',
    heroTitle: 'AI Engineering',
    heroDescription:
      'We design and build the full AI engineering stack — closed and open-source LLMs, retrieval and agent architectures, memory, tool execution, and orchestration — engineered into reliable, production-grade systems, not prototypes.',
    intro: {
      heading: 'Engineering the components that surround a language model.',
      body: 'A single model call rarely holds up against real data, real users, and edge cases. We engineer the surrounding system: model selection per task, a retrieval layer that grounds responses in your data, agents that perform actions through your tools, memory that persists across sessions, and orchestration that routes requests, retries on failure, and degrades gracefully under load. The resulting system integrates with your databases, CRMs, and internal workflows, and behaves predictably in production.',
    },
    buildDiagram: 'foundation-llm',
    features: [
      {
        icon: '/assets/AixML/AixML-2.png',
        title: 'Closed-source LLM integration',
        description: 'Selecting and integrating the appropriate commercial model for each task, behind a provider abstraction that avoids lock-in to any single vendor.',
        bullets: [
          { text: 'Integration with OpenAI (GPT family), Anthropic Claude, Google Gemini, Azure OpenAI, and Amazon Bedrock behind a single internal interface.' },
          { text: 'Provider abstraction so models can be swapped or A/B tested without rewriting application code.' },
          { text: 'Streaming responses, token and cost accounting, rate-limit handling, retries, and timeout control.' },
          { text: 'Structured output (JSON / schema-constrained) for responses that downstream code can rely on.' },
          { text: 'Prompt management, versioning, and evaluation so changes are measured, not guessed.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/function-calling.png',
        title: 'Open-source SLM & LLM implementation',
        description: 'When data must stay private, latency must be low, or cost must be controlled, we run open models on your own infrastructure.',
        bullets: [
          { text: 'Deployment of open models (e.g. Llama, Mistral, Qwen classes) and compact small language models (SLMs) for task-specific inference.' },
          { text: 'Fine-tuning and parameter-efficient tuning (LoRA/QLoRA) on domain data; instruction tuning for narrow tasks.' },
          { text: 'Serving and optimization with vLLM, Ollama, and quantization (GGUF / AWQ / INT8) to cut memory and cost.' },
          { text: 'Self-hosted model hosting with autoscaling, GPU cost management, and latency budgets defined up front.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/custom-ml.png',
        title: 'Open-source & custom machine-learning models',
        description: 'For problems where classical or deep-learning models outperform LLMs on accuracy, cost, or latency, we build and train them directly.',
        bullets: [
          { lead: 'Forecasting & time-series:', text: 'LSTM, GRU, and gradient-boosted models for demand, load, and trend prediction.' },
          { lead: 'Classification & prediction:', text: 'churn prediction, risk scoring, lead scoring, fraud and quality classification.' },
          { lead: 'Recommendation:', text: 'collaborative-filtering and embedding-based recommenders for products, content, and actions.' },
          { lead: 'Custom training end-to-end:', text: 'data prep, feature engineering, training, evaluation, and deployment as a served endpoint.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/rag.png',
        title: 'RAG architecture',
        description: 'Grounding responses in your documents and data so that output is accurate, current, and traceable to its source.',
        bullets: [
          { lead: 'Simple → advanced RAG:', text: 'chunking, embeddings, retrieval, re-ranking, query rewriting, and citation of sources.' },
          { lead: 'Hybrid search:', text: 'combining semantic (vector) and keyword (BM25) retrieval for precision on names, codes, and exact terms.' },
          { lead: 'Multi-modal RAG:', text: 'retrieval over text, tables, PDFs, and images for document-heavy workflows.' },
          { lead: 'Vector databases:', text: 'pgvector, Pinecone, Qdrant, Weaviate, Milvus — chosen to fit scale and infra.' },
          { lead: 'Document intelligence & enterprise knowledge systems:', text: 'ingest, parse, and keep large internal corpora searchable and access-controlled.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/agents.png',
        title: 'AI agents',
        description: 'Systems that plan, decide, and act through defined tools, with checkpoints and guardrails applied at each step.',
        bullets: [
          { text: 'Agentic workflows and autonomous agents that complete multi-step tasks with checkpoints and guardrails.' },
          { lead: 'Multi-agent systems:', text: 'specialized agents (researcher, planner, executor, reviewer) coordinated by an orchestrator.' },
          { text: 'Task-specific & tool-using agents built on frameworks such as LangGraph, LangChain, and the OpenAI/Anthropic SDKs.' },
          { text: 'Human-in-the-loop approval gates for actions that touch money, customers, or production data.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/memory.png',
        title: 'Agent memory systems',
        description: 'Persistent memory that allows an assistant to retain context across sessions and operate with knowledge of the user and the organisation.',
        bullets: [
          { text: 'Short-term (working context) and long-term memory persisted in a vector + relational store.' },
          { lead: 'Contextual, user, and business memory:', text: 'per-user preferences, account history, and org-level knowledge kept separate and access controlled.' },
          { lead: 'Procedural memory:', text: 'remembering how a task was done so it can be repeated reliably.' },
          { lead: 'Retrieval logic:', text: 'deciding what to recall, when, and how much — with summarization to control context cost.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/function-calling.png',
        title: 'Function calling & tool execution',
        description: 'The layer through which a model performs actions in your systems, executed under validation and access control.',
        bullets: [
          { text: 'LLMs trigger APIs, backend functions, and database queries through validated, schema-defined tools.' },
          { text: 'Actions across CRM (create/update records), calendar (schedule, reschedule), and email (draft, send, follow up).' },
          { text: 'Model Context Protocol (MCP) and custom tool servers to expose internal systems safely to agents.' },
          { text: 'Validation, permission checks, and audit logging on every action — so automation stays accountable.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/closed-llm.png',
        title: 'AI orchestration',
        description: 'The production control layer that routes requests to the appropriate model and path and maintains reliability under failure conditions.',
        bullets: [
          { lead: 'Model routing:', text: 'cheap/fast model for easy requests, frontier model for hard ones — by cost and confidence.' },
          { text: 'Multi-step reasoning flows and workflow routing across agents, tools, and retrieval.' },
          { text: 'Background jobs & queues (Celery, BullMQ, SQS) for long-running and async AI tasks.' },
          { lead: 'Fallback logic:', text: 'provider failover, retries with backoff, and graceful degradation when a model is down.' },
          { text: 'Tracing, evals, and observability (LangSmith, OpenTelemetry) so quality and cost are visible in production.' },
        ],
      },
    ],
    secondaryDiagrams: ['rag-architecture', 'ai-orchestration'],
    useCases: {
      heading: 'Practical Use Cases',
      subtitle: 'Applied examples of complex systems we design and deploy.',
      items: [
        { eyebrow: 'SUPPORT', title: 'Grounded support assistant', body: 'Answers from your docs and account data with citations, and can take actions — refunds, ticket updates, escalations — through your backend, with approval gates on sensitive steps.', icon: '/assets/AixML/AixML-1.png' },
        { eyebrow: 'OPERATIONS', title: 'Internal knowledge + action agent', body: 'Staff ask in plain language; the agent retrieves from policies and systems, then updates the CRM, schedules follow-ups, and drafts emails — logging every action.', icon: '/assets/verticals/ai-ml/open-llm.png' },
        { eyebrow: 'DOCUMENTS', title: 'Document intelligence at scale', body: 'Ingest contracts, reports, or claims; extract structured fields, answer questions across the corpus, and route exceptions to a human.', icon: '/assets/AixML/AixML-3.png' },
        { eyebrow: 'FORECASTING', title: 'Prediction wired into workflow', body: 'A custom forecasting/classification model scores records continuously, and an agent acts on the score — flagging churn risk or triggering a reorder.', icon: '/assets/AixML/AixML-4.png' },
      ],
    },
  },
  'ai-saas': {
    slug: 'ai-saas',
    metaTitle: 'AI SaaS Platforms | PGAGI',
    metaDescription:
      'Multi-tenant architecture, secure isolation, usage-based billing, and the production infrastructure required to commercialize AI-powered SaaS products.',
    heroTitle: 'AI SaaS Platforms',
    heroDescription:
      'We build production-ready, multi-tenant SaaS platforms with integrated AI capabilities — engineered for security, scale, cost control, and the infrastructure required to commercialize AI-powered products.',
    intro: {
      heading: 'Architecting multi-tenant platforms for production workloads.',
      body: 'We engineer the full SaaS layer AI product companies need to commercialize: multi-tenant architecture, secure isolation, usage-based billing, and the infrastructure to scale reliably. Every layer — tenancy, access, backend, billing — built to production standards, not a demo.',
    },
    buildDiagram: 'multi-tenant',
    features: [
      {
        icon: '/assets/AixMobile/First.png',
        title: 'Tenancy, access & security',
        bullets: [
          { text: 'Multi-tenant architecture with logical or physical isolation — schema-per-tenant, DB-per-tenant, or shared with row-level security.' },
          { text: 'Role-based access control (RBAC) — org, team, and user-level permission hierarchies.' },
          { text: 'SSO / SAML, SCIM provisioning, and audit logs for enterprise buyers.' },
        ],
      },
      {
        icon: '/assets/AixMobile/Second.png',
        title: 'Backend & real-time systems',
        bullets: [
          { text: 'Scalable backend with API-first design, built for concurrent multi-tenant load.' },
          { text: 'Webhooks & real-time messaging — WebSockets, SSE, or event streams for live product updates.' },
          { text: 'Background job processing — queues for async, long-running, or scheduled tasks.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-saas/backend-realtime.png',
        title: 'Billing, dashboards & operations',
        wide: true,
        bullets: [
          { text: 'Subscription & usage-based billing (Stripe) — metering, invoicing, plan tiers.' },
          { text: 'Admin & analytics dashboards — tenant usage, health metrics, revenue tracking.' },
          { text: 'Infrastructure, observability, logging & alerting — CI/CD, containers, autoscaling, and centralized log output.' },
        ],
      },
    ],
    useCases: {
      heading: 'Practical Use Cases',
      subtitle: 'Applied examples of complex systems we design and deploy.',
      items: [
        { eyebrow: 'B2B SAAS', title: 'New product from scratch', body: 'Full platform build — tenancy, auth, billing, dashboards, infra — ready to onboard paying customers, not a prototype.', icon: '/assets/verticals/ai-saas/billing-ops.png' },
        { eyebrow: 'AI SAAS', title: 'AI product with usage billing', body: 'AI features metered per use, with quotas, plan limits, and accurate usage-based charges wired into the billing system.', icon: '/assets/AixSaaS/AixSaaS-2.png' },
        { eyebrow: 'SCALE-UP', title: 'Re-architect for growth', body: 'Move a strained monolith toward services, queues, and caching so it holds up as users and data grow.', icon: '/assets/AixSaaS/AixSaaS-3.png' },
        { eyebrow: 'ENTERPRISE', title: 'Security & access requirements', body: 'RBAC, SSO, audit logging, and tenant isolation built to clear enterprise procurement and security review.', icon: '/assets/AixSaaS/AixSaaS-4.png' },
      ],
    },
  },
  'mobile-ai': {
    slug: 'mobile-ai',
    metaTitle: 'Mobile + AI | PGAGI',
    metaDescription:
      'Native and cross-platform mobile products with an integrated AI layer — on-device inference, backend, and app store delivery, engineered end to end.',
    heroTitle: 'Mobile + AI',
    heroDescription:
      'We build complete mobile products spanning the application, backend, AI layer, and deployment — native or cross-platform, with on-device and cloud AI wired in from the start, not bolted on after launch.',
    intro: {
      heading: 'Building complete mobile products with an integrated AI layer.',
      body: 'A mobile application is one layer of a complete product. We build the full set: native or cross-platform applications, the backend they communicate with, the AI layer that powers chat, voice, and document features, the data model, the integrations, and the deployment pipeline that delivers builds to the App Store and Play Store. Because we build the backend and AI layers as well, the application is designed end to end for performance, offline behaviour, and scale, rather than functioning as a thin client over an external API.',
    },
    buildDiagram: 'mobile-ai',
    features: [
      {
        icon: '/assets/verticals/mobile-ai/app-development.png',
        title: 'App development',
        bullets: [
          { text: 'Native (Swift / Kotlin) and Flutter cross-platform development for iOS and Android from one codebase where it fits.' },
          { text: 'Backend-connected apps designed around the API, not bolted onto it — with clean state, caching, and error handling.' },
          { lead: 'Performance & scalability:', text: 'smooth UI, efficient networking, and architecture that holds up as the app grows.' },
        ],
      },
      {
        icon: '/assets/verticals/mobile-ai/ai-in-app.png',
        title: 'AI inside the app',
        bullets: [
          { text: 'AI chat interfaces and voice AI (speech-to-text, text-to-speech, voice assistants) running inside the app.' },
          { lead: 'Image, document & text processing:', text: 'scan, extract, summarize, and act on content on-device or via the backend.' },
          { text: 'AI-powered workflows that connect app actions to the same RAG, agents, and tools described in section 01.' },
        ],
      },
      {
        icon: '/assets/verticals/mobile-ai/platform-delivery.png',
        title: 'Platform, integration & delivery',
        wide: true,
        bullets: [
          { text: 'Mobile authentication (social / OTP / biometric), push notifications, and offline-first behavior where the use case needs it.' },
          { text: 'API integration with your systems and third-party services, plus secure handling of tokens and data.' },
          { lead: 'App store deployment:', text: 'build pipelines, signing, store submission, and release management for both platforms.' },
        ],
      },
    ],
    useCases: {
      heading: 'Practical Use Cases',
      subtitle: 'Applied examples of complex systems we design and deploy.',
      items: [
        { eyebrow: 'AI ASSISTANT APP', title: 'Chat + voice product', body: 'A mobile assistant with AI chat and voice, grounded in your data, backed by a real backend and database — shipped to both stores.', icon: '/assets/AixMobile/AixMobile-1.png' },
        { eyebrow: 'FIELD / ON-SITE', title: 'Offline-first capture', body: 'Works without signal, syncs when back online, and runs document/image AI on captured content.', icon: '/assets/AixMobile/AixMobile-2.png' },
        { eyebrow: 'CONSUMER', title: 'AI feature inside an existing app', body: 'Add an AI workflow — summarize, scan, recommend — into a live app without rebuilding it.', icon: '/assets/AixMobile/AixMobile-3.png' },
        { eyebrow: 'CROSS-PLATFORM', title: 'One Flutter codebase, two stores', body: 'Ship iOS and Android together with shared logic, native performance where it counts, and a single release pipeline.', icon: '/assets/AixMobile/AixMobile-4.png' },
      ],
    },
  },
  'enterprise-ai': {
    slug: 'enterprise-ai',
    metaTitle: 'Enterprise AI | PGAGI',
    metaDescription:
      'AI systems that run entirely inside your environment — self-hosted models, CPU-optimized inference, and a boundary designed so data never leaves your control.',
    heroTitle: 'Enterprise AI',
    heroDescription:
      'We deploy AI capabilities entirely within your own infrastructure — for organizations that require full control over data and models, whether the driver is security, compliance, or IP. On-premise, private cloud, or fully air-gapped, with the same production discipline as any cloud deployment.',
    intro: {
      heading: 'Deploying AI entirely within your environment.',
      body: 'For organizations that can’t send data outside their walls — regulated industries, defense, and enterprises where data sovereignty is non-negotiable — we deploy models, retrieval, and agents entirely within your infrastructure: on-prem, private cloud, or air-gapped, with the same production discipline as any cloud deployment.',
    },
    buildDiagram: 'enterprise-isolated',
    features: [
      {
        icon: '/assets/verticals/enterprise-ai/sovereignty.png',
        title: 'Isolation & deployment topology',
        description: 'The system is deployed inside the organisation’s boundary and has no path to send data outside it.',
        bullets: [
          { text: 'On-premise, private VPC / single-tenant cloud, or fully air-gapped deployment, matched to the organisation’s constraints.' },
          { text: 'No calls to external model providers: all inference is served from models hosted inside the boundary.' },
          { text: 'Network egress controls, private endpoints, and VPC isolation so that the system has no route to transmit data externally.' },
          { text: 'Single-tenant by default — no infrastructure shared with other customers.' },
        ],
      },
      {
        icon: '/assets/AixEnterprise/AixEnterprise-3.png',
        title: 'Self-hosted small language models',
        description: 'Open models selected, hosted, and tuned inside the boundary, with weights held on the organisation’s own storage.',
        bullets: [
          { text: 'Selection and hosting of open SLMs (e.g. Llama, Mistral, Qwen, Phi, Gemma classes) sized to the task.' },
          { text: 'Fine-tuning / LoRA on the organisation’s own data, performed inside the boundary; training data is not shared externally and is not used by any third party.' },
          { text: 'Internal model registry and versioning; model weights stored on the organisation’s own infrastructure.' },
          { text: 'Offline / air-gapped model updates delivered through the organisation’s own change-management process.' },
        ],
      },
      {
        icon: '/assets/verticals/enterprise-ai/cpu-inference.png',
        title: 'CPU-optimised inference',
        description: 'Inference tuned to run on standard server CPUs, removing the requirement for dedicated GPU hardware.',
        bullets: [
          { text: 'Quantization (INT8 / INT4; GGUF / AWQ / GPTQ) to reduce memory footprint and enable CPU execution.' },
          { text: 'Serving via CPU-optimised runtimes — llama.cpp, ONNX Runtime, OpenVINO — tuned to the available hardware.' },
          { text: 'Right-sized to existing server hardware, so no dedicated GPU fleet is required; GPU is used only where already available and justified.' },
          { text: 'Batching, caching, and concurrency tuning to meet defined latency and throughput budgets.' },
        ],
      },
      {
        icon: '/assets/AixEnterprise/AixEnterprise-1.png',
        title: 'Data governance & residency',
        description: 'Data remains within the defined jurisdiction and boundary, under the organisation’s own controls.',
        bullets: [
          { text: 'Data residency enforced by deployment location: data does not leave the defined jurisdiction.' },
          { text: 'Encryption in transit and at rest, with secrets held in the organisation’s own key management.' },
          { lead: 'PII handling:', text: 'redaction, minimisation, and retention controls defined per policy.' },
          { text: 'No telemetry or phone-home: the system does not transmit prompts, outputs, or usage data externally.' },
        ],
      },
      {
        icon: '/assets/verticals/enterprise-ai/access-audit.png',
        title: 'Access control & audit',
        description: 'Every request is authenticated, authorised, and recorded; users reach only what they are permitted to.',
        bullets: [
          { text: 'Authentication through the organisation’s SSO (SAML / OIDC).' },
          { text: 'Role-based and attribute-based access control (RBAC / ABAC) over data, tools, and model actions.' },
          { lead: 'Permission-aware retrieval:', text: 'a user retrieves only the documents they are authorised to see.' },
          { text: 'Full audit logging of prompts, retrievals, tool calls, and actions, retained per policy and available for review; tamper-evident where required.' },
          { text: 'Human approval gates on actions that modify records or systems.' },
        ],
      },
      {
        icon: '/assets/verticals/enterprise-ai/air-gapped.png',
        title: 'Compliance alignment',
        description: 'The architecture is built to support enterprise security review and audit.',
        bullets: [
          { text: 'Designed to align with SOC 2 and ISO 27001 control expectations, and to support GDPR / HIPAA-style data-handling requirements.' },
          { text: 'Documented controls, data-flow diagrams, and access models provided to support security review.' },
        ],
      },
    ],
    secondaryDiagrams: ['deployment-options', 'governance-loop'],
    useCases: {
      heading: 'Practical Use Cases',
      subtitle: 'Applied examples of complex systems we design and deploy.',
      items: [
        { eyebrow: 'FINANCIAL SERVICES', title: 'Customer data stays in the bank', body: 'Models process customer and transaction data inside the institution’s environment; nothing is sent to an external API, meeting regulatory and residency requirements.', icon: '/assets/AixEnterprise/AixEnterprise-2.png' },
        { eyebrow: 'HEALTHCARE', title: 'PHI processed on-premise', body: 'Patient data is analysed by self-hosted models within the hospital or provider network, with no patient information leaving the boundary.', icon: '/assets/verticals/enterprise-ai/on-prem-cloud.png' },
        { eyebrow: 'LEGAL', title: 'Privileged documents, in-house', body: 'Confidential and privileged material is retrieved and analysed inside the firm’s own systems, under permission-aware access and full audit.', icon: '/assets/AixEnterprise/AixEnterprise-4.png' },
        { eyebrow: 'GOVERNMENT / DEFENCE', title: 'Fully air-gapped deployment', body: 'The system runs with no external connectivity at all; models, data, and inference operate entirely offline within a controlled network.', icon: '/assets/verticals/enterprise-ai/compliance-residency.png' },
      ],
    },
  },
};

export function getVertical(slug: string): Vertical | undefined {
  return VERTICALS[slug];
}

export function getAllVerticalSlugs(): string[] {
  return Object.keys(VERTICALS);
}
