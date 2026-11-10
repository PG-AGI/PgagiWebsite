import { MongoClient } from 'mongodb';

// Reads the connection string from the environment (MONGODB_URI in .env).
// Run with: node --env-file=.env --experimental-strip-types scratch/insert_beaver_case_study.ts
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('MONGODB_URI is not set');
const client = new MongoClient(uri);

const SLUG = 'rs-engine-beaver-infra-ai-engineering-report-production';
const TITLE = 'Beaver Infra Consultants';
const DESCRIPTION =
  'A production report-generation platform for an infrastructure design consultancy, turning structured Excel inputs into reviewed, issued engineering reports — built on the client’s own approved templates, a three-layer validation gate with a bounded AI review, rendered-page version comparison, role-separated review and release, and an immutable audit trail, and shipped end to end to production on the client’s own AWS account.';
const COVER_IMAGE = '/case-studies/RS-Engine_Beaver_Images/Beaver-cover-image.png';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const existing = await collection.findOne({ slug: SLUG });
    if (existing) {
      console.log(`Case study already exists for slug: ${SLUG}`);
      return;
    }

    const maxOrderDoc = await collection.find().sort({ order: -1 }).limit(1).toArray();
    const nextOrder = (maxOrderDoc[0]?.order ?? 0) + 1;

    const result = await collection.insertOne({
      slug: SLUG,
      contentType: 'case-study',
      title: TITLE,
      description: DESCRIPTION,
      metaDescription: DESCRIPTION,
      metaTitle: `${TITLE} | PG-AGI Case Study`,
      metaAuthor: 'PG-AGI',
      coverImage: COVER_IMAGE,
      publishDate: new Date().toISOString().slice(0, 10),
      readTime: '8 min read',
      author: { name: 'PG-AGI', role: 'Engineering' },
      sections: [
        {
          title: 'Overview',
          content: [{ type: 'paragraph', content: DESCRIPTION }],
        },
      ],
      order: nextOrder,
    });

    console.log(`Inserted case study with slug: ${SLUG}, _id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error inserting case study:', error);
  } finally {
    await client.close();
  }
}

run();
