export type CaseStudyMeta = {
  techStack: string[];
  metrics: { value: string; label: string }[];
  highlight: string;
  liveUrl?: string;
  appStoreUrl?: string;
  tags: string[];
  category: string;
  // Overrides the primary CTA's label (default: "View case study").
  ctaLabel?: string;
  // Optional wide banner (750x142) rendered under the description, above the
  // tech-stack row. Only this card uses it — everyone else keeps text-only.
  stripImage?: string;
};

const caseStudyMeta: Record<string, CaseStudyMeta> = {

  // ── Already-existing entries ────────────────────────────────────────────
  'skillina-talent-marketplace': {
    techStack: ['Calendar API', 'Google OAuth', 'Assessment API', 'LinkedIn OAuth', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://skillina.ai/',
    tags: ['Live Products'],
    category: 'HRTech/AI/ML',
  },
  'ai-mobile-doc': {
    techStack: ['MongoDB Atlas ', 'FastAPI', ' Redis', 'Google Gemini 2.0 Flash', '+3'],
    metrics: [
      { value: 'Coming soon', label: 'User Conversions' },
      { value: 'Coming soon', label: 'User Retention' },
    ],
    highlight: 'Currently in Testing Phase',
    tags: [],
    category: 'Healthcare/AI/ML',
  },
  'brainify-edtech-platform': {
    techStack: ['React Native', 'FastAPI', 'PostgreSQL', 'LLM APIs + LangChain', '+3'],
    metrics: [
      { value: '85%', label: 'User Conversions' },
      { value: '60%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 20K users in 4 months',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.brainify.app&hl=en',
    tags: ['Live Products'],
    category: 'EdTech/AI/ML',
  },
  'aimi-brain-real-time-financial-intelligence': {
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'WebSockets', '+3'],
    metrics: [
      { value: '65%', label: 'User Conversions' },
      { value: '35%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 20M Impressions in 30 Days',
    liveUrl: 'https://aim-cube.com',
    tags: ['Live Products', 'Research'],
    category: 'FinTech/AI/ML',
  },
  'ai-ecommerce-arbitrage-platform': {
    techStack: ['Zyte API', 'FastAPI', 'PostgreSQL', 'Docker', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: '85% of Business Processes Automated',
    tags: ['Custom Build'],
    category: 'E-commerce/AI/ML',
  },
  'legalspendgpt-invoice-intelligence': {
    techStack: ['Next.js', 'FastAPI', 'Azure OpenAI', 'Redis Streams', '+3'],
    metrics: [
      { value: '75%', label: 'Time Saved' },
      { value: '97%', label: 'Accuracy' },
    ],
    highlight: '',
    tags: ['Research', 'Custom Build'],
    category: 'LegalTech/AI/ML',
  },
  'mirror-me-ai-virtual-try-on': {
    techStack: ['React Native', 'FastAPI', 'GPT-4o / Analytics', 'DensePose / MediaPipe', '+3'],
    metrics: [
      { value: '45%', label: 'User Conversions' },
      { value: '72%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 5K Downloads in 60 Days',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.pgagi.mirror_me.beta&hl=en',
    tags: ['UI/UX', 'Research'],
    category: 'E-commerce/AI/ML',
  },
  'two-point-correlation-function-spatial-clustering': {
    techStack: ['Python', 'pandas', 'Matplotlib', 'Pair counting', '+3'],
    metrics: [],
    highlight: '',
    ctaLabel: 'View Research',
    tags: ['Research'],
    category: 'Research/Science',
  },
  'cosmological-model-parameter-extraction': {
    techStack: ['NumPy ', 'Matplotlib', 'Python', 'Lambda-CDM model', '+3'],
    metrics: [],
    highlight: '',
    ctaLabel: 'View Research',
    tags: ['Research'],
    category: 'Research/Science',
  },

  // ── MongoDB case studies ────────────────────────────────────────────────
  'toingg': {
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', '+2'],
    metrics: [
      { value: '40%', label: 'Campaign ROI' },
      { value: '3x', label: 'Outreach Scale' },
    ],
    highlight: 'Automated voice & messaging campaigns shipped end-to-end',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },
  'cracked-ai': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://cracked.ai/',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },
  'email-love': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://emaillove.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },
  'nuaiy': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://app.nuaiy.com/',
    tags: ['Live Products', 'UI/UX'],
    category: 'SocialTech/AI/ML',
  },
  'social-jet': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://social-jet.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },
  'jove ': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'Custom Build'],
    category: 'HRTech/AI/ML',
  },
  'sayyes-ai': {
    techStack: ['Flutter', 'FastAPI', 'Google Places API', 'Google Cloud', '+2'],
    metrics: [
      { value: '45%', label: 'Planning Time Saved' },
      { value: '87%', label: 'Personalization' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'UI/UX'],
    category: 'SocialTech/AI/ML',
  },
  'ai-to-md': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'Healthcare/AI/ML',
  },
  'workaptix': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://workaptix.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'HRTech/AI/ML',
  },
  'onchain-toolkit': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'FinTech/AI/ML',
  },
  'onchain-toolkit-ai-analysis-platform': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'FinTech/AI/ML',
  },
  'vook-ai-wireless-microphone-companion-app': {
    techStack: ['Flutter', 'Kotlin', 'Python', 'Swift', '+3'],
    metrics: [
      { value: '75%', label: 'User Conversions' },
      { value: '55%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 500+ Users Onboarded in 30 Days',
    liveUrl: 'https://vook.in/',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'IoT/AI/ML',
  },
  'fomo': {
    techStack: ['AI Agents', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '76%', label: 'User Conversions' },
      { value: '45%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K+ Users Onboarded in 7 Days',
    liveUrl: 'https://fomo.com',
    tags: ['Live Products'],
    category: 'MarTech/AI/ML',
  },
  'linkedin-ai': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'Healthcare/AI/ML',
  },
  'legalgpt': {
    techStack: ['Next.js', 'OpenAI', 'FastAPI', 'React', '+2'],
    metrics: [
      { value: '$24.8M', label: 'Spend Analysed' },
      { value: '7.5%', label: 'Cost Overrun Flagged' },
    ],
    highlight: '$24.8M legal spend analysed with AI invoice intelligence',
    tags: ['Research', 'Custom Build'],
    category: 'LegalTech/AI/ML',
  },
  'how-we-built-an-ai-saas-that-helps-doctors-share-healthcare-awareness-on-linkedin': {
    techStack: ['Speech-to-Text AI ', 'NLP', 'Content Optimization Engine', 'AI-Powered Scheduler'],
    metrics: [
      { value: '32%', label: 'User Conversions' },
      { value: '35%', label: 'User Retention' },
    ],
    highlight: 'Rapid Early Growth — 500+ Users in 30 Days',
    tags: [],
    category: 'Healthcare/AI/ML',
  },
  'transforming-customer-engagement-and-lead-management-with-ai-powered-automation': {
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'RAG', '+3'],
    metrics: [
      { value: '95%', label: 'User Conversions' },
      { value: '40%', label: 'Sales Increased' },
    ],
    highlight: '',
    ctaLabel: 'View Case Study',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'MarTech/AI/ML',
  },
  'ai-chatbot-for-legal-assistance': {
    techStack: ['React.js', 'FastAPI', 'Node.js', 'MongoDB', '+3'],
    metrics: [
      { value: '65%', label: 'User Conversions' },
      { value: '82%', label: 'User Retention' },
    ],
    highlight: '',
    ctaLabel: 'View Case Study',
    tags: ['Research', 'Custom Build'],
    category: 'LegalTech/AI/ML',
  },
  'ai-data-query-system': {
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js', '+3'],
    metrics: [
      { value: '98%', label: 'Retrieval Accuracy' },
    ],
    highlight: '',
    ctaLabel: 'View Case Study',
    tags: ['Research', 'Custom Build'],
    category: 'SaaS/AI/ML',
  },
  'voice-assistant-chatbot-for-shopify-stores-to-enhance-user-engagement': {
    techStack: ['OAuth', 'FastAPI', 'Tailwind CSS', 'NLP', '+3'],
    metrics: [
      { value: '72%', label: 'User Conversions' },
      { value: '50%', label: 'User Retention' },
    ],
    highlight: 'Total user 20k+',
    ctaLabel: 'View Case Study',
    tags: ['Custom Build'],
    category: 'E-commerce/AI/ML',
  },
  'fraud-detection-using-machine-learning-techniques': {
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', '+2'],
    metrics: [
      { value: '99%', label: 'Detection Accuracy' },
      { value: '70%', label: 'False Positives Reduced' },
    ],
    highlight: '99% fraud detection accuracy with 70% fewer false positives',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },

  // ── Slug aliases — MongoDB documents use longer / differently-spelled slugs ──

  // Workaptix: MongoDB slug is the full descriptive slug
  'workaptix-ai-sourcing-validation-verification': {
    techStack: ['NLP & Vector Search', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: [],
    category: 'HRTech/AI/ML',
  },

  // Nuaiy full slug
  'nuaiy-ai-driven-multilingual-gamified-learning-platform': {
    techStack: ['React Native', 'FastAPI', 'PostgreSQL', 'LLM APIs + LangChain', '+3'],
    metrics: [
      { value: '70%', label: 'User Conversions' },
      { value: '52%', label: 'User Retention' },
    ],
    highlight: '1K users in 30 days',
    liveUrl: 'https://app.nuaiy.com/',
    tags: ['Live Products', 'UI/UX'],
    category: 'SocialTech/AI/ML',
  },

  // SocialJet full slug
  'socialjet-ai-influencer-marketing-os': {
    techStack: ['React', 'FastAPI', 'LangGraph', 'Neon PostgreSQL', '+3'],
    metrics: [],
    highlight: '65% of operational processes automated with human approval.',
    liveUrl: 'https://socialjet.sg/',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },

  // Cracked.ai full slug
  'cracked-ai-growth-platform': {
    techStack: ['LLM', 'AI Agents', 'Generative AI', 'Social Media APIs', '+3'],
    metrics: [
      { value: '80%', label: 'User Conversions' },
      { value: '45%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 3K users in 30 days',
    liveUrl: 'https://cracked.ai/',
    tags: ['Live Products'],
    category: 'MarTech/AI/ML',
  },

  // Jove's MongoDB slug is 'digital-twin-ai-powered-expert-knowledge-platform'
  'digital-twin-ai-powered-expert-knowledge-platform': {
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'LLM', '+3'],
    metrics: [
      { value: 'Coming soon', label: 'User Conversions' },
      { value: 'Coming soon', label: 'User Retention' },
    ],
    highlight: 'Just launched last week — 100+ users onboarded.',
    tags: ['Custom Build'],
    category: 'HRTech/AI/ML',
  },

  // Email Love: slug ends with '-and-repair' not '-and-autonomous-repair'
  'email-love-ai-powered-email-template-generation-and-repair': {
    techStack: ['LLM', 'Figma API', 'MJML', 'Structured JSON Blueprint', '+3'],
    metrics: [
      { value: '80%', label: 'User Conversions' },
      { value: '72%', label: 'User Retention' },
    ],
    highlight: '50K+ Existing Paid Users',
    liveUrl: 'https://emaillove.com',
    tags: ['Live Products'],
    category: 'MarTech/AI/ML',
  },

  'meta-case-study': {
    techStack: [],
    metrics: [],
    highlight: '',
    tags: [],
    category: 'MarTech/AI/ML',
    // TODO: add stripImage (750x142) once that asset is provided.
  },

  // SayYes.AI: MongoDB slug is 'sayyesai-...' (no hyphen between sayyes and ai)
  'sayyesai-the-ai-wedding-companion-for-modern-brides': {
    techStack: ['Flutter', 'FastAPI', 'Google Places API', 'Google Cloud', '+2'],
    metrics: [
      { value: '45%', label: 'Planning Time Saved' },
      { value: '87%', label: 'Personalization' },
    ],
    highlight: '',
    tags: ['UI/UX', 'Live Products'],
    category: 'SocialTech/AI/ML',
  },

  // 'assistance' in meta but MongoDB title uses 'assistant'
  'ai-marketing-assistant': {
    techStack: ['custom GPT model', 'FastAPI', 'React.js', 'Tailwind CSS', '+3'],
    metrics: [
      { value: '65%', label: 'User Conversions' },
      { value: '43%', label: 'User Retention' },
    ],
    highlight: 'Rapid Early Growth — 1K Users in 7 Days',
    ctaLabel: 'View Case Study',
    tags: ['Custom Build'],
    category: 'MarTech/AI/ML',
  },

  // 'ai-agent-stock-market' in meta but MongoDB title has 'for'
  'ai-agent-for-stock-market': {
    techStack: ['MongoDB', 'FastAPI', 'Polygon.io API', 'REST API', '+3'],
    metrics: [
      { value: '45%', label: 'User Conversions' },
      { value: '80%', label: 'User Retention' },
    ],
    highlight: 'Rapid Early Growth — 2K Users in 30 Days',
    ctaLabel: 'View Case Study',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },

  // MongoDB uses American spelling 'personalized' and full blog-style slug
  'tutorgpt-ai-personalized-tutoring-platform-to-make-education-accessible-and-seamless': {
    techStack: ['Streamlit', 'FastAPI', 'Mistral LLM', 'RAG', '+3'],
    metrics: [
      { value: '68%', label: 'User Conversions' },
      { value: '70%', label: 'User Retention' },
    ],
    highlight: 'Rapid Early Growth — 2K Users in 30 Days',
    ctaLabel: 'View Case Study',
    tags: ['UI/UX'],
    category: 'EdTech/AI/ML',
  },

  // 'multiagent' in meta but MongoDB title uses 'multi-agent' (with hyphen)
  'multi-agent-trading-system-transforming-cryptocurrency-trading-strategies': {
    techStack: ['GoPlus', 'FastAPI', 'LLM', 'JavaScript', '+3'],
    metrics: [
      { value: '45%', label: 'User Conversions' },
      { value: '55%', label: 'User Retention' },
    ],
    highlight: '',
    ctaLabel: 'View Case Study',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },

  // 'revolutionise' (British) in meta but MongoDB title uses 'revolutionize' (American)
  'ai-powered-recruiter-agents-to-revolutionize-talent-acquisition': {
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', '+3'],
    metrics: [
      { value: '70%', label: 'Time Saved' },
      { value: '85%', label: 'Accuracy' },
    ],
    highlight: '',
    ctaLabel: 'View Case Study',
    tags: ['Custom Build'],
    category: 'HRTech/AI/ML',
  },

  'innvor-ai-clinical-engagement-documentation-platform': {
    techStack: ['AI Scribe Engine', 'FastAPI', 'Speech-to-Text', 'ICD-10 Coding', '+3'],
    metrics: [
      { value: '45%', label: 'Time Saved' },
      { value: '92%', label: 'Accuracy' },
    ],
    highlight: 'Currently in Internal Testing',
    tags: ['Healthcare AI'],
    category: 'Healthcare/AI/ML',
  },

  // 'ai-asr-doctor-clinical-documentation-platform' (AI ASR Doctor: Clinical
  // Documentation Platform) has no entry here on purpose — its title and
  // MongoDB description are already correct/untouched. It's now hidden from
  // the /projects listing via HIDDEN_SLUGS in Projects.tsx, so no meta is
  // needed unless it's unhidden later.

  // New card, distinct from the existing 'linkedin-ai' / 'how-we-built-an-ai-
  // saas-that-helps-doctors-share-healthcare-awareness-on-linkedin' entries —
  // same title text, but its own slug/doc/image so the original card is untouched.
  'linkedin-ai-doctors-healthcare-awareness-saas': {
    techStack: ['NextJs', 'python', 'GCP', 'vectordb', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: '',
    ctaLabel: 'View Case Study',
    tags: [],
    category: 'Healthcare/AI/ML',
  },

  // New card, distinct from the existing 'fraud-detection-using-machine-
  // learning-techniques' entry — same title text, but its own slug/doc/image
  // so the original card is untouched.
  'fraud-detection-ml-techniques-v2': {
    techStack: ['TypeScript', 'FastAPI', 'Redis', 'Tailwind CSS', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: '',
    ctaLabel: 'View Research',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },

  'sheltas-health-dataset-annotation-platform': {
    techStack: ['Next.js', 'FastAPI', 'Google Cloud Storage', 'Redis', '+3'],
    metrics: [
      { value: 'Coming soon', label: 'User Conversions' },
      { value: 'Coming soon', label: 'User Retention' },
    ],
    highlight: 'Currently in Internal Testing',
    tags: [],
    category: 'Healthcare/AI/ML',
  },

  'sentlogic-instagram-engagement-revenue-attribution': {
    techStack: ['Next.js,', 'FastAPI', 'PostgreSQL', 'Redis', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '62%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 100+ Users Onboarded in 14 Days',
    tags: [],
    category: 'MarTech/AI/ML',
  },

  'hermayhem-leading-her-ways-cycle-aware-ai-productivity': {
    techStack: ['React Native', 'FastAPI', 'Gemini 3.1 Pro', 'MongoDB', '+3'],
    metrics: [
      { value: 'Coming soon', label: 'User Conversions' },
      { value: 'Coming soon', label: 'User Retention' },
    ],
    highlight: 'Currently in Internal Testing',
    ctaLabel: 'View Case Study',
    liveUrl: 'https://leading-her-way.com/',
    tags: ['Live Products'],
    category: 'WellTech/AI/ML',
  },
};

export const FILTER_TABS = [
  'Recent',
  'Show All',
  'Live Products',
  'Research',
  'IoT x AI Engineering',
  'AI Implemented in Business',
  'UI/UX',
  'Custom Build',
] as const;

export type FilterTab = typeof FILTER_TABS[number];

export const CATEGORIES = [
  'All Categories',
  'Healthcare/AI/ML',
  'HealthTech/AI/ML',
  'FinTech/AI/ML',
  'EdTech/AI/ML',
  'E-commerce/AI/ML',
  'LegalTech/AI/ML',
  'HRTech/AI/ML',
  'MarTech/AI/ML',
  'SocialTech/AI/ML',
  'SaaS/AI/ML',
  'IoT/AI/ML',
  'WellTech/AI/ML',
  'Research/Science',
] as const;

export default caseStudyMeta;
