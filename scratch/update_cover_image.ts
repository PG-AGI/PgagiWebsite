import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const slug = 'digital-twin-ai-powered-expert-knowledge-platform';
    const newCoverImage = '/case-studies/ChatGPT Image May 1, 2026, 11_04_40 AM.png';

    const result = await collection.updateOne(
      { slug },
      { $set: { coverImage: newCoverImage } }
    );

    if (result.matchedCount > 0) {
      console.log(`Successfully updated cover image for case study: ${slug}`);
    } else {
      console.log(`Case study with slug "${slug}" not found.`);
    }
  } catch (error) {
    console.error('Error updating cover image:', error);
  } finally {
    await client.close();
  }
}

run();
