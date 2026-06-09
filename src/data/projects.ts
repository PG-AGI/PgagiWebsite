// src/data/projects.ts
// Type definitions for the Recent Launch section.
// All project data is sourced from MongoDB (test.caseStudies).
// Required MongoDB fields: slug, title, coverImage
// Optional MongoDB fields: description, tab, techStack, metrics, highlight, liveUrl

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
  tab?: TabId;
};
