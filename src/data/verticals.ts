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
export type BuildDiagramKey = 'device-cloud' | 'foundation-llm' | 'multi-tenant' | 'mobile-ai';

/** Keys for the diagrams a wide `VerticalFeature` card can embed in place of/above its bullets. */
export type FeatureDiagramKey = 'rag-architecture' | 'ai-orchestration';

export type VerticalFeature = {
  /** Public path to the 3D icon, e.g. "/assets/verticals/ai-iot/collection.png". */
  icon: string;
  title: string;
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
  /** Destination of the hero "View Case Study" button. */
  caseStudyHref: string;
  intro: VerticalIntro;
  /** Illustrated diagram rendered between the intro and the feature cards, if any. */
  buildDiagram?: BuildDiagramKey;
  features: VerticalFeature[];
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
    caseStudyHref: '/case-study/legalspendgpt-invoice-intelligence',
    intro: {
      heading: 'Engineering the components that surround a language model.',
      body: 'A single language-model call is rarely the product. What matters is what surrounds it: retrieval that grounds it in your data, tools it can call to take action, memory that carries context across turns and sessions, and an orchestration layer that plans, routes, and recovers when a step fails. We build each of those components and wire them into one dependable system — closed or open-source model, RAG pipeline, agents, memory, and orchestration — engineered for production, not just a demo.',
    },
    buildDiagram: 'foundation-llm',
    features: [
      {
        icon: '/assets/verticals/ai-ml/closed-llm.svg',
        title: 'Closed-source LLM integration',
        bullets: [
          { text: "Integration with OpenAI's GPT family, Anthropic Claude, Google Gemini, Azure OpenAI, and AWS Bedrock." },
          { text: 'Provider-agnostic abstraction layer with automatic fallback and request routing across models.' },
          { text: 'Streaming responses, token/cost optimization, and rate-limit handling built into every integration.' },
          { text: 'Structured output (JSON mode) and native function/tool-calling support.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/open-llm.svg',
        title: 'Open-source LLM implementation',
        bullets: [
          { text: 'Self-hosted open-source LLMs — Mistral, Llama, Code Llama, Falcon — with GPU/CPU-optimized serving.' },
          { text: 'Fine-tuning and instruction-tuning pipelines for domain-specific tasks.' },
          { text: 'Quantization and inference optimization (GGUF, GPTQ, vLLM) for cost-efficient scaling.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/custom-ml.svg',
        title: 'Open-source & custom machine-learning models',
        bullets: [
          { text: 'Classical ML models (scikit-learn, XGBoost) for structured and tabular data.' },
          { text: 'Deep learning models (PyTorch, TensorFlow) for vision, NLP, and forecasting.' },
          { text: 'Custom training pipelines with reproducible experiments and model versioning.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/rag.svg',
        title: 'RAG architecture',
        wide: true,
        diagram: 'rag-architecture',
        bullets: [],
      },
      {
        icon: '/assets/verticals/ai-ml/agents.svg',
        title: 'AI agents',
        bullets: [
          { text: 'Agentic RAG for multi-step, context-aware retrieval and reasoning.' },
          { text: 'Multi-agent systems where agents coordinate, delegate, and specialize.' },
          { text: 'Tool-specific and orchestrator agents for complex workflow automation.' },
          { text: 'Custom reasoning frameworks — ReAct, Chain-of-Thought, Plan-and-Execute.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/memory.svg',
        title: 'Agent memory systems',
        bullets: [
          { text: 'Short-term memory for conversation context within a session.' },
          { text: 'Long-term memory across sessions using vector or graph-based storage.' },
          { text: 'Procedural memory for learned workflows and task patterns.' },
          { text: 'Retrieval-augmented memory that grounds responses in stored knowledge.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/function-calling.svg',
        title: 'Function calling & tool execution',
        bullets: [
          { text: 'LLM-triggered API calls, database queries, and external service integration.' },
          { text: 'Structured function-calling schemas with validation and error handling.' },
          { text: 'Multi-tool orchestration where a single LLM call invokes multiple tools.' },
          { text: 'Sandboxed code execution and safety-checked tool permissions.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-ml/orchestration.svg',
        title: 'AI orchestration',
        wide: true,
        diagram: 'ai-orchestration',
        bullets: [
          { text: 'Multi-step workflow orchestration (LangChain, LlamaIndex, custom orchestrators).' },
          { text: 'Conditional routing and fallback logic across models and tools.' },
          { text: 'Background job queues and event-driven pipelines for async AI tasks.' },
          { text: 'State management and checkpointing for long-running agent workflows.' },
        ],
      },
    ],
    useCases: {
      heading: 'Practical Use Cases',
      subtitle: 'Applied examples of complex systems we design and deploy.',
      items: [
        { eyebrow: 'SUPPORT', title: 'Grounded support assistant', body: 'RAG-grounded chat answers customer questions from your own docs and tickets, with citations, and knows when to say it doesn’t know instead of guessing.', icon: '/assets/AixML/AixML-1.svg' },
        { eyebrow: 'KNOWLEDGE OPS', title: 'Internal knowledge + action agent', body: 'An internal agent retrieves from company knowledge and takes the next action directly — filing a ticket, updating a record, drafting a reply — instead of just answering.', icon: '/assets/AixML/AixML-2.svg' },
        { eyebrow: 'DOCUMENT AI', title: 'Document intelligence at scale', body: 'Contracts, invoices, and forms are parsed, extracted, and validated automatically, turning unstructured paperwork into structured, queryable data.', icon: '/assets/AixML/AixML-3.svg' },
        { eyebrow: 'FORECASTING', title: 'Prediction & workflow automation', body: 'Custom ML models forecast outcomes and feed the result straight into an automated workflow, so a prediction becomes an action, not just a number on a dashboard.', icon: '/assets/AixML/AixML-4.svg' },
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
    caseStudyHref: '/case-study/how-we-built-an-ai-saas-that-helps-doctors-share-healthcare-awareness-on-linkedin',
    intro: {
      heading: 'Architecting multi-tenant platforms for production workloads.',
      body: 'We engineer the full SaaS layer AI product companies need to commercialize: multi-tenant architecture, secure isolation, usage-based billing, and the infrastructure to scale reliably. Every layer — tenancy, access, backend, billing — built to production standards, not a demo.',
    },
    buildDiagram: 'multi-tenant',
    features: [
      {
        icon: '/assets/verticals/ai-saas/tenancy-security.svg',
        title: 'Tenancy, access & security',
        bullets: [
          { text: 'Multi-tenant architecture with logical or physical isolation — schema-per-tenant, DB-per-tenant, or shared with row-level security.' },
          { text: 'Role-based access control (RBAC) — org, team, and user-level permission hierarchies.' },
          { text: 'SSO / SAML, SCIM provisioning, and audit logs for enterprise buyers.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-saas/backend-realtime.svg',
        title: 'Backend & real-time systems',
        bullets: [
          { text: 'Scalable backend with API-first design, built for concurrent multi-tenant load.' },
          { text: 'Webhooks & real-time messaging — WebSockets, SSE, or event streams for live product updates.' },
          { text: 'Background job processing — queues for async, long-running, or scheduled tasks.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-saas/billing-ops.svg',
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
        { eyebrow: 'GREENFIELD', title: 'New product from scratch', body: 'Fully multi-tenant — secure auth, billing, dashboards, data — ready to onboard paying customers, not just a prototype.', icon: '/assets/AixSaaS/AixSaaS-1.svg' },
        { eyebrow: 'MONETIZATION', title: 'AI product with usage-based billing', body: 'A feature that consumes tokens, compute, or usage needs metered billing, tracked and monetized from day one.', icon: '/assets/AixSaaS/AixSaaS-2.svg' },
        { eyebrow: 'SCALING', title: 'Re-architect for growth', body: 'Move a product from a single-tenant, single-region setup to a multi-tenant, multi-region architecture that scales.', icon: '/assets/AixSaaS/AixSaaS-3.svg' },
        { eyebrow: 'ENTERPRISE', title: 'Security & access requirements', body: 'SSO/SCIM, org-level permissions, and enterprise-grade audit trails so the product clears enterprise procurement checklists.', icon: '/assets/AixSaaS/AixSaaS-4.svg' },
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
    caseStudyHref: '/case-study/brainify-edtech-platform',
    intro: {
      heading: 'Building complete mobile products with an integrated AI layer.',
      body: 'A mobile-first product is more than an app shell around an API. We build the full stack — native or cross-platform UI, an AI layer for on-device and cloud inference, a backend that keeps sync and offline state consistent, and the release pipeline that ships and monitors it in the app stores.',
    },
    buildDiagram: 'mobile-ai',
    features: [
      {
        icon: '/assets/verticals/mobile-ai/app-development.svg',
        title: 'App development',
        bullets: [
          { text: 'Native (Swift, Kotlin) and cross-platform (React Native, Flutter) mobile app development.' },
          { text: 'Backend-connected app builds with real-time sync, offline support, and push notifications.' },
          { text: 'Performance-first, scalable UI for smooth AI feature integration on-device.' },
        ],
      },
      {
        icon: '/assets/verticals/mobile-ai/ai-in-app.svg',
        title: 'AI inside the app',
        bullets: [
          { text: 'Chat / voice interfaces and AI agents built directly into the app — not just a backend API.' },
          { text: 'Image, document & data scanning — scan receipts, documents, or photos and extract structured data.' },
          { text: 'AI-powered notifications — smart, personalized push notifications, not just generic alerts.' },
        ],
      },
      {
        icon: '/assets/verticals/mobile-ai/platform-delivery.svg',
        title: 'Platform, integration & delivery',
        wide: true,
        bullets: [
          { text: 'Multi-platform integration — CRM, calendars, payment platforms, and other 3rd-party services.' },
          { text: 'API integrations with payment, messaging, and other services, plus secure handling of user data.' },
          { text: 'App store deployment — App Store / Play Store listing, review submission, and ongoing app health monitoring.' },
        ],
      },
    ],
    useCases: {
      heading: 'Practical Use Cases',
      subtitle: 'Applied examples of complex systems we design and deploy.',
      items: [
        { eyebrow: 'CONVERSATIONAL', title: 'Chat + voice product', body: 'A mobile-first assistant with chat and voice interfaces, generative on-device or cloud AI, and a UI built for conversation.', icon: '/assets/AixMobile/AixMobile-1.svg' },
        { eyebrow: 'FIELD OPS', title: 'Offline-first capture', body: 'Data capture that works with no connectivity and syncs cleanly the moment the device is back online, without losing a record.', icon: '/assets/AixMobile/AixMobile-2.svg' },
        { eyebrow: 'RETROFIT', title: 'AI features inside an existing app', body: 'Add on-device or cloud AI — chat, scanning, personalization — into an existing app, without a rewrite of the codebase.', icon: '/assets/AixMobile/AixMobile-3.svg' },
        { eyebrow: 'CROSS-PLATFORM', title: 'One Flutter codebase, two stores', body: 'One codebase shipped to iOS and Android alike, with shared logic, native performance, and one release pipeline to maintain.', icon: '/assets/AixMobile/AixMobile-4.svg' },
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
