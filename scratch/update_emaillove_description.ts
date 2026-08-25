import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  'AI-powered email template generation and autonomous template repair are not hypothetical capabilities — we built and delivered both as part of a coherent backend system grounded in real design system data, real campaign intent, and real visual output.';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'email-love-ai-powered-email-template-generation-and-repair' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: email-love-ai-powered-email-template-generation-and-repair');
    } else {
      console.log('Failed to find case study with slug: email-love-ai-powered-email-template-generation-and-repair');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
