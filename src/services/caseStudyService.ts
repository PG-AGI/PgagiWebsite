import API_ENDPOINTS from '@/constants/apiEndpoints';
import type { ContentDetails, ContentSummary, FormValues } from '@/utils/type';

export async function fetchAllCaseStudies(): Promise<ContentSummary[]> {
  const res = await fetch(API_ENDPOINTS.CASE_STUDIES, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch case studies');
  return res.json() as Promise<ContentSummary[]>;
}

export async function fetchCaseStudyBySlug(slug: string): Promise<ContentDetails> {
  const res = await fetch(API_ENDPOINTS.CASE_STUDY_BY_SLUG(slug));
  if (!res.ok) throw new Error(`Failed to fetch case study: ${slug}`);
  return res.json() as Promise<ContentDetails>;
}

export async function createCaseStudy(payload: FormValues): Promise<void> {
  const res = await fetch(API_ENDPOINTS.CASE_STUDIES, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create case study');
}

export async function updateCaseStudy(slug: string, payload: FormValues): Promise<void> {
  const res = await fetch(API_ENDPOINTS.CASE_STUDY_BY_SLUG(slug), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update case study');
}

export async function deleteCaseStudy(slug: string): Promise<void> {
  const res = await fetch(API_ENDPOINTS.CASE_STUDY_BY_SLUG(slug), { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete case study');
}
