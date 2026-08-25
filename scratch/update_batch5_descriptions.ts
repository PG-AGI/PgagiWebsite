import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const updates = [
  {
    slug: 'sheltas-health-dataset-annotation-platform',
    description:
      'Sheltas Health is a secure, end-to-end workflow platform that manages healthcare dataset annotation projects from raw dataset upload through to validated, training-ready output. The platform connects three distinct stakeholder groups inside a single governed environment: AI partners who commission annotation work, healthcare practitioners who perform the annotations, and platform administrators who supervise onboarding, quality assurance, and validation.',
  },
  {
    slug: 'sentlogic-instagram-engagement-revenue-attribution',
    description:
      'Sentlogic is an enterprise SaaS platform built directly on top of a live Instagram automation engine. The automation engine itself - keyword detection, follow-gate validation, and first-touch DM dispatch - remains unchanged. Sentlogic wraps it in the full product layer required to operate it as a scalable, multi-tenant SaaS business.',
  },
  {
    slug: 'hermayhem-leading-her-ways-cycle-aware-ai-productivity',
    description:
      'HerMayhem is an intelligent, cycle-aware productivity platform that helps women align their work and decisions with their biological rhythms instead of following rigid systems. It moves beyond simple cycle tracking to act as a proactive AI assistant that guides users every day on what to focus on, what to avoid, and how to optimize both productivity and wellbeing.',
  },
  {
    slug: 'vook-ai-wireless-microphone-companion-app',
    description:
      'A companion app that turns a phone into a real-time audio control surface for a wireless microphone system — built on a bidirectional USB-HID control channel, a dual transmitter binary protocol, AI audio post-processing, and a 180+ test firmware regression suite',
  },
  {
    slug: 'fomo',
    description:
      'Fomo is an AI-powered platform at the intersection of decentralization and autonomous agents, engineered to automate high-conversion workflows and integrate seamlessly with decentralized agent networks.',
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
