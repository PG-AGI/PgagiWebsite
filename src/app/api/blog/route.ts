import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'blogs', `${slug}.mdx`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return NextResponse.json({ content: fileContents }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }
}
