import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const SLUG = 'order-loop-corimori-marketplace-order-automation';
const TITLE = 'ORDER LOOP';
const DESCRIPTION =
  "A two part automation backbone built for Corimori, a multi marketplace seller trading across Amazon and Otto. An AI pipeline reads order mail from ten storefronts, resolves each message against the seller's own order records, and drafts or sends the reply. Cori, a conversational assistant, keeps the reply playbook current. A separate daily job clears delivered Otto returns so the refund releases.";
const COVER_IMAGE = '/case-studies/order-loop-cover.png';

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
