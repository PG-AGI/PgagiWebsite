import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  "The AI Ecommerce Arbitrage Platform represents PG-AGI's approach to marketplace automation: grounded in real operational requirements, architected for auditability, and designed to reduce the manual maintenance burden that makes most automation systems fragile over time.";

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'ai-ecommerce-arbitrage-platform' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: ai-ecommerce-arbitrage-platform');
    } else {
      console.log('Failed to find case study with slug: ai-ecommerce-arbitrage-platform');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
