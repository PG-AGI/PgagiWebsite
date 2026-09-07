// src/services/getRecentLaunchProjects.ts
//
// Server-only data access for the landing "Recent Launch" section.
// Replaces the client-side waterfall in RecentLaunchSection (useEffect ->
// /api/projects?category=... -> MongoDB, one round-trip per tab).
//
// Fetches ALL THREE tabs in a single Mongo query and returns them keyed by
// tab, so the client component can render any tab instantly (no fetch, no
// loading skeleton) — this is what makes tab-switching feel immediate.
//
// Logic mirrors the GET in src/app/api/projects/route.ts (same collection,
// same slug -> doc + caseStudyMeta merge). Wrapped in try/catch so a build-
// time Mongo hiccup degrades to empty tabs (page still builds; ISR refills)
// rather than failing the deploy.

import 'server-only';
import type { TabId, Project } from '@/data/projects';
import { PROJECT_TAB, RECENT_LAUNCH_TOP3 } from '@/data/projects';
import caseStudyMeta from '@/data/caseStudyMeta';
import clientPromise from '@/utils/mongodb';
import { coverPlaceholder } from '@/services/imagePlaceholder';

export type RecentLaunchProjects = Record<TabId, Project[]>;

const emptyResult = (): RecentLaunchProjects => ({
  'ai-product': [],
  'ai-business': [],
  'ai-iot': [],
});

export async function getRecentLaunchProjects(): Promise<RecentLaunchProjects> {
  try {
    const client = await clientPromise;
    // Matches /api/projects, which reads the caseStudies collection from the
    // 'test' database explicitly.
    const db = client.db('test');
    const docs = await db.collection('caseStudies').find({}).toArray();

    // Index MongoDB docs by slug for O(1) lookup.
    const docBySlug = new Map(
      docs.filter((d) => d.slug).map((d) => [d.slug as string, d])
    );

    const buildTab = (tab: TabId): Project[] =>
      (RECENT_LAUNCH_TOP3[tab] ?? []).flatMap((slug) => {
        const meta = caseStudyMeta[slug];
        if (!meta) return [];

        const doc = docBySlug.get(slug);
        const resolvedTab = PROJECT_TAB[slug] ?? tab;

        return [{
          id:            doc ? doc._id.toString() : slug,
          title:         (doc?.title as string) ?? slug,
          description:   (doc?.metaDescription ?? doc?.description) as string | undefined,
          techStack:     meta.techStack,
          metrics:       meta.metrics,
          highlight:     meta.highlight,
          screenshot:    (doc?.coverImage as string) ?? '/landing/PGAGI-logo.png',
          caseStudySlug: doc ? slug : null,
          liveUrl:       meta.liveUrl ?? (doc?.liveUrl as string | null | undefined),
          tab:           resolvedTab,
        }];
      });

    const result: RecentLaunchProjects = {
      'ai-product':  buildTab('ai-product'),
      'ai-business': buildTab('ai-business'),
      'ai-iot':      buildTab('ai-iot'),
    };

    // Attach a dominant-colour placeholder per cover (build-time, parallel).
    const all = [...result['ai-product'], ...result['ai-business'], ...result['ai-iot']];
    await Promise.all(
      all.map(async (p) => { p.blurDataURL = await coverPlaceholder(p.screenshot); })
    );

    return result;
  } catch (error) {
    console.error('[getRecentLaunchProjects] Error:', error);
    return emptyResult();
  }
}
