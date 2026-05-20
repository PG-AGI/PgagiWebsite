export type CaseStudyMeta = {
  techStack: string[];
  metrics: { value: string; label: string }[];
  highlight: string;
  liveUrl?: string;
  tags: string[];
  category: string;
};

const caseStudyMeta: Record<string, CaseStudyMeta> = {
  'skillina-talent-marketplace': {
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', '+3'],
    metrics: [
      { value: '3x', label: 'Faster Hiring' },
      { value: '60%', label: 'Cost Reduction' },
    ],
    highlight: 'MVP shipped and live within 8 weeks',
    liveUrl: 'https://skillina.com',
    tags: ['Live Products', 'AI Implemented in Business'],
    category: 'EdTech/AI/ML',
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
      { value: '80%', label: 'Invoice Processing Speed' },
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
  'FinTech/AI/ML',
  'EdTech/AI/ML',
  'E-commerce/AI/ML',
  'LegalTech/AI/ML',
] as const;

export default caseStudyMeta;
