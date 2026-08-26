// src/services/getCaseStudies.ts
//
// Server-only data access for the /projects listing.
// Replaces the client-side `fetchAllCaseStudies()` waterfall (useEffect ->
// /api/case-studies -> MongoDB) so the case-study cards — and their <img>
// tags — can be server-rendered into the initial HTML instead of appearing
// only after hydration + a network round-trip.
//
// Query + projection are identical to the GET in
// src/app/api/case-studies/route.ts, so the shape the client renders is
// unchanged. Wrapped in try/catch so a transient Mongo hiccup at build time
// degrades to an empty list (page still builds; ISR refills it) rather than
// failing the deploy.

import 'server-only';
import clientPromise from '@/utils/mongodb';
import { coverPlaceholder } from '@/services/imagePlaceholder';

// Plain, JSON-serializable shape — safe to pass from a Server Component to
// the Projects client component.
export interface CaseStudySummary {
  slug: string;
  title: string;
  coverImage: string;
  description?: string;
  // Dominant-colour placeholder (data URI) for next/image placeholder="blur".
  blurDataURL: string;
}

export async function getCaseStudies(): Promise<CaseStudySummary[]> {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('caseStudies');

    const docs = await collection
      .find(
        {},
        { projection: { slug: 1, title: 1, coverImage: 1, description: 1, metaDescription: 1, order: 1 } }
      )
      .sort({ order: 1 })
      .toArray();

    const summaries: CaseStudySummary[] = docs.map((d) => ({
      slug: d.slug as string,
      title: d.title as string,
      coverImage: d.coverImage as string,
      description: (d.metaDescription || d.description) as string | undefined,
      blurDataURL: '',
    }));

    // Attach a dominant-colour placeholder per cover (build-time, parallel).
    await Promise.all(
      summaries.map(async (s) => { s.blurDataURL = await coverPlaceholder(s.coverImage); })
    );

    return summaries;
  } catch (error) {
    console.error('[getCaseStudies] Error:', error);
    return [];
  }
}
