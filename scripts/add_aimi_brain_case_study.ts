import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const caseStudy = {
      slug: 'aimi-brain-real-time-financial-intelligence',
      contentType: 'Technical Case Study & Architecture Deep-Dive',
      coverImage: '/images/cs_aimi_brain_v3.png',
      title: 'AIMI Brain: Real-Time Financial Intelligence',
      publishDate: 'April 28, 2026',
      readTime: '15 min read',
      author: {
        name: 'PG-AGI',
        role: 'Engineering & AI Research Team',
      },
      metaDescription: 'A deep-dive into the engineering, architecture, and product decisions behind PG-AGI\'s real-time financial intelligence platform, AIMI Brain.',
      metaKeywords: 'Financial AI, RAG, WebSockets, Real-time Intelligence, Macro Analysis, PG-AGI, AIMI Brain',
      metaAuthor: 'PG-AGI',
      metaTitle: 'AIMI Brain: Real-Time Financial Intelligence | PG-AGI Case Study',
      createdAt: new Date(),
      updatedAt: new Date(),
      sections: [
        {
          title: '1. What We Built',
          content: [
            {
              type: 'paragraph',
              content: 'At PG-AGI, we designed and shipped AIMI Brain — a real-time conversational financial intelligence platform that gives retail investors and finance professionals access to institutional-grade macro analysis through natural language. The system combines retrieval-augmented generation (RAG) with live web data, document analysis, and a high-performance streaming architecture.'
            }
          ]
        },
        {
          title: '2. Core Architecture',
          content: [
            {
              type: 'paragraph',
              content: 'AIMI Brain is built on a modern, distributed architecture designed for low latency and high reliability. The backend is a Node.js microservices ecosystem, while the frontend is a React-based conversational interface.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/aimi/aimi-arch.png',
              alt: 'AIMI Brain System Architecture Diagram',
              caption: 'Figure 1: High-level system architecture showing the flow from user query to AI response via the RAG pipeline.'
            }
          ]
        },
        {
          title: '3. The AI Pipeline — RAG Orchestration',
          content: [
            {
              type: 'paragraph',
              content: 'The core of AIMI Brain is its Retrieval-Augmented Generation pipeline. Unlike static LLM implementations, our RAG system dynamically decides when to fetch external data versus relying on internal models. We implemented a multi-stage orchestration flow that includes query intent classification, semantic search across a vector database, and real-time web search integration.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/aimi/aimi-rag-flow.png',
              alt: 'RAG Orchestration Flow Diagram',
              caption: 'Figure 2: RAG orchestration flow with multi-stage verification and source grounding.'
            }
          ]
        },
        {
          title: '4. Real-Time Streaming — WebSocket Architecture',
          content: [
            {
              type: 'paragraph',
              content: 'Financial data is time-sensitive. We implemented a robust WebSocket architecture to support token-by-token streaming of AI responses, real-time status updates, and live data feeds. This ensures a low-latency "thinking" feel while the system performs complex background tasks like web searching or document parsing.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/aimi/aimi-websocket.png',
              alt: 'WebSocket Architecture Sequence Diagram',
              caption: 'Figure 3: WebSocket message sequence for asynchronous query processing.'
            }
          ]
        },
        {
          title: '5. Document Intelligence',
          content: [
            {
              type: 'paragraph',
              content: 'AIMI Brain allows users to upload financial reports, PDFs, and spreadsheets. Our ingestion pipeline uses high-precision parsing to extract structured data and text, which is then chunked and embedded into a per-user vector store. This enables the AI to answer specific questions about the user\'s own documents with full source citations.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/aimi/aimi-ingestion.png',
              alt: 'Document Ingestion and Vector Embedding Pipeline',
              caption: 'Figure 4: Document ingestion pipeline from upload to vector embedding.'
            }
          ]
        },
        {
          title: '6. Web Search and Source Grounding',
          content: [
            {
              type: 'paragraph',
              content: 'To prevent hallucinations, every claim made by AIMI Brain is grounded in either the user\'s documents or live web results. We integrated multiple search APIs and implemented a re-ranking algorithm to select the most relevant sources, ensuring that the AI provides citations for every piece of information it delivers.'
            }
          ]
        },
        {
          title: '7. Tiered Intelligence — Feature Gates and Persona System',
          content: [
            {
              type: 'paragraph',
              content: 'We designed a sophisticated feature gating system to support different user tiers (Free vs. Pro). This includes managing query limits, access to advanced models (like GPT-4o or specialized macro models), and persona-based responses tailored to the user\'s expertise level.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/aimi/aimi-tiers.png',
              alt: 'Tiered Intelligence and Feature Management System',
              caption: 'Figure 5: Tiered intelligence model and feature management system.'
            }
          ]
        },
        {
          title: '8. Authentication Architecture',
          content: [
            {
              type: 'paragraph',
              content: 'Security and data privacy are paramount in finance. We implemented a secure authentication layer supporting Email/Password, Google OAuth, and session management, ensuring that user documents and chat histories are isolated and encrypted.'
            }
          ]
        },
        {
          title: '9. Payment and Subscription Infrastructure',
          content: [
            {
              type: 'paragraph',
              content: 'The platform integrates with Stripe for subscription management. We built a robust webhook listener to handle subscription lifecycle events (creation, renewal, cancellation, and payment failures), automatically updating user tiers and access permissions in real-time.'
            }
          ]
        },
        {
          title: '10. The Frontend — Conversational Interface',
          content: [
            {
              type: 'paragraph',
              content: 'The React-based frontend features a sleek, dark-themed conversational interface. It handles complex states like streaming responses, file upload progress, and interactive source citations. We used Tailwind CSS for a responsive, modern design that works across desktop and mobile.'
            }
          ]
        },
        {
          title: '11. Security and Data Protection',
          content: [
            {
              type: 'paragraph',
              content: 'We adhere to best practices for data protection, including encryption at rest and in transit. User-uploaded documents are stored in secure S3 buckets with time-limited access URLs, and vector data is logically partitioned per user.'
            }
          ]
        },
        {
          title: '12. Infrastructure and Deployment',
          content: [
            {
              type: 'paragraph',
              content: 'AIMI Brain is deployed on AWS using a containerized approach with ECS and Fargate. We use CI/CD pipelines to ensure rapid, reliable deployments, with comprehensive monitoring and logging via CloudWatch.'
            }
          ]
        },
        {
          title: '13. What Makes This Different',
          content: [
            {
              type: 'paragraph',
              content: 'AIMI Brain isn\'t just another chat wrapper. It is a purpose-built financial engine that understands the nuances of macro-economics and institutional data. By combining RAG, live web grounding, and a high-performance architecture, we\'ve created a tool that provides real, actionable intelligence rather than just generic text.'
            }
          ]
        }
      ]
    };

    // check if it already exists to update it
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
