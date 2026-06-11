export type CaseStudyMeta = {
  techStack: string[];
  metrics: { value: string; label: string }[];
  highlight: string;
  liveUrl?: string;
  tags: string[];
  category: string;
};

const caseStudyMeta: Record<string, CaseStudyMeta> = {

  // ── Already-existing entries ────────────────────────────────────────────
  'skillina-talent-marketplace': {
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', '+3'],
    metrics: [
      { value: '3x', label: 'Faster Hiring' },
      { value: '60%', label: 'Cost Reduction' },
    ],
    highlight: 'MVP shipped and live within 8 weeks',
    liveUrl: 'https://skillina.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'HRTech/AI/ML',
  },
  'ai-mobile-doc': {
    techStack: ['Python', 'FastAPI', 'React Native', 'OpenAI', '+2'],
    metrics: [
      { value: '70%', label: 'Time Saved' },
      { value: '95%', label: 'Accuracy Rate' },
    ],
    highlight: 'Deployed across 3 hospital networks in 30 days',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'Healthcare/AI/ML',
  },
  'brainify-edtech-platform': {
    techStack: ['React Native', 'Python', 'Firebase', 'AI/ML', '+2'],
    metrics: [
      { value: '4.8', label: 'App Store Rating' },
      { value: '50K+', label: 'Active Learners' },
    ],
    highlight: '50K learners onboarded in the first quarter',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'EdTech/AI/ML',
  },
  'aimi-brain-real-time-financial-intelligence': {
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI', '+3'],
    metrics: [
      { value: '40%', label: 'Portfolio Growth' },
      { value: '2M+', label: 'Daily Signals' },
    ],
    highlight: '2M+ AI signals processed daily in real time',
    liveUrl: 'https://aim-cube.com',
    tags: ['Live Products', 'Research'],
    category: 'FinTech/AI/ML',
  },
  'ai-ecommerce-arbitrage-platform': {
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'AI/ML', '+3'],
    metrics: [
      { value: '35%', label: 'Margin Increase' },
      { value: '10x', label: 'Faster Price Discovery' },
    ],
    highlight: 'Automated arbitrage across 5 major marketplaces',
    tags: ['Live Products', 'Custom Build'],
    category: 'E-commerce/AI/ML',
  },
  'legalspendgpt-invoice-intelligence': {
    techStack: ['Python', 'OpenAI', 'FastAPI', 'React', '+2'],
    metrics: [
      { value: '80%', label: 'Processing Speed' },
      { value: '99%', label: 'Extraction Accuracy' },
    ],
    highlight: '99% extraction accuracy on complex legal invoices',
    tags: ['Research', 'Custom Build'],
    category: 'LegalTech/AI/ML',
  },
  'mirror-me-ai-virtual-try-on': {
    techStack: ['Python', 'TensorFlow', 'React', 'Three.js', '+2'],
    metrics: [
      { value: '45%', label: 'Return Rate Drop' },
      { value: '3x', label: 'Engagement Lift' },
    ],
    highlight: '45% reduction in returns after AI try-on integration',
    tags: ['UI/UX', 'Research'],
    category: 'E-commerce/AI/ML',
  },
  'two-point-correlation-function-spatial-clustering': {
    techStack: ['Python', 'NumPy', 'SciPy', 'Astropy', '+2'],
    metrics: [
      { value: '40%', label: 'Faster Processing' },
      { value: '99%', label: 'Statistical Accuracy' },
    ],
    highlight: 'Two-point correlation applied to real SDSS survey data',
    tags: ['Research'],
    category: 'Research/Science',
  },
  'cosmological-model-parameter-extraction': {
    techStack: ['Python', 'NumPy', 'SciPy', 'Matplotlib', '+2'],
    metrics: [
      { value: '97%', label: 'Model Fit Confidence' },
      { value: '3x', label: 'Faster Parameter Extraction' },
    ],
    highlight: 'Lambda-CDM parameters extracted from Type Ia supernova datasets',
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
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '60%', label: 'Ad Performance Boost' },
      { value: '5x', label: 'Creative Output' },
    ],
    highlight: 'AI ad creatives outperforming human-made ads by 60%',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },
  'email-love': {
    techStack: ['React', 'Node.js', 'OpenAI', 'Python', '+2'],
    metrics: [
      { value: '45%', label: 'Open Rate' },
      { value: '3x', label: 'Campaign Speed' },
    ],
    highlight: '3× faster AI-written email campaigns with higher open rates',
    liveUrl: 'https://emaillove.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },
  'nuaiy': {
    techStack: ['React Native', 'Python', 'TensorFlow', 'Firebase', '+2'],
    metrics: [
      { value: '4.7', label: 'App Store Rating' },
      { value: '20K+', label: 'Downloads' },
    ],
    highlight: 'AI companion app reaching 20K+ users at launch',
    tags: ['Live Products', 'UI/UX'],
    category: 'SocialTech/AI/ML',
  },
  'social-jet': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'Conversion Rate' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://social-jet.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },
  'jove': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '80%', label: 'Query Resolution' },
      { value: '5x', label: 'Faster Onboarding' },
    ],
    highlight: 'AI Digital Twin trained on real Workday expert knowledge',
    tags: ['Live Products', 'Custom Build'],
    category: 'HRTech/AI/ML',
  },
  'sayyes-ai': {
    techStack: ['React Native', 'Python', 'FastAPI', 'OpenAI', '+2'],
    metrics: [
      { value: '4.6', label: 'App Store Rating' },
      { value: '30K+', label: 'Matches Made' },
    ],
    highlight: 'AI-powered matching driving 30K+ meaningful connections',
    tags: ['Live Products', 'UI/UX'],
    category: 'SocialTech/AI/ML',
  },
  'ai-to-md': {
    techStack: ['Python', 'FastAPI', 'React Native', 'OpenAI', '+3'],
    metrics: [
      { value: '70%', label: 'Diagnosis Speed' },
      { value: '95%', label: 'Accuracy Rate' },
    ],
    highlight: 'AI diagnostics deployed across multiple healthcare networks',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'Healthcare/AI/ML',
  },
  'workaptix': {
    techStack: ['Python', 'React', 'Node.js', 'PostgreSQL', '+2'],
    metrics: [
      { value: '10K+', label: 'Candidates Sourced' },
      { value: '500+', label: 'Active Employers' },
    ],
    highlight: 'Pre-vetted Workday talent matched and placed in days, not weeks',
    liveUrl: 'https://workaptix.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'HRTech/AI/ML',
  },
  'innvor-ai': {
    techStack: ['Python', 'OpenAI', 'FastAPI', 'React', '+2'],
    metrics: [
      { value: '85%', label: 'Documentation Speed' },
      { value: '99%', label: 'Note Accuracy' },
    ],
    highlight: 'Clinical notes auto-generated with 99% accuracy at bedside',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'Healthcare/AI/ML',
  },
  'sheltas': {
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', '+3'],
    metrics: [
      { value: '3,847', label: 'Tasks Automated' },
      { value: '87%', label: 'Automation Rate' },
    ],
    highlight: 'End-to-end project automation with 87% task automation rate',
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
  'vook': {
    techStack: ['React Native', 'Python', 'FastAPI', 'IoT', '+2'],
    metrics: [
      { value: '95%', label: 'Sound Clarity' },
      { value: '2x', label: 'Battery Life' },
    ],
    highlight: 'AI-enhanced audio device with 2× battery improvement',
    liveUrl: 'https://vook.com',
    tags: ['Live Products', 'IoT x AI Engineering'],
    category: 'IoT/AI/ML',
  },
  'fomo': {
    techStack: ['React', 'Python', 'FastAPI', 'Node.js', '+2'],
    metrics: [
      { value: '40%', label: 'Conversion Lift' },
      { value: '60%', label: 'Engagement Rate' },
    ],
    highlight: 'Social proof notifications lifting conversions by 40%',
    liveUrl: 'https://fomo.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },
  'linkedin-ai': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '$24.8M', label: 'Pipeline Generated' },
      { value: '1,244', label: 'Leads Qualified' },
    ],
    highlight: '$24.8M pipeline generated through AI-powered LinkedIn outreach',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
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
      { value: '10x', label: 'Content Reach' },
      { value: '85%', label: 'Engagement Rate' },
    ],
    highlight: 'Doctors reaching 10× more patients via AI-generated LinkedIn content',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'Healthcare/AI/ML',
  },
  'transforming-customer-engagement-and-lead-management-with-ai-powered-automation': {
    techStack: ['Python', 'OpenAI', 'FastAPI', 'React', '+3'],
    metrics: [
      { value: '3x', label: 'Lead Conversion' },
      { value: '60%', label: 'Cost Per Lead' },
    ],
    highlight: 'AI automation tripling lead conversions while cutting cost per lead by 60%',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'MarTech/AI/ML',
  },
  'ai-chatbot-for-legal-assistance': {
    techStack: ['Python', 'OpenAI', 'FastAPI', 'React'],
    metrics: [
      { value: '90%', label: 'Query Resolution' },
      { value: '70%', label: 'Time Saved' },
    ],
    highlight: 'AI legal chatbot resolving 90% of queries without a human lawyer',
    tags: ['Research', 'Custom Build'],
    category: 'LegalTech/AI/ML',
  },
  'ai-data-query-system': {
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    metrics: [
      { value: '10x', label: 'Query Speed' },
      { value: '99%', label: 'Result Accuracy' },
    ],
    highlight: 'Natural-language queries executing 10× faster than SQL dashboards',
    tags: ['Research', 'Custom Build'],
    category: 'SaaS/AI/ML',
  },
  'ai-marketing-assistance': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '45%', label: 'Campaign ROI' },
      { value: '3x', label: 'Content Output' },
    ],
    highlight: 'AI marketing agent tripling content output while boosting ROI by 45%',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'MarTech/AI/ML',
  },
  'ai-agent-stock-market': {
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', '+2'],
    metrics: [
      { value: '40%', label: 'Return Rate' },
      { value: '2M+', label: 'Daily Trades Analysed' },
    ],
    highlight: 'Real-time AI stock agent analysing 2M+ trades daily for alpha signals',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },
  'tutorgpt-personalised-tutoring-platform': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '40%', label: 'Learning Speed' },
      { value: '4.9', label: 'Student Rating' },
    ],
    highlight: 'Personalised AI tutoring boosting learning speed by 40%',
    tags: ['AI Implemented in Business', 'UI/UX'],
    category: 'EdTech/AI/ML',
  },
  'voice-assistant-chatbot-for-shopify-stores-to-enhance-user-engagement': {
    techStack: ['Python', 'OpenAI', 'Node.js', 'React'],
    metrics: [
      { value: '35%', label: 'Cart Conversion' },
      { value: '60%', label: 'Support Ticket Reduction' },
    ],
    highlight: 'Voice AI lifting Shopify cart conversions by 35%',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'E-commerce/AI/ML',
  },
  'multiagent-trading-system-transforming-cryptocurrency-trading-strategies': {
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', '+3'],
    metrics: [
      { value: '2.5x', label: 'Return Rate' },
      { value: '95%', label: 'Strategy Win Rate' },
    ],
    highlight: 'Multi-agent crypto system achieving 2.5× returns over baseline',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },
  'ai-powered-recruiter-agents-to-revolutionise-talent-acquisition': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '3x', label: 'Faster Hiring' },
      { value: '50%', label: 'Screening Cost Saved' },
    ],
    highlight: 'AI recruiter agents cutting time-to-hire by 3× across enterprise clients',
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
    techStack: ['Python', 'React', 'Node.js', 'PostgreSQL', '+2'],
    metrics: [
      { value: '10K+', label: 'Candidates Sourced' },
      { value: '500+', label: 'Active Employers' },
    ],
    highlight: 'Pre-vetted Workday talent matched and placed in days, not weeks',
    liveUrl: 'https://workaptix.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'HRTech/AI/ML',
  },

  // Nuaiy full slug
  'nuaiy-ai-driven-multilingual-gamified-learning-platform': {
    techStack: ['React Native', 'Python', 'TensorFlow', 'Firebase', '+2'],
    metrics: [
      { value: '4.7', label: 'App Store Rating' },
      { value: '20K+', label: 'Downloads' },
    ],
    highlight: 'AI companion app reaching 20K+ users at launch',
    tags: ['Live Products', 'UI/UX'],
    category: 'SocialTech/AI/ML',
  },

  // SocialJet full slug
  'socialjet-ai-influencer-marketing-os': {
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'Conversion Rate' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    liveUrl: 'https://social-jet.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },

  // Cracked.ai full slug
  'cracked-ai-growth-platform': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '60%', label: 'Ad Performance Boost' },
      { value: '5x', label: 'Creative Output' },
    ],
    highlight: 'AI ad creatives outperforming human-made ads by 60%',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },

  // Jove's MongoDB slug is 'digital-twin-ai-powered-expert-knowledge-platform'
  'digital-twin-ai-powered-expert-knowledge-platform': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '80%', label: 'Query Resolution' },
      { value: '5x', label: 'Faster Onboarding' },
    ],
    highlight: 'AI Digital Twin trained on real Workday expert knowledge',
    tags: ['Live Products', 'Custom Build'],
    category: 'HRTech/AI/ML',
  },

  // Email Love: slug ends with '-and-repair' not '-and-autonomous-repair'
  'email-love-ai-powered-email-template-generation-and-repair': {
    techStack: ['React', 'Node.js', 'OpenAI', 'Python', '+2'],
    metrics: [
      { value: '45%', label: 'Open Rate' },
      { value: '3x', label: 'Campaign Speed' },
    ],
    highlight: '3× faster AI-written email campaigns with higher open rates',
    liveUrl: 'https://emaillove.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },

  // SayYes.AI: MongoDB slug is 'sayyesai-...' (no hyphen between sayyes and ai)
  'sayyesai-the-ai-wedding-companion-for-modern-brides': {
    techStack: ['React Native', 'Python', 'FastAPI', 'OpenAI', '+2'],
    metrics: [
      { value: '4.6', label: 'App Store Rating' },
      { value: '30K+', label: 'Matches Made' },
    ],
    highlight: 'AI-powered matching driving 30K+ meaningful connections',
    tags: ['Live Products', 'UI/UX'],
    category: 'SocialTech/AI/ML',
  },

  // 'assistance' in meta but MongoDB title uses 'assistant'
  'ai-marketing-assistant': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '45%', label: 'Campaign ROI' },
      { value: '3x', label: 'Content Output' },
    ],
    highlight: 'AI marketing agent tripling content output while boosting ROI by 45%',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'MarTech/AI/ML',
  },

  // 'ai-agent-stock-market' in meta but MongoDB title has 'for'
  'ai-agent-for-stock-market': {
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', '+2'],
    metrics: [
      { value: '40%', label: 'Return Rate' },
      { value: '2M+', label: 'Daily Trades Analysed' },
    ],
    highlight: 'Real-time AI stock agent analysing 2M+ trades daily for alpha signals',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },

  // MongoDB uses American spelling 'personalized' and full blog-style slug
  'tutorgpt-personalized-tutoring-platform': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '40%', label: 'Learning Speed' },
      { value: '4.9', label: 'Student Rating' },
    ],
    highlight: 'Personalised AI tutoring boosting learning speed by 40%',
    tags: ['AI Implemented in Business', 'UI/UX'],
    category: 'EdTech/AI/ML',
  },
  'tutorgpt-ai-personalized-tutoring-platform-to-make-education-accessible-and-seamless': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '40%', label: 'Learning Speed' },
      { value: '4.9', label: 'Student Rating' },
    ],
    highlight: 'Personalised AI tutoring boosting learning speed by 40%',
    tags: ['AI Implemented in Business', 'UI/UX'],
    category: 'EdTech/AI/ML',
  },

  // 'multiagent' in meta but MongoDB title uses 'multi-agent' (with hyphen)
  'multi-agent-trading-system-transforming-cryptocurrency-trading-strategies': {
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', '+3'],
    metrics: [
      { value: '2.5x', label: 'Return Rate' },
      { value: '95%', label: 'Strategy Win Rate' },
    ],
    highlight: 'Multi-agent crypto system achieving 2.5× returns over baseline',
    tags: ['Research', 'Custom Build'],
    category: 'FinTech/AI/ML',
  },

  // 'revolutionise' (British) in meta but MongoDB title uses 'revolutionize' (American)
  'ai-powered-recruiter-agents-to-revolutionize-talent-acquisition': {
    techStack: ['Python', 'OpenAI', 'React', 'FastAPI', '+2'],
    metrics: [
      { value: '3x', label: 'Faster Hiring' },
      { value: '50%', label: 'Screening Cost Saved' },
    ],
    highlight: 'AI recruiter agents cutting time-to-hire by 3× across enterprise clients',
    tags: ['AI Implemented in Business', 'Custom Build'],
    category: 'HRTech/AI/ML',
  },

  'innvor-ai-clinical-engagement-documentation-platform': {
    techStack: ['Python', 'FastAPI', 'Healthcare AI', 'NLP', '+2'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid growth - 1K users in 7 days',
    tags: ['Live Products', 'Healthcare AI'],
    category: 'Healthcare/AI/ML',
  },

  'sheltas-health-dataset-annotation-platform': {
    techStack: ['Python', 'FastAPI', 'React', 'JavaScript', '+2'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid growth - 1K users in 7 days',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'Healthcare/AI/ML',
  },

  'sentlogic-instagram-engagement-revenue-attribution': {
    techStack: ['Python', 'FastAPI', 'Next.js', 'pgvector', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid growth — 1K users in 7 days',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'MarTech/AI/ML',
  },

  'hermayhem-leading-her-ways-cycle-aware-ai-productivity': {
    techStack: ['Python', 'FastAPI', 'React Native', 'Gemini AI', '+2'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth - 11 clients in 7 days',
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
