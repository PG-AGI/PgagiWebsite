import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const updates = [
  {
    slug: 'two-point-correlation-function-spatial-clustering',
    description: 'Real survey points show non-uniform spatial structure.',
  },
  {
    slug: 'cosmological-model-parameter-extraction',
    description:
      'The study demonstrates an end-to-end scientific computing workflow for transforming Type Ia supernova observations into fitted cosmological parameters through model-based data analysis. The final fitted model reported H0 = 67.903, Omega_m = 0.311, and Omega_Lambda = 0.745, with residual analysis used to compare observed and model-predicted distance modulus values.',
  },
];

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    for (const update of updates) {
      const result = await collection.updateOne(
        { slug: update.slug },
        { $set: { description: update.description, metaDescription: update.description } }
      );
      if (result.matchedCount > 0) {
        console.log(`Successfully updated description for slug: ${update.slug}`);
      } else {
        console.log(`Failed to find case study with slug: ${update.slug}`);
      }
    }
  } catch (error) {
    console.error('Error updating descriptions:', error);
  } finally {
    await client.close();
  }
}

run();
