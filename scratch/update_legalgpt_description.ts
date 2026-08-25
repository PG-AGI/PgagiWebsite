import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  "LegalSpendGPT is an end-to-end AI system designed to automate how legal teams ingest, extract, validate, and analyze invoice data using Microsoft's Azure ecosystem.";

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'legalspendgpt-invoice-intelligence' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: legalspendgpt-invoice-intelligence');
    } else {
      console.log('Failed to find case study with slug: legalspendgpt-invoice-intelligence');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
