// src/app/api/projects/route.ts
// GET /api/projects?category=ai-product|ai-business|ai-iot
// MongoDB (caseStudies) → title, description, coverImage, slug
// caseStudyMeta.ts     → techStack, metrics, highlight, liveUrl
// projects.ts          → tab categorisation (PROJECT_TAB)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { TabId, Project } from '@/data/projects';
import { PROJECT_TAB } from '@/data/projects';
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

    const projects: Project[] = docs.flatMap((doc) => {
      const slug = doc.slug as string | undefined;
      if (!slug) return [];

      const tab = PROJECT_TAB[slug];
      if (!tab) return []; // not listed in PROJECT_TAB — skip

      const meta = caseStudyMeta[slug];

      return [{
        id:            doc._id.toString(),
        title:         doc.title                                          as string,
        description:   (doc.metaDescription ?? doc.description)          as string | undefined,
        techStack:     meta?.techStack,
        metrics:       meta?.metrics,
        highlight:     meta?.highlight,
        screenshot:    doc.coverImage                                     as string,
        caseStudySlug: slug,
        liveUrl:       meta?.liveUrl ?? (doc.liveUrl as string | null | undefined),
        tab,
      }];
    });

    const filtered =
      category && VALID_TABS.includes(category)
        ? projects.filter((p) => p.tab === category)
        : projects;

    return NextResponse.json(filtered, { status: 200 });
  } catch (error) {
    console.error('[/api/projects] Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
