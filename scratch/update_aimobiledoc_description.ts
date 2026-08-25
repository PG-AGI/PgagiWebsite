import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  "AI Mobile Doc represents PG-AGI’s philosophy: clinical context, multi-channel scalability, production reliability, and security. It creates an AI agent patients can trust because it is genuinely an extension of a real doctor’s practice.";

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'ai-mobile-doc' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: ai-mobile-doc');
    } else {
      console.log('Failed to find case study with slug: ai-mobile-doc');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
