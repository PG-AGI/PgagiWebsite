// src/app/api/projects/route.ts
// GET /api/projects?category=ai-product|ai-business|ai-iot
// Returns project portfolio data filtered by category (tab).
// Source: MongoDB — database: test, collection: caseStudies

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { TabId } from '@/data/projects';
import clientPromise from '@/utils/mongodb';

export const dynamic = 'force-dynamic';

const VALID_TABS: TabId[] = ['ai-product', 'ai-business', 'ai-iot'];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') as TabId | null;

    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('caseStudies');

    const query =
      category && VALID_TABS.includes(category) ? { tab: category } : {};

    const docs = await collection.find(query).toArray();

    const projects = docs.map(({ _id, ...rest }) => ({
      id: rest.id ?? _id.toString(),
      ...rest,
    }));

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('[/api/projects] Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
