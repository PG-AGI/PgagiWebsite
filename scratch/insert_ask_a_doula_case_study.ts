import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const SLUG = 'ask-a-doula-ai-parenting-companion';
const TITLE = 'Ask a Doula';
const DESCRIPTION =
  "A mobile-first, AI-powered parenting companion that puts a doula in every new parent's pocket. It streams child-aware answers from pregnancy through the first year, and a deterministic safety layer surfaces crisis resources the moment a parent needs them. Alongside the chat sit five-area baby-care tracking with trend charts and daily wellness check-ins. Family sharing lets a partner, grandparent or nanny help care for the child under the parent's plan.";
const COVER_IMAGE = '/case-studies/Ask-a-Doula-Images/Ask-a-Doula-Images/05_Web_App_Home_Dashboard.png';

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
      contentType: 'case-study',
      title: TITLE,
      description: DESCRIPTION,
      metaDescription: DESCRIPTION,
      metaTitle: `${TITLE} | PG-AGI Case Study`,
      metaAuthor: 'PG-AGI',
      coverImage: COVER_IMAGE,
      publishDate: new Date().toISOString().slice(0, 10),
      readTime: '5 min read',
      author: { name: 'PG-AGI', role: 'Engineering' },
      sections: [
        {
          title: 'Overview',
          content: [{ type: 'paragraph', content: DESCRIPTION }],
        },
      ],
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
