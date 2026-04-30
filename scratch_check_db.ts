import clientPromise from './src/utils/mongodb';

async function check() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('caseStudies');
    const doc = await collection.findOne({ slug: 'ai-mobile-doc' });
    console.log('AI Mobile Doc:', JSON.stringify(doc, null, 2));
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
}

check();
