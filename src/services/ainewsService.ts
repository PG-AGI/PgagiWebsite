import API_ENDPOINTS from '@/constants/apiEndpoints';
import type { AINews } from '@/types';
import type { ContentDetails, FormValues } from '@/utils/type';

export async function fetchAllAINews(): Promise<AINews[]> {
  const res = await fetch(API_ENDPOINTS.AINEWS);
  if (!res.ok) throw new Error('Failed to fetch AI news');
  return res.json() as Promise<AINews[]>;
}

export async function fetchAINewsBySlug(slug: string): Promise<AINews> {
  const res = await fetch(API_ENDPOINTS.AINEWS_BY_SLUG(slug));
  if (!res.ok) throw new Error(`Failed to fetch AI news: ${slug}`);
  return res.json() as Promise<AINews>;
}

export async function fetchAINewsDetailsBySlug(slug: string): Promise<ContentDetails> {
  const res = await fetch(API_ENDPOINTS.AINEWS_BY_SLUG(slug));
  if (!res.ok) throw new Error(`Failed to fetch AI news details: ${slug}`);
  return res.json() as Promise<ContentDetails>;
}

export async function createAINews(payload: FormValues): Promise<void> {
  const res = await fetch(API_ENDPOINTS.AINEWS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create AI news');
}

export async function updateAINews(slug: string, payload: FormValues): Promise<void> {
  const res = await fetch(API_ENDPOINTS.AINEWS_BY_SLUG(slug), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update AI news');
}

export async function deleteAINews(slug: string): Promise<void> {
  const res = await fetch(API_ENDPOINTS.AINEWS_BY_SLUG(slug), { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete AI news');
}
