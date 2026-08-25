import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  "The Digital Twin platform represents PG-AGI's approach to AI-powered knowledge products: grounded in real expert reasoning, architected for explainability, and designed to earn user trust through transparency rather than just capability. Every architectural decision, structured ingestion, deterministic ranking, twin-scoped RAG, draft/live isolation, was made in service of that goal.";

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'digital-twin-ai-powered-expert-knowledge-platform' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: digital-twin-ai-powered-expert-knowledge-platform');
    } else {
      console.log('Failed to find case study with slug: digital-twin-ai-powered-expert-knowledge-platform');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
