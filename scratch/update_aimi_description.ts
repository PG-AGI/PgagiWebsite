import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  'AIMI Brain — a real-time conversational financial intelligence platform that gives retail investors and finance professionals access to institutional-grade macro analysis through natural language. The system combines retrieval-augmented generation (RAG) with live web data, document analysis, and a high-performance streaming architecture.';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'aimi-brain-real-time-financial-intelligence' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: aimi-brain-real-time-financial-intelligence');
    } else {
      console.log('Failed to find case study with slug: aimi-brain-real-time-financial-intelligence');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
