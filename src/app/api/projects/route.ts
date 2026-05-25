// src/app/api/projects/route.ts
// GET /api/projects?category=ai-product|ai-business|ai-iot
// Returns project portfolio data filtered by category (tab).
// Source: static data/projects.ts enriched with MongoDB case-study meta where available.

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import PROJECTS from '@/data/projects';
import type { TabId } from '@/data/projects';

export const dynamic = 'force-dynamic';

const VALID_TABS: TabId[] = ['ai-product', 'ai-business', 'ai-iot'];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') as TabId | null;

    const filtered =
      category && VALID_TABS.includes(category)
        ? PROJECTS.filter((p) => p.tab === category)
        : PROJECTS;

    return NextResponse.json(filtered, { status: 200 });
  } catch (error) {
    console.error('[/api/projects] Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
