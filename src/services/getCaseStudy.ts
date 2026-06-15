// Target path in your repo: src/services/getCaseStudy.ts
//
// Server-only data access for a single case study.
// Replaces the client-side `fetchCaseStudyBySlug` waterfall AND the
// self-referential axios hop that `generateMetadata` used to make to
// https://pgagi.in/api/... . This queries MongoDB directly and is cached,
// so the /case-study/[slug] route can be statically rendered (ISR) and
// therefore cached by Cloudflare (public s-maxage instead of `private`).
 
import 'server-only'; // ships with Next; if TS complains: npm i server-only
import clientPromise from '@/utils/mongodb';
import { generateSlug } from '@/services/generateSlugService';
 
// Plain, JSON-serializable shape (ObjectId -> string, Date -> ISO string)
// so it is safe to cache and to pass from a Server Component to a Client one.
export interface CaseStudyData {
  id: string;
  slug: string;
  contentType?: string;
  coverImage: string;
  title: string;
  publishDate: string;
  readTime: string;
  author: { name: string; role: string };
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  metaAuthor?: string;
  // Content blocks are rendered by the existing CaseStudy.tsx, which owns the
  // strict ContentBlock union. Kept loose here to avoid duplicating that type.
  sections: { title: string; content: unknown[] }[];
  createdAt: string;
  updatedAt: string;
}
 
function normalizeSlug(value: string): string {
  return generateSlug(decodeURIComponent(value ?? '').trim());
}
 
function toIso(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'string') return value;
  return '';
}
 
// Raw query — identical lookup chain to the original GET in
// src/app/api/case-studies/[slug]/route.ts (exact-match, decoded, normalized,
// then a title/slug scan fallback).
async function queryCaseStudyBySlug(slug: string): Promise<CaseStudyData | null> {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('caseStudies');
 
  const requestedSlug = normalizeSlug(slug);
  const decodedSlug = decodeURIComponent(slug);
 
  let doc = await collection.findOne({ slug });
 
  if (!doc && decodedSlug !== slug) {
    doc = await collection.findOne({ slug: decodedSlug });
  }
 
  if (!doc && requestedSlug !== slug) {
    doc = await collection.findOne({ slug: requestedSlug });
  }
 
  if (!doc) {
    const all = await collection
      .find({}, { projection: { slug: 1, title: 1 } })
      .toArray();
 
    const matched = all.find((item) => {
      const storedSlug = normalizeSlug(String(item.slug ?? ''));
      const titleBasedSlug = generateSlug(String(item.title ?? ''));
      return storedSlug === requestedSlug || titleBasedSlug === requestedSlug;
    });
 
    if (matched?._id) {
      doc = await collection.findOne({ _id: matched._id });
    }
  }
 
  if (!doc) return null;
 
  const { _id, createdAt, updatedAt, ...rest } = doc;
 
  return {
    id: String(_id),
    ...(rest as Omit<CaseStudyData, 'id' | 'createdAt' | 'updatedAt'>),
    createdAt: toIso(createdAt),
    updatedAt: toIso(updatedAt),
  };
}
 
// Return fresh DB results on every request (no Next cache).
export async function getCaseStudy(slug: string): Promise<CaseStudyData | null> {
  return await queryCaseStudyBySlug(slug);
}