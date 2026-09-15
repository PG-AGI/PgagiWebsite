'use client';

import React from 'react';
import styles from '@/styles/components/organisms/LegalGPTCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface LegalGPTCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

export default function LegalGPTCaseStudy({ caseStudy }: LegalGPTCaseStudyProps) {
  return (
    <div className={styles.legalPage}>
      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 1: Cover / Header & Platform Essence
      ══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroCoverSection}>
        <div className={styles.rail}>
          <div className={styles.coverHeaderTag}>
            PG-AGI / ENGINEERING AND PRODUCT
          </div>

          <h1 className={styles.coverTitle}>LegalSpendGPT</h1>
          <h2 className={styles.coverSubtitle}>Legal Invoice Intelligence</h2>
          <div className={styles.coverType}>Enterprise case study</div>

          <p className={styles.coverLeadDesc}>
            A Microsoft Azure platform for turning legal invoices into validated records,
            reviewable decisions and accessible spend intelligence.
          </p>

          {/* 3-Column Summary Bar */}
          <div className={styles.summaryBarTable}>
            <div className={styles.summaryBarHeaderRow}>
              <div className={styles.summaryBarHeaderCell}>CAPTURE</div>
              <div className={styles.summaryBarHeaderCell}>CONTROL</div>
              <div className={styles.summaryBarHeaderCell}>UNDERSTAND</div>
            </div>
            <div className={styles.summaryBarValuesRow}>
              <div className={styles.summaryBarValueCell}>SharePoint and email</div>
              <div className={styles.summaryBarValueCell}>Rules and human review</div>
              <div className={styles.summaryBarValueCell}>Power BI and Teams</div>
            </div>
          </div>

          {/* Bullet Highlights */}
          <div className={styles.bulletHighlightBlock}>
            <div>Invoice ingestion • AI extraction • Deterministic validation</div>
            <div>Structured storage • Currency normalization • Conversational analytics</div>
          </div>

          {/* Prepared Info */}
          <div className={styles.preparedByBlock}>
            <strong>Prepared by PG-AGI</strong>
            <span>Playing God with AGI | Bengaluru | pgagi.in</span>
          </div>
        </div>
      </section>


      <div className={styles.rail}>
        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 2: Contents & At a Glance
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <h2 className={styles.sectionHeading}>Contents</h2>
          <p className={styles.sectionParagraph}>
            The case study follows the invoice lifecycle from intake to financial insight, then explains the
            operating model, user experience and controls behind it.
          </p>

          {/* Table of Contents */}
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>SECTION</th>
                  <th style={{ textAlign: 'right' }}>PAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>01 What We Built</td>
                  <td className={styles.colPage}>03</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>02 Core Architecture</td>
                  <td className={styles.colPage}>04</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>03 Credit System and Monetisation</td>
                  <td className={styles.colPage}>06</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>04 User Facing Features</td>
                  <td className={styles.colPage}>07</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>05 Security and Auditability</td>
                  <td className={styles.colPage}>08</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>06 What Makes This Different</td>
                  <td className={styles.colPage}>09</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>07 Outcomes</td>
                  <td className={styles.colPage}>10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>At a glance</h3>
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>DIMENSION</th>
                  <th>SYSTEM FOCUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Domain</td>
                  <td>Legal operations and invoice intelligence</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Primary ecosystem</td>
                  <td>Microsoft Azure and Microsoft 365</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Core record</td>
                  <td>Invoices, line items, firms, matters and FX rates</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>User surfaces</td>
                  <td>Power Apps, Power BI and Microsoft Teams</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Delivery sequence</td>
                  <td>Five week implementation plan</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 2</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 3: 01 / PLATFORM OVERVIEW — What We Built
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <span className={styles.eyebrow}>01 / PLATFORM OVERVIEW</span>
          <h2 className={styles.sectionHeading}>What We Built</h2>

          <p className={styles.sectionParagraph}>
            LegalSpendGPT brings invoice intake, extraction, validation, review and reporting into one
            connected system. Legal and finance teams can follow an invoice from its original document
            through structured records to dashboards and conversational queries.
          </p>

          <p className={styles.sectionParagraph}>
            The platform addresses a practical operational problem: invoice details arrive in documents, while
            spend decisions depend on consistent data. Its pipeline converts those documents into fields and
            line items, checks them against business rules and routes exceptions to reviewers.
          </p>

          {/* Figure 1: Pipeline Flow */}
          <div className={styles.diagramWrapper}>
            <div className={styles.fig1Container}>
              {/* Top Row: Intake to AI Extraction */}
              <div className={styles.fig1Row}>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Invoice received</div>
                  <div className={styles.fig1Sub}>Email or upload</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                    <path d="M0 7H20" stroke="#0078D4" strokeWidth="2" />
                    <path d="M18 2L26 7L18 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>SharePoint</div>
                  <div className={styles.fig1Sub}>Document storage</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                    <path d="M0 7H20" stroke="#0078D4" strokeWidth="2" />
                    <path d="M18 2L26 7L18 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Logic Apps</div>
                  <div className={styles.fig1Sub}>Event trigger</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                    <path d="M0 7H20" stroke="#0078D4" strokeWidth="2" />
                    <path d="M18 2L26 7L18 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>AI extraction</div>
                  <div className={styles.fig1Sub}>Fields and line items</div>
                </div>
              </div>

              {/* Turn Down Connector directly aligned with 4th column */}
              <div className={styles.fig1TurnRow}>
                <div className={styles.fig1TurnSpacer}></div>
                <div className={styles.fig1DownArrow}>
                  <svg width="14" height="42" viewBox="0 0 14 42" fill="none" aria-hidden="true">
                    <path d="M7 0V34" stroke="#0078D4" strokeWidth="2" />
                    <path d="M2 32L7 40L12 32Z" fill="#0078D4" />
                  </svg>
                </div>
              </div>

              {/* Bottom Row: Decision status to Structured JSON */}
              <div className={styles.fig1Row}>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Decision status</div>
                  <div className={styles.fig1Sub}>Approval or exception</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                    <path d="M28 7H8" stroke="#0078D4" strokeWidth="2" />
                    <path d="M10 2L2 7L10 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Azure SQL</div>
                  <div className={styles.fig1Sub}>Structured records</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                    <path d="M28 7H8" stroke="#0078D4" strokeWidth="2" />
                    <path d="M10 2L2 7L10 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Validation</div>
                  <div className={styles.fig1Sub}>Business rule checks</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                    <path d="M28 7H8" stroke="#0078D4" strokeWidth="2" />
                    <path d="M10 2L2 7L10 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Structured JSON</div>
                  <div className={styles.fig1Sub}>Extraction payload</div>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            Figure 1 Invoice receipt, extraction, validation and status assignment
          </p>

          <h3 className={styles.subHeading}>A complete invoice to insight workflow</h3>
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>CAPABILITY</th>
                  <th>BUSINESS FUNCTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Document intake</td>
                  <td>Collect invoices through SharePoint and email.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Data preparation</td>
                  <td>Extract headers, line items and confidence scores.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Decision control</td>
                  <td>Apply validation rules and route exceptions for review.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Financial visibility</td>
                  <td>Store structured records and normalize currency values.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Spend access</td>
                  <td>Surface insights through Power BI and Teams.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.sectionParagraph}>
            Phase 1 covers the core processing and insight pipeline. Phase 2 extends it with anomaly detection,
            alternative fee arrangement optimization and deeper natural language analysis.
          </p>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 3</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 4: 02 / SYSTEM DESIGN — Core Architecture
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <span className={styles.eyebrow}>02 / SYSTEM DESIGN</span>
          <h2 className={styles.sectionHeading}>Core Architecture</h2>

          <p className={styles.sectionParagraph}>
            The architecture separates document intake, AI extraction, business validation, persistent data and
            user access. Azure SQL anchors the reporting model, while Microsoft 365 provides familiar entry
            points for invoice submission, review and analysis.
          </p>

          {/* Figure 2: Layered Stack Diagram */}
          <div className={styles.diagramWrapper}>
            <div className={styles.fig2Container}>
              {/* Layer 1: Ingestion */}
              <div className={styles.fig2Layer}>
                <div className={styles.fig2LayerTitle}>INGESTION</div>
                <div className={styles.fig2Grid3}>
                  <div className={styles.fig2Card}>
                    <strong>SharePoint</strong>
                    <span>Invoice uploads</span>
                  </div>
                  <div className={styles.fig2Card}>
                    <strong>Email</strong>
                    <span>Invoice intake</span>
                  </div>
                  <div className={styles.fig2Card}>
                    <strong>Power Automate</strong>
                    <span>Workflow routing</span>
                  </div>
                </div>
              </div>

              {/* Connector: Logic Apps trigger */}
              <div className={styles.fig2ConnectorWrap}>
                <svg width="14" height="28" viewBox="0 0 14 28" fill="none" aria-hidden="true">
                  <path d="M7 0V20" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 18L7 26L12 18Z" fill="#0078D4" />
                </svg>
                <span className={styles.fig2ConnectorLabel}>Logic Apps trigger</span>
              </div>

              {/* Layer 2: Azure Services */}
              <div className={styles.fig2Layer}>
                <div className={styles.fig2LayerTitle}>AZURE SERVICES</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className={styles.fig2Grid3Arrows}>
                    <div className={styles.fig2Card}>
                      <strong>Document Intelligence</strong>
                      <span>OCR and field extraction</span>
                    </div>
                    <div className={styles.fig2Arrow}>
                      <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
                        <path d="M0 7H16" stroke="#0078D4" strokeWidth="2" />
                        <path d="M14 2L22 7L14 12Z" fill="#0078D4" />
                      </svg>
                    </div>
                    <div className={styles.fig2Card}>
                      <strong>Validation engine</strong>
                      <span>Rules and decision states</span>
                    </div>
                    <div className={styles.fig2Arrow}>
                      <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
                        <path d="M0 7H16" stroke="#0078D4" strokeWidth="2" />
                        <path d="M14 2L22 7L14 12Z" fill="#0078D4" />
                      </svg>
                    </div>
                    <div className={styles.fig2Card}>
                      <strong>Human review</strong>
                      <span>Power Apps corrections</span>
                    </div>
                  </div>

                  <div className={styles.fig2Grid3}>
                    <div className={styles.fig2Card}>
                      <strong>Azure SQL</strong>
                      <span>Invoices and audit logs</span>
                    </div>
                    <div className={styles.fig2Card}>
                      <strong>FX ingestion</strong>
                      <span>Daily currency normalization</span>
                    </div>
                    <div className={styles.fig2Card}>
                      <strong>Azure OpenAI</strong>
                      <span>Intent and function calling</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector down */}
              <div className={styles.fig2ConnectorWrap}>
                <svg width="14" height="28" viewBox="0 0 14 28" fill="none" aria-hidden="true">
                  <path d="M7 0V20" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 18L7 26L12 18Z" fill="#0078D4" />
                </svg>
              </div>

              {/* Layer 3: Microsoft 365 Experiences */}
              <div className={styles.fig2Layer}>
                <div className={styles.fig2LayerTitle}>MICROSOFT 365 EXPERIENCES</div>
                <div className={styles.fig2Grid3}>
                  <div className={styles.fig2Card}>
                    <strong>Power BI</strong>
                    <span>Spend dashboards</span>
                  </div>
                  <div className={styles.fig2Card}>
                    <strong>Teams</strong>
                    <span>Conversational queries</span>
                  </div>
                  <div className={styles.fig2Card}>
                    <strong>Invoice status</strong>
                    <span>Processing outcomes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            Figure 2 Ingestion, Azure services and Microsoft 365 application layers
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>LAYER</th>
                  <th>RESPONSIBILITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Ingestion and orchestration</td>
                  <td>SharePoint and email intake, Power Automate workflows and Logic Apps triggers.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Extraction and persistence</td>
                  <td>Azure Document Intelligence extracts fields; Azure SQL holds structured business records.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Experience and insight</td>
                  <td>Power Apps supports review; Power BI and Teams expose spend intelligence.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 4</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 5: 02 / CORE ARCHITECTURE — Validation and Processing
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <span className={styles.eyebrow}>02 / CORE ARCHITECTURE</span>
          <h2 className={styles.sectionHeading}>Validation and Processing</h2>

          <p className={styles.sectionParagraph}>
            Extracted data passes through mandatory field checks, invoice total reconciliation, currency and
            date validation, and matter reference verification. The resulting status determines whether an
            invoice is approved, flagged for review or rejected.
          </p>

          {/* Figure 3: Validation & Decision Routing */}
          <div className={styles.diagramWrapper}>
            <div className={styles.fig3Container}>
              <div className={styles.fig3Card}>
                <strong>Invoice JSON</strong>
                <span>Extracted headers and line items</span>
              </div>

              <div className={styles.fig3DownArrow}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
                  <path d="M7 0V16" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 14L7 22L12 14Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig3Card}>
                <strong>Mandatory fields</strong>
                <span>Vendor, amount, date and invoice number</span>
              </div>

              <div className={styles.fig3DownArrow}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
                  <path d="M7 0V16" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 14L7 22L12 14Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig3Card}>
                <strong>Reconciliation</strong>
                <span>Line item sum against invoice total</span>
              </div>

              <div className={styles.fig3DownArrow}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
                  <path d="M7 0V16" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 14L7 22L12 14Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig3Card}>
                <strong>Currency date and matter checks</strong>
                <span>Currency validity, date range and matter reference</span>
              </div>

              <div className={styles.fig3DownArrow}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
                  <path d="M7 0V16" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 14L7 22L12 14Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig3RoutingBadge}>DECISION ROUTING</div>

              {/* Branching Lines */}
              <div className={styles.fig3BranchTree}>
                <svg width="100%" height="36" viewBox="0 0 600 36" preserveAspectRatio="none" fill="none" aria-hidden="true">
                  <path d="M300 0V14" stroke="#0078D4" strokeWidth="2" />
                  <path d="M100 14H500" stroke="#0078D4" strokeWidth="2" />
                  <path d="M100 14V26" stroke="#0078D4" strokeWidth="2" />
                  <path d="M95 24L100 32L105 24Z" fill="#0078D4" />
                  <path d="M300 14V26" stroke="#0078D4" strokeWidth="2" />
                  <path d="M295 24L300 32L305 24Z" fill="#0078D4" />
                  <path d="M500 14V26" stroke="#0078D4" strokeWidth="2" />
                  <path d="M495 24L500 32L505 24Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig3BranchGrid}>
                <div className={styles.fig3BranchCard}>
                  <strong>Approved</strong>
                  <span>Required checks pass</span>
                </div>

                <div className={styles.fig3BranchCard}>
                  <strong>Flagged for review</strong>
                  <span>Needs reviewer attention</span>
                </div>

                <div className={styles.fig3BranchCard}>
                  <strong>Rejected</strong>
                  <span>Fails mandatory checks</span>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            Figure 3 Rule checks and invoice decision states
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>WORKSTREAM</th>
                  <th>TECHNOLOGY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Application experience</td>
                  <td>Power Apps, Power BI, Teams; Next.js, React and TailwindCSS</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Services and storage</td>
                  <td>FastAPI, Celery, Redis and Azure SQL</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>AI and orchestration</td>
                  <td>Azure Document Intelligence, Azure OpenAI, Logic Apps, Power Automate and Redis Streams</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Integration and operations</td>
                  <td>SharePoint API, Teams API, SMTP/Graph, Docker, AKS, GitHub Actions, Prometheus and Grafana</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 5</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 6: 03 / OPERATING ECONOMICS — Credit System and Monetisation
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <span className={styles.eyebrow}>03 / OPERATING ECONOMICS</span>
          <h2 className={styles.sectionHeading}>Credit System and Monetisation</h2>

          <p className={styles.sectionParagraph}>
            LegalSpendGPT is organized around an enterprise invoice workflow. Its commercial value comes
            from reducing manual handling, improving the consistency of invoice records and giving legal teams
            faster access to spend information.
          </p>

          <h3 className={styles.subHeading}>Consumption and cost measurement</h3>
          <p className={styles.sectionParagraph}>
            A useful operating model connects service consumption to the invoice lifecycle. Document
            processing, conversational queries, application workloads and human review each contribute to the
            cost of delivering a validated invoice record.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>COST DRIVER</th>
                  <th>MEASUREMENT UNIT</th>
                  <th>BUSINESS LINK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Document extraction</td>
                  <td>Pages processed</td>
                  <td>Cost of capturing invoice data</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>AI queries</td>
                  <td>Requests and token usage</td>
                  <td>Cost of conversational spend access</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Application and data</td>
                  <td>Compute, storage and workflow usage</td>
                  <td>Cost of running the processing pipeline</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Manual review</td>
                  <td>Minutes per exception</td>
                  <td>Human effort required for resolution</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Unit economics</h3>
          <div className={styles.formulaCard}>
            <div className={styles.formulaText}>
              Cost per processed invoice = invoice processing costs for the period ÷ invoices processed in that period.
            </div>
          </div>

          <p className={styles.sectionParagraph}>
            Track automated service consumption and reviewer effort separately so improvements in
            extraction and validation can be evaluated against their operational cost.
          </p>

          <h3 className={styles.subHeading}>Value realization</h3>
          <p className={styles.sectionParagraph}>
            The economic case centers on lower handling effort, fewer reconciliation tasks and more accessible
            reporting. The outcome scorecard connects these benefits to measurable processing and review
            performance.
          </p>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 6</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 7: 04 / REVIEW AND REPORTING — User Facing Features
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <span className={styles.eyebrow}>04 / REVIEW AND REPORTING</span>
          <h2 className={styles.sectionHeading}>User Facing Features</h2>

          <p className={styles.sectionParagraph}>
            The user journey spans submission, exception resolution and spend analysis. Teams can work
            through familiar Microsoft applications while the underlying pipeline maintains structured invoice
            data.
          </p>

          {/* Figure 4: Human Review Diagram */}
          <div className={styles.diagramWrapper}>
            <div className={styles.fig4Container}>
              <div className={styles.fig4BoxSingle}>
                <strong>Flagged invoice</strong>
                <span>From validation engine</span>
              </div>

              <div className={styles.fig4DownArrow}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
                  <path d="M7 0V16" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 14L7 22L12 14Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig4BoxSingle}>
                <strong>Power Automate</strong>
                <span>Notification and task creation</span>
              </div>

              <div className={styles.fig4DownArrow}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
                  <path d="M7 0V16" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 14L7 22L12 14Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig4PowerAppsBox}>
                <div className={styles.fig4PowerAppsHeader}>POWER APPS REVIEW</div>
                <div className={styles.fig4PowerAppsGrid}>
                  <div className={styles.fig4ActionCard}>
                    <strong>Edit fields</strong>
                    <span>Correct line items</span>
                  </div>
                  <div className={styles.fig4ActionCard}>
                    <strong>Add comments</strong>
                    <span>Reviewer notes</span>
                  </div>
                  <div className={styles.fig4ActionCard}>
                    <strong>Approve</strong>
                    <span>Confirm invoice</span>
                  </div>
                  <div className={styles.fig4ActionCard}>
                    <strong>Reject</strong>
                    <span>Reject invoice</span>
                  </div>
                </div>
              </div>

              {/* 2-Way Branching to bottom cards */}
              <div className={styles.fig4BranchTree}>
                <svg width="100%" height="36" viewBox="0 0 600 36" preserveAspectRatio="none" fill="none" aria-hidden="true">
                  <path d="M300 0V14" stroke="#0078D4" strokeWidth="2" />
                  <path d="M150 14H450" stroke="#0078D4" strokeWidth="2" />
                  <path d="M150 14V26" stroke="#0078D4" strokeWidth="2" />
                  <path d="M145 24L150 32L155 24Z" fill="#0078D4" />
                  <path d="M450 14V26" stroke="#0078D4" strokeWidth="2" />
                  <path d="M445 24L450 32L455 24Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig4BottomSplit}>
                <div className={styles.fig4BottomCard}>
                  <strong>Audit log</strong>
                  <span>User, action and timestamp</span>
                </div>
                <div className={styles.fig4BottomCard}>
                  <strong>Azure SQL update</strong>
                  <span>Status and final amounts</span>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            Figure 4 Human review through Power Automate and Power Apps
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>EXPERIENCE</th>
                  <th>USER ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Invoice submission</td>
                  <td>Upload to SharePoint or send invoices through the email ingestion route.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Exception review</td>
                  <td>Edit extracted fields, correct line items and add comments in Power Apps.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Invoice decision</td>
                  <td>Approve or reject the reviewed invoice with an audit record.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Spend dashboards</td>
                  <td>Explore spend by firm, matter and geography, including budget versus actual.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Currency comparison</td>
                  <td>Analyze values normalized to a base currency using daily FX ingestion.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 7</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 8: 05 / CONTROLLED ACCESS — Security and Auditability
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <span className={styles.eyebrow}>05 / CONTROLLED ACCESS</span>
          <h2 className={styles.sectionHeading}>Security and Auditability</h2>

          <p className={styles.sectionParagraph}>
            Access control and traceability sit within the invoice workflow. Azure AD enforces role based access
            for the Teams interface, while review actions and invoice decisions are retained in audit logs.
          </p>

          {/* Figure 5: Teams Query Flow */}
          <div className={styles.diagramWrapper}>
            <div className={styles.fig5Container}>
              <div className={styles.fig5IdentityBox}>
                <strong>IDENTITY AND ACCESS</strong>
                <span>Azure AD role based access controls the query experience</span>
              </div>

              <div className={styles.fig5DownArrowWrap}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
                  <path d="M7 0V16" stroke="#0078D4" strokeWidth="2" />
                  <path d="M2 14L7 22L12 14Z" fill="#0078D4" />
                </svg>
              </div>

              <div className={styles.fig5FlowRow}>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Teams query</div>
                  <div className={styles.fig1Sub}>Natural language spend question</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
                    <path d="M0 7H16" stroke="#0078D4" strokeWidth="2" />
                    <path d="M14 2L22 7L14 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Intent detection</div>
                  <div className={styles.fig1Sub}>LLM function calling</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
                    <path d="M0 7H16" stroke="#0078D4" strokeWidth="2" />
                    <path d="M14 2L22 7L14 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>SQL template</div>
                  <div className={styles.fig1Sub}>Controlled query construction</div>
                </div>
                <div className={styles.fig1Arrow}>
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
                    <path d="M0 7H16" stroke="#0078D4" strokeWidth="2" />
                    <path d="M14 2L22 7L14 12Z" fill="#0078D4" />
                  </svg>
                </div>
                <div className={styles.fig1Card}>
                  <div className={styles.fig1Title}>Azure SQL</div>
                  <div className={styles.fig1Sub}>Retrieve permitted spend records</div>
                </div>
              </div>

              {/* Loopback Row: Azure SQL -> Formatted insight -> Teams query */}
              <div className={styles.fig5LoopbackGrid}>
                {/* Column 1: Return Up into Teams query + Label */}
                <div className={styles.fig5LeftCol}>
                  <svg width="100%" height="96" viewBox="0 0 120 96" preserveAspectRatio="none" fill="none" aria-hidden="true" className={styles.fig5LeftSvg}>
                    <path d="M60 54V12" stroke="#0078D4" strokeWidth="2" />
                    <path d="M55 14L60 6L65 14Z" fill="#0078D4" />
                    <path d="M120 54H60" stroke="#0078D4" strokeWidth="2" />
                  </svg>
                  <div className={styles.fig5ReturnLabel}>Return to Teams</div>
                </div>

                {/* Column 2: Horizontal left connector */}
                <div className={styles.fig5GapLine}>
                  <svg width="100%" height="96" viewBox="0 0 24 96" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <path d="M0 54H24" stroke="#0078D4" strokeWidth="2" />
                  </svg>
                </div>

                {/* Columns 3 to 5: Formatted insight */}
                <div className={styles.fig5InsightBox}>
                  <strong>Formatted insight</strong>
                  <span>Spend by firm and matter<br />Budget versus actual</span>
                </div>

                {/* Column 6: Horizontal right connector with arrow pointing left into Formatted insight */}
                <div className={styles.fig5GapLine}>
                  <svg width="100%" height="96" viewBox="0 0 24 96" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <path d="M24 54H6" stroke="#0078D4" strokeWidth="2" />
                    <path d="M8 49L0 54L8 59Z" fill="#0078D4" />
                  </svg>
                </div>

                {/* Column 7: Down from Azure SQL and turn left */}
                <div className={styles.fig5RightCol}>
                  <svg width="100%" height="96" viewBox="0 0 120 96" preserveAspectRatio="none" fill="none" aria-hidden="true" className={styles.fig5RightSvg}>
                    <path d="M60 0V54H0" stroke="#0078D4" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.figureCaption}>
            Figure 5 Teams query flow with intent detection and templated SQL access
          </p>

          <h3 className={styles.subHeading}>Controlled conversational queries</h3>
          <p className={styles.sectionParagraph}>
            The Teams chatbot uses a function calling language model to identify intent and invoke template
            based SQL queries. Answers are grounded in retrieved spend data; the query path constrains how
            the model accesses the reporting layer.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>CONTROL</th>
                  <th>SYSTEM BEHAVIOR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Identity and permissions</td>
                  <td>Azure AD applies role based access to the conversational interface.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Review traceability</td>
                  <td>Field corrections, comments and approval or rejection decisions are logged.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Structured records</td>
                  <td>Azure SQL stores invoices, line items, firms, matters, FX rates and audit logs.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Validation gates</td>
                  <td>Field, reconciliation, currency, date and matter checks produce explicit decision states.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 8</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 9: 06 / ENGINEERING APPROACH — What Makes This Different
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <span className={styles.eyebrow}>06 / ENGINEERING APPROACH</span>
          <h2 className={styles.sectionHeading}>What Makes This Different</h2>

          <h3 className={styles.subHeading}>AI extraction with deterministic checks</h3>
          <p className={styles.sectionParagraph}>
            Document intelligence handles the variability of invoice formats. Explicit validation rules then check
            the extracted records, giving the processing pipeline a consistent basis for approval, rejection or
            human review.
          </p>

          <h3 className={styles.subHeading}>Exception handling within the workflow</h3>
          <p className={styles.sectionParagraph}>
            Power Apps gives reviewers a place to correct fields and line items before recording a decision.
            Human intervention is connected to processing and audit history, so exceptions remain part of the
            same operational flow.
          </p>

          <h3 className={styles.subHeading}>One data foundation for multiple experiences</h3>
          <p className={styles.sectionParagraph}>
            Structured invoice records support both curated SQL views for Power BI and template based
            queries from Teams. Dashboard users and conversational users access the same underlying spend
            model.
          </p>

          <h3 className={styles.subHeading}>Five week delivery plan</h3>
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>WEEK</th>
                  <th>ENGINEERING FOCUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colWeek}>01</td>
                  <td>Azure foundations, schema design and document ingestion</td>
                </tr>
                <tr>
                  <td className={styles.colWeek}>02</td>
                  <td>OCR implementation, field mapping and validation rules</td>
                </tr>
                <tr>
                  <td className={styles.colWeek}>03</td>
                  <td>Power Apps review, workflow automation and FX normalization</td>
                </tr>
                <tr>
                  <td className={styles.colWeek}>04</td>
                  <td>Power BI dashboards and Teams chatbot integration</td>
                </tr>
                <tr>
                  <td className={styles.colWeek}>05</td>
                  <td>End to end testing, performance optimization and deployment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.sectionParagraph}>
            The modular foundation supports a second phase focused on anomaly detection, alternative fee
            arrangement optimization and deeper language analysis.
          </p>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 9</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 10: 07 / OPERATIONAL IMPACT — Outcomes
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <div className={styles.runningHeader}>
            <span>PG-AGI / CASE STUDY</span>
            <span>LEGALSPENDGPT</span>
          </div>

          <span className={styles.eyebrow}>07 / OPERATIONAL IMPACT</span>
          <h2 className={styles.sectionHeading}>Outcomes</h2>

          <p className={styles.sectionParagraph}>
            LegalSpendGPT connects document processing with financial visibility. Its core outcomes are
            structured invoice records, explicit validation decisions, auditable exception handling and access to
            spend insights through Microsoft applications.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>SYSTEM OUTCOME</th>
                  <th>OPERATIONAL RESULT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Structured invoice data</td>
                  <td>Headers and line items become queryable records in Azure SQL.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Consistent validation</td>
                  <td>Invoices receive an approved, review or rejected status through defined checks.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Traceable human decisions</td>
                  <td>Corrections and review actions remain attached to the invoice workflow.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Comparable spend</td>
                  <td>Daily FX ingestion supports analysis in a common base currency.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Accessible intelligence</td>
                  <td>Power BI and Teams provide dashboard and conversational entry points.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Performance scorecard</h3>
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>DEFINITION</th>
                  <th style={{ textAlign: 'center' }}>BASELINE</th>
                  <th style={{ textAlign: 'center' }}>RESULT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Processing time</td>
                  <td>Median receipt to final status</td>
                  <td className={styles.colBracket}>[ &nbsp; ]</td>
                  <td className={styles.colBracket}>[ &nbsp; ]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Automatic approval</td>
                  <td>Approved without manual review ÷ processed invoices</td>
                  <td className={styles.colBracket}>[ &nbsp; ]</td>
                  <td className={styles.colBracket}>[ &nbsp; ]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Review effort</td>
                  <td>Median reviewer minutes per flagged invoice</td>
                  <td className={styles.colBracket}>[ &nbsp; ]</td>
                  <td className={styles.colBracket}>[ &nbsp; ]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Processing cost</td>
                  <td>Total processing cost ÷ processed invoices</td>
                  <td className={styles.colBracket}>[ &nbsp; ]</td>
                  <td className={styles.colBracket}>[ &nbsp; ]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.scorecardMetaRow}>
            <span>Reporting period [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>
            <span>Invoice volume [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>
          </div>

          <div className={styles.runningFooter}>
            <span>LEGAL INVOICE INTELLIGENCE</span>
            <span>PG-AGI / 10</span>
          </div>
        </section>
      </div>
    </div>
  );
}
