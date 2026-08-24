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
};

const caseStudyMeta: Record<string, CaseStudyMeta> = {

  // ── Already-existing entries ────────────────────────────────────────────
  'skillina-talent-marketplace': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://skillina.ai/',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'HRTech/AI/ML',
  },
  'ai-mobile-doc': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'Healthcare/AI/ML',
  },
  'brainify-edtech-platform': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.brainify.app&hl=en',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'EdTech/AI/ML',
  },
  'aimi-brain-real-time-financial-intelligence': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://aim-cube.com',
    tags: ['Live Products', 'Research'],
    category: 'FinTech/AI/ML',
  },
  'ai-ecommerce-arbitrage-platform': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'Custom Build'],
    category: 'E-commerce/AI/ML',
  },
  'legalspendgpt-invoice-intelligence': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Research', 'Custom Build'],
    category: 'LegalTech/AI/ML',
  },
  'mirror-me-ai-virtual-try-on': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.pgagi.mirror_me.beta&hl=en',
    tags: ['UI/UX', 'Research'],
    category: 'E-commerce/AI/ML',
  },
  'two-point-correlation-function-spatial-clustering': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: '',
    ctaLabel: 'View Research',
    tags: ['Research'],
    category: 'Research/Science',
  },
  'cosmological-model-parameter-extraction': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
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
  'jove': {
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
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
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
  'innvor-ai': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'Healthcare/AI/ML',
  },
  'sheltas': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://sheltas.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'SaaS/AI/ML',
  },
  'leading-her-ways': {
    techStack: ['React Native', 'Python', 'Firebase', 'OpenAI', '+2'],
    metrics: [
      { value: '4.8', label: 'App Store Rating' },
      { value: '15K+', label: 'Active Users' },
    ],
    highlight: 'Women-first AI wellness app reaching 15K+ users at launch',
    tags: ['Live Products', 'UI/UX'],
    category: 'HealthTech/AI/ML',
  },
  'vook-ai-wireless-microphone-companion-app': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://vook.in/',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'IoT/AI/ML',
  },
  'fomo': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://fomo.com',
    tags: ['Live Products', 'AI Implemented in Business'],
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
    techStack: ['Python', 'OpenAI', 'FastAPI', 'React', '+2'],
    metrics: [
      { value: '$24.8M', label: 'Spend Analysed' },
      { value: '7.5%', label: 'Cost Overrun Flagged' },
    ],
    highlight: '$24.8M legal spend analysed with AI invoice intelligence',
    tags: ['Research', 'Custom Build'],
    category: 'LegalTech/AI/ML',
  },
  'how-we-built-an-ai-saas-that-helps-doctors-share-healthcare-awareness-on-linkedin': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'Healthcare/AI/ML',
  },
  'transforming-customer-engagement-and-lead-management-with-ai-powered-automation': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'MarTech/AI/ML',
  },
  'ai-chatbot-for-legal-assistance': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['Research', 'Custom Build'],
    category: 'LegalTech/AI/ML',
  },
  'ai-data-query-system': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['Research', 'Custom Build'],
    category: 'SaaS/AI/ML',
  },
  'ai-marketing-assistance': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'MarTech/AI/ML',
  },
  'ai-agent-stock-market': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },
  'tutorgpt-personalised-tutoring-platform': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'UI/UX'],
    category: 'EdTech/AI/ML',
  },
  'voice-assistant-chatbot-for-shopify-stores-to-enhance-user-engagement': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'E-commerce/AI/ML',
  },
  'multiagent-trading-system-transforming-cryptocurrency-trading-strategies': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },
  'ai-powered-recruiter-agents-to-revolutionise-talent-acquisition': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'HRTech/AI/ML',
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

  // Nuaiy full slug
  'nuaiy-ai-driven-multilingual-gamified-learning-platform': {
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

  // SocialJet full slug
  'socialjet-ai-influencer-marketing-os': {
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

  // Cracked.ai full slug
  'cracked-ai-growth-platform': {
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

  // Jove's MongoDB slug is 'digital-twin-ai-powered-expert-knowledge-platform'
  'digital-twin-ai-powered-expert-knowledge-platform': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'Custom Build'],
    category: 'HRTech/AI/ML',
  },

  // Email Love: slug ends with '-and-repair' not '-and-autonomous-repair'
  'email-love-ai-powered-email-template-generation-and-repair': {
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

  // SayYes.AI: MongoDB slug is 'sayyesai-...' (no hyphen between sayyes and ai)
  'sayyesai-the-ai-wedding-companion-for-modern-brides': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'UI/UX'],
    category: 'SocialTech/AI/ML',
  },

  // 'assistance' in meta but MongoDB title uses 'assistant'
  'ai-marketing-assistant': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'MarTech/AI/ML',
  },

  // 'ai-agent-stock-market' in meta but MongoDB title has 'for'
  'ai-agent-for-stock-market': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },

  // MongoDB uses American spelling 'personalized' and full blog-style slug
  'tutorgpt-personalized-tutoring-platform': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'UI/UX'],
    category: 'EdTech/AI/ML',
  },
  'tutorgpt-ai-personalized-tutoring-platform-to-make-education-accessible-and-seamless': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'UI/UX'],
    category: 'EdTech/AI/ML',
  },

  // 'multiagent' in meta but MongoDB title uses 'multi-agent' (with hyphen)
  'multi-agent-trading-system-transforming-cryptocurrency-trading-strategies': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },

  // 'revolutionise' (British) in meta but MongoDB title uses 'revolutionize' (American)
  'ai-powered-recruiter-agents-to-revolutionize-talent-acquisition': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'HRTech/AI/ML',
  },

  'innvor-ai-clinical-engagement-documentation-platform': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'Healthcare AI'],
    category: 'Healthcare/AI/ML',
  },

  'sheltas-health-dataset-annotation-platform': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://sheltas.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'Healthcare/AI/ML',
  },

  'sentlogic-instagram-engagement-revenue-attribution': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },

  'hermayhem-leading-her-ways-cycle-aware-ai-productivity': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    ctaLabel: 'View Research',
    liveUrl: 'https://leading-her-way.com/',
    tags: ['Live Products', 'AI Implemented in Business'],
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
