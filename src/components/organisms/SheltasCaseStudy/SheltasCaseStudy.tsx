'use client';

import React from 'react';
import styles from '@/styles/components/organisms/SheltasCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface SheltasCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

// ── Section Header with Roman Numeral Badge ──
function SectionHeader({ numeral, eyebrow, title }: { numeral: string; eyebrow: string; title: string }) {
  return (
    <div className={styles.sectionHeaderWrap}>
      <div className={styles.sectionBadge}>{numeral}</div>
      <div className={styles.sectionHeaderContent}>
        <span className={styles.sectionEyebrow}>{eyebrow}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
    </div>
  );
}

// ── Figure 1: Layered Platform Architecture Diagram ──
function Figure1LayeredArchitecture() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.archDiagram}>
        <div className={styles.archHeader}>
          <h4>Sheltas Health Annotation Marketplace</h4>
          <p>Layered platform architecture — three-sided marketplace across AI Partners, Practitioners and Internal Operations</p>
        </div>

        {/* 01 Access & Identity */}
        <div className={styles.archLayerRow}>
          <div className={styles.archLayerBadge} style={{ backgroundColor: '#242A5C' }}>
            <span>01 ACCESS &amp;</span>
            <span>IDENTITY</span>
          </div>
          <div className={styles.archLayerCards3}>
            <div className={`${styles.archCard} ${styles.cardLavenderBorder}`}>
              <span className={styles.archCardTitle}>AI Partner / Client Portal</span>
              <span className={styles.archCardSub}>Invitation-only onboarding</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardLavenderBorder}`}>
              <span className={styles.archCardTitle}>Practitioner Portal</span>
              <span className={styles.archCardSub}>Self-registration + verification</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardLavenderBorder}`}>
              <span className={styles.archCardTitle}>Internal Admin Console</span>
              <span className={styles.archCardSub}>Admin · Supervisor · QA/QC · PM</span>
            </div>
          </div>
        </div>

        {/* 02 Governance & Onboarding */}
        <div className={styles.archLayerRow}>
          <div className={styles.archLayerBadge} style={{ backgroundColor: '#20A784' }}>
            <span>02 GOVERNANCE &amp;</span>
            <span>ONBOARDING</span>
          </div>
          <div className={styles.archLayerCards}>
            <div className={`${styles.archCard} ${styles.cardMintBorder}`}>
              <span className={styles.archCardTitle}>Role-Based Access</span>
              <span className={styles.archCardSub}>Scoped dashboards</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardMintBorder}`}>
              <span className={styles.archCardTitle}>Credential Verification</span>
              <span className={styles.archCardSub}>Licence &amp; document review</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardMintBorder}`}>
              <span className={styles.archCardTitle}>Project Review Pipeline</span>
              <span className={styles.archCardSub}>Approve · configure · assign PM</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardMintBorder}`}>
              <span className={styles.archCardTitle}>Qualification Gating</span>
              <span className={styles.archCardSub}>Per-project entry criteria</span>
            </div>
          </div>
        </div>

        {/* 03 Project & Dataset */}
        <div className={styles.archLayerRow}>
          <div className={styles.archLayerBadge} style={{ backgroundColor: '#B85C7A' }}>
            <span>03 PROJECT &amp;</span>
            <span>DATASET</span>
          </div>
          <div className={styles.archLayerCards}>
            <div className={`${styles.archCard} ${styles.cardRoseBorder}`}>
              <span className={styles.archCardTitle}>Project Creation</span>
              <span className={styles.archCardSub}>Modality · specialty · scope</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardRoseBorder}`}>
              <span className={styles.archCardTitle}>Dataset Upload</span>
              <span className={styles.archCardSub}>Image · text · structured</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardRoseBorder}`}>
              <span className={styles.archCardTitle}>Instruction Config</span>
              <span className={styles.archCardSub}>Guidelines bound to tasks</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardRoseBorder}`}>
              <span className={styles.archCardTitle}>Task Generation</span>
              <span className={styles.archCardSub}>Segmentation pipeline</span>
            </div>
          </div>
        </div>

        {/* 04 Annotation Execution */}
        <div className={styles.archLayerRow}>
          <div className={styles.archLayerBadge} style={{ backgroundColor: '#242A5C' }}>
            <span>04 ANNOTATION</span>
            <span>EXECUTION</span>
          </div>
          <div className={styles.archLayerCards}>
            <div className={styles.archCard}>
              <span className={styles.archCardTitle}>Task Assignment</span>
              <span className={styles.archCardSub}>Prompt-level allocation</span>
            </div>
            <div className={`${styles.archCard} ${styles.archCardTealSolid}`}>
              <span className={styles.archCardTitle}>Annotator</span>
              <span className={styles.archCardSub}>Primary annotation</span>
            </div>
            <div className={`${styles.archCard} ${styles.archCardTealSolid}`}>
              <span className={styles.archCardTitle}>Reviewer</span>
              <span className={styles.archCardSub}>Quality validation</span>
            </div>
            <div className={`${styles.archCard} ${styles.archCardTealSolid}`}>
              <span className={styles.archCardTitle}>Auditor</span>
              <span className={styles.archCardSub}>Final verification</span>
            </div>
          </div>
        </div>

        {/* 05 Supply Enablement */}
        <div className={styles.archLayerRow}>
          <div className={styles.archLayerBadge} style={{ backgroundColor: '#20A784' }}>
            <span>05 SUPPLY</span>
            <span>ENABLEMENT</span>
          </div>
          <div className={styles.archLayerCards}>
            <div className={`${styles.archCard} ${styles.cardMintBorder}`}>
              <span className={styles.archCardTitle}>Training Portal</span>
              <span className={styles.archCardSub}>Courses &amp; progress</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardMintBorder}`}>
              <span className={styles.archCardTitle}>Assessment &amp; Badges</span>
              <span className={styles.archCardSub}>Timed, attempt-limited</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardMintBorder}`}>
              <span className={styles.archCardTitle}>Community Channels</span>
              <span className={styles.archCardSub}>Role-gated messaging</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardMintBorder}`}>
              <span className={styles.archCardTitle}>Matching Engine</span>
              <span className={styles.archCardSub}>Credential-aware routing</span>
            </div>
          </div>
        </div>

        {/* 06 Delivery & Settlement */}
        <div className={styles.archLayerRow}>
          <div className={styles.archLayerBadge} style={{ backgroundColor: '#B85C7A' }}>
            <span>06 DELIVERY &amp;</span>
            <span>SETTLEMENT</span>
          </div>
          <div className={styles.archLayerCards}>
            <div className={`${styles.archCard} ${styles.cardRoseBorder}`}>
              <span className={styles.archCardTitle}>Validation &amp; Consensus</span>
              <span className={styles.archCardSub}>Disagreement resolution</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardRoseBorder}`}>
              <span className={styles.archCardTitle}>Dataset Export</span>
              <span className={styles.archCardSub}>CSV · JSON packaging</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardRoseBorder}`}>
              <span className={styles.archCardTitle}>Billing &amp; Invoicing</span>
              <span className={styles.archCardSub}>Stripe transaction layer</span>
            </div>
            <div className={`${styles.archCard} ${styles.cardRoseBorder}`}>
              <span className={styles.archCardTitle}>Practitioner Payouts</span>
              <span className={styles.archCardSub}>Completion-triggered</span>
            </div>
          </div>
        </div>

        {/* 07 Platform Foundation */}
        <div className={styles.archLayerRow}>
          <div className={styles.archLayerBadge} style={{ backgroundColor: '#242A5C' }}>
            <span>07 PLATFORM</span>
            <span>FOUNDATION</span>
          </div>
          <div className={styles.archFoundationRow}>
            <span className={styles.foundItem}>FastAPI</span>
            <span className={styles.foundItem}>Firestore</span>
            <span className={styles.foundItem}>Redis Cache</span>
            <span className={styles.foundItem}>Google Cloud Storage</span>
            <span className={styles.foundItem}>Next.js / React</span>
            <span className={styles.foundItem}>Docker on GCP</span>
          </div>
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 1: Sheltas Health Annotation Marketplace — layered platform architecture.
      </p>
    </div>
  );
}

// ── Figure 2: End-to-End Lifecycle Flowchart ──
function Figure2LifecycleFlowchart() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.flowchartWrap}>
        <div className={styles.flowchartInner}>
          {/* Step 1: AI Partner / Client Side */}
          <div className={`${styles.flowGroup} ${styles.flowGroupClient}`}>
            <span className={`${styles.flowGroupLabel} ${styles.labelNavy}`}>AI PARTNER / CLIENT SIDE</span>
            <div className={styles.flowCardsRow}>
              <div className={`${styles.flowCard} ${styles.cardNavy}`}>
                <span>Project</span>
                <span>Submitted</span>
              </div>
              <div className={styles.flowArrowRight}>→</div>
              <div className={`${styles.flowCard} ${styles.cardNavy}`}>
                <span>Dataset</span>
                <span>Uploaded</span>
              </div>
              <div className={styles.flowArrowRight}>→</div>
              <div className={`${styles.flowCard} ${styles.cardNavy}`}>
                <span>Instructions</span>
                <span>Attached</span>
              </div>
            </div>
          </div>

          {/* Connector 1: Down arrow */}
          <div className={`${styles.flowConnectorDown} ${styles.connector1}`}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M5 0V12M5 12L1.5 8M5 12L8.5 8" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 2: Internal Operations */}
          <div className={`${styles.flowGroup} ${styles.flowGroupOps}`}>
            <span className={`${styles.flowGroupLabel} ${styles.labelRose}`}>INTERNAL OPERATIONS</span>
            <div className={styles.flowCardsRow}>
              <div className={`${styles.flowCard} ${styles.cardRose}`}>
                <span>Review &amp;</span>
                <span>Approval</span>
              </div>
              <div className={styles.flowArrowRight}>→</div>
              <div className={`${styles.flowCard} ${styles.cardRose}`}>
                <span>Task</span>
                <span>Generation</span>
              </div>
              <div className={styles.flowArrowRight}>→</div>
              <div className={`${styles.flowCard} ${styles.cardRose}`}>
                <span>Practitioner</span>
                <span>Allocation</span>
              </div>
            </div>
          </div>

          {/* Connector 2: Down arrow */}
          <div className={`${styles.flowConnectorDown} ${styles.connector2}`}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M5 0V12M5 12L1.5 8M5 12L8.5 8" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 3: Practitioner Side */}
          <div className={`${styles.flowGroup} ${styles.flowGroupPractitioner}`}>
            <span className={`${styles.flowGroupLabel} ${styles.labelTeal}`}>PRACTITIONER SIDE</span>
            <div className={styles.flowCardsRow}>
              <div className={`${styles.flowCard} ${styles.cardTeal}`}>
                <span>Annotate</span>
              </div>
              <div className={styles.flowArrowRight}>→</div>
              <div className={`${styles.flowCard} ${styles.cardTeal}`}>
                <span>Review</span>
              </div>
              <div className={styles.flowArrowRight}>→</div>
              <div className={`${styles.flowCard} ${styles.cardTeal}`}>
                <span>Audit</span>
              </div>
            </div>
          </div>

          {/* Connector 3: Down arrow */}
          <div className={`${styles.flowConnectorDown} ${styles.connector3}`}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M5 0V12M5 12L1.5 8M5 12L8.5 8" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 4: Delivery */}
          <div className={`${styles.flowGroup} ${styles.flowGroupDelivery}`}>
            <span className={`${styles.flowGroupLabel} ${styles.labelNavy}`}>DELIVERY</span>
            <div className={styles.flowCardsRow}>
              <div className={`${styles.flowCard} ${styles.cardNavy}`}>
                <span>Consensus &amp;</span>
                <span>Validation</span>
              </div>
              <div className={styles.flowArrowRight}>→</div>
              <div className={`${styles.flowCard} ${styles.cardNavy}`}>
                <span>Validated</span>
                <span>Dataset Export</span>
              </div>
              <div className={styles.flowArrowRight}>→</div>
              <div className={`${styles.flowCard} ${styles.cardNavy}`}>
                <span>Billing &amp;</span>
                <span>Payouts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 2: End-to-end annotation lifecycle across client, internal operations, practitioner and delivery.
      </p>
    </div>
  );
}

// ── Figure 3: AI Partner Project View Mockup ──
function Figure3PartnerProjectView() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.uiMockupFrame}>
        {/* Top Navbar */}
        <div className={styles.mockupTopBar}>
          <div className={styles.brandLogo}>
            <span style={{ color: '#2563EB', fontSize: '18px', fontWeight: 900 }}>§</span>
            <span>Sheltas Health Inc.</span>
          </div>
          <div className={styles.mockSearchPill}>
            <span>🔍 Search</span>
          </div>
          <div className={styles.userPill}>
            <div className={styles.bellBtn}>🔔</div>
            <div className={styles.avatarPill}>
              <div className={styles.avatarTeal}>AC</div>
              <span style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.75rem' }}>Apex Corp AI</span>
              <span style={{ color: '#94A3B8', fontSize: '0.625rem' }}>▾</span>
            </div>
          </div>
        </div>

        {/* Body Layout */}
        <div className={styles.mockupBodyLayout}>
          {/* Left Sidebar */}
          <div className={styles.mockupSidebarCompact}>
            <div className={styles.sidebarItemCompact}>
              <span>⊞</span>
              <span>Dashboard</span>
            </div>
            <div className={`${styles.sidebarItemCompact} ${styles.sidebarActiveGradient}`}>
              <span>📁</span>
              <span>My projects</span>
            </div>
            <div className={styles.sidebarItemCompact}>
              <span>⚙</span>
              <span>Setting</span>
            </div>
          </div>

          {/* Center Main Content Area */}
          <div className={styles.mockupMainArea}>
            {/* Project Header */}
            <div className={styles.projectMainHeader}>
              <div className={styles.projectTitleRow}>
                <button className={styles.backBtnSquare}>←</button>
                <h3 className={styles.projectTitleText}>Radiology Batch A - Chest X-Rays</h3>
                <span className={styles.statusPillInProgress}>• In Progress</span>
                <button className={styles.exportDataBtn}>⭳ Export Data</button>
              </div>
              <div className={styles.projectSubMeta}>
                <span># PRJ-00228</span>
                <span>📅 Created Oct 15, 2024</span>
                <span>🖼️ Image · Radiology</span>
              </div>
            </div>

            {/* Project Information Card */}
            <div className={styles.projInfoCard}>
              <div className={styles.projInfoHeaderRow}>
                <span>PROJECT INFORMATION</span>
                <span className={styles.editIcon}>✏️</span>
              </div>
              <div className={styles.projInfoFields}>
                <div className={styles.projInfoField}>
                  <span className={styles.fieldLabel}>Due Date</span>
                  <span className={styles.fieldValueBold}>October 24, 2024</span>
                  <span className={styles.fieldSubRed}>3 days remaining</span>
                </div>
                <div className={styles.projInfoField}>
                  <span className={styles.fieldLabel}>Total Dataset Size</span>
                  <span className={styles.fieldValueBold}>5,000 Files</span>
                  <span className={styles.fieldSubMuted}>~12.5 GB</span>
                </div>
                <div className={styles.projInfoField}>
                  <span className={styles.fieldLabel}>Annotation Type</span>
                  <span className={styles.fieldValueBold}>Bounding Box + Classification</span>
                </div>
                <div className={styles.projInfoField}>
                  <span className={styles.fieldLabel}>Project Manager</span>
                  <span className={styles.fieldValueBold}>Rahul Aggarwal</span>
                </div>
                <div className={styles.projInfoField}>
                  <span className={styles.fieldLabel}>Priority Level</span>
                  <span className={styles.priorityPillHigh}>🔴 High Priority</span>
                </div>
              </div>
            </div>

            {/* Provided Assets Section */}
            <div className={styles.assetsSection}>
              <span className={styles.sectionHeaderSmall}>PROVIDED ASSETS</span>
              <div className={styles.assetCardsList}>
                <div className={styles.assetCardItem}>
                  <div className={styles.assetLeft}>
                    <div className={styles.iconCsv}>📊</div>
                    <div>
                      <strong className={styles.assetName}>patient_records_v2.csv</strong>
                      <div className={styles.assetMeta}>14.2 MB • 5,000 rows</div>
                    </div>
                  </div>
                  <span className={styles.downloadIcon}>⭳</span>
                </div>
                <div className={styles.assetCardItem}>
                  <div className={styles.assetLeft}>
                    <div className={styles.iconPdf}>📄</div>
                    <div>
                      <strong className={styles.assetName}>annotation_guidelines.pdf</strong>
                      <div className={styles.assetMeta}>2.1 MB • 12 pages</div>
                    </div>
                  </div>
                  <span className={styles.downloadIcon}>⭳</span>
                </div>
              </div>
            </div>

            {/* Upload Documents Dropzone */}
            <div className={styles.uploadSection}>
              <span className={styles.sectionHeaderSmall}>
                Upload Documents <span style={{ color: '#E11D48' }}>*</span>
              </span>
              <div className={styles.dropzoneCard}>
                <div className={styles.cloudIcon}>☁️</div>
                <div className={styles.selectFileText}>Select File</div>
                <div className={styles.dragDropText}>or drag and drop your files here</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className={styles.quickActionsCard}>
              <span className={styles.quickActionsTitle}>QUICK ACTIONS</span>
              <button className={styles.exportReportBtn}>📄 Export Report</button>
            </div>
          </div>

          {/* Right Activity Stream Column */}
          <div className={styles.mockupActivitySidebar}>
            <div className={styles.activityHeaderRow}>
              <h4 className={styles.activityTitle}>Activity</h4>
            </div>

            {/* Comments / Timeline Toggle */}
            <div className={styles.tabToggleCapsule}>
              <button className={`${styles.tabBtn} ${styles.tabBtnActive}`}>Comments</button>
              <button className={styles.tabBtn}>Timeline</button>
            </div>

            {/* Filter Pills */}
            <div className={styles.filterPillsRow}>
              <span className={`${styles.filterPill} ${styles.filterPillActive}`}>All Activity</span>
              <span className={styles.filterPill}>Mentions</span>
              <span className={styles.filterPill}>System</span>
            </div>

            {/* Feed Items */}
            <div className={styles.activityFeed}>
              {/* System Submission */}
              <div className={styles.feedItem}>
                <div className={styles.feedIconCircle}>⇄</div>
                <div className={styles.feedContent}>
                  <div className={styles.systemBubble}>You submitted a dataset</div>
                  <span className={styles.feedTimestamp}>Today, 9:41 AM</span>
                </div>
              </div>

              {/* Message from Sarah Chen */}
              <div className={styles.feedItem}>
                <div className={styles.feedAvatarCircle} style={{ background: '#FDE047', color: '#854D0E' }}>SC</div>
                <div className={styles.feedContent}>
                  <div className={styles.commentHeader}>
                    <strong>Sarah Chen</strong>
                    <span className={styles.feedTimestampInline}>Today, 10:15 AM</span>
                    <span className={styles.moreOptions}>•••</span>
                  </div>
                  <div className={styles.commentBubbleWhite}>
                    we need instruction and for a doc explaining the data structure.
                  </div>
                  <span className={styles.replyLink}>↩ Reply</span>
                </div>
              </div>

              {/* Reply from You */}
              <div className={styles.feedItem}>
                <div className={styles.feedAvatarCircle} style={{ background: '#1E293B', color: '#FFFFFF' }}>Y</div>
                <div className={styles.feedContent}>
                  <div className={styles.commentHeader}>
                    <strong>You</strong>
                    <span className={styles.feedTimestampInline}>Today, 11:30 AM</span>
                  </div>
                  <div className={styles.commentBubbleWhite}>
                    Sure, I will update it Today
                  </div>
                </div>
              </div>

              {/* Attachment Event */}
              <div className={styles.feedItem}>
                <div className={styles.feedIconCircle}>📎</div>
                <div className={styles.feedContent}>
                  <div className={styles.attachHeader}>You attached a new file</div>
                  <div className={styles.attachmentPillCard}>
                    <span style={{ color: '#E11D48', fontSize: '14px' }}>📄</span>
                    <strong>Bias_Guidelines_v2.pdf</strong>
                  </div>
                  <span className={styles.feedTimestamp}>Today, 4:20 PM</span>
                </div>
              </div>
            </div>

            {/* Bottom Comment Box */}
            <div className={styles.commentInputBox}>
              <textarea
                className={styles.commentTextarea}
                placeholder="Add a comment... Use @ to mention someone"
                rows={2}
              />
              <div className={styles.commentToolbar}>
                <div className={styles.formatIcons}>
                  <span>B</span>
                  <span>📎</span>
                  <span>🔗</span>
                  <span>@</span>
                </div>
                <button className={styles.postBtn}>Post</button>
              </div>
              <div className={styles.shortcutHint}>Press Cmd + Enter to post</div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 3: AI partner project view — project information, provided assets, upload and the shared activity stream.
      </p>
    </div>
  );
}

// ── Figure 4: Practitioner Workspace Mockup ──
function Figure4PractitionerWorkspace() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.practitionerMockupFrame}>
        {/* Top Navbar */}
        <div className={styles.practitionerTopBar}>
          <div className={styles.practitionerBrandLogo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C7.5 4 4 7.5 4 12C4 17.5 11 21 16 26C14 20 10 17 10 12C10 8.5 12.5 6 15 6C17.5 6 19 7.5 19 9" stroke="#2B2D6E" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20 28C24.5 28 28 24.5 28 20C28 14.5 21 11 16 6C18 12 22 15 22 20C22 23.5 19.5 26 17 26C14.5 26 13 24.5 13 23" stroke="url(#sheltasGradFig4)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="sheltasGradFig4" x1="13" y1="6" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E11D48"/>
                  <stop offset="0.5" stopColor="#8B5CF6"/>
                  <stop offset="1" stopColor="#0D9488"/>
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.practitionerBrandText}>
              <span className={styles.brandName}>Sheltas</span>
              <span className={styles.brandSub}>Health Inc.</span>
            </div>
          </div>

          <div className={styles.practitionerTopRight}>
            <div className={styles.notifWrapper} title="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className={styles.notifDot}></span>
            </div>

            <div className={styles.settingsBtn} title="Settings">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>

            <div className={styles.topDivider}></div>

            <div className={styles.practitionerUserProfile}>
              <div className={styles.userTextCol}>
                <span className={styles.userNameText}>Alex</span>
                <span className={styles.userRoleText}>Practitioner</span>
              </div>
              <div className={styles.userAvatarImg}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="#1E293B"/>
                  <path d="M17 17C19.2091 17 21 15.2091 21 13C21 10.7909 19.2091 9 17 9C14.7909 9 13 10.7909 13 13C13 15.2091 14.7909 17 17 17Z" fill="#94A3B8"/>
                  <path d="M10 26C10 22.6863 12.6863 20 16 20H18C21.3137 20 24 22.6863 24 26V27H10V26Z" fill="#CBD5E1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Body Layout */}
        <div className={styles.practitionerBodyLayout}>
          {/* Sidebar */}
          <aside className={styles.practitionerSidebar}>
            <div className={styles.sideNavItem}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Home</span>
            </div>

            {/* Active My Workspace with gradient pill */}
            <div className={styles.sideNavItemWorkspaceActive}>
              <div className={styles.navItemLeft}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>My Workspace</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {/* Sub-projects list */}
            <div className={styles.sideSubProjectsList}>
              <div className={styles.sideSubProjectItem}>
                <div className={styles.subLeft}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Project 1</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>

              <div className={styles.sideSubProjectItem}>
                <div className={styles.subLeft}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Project 2</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>

              <div className={styles.sideSubProjectItem}>
                <div className={styles.subLeft}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Project 3</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>

            {/* Training */}
            <div className={styles.sideNavItemTraining}>
              <div className={styles.navItemLeft}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <span>Training</span>
              </div>
            </div>

            {/* Community */}
            <div className={styles.sideNavItemWithChevron}>
              <div className={styles.navItemLeft}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Community</span>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>

            {/* All Projects */}
            <div className={styles.sideNavItemWithChevron}>
              <div className={styles.navItemLeft}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>All Projects</span>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </aside>

          {/* Main Area */}
          <main className={styles.practitionerMainContent}>
            {/* Breadcrumb */}
            <div className={styles.workspaceBreadcrumbs}>
              <span>Dashboard</span>
              <span className={styles.crumbDivider}>&gt;</span>
              <span className={styles.crumbCurrent}>My Workspace</span>
            </div>

            {/* Heading */}
            <h2 className={styles.workspaceMainTitle}>MY WORKSPACE</h2>
            <p className={styles.workspaceMainSubtitle}>
              Manage your assigned projects and access project channels.
            </p>

            {/* Section Controls Row */}
            <div className={styles.workspaceSectionHeaderRow}>
              <h3 className={styles.yourProjectsHeading}>YOUR PROJECTS</h3>
              <div className={styles.projectFilterTabs}>
                <button className={`${styles.filterTabPill} ${styles.filterTabPillActive}`}>All</button>
                <button className={styles.filterTabPill}>In Progress</button>
                <button className={styles.filterTabPill}>Completed</button>
                <button className={styles.filterTabPill}>Assessment Pending</button>
              </div>
            </div>

            {/* Cards Grid */}
            <div className={styles.practitionerCardsGrid}>
              {/* Card 1: Cardiology */}
              <div className={styles.practitionerProjectCard}>
                <div className={styles.cardTopContent}>
                  <div className={styles.cardBadgesRow}>
                    <span className={`${styles.statusBadge} ${styles.badgeMintGreen}`}>IN PROGRESS</span>
                    <span className={`${styles.roleBadge} ${styles.badgeBlue}`}>ATTEMPTER</span>
                  </div>

                  <h4 className={styles.cardProjectTitle}>CARDIOLOGY ASSESSMENT 2024</h4>
                  <span className={styles.specialtyTag}>Cardiology</span>

                  <div className={styles.cardMetaList}>
                    <div className={styles.metaListItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span>8 members</span>
                    </div>
                    <div className={styles.metaListItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Last activity: 2 hours ago</span>
                    </div>
                  </div>
                </div>

                <button className={styles.openChannelBtnTeal}>
                  <span>Open Project Channel</span>
                  <span className={styles.btnArrow}>→</span>
                </button>
              </div>

              {/* Card 2: Neurology */}
              <div className={styles.practitionerProjectCard}>
                <div className={styles.cardTopContent}>
                  <div className={styles.cardBadgesRow}>
                    <span className={`${styles.statusBadge} ${styles.badgeMintGreen}`}>IN PROGRESS</span>
                    <span className={`${styles.roleBadge} ${styles.badgePurple}`}>REVIEWER</span>
                  </div>

                  <h4 className={styles.cardProjectTitle}>NEUROLOGY REVIEW Q3</h4>
                  <span className={styles.specialtyTag}>Neurology</span>

                  <div className={styles.cardMetaList}>
                    <div className={styles.metaListItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span>5 members</span>
                    </div>
                    <div className={styles.metaListItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Last activity: Yesterday</span>
                    </div>
                  </div>
                </div>

                <button className={styles.openChannelBtnTeal}>
                  <span>Open Project Channel</span>
                  <span className={styles.btnArrow}>→</span>
                </button>
              </div>

              {/* Card 3: Oncology */}
              <div className={styles.practitionerProjectCard}>
                <div className={styles.cardTopContent}>
                  <div className={styles.cardBadgesRow}>
                    <span className={`${styles.statusBadge} ${styles.badgeLightGreen}`}>COMPLETED</span>
                    <span className={`${styles.roleBadge} ${styles.badgeCoral}`}>AUDITOR</span>
                  </div>

                  <h4 className={styles.cardProjectTitle}>ONCOLOGY COMPLIANCE AUDIT</h4>
                  <span className={styles.specialtyTag}>Oncology</span>

                  <div className={styles.cardMetaList}>
                    <div className={styles.metaListItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span>12 members</span>
                    </div>
                    <div className={styles.metaListItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Last activity: 5 days ago</span>
                    </div>
                  </div>
                </div>

                <button className={styles.openChannelBtnOutline}>
                  <span>Open Project Channel</span>
                  <span className={styles.btnArrow}>→</span>
                </button>
              </div>
            </div>

            {/* Bottom Note */}
            <p className={styles.workspaceBottomNote}>
              No additional projects assigned. Contact your administrator to be added to a project.
            </p>
          </main>
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 4: Practitioner workspace — assigned projects with execution role, specialty and activity recency.
      </p>
    </div>
  );
}

// ── Figure 5: Community Channel Mockup ──
function Figure5CommunityChannel() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.practitionerMockupFrame}>
        {/* Top Navbar */}
        <div className={styles.practitionerTopBar}>
          <div className={styles.practitionerBrandLogo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C7.5 4 4 7.5 4 12C4 17.5 11 21 16 26C14 20 10 17 10 12C10 8.5 12.5 6 15 6C17.5 6 19 7.5 19 9" stroke="#2B2D6E" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20 28C24.5 28 28 24.5 28 20C28 14.5 21 11 16 6C18 12 22 15 22 20C22 23.5 19.5 26 17 26C14.5 26 13 24.5 13 23" stroke="url(#sheltasGradFig5)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="sheltasGradFig5" x1="13" y1="6" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E11D48"/>
                  <stop offset="0.5" stopColor="#8B5CF6"/>
                  <stop offset="1" stopColor="#0D9488"/>
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.practitionerBrandText}>
              <span className={styles.brandName}>Sheltas</span>
              <span className={styles.brandSub}>Health Inc.</span>
            </div>
          </div>

          <div className={styles.practitionerTopRight}>
            <div className={styles.notifWrapper} title="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className={styles.notifDot}></span>
            </div>

            <div className={styles.settingsBtn} title="Settings">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>

            <div className={styles.topDivider}></div>

            <div className={styles.practitionerUserProfile}>
              <div className={styles.userTextCol}>
                <span className={styles.userNameText}>Alex</span>
                <span className={styles.userRoleText}>Practitioner</span>
              </div>
              <div className={styles.userAvatarImg}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="#1E293B"/>
                  <path d="M17 17C19.2091 17 21 15.2091 21 13C21 10.7909 19.2091 9 17 9C14.7909 9 13 10.7909 13 13C13 15.2091 14.7909 17 17 17Z" fill="#94A3B8"/>
                  <path d="M10 26C10 22.6863 12.6863 20 16 20H18C21.3137 20 24 22.6863 24 26V27H10V26Z" fill="#CBD5E1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Body Layout */}
        <div className={styles.practitionerBodyLayout}>
          {/* Sidebar */}
          <aside className={styles.practitionerSidebar}>
            {/* Home */}
            <div className={styles.sideNavItem}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Home</span>
            </div>

            {/* My Workspace (Collapsed/Inactive in community view) */}
            <div className={styles.sideNavItemWithChevron}>
              <div className={styles.navItemLeft}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>My Workspace</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {/* Training */}
            <div className={styles.sideNavItemTraining}>
              <div className={styles.navItemLeft}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <span>Training</span>
              </div>
            </div>

            {/* Community (ACTIVE) */}
            <div className={styles.sideNavItemWorkspaceActive} style={{ marginTop: '4px' }}>
              <div className={styles.navItemLeft}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Community</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {/* Nested Sub-channels */}
            <div className={styles.communitySidebarJoinedBadge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span>JOINED</span>
            </div>

            <div className={styles.communityChannelsList}>
              <div className={`${styles.communityChannelItem} ${styles.activeChannel}`}>
                <span>#</span>
                <span>General Health Prac...</span>
              </div>
              <div className={styles.communityChannelItem}>
                <span>#</span>
                <span>Clinical Research Hub</span>
              </div>
              <div className={styles.communityChannelItem}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Sheltas Internal</span>
              </div>
            </div>

            {/* Public Section */}
            <div className={styles.communityGroupHeader}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <span>PUBLIC</span>
            </div>

            {/* Private Section */}
            <div className={styles.communityGroupHeader}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <span>PRIVATE</span>
            </div>
          </aside>

          {/* Main Channel Area */}
          <main className={styles.communityMainLayout}>
            {/* Channel Top Header */}
            <div className={styles.channelHeaderArea}>
              <div className={styles.channelHeaderTopRow}>
                <div>
                  <h3 className={styles.channelTitleText}># GENERAL HEALTH PRACTITIONERS</h3>
                  <p className={styles.channelSubtitleText}>Project channel for assigned practitioners - 8 Members</p>
                </div>

                {/* Overlapping User Avatars & Options */}
                <div className={styles.channelMemberStack}>
                  <div className={styles.stackedAvatar} style={{ backgroundColor: '#FDE047' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <circle cx="13" cy="13" r="13" fill="#854D0E"/>
                      <circle cx="13" cy="10" r="4" fill="#FEF08A"/>
                      <path d="M7 21C7 18 9.5 16 13 16C16.5 16 19 18 19 21" fill="#FEF08A"/>
                    </svg>
                  </div>
                  <div className={styles.stackedAvatar} style={{ backgroundColor: '#60A5FA' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <circle cx="13" cy="13" r="13" fill="#1E3A8A"/>
                      <circle cx="13" cy="10" r="4" fill="#BFDBFE"/>
                      <path d="M7 21C7 18 9.5 16 13 16C16.5 16 19 18 19 21" fill="#BFDBFE"/>
                    </svg>
                  </div>
                  <div className={styles.stackedAvatar} style={{ backgroundColor: '#34D399' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <circle cx="13" cy="13" r="13" fill="#064E3B"/>
                      <circle cx="13" cy="10" r="4" fill="#A7F3D0"/>
                      <path d="M7 21C7 18 9.5 16 13 16C16.5 16 19 18 19 21" fill="#A7F3D0"/>
                    </svg>
                  </div>
                  <div className={styles.moreMembersBadge}>+5</div>
                  <div className={styles.moreOptionsDots} title="More options">⋮</div>
                </div>
              </div>

              {/* Channel Tabs */}
              <div className={styles.channelNavTabsList}>
                <button className={styles.channelTabMediaActive}>Media</button>
                <button className={styles.channelTabItem}>Docs</button>
                <button className={styles.channelTabItem}>Files</button>
                <button className={styles.channelTabItem}>Links</button>
                <button className={styles.channelTabItem}>Videos</button>
                <button className={styles.channelTabItem}>Test Questions</button>
                <button className={styles.channelTabItem}>Members</button>
                <button className={styles.channelTabItem}>About</button>
              </div>
            </div>

            {/* Channel Body: Messages Feed & Media Column */}
            <div className={styles.channelBodyGrid}>
              {/* Left Column: Chat Stream & Composer */}
              <div className={styles.channelChatCol}>
                <div className={styles.chatMessagesFeed}>
                  {/* Today Divider */}
                  <div className={styles.dateDividerWrap}>
                    <span className={styles.datePill}>Today</span>
                  </div>

                  {/* Message 1 */}
                  <div className={styles.chatMessageItem}>
                    <div className={styles.chatAvatarBadge}>DM</div>
                    <div className={styles.chatMessageBody}>
                      <div className={styles.chatSenderRow}>
                        <span className={styles.chatSenderName}>Dr. Mensah</span>
                        <span className={styles.chatTimestamp}>10:24</span>
                      </div>
                      <p className={styles.chatMessageText}>
                        I&apos;ve reviewed the ECG interpretation module. The case studies in section 3 are particularly well structured. <span className={styles.mentionBlue}>@Sarah</span>, can you complete the Q4 answer set before Friday?
                      </p>
                    </div>
                  </div>

                  {/* Message 2 with Attachment */}
                  <div className={styles.chatMessageItem}>
                    <div className={styles.chatAvatarBadge}>DM</div>
                    <div className={styles.chatMessageBody}>
                      <div className={styles.chatSenderRow}>
                        <span className={styles.chatSenderName}>Dr. Mensah</span>
                        <span className={styles.chatTimestamp}>10:24</span>
                      </div>
                      <p className={styles.chatMessageText}>
                        Attaching the updated cardiac procedure guidelines PDF. Please review before the mid-review milestone.
                      </p>
                      {/* Attachment Card */}
                      <div className={styles.chatAttachmentCard}>
                        <div className={styles.attachmentLeft}>
                          <div className={styles.fileIconBadge}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                          </div>
                          <div className={styles.fileInfoCol}>
                            <span className={styles.fileName}>Cardiac_Procedures_v2.pdf</span>
                            <span className={styles.fileMeta}>2.4 MB • PDF Document</span>
                          </div>
                        </div>
                        <button className={styles.downloadBtnTeal} title="Download file">
                          ⭳
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Message 3 */}
                  <div className={styles.chatMessageItem}>
                    <div className={styles.chatAvatarBadge}>DM</div>
                    <div className={styles.chatMessageBody}>
                      <div className={styles.chatSenderRow}>
                        <span className={styles.chatSenderName}>Dr. Mensah</span>
                        <span className={styles.chatTimestamp}>10:24</span>
                      </div>
                      <p className={styles.chatMessageText}>
                        Uploaded the revised case file. Please flag anything that needs a second look.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Composer */}
                <div className={styles.communityComposerArea}>
                  <div className={styles.composerToolbarRow}>
                    <button className={styles.toolbarBtn} style={{ fontWeight: 800 }}>B</button>
                    <button className={styles.toolbarBtn} style={{ fontStyle: 'italic' }}>I</button>
                    <button className={styles.toolbarBtn} style={{ textDecoration: 'underline' }}>U</button>
                    <button className={styles.toolbarBtn} style={{ textDecoration: 'line-through' }}>S</button>
                    <button className={styles.toolbarBtn}>≡</button>
                    <button className={styles.toolbarBtn}>≡</button>
                    <button className={styles.toolbarBtn}>≡▾</button>
                    <button className={styles.toolbarBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </button>
                    <button className={styles.toolbarBtn}>&lt;/&gt;</button>
                  </div>

                  <div className={styles.composerInputCapsule}>
                    <span className={styles.composerInputPlaceholder}>Message #cardiology-assessment-2024...</span>
                    <div className={styles.composerActionsRight}>
                      <button className={styles.actionIconBtn} title="Attach file">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                        </svg>
                      </button>
                      <button className={styles.actionIconBtn} title="Emoji / Mentions">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="9" y1="9" x2="9.01" y2="9"></line>
                          <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                      </button>
                      <button className={styles.actionIconBtn} title="Add">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <button className={styles.sendCircleBtn} title="Send">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="19" x2="12" y2="5"></line>
                          <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Media Sidebar */}
              <div className={styles.mediaSidebarCol}>
                <h4 className={styles.mediaHeading}>MEDIA</h4>
                <div className={styles.mediaEmptyBox}>
                  No media shared yet.
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 5: Role-gated community channel — threaded discussion, mentions and controlled file sharing.
      </p>
    </div>
  );
}

// ── Figure 6: Internal Operations Dashboard Mockup ──
function Figure6OperationsDashboard() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.practitionerMockupFrame}>
        {/* Top Navbar */}
        <div className={styles.practitionerTopBar}>
          <div className={styles.practitionerBrandLogo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C7.5 4 4 7.5 4 12C4 17.5 11 21 16 26C14 20 10 17 10 12C10 8.5 12.5 6 15 6C17.5 6 19 7.5 19 9" stroke="#2B2D6E" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20 28C24.5 28 28 24.5 28 20C28 14.5 21 11 16 6C18 12 22 15 22 20C22 23.5 19.5 26 17 26C14.5 26 13 24.5 13 23" stroke="url(#sheltasGradFig6)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="sheltasGradFig6" x1="13" y1="6" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E11D48"/>
                  <stop offset="0.5" stopColor="#8B5CF6"/>
                  <stop offset="1" stopColor="#0D9488"/>
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.practitionerBrandText}>
              <span className={styles.brandName}>Sheltas</span>
              <span className={styles.brandSub}>Health Inc.</span>
            </div>
          </div>

          {/* Center Search Bar */}
          <div className={styles.mockSearchPill} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
          </div>

          {/* Right User & Notifications */}
          <div className={styles.practitionerTopRight}>
            <div className={styles.notifWrapper} title="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>

            <div className={styles.topDivider}></div>

            <div className={styles.practitionerUserProfile}>
              <div className={styles.avatarTeal}>AC</div>
              <span style={{ fontWeight: 600, color: '#1E255E', fontSize: '0.8125rem' }}>Apex Corp AI</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Body Layout */}
        <div className={styles.practitionerBodyLayout}>
          {/* Sidebar */}
          <aside className={styles.practitionerSidebar}>
            {/* Active Dashboard */}
            <div className={styles.sideNavItemWorkspaceActive}>
              <div className={styles.navItemLeft}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Dashboard</span>
              </div>
            </div>

            {/* Projects */}
            <div className={styles.sideNavItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Projects</span>
            </div>

            {/* Practitioner Onboarding */}
            <div className={styles.sideNavItem} style={{ alignItems: 'flex-start', padding: '7px 12px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span>Practitioner</span>
                <span>Onboarding</span>
              </div>
            </div>

            {/* Onboarding Form */}
            <div className={styles.sideNavItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Onboarding Form</span>
            </div>

            {/* Setting */}
            <div className={styles.sideNavItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Setting</span>
            </div>

            {/* Invite */}
            <div className={styles.sideNavItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              <span>Invite</span>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className={styles.practitionerMainContent}>
            <h2 className={styles.workspaceMainTitle}>Dashboard Overview</h2>
            <p className={styles.workspaceMainSubtitle}>
              Monitor your annotation projects, quality metrics, and recent activity.
            </p>

            {/* 4 Stat Cards Row */}
            <div className={styles.opsStatCardsGrid4}>
              {/* Stat 1: Total Projects */}
              <div className={styles.opsStatCard}>
                <div className={styles.opsStatTop}>
                  <span className={styles.opsStatLabel}>Total Projects</span>
                  <div className={`${styles.opsStatIconBadge} ${styles.mint}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                </div>
                <div className={styles.opsStatValue}>124,592</div>
                <div></div>
              </div>

              {/* Stat 2: Overdue Tickets */}
              <div className={styles.opsStatCard}>
                <div className={styles.opsStatTop}>
                  <span className={styles.opsStatLabel}>OVERDUE TICKETS</span>
                  <div className={`${styles.opsStatIconBadge} ${styles.amber}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                </div>
                <div className={styles.opsStatValue}>34</div>
                <div className={`${styles.opsStatTrend} ${styles.trendAmber}`}>
                  <span>↘</span>
                  <span>-5% vs last week</span>
                </div>
              </div>

              {/* Stat 3: Audit Pass Rate */}
              <div className={styles.opsStatCard}>
                <div className={styles.opsStatTop}>
                  <span className={styles.opsStatLabel}>AUDIT PASS RATE</span>
                  <div className={`${styles.opsStatIconBadge} ${styles.mint}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                </div>
                <div className={styles.opsStatValue}>94.2%</div>
                <div className={`${styles.opsStatTrend} ${styles.trendGreen}`}>
                  <span>↗</span>
                  <span>+1.2% vs avg</span>
                </div>
              </div>

              {/* Stat 4: Delivery Ready */}
              <div className={styles.opsStatCard}>
                <div className={styles.opsStatTop}>
                  <span className={styles.opsStatLabel}>DELIVERY READY</span>
                  <div className={`${styles.opsStatIconBadge} ${styles.blue}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="21 8 21 21 3 21 3 8"></polyline>
                      <rect x="1" y="3" width="22" height="5"></rect>
                      <line x1="10" y1="12" x2="14" y2="12"></line>
                    </svg>
                  </div>
                </div>
                <div className={styles.opsStatValue}>8,450</div>
                <div className={`${styles.opsStatTrend} ${styles.trendMuted}`}>
                  <span>Tickets awaiting approval</span>
                </div>
              </div>
            </div>

            {/* Split Content: Left Matrix & Queues vs Right Quick Actions & Exports */}
            <div className={styles.opsMainSplitGrid}>
              {/* Left Column */}
              <div className={styles.opsColLeft}>
                {/* Project Status Matrix Card */}
                <div className={styles.opsCardContainer}>
                  <div className={styles.opsCardHeaderRow}>
                    <h3 className={styles.opsCardTitle}>Project Status Matrix</h3>
                    <span className={styles.opsCardLink}>View All Projects</span>
                  </div>

                  <div className={styles.opsMatrixTable}>
                    <div className={styles.opsMatrixHeader}>
                      <span>PROJECT ID</span>
                      <span>CLIENT</span>
                      <span>PROGRESS</span>
                      <span>STATUS</span>
                    </div>

                    <div className={styles.opsMatrixRow}>
                      <span className={styles.projIdText}>PRJ-8492-X</span>
                      <span className={styles.clientText}>TechCorp Inc.</span>
                      <div className={styles.opsProgressBarWrap}>
                        <div className={styles.barTrack}>
                          <div className={`${styles.barFill} ${styles.greenFill}`} style={{ width: '100%' }}></div>
                        </div>
                        <span className={styles.progressSubText}>100% (Delivery Ready)</span>
                      </div>
                      <span className={`${styles.opsStatusPill} ${styles.completed}`}>Completed</span>
                    </div>

                    <div className={styles.opsMatrixRow}>
                      <span className={styles.projIdText}>PRJ-9102-Y</span>
                      <span className={styles.clientText}>AI Solutions Co.</span>
                      <div className={styles.opsProgressBarWrap}>
                        <div className={styles.barTrack}>
                          <div className={`${styles.barFill} ${styles.blueFill}`} style={{ width: '65%' }}></div>
                        </div>
                        <span className={styles.progressSubText}>65% (In Review)</span>
                      </div>
                      <span className={`${styles.opsStatusPill} ${styles.inProgress}`}>In Progress</span>
                    </div>

                    <div className={styles.opsMatrixRow}>
                      <span className={styles.projIdText}>PRJ-7731-Z</span>
                      <span className={styles.clientText}>DataMinds LLC</span>
                      <div className={styles.opsProgressBarWrap}>
                        <div className={styles.barTrack}>
                          <div className={`${styles.barFill} ${styles.amberFill}`} style={{ width: '30%' }}></div>
                        </div>
                        <span className={styles.progressSubText}>30% (Annotation)</span>
                      </div>
                      <span className={`${styles.opsStatusPill} ${styles.delayed}`}>Delayed</span>
                    </div>
                  </div>
                </div>

                {/* Priority Queues Card */}
                <div className={styles.opsCardContainer}>
                  <h3 className={styles.opsCardTitle} style={{ marginBottom: '12px' }}>Priority Queues</h3>
                  <div className={styles.priorityQueueList}>
                    <div className={styles.priorityQueueItem}>
                      <div className={styles.priorityQueueLeft}>
                        <span className={styles.queueIcon}>🚩</span>
                        <div className={styles.queueTextCol}>
                          <span className={styles.queueTitle}>Flagged for Review</span>
                          <span className={styles.queueSub}>Requires PM attention</span>
                        </div>
                      </div>
                      <span className={`${styles.priorityBadgePill} ${styles.red}`}>14</span>
                    </div>

                    <div className={styles.priorityQueueItem}>
                      <div className={styles.priorityQueueLeft}>
                        <span className={styles.queueIcon}>🔄</span>
                        <div className={styles.queueTextCol}>
                          <span className={styles.queueTitle}>Revision Requested</span>
                          <span className={styles.queueSub}>Awaiting practitioner fix</span>
                        </div>
                      </div>
                      <span className={`${styles.priorityBadgePill} ${styles.yellow}`}>89</span>
                    </div>

                    <div className={styles.priorityQueueItem}>
                      <div className={styles.priorityQueueLeft}>
                        <span className={styles.queueIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                          </svg>
                        </span>
                        <div className={styles.queueTextCol}>
                          <span className={styles.queueTitle}>Unassigned Backlog</span>
                          <span className={styles.queueSub}>Ready for batching</span>
                        </div>
                      </div>
                      <span className={`${styles.priorityBadgePill} ${styles.blue}`}>1,240</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.opsColRight}>
                {/* Intake Queue Card */}
                <div className={styles.opsCardContainer}>
                  <div className={styles.intakeHeaderTitle}>
                    <span>Intake Queue</span>
                    <span className={styles.intakeDot}></span>
                    <span className={styles.intakeNewText}>New (1)</span>
                  </div>
                  <div className={styles.intakeInnerBox}>
                    <div>Client: <strong>Acme Healthcare Corp</strong></div>
                    <div>Requested: <strong>April 24, 2026</strong></div>
                  </div>
                </div>

                {/* Quick Actions Card */}
                <div className={styles.opsCardContainer}>
                  <h3 className={styles.opsCardTitle} style={{ marginBottom: '12px' }}>Quick Actions</h3>
                  <div className={styles.quickActionsGrid2x2}>
                    <button className={styles.quickActionBtn}>
                      <div className={styles.actionBtnIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="12" y1="18" x2="12" y2="12"></line>
                          <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                      </div>
                      <span className={styles.actionBtnLabel}>Upload Dataset</span>
                    </button>

                    <button className={styles.quickActionBtn}>
                      <div className={styles.actionBtnIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className={styles.actionBtnLabel}>Approve Delivery</span>
                    </button>

                    <button className={styles.quickActionBtn}>
                      <div className={styles.actionBtnIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                      <span className={styles.actionBtnLabel}>Assign Task</span>
                    </button>

                    <button className={styles.quickActionBtn}>
                      <div className={styles.actionBtnIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </div>
                      <span className={styles.actionBtnLabel}>Export Data</span>
                    </button>
                  </div>
                </div>

                {/* Recent Exports Card */}
                <div className={styles.opsCardContainer}>
                  <div className={styles.opsCardHeaderRow}>
                    <h3 className={styles.opsCardTitle}>Recent Exports</h3>
                    <span style={{ color: '#64748B', cursor: 'pointer', fontSize: '0.875rem' }}>→</span>
                  </div>
                  <div className={styles.recentExportsList}>
                    <div className={styles.recentExportItem}>
                      <div className={styles.exportLeft}>
                        <div className={`${styles.exportIconBadge} ${styles.green}`}>
                          📊
                        </div>
                        <div className={styles.exportInfoCol}>
                          <span className={styles.exportName}>Dermatology_V1_Final</span>
                          <span className={styles.exportMeta}>Today, 10:42 AM • 24MB</span>
                        </div>
                      </div>
                      <span className={styles.exportDownloadIcon} title="Download">⭳</span>
                    </div>

                    <div className={styles.recentExportItem}>
                      <div className={styles.exportLeft}>
                        <div className={`${styles.exportIconBadge} ${styles.blue}`}>
                          📄
                        </div>
                        <div className={styles.exportInfoCol}>
                          <span className={styles.exportName}>EHR_NLP_Batch_3</span>
                          <span className={styles.exportMeta}>Yesterday, 2:15 PM • 12MB</span>
                        </div>
                      </div>
                      <span className={styles.exportDownloadIcon} title="Download">⭳</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 6: Internal operations dashboard — project status matrix, priority queues, intake queue and quality indicators.
      </p>
    </div>
  );
}

// ── Figure 7: Project Register Mockup ──
function Figure7ProjectRegister() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.practitionerMockupFrame}>
        {/* Top Navbar */}
        <div className={styles.practitionerTopBar}>
          <div className={styles.practitionerBrandLogo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C7.5 4 4 7.5 4 12C4 17.5 11 21 16 26C14 20 10 17 10 12C10 8.5 12.5 6 15 6C17.5 6 19 7.5 19 9" stroke="#2B2D6E" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20 28C24.5 28 28 24.5 28 20C28 14.5 21 11 16 6C18 12 22 15 22 20C22 23.5 19.5 26 17 26C14.5 26 13 24.5 13 23" stroke="url(#sheltasGradFig7)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="sheltasGradFig7" x1="13" y1="6" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E11D48"/>
                  <stop offset="0.5" stopColor="#8B5CF6"/>
                  <stop offset="1" stopColor="#0D9488"/>
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.practitionerBrandText}>
              <span className={styles.brandName}>Sheltas</span>
              <span className={styles.brandSub}>Health Inc.</span>
            </div>
          </div>

          {/* Center Search Pill */}
          <div className={styles.mockSearchPill} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '380px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
          </div>

          {/* Right User & Notifications */}
          <div className={styles.practitionerTopRight}>
            <div className={styles.notifWrapper} title="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>

            <div className={styles.topDivider}></div>

            <div className={styles.practitionerUserProfile}>
              <div className={styles.avatarTeal}>AC</div>
              <span style={{ fontWeight: 600, color: '#1E255E', fontSize: '0.8125rem' }}>Apex Corp AI</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Body Layout with Slim Sidebar */}
        <div className={styles.practitionerBodyLayout}>
          {/* Left Slim Icon Sidebar */}
          <aside className={styles.registerSidebarRail}>
            {/* Dashboard */}
            <button className={styles.registerSidebarIconBtn} title="Dashboard">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>

            {/* Projects (ACTIVE) */}
            <div className={styles.registerSidebarActiveIconGradient} title="Projects">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>

            {/* Practitioners / Training */}
            <button className={styles.registerSidebarIconBtn} title="Practitioners">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </button>

            {/* Onboarding Form / Documents */}
            <button className={styles.registerSidebarIconBtn} title="Onboarding Forms">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </button>

            {/* Settings */}
            <button className={styles.registerSidebarIconBtn} title="Settings">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>

            {/* Invite */}
            <button className={styles.registerSidebarIconBtn} title="Invite Users">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </button>
          </aside>

          {/* Main Content Area */}
          <main className={styles.registerMainContent}>
            {/* Title & Actions Row */}
            <div className={styles.registerHeaderRow}>
              <div className={styles.registerTitleCol}>
                <h2 className={styles.registerTitle}>Projects</h2>
                <p className={styles.registerSubtitle}>Manage and track all your dataset annotation projects.</p>
              </div>

              <div className={styles.registerHeaderActions}>
                <button className={styles.exportBtnOutline}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Export</span>
                </button>
                <button className={styles.newProjectBtnSolid}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>New Project</span>
                </button>
              </div>
            </div>

            {/* Segmented Primary Tabs Capsule */}
            <div className={styles.registerPrimaryTabsCapsule}>
              <button className={`${styles.registerPrimaryTabItem} ${styles.active}`}>Active Projects</button>
              <button className={styles.registerPrimaryTabItem}>Pending Projects</button>
            </div>

            {/* Table Container Card */}
            <div className={styles.registerTableCard}>
              {/* Sub-Filter Toolbar */}
              <div className={styles.registerSubFilterBar}>
                <div className={styles.registerFilterPillsLeft}>
                  <div className={`${styles.registerFilterPillItem} ${styles.activeMint}`}>
                    <span>All Pending</span>
                    <span className={styles.pillCountMint}>12</span>
                  </div>
                  <div className={styles.registerFilterPillItem}>
                    <span>Draft</span>
                    <span className={styles.pillCountPill}>3</span>
                  </div>
                  <div className={styles.registerFilterPillItem}>
                    <span>In Review</span>
                    <span className={styles.pillCountPill}>8</span>
                  </div>
                </div>

                <div className={styles.registerFilterControlsRight}>
                  <div className={styles.registerTableSearchBox}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Search projects..." />
                  </div>
                  <button className={styles.registerSlidersFilterBtn} title="Filter options">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="21" x2="4" y2="14"></line>
                      <line x1="4" y1="10" x2="4" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12" y2="3"></line>
                      <line x1="20" y1="21" x2="20" y2="16"></line>
                      <line x1="20" y1="12" x2="20" y2="3"></line>
                      <line x1="1" y1="14" x2="7" y2="14"></line>
                      <line x1="9" y1="8" x2="15" y2="8"></line>
                      <line x1="17" y1="16" x2="23" y2="16"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modality & Specialty Meta Summary */}
              <div className={styles.registerMetaSummaryLine}>
                <span>Modality: <strong>All Modalities</strong></span>
                <span className={styles.metaDivider}>|</span>
                <span>Specialty: <strong>All Specialties</strong></span>
              </div>

              {/* Table Data Grid */}
              <div className={styles.registerTableScrollContainer}>
                <div className={styles.registerGridTable}>
                  {/* Grid Header */}
                  <div className={styles.registerGridHeader}>
                    <span>PROJECT NAME</span>
                    <span>MODALITY &amp; SPECIALTY</span>
                    <span>TASK DISTRIBUTION</span>
                    <span>STATUS &amp; PROGRESS</span>
                    <span>QUALITY &amp; FLAGS</span>
                    <span>DUE DATE</span>
                    <span></span>
                  </div>

                  {/* Row 1: Radiology Batch A */}
                  <div className={styles.registerGridRow}>
                    {/* Project Name */}
                    <div className={styles.projNameCell}>
                      <div className={`${styles.projBadgeIcon} ${styles.badgeR1}`}>R1</div>
                      <div className={styles.projTextInfo}>
                        <span className={styles.projTitleBold}>Radiology Batch A - Chest X-Rays</span>
                        <span className={styles.projIdMeta}>ID: PRJ-00225 • Created Oct 15</span>
                      </div>
                    </div>

                    {/* Modality & Specialty */}
                    <div className={styles.modalityCell}>
                      <span className={styles.modalityPillBadge}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        <span>Image</span>
                      </span>
                      <span className={styles.specialtySubtitle}>Radiology</span>
                    </div>

                    {/* Task Distribution */}
                    <div className={styles.taskDistCell}>
                      <div className={styles.avatarReviewerStack}>
                        <div className={styles.stackedAvatarsGroup}>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#F59E0B' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#3B82F6' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#10B981' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span className={styles.reviewerCountText}>3 Reviewers</span>
                      </div>
                      <span className={`${styles.taskReviewedCount} ${styles.countGreen}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>1,245 / 1,650 Reviewed</span>
                      </span>
                    </div>

                    {/* Status & Progress */}
                    <div className={styles.statusProgressCell}>
                      <span className={`${styles.regStatusPill} ${styles.statusBlue}`}>• In Progress</span>
                      <div className={styles.regProgressTrackWrap}>
                        <div className={styles.regProgressBarTrack}>
                          <div className={`${styles.regProgressBarFill} ${styles.fillBlue}`} style={{ width: '75%' }}></div>
                        </div>
                        <span className={styles.regProgressValueText}>75%</span>
                      </div>
                    </div>

                    {/* Quality & Flags */}
                    <div className={styles.qualityFlagsCell}>
                      <span className={styles.regScoreText}>Score: <strong className={styles.scoreGreen}>98.5%</strong></span>
                      <span className={`${styles.regFlagsRow} ${styles.flagRed}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                          <line x1="4" y1="22" x2="4" y2="15"></line>
                        </svg>
                        <span>12 Flagged</span>
                      </span>
                    </div>

                    {/* Due Date */}
                    <div className={styles.dueDateCell}>
                      <span className={styles.regDueDateBold}>Oct 24, 2024</span>
                      <span className={`${styles.regDueDaysLeft} ${styles.daysLeftMuted}`}>3 days left</span>
                    </div>

                    {/* Action */}
                    <div className={styles.regActionDotsCell} title="More options">⋮</div>
                  </div>

                  {/* Row 2: Pathology Slides Q3 Review */}
                  <div className={styles.registerGridRow}>
                    {/* Project Name */}
                    <div className={styles.projNameCell}>
                      <div className={`${styles.projBadgeIcon} ${styles.badgeP2}`}>P2</div>
                      <div className={styles.projTextInfo}>
                        <span className={styles.projTitleBold}>Pathology Slides Q3 Review</span>
                        <span className={styles.projIdMeta}>ID: PRJ-00226 • Created Oct 18</span>
                      </div>
                    </div>

                    {/* Modality & Specialty */}
                    <div className={styles.modalityCell}>
                      <span className={styles.modalityPillBadge}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        <span>Image</span>
                      </span>
                      <span className={styles.specialtySubtitle}>Pathology</span>
                    </div>

                    {/* Task Distribution */}
                    <div className={styles.taskDistCell}>
                      <div className={styles.avatarReviewerStack}>
                        <div className={styles.stackedAvatarsGroup}>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#8B5CF6' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#EC4899' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#3B82F6' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.moreReviewersCount}>+2</div>
                        </div>
                        <span className={styles.reviewerCountText}>5 Reviewers</span>
                      </div>
                      <span className={`${styles.taskReviewedCount} ${styles.countGreen}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>520 / 1,300 Reviewed</span>
                      </span>
                    </div>

                    {/* Status & Progress */}
                    <div className={styles.statusProgressCell}>
                      <span className={`${styles.regStatusPill} ${styles.statusBlue}`}>• In Progress</span>
                      <div className={styles.regProgressTrackWrap}>
                        <div className={styles.regProgressBarTrack}>
                          <div className={`${styles.regProgressBarFill} ${styles.fillBlue}`} style={{ width: '40%' }}></div>
                        </div>
                        <span className={styles.regProgressValueText}>40%</span>
                      </div>
                    </div>

                    {/* Quality & Flags */}
                    <div className={styles.qualityFlagsCell}>
                      <span className={styles.regScoreText}>Score: <strong className={styles.scoreGreen}>96.2%</strong></span>
                      <span className={`${styles.regFlagsRow} ${styles.flagMuted}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                          <line x1="4" y1="22" x2="4" y2="15"></line>
                        </svg>
                        <span>0 Flagged</span>
                      </span>
                    </div>

                    {/* Due Date */}
                    <div className={styles.dueDateCell}>
                      <span className={styles.regDueDateBold}>Nov 02, 2024</span>
                      <span className={`${styles.regDueDaysLeft} ${styles.daysLeftMuted}`}>12 days left</span>
                    </div>

                    {/* Action */}
                    <div className={styles.regActionDotsCell} title="More options">⋮</div>
                  </div>

                  {/* Row 3: Clinical Notes NLP Entity Extraction */}
                  <div className={styles.registerGridRow}>
                    {/* Project Name */}
                    <div className={styles.projNameCell}>
                      <div className={`${styles.projBadgeIcon} ${styles.badgeN1}`}>N1</div>
                      <div className={styles.projTextInfo}>
                        <span className={styles.projTitleBold}>Clinical Notes NLP Entity Extraction</span>
                        <span className={styles.projIdMeta}>ID: PRJ-00227 • Created Oct 20</span>
                      </div>
                    </div>

                    {/* Modality & Specialty */}
                    <div className={styles.modalityCell}>
                      <span className={styles.modalityPillBadge}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                        <span>Text (NLP)</span>
                      </span>
                      <span className={styles.specialtySubtitle}>General Practice</span>
                    </div>

                    {/* Task Distribution */}
                    <div className={styles.taskDistCell}>
                      <div className={styles.avatarReviewerStack}>
                        <div className={styles.stackedAvatarsGroup}>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#0284C7' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#F59E0B' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span className={styles.reviewerCountText}>2 Reviewers</span>
                      </div>
                      <span className={`${styles.taskReviewedCount} ${styles.countAmber}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span>85 / 850 Reviewed</span>
                      </span>
                    </div>

                    {/* Status & Progress */}
                    <div className={styles.statusProgressCell}>
                      <span className={`${styles.regStatusPill} ${styles.statusAmber}`}>• Assigned</span>
                      <div className={styles.regProgressTrackWrap}>
                        <div className={styles.regProgressBarTrack}>
                          <div className={`${styles.regProgressBarFill} ${styles.fillAmber}`} style={{ width: '10%' }}></div>
                        </div>
                        <span className={styles.regProgressValueText}>10%</span>
                      </div>
                    </div>

                    {/* Quality & Flags */}
                    <div className={styles.qualityFlagsCell}>
                      <span className={styles.regScoreText}>Score: <strong className={styles.scoreMuted}>--</strong></span>
                      <span className={`${styles.regFlagsRow} ${styles.flagMuted}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                          <line x1="4" y1="22" x2="4" y2="15"></line>
                        </svg>
                        <span>0 Flagged</span>
                      </span>
                    </div>

                    {/* Due Date */}
                    <div className={styles.dueDateCell}>
                      <span className={styles.regDueDateBold}>Nov 15, 2024</span>
                      <span className={`${styles.regDueDaysLeft} ${styles.daysLeftMuted}`}>25 days left</span>
                    </div>

                    {/* Action */}
                    <div className={styles.regActionDotsCell} title="More options">⋮</div>
                  </div>

                  {/* Row 4: Cardio Baseline ECG Annotation */}
                  <div className={styles.registerGridRow}>
                    {/* Project Name */}
                    <div className={styles.projNameCell}>
                      <div className={`${styles.projBadgeIcon} ${styles.badgeC1}`}>C1</div>
                      <div className={styles.projTextInfo}>
                        <span className={styles.projTitleBold}>Cardio Baseline ECG Annotation</span>
                        <span className={styles.projIdMeta}>ID: PRJ-00224 • Created Sep 28</span>
                      </div>
                    </div>

                    {/* Modality & Specialty */}
                    <div className={styles.modalityCell}>
                      <span className={styles.modalityPillBadge}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                        <span>Text (NLP)</span>
                      </span>
                      <span className={styles.specialtySubtitle}>Cardiology</span>
                    </div>

                    {/* Task Distribution */}
                    <div className={styles.taskDistCell}>
                      <div className={styles.avatarReviewerStack}>
                        <div className={styles.stackedAvatarsGroup}>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#10B981' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#6366F1' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#F43F5E' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={styles.stackedReviewerAvatar} style={{ backgroundColor: '#0284C7' }}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span className={styles.reviewerCountText}>4 Reviewers</span>
                      </div>
                      <span className={`${styles.taskReviewedCount} ${styles.countGreen}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>2,100 / 2,100 Reviewed</span>
                      </span>
                    </div>

                    {/* Status & Progress */}
                    <div className={styles.statusProgressCell}>
                      <span className={`${styles.regStatusPill} ${styles.statusGreen}`}>• Completed</span>
                      <div className={styles.regProgressTrackWrap}>
                        <div className={styles.regProgressBarTrack}>
                          <div className={`${styles.regProgressBarFill} ${styles.fillGreen}`} style={{ width: '100%' }}></div>
                        </div>
                        <span className={styles.regProgressValueText}>100%</span>
                      </div>
                    </div>

                    {/* Quality & Flags */}
                    <div className={styles.qualityFlagsCell}>
                      <span className={styles.regScoreText}>Score: <strong className={styles.scoreGreen}>99.1%</strong></span>
                      <span className={`${styles.regFlagsRow} ${styles.flagGreen}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Resolved</span>
                      </span>
                    </div>

                    {/* Due Date */}
                    <div className={styles.dueDateCell}>
                      <span className={styles.regDueDateBold}>Oct 10, 2024</span>
                      <span className={`${styles.regDueDaysLeft} ${styles.daysLeftGreen}`}>Delivered</span>
                    </div>

                    {/* Action */}
                    <div className={styles.regActionDotsCell} title="More options">⋮</div>
                  </div>
                </div>
              </div>

              {/* Pagination Footer */}
              <div className={styles.registerPaginationFooter}>
                <span className={styles.paginationCountInfo}>
                  Showing <strong>1</strong> to <strong>12</strong> of <strong>45</strong> projects
                </span>

                <div className={styles.paginationPagesGroup}>
                  <button className={`${styles.paginationNavBtn} ${styles.disabled}`}>Previous</button>
                  <button className={`${styles.paginationPageBtn} ${styles.activePage}`}>1</button>
                  <button className={styles.paginationPageBtn}>2</button>
                  <button className={styles.paginationPageBtn}>3</button>
                  <span className={styles.paginationEllipsis}>... 4</span>
                  <button className={styles.paginationNavBtn}>Next</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 7: Project register — modality, task distribution, progress, quality score, flag count and due date.
      </p>
    </div>
  );
}

// ── Figure 8: Project Detail Mockup ──
function Figure8ProjectDetail() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.practitionerMockupFrame}>
        {/* Top Navbar */}
        <div className={styles.practitionerTopBar}>
          <div className={styles.practitionerBrandLogo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C7.5 4 4 7.5 4 12C4 17.5 11 21 16 26C14 20 10 17 10 12C10 8.5 12.5 6 15 6C17.5 6 19 7.5 19 9" stroke="#2B2D6E" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20 28C24.5 28 28 24.5 28 20C28 14.5 21 11 16 6C18 12 22 15 22 20C22 23.5 19.5 26 17 26C14.5 26 13 24.5 13 23" stroke="url(#sheltasGradFig8)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="sheltasGradFig8" x1="13" y1="6" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E11D48"/>
                  <stop offset="0.5" stopColor="#8B5CF6"/>
                  <stop offset="1" stopColor="#0D9488"/>
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.practitionerBrandText}>
              <span className={styles.brandName}>Sheltas</span>
              <span className={styles.brandSub}>Health Inc.</span>
            </div>
          </div>

          {/* Center Search Pill */}
          <div className={styles.mockSearchPill} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '380px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
          </div>

          {/* Right User & Notifications */}
          <div className={styles.practitionerTopRight}>
            <div className={styles.notifWrapper} title="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>

            <div className={styles.topDivider}></div>

            <div className={styles.practitionerUserProfile}>
              <div className={styles.avatarTeal}>AC</div>
              <span style={{ fontWeight: 600, color: '#1E255E', fontSize: '0.8125rem' }}>Apex Corp AI</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Body Layout: Slim Sidebar + Center Detail View + Right Activity Sidebar */}
        <div className={styles.detailMainLayout}>
          {/* Left Slim Icon Sidebar */}
          <aside className={styles.registerSidebarRail}>
            {/* Dashboard */}
            <button className={styles.registerSidebarIconBtn} title="Dashboard">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>

            {/* Projects (ACTIVE) */}
            <div className={styles.registerSidebarActiveIconGradient} title="Projects">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>

            {/* Practitioners */}
            <button className={styles.registerSidebarIconBtn} title="Practitioners">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </button>

            {/* Onboarding Forms */}
            <button className={styles.registerSidebarIconBtn} title="Onboarding Forms">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </button>

            {/* Settings */}
            <button className={styles.registerSidebarIconBtn} title="Settings">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>

            {/* Invite */}
            <button className={styles.registerSidebarIconBtn} title="Invite Users">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </button>
          </aside>

          {/* Center Column: Project Details & Metrics */}
          <main className={styles.detailCenterCol}>
            {/* Header Row */}
            <div className={styles.detailHeaderRow}>
              <div className={styles.detailHeaderLeft}>
                <div className={styles.detailHeaderTitleRow}>
                  <button className={styles.detailBackBtn}>←</button>
                  <h3 className={styles.detailTitleText}>Radiology Batch A - Chest X-Rays</h3>
                  <span className={styles.detailStatusBadge}>• In Progress</span>
                </div>
                <div className={styles.detailHeaderMeta}>
                  <span># PRJ-00225</span>
                  <span>📅 Created Oct 15, 2024</span>
                  <span>🖼️ Image • Radiology</span>
                </div>
              </div>

              <div className={styles.detailHeaderRight}>
                <button className={styles.detailSettingsIconBtn} title="Project Settings">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </button>
                <button className={styles.detailExportReportsBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Export Reports</span>
                </button>
              </div>
            </div>

            {/* Segmented Capsule Tabs */}
            <div className={styles.detailPillTabsCapsule}>
              <button className={styles.detailPillTabItem}>Kanban Board</button>
              <button className={`${styles.detailPillTabItem} ${styles.active}`}>Project Details</button>
            </div>

            {/* 4 Metric Cards */}
            <div className={styles.detailMetricCardsGrid4}>
              {/* Card 1: OVERALL PROGRESS */}
              <div className={styles.detailMetricCard}>
                <span className={styles.metricLabelSmall}>OVERALL PROGRESS</span>
                <div className={styles.metricValueBig}>75%</div>
                <div className={styles.metricProgressTrack}>
                  <div className={styles.metricProgressFill} style={{ width: '75%' }}></div>
                </div>
                <span className={styles.metricSubMuted}>3,750/5,000 tasks</span>
              </div>

              {/* Card 2: QUALITY SCORE */}
              <div className={styles.detailMetricCard}>
                <span className={styles.metricLabelSmall}>QUALITY SCORE</span>
                <div className={`${styles.metricValueBig} ${styles.greenValue}`}>98.5%</div>
                <div className={styles.metricSubGreen}>
                  <span>↑</span>
                  <span>+2.3% from last week</span>
                </div>
              </div>

              {/* Card 3: ACTIVE PRACTITIONERS */}
              <div className={styles.detailMetricCard}>
                <span className={styles.metricLabelSmall}>ACTIVE PRACTITIONERS</span>
                <div className={styles.metricValueBig}>12</div>
                <span className={styles.metricSubMuted}>8 Radiologists, 4 Reviewers</span>
              </div>

              {/* Card 4: FLAGGED ITEMS */}
              <div className={styles.detailMetricCard}>
                <span className={styles.metricLabelSmall}>FLAGGED ITEMS</span>
                <div className={`${styles.metricValueBig} ${styles.redValue}`}>12</div>
                <span className={styles.metricSubRed}>Requires attention</span>
              </div>
            </div>

            {/* Split Content Grid: Left Timeline/Practitioners vs Right Info/Flags/Actions */}
            <div className={styles.detailSplitContentGrid}>
              {/* Left Sub-Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Review Activity Timeline Card */}
                <div className={styles.timelineCardBox}>
                  <div className={styles.cardSectionHeaderRow}>
                    <h4 className={styles.cardSectionTitle}>Review Activity Timeline</h4>
                    <span className={styles.cardSectionLink}>View All</span>
                  </div>

                  <div className={styles.timelineEventsList}>
                    {/* Event 1 */}
                    <div className={styles.timelineEventItem}>
                      <div className={`${styles.timelineEventIcon} ${styles.blueIcon}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className={styles.timelineEventBody}>
                        <div className={styles.timelineEventTitleRow}>
                          <span className={styles.timelineEventTitle}>Batch Review Completed</span>
                          <span className={styles.timelineEventTime}>2 hours ago</span>
                        </div>
                        <p className={styles.timelineEventDesc}>
                          Dr. Sarah Chen reviewed 45 annotations with 98% approval rate
                        </p>
                        <div className={styles.timelinePillsRow}>
                          <span className={styles.pillApprovedGreen}>Approved: 44</span>
                          <span className={styles.pillRejectedRed}>Rejected: 1</span>
                        </div>
                      </div>
                    </div>

                    {/* Event 2 */}
                    <div className={styles.timelineEventItem}>
                      <div className={`${styles.timelineEventIcon} ${styles.amberIcon}`}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                          <line x1="4" y1="22" x2="4" y2="15"></line>
                        </svg>
                      </div>
                      <div className={styles.timelineEventBody}>
                        <div className={styles.timelineEventTitleRow}>
                          <span className={styles.timelineEventTitle}>Flagged for Re-annotation</span>
                          <span className={styles.timelineEventTime}>5 hours ago</span>
                        </div>
                        <p className={styles.timelineEventDesc}>
                          Dr. Michael Torres flagged 3 images due to unclear nodule boundaries
                        </p>
                        <span className={styles.timelineActionLink}>View flagged items</span>
                      </div>
                    </div>

                    {/* Event 3 */}
                    <div className={styles.timelineEventItem}>
                      <div className={`${styles.timelineEventIcon} ${styles.greenIcon}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                      <div className={styles.timelineEventBody}>
                        <div className={styles.timelineEventTitleRow}>
                          <span className={styles.timelineEventTitle}>New Practitioner Assigned</span>
                          <span className={styles.timelineEventTime}>1 day ago</span>
                        </div>
                        <p className={styles.timelineEventDesc}>
                          Dr. Emily Rodriguez joined the project with 410 images assigned
                        </p>
                      </div>
                    </div>

                    {/* Event 4 */}
                    <div className={styles.timelineEventItem}>
                      <div className={`${styles.timelineEventIcon} ${styles.purpleIcon}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                        </svg>
                      </div>
                      <div className={styles.timelineEventBody}>
                        <div className={styles.timelineEventTitleRow}>
                          <span className={styles.timelineEventTitle}>AI Pre-annotation Completed</span>
                          <span className={styles.timelineEventTime}>3 days ago</span>
                        </div>
                        <p className={styles.timelineEventDesc}>
                          Initial AI annotations generated for all 5,000 images with 92% confidence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practitioner Assigned Card */}
                <div className={styles.practitionerSectionCard}>
                  <div className={styles.cardSectionHeaderRow}>
                    <h4 className={styles.cardSectionTitle}>Practitioner Assigned</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className={styles.cardSectionLink}>View All</span>
                      <button className={styles.addPractitionerSquareBtn} title="Add Practitioner">+</button>
                    </div>
                  </div>

                  {/* Practitioner Row 1 */}
                  <div className={styles.practitionerRowItem}>
                    <div className={styles.practitionerLeftInfo}>
                      <div className={styles.practitionerAvatarCircle}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="16" fill="#1E293B"/>
                          <circle cx="16" cy="12" r="5" fill="#94A3B8"/>
                          <path d="M7 27C7 22.0294 11.0294 18 16 18C20.9706 18 25 22.0294 25 27V28H7V27Z" fill="#CBD5E1"/>
                        </svg>
                      </div>
                      <div className={styles.practitionerNameGroup}>
                        <div className={styles.practitionerNameRow}>
                          <span className={styles.practitionerName}>Dr. Sarah Jenkins</span>
                          <span className={styles.specialtyTagBlue}>Radiology</span>
                        </div>
                        <span className={styles.practitionerEmail}>sarah.j@example.com</span>
                      </div>
                    </div>

                    <div className={styles.practitionerRightControls}>
                      <div className={styles.roleSelectPill}>
                        <span>Attempter</span>
                        <span style={{ fontSize: '0.625rem', color: '#94A3B8' }}>▾</span>
                      </div>
                      <button className={styles.trashIconBtn} title="Remove Practitioner">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Practitioner Row 2 */}
                  <div className={styles.practitionerRowItem}>
                    <div className={styles.practitionerLeftInfo}>
                      <div className={styles.practitionerAvatarCircle}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="16" fill="#334155"/>
                          <circle cx="16" cy="12" r="5" fill="#CBD5E1"/>
                          <path d="M7 27C7 22.0294 11.0294 18 16 18C20.9706 18 25 22.0294 25 27V28H7V27Z" fill="#E2E8F0"/>
                        </svg>
                      </div>
                      <div className={styles.practitionerNameGroup}>
                        <div className={styles.practitionerNameRow}>
                          <span className={styles.practitionerName}>Dr. Sarah Jenkins</span>
                          <span className={styles.specialtyTagBlue}>Radiology</span>
                        </div>
                        <span className={styles.practitionerEmail}>sarah.j@example.com</span>
                      </div>
                    </div>

                    <div className={styles.practitionerRightControls}>
                      <div className={styles.roleSelectPill}>
                        <span>Attempter</span>
                        <span style={{ fontSize: '0.625rem', color: '#94A3B8' }}>▾</span>
                      </div>
                      <button className={styles.trashIconBtn} title="Remove Practitioner">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sub-Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Project Information Card */}
                <div className={styles.projectInfoCardBox}>
                  <span className={styles.metricLabelSmall}>PROJECT INFORMATION</span>
                  <div className={styles.projInfoFields}>
                    <div className={styles.projInfoField}>
                      <span className={styles.fieldLabel}>Due Date</span>
                      <span className={styles.fieldValueBold}>October 24, 2024</span>
                      <span className={styles.fieldSubRed}>3 days remaining</span>
                    </div>
                    <div className={styles.projInfoField}>
                      <span className={styles.fieldLabel}>Total Dataset Size</span>
                      <span className={styles.fieldValueBold}>5,000 Files</span>
                      <span className={styles.fieldSubMuted}>~12.5 GB</span>
                    </div>
                    <div className={styles.projInfoField}>
                      <span className={styles.fieldLabel}>Annotation Type</span>
                      <span className={styles.fieldValueBold}>Bounding Box + Classification</span>
                    </div>
                    <div className={styles.projInfoField}>
                      <span className={styles.fieldLabel}>Priority Level</span>
                      <span className={styles.priorityPillHigh}>🔴 High Priority</span>
                    </div>
                  </div>
                </div>

                {/* Flagged Items Card */}
                <div className={styles.flaggedItemsCardBox}>
                  <div className={styles.cardSectionHeaderRow}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className={styles.metricLabelSmall} style={{ color: '#1E255E' }}>FLAGGED ITEMS</span>
                      <span className={styles.flaggedCountBadge}>12</span>
                    </div>
                  </div>

                  {/* Flagged Item 1 */}
                  <div className={styles.flaggedItemRowCard}>
                    <div className={styles.flaggedItemTopRow}>
                      <span className={styles.flaggedFileName}>IMG_2847.dcm</span>
                      <span className={styles.flaggedIconRed}>🚩</span>
                    </div>
                    <span className={styles.flaggedIssueText}>Unclear nodule boundary - needs expert review</span>
                    <span className={styles.reviewNowBtnLink}>Review Now</span>
                  </div>

                  {/* Flagged Item 2 */}
                  <div className={styles.flaggedItemRowCard}>
                    <div className={styles.flaggedItemTopRow}>
                      <span className={styles.flaggedFileName}>IMG_3012.dcm</span>
                      <span className={styles.flaggedIconRed}>🚩</span>
                    </div>
                    <span className={styles.flaggedIssueText}>Conflicting annotations from 2 practitioners</span>
                    <span className={styles.reviewNowBtnLink}>Review Now</span>
                  </div>

                  <span className={styles.viewAllFlaggedLink}>View All Flagged Items</span>
                </div>

                {/* Quick Actions Card */}
                <div className={styles.quickActionsCardBox}>
                  <span className={styles.metricLabelSmall}>QUICK ACTIONS</span>
                  <button className={styles.quickActionButtonItem}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                    <span>Assign Practitioner</span>
                  </button>

                  <button className={styles.quickActionButtonItem}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>View History</span>
                  </button>

                  <button className={styles.quickActionButtonItem}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    <span>Export Report</span>
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Right Activity Stream Column */}
          <aside className={styles.mockupActivitySidebar}>
            <div className={styles.activityHeaderRow}>
              <h4 className={styles.activityTitle}>Activity</h4>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
            </div>

            {/* Comments / Timeline Toggle */}
            <div className={styles.tabToggleCapsule}>
              <button className={`${styles.tabBtn} ${styles.tabBtnActive}`}>Comments</button>
              <button className={styles.tabBtn}>Timeline</button>
            </div>

            {/* Filter Pills */}
            <div className={styles.filterPillsRow}>
              <span className={`${styles.filterPill} ${styles.filterPillActive}`}>All Activity</span>
              <span className={styles.filterPill}>Mentions</span>
              <span className={styles.filterPill}>System</span>
            </div>

            {/* Feed Items */}
            <div className={styles.activityFeed}>
              {/* System Submission */}
              <div className={styles.feedItem}>
                <div className={styles.feedIconCircle}>⇄</div>
                <div className={styles.feedContent}>
                  <div className={styles.systemBubble}>Client has submitted a project</div>
                  <span className={styles.feedTimestamp}>Today, 9:41 AM</span>
                </div>
              </div>

              {/* Message from Sarah Chen */}
              <div className={styles.feedItem}>
                <div className={styles.feedAvatarCircle} style={{ background: '#FDE047', color: '#854D0E' }}>SC</div>
                <div className={styles.feedContent}>
                  <div className={styles.commentHeader}>
                    <strong>Sarah Chen</strong>
                    <span className={styles.feedTimestampInline}>Today, 10:15 AM</span>
                    <span className={styles.moreOptions}>•••</span>
                  </div>
                  <div className={styles.commentBubbleWhite}>
                    we need instruction and for a doc explaining the data structure.
                  </div>
                  <span className={styles.replyLink}>↩ Reply</span>
                </div>
              </div>

              {/* Message from Client */}
              <div className={styles.feedItem}>
                <div className={styles.feedAvatarCircle} style={{ background: '#1E293B', color: '#FFFFFF' }}>C</div>
                <div className={styles.feedContent}>
                  <div className={styles.commentHeader}>
                    <strong>Client</strong>
                    <span className={styles.feedTimestampInline}>Today, 11:30 AM</span>
                  </div>
                  <div className={styles.commentBubbleWhite}>
                    Sure, I will update it Today
                  </div>
                </div>
              </div>

              {/* Attachment Event */}
              <div className={styles.feedItem}>
                <div className={styles.feedIconCircle}>📎</div>
                <div className={styles.feedContent}>
                  <div className={styles.attachHeader}>Client attached a new file</div>
                  <div className={styles.attachmentPillCard}>
                    <span style={{ color: '#E11D48', fontSize: '14px' }}>📄</span>
                    <strong>Bias_Guidelines_v2.pdf</strong>
                  </div>
                  <span className={styles.feedTimestamp}>Today, 4:20 PM</span>
                </div>
              </div>
            </div>

            {/* Bottom Comment Box */}
            <div className={styles.commentInputBox}>
              <textarea
                className={styles.commentTextarea}
                placeholder="Add a comment... Use @ to mention someone"
                rows={2}
              />
              <div className={styles.commentToolbar}>
                <div className={styles.formatIcons}>
                  <span>B</span>
                  <span>📎</span>
                  <span>🔗</span>
                  <span>@</span>
                </div>
                <button className={styles.postBtn}>Post</button>
              </div>
              <div className={styles.shortcutHint}>Press Cmd + Enter to post</div>
            </div>
          </aside>
        </div>

        {/* Footer Copyright */}
        <div className={styles.detailFooterCopyright}>
          © 2026 Sheltas Health. All rights reserved. Secure Medical Data Annotation.
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 8: Project detail — review activity timeline, flagged items, assigned practitioners and quality metrics.
      </p>
    </div>
  );
}

// ── Figure 9: Practitioner Account Setup Mockup ──
function Figure9PractitionerAccountSetup() {
  return (
    <div className={styles.figureContainer}>
      <div className={styles.authSetupWrapper}>
        {/* Left Side Hero Panel */}
        <div className={styles.authLeftPanel}>
          <div className={styles.authLeftTopContent}>
            <h3 className={styles.authLeftTitle}>
              Secure Healthcare Data<br />Annotation Platform
            </h3>
            <p className={styles.authLeftSub}>
              Accelerating medical AI with verified practitioner annotations. Upload de-identified datasets, manage quality control, and export validated results seamlessly.
            </p>

            <div className={styles.authFeaturesList}>
              {/* Feature 1 */}
              <div className={styles.authFeatureGlassCard}>
                <div className={styles.authFeatureIconCircle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                </div>
                <div className={styles.authFeatureText}>
                  <strong>Verified Practitioners</strong>
                  <span>Board-certified specialists for accurate reviews.</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className={styles.authFeatureGlassCard}>
                <div className={styles.authFeatureIconCircle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    <path d="M12 15v3"></path>
                  </svg>
                </div>
                <div className={styles.authFeatureText}>
                  <strong>HIPAA-Ready Infrastructure</strong>
                  <span>End-to-end encryption for de-identified data.</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.authLeftFooter}>
            © 2026 Sheltas Health • Privacy • Terms
          </div>
        </div>

        {/* Right Side Form Panel */}
        <div className={styles.authRightPanel}>
          <div className={styles.authFormContainer}>
            {/* Header / Brand */}
            <div className={styles.authHeaderSection}>
              <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="sheltasLogoGradTopExact" x1="50" y1="5" x2="25" y2="73" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E56754" />
                    <stop offset="25%" stopColor="#CE6373" />
                    <stop offset="50%" stopColor="#9B679F" />
                    <stop offset="75%" stopColor="#756CA8" />
                    <stop offset="100%" stopColor="#6175B8" />
                  </linearGradient>
                  <linearGradient id="sheltasLogoGradBottomExact" x1="50" y1="27" x2="75" y2="95" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#786BA8" />
                    <stop offset="25%" stopColor="#6179B9" />
                    <stop offset="50%" stopColor="#518EBD" />
                    <stop offset="75%" stopColor="#42AAB4" />
                    <stop offset="100%" stopColor="#45BFA9" />
                  </linearGradient>
                </defs>
                {/* Upper Lobe (Coral -> Mauve -> Violet -> Indigo) */}
                <path
                  d="M 50 10 C 50 7.5 48 5 44 5 A 34 34 0 0 0 50 73 L 50 53 A 14 14 0 0 1 50 25 L 50 10 Z"
                  fill="url(#sheltasLogoGradTopExact)"
                />
                {/* Lower Lobe (Violet -> Indigo -> Steel Blue -> Mint Turquoise) */}
                <path
                  d="M 50 90 C 50 92.5 52 95 56 95 A 34 34 0 0 0 50 27 L 50 47 A 14 14 0 0 1 50 75 L 50 90 Z"
                  fill="url(#sheltasLogoGradBottomExact)"
                />
              </svg>
              <h2 className={styles.authBrandTitle}>SHELTAS HEALTH INC.</h2>
              <span className={styles.authFormSubtitle}>Setup My Account</span>
            </div>

            {/* Form Fields */}
            <div className={styles.authFormGroup}>
              <label className={styles.authInputLabel}>Work Email</label>
              <div className={styles.authInputWrapper}>
                <div className={styles.inputLeftWrap}>
                  <div className={styles.inputIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <input type="email" placeholder="name@company.com" defaultValue="" />
                </div>
              </div>
            </div>

            <div className={styles.authFormGroup}>
              <label className={styles.authInputLabel}>Password</label>
              <div className={styles.authInputWrapper}>
                <div className={styles.inputLeftWrap}>
                  <div className={styles.inputIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <input type="password" placeholder="••••••••" defaultValue="password123" />
                </div>
                <div className={styles.eyeToggleIcon} title="Toggle password visibility">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.authFormGroup}>
              <label className={styles.authInputLabel}>Confirm Password</label>
              <div className={styles.authInputWrapper}>
                <div className={styles.inputLeftWrap}>
                  <div className={styles.inputIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <input type="password" placeholder="••••••••" defaultValue="password123" />
                </div>
                <div className={styles.eyeToggleIcon} title="Toggle password visibility">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <button className={styles.authContinueBtn}>Continue</button>

            {/* Trust & Security Row */}
            <div className={styles.authTrustBadgesRow}>
              <div className={styles.trustBadgeItem}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>End-to-End Encrypted</span>
              </div>
              <div className={styles.trustBadgeItem}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>De-identified Data Only</span>
              </div>
            </div>

            {/* Legal / Terms */}
            <p className={styles.authTermsLegalNote}>
              By continuing you agree to our <a href="#terms">Terms and Conditions</a> and <a href="#privacy">Privacy policies.</a>
            </p>
          </div>
        </div>
      </div>
      <p className={styles.figureCaption}>
        Figure 9: Practitioner account setup — de-identified data handling and encrypted access stated at the point of entry.
      </p>
    </div>
  );
}

// ── Main Case Study Component ──
export default function SheltasCaseStudy({ caseStudy }: SheltasCaseStudyProps) {
  return (
    <article className={styles.sheltasPage}>
      <div className={styles.contentContainer}>
        {/* ════════════════════ HERO SECTION ════════════════════ */}
        <section className={styles.heroSection}>
          <div className={styles.heroCard}>
            <span className={styles.coverEyebrow}>
              PG-AGI · APPLIED AI &amp; PLATFORM ENGINEERING
            </span>
            <h1 className={styles.coverTitle}>Sheltas Health</h1>
            <h2 className={styles.coverSubtitle}>Annotation Marketplace</h2>
            <p className={styles.coverParagraph}>
              A three-sided platform for compliant medical data annotation — connecting AI partners, verified healthcare practitioners, and internal quality operations across a single governed workflow.
            </p>
          </div>

          <div className={styles.coverMetaGrid}>
            <div className={styles.coverMetaCol}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>Sheltas Health Inc.</span>
            </div>
            <div className={styles.coverMetaCol}>
              <span className={styles.metaLabel}>Engagement</span>
              <span className={styles.metaValue}>Platform Build</span>
            </div>
            <div className={styles.coverMetaCol}>
              <span className={styles.metaLabel}>Domain</span>
              <span className={styles.metaValue}>Healthcare AI Data</span>
            </div>
            <div className={styles.coverMetaCol}>
              <span className={styles.metaLabel}>Document</span>
              <span className={styles.metaValue}>Case Study</span>
            </div>
          </div>
        </section>

        {/* ════════════════════ INDEX SECTION ════════════════════ */}
        <section className={styles.articleSection}>
          <div className={styles.indexContainer}>
            <h2 className={styles.indexTitle}>Index</h2>
            <hr className={styles.indexRule} />
            <div className={styles.indexTable}>
              <div className={`${styles.indexRow} ${styles.rowNavy}`}>
                <div className={styles.indexNumBox}>I</div>
                <div className={styles.indexLabel}>What We Built</div>
              </div>
              <div className={`${styles.indexRow} ${styles.rowTeal}`}>
                <div className={styles.indexNumBox}>II</div>
                <div className={styles.indexLabel}>Core Architecture</div>
              </div>
              <div className={`${styles.indexRow} ${styles.rowNavy}`}>
                <div className={styles.indexNumBox}>III</div>
                <div className={styles.indexLabel}>Credit System and Monetisation</div>
              </div>
              <div className={`${styles.indexRow} ${styles.rowTeal}`}>
                <div className={styles.indexNumBox}>IV</div>
                <div className={styles.indexLabel}>User-Facing Features</div>
              </div>
              <div className={`${styles.indexRow} ${styles.rowNavy}`}>
                <div className={styles.indexNumBox}>V</div>
                <div className={styles.indexLabel}>Security and Auditability</div>
              </div>
              <div className={`${styles.indexRow} ${styles.rowTeal}`}>
                <div className={styles.indexNumBox}>VI</div>
                <div className={styles.indexLabel}>What Makes This Different</div>
              </div>
              <div className={`${styles.indexRow} ${styles.rowNavy}`}>
                <div className={styles.indexNumBox}>VII</div>
                <div className={styles.indexLabel}>Outcomes</div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ SECTION I: WHAT WE BUILT ════════════════════ */}
        <section className={styles.articleSection}>
          <SectionHeader numeral="I" eyebrow="SECTION ONE" title="What We Built" />

          <p className={styles.sectionParagraph}>
            Sheltas Health Inc. operates a medical data annotation marketplace. AI companies building clinical models need labelled radiology images, pathology slides, and clinical text — labelled by people who are qualified to read them. Sourcing that expertise, verifying it, governing it, and proving the resulting dataset is defensible is the hard part. That is the problem the platform solves.
          </p>

          <p className={styles.sectionParagraph}>
            PG-AGI built the platform end to end: a three-sided system where AI partners submit datasets, verified healthcare practitioners annotate them under a structured multi-role review workflow, and an internal operations team governs quality, credentials, and delivery from a central console.
          </p>

          <p className={styles.sectionParagraph}>
            The platform is delivered iteratively across eight defined milestones. Milestones one through four are complete and operational, establishing infrastructure, authentication and role management, practitioner onboarding and task assignment, and AI partner project and dataset processing. Milestones five through eight extend the platform into training and certification, community, practitioner discovery and matching, and the full annotation execution, export and payments layer.
          </p>

          <h3 className={styles.subHeading}>The three sides of the platform</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Participant</th>
                  <th style={{ width: '45%' }}>What They Do</th>
                  <th style={{ width: '30%' }}>How They Enter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colTitle}>AI Partner / Client</td>
                  <td>Create annotation projects, upload datasets, configure annotation guidelines, track progress, and collect validated output.</td>
                  <td>Invitation-only, issued by the internal Sheltas team.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Healthcare Practitioner</td>
                  <td>Annotate, review and audit medical data within their specialty, under project-specific instructions.</td>
                  <td>Self-registration, followed by credential verification and admin approval.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Internal Operations</td>
                  <td>Review and configure projects, verify credentials, assign project managers, allocate practitioners, and govern quality.</td>
                  <td>Invitation-based, with four roles: Admin, Supervisor, Internal QA/QC, Project Manager.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>What the platform is for</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Purpose</th>
                  <th style={{ width: '70%' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colTitle}>Put qualified eyes on clinical data</td>
                  <td>Annotation is performed by board-verified practitioners in the relevant specialty, not by general-purpose labelling labour.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Make quality structural, not optional</td>
                  <td>Every task passes through annotator, reviewer and auditor stages before it can be counted as complete.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Keep the dataset defensible</td>
                  <td>Credentials, approvals, task history and verification events are recorded so the provenance of a label can be traced.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Operate at marketplace scale</td>
                  <td>Datasets are automatically segmented into discrete annotation units and distributed across a governed practitioner pool.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Close the loop commercially</td>
                  <td>Client billing and practitioner payouts settle against the same task and completion records that drive the workflow.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ════════════════════ SECTION II: CORE ARCHITECTURE ════════════════════ */}
        <section className={styles.articleSection}>
          <SectionHeader numeral="II" eyebrow="SECTION TWO" title="Core Architecture" />

          <p className={styles.sectionParagraph}>
            The platform is organised as a layered architecture. Access and identity sits at the top, resolving every request to a role before anything else happens. Beneath it, a governance layer decides who is allowed into which project. Work then flows downward: datasets become tasks, tasks become annotations, annotations become a validated dataset, and the validated dataset becomes a delivery and a settlement.
          </p>

          <p className={styles.sectionParagraph}>
            Each layer is independently developed and independently deployable. The platform foundation — FastAPI services, Firestore, Redis, Google Cloud Storage, and a Next.js and React frontend on Docker over Google Cloud Platform — was established first so that every subsequent capability could be added without restructuring what came before.
          </p>

          <Figure1LayeredArchitecture />

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Layer</th>
                  <th style={{ width: '70%' }}>Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colTitle}>Access &amp; Identity</td>
                  <td>Authenticates all three participant classes and routes each user to a role-scoped dashboard. Client and internal accounts are invitation-only; practitioners self-register into a verification queue.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Governance &amp; Onboarding</td>
                  <td>Enforces role-based access control, verifies uploaded practitioner credentials, runs the internal project review pipeline, and gates practitioners into projects on qualification criteria.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Project &amp; Dataset</td>
                  <td>Captures project metadata, ingests image, document and structured datasets into Google Cloud Storage, binds annotation instructions to the project, and segments the dataset into annotation units.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Annotation Execution</td>
                  <td>Allocates generated tasks and prompts to practitioners and moves each unit through the annotator, reviewer and auditor sequence with status tracked at every stage.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Supply Enablement</td>
                  <td>Trains, assesses and certifies the practitioner pool, hosts role-gated community channels, and matches qualified practitioners to open project demand.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Delivery &amp; Settlement</td>
                  <td>Resolves multi-annotator disagreement, compiles and exports validated datasets as CSV or JSON, and settles client invoices and practitioner payouts.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Platform Foundation</td>
                  <td>FastAPI service layer, Firestore as primary store, Redis for session and read caching, Google Cloud Storage for datasets, Next.js and React frontend, containerised on Google Cloud Platform.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.calloutBox}>
            <span className={styles.calloutEyebrow}>Design Principle</span>
            <p className={styles.calloutText}>
              No participant sees the platform in the same shape. The AI partner sees projects and datasets. The practitioner sees only the tasks assigned to them. The internal team sees everything, governed by role. The same underlying record is presented through three different access contours rather than three different systems.
            </p>
          </div>
        </section>

        {/* ════════════════════ SECTION III: CREDIT SYSTEM AND MONETISATION ════════════════════ */}
        <section className={styles.articleSection}>
          <SectionHeader numeral="III" eyebrow="SECTION THREE" title="Credit System and Monetisation" />

          <p className={styles.sectionParagraph}>
            The commercial layer settles against the same task records that drive the annotation workflow. A task that has been annotated, reviewed and audited is simultaneously a billable unit for the AI partner and a payable unit for the practitioners who worked it. There is no separate accounting system to reconcile against.
          </p>

          <p className={styles.sectionParagraph}>
            Stripe provides the transaction layer for client-side payment, with PCI-compliant handling and stored payment method management for AI partners. On the supply side, practitioner payouts are triggered by task completion and processed on a scheduled cycle against configurable thresholds.
          </p>

          <h3 className={styles.subHeading}>Monetisation levers</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Lever</th>
                  <th style={{ width: '52%' }}>Description</th>
                  <th style={{ width: '20%' }}>Applies To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colTitle}>Project engagement billing</td>
                  <td>Annotation projects are invoiced against the volume of validated annotation units delivered.</td>
                  <td>AI Partner</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Usage-based billing</td>
                  <td>Consumption billing scaled to dataset size, task count and annotation complexity.</td>
                  <td>AI Partner</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Subscription tiers</td>
                  <td>Recurring plans bundling project allowances, seat counts and feature access by organisation size.</td>
                  <td>AI Partner</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Seat and collaborator pricing</td>
                  <td>Pricing scaled to the number of client-side team members invited into project workspaces.</td>
                  <td>AI Partner</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Completion-based payouts</td>
                  <td>Practitioners earn against tasks completed and passed through the review chain.</td>
                  <td>Practitioner</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Role-differentiated rates</td>
                  <td>Annotator, reviewer and auditor contributions are settled as distinct units of work.</td>
                  <td>Practitioner</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Financial operations</h3>

          <ul className={styles.bulletList}>
            <li>Invoice generation against annotation project engagements, with a billing dashboard exposed to clients and AI partners.</li>
            <li>Payout scheduling, processing logic and configurable minimum payout thresholds on the practitioner side.</li>
            <li>Payout history and status tracking visible to each practitioner within their own profile.</li>
            <li>Transaction records and payment history retained for both sides of the marketplace.</li>
            <li>Admin financial dashboard for revenue monitoring, transaction management, dispute handling and platform-level oversight.</li>
          </ul>

          <div className={styles.calloutBox}>
            <span className={styles.calloutEyebrow}>Why This Model Fits</span>
            <p className={styles.calloutText}>
              A marketplace only works if both sides settle off the same truth. Because billing and payouts both resolve against validated task records, an annotation cannot be billed to a client without also being payable to the practitioner who produced it — and neither can happen until the review chain has signed it off.
            </p>
          </div>
        </section>

        {/* ════════════════════ SECTION IV: USER-FACING FEATURES ════════════════════ */}
        <section className={styles.articleSection}>
          <SectionHeader numeral="IV" eyebrow="SECTION FOUR" title="User-Facing Features" />

          <p className={styles.sectionParagraph}>
            The platform presents three distinct product surfaces. Each is built on the same records, but each exposes a different slice of the workflow with a different set of controls.
          </p>

          <Figure2LifecycleFlowchart />

          <h3 className={styles.subHeading}>For AI Partners and Clients</h3>

          <p className={styles.sectionParagraph}>
            The client surface is the front door of the marketplace. It is where a dataset enters the system and where a validated dataset leaves it.
          </p>

          <ul className={styles.bulletList}>
            <li>Project creation capturing name, category, modality, dataset information, annotation instructions and AI model preference.</li>
            <li>Dataset upload for image, document and structured formats, written into Google Cloud Storage with upload status tracking and full traceability.</li>
            <li>Annotation instruction configuration, with project-level guidelines and task-specific requirements automatically bound to generated tasks.</li>
            <li>Project detail view showing due dates, dataset size, annotation type, assigned project manager and priority level.</li>
            <li>Provided assets panel holding the source files and guideline documents attached to each project.</li>
            <li>Activity stream with threaded comments, mentions and system events, giving the client a direct channel to the operations team on the project record itself.</li>
            <li>Team member invitation and collaborator assignment, so an enterprise client can run multiple project teams with controlled permissions.</li>
            <li>Export of validated annotation output and project reports.</li>
          </ul>

          <Figure3PartnerProjectView />

          <h3 className={styles.subHeading}>For Healthcare Practitioners</h3>

          <p className={styles.sectionParagraph}>
            The practitioner surface is deliberately narrow. A practitioner sees their own workspace, their own assignments, and the channels their credentials admit them to — nothing else.
          </p>

          <ul className={styles.bulletList}>
            <li>Self-registration and onboarding capturing professional information, specialisations, expertise and qualifications.</li>
            <li>Secure credential upload for licences and certifications, with onboarding status tracked through the verification process.</li>
            <li>Personal workspace listing assigned projects with role badge, specialty tag, member count, activity recency and status.</li>
            <li>Role-specific task execution as Annotator, Reviewer or Auditor, with the assigned role shown per project.</li>
            <li>Training portal with course listings, enrolment, content presentation and personal progress tracking.</li>
            <li>Timed, attempt-restricted assessments leading to digital certificates and skill badges bound to the practitioner profile.</li>
            <li>Community workspace with general, training and project-specific channels, real-time messaging, threaded discussion, file sharing and media, docs, links and members tabs per channel.</li>
            <li>Project discovery with qualification requirements displayed and application workflows for open opportunities.</li>
          </ul>

          <Figure4PractitionerWorkspace />
          <Figure5CommunityChannel />

          <h3 className={styles.subHeading}>For Internal Operations</h3>

          <p className={styles.sectionParagraph}>
            The admin console is the control plane. It carries the governance decisions that the other two surfaces depend on.
          </p>

          <ul className={styles.bulletList}>
            <li>Dashboard overview surfacing total projects, overdue tickets, audit pass rate and delivery-ready volume, with week-over-week movement.</li>
            <li>Project status matrix showing project identifier, client, progress and stage for every live engagement.</li>
            <li>Priority queues separating items flagged for review, revisions requested from practitioners, and unassigned backlog ready for batching.</li>
            <li>Intake queue for newly submitted client projects awaiting internal review.</li>
            <li>Project list view with modality and specialty, task distribution across reviewers, status and progress, quality score, flag count and due date.</li>
            <li>Project detail view with overall progress, quality score, active practitioner count and flagged item count, alongside a review activity timeline.</li>
            <li>Flagged item resolution for unclear annotations and conflicting submissions from multiple practitioners.</li>
            <li>Practitioner onboarding review, credential validation, and approve or reject decisions on applications.</li>
            <li>Practitioner assignment to projects with role selection, plus invitation and qualification assessment workflows.</li>
            <li>Quick actions for dataset upload, delivery approval, task assignment and data export; recent exports tracked with size and timestamp.</li>
            <li>Client and internal team invitation management from a single administrative surface.</li>
          </ul>

          <Figure6OperationsDashboard />
          <Figure7ProjectRegister />
          <Figure8ProjectDetail />
        </section>

        {/* ════════════════════ SECTION V: SECURITY AND AUDITABILITY ════════════════════ */}
        <section className={styles.articleSection}>
          <SectionHeader numeral="V" eyebrow="SECTION FIVE" title="Security and Auditability" />

          <p className={styles.sectionParagraph}>
            Medical annotation data carries obligations that ordinary labelling work does not. The platform is built for de-identified datasets and encrypted transport, but the more important design decision is that access is always derived — never assumed. A practitioner does not have access to a project because they are a practitioner; they have access because a named administrator approved their credentials and a named project manager allocated them to that specific project.
          </p>

          <Figure9PractitionerAccountSetup />

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Control</th>
                  <th style={{ width: '70%' }}>Design Intent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colTitle}>De-identified data only</td>
                  <td>The platform is designed to receive de-identified datasets, keeping patient identity out of the annotation surface entirely.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Encryption in transit and at rest</td>
                  <td>End-to-end encryption applied to dataset transfer and storage across Google Cloud Storage and platform services.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Role-based access control</td>
                  <td>Every account resolves to a role that determines dashboard routing, data visibility and permitted actions across all three participant classes.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Credential verification gate</td>
                  <td>Practitioners cannot access live project data until qualifications and licences have been uploaded, reviewed and explicitly approved by an administrator.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Project-scoped visibility</td>
                  <td>Practitioners see only the projects and tasks allocated to them; client collaborators see only the projects they have been assigned to.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Invitation-only client and internal access</td>
                  <td>Neither clients nor internal staff can self-register. Both enter through an administered invitation, keeping the account population controlled.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Multi-stage review chain</td>
                  <td>Annotator, reviewer and auditor stages create separation of duties, so no single participant can move work to completion unchecked.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Disagreement detection</td>
                  <td>Conflicting annotations across practitioners are surfaced automatically and routed to an administrative resolution interface rather than silently averaged.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Flagging and escalation</td>
                  <td>Practitioners and reviewers can flag items for expert attention, with flagged volume tracked at project and platform level.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Activity and audit logging</td>
                  <td>Submissions, reviews, approvals, file attachments, role changes and comments are recorded with attribution and timestamp on the project record.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Controlled file sharing</td>
                  <td>Community and project file sharing operates under upload restrictions, security validation and moderation controls with administrative review workflows.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Document handling traceability</td>
                  <td>Practitioner credential documents are stored under controlled access permissions with verification history retained.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ════════════════════ SECTION VI: WHAT MAKES THIS DIFFERENT ════════════════════ */}
        <section className={styles.articleSection}>
          <SectionHeader numeral="VI" eyebrow="SECTION SIX" title="What Makes This Different" />

          <p className={styles.sectionParagraph}>
            Most annotation platforms treat the labeller as interchangeable. In clinical data, they are not. The design consequences of taking that seriously run through every layer of this platform.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Differentiator</th>
                  <th style={{ width: '70%' }}>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colTitle}>Credentialed supply, not crowd supply</td>
                  <td>The annotation pool is board-verified healthcare practitioners whose licences have been reviewed and approved before they see clinical data. Specialty is a routing attribute, not a preference.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Quality is a workflow stage, not a sampling step</td>
                  <td>Annotator, reviewer and auditor are distinct execution roles built into the task lifecycle. Validation is not a post-hoc audit over a sample — it is a condition of completion.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Three-sided by construction</td>
                  <td>Client, practitioner and operations surfaces were designed together against a shared record model, rather than a labelling tool with an admin panel bolted on.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Training and certification inside the marketplace</td>
                  <td>The platform does not only match existing supply — it develops it, through courses, timed assessments, certificates and badges that then become matching criteria.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Certification-aware matching</td>
                  <td>Practitioner discovery and project recommendations score against certifications, completed courses, project history and performance ratings rather than availability alone.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Dataset-to-task automation</td>
                  <td>Uploaded datasets are automatically segmented into annotation units with instructions bound at generation time, so project setup scales without manual task authoring.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Governance before access, everywhere</td>
                  <td>Invitation-only client and internal accounts, credential-gated practitioners, and per-project qualification checks mean access is always the result of an explicit decision.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Settlement tied to validated work</td>
                  <td>Billing and payouts resolve against the same validated task records, aligning commercial outcomes with quality outcomes on both sides of the marketplace.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Community as operational infrastructure</td>
                  <td>Role-gated channels tie practitioner collaboration to onboarding status, certifications and project participation, keeping discussion inside the governance boundary.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ════════════════════ SECTION VII: OUTCOMES ════════════════════ */}
        <section className={styles.articleSection}>
          <SectionHeader numeral="VII" eyebrow="SECTION SEVEN" title="Outcomes" />

          <p className={styles.sectionParagraph}>
            The platform changes what an AI partner has to do in order to obtain clinically credible training data, and what a healthcare practitioner has to do in order to monetise their expertise. Both sides move from a bespoke, relationship-driven arrangement to a governed, repeatable operation.
          </p>

          <h3 className={styles.subHeading}>Delivered capability</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Outcome</th>
                  <th style={{ width: '70%' }}>What Changed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colTitle}>Sourcing collapses into a workflow</td>
                  <td>Finding, verifying and contracting qualified clinical annotators becomes a platform function rather than a per-project procurement exercise.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Provenance becomes traceable</td>
                  <td>Who annotated a unit, who reviewed it, who audited it, and on what credentials — recorded rather than reconstructed.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Setup effort scales sublinearly</td>
                  <td>Dataset upload and automatic task generation mean project size increases without a proportional increase in configuration work.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Quality becomes observable in real time</td>
                  <td>Quality score, flag counts, audit pass rate and progress are visible at project and platform level while work is in flight, not after delivery.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Supply compounds</td>
                  <td>Training, assessment and certification convert the practitioner pool into an appreciating asset, with credentials feeding directly back into matching.</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Commercial and operational truth converge</td>
                  <td>Invoicing and payouts run off validated task records, removing reconciliation between what was delivered and what was paid.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subHeading}>Performance framework</h3>

          <p className={styles.sectionParagraph}>
            The platform instruments the following measures at project and platform level. Values populate from live operations.
          </p>

          {/* Metric Cards Top 4 */}
          <div className={styles.metricsGrid4}>
            <div className={`${styles.perfMetricCard} ${styles.perfCardNavy}`}>
              <div className={styles.perfDashNavy}></div>
              <div className={styles.perfMetricLabel}>AUDIT PASS RATE</div>
            </div>
            <div className={`${styles.perfMetricCard} ${styles.perfCardTeal}`}>
              <div className={styles.perfDashTeal}></div>
              <div className={styles.perfMetricLabel}>AVG. QUALITY SCORE</div>
            </div>
            <div className={`${styles.perfMetricCard} ${styles.perfCardNavy}`}>
              <div className={styles.perfDashNavy}></div>
              <div className={styles.perfMetricLabel}>FLAGGED ITEM RATE</div>
            </div>
            <div className={`${styles.perfMetricCard} ${styles.perfCardTeal}`}>
              <div className={styles.perfDashTeal}></div>
              <div className={styles.perfMetricLabel}>DELIVERY-READY VOLUME</div>
            </div>
          </div>

          {/* Metric Cards Bottom 4 */}
          <div className={styles.metricsGrid4}>
            <div className={`${styles.perfMetricCard} ${styles.perfCardNavy}`}>
              <div className={styles.perfDashNavy}></div>
              <div className={styles.perfMetricLabel}>VERIFIED PRACTITIONERS</div>
            </div>
            <div className={`${styles.perfMetricCard} ${styles.perfCardTeal}`}>
              <div className={styles.perfDashTeal}></div>
              <div className={styles.perfMetricLabel}>TIME TO FIRST ASSIGNMENT</div>
            </div>
            <div className={`${styles.perfMetricCard} ${styles.perfCardNavy}`}>
              <div className={styles.perfDashNavy}></div>
              <div className={styles.perfMetricLabel}>TASKS COMPLETED</div>
            </div>
            <div className={`${styles.perfMetricCard} ${styles.perfCardTeal}`}>
              <div className={styles.perfDashTeal}></div>
              <div className={styles.perfMetricLabel}>ON-TIME DELIVERY RATE</div>
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Metric</th>
                  <th style={{ width: '52%' }}>Definition</th>
                  <th style={{ width: '20%' }}>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colTitle}>Audit pass rate</td>
                  <td>Share of annotation units clearing the auditor stage without rework.</td>
                  <td>Internal QA/QC</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Average quality score</td>
                  <td>Composite project quality score derived from review and audit outcomes.</td>
                  <td>Project Manager</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Flagged item rate</td>
                  <td>Proportion of units flagged for expert attention or conflicting between practitioners.</td>
                  <td>Internal QA/QC</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Delivery-ready volume</td>
                  <td>Validated units awaiting client approval and export.</td>
                  <td>Project Manager</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Verified practitioners</td>
                  <td>Practitioners with approved credentials and active project eligibility.</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Time to first assignment</td>
                  <td>Elapsed time from practitioner registration to first allocated task.</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Tasks completed</td>
                  <td>Units passing the full annotator, reviewer and auditor sequence.</td>
                  <td>Project Manager</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>On-time delivery rate</td>
                  <td>Share of projects delivered on or before the agreed due date.</td>
                  <td>Supervisor</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Overdue ticket count</td>
                  <td>Open items past their scheduled resolution date.</td>
                  <td>Supervisor</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Revision request volume</td>
                  <td>Units returned to practitioners for correction after review.</td>
                  <td>Internal QA/QC</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Certification completion</td>
                  <td>Practitioners completing training courses and passing assessments.</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td className={styles.colTitle}>Payout cycle time</td>
                  <td>Elapsed time from task completion to practitioner settlement.</td>
                  <td>Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </article>
  );
}
