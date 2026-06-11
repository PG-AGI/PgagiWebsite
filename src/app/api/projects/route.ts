// src/app/api/projects/route.ts
// GET /api/projects?category=ai-product|ai-business|ai-iot
// MongoDB (caseStudies) → title, description, coverImage, slug
// caseStudyMeta.ts     → techStack, metrics, highlight, liveUrl
// projects.ts          → tab categorisation (PROJECT_TAB)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { TabId, Project } from '@/data/projects';
import { PROJECT_TAB, RECENT_LAUNCH_TOP3 } from '@/data/projects';
import caseStudyMeta from '@/data/caseStudyMeta';
import clientPromise from '@/utils/mongodb';

export const dynamic = 'force-dynamic';

const VALID_TABS: TabId[] = ['ai-product', 'ai-business', 'ai-iot'];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') as TabId | null;

    const client = await clientPromise;
    const db = client.db('test');
    const docs = await db.collection('caseStudies').find({}).toArray();

    // Determine which slugs to show for this tab (in order)
    const tab = category && VALID_TABS.includes(category) ? category : null;
    const slugsToShow: string[] = tab ? (RECENT_LAUNCH_TOP3[tab] ?? []) : [];

    if (slugsToShow.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // Index MongoDB docs by slug for O(1) lookup
    const docBySlug = new Map(
      docs
        .filter((d) => d.slug)
        .map((d) => [d.slug as string, d])
    );

    const projects: Project[] = slugsToShow.flatMap((slug) => {
      const meta = caseStudyMeta[slug];
      if (!meta) return [];

      const doc = docBySlug.get(slug);
      const resolvedTab = PROJECT_TAB[slug] ?? tab!;

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

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('[/api/projects] Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
