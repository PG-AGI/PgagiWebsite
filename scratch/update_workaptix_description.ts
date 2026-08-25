import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  'Workaptix is an intelligent AI-powered platform engineered to streamline talent sourcing, profile verification, and automated workflows. By integrating bespoke AI evaluation models with enterprise workflows, Workaptix reduces recruitment cycles while guaranteeing deep domain competency and credential verification.';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'workaptix-ai-sourcing-validation-verification' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: workaptix-ai-sourcing-validation-verification');
    } else {
      console.log('Failed to find case study with slug: workaptix-ai-sourcing-validation-verification');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
