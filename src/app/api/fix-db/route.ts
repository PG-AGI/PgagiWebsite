
import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'ai-mobile-doc' },
      { 
        $set: { 
          title: 'AI Mobile application for Doctors',
          description: 'AI multi-agent architecture mobile application for doctors to Automate end to end pre consultation process',
          metaDescription: 'AI multi-agent architecture mobile application for doctors to Automate end to end pre consultation process'
        } 
      }
    );

    return NextResponse.json({ 
      message: 'Database updated', 
      matchedCount: result.matchedCount, 
      modifiedCount: result.modifiedCount 
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
