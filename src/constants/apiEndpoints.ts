const API_ENDPOINTS = {
  // Blogs
  BLOGS: '/api/blogs',
  BLOG_BY_SLUG: (slug: string): string => `/api/blogs/${slug}`,

  // AI News
  AINEWS: '/api/ainews',
  AINEWS_BY_SLUG: (slug: string): string => `/api/ainews/${slug}`,

  // Case Studies
  CASE_STUDIES: '/api/case-studies',
  CASE_STUDY_BY_SLUG: (slug: string): string => `/api/case-studies/${slug}`,

  // Careers
  CAREERS_POSTINGS: '/api/careers/postings',
  CAREER_POSTING_BY_ID: (id: string): string => `/api/careers/postings/${id}`,
  CAREERS_APPLY: '/api/careers/apply',

  // Events
  EVENTS_ENROLL: '/api/events/enroll',
  EVENTS_INTERESTED: '/api/events/interested',
  EVENTS_SEND_EMAIL: '/api/events/sendEmail',
  EVENTS_SEND_OTP: '/api/events/sendOtp',

  // Products
  PRODUCTS_CHECK_USER: '/api/products/check-user',

  // Misc
  SAVE_DATA: '/api/saveData',

  // External / non-Next APIs
  CONTACT_US_SUBMIT: process.env.NEXT_PUBLIC_CONTACT_API_URL ?? 'http://localhost:5000/user_details',
  META_BASE_URL: process.env.NEXT_PUBLIC_META_API_BASE ?? 'https://pgagi.in/api',

  // Preloaded API-backed assets
  THREE_PRELOAD: '/api/three',
  POSTPROCESSING_PRELOAD: '/api/postprocessing',
} as const;

export default API_ENDPOINTS;
