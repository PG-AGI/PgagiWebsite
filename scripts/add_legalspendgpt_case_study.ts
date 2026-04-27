import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const caseStudy = {
      slug: 'legalspendgpt-invoice-intelligence',
      contentType: 'Product Requirements & Technical Architecture',
      coverImage: '/images/cs_legalspendgpt_v3.png',
      title: 'LegalSpendGPT: AI-Powered Legal Invoice Intelligence Platform',
      publishDate: 'April 28, 2026',
      readTime: '8 min read',
      author: {
        name: 'PG-AGI',
        role: 'Engineering & Product Team',
      },
      metaDescription: 'LegalSpendGPT is an end-to-end AI system designed to automate how legal teams ingest, extract, validate, and analyze invoice data using Azure.',
      metaKeywords: 'LegalTech, AI, Invoice Processing, Azure, Document Intelligence, LegalSpendGPT, Automation',
      metaAuthor: 'PG-AGI',
      metaTitle: 'LegalSpendGPT: Legal Invoice Intelligence | PG-AGI',
      createdAt: new Date(),
      updatedAt: new Date(),
      sections: [
        {
          title: 'I. Overview',
          content: [
            {
              type: 'paragraph',
              content: 'LegalSpendGPT is an end-to-end AI system designed to automate how legal teams ingest, extract, validate, and analyze invoice data using Microsoft’s Azure ecosystem.'
            },
            {
              type: 'paragraph',
              content: 'Instead of fragmented manual workflows, the platform delivers a unified pipeline covering document ingestion (SharePoint / Email), AI-powered extraction (OCR + structured parsing), rules-based validation, human-in-the-loop review, structured storage (Azure SQL), analytics dashboards (Power BI), and conversational insights (Teams chatbot).'
            },
            {
              type: 'paragraph',
              content: 'In Phase 1, the system focuses on building a complete invoice-to-insight pipeline, while Phase 2 introduces advanced intelligence such as anomaly detection, AFA optimization, and deeper NLP analysis.'
            }
          ]
        },
        {
          title: 'II. System Architecture (Phase 1)',
          content: [
            {
              type: 'highlight',
              content: 'High-Level Architecture'
            },
            {
              type: 'image',
              src: '/images/legalspendgpt_arch_v3.png',
              alt: 'LegalSpendGPT High-Level Architecture',
              caption: 'Figure 1: High-Level Architecture showing Ingestion, Azure Services, and Microsoft 365 layers.'
            },
            {
              type: 'paragraph',
              content: 'The core architecture is divided into modular layers to ensure scalability and reliability:'
            },
            {
              type: 'paragraph',
              content: '1. Ingestion Layer: Supports SharePoint uploads and email ingestion via Power Automate, providing a centralized document repository.'
            },
            {
              type: 'paragraph',
              content: '2. Extraction Layer: Triggered via Logic Apps, using Azure Document Intelligence for OCR and field extraction (Header fields, Line items, Confidence scores).'
            },
            {
              type: 'highlight',
              content: '3. Validation Engine'
            },
            {
              type: 'image',
              src: '/images/legalspendgpt_validation_v3.png',
              alt: 'LegalSpendGPT Validation Engine',
              caption: 'Figure 2: Validation Engine flow for automated invoice verification.'
            },
            {
              type: 'paragraph',
              content: 'The validation engine performs mandatory field checks, total vs line-item reconciliation, currency/date validation, and matter reference verification. Output states include Approved, Flagged for Review, or Rejected.'
            },
            {
              type: 'paragraph',
              content: '4. Data Persistence: Azure SQL serves as the system of record, storing invoices, line items, firms, matters, FX rates, and audit logs.'
            },
            {
              type: 'highlight',
              content: '5. Human Review Loop'
            },
            {
              type: 'image',
              src: '/images/legalspendgpt_review_flow.png',
              alt: 'LegalSpendGPT Human Review Loop',
              caption: 'Figure 3: Human-in-the-loop workflow using Power Apps for manual corrections.'
            },
            {
              type: 'paragraph',
              content: 'Triggered via Power Automate, the review UI (built on Power Apps) allows users to edit fields, correct line items, add comments, and approve/reject invoices with a full audit log.'
            },
            {
              type: 'paragraph',
              content: '6. FX & Scheduled Processing: Daily FX rate ingestion enables invoice normalization to a base currency, ensuring global financial comparability.'
            },
            {
              type: 'paragraph',
              content: '7. Analytics Layer: Driven by curated SQL views, Power BI dashboards provide insights into spend by firm, matter, budget vs actual, and geographic trends.'
            },
            {
              type: 'highlight',
              content: '8. Conversational Interface'
            },
            {
              type: 'image',
              src: '/images/legalspendgpt_bot_arch.png',
              alt: 'LegalSpendGPT Teams Bot Architecture',
              caption: 'Figure 4: AI-powered conversational pipeline for real-time spend insights.'
            },
            {
              type: 'paragraph',
              content: 'The Teams chatbot uses a function-calling LLM approach. User queries trigger intent detection and template-based SQL generation, ensuring zero hallucination and high reliability. RBAC is enforced via Azure AD.'
            }
          ]
        },
        {
          title: 'III. Workflow (Simplified)',
          content: [
            {
              type: 'image',
              src: '/images/legalspendgpt_ingestion_flow.png',
              alt: 'LegalSpendGPT Simplified Workflow',
              caption: 'Figure 5: End-to-end processing pipeline from invoice receipt to final validation.'
            },
            {
              type: 'paragraph',
              content: 'The simplified flow follows: Invoice received → SharePoint storage → Logic App trigger → OCR + field extraction → JSON output → Validation rules applied → SQL storage → Status assignment.'
            }
          ]
        },
        {
          title: 'IV. Methodology & Technical Stack',
          content: [
            {
              type: 'highlight',
              content: 'Workstreams'
            },
            {
              type: 'paragraph',
              content: 'The system is built across six modular layers: Frontend Experience, Backend Microservices, AI Intelligence Layer, Data & Workflow Orchestration, Integrations, and Security & Observability.'
            },
            {
              type: 'table',
              content: {
                headers: ['Component', 'Technology Stack'],
                rows: [
                  ['Frontend', 'Next.js, React, TailwindCSS, Azure AD, WebSockets'],
                  ['Backend', 'FastAPI (Python), Celery + Redis, Azure SQL'],
                  ['AI Layer', 'Azure Document Intelligence, Azure OpenAI (Hybrid LLM + Deterministic)'],
                  ['Orchestration', 'Redis Streams, Logic Apps, Power Automate'],
                  ['Integrations', 'SharePoint API, Teams API, Email SMTP/Graph'],
                  ['DevOps', 'Docker, AKS, GitHub Actions, Prometheus, Grafana']
                ]
              }
            }
          ]
        },
        {
          title: 'V. Timeline (5 Weeks)',
          content: [
            {
              type: 'paragraph',
              content: 'Week 1 — Foundations: Azure setup, schema design, and ingestion pipeline development.'
            },
            {
              type: 'paragraph',
              content: 'Week 2 — Extraction + Validation: OCR implementation, field mapping, and validation engine builds.'
            },
            {
              type: 'paragraph',
              content: 'Week 3 — Review + FX: Power Apps UI development, review workflow automation, and currency normalization.'
            },
            {
              type: 'paragraph',
              content: 'Week 4 — Insights Layer: Power BI dashboards and Teams chatbot integration.'
            },
            {
              type: 'paragraph',
              content: 'Week 5 — Production Readiness: End-to-end testing, performance optimization, and final deployment.'
            }
          ]
        },
        {
          title: 'VI. Value Proposition',
          content: [
            {
              type: 'paragraph',
              content: 'LegalSpendGPT transforms legal operations from manual invoice review and spreadsheet chaos into automated extraction, deterministic validation, and real-time conversational intelligence.'
            }
          ]
        },
        {
          title: 'VII. Closing Note',
          content: [
            {
              type: 'paragraph',
              content: 'This system is not just automation—it’s operational intelligence. It replaces manual reconciliation and delayed reporting with structured pipelines, auditable decisions, and instant insights.'
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
