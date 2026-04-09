import API_ENDPOINTS from '@/constants/apiEndpoints';
import type { Blog } from '@/types';
import type { ContentDetails, FormValues } from '@/utils/type';

export async function fetchAllBlogs(): Promise<Blog[]> {
  const res = await fetch(API_ENDPOINTS.BLOGS);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json() as Promise<Blog[]>;
}

export async function fetchBlogBySlug(slug: string): Promise<Blog> {
  const res = await fetch(API_ENDPOINTS.BLOG_BY_SLUG(slug));
  if (!res.ok) throw new Error(`Failed to fetch blog: ${slug}`);
  return res.json() as Promise<Blog>;
}

export interface BlogMarkdownResponse {
  content: string;
  error?: string;
}

export async function fetchBlogMarkdownBySlug(slug: string): Promise<BlogMarkdownResponse> {
  const res = await fetch(API_ENDPOINTS.BLOG_BY_SLUG(slug));
  if (!res.ok) throw new Error(`Failed to fetch blog markdown: ${slug}`);
  return res.json() as Promise<BlogMarkdownResponse>;
}

export async function fetchBlogDetailsBySlug(slug: string): Promise<ContentDetails> {
  const res = await fetch(API_ENDPOINTS.BLOG_BY_SLUG(slug));
  if (!res.ok) throw new Error(`Failed to fetch blog details: ${slug}`);
  return res.json() as Promise<ContentDetails>;
}

export async function createBlog(payload: FormValues): Promise<void> {
  const res = await fetch(API_ENDPOINTS.BLOGS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create blog');
}

export async function updateBlog(slug: string, payload: FormValues): Promise<void> {
  const res = await fetch(API_ENDPOINTS.BLOG_BY_SLUG(slug), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update blog');
}

export async function deleteBlog(slug: string): Promise<void> {
  const res = await fetch(API_ENDPOINTS.BLOG_BY_SLUG(slug), { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete blog');
}
