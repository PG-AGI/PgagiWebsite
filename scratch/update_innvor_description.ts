import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  'Innvor.ai is an end-to-end, AI-first clinical engagement and documentation platform built for the broader healthcare ecosystem - physicians, clinics, and hospitals - and the patients they serve.';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'innvor-ai-clinical-engagement-documentation-platform' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: innvor-ai-clinical-engagement-documentation-platform');
    } else {
      console.log('Failed to find case study with slug: innvor-ai-clinical-engagement-documentation-platform');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
