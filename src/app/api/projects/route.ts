// src/app/api/projects/route.ts
// GET /api/projects?category=ai-product|ai-business|ai-iot
// Fetches all case studies from MongoDB and filters by tab if provided.
// MongoDB field mapping: slug → caseStudySlug, coverImage → screenshot.
// Docs without a tab field appear in all categories.

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { TabId, Project } from '@/data/projects';
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

    const projects: Project[] = docs.map((doc) => ({
      id:            doc._id.toString(),
      title:         doc.title        as string,
      description:   doc.description  as string | undefined,
      techStack:     doc.techStack    as string[] | undefined,
      metrics:       doc.metrics      as { value: string; label: string }[] | undefined,
      highlight:     doc.highlight    as string | undefined,
      screenshot:    doc.coverImage   as string,   // coverImage → screenshot
      caseStudySlug: doc.slug         as string ?? null,
      liveUrl:       doc.liveUrl      as string | null | undefined,
      tab:           doc.tab          as TabId | undefined,
    }));

    // If category requested: include docs that match OR have no tab (unclassified)
    const filtered =
      category && VALID_TABS.includes(category)
        ? projects.filter((p) => !p.tab || p.tab === category)
        : projects;

    return NextResponse.json(filtered, { status: 200 });
  } catch (error) {
    console.error('[/api/projects] Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
