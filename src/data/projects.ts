// src/data/projects.ts
// Type definitions + tab categorisation for the Recent Launch section.
// Display data (techStack, metrics, highlight, liveUrl) comes from caseStudyMeta.ts.
// MongoDB (caseStudies) supplies title, description, coverImage, slug.

export type TabId = 'ai-product' | 'ai-business' | 'ai-iot';

export type Project = {
  id: string;
  title: string;
  description?: string;
  techStack?: string[];
  metrics?: { value: string; label: string }[];
  highlight?: string;
  screenshot: string;
  caseStudySlug: string | null;
  liveUrl?: string | null;
  tab: TabId;
};

// Maps each MongoDB slug to its Recent Launch tab.
// Add a slug here to make it appear in the section.
export const PROJECT_TAB: Record<string, TabId> = {
  // ── AI Product ────────────────────────────────────────────────────
  'aimi-brain-real-time-financial-intelligence':                   'ai-product',
  'brainify-edtech-platform':                                      'ai-product',
  'digital-twin-ai-powered-expert-knowledge-platform':             'ai-product',
  'ai-agent-for-stock-market':                                     'ai-product',
  'ai-marketing-assistant':                                        'ai-product',
  'sayyesai-the-ai-wedding-companion-for-modern-brides':           'ai-product',
  'email-love-ai-powered-email-template-generation-and-repair':    'ai-product',
  'skillina-talent-marketplace':                                   'ai-product',
  'workaptix-ai-sourcing-validation-verification':                 'ai-product',
  'nuaiy-ai-driven-multilingual-gamified-learning-platform':       'ai-product',
  'socialjet-ai-influencer-marketing-os':                         'ai-product',
  'cracked-ai-growth-platform':                                    'ai-product',

  // ── AI Implemented in Business ────────────────────────────────────
  'legalspendgpt-invoice-intelligence':                            'ai-business',
  'transforming-customer-engagement-and-lead-management-with-ai-powered-automation': 'ai-business',
  'how-we-built-an-ai-saas-that-helps-doctors-share-healthcare-awareness-on-linkedin': 'ai-business',
  'ai-powered-recruiter-agents-to-revolutionize-talent-acquisition': 'ai-business',
  'multi-agent-trading-system-transforming-cryptocurrency-trading-strategies': 'ai-business',
  'voice-assistant-chatbot-for-shopify-stores-to-enhance-user-engagement': 'ai-business',
  'tutorgpt-ai-personalized-tutoring-platform-to-make-education-accessible-and-seamless': 'ai-business',
  'ai-data-query-system':                                          'ai-business',
  'ai-chatbot-for-legal-assistance':                               'ai-business',

  // ── AI × IoT Engineering ──────────────────────────────────────────
  'ai-mobile-doc':                                                 'ai-iot',
  'ai-asr-doctor-clinical-documentation-platform':                 'ai-iot',
  'mirror-me-ai-virtual-try-on':                                   'ai-iot',
  'ai-ecommerce-arbitrage-platform':                               'ai-iot',
  'cosmological-model-parameter-extraction':                       'ai-iot',
  'two-point-correlation-function-spatial-clustering':             'ai-iot',
};
