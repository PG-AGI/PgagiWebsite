import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const SLUG = 'meta-ads-ai-agent-competitor-creative-intelligence-and-campaign-automation';
const TITLE = 'Meta Ads AI Agent: Competitor Creative Intelligence, Automated Campaign Creation and Optimization';
const DESCRIPTION =
  'An internal AI production platform that turns a marketing hypothesis into a campaign-ready script and launch-ready creative set — built on a 5-stage AI writing pipeline, human-in-the-loop review with full version history, 4-role RBAC, and a 3-mode Image Studio, and shipped end to end from proof-of-concept discovery to a production deployment on Google Cloud Run.';
const COVER_IMAGE = '/case-studies/meta-ads-ai-agent-cover-red-tagged.png';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const existing = await collection.findOne({ slug: SLUG });
    if (existing) {
      console.log(`Case study already exists for slug: ${SLUG}`);
      return;
    }

    const maxOrderDoc = await collection.find().sort({ order: -1 }).limit(1).toArray();
    const nextOrder = (maxOrderDoc[0]?.order ?? 0) + 1;

    const result = await collection.insertOne({
      slug: SLUG,
      title: TITLE,
      description: DESCRIPTION,
      metaDescription: DESCRIPTION,
      coverImage: COVER_IMAGE,
      order: nextOrder,
    });

    console.log(`Inserted case study with slug: ${SLUG}, _id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error inserting case study:', error);
  } finally {
    await client.close();
  }
}

run();
