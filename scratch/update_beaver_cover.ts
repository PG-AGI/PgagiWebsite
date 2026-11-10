import { MongoClient } from 'mongodb';

// Reads the connection string from the environment (MONGODB_URI in .env).
// Run with: node --env-file=.env --experimental-strip-types scratch/update_beaver_cover.ts
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('MONGODB_URI is not set');
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const slug = 'rs-engine-beaver-infra-ai-engineering-report-production';
    const newCoverImage = '/case-studies/RS-Engine_Beaver_Images/Beaver-cover-image.png';

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
