// src/data/projects.ts
// Static project portfolio data for the Recent Launch section.
// Update screenshot paths and content here; the API reads this file.

export type TabId = 'ai-product' | 'ai-business' | 'ai-iot';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  metrics: { value: string; label: string }[];
  highlight: string;
  screenshot: string;
  caseStudySlug: string | null;
  liveUrl: string | null;
  tab: TabId;
};

const PROJECTS: Project[] = [
  // ── AI Product ───────────────────────────────────────────────────
  {
    id: 'social-jet',
    title: 'Social Jet',
    description:
      'End-to-end influencer campaign automation — streamline outreach, manage creator partnerships, and track ROI across every social platform in real time.',
    techStack: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
    metrics: [
      { value: '35%', label: 'User Conversions' },
      { value: '85%', label: 'User Retention' },
    ],
    highlight: 'Rapid early growth — 1K users in 7 days',
    screenshot: '/assets/CaseStudies/Toingg.jpg',
    caseStudySlug: null,
    liveUrl: 'https://social-jet.com',
    tab: 'ai-product',
  },
  {
    id: 'aimi-brain',
    title: 'AIMI Brain',
    description:
      'Real-time financial intelligence platform that processes millions of AI signals daily to optimise portfolio strategies and sharpen investment decisions.',
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI', '+3'],
    metrics: [
      { value: '40%', label: 'Portfolio Growth' },
      { value: '2M+', label: 'Daily Signals' },
    ],
    highlight: '2M+ AI signals processed daily in real time',
    screenshot: '/assets/CaseStudies/AIMI.jpg',
    caseStudySlug: 'aimi-brain-real-time-financial-intelligence',
    liveUrl: 'https://aim-cube.com',
    tab: 'ai-product',
  },
  {
    id: 'brainify',
    title: 'Brainify',
    description:
      'AI-powered learning platform delivering personalised education paths and instant feedback to accelerate skill acquisition at scale.',
    techStack: ['React Native', 'Python', 'Firebase', 'AI/ML', '+2'],
    metrics: [
      { value: '4.8', label: 'App Store Rating' },
      { value: '50K+', label: 'Active Learners' },
    ],
    highlight: '50K learners onboarded in the first quarter',
    screenshot: '/assets/CaseStudies/brainify-cover.png',
    caseStudySlug: 'brainify-edtech-platform',
    liveUrl: null,
    tab: 'ai-product',
  },

  // ── AI Implemented in Business ────────────────────────────────────
  {
    id: 'skillina',
    title: 'Skillina',
    description:
      'AI-driven talent marketplace that matches candidates to roles 3× faster using intelligent skill-graph matching and automated screening pipelines.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', '+3'],
    metrics: [
      { value: '3×', label: 'Faster Hiring' },
      { value: '60%', label: 'Cost Reduction' },
    ],
    highlight: 'MVP shipped and live within 8 weeks',
    screenshot: '/assets/CaseStudies/EmailLove-v3.jpg',
    caseStudySlug: 'skillina-talent-marketplace',
    liveUrl: 'https://skillina.com',
    tab: 'ai-business',
  },
  {
    id: 'legalspendgpt',
    title: 'LegalSpendGPT',
    description:
      'AI invoice intelligence that extracts, validates, and routes complex legal spend data with 99 % accuracy — eliminating every hour of manual processing.',
    techStack: ['Python', 'OpenAI', 'FastAPI', 'React', '+2'],
    metrics: [
      { value: '80%', label: 'Processing Speed' },
      { value: '99%', label: 'Accuracy Rate' },
    ],
    highlight: '99% extraction accuracy on complex legal invoices',
    screenshot: '/assets/CaseStudies/CrackedAi.jpg',
    caseStudySlug: 'legalspendgpt-invoice-intelligence',
    liveUrl: null,
    tab: 'ai-business',
  },
  {
    id: 'mirror-me',
    title: 'Mirror Me AI',
    description:
      'Virtual AI try-on platform that lets shoppers visualise products on themselves before buying — slashing return rates and tripling engagement.',
    techStack: ['Python', 'TensorFlow', 'React', 'Three.js', '+2'],
    metrics: [
      { value: '45%', label: 'Return Rate Drop' },
      { value: '3×', label: 'Engagement Lift' },
    ],
    highlight: '45% reduction in returns after AI try-on integration',
    screenshot: '/assets/CaseStudies/DigitalTwin-v2.jpg',
    caseStudySlug: 'mirror-me-ai-virtual-try-on',
    liveUrl: null,
    tab: 'ai-business',
  },

  // ── AI × IoT Engineering ─────────────────────────────────────────
  {
    id: 'ai-mobile-doc',
    title: 'AI Mobile Doc',
    description:
      'IoT-connected diagnostic platform delivering real-time patient insights with 95 % accuracy — deployed across three hospital networks in under 30 days.',
    techStack: ['Python', 'FastAPI', 'React Native', 'OpenAI', '+2'],
    metrics: [
      { value: '70%', label: 'Time Saved' },
      { value: '95%', label: 'Accuracy Rate' },
    ],
    highlight: 'Deployed across 3 hospital networks in 30 days',
    screenshot: '/assets/CaseStudies/DigitalTwin-v3.jpg',
    caseStudySlug: 'ai-mobile-doc',
    liveUrl: null,
    tab: 'ai-iot',
  },
  {
    id: 'ecommerce-arbitrage',
    title: 'AI E-commerce Arbitrage',
    description:
      'Automated cross-marketplace arbitrage engine that discovers price gaps and executes trades 10× faster than any manual workflow across 5 major platforms.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'AI/ML', '+3'],
    metrics: [
      { value: '35%', label: 'Margin Increase' },
      { value: '10×', label: 'Faster Price Discovery' },
    ],
    highlight: 'Automated arbitrage across 5 major marketplaces',
    screenshot: '/assets/CaseStudies/ecommerce_cover.png',
    caseStudySlug: 'ai-ecommerce-arbitrage-platform',
    liveUrl: null,
    tab: 'ai-iot',
  },
];

export default PROJECTS;
