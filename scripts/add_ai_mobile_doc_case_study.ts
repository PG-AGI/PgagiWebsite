import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const caseStudy = {
      slug: 'ai-mobile-doc',
      contentType: 'Engineering, Architecture & Product Deep-Dive',
      coverImage: '/images/cs_ai_mobile_doc.png',
      title: 'AI Mobile Doc',
      publishDate: 'April 29, 2026',
      readTime: '10 min read',
      author: {
        name: 'PG-AGI',
        role: 'Engineering & Product Team',
      },
      description: "A deep-dive into the engineering, architecture, and product decisions behind PG-AGI's AI-powered healthcare platform.",
      metaDescription: "A deep-dive into the engineering, architecture, and product decisions behind PG-AGI's AI-powered healthcare platform.",
      metaKeywords: 'Healthcare AI, AI Doctor, Medical AI, FastAPI, MongoDB, Gemini 2.0, Patient Care AI',
      metaAuthor: 'PG-AGI',
      metaTitle: 'AI Mobile Doc: AI-Powered Healthcare Platform | PG-AGI',
      createdAt: new Date(),
      updatedAt: new Date(),
      sections: [
        {
          title: 'I. What We Built',
          content: [
            {
              type: 'paragraph',
              content: "At PG-AGI, we designed and shipped a full-stack AI healthcare platform that enables doctors to encode their clinical knowledge, communication style, and practice workflows into a living conversational AI Agent — available to patients across multiple channels, 24/7."
            },
            {
              type: 'paragraph',
              content: "This is not a chatbot builder or a simple FAQ bot. It is a structured medical intelligence system where every AI response is grounded in a verified doctor’s documented reasoning, practice guidelines, and clinical context."
            },
            {
              type: 'paragraph',
              content: "Patients can interact naturally with a doctor’s AI Agent, receive contextual care guidance, book appointments, upload records, and connect directly with the real doctor when needed."
            }
          ]
        },
        {
          title: 'II. Core Architecture',
          content: [
            {
              type: 'paragraph',
              content: "The platform is centered around two primary flows: Doctor Knowledge Capture and Patient Discovery & Interaction. Both flows are connected through a shared AI orchestration layer."
            },
            {
              type: 'highlight',
              content: 'Tech Stack & Infrastructure'
            },
            {
              type: 'paragraph',
              content: "• Backend: FastAPI for high async performance, clean dependency injection, and strong typing with Pydantic.\n• Data Layer: MongoDB Atlas for storing doctor profiles, agent configurations, patient records, and knowledge documents. The async Motor driver keeps all database operations non-blocking.\n• Cache & Sessions: Redis powers session caching, OAuth state tokens, and WebSocket persistence.\n• AI Layer: Google Gemini 2.0 Flash through an internal abstraction service for rate limiting, streaming, and token accounting."
            }
          ]
        },
        {
          title: 'III. Doctor Agent Creation',
          content: [
            {
              type: 'paragraph',
              content: "Doctor knowledge enters through a guided onboarding wizard progressive collecting specialization, practice context, tone, and escalation rules. All responses become structured configuration documents."
            },
            {
              type: 'paragraph',
              content: "Doctors can upload clinical PDFs, FAQs, and SOPs which are processed using OCR and PDF parsing, stored in Google Cloud Storage, and linked to the AI Agent."
            }
          ]
        },
        {
          title: 'IV. Voice-Based Interaction',
          content: [
            {
              type: 'paragraph',
              content: "Both doctors and patients can interact via voice. The pipeline handles audio upload, format normalization, speech-to-text transcription, AI processing, and voice synthesis return. Voice is treated as a transport layer, keeping the underlying reasoning engine identical to text."
            }
          ]
        },
        {
          title: 'V. Playground — Draft & Live Modes',
          content: [
            {
              type: 'paragraph',
              content: "A critical product decision was separating Draft and Live modes. In Draft Mode, doctors can safely edit prompts, change tone, and test edge cases without affecting real patient traffic. Once ready, they publish to Live Mode, ensuring continuous iteration without disruption."
            }
          ]
        },
        {
          title: 'VI. Automated Agent Testing',
          content: [
            {
              type: 'paragraph',
              content: "Doctors can run built-in evaluation systems that test clinical consistency, response quality, safety boundaries, and booking success flows. Reports generate scores and recommendations, creating a measurable launch-readiness system."
            }
          ]
        },
        {
          title: 'VII. Patient Discovery & Channel Routing',
          content: [
            {
              type: 'paragraph',
              content: "Patients reach doctors through In-App Chat, Instagram DMs, and WhatsApp. All three channels use the same AI engine; the channel only changes transport metadata, allowing doctors to 'configure once, deploy everywhere'."
            }
          ]
        },
        {
          title: 'VIII. Conversational AI Engine',
          content: [
            {
              type: 'paragraph',
              content: "Each patient query sends a dynamic prompt including doctor system instructions, knowledge base context, and prior history. The agent can perform real actions mid-chat like booking appointments via Cal.com, capturing leads, or escalating urgent cases."
            }
          ]
        },
        {
          title: 'IX. Performance & Reliability Controls',
          content: [
            {
              type: 'paragraph',
              content: "To maintain low latency, we implemented global and per-user concurrency caps, queue depth protection, and token bucket pacing. This prevents high traffic for one doctor from degrading the system for others."
            }
          ]
        },
        {
          title: 'X. Subscription System & Monetisation',
          content: [
            {
              type: 'paragraph',
              content: "Doctors subscribe via Stripe with plans mapping to token quotas. We use a soft enforcement model: instead of blocking patients when limits are hit, internal warnings are raised and conversations continue, protecting the patient experience."
            }
          ]
        },
        {
          title: 'XI. Patient-Facing Features',
          content: [
            {
              type: 'paragraph',
              content: "• Appointment Booking: Direct booking via Cal.com inside conversation flows.\n• Document Uploads: Secure upload of medical reports and lab results.\n• Notifications: Real-time alerts for bookings and follow-ups.\n• Expert Escalation: Direct doctor access when AI is insufficient."
            }
          ]
        },
        {
          title: 'XII. Doctor Analytics Dashboard',
          content: [
            {
              type: 'paragraph',
              content: "Doctors receive operational intelligence including usage metrics (chats, volume), business metrics (bookings, leads), and AI metrics (token usage, channel performance), enabling evidence-based refinement."
            }
          ]
        },
        {
          title: 'XIII. Security & Auditability',
          content: [
            {
              type: 'paragraph',
              content: "Robust security includes JWT authentication, Role-Based Access Control, verified webhooks, and multi-factor authentication. All patient data remains permission-scoped with session TTL controls."
            }
          ]
        },
        {
          title: 'XIV. What Makes This Different',
          content: [
            {
              type: 'paragraph',
              content: "1. Doctor-Centric AI: Reflects a real doctor's expertise and style.\n2. Multi-Channel: Powers App, Instagram, and WhatsApp from one config.\n3. Safe Iteration: Draft/Live separation for risk-free updates.\n4. Soft Billing: Care journeys are never cut off mid-way.\n5. Evaluation Framework: Measurable quality signals before publishing."
            }
          ]
        },
        {
          title: 'XV. Closing',
          content: [
            {
              type: 'paragraph',
              content: "AI Mobile Doc represents PG-AGI’s philosophy: clinical context, multi-channel scalability, production reliability, and security. It creates an AI agent patients can trust because it is genuinely an extension of a real doctor’s practice."
            }
          ]
        }
      ]
    };

    const existing = await collection.findOne({ slug: caseStudy.slug });
    if (existing) {
      await collection.updateOne({ slug: caseStudy.slug }, { $set: caseStudy });
      console.log('Case Study updated successfully');
    } else {
      await collection.insertOne(caseStudy);
      console.log('Case Study created successfully');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

run();
