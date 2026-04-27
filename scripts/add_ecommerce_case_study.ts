import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const caseStudy = {
      slug: 'ai-ecommerce-arbitrage-platform',
      contentType: 'Technical Architecture Report',
      coverImage: '/images/cs_ai_ecommerce_v3.png',
      title: 'AI Ecommerce Arbitrage Platform',
      publishDate: 'April 27, 2026',
      readTime: '8 min read',
      author: {
        name: 'PG-AGI',
        role: 'Engineering Team',
      },
      metaDescription: 'A deep-dive into the architecture, pipeline design, and product decisions behind PG-AGI\'s AI-powered marketplace arbitrage system.',
      metaKeywords: 'AI, Ecommerce, Arbitrage, Automation, Engineering, Architecture, eBay, FastAPI, PostgreSQL',
      metaAuthor: 'PG-AGI',
      metaTitle: 'AI Ecommerce Arbitrage Platform | PG-AGI',
      createdAt: new Date(),
      updatedAt: new Date(),
      sections: [
        {
          title: 'I. What We Built',
          content: [
            {
              type: 'paragraph',
              content: 'At PG-AGI, we designed and shipped a full-stack AI-powered arbitrage platform that continuously sources products from over fifteen e-commerce platforms, evaluates them for profitability, and automatically lists them on eBay with intelligent pricing and dynamic marketplace categorization. The business model is asset-light: no inventory, no warehousing, and no manual data entry. The system finds price discrepancies between supplier marketplaces and eBay, filters only the opportunities that clear a configurable profit threshold, and handles the entire listing lifecycle programmatically.'
            },
            {
              type: 'paragraph',
              content: 'The platform is not a price scraper bolted onto an eBay posting tool. It is a structured data pipeline where every product passes through well-defined transformation and validation stages before a single listing is created. Every operation is logged to both a relational database and a live Google Sheets feed, giving operators a complete audit trail and non-technical stakeholders real-time visibility without requiring database access. This document covers how we actually built it.'
            }
          ]
        },
        {
          title: 'II. Core Architecture',
          content: [
            {
              type: 'paragraph',
              content: 'The backend is built on FastAPI, chosen for its native async support, clean dependency injection model, and automatic OpenAPI documentation. The async foundation matters here because the system makes a high volume of I/O-bound calls: scraping requests to Zyte, taxonomy lookups to eBay, inventory creation calls, offer submissions, and publish requests, all of which benefit from concurrent execution without threading complexity.'
            },
            {
              type: 'paragraph',
              content: 'PostgreSQL on Google Cloud SQL handles all relational data: raw scraped payloads, normalized products, eBay listings, orders, action logs, and OAuth tokens. The schema was designed around a clear principle: every stage of processing should leave a traceable record. This means the original JSON from a scrape is preserved in a RawProduct table even after transformation, so there is always a ground truth to debug against.'
            },
            {
              type: 'paragraph',
              content: 'The entire backend is containerized and deployable on Google Cloud Run, with Cloud SQL Auth Connector for secure managed database access, Secret Manager compatible configuration, and structured logging throughout.'
            }
          ]
        },
        {
          title: 'III. The Five-Stage Pipeline',
          content: [
            {
              type: 'paragraph',
              content: 'The core architectural decision was organizing all processing as five discrete, independently testable stages rather than a monolithic function that collects, transforms, and publishes in one pass.'
            },
            {
              type: 'highlight',
              content: 'Stage 1 — Collect'
            },
            {
              type: 'paragraph',
              content: 'Responsible exclusively for acquiring raw product data. It delegates all extraction complexity to Zyte\'s universal scraping API, which handles site-specific extraction variance across all fifteen platforms. The collector sends product URLs with a product: true extraction hint and receives structured JSON back. Each result is persisted to the RawProduct table before any transformation touches it, ensuring the raw signal is always recoverable.'
            },
            {
              type: 'highlight',
              content: 'Stage 2 — Transform'
            },
            {
              type: 'paragraph',
              content: 'Normalizes raw payloads into a unified schema, mapping platform-specific field names (asin, sku, product_id, item_id) to canonical identifiers. It also runs a validation gate that checks required field presence, title length, and price range constraints. The validator returns two explicit lists: valid products that advance to the next stage, and invalid products with annotated error reasons. This explicit split means the pipeline never silently discards data.'
            },
            {
              type: 'highlight',
              content: 'Stage 3 — Marketplace'
            },
            {
              type: 'paragraph',
              content: 'Applies the pricing engine, calculates profitability against all eBay fees, filters out products that don\'t clear the minimum profit threshold, and prepares listing payloads. This stage also integrates with the dynamic taxonomy service to assign correct eBay categories and populate required product aspects. Only products that survive profitability filtering are submitted to eBay.'
            },
            {
              type: 'highlight',
              content: 'Stage 4 — Storage'
            },
            {
              type: 'paragraph',
              content: 'Persists the full record of each pipeline run to PostgreSQL, including per-stage counts, timing data, error counts, and listing outcomes. The PipelineRun table captures everything needed to reconstruct what happened and why, without requiring log parsing.'
            },
            {
              type: 'highlight',
              content: 'Stage 5 — Logging'
            },
            {
              type: 'paragraph',
              content: 'Mirrors pipeline events to Google Sheets in real time across five structured tabs: pipeline logs, collection metrics, listings created, errors, and summary aggregates. This was a deliberate product decision: non-technical operators can monitor live pipeline runs through a spreadsheet interface without any database tooling.'
            },
            {
              type: 'paragraph',
              content: 'The stages share a consistent internal API. Each stage receives its inputs, does its work, and emits both its outputs and its metrics. This makes it straightforward to insert mock implementations at any stage, which the demo pipeline uses extensively.'
            }
          ]
        },
        {
          title: 'IV. The Pricing Engine',
          content: [
            {
              type: 'paragraph',
              content: 'The pricing engine, located in app/s3_marketplace/ebay_pricing.py, does more than apply a simple markup. eBay\'s fee structure involves multiple components: final value fee, payment processing fee, and per-transaction flat charge. Pricing that ignores any of these components will appear profitable in a spreadsheet and lose money in practice.'
            },
            {
              type: 'paragraph',
              content: 'The engine calculates the minimum viable selling price by solving the target profit equation in reverse: given the source cost, desired profit percentage, and all applicable fee percentages, what must the eBay price be? The formula works backward from profit rather than forward from cost, which ensures the target margin is preserved after fees rather than compressed by them.'
            },
            {
              type: 'paragraph',
              content: 'Every product that passes transformation is evaluated against a configurable minimum profit threshold, defaulting to 15%. Products that don\'t clear it are filtered out and logged with their actual calculated margins rather than silently dropped. This matters for analytics: operators can review what was excluded and why, and adjust thresholds based on real data.'
            },
            {
              type: 'paragraph',
              content: 'SKUs are generated deterministically using a platform prefix plus the source external ID plus a timestamp suffix. This makes SKUs traceable back to their source platform and creation time without requiring a database lookup.'
            }
          ]
        },
        {
          title: 'V. Dynamic Taxonomy and Category Discovery',
          content: [
            {
              type: 'paragraph',
              content: 'One of the more significant engineering investments was eliminating hardcoded eBay category mappings entirely.'
            },
            {
              type: 'paragraph',
              content: 'Earlier approaches to marketplace listing automation typically maintain static lookup tables mapping product types to eBay category IDs and required aspect fields. These tables rot quickly: eBay updates its taxonomy, new product categories emerge, and required aspects change. Maintaining them manually is ongoing operational overhead.'
            },
            {
              type: 'paragraph',
              content: 'Instead, the taxonomy service in app/services/ebay_taxonomy_service.py queries the eBay Taxonomy API dynamically at listing time. Given a product title, it calls the category suggestion endpoint and receives a ranked list of matching categories. It selects the highest-confidence suggestion, then immediately queries the aspects endpoint for that category to discover which fields eBay requires for a valid listing.'
            },
            {
              type: 'paragraph',
              content: 'The critical detail is what it does with those aspects. Rather than requiring the source product data to exactly match eBay\'s field names (which it never does), the service maps eBay aspect names to product fields where data is available, and inserts controlled fallback values where it is not.'
            },
            {
              type: 'paragraph',
              content: 'A product with a brand field gets that brand inserted into the "Marke" aspect for German eBay; a product without color data gets "Unknown" rather than a missing required field that would cause eBay to reject the payload. This approach means the platform handles arbitrary product types correctly without any category-specific code. A listing for a mechanical keyboard and a listing for a garden hose both get correct, valid aspect payloads automatically.'
            }
          ]
        },
        {
          title: 'VI. eBay OAuth and Token Management',
          content: [
            {
              type: 'paragraph',
              content: 'eBay\'s user-level Inventory API requires an OAuth 2.0 authorization code flow, not just an application token. This means the platform needs to support a three-step process: redirect the operator to eBay\'s authorization page, receive the callback with an authorization code, and exchange that code for access and refresh tokens.'
            },
            {
              type: 'paragraph',
              content: 'The design decision we made was to persist these tokens to PostgreSQL rather than holding them in application memory. The reasons were operational: tokens need to survive application restarts and redeployments, which are frequent in a containerized Google Cloud Run environment.'
            },
            {
              type: 'paragraph',
              content: 'Storing them in a database also means the token lifecycle is auditable, with created_at and updated_at timestamps on the EbayToken record.'
            },
            {
              type: 'paragraph',
              content: 'The token service in app/services/ebay_oauth_service.py handles the full lifecycle: initial exchange, validity checking with a five-minute safety buffer before expiry, and automatic refresh. The demo pipeline checks token validity before every execution and refreshes proactively rather than waiting for a 401 from eBay mid-run.'
            },
            {
              type: 'paragraph',
              content: 'A dedicated /auth/ebay/status endpoint exposes token state for monitoring without requiring log access. The token architecture is single-user by design in the current implementation, using a default record identifier. The schema supports extension to multi-account storage, but that complexity was deliberately deferred: the current use case is a single operator, and over-engineering for multi-tenancy before it is needed would add schema complexity and code overhead with no current benefit.'
            }
          ]
        },
        {
          title: 'VII. The Demo Pipeline and Mock Data Strategy',
          content: [
            {
              type: 'paragraph',
              content: 'A recurring challenge in marketplace automation is that end-to-end testing requires active external dependencies: valid Zyte API key, live eBay credentials, and real product data. This makes local development slow and makes CI-style testing of the pipeline impractical.'
            },
            {
              type: 'paragraph',
              content: 'The demo pipeline in app/demo_pipeline.py addresses this with a built-in mock product catalog containing three representative items: keyboard, mouse, and headphones. These cover the primary product attribute patterns the system encounters.'
            },
            {
              type: 'paragraph',
              content: 'When the USE_MOCK_AMAZON environment variable is set, the collect stage pulls from this catalog rather than making Zyte API calls.'
            },
            {
              type: 'paragraph',
              content: 'This is not just a convenience for development. It serves a specific operational purpose: it lets operators run the complete pipeline, including taxonomy lookup, inventory creation, and eBay publishing, against known inputs with predictable pricing outcomes. When something goes wrong in production, the mock pipeline can reproduce the same flow in isolation to confirm whether the issue is in the pipeline logic or in the external data.'
            },
            {
              type: 'paragraph',
              content: 'The demo pipeline is exposed through a single GET endpoint with query parameters covering all configurable dimensions: source platform, search query or product IDs, target marketplace, locale, pricing, quantity, and eBay business policy IDs. This endpoint is the primary integration surface for testing the full flow from outside the application.'
            }
          ]
        },
        {
          title: 'VIII. Observability Through Google Sheets',
          content: [
            {
              type: 'paragraph',
              content: 'The Google Sheets integration was a product decision, not an engineering default. The audience for pipeline run data includes people who are not engineers and who are not going to query a PostgreSQL database or read structured logs.'
            },
            {
              type: 'paragraph',
              content: 'A live spreadsheet that updates as the pipeline runs gives those stakeholders immediate visibility into: collection counts, listing creation outcomes, profit margins per listing, and error summaries.'
            },
            {
              type: 'paragraph',
              content: 'The logging service in app/s5_logging/sheets_logger.py writes to five tabs with distinct purposes:'
            },
            {
              type: 'paragraph',
              content: '• Pipeline Logs tab captures transform-stage metrics'
            },
            {
              type: 'paragraph',
              content: '• Listings tab records each SKU with its eBay listing ID and calculated profit percentage'
            },
            {
              type: 'paragraph',
              content: '• Errors tab collects all system errors with stage and message context'
            },
            {
              type: 'paragraph',
              content: '• Summary tab accumulates aggregate metrics per run'
            },
            {
              type: 'paragraph',
              content: 'Each tab is append-only during a run, so the history of all pipeline executions is preserved without manual archiving. This also functions as an alerting mechanism without requiring an alerting infrastructure. An operator watching the Errors tab during a run will see issues as they appear, before the run completes, and can identify systematic problems early enough to intervene.'
            }
          ]
        },
        {
          title: 'IX. The Audit-First Data Model',
          content: [
            {
              type: 'paragraph',
              content: 'The database schema reflects a consistent philosophy: retain everything, make nothing implicit, and make all state transitions queryable.'
            },
            {
              type: 'paragraph',
              content: 'The RawProduct table stores the original JSON payload from every scrape. This is not the normalized product; it is the raw response from Zyte before any field mapping or validation. If a normalizer bug discards useful data, the original is still there. If eBay returns an unexpected error that correlates with a specific product structure, the raw payload can be inspected directly.'
            },
            {
              type: 'paragraph',
              content: 'The ActionLog table records every operation the pipeline performs: collection counts, transformation outcomes, listing creation attempts, and errors. Each entry carries: stage identifier, entity type and ID, status, and JSON details field for structured context.'
            },
            {
              type: 'paragraph',
              content: 'The synced_to_sheet flag tracks whether the entry has been mirrored to Google Sheets, which enables catch-up sync if the Sheets API is temporarily unavailable.'
            },
            {
              type: 'paragraph',
              content: 'The PipelineRun table captures not just counts but timing: started_at, completed_at, and computed duration_seconds. This makes it possible to track pipeline performance over time and detect regressions when, for example, a new platform integration adds latency to the collect stage.'
            }
          ]
        },
        {
          title: 'X. What Makes This Different',
          content: [
            {
              type: 'paragraph',
              content: 'A few engineering and product choices deserve direct acknowledgment because they represent deliberate decisions rather than defaults.'
            },
            {
              type: 'highlight',
              content: '1. Separation of Transformation from Collection'
            },
            {
              type: 'paragraph',
              content: 'Many arbitrage systems scrape and post in a single pass, which makes them fast to prototype and difficult to debug. The explicit five-stage pipeline means every batch of products has a documented path through the system, and failures at any stage are immediately attributable without instrumenting the whole flow.'
            },
            {
              type: 'highlight',
              content: '2. Dynamic Taxonomy Integration'
            },
            {
              type: 'paragraph',
              content: 'Hardcoded category mappings are the standard approach because they are simple to implement. They are also the most common source of eBay listing rejections as platform requirements change. Querying the live taxonomy API at listing time adds a round-trip per batch but eliminates the category maintenance problem entirely. The system is correct by construction for any product type, not just the ones that were anticipated when the mappings were written.'
            },
            {
              type: 'highlight',
              content: '3. Database-Backed OAuth Tokens'
            },
            {
              type: 'paragraph',
              content: 'Persisting OAuth tokens to the database rather than to environment variables or in-memory state costs one additional database record but means tokens survive the restart cycles inherent in containerized deployments. In a Google Cloud Run environment where instances start and stop continuously, in-memory token state would require repeated OAuth exchanges.'
            },
            {
              type: 'highlight',
              content: '4. Explicit Invalid Product Handling'
            },
            {
              type: 'paragraph',
              content: 'Filtering without surfacing what was filtered is a common pattern that makes systems appear to work while quietly discarding data. Returning both the valid and invalid lists with annotated reasons gives operators the information they need to diagnose data quality issues at source, not just observe reduced listing counts downstream.'
            }
          ]
        },
        {
          title: 'XI. Closing',
          content: [
            {
              type: 'paragraph',
              content: 'The AI Ecommerce Arbitrage Platform represents PG-AGI\'s approach to marketplace automation: grounded in real operational requirements, architected for auditability, and designed to reduce the manual maintenance burden that makes most automation systems fragile over time.'
            },
            {
              type: 'paragraph',
              content: 'Every structural decision — the five-stage pipeline, the dynamic taxonomy integration, the database-backed token management, the dual-layer observability through PostgreSQL and Google Sheets — was made in service of a system that operators can understand, debug, and extend without reverse-engineering its behavior from logs.'
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
