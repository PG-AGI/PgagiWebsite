import {
  createBlog,
  deleteBlog,
  fetchAllBlogs,
  fetchBlogDetailsBySlug,
  updateBlog,
} from '@/services/blogService';
import {
  createAINews,
  deleteAINews,
  fetchAINewsDetailsBySlug,
  fetchAllAINews,
  updateAINews,
} from '@/services/ainewsService';
import {
  createCaseStudy,
  deleteCaseStudy,
  fetchAllCaseStudies,
  fetchCaseStudyBySlug,
  updateCaseStudy,
} from '@/services/caseStudyService';
import type { ContentDetails, ContentSummary, ContentType, FormValues } from '@/utils/type';

export async function fetchAllContentSummaries(): Promise<ContentSummary[]> {
  const [caseStudies, blogs, aiNews] = await Promise.all([
    fetchAllCaseStudies(),
    fetchAllBlogs(),
    fetchAllAINews(),
  ]);

  const caseStudyItems: ContentSummary[] = caseStudies.map((item) => ({
    slug: item.slug,
    title: item.title,
    coverImage: item.coverImage,
    contentType: 'caseStudy',
    id: item.id ?? item.slug,
  }));

  const blogItems: ContentSummary[] = blogs.map((item) => ({
    slug: item.slug,
    title: item.title,
    coverImage: item.coverImage,
    contentType: 'blog',
    id: item.slug,
  }));

  const aiNewsItems: ContentSummary[] = aiNews.map((item) => ({
    slug: item.slug,
    title: item.title,
    coverImage: item.coverImage,
    contentType: 'ainews',
    id: item.slug,
  }));

  return [...caseStudyItems, ...blogItems, ...aiNewsItems];
}

export async function fetchContentDetails(
  contentType: ContentType,
  slug: string
): Promise<ContentDetails> {
  if (contentType === 'caseStudy') return fetchCaseStudyBySlug(slug);
  if (contentType === 'blog') return fetchBlogDetailsBySlug(slug);
  return fetchAINewsDetailsBySlug(slug);
}

export async function createContent(contentType: ContentType, payload: FormValues): Promise<void> {
  if (contentType === 'caseStudy') return createCaseStudy(payload);
  if (contentType === 'blog') return createBlog(payload);
  return createAINews(payload);
}

export async function updateContent(
  contentType: ContentType,
  slug: string,
  payload: FormValues
): Promise<void> {
  if (contentType === 'caseStudy') return updateCaseStudy(slug, payload);
  if (contentType === 'blog') return updateBlog(slug, payload);
  return updateAINews(slug, payload);
}

export async function deleteContent(contentType: ContentType, slug: string): Promise<void> {
  if (contentType === 'caseStudy') return deleteCaseStudy(slug);
  if (contentType === 'blog') return deleteBlog(slug);
  return deleteAINews(slug);
}
