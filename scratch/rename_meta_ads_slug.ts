import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const OLD_SLUG = 'meta-ads-ai-agent-competitor-creative-intelligence-and-campaign-automation';
const NEW_SLUG = 'meta-case-study';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: OLD_SLUG },
      { $set: { slug: NEW_SLUG } }
    );

    if (result.matchedCount > 0) {
      console.log(`Renamed slug ${OLD_SLUG} -> ${NEW_SLUG}`);
    } else {
      console.log(`Failed to find case study with slug: ${OLD_SLUG}`);
    }
  } catch (error) {
    console.error('Error renaming slug:', error);
  } finally {
    await client.close();
  }
}

run();
