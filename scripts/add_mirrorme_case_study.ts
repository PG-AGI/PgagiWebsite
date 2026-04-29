import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const caseStudy = {
      slug: 'mirror-me-ai-virtual-try-on',
      contentType: 'AI Digital Experience Report',
      coverImage: '/assets/CaseStudies/mirrorme/cs_mirrorme_cover.png',
      title: 'Mirror Me – AI Digital Experience Report: A Deep Dive into Virtual Try-On Technology',
      publishDate: 'April 25, 2026',
      readTime: '6 min read',
      author: {
        name: 'PG-AGI',
        role: 'Engineering Team',
      },
      description: 'An AI-powered virtual try-on platform that allows users to visualize themselves wearing different outfits in a highly realistic and personalized way.',
      metaDescription: 'A technical deep dive into Mirror Me, an AI-powered virtual try-on platform by PG-AGI.',
      metaKeywords: 'AI, Virtual Try-On, Fashion Tech, Computer Vision, Generative AI, Mirror Me, PG-AGI',
      metaAuthor: 'PG-AGI',
      metaTitle: 'Mirror Me – AI Digital Experience Report | PG-AGI',
      createdAt: new Date(),
      updatedAt: new Date(),
      sections: [
        {
          title: 'What We Built',
          content: [
            {
              type: 'paragraph',
              content: 'At PG-AGI, we designed and developed Mirror Me, an AI-powered virtual try-on platform that allows users to visualize themselves wearing different outfits in a highly realistic and personalized way.'
            },
            {
              type: 'paragraph',
              content: 'Unlike simple image overlay tools, Mirror Me is built as a context-aware visual intelligence system that adapts garments to user pose and body structure, generates photorealistic outputs, and provides intelligent size recommendations.'
            },
            {
              type: 'paragraph',
              content: 'The platform bridges computer vision, generative AI, and user-centric design to create a seamless digital styling experience, enhancing backgrounds and lighting for immersive visualization.'
            }
          ]
        },
        {
          title: 'Core Architecture',
          content: [
            {
              type: 'paragraph',
              content: 'Mirror Me is structured around three primary flows that ensure high-fidelity image generation and a smooth user experience.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/mirrorme/mirrorme_arch.png',
              alt: 'Mirror Me Architecture Diagram',
              caption: 'Figure 1: Mirror Me System Architecture'
            },
            {
              type: 'highlight',
              content: '1. User Input & Interaction Layer'
            },
            {
              type: 'paragraph',
              content: 'The mobile application (React Native) serves as the primary interface where users upload or take photos of themselves. The layer handles garment selection from an integrated catalog and captures necessary body mesh data to guide the AI generation process.'
            },
            {
              type: 'highlight',
              content: '2. AI Processing Core'
            },
            {
              type: 'paragraph',
              content: 'This is the engine of the platform. We implemented a hybrid approach using open-source models like IDM-VTON for high-precision garment transfer and FAL.ai APIs for rapid scaling and photorealistic refinement. The core handles pose estimation, garment deformation, and neural texture rendering.'
            },
            {
              type: 'highlight',
              content: '3. Backend & Infrastructure'
            },
            {
              type: 'paragraph',
              content: 'The system is backed by a high-performance FastAPI service layer deployed on compute clusters with dedicated GPU support. This ensures that complex diffusion-based in-painting and style transfer operations are completed in near real-time.'
            }
          ]
        },
        {
          title: 'Methodology & Engineering Decisions',
          content: [
            {
              type: 'paragraph',
              content: 'The development of Mirror Me required solving several complex engineering challenges in the field of AI and Computer Vision.'
            },
            {
              type: 'table',
              content: {
                headers: ['Feature', 'Technology Used', 'Outcome'],
                rows: [
                  ['Virtual Try-On', 'IDM-VTON / Stable Diffusion', 'High-fidelity garment transfer'],
                  ['Size Recommendation', 'GPT-4o / Analytics', 'Personalized fitting suggestions'],
                  ['Body Parsing', 'DensePose / MediaPipe', 'Accurate garment alignment'],
                  ['Real-time Inference', 'FastAPI / GPU Scaling', 'Low-latency user experience']
                ]
              }
            },
            {
              type: 'paragraph',
              content: 'One of our key decisions was to use a dual-AI strategy. For specific, high-end garments, we utilize custom-trained LoRAs to capture intricate details, while for generic catalog items, we leverage a generalized diffusion pipeline for maximum efficiency.'
            },
            {
              type: 'box',
              content: {
                heading: 'Product Impact',
                text: 'Mirror Me significantly reduces the return rates for e-commerce partners by giving users a realistic expectation of fit and style before purchase. It transforms a static shopping experience into an interactive digital wardrobing journey.'
              }
            }
          ]
        }
      ]
    };

    // Remove existing case study with the same slug if it exists
    await collection.deleteOne({ slug: caseStudy.slug });

    const result = await collection.insertOne(caseStudy);
    console.log(`New case study inserted with _id: ${result.insertedId}`);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
