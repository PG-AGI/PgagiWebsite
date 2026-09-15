'use client';

import React from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  Search,
  Bell,
  Heart,
  Activity,
  Thermometer,
  Wind,
  Scale,
  Droplet,
  Plus,
  Edit3,
  History,
  Lock,
  UploadCloud,
  Calendar,
  Share2,
  Printer,
  Eye,
  CheckCircle2,
  Download,
  Building2,
  Users,
  ShieldCheck,
  Stethoscope,
  Clock,
  Play,
  Pause,
  Sparkles,
  FileText,
  UserCheck,
  TrendingUp,
  FileCheck,
  MapPin,
  GraduationCap,
  CreditCard,
  LayoutGrid,
  Mail,
  User,
} from 'lucide-react';
import styles from '@/styles/components/organisms/InnvorCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface InnvorCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

// ── Running Header ──
function RunningHeader({ pageNumber }: { pageNumber: string }) {
  return (
    <div className={styles.runningHeader}>
      <span className={styles.brandLogo}>innvor.ai</span>
      <span className={styles.headerMeta}>PG-AGI / CASE STUDY</span>
    </div>
  );
}

// ── Running Footer ──
function RunningFooter({ pageNumber }: { pageNumber: string }) {
  return (
    <div className={styles.runningFooter}>
      <span>INNVOR AI / {pageNumber}</span>
    </div>
  );
}

// ── Page 1 & 9: Full Patient Record Mockup (Exact Deep Scan Match) ──
function PatientRecordMockup() {
  return (
    <div className={styles.mockupFrame}>
      <div className={styles.mockupBodyLayout}>
        {/* Left Sidebar */}
        <aside className={styles.mockupSidebar}>
          <div className={styles.sidebarBrand}>innvor.ai</div>

          <div className={styles.sidebarNavItem}>
            <LayoutGrid size={17} />
            <span>Dashboard</span>
          </div>
          <div className={styles.sidebarNavItem}>
            <Building2 size={17} />
            <span>Clinics Management</span>
          </div>
          <div className={styles.sidebarNavItem}>
            <Stethoscope size={17} />
            <span>Manage Doctors</span>
          </div>
          {/* Active Manage Patient Pill */}
          <div className={`${styles.sidebarNavItem} ${styles.activeNav}`}>
            <Users size={17} />
            <span>Manage Patient</span>
          </div>
          <div className={styles.sidebarNavItem}>
            <CreditCard size={17} />
            <span>Billing &amp; Plans/subscription</span>
          </div>
          <div className={styles.sidebarNavItem}>
            <GraduationCap size={17} />
            <span>Training and Tooltips</span>
          </div>
        </aside>

        {/* Right Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 0 }}>
          {/* Top Bar Header */}
          <div className={styles.mockupTopBar}>
            <div className={styles.topBarLeft}>
              <div className={styles.clinicDropdown}>
                <MapPin size={13} color="#4A5568" />
                <span>Clinic: All</span>
                <ChevronDown size={13} color="#718096" />
              </div>
              <div className={styles.searchBar}>
                <Search size={13} color="#A0AEC0" />
                <span>Search patient or doctor by name, id etc</span>
              </div>
            </div>
            <div className={styles.topBarRight}>
              <div className={styles.notifBellWrapper}>
                <Bell size={17} color="#4A5568" />
                <span className={styles.notifBadge}>1</span>
              </div>
              <div className={styles.avatarPill}>NH</div>
              <ChevronDown size={13} color="#718096" />
            </div>
          </div>

          {/* Main Work Area */}
          <main className={styles.mockupMainContent}>
            {/* Record Header Row */}
            <div className={styles.recordHeaderArea}>
              <div>
                <span className={styles.backLink}>← Back</span>
                <h3 className={styles.recordTitle}>Patient Record</h3>
                <span className={styles.recordSubtitle}>Patient Name Here | PID:1231231231</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className={styles.btnSmall}><Download size={13} /> Export</button>
                <button className={`${styles.btnSmall} ${styles.btnSmallTeal}`}>Book A Session</button>
              </div>
            </div>

            {/* 3-Column Patient Record Grid */}
            <div className={styles.patientRecordGrid}>
              {/* Column 1: Patient Details & Prescriptions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Patient Identity Card */}
                <div className={styles.cardWhite}>
                  <div className={styles.patientProfileHeader}>
                    <div>
                      <h4 className={styles.patientName}>Adunni Olatunji</h4>
                      <span className={styles.patientId}>Patient ID: PT-2024-0047</span>
                    </div>
                    <span className={styles.consentBadge}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#137333', display: 'inline-block' }} />
                      Consent Given
                    </span>
                  </div>

                  <div className={styles.patientMetaGrid}>
                    <div className={styles.metaRow}>
                      <span className={styles.metaLabel}>Age</span>
                      <span className={styles.metaVal}>34 years</span>
                    </div>
                    <div className={styles.metaRow}>
                      <span className={styles.metaLabel}>Gender</span>
                      <span className={styles.metaVal}>Female</span>
                    </div>
                    <div className={styles.metaRow}>
                      <span className={styles.metaLabel}>Blood Type</span>
                      <span className={styles.metaVal}>O+</span>
                    </div>
                    <div className={styles.metaRow}>
                      <span className={styles.metaLabel}>Marital Status</span>
                      <span className={styles.metaVal}>Married</span>
                    </div>
                  </div>

                  <div className={styles.fullAddressRow}>
                    <span className={styles.addressLabel}>Phone</span>
                    <strong>+234 801 234 5678</strong>

                    <span className={styles.addressLabel}>Address</span>
                    <strong>15 Adeniran Ogunsanya Street, Surulere, Lagos</strong>

                    <span className={styles.addressLabel}>Emergency Contact</span>
                    <strong>Kunle Olatunji (Husband)</strong>
                    <div style={{ color: '#4A5568', fontSize: '0.74rem' }}>+234 803 567 8901</div>
                  </div>

                  <div className={styles.btnRowFlex}>
                    <button className={`${styles.btnSmall} ${styles.btnSmallTeal}`} style={{ flex: 1, justifyContent: 'center' }}>
                      <Edit3 size={12} /> Edit Info
                    </button>
                    <button className={styles.btnSmall} style={{ flex: 1, justifyContent: 'center', background: '#F8FAFC' }}>
                      <History size={12} /> View History
                    </button>
                  </div>
                </div>

                {/* Current Prescriptions */}
                <div className={styles.cardWhite}>
                  <div className={styles.cardHeaderTitle}>
                    <span>Current Prescriptions</span>
                    <Lock size={13} color="#A0AEC0" />
                  </div>
                  <div className={styles.prescriptionList}>
                    <div className={styles.prescriptionCard}>
                      <div className={styles.rxHeader}>
                        <span>Amlodipine 5mg</span>
                        <span className={styles.rxSupply}>30 days supply</span>
                      </div>
                      <span className={styles.rxInstruction}>Take one tablet daily with food</span>
                    </div>
                    <div className={styles.prescriptionCard}>
                      <div className={styles.rxHeader}>
                        <span>Metformin 500mg</span>
                        <span className={styles.rxSupply}>30 days supply</span>
                      </div>
                      <span className={styles.rxInstruction}>Take twice daily with meals</span>
                    </div>
                    <div className={styles.prescriptionCard}>
                      <div className={styles.rxHeader}>
                        <span>Metformin 500mg</span>
                        <span className={styles.rxSupply}>30 days supply</span>
                      </div>
                      <span className={styles.rxInstruction}>Take twice daily with meals</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Current Vitals & Quick Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Current Vitals */}
                <div className={styles.cardWhite}>
                  <div className={styles.cardHeaderTitle}>
                    <span>Current Vitals</span>
                    <span style={{ fontSize: '0.68rem', color: '#A0AEC0', fontWeight: 500 }}>Last updated: 2 months ago</span>
                  </div>
                  <div className={styles.vitalsSubGrid}>
                    <div className={styles.vitalItemBox}>
                      <Heart size={14} color="#2E7D32" style={{ margin: '0 auto 4px' }} />
                      <div className={styles.vitalLabel}>Blood Pressure</div>
                      <div className={styles.vitalValue}>120/80</div>
                      <div className={styles.vitalStatus}>Normal</div>
                    </div>
                    <div className={styles.vitalItemBox}>
                      <Activity size={14} color="#1976D2" style={{ margin: '0 auto 4px' }} />
                      <div className={styles.vitalLabel}>Heart Rate</div>
                      <div className={styles.vitalValue}>72 bpm</div>
                      <div className={styles.vitalStatus}>Normal</div>
                    </div>
                    <div className={styles.vitalItemBox}>
                      <Thermometer size={14} color="#F57C00" style={{ margin: '0 auto 4px' }} />
                      <div className={styles.vitalLabel}>Temperature</div>
                      <div className={styles.vitalValue}>98.6°F</div>
                      <div className={styles.vitalStatus}>Normal</div>
                    </div>
                    <div className={styles.vitalItemBox}>
                      <Wind size={14} color="#7B1FA2" style={{ margin: '0 auto 4px' }} />
                      <div className={styles.vitalLabel}>O2 Sat</div>
                      <div className={styles.vitalValue}>99%</div>
                      <div className={styles.vitalStatus}>Normal</div>
                    </div>
                    <div className={styles.vitalItemBox}>
                      <Scale size={14} color="#00796B" style={{ margin: '0 auto 4px' }} />
                      <div className={styles.vitalLabel}>Blood Pressure</div>
                      <div className={styles.vitalValue}>130 lbs</div>
                      <div className={`${styles.vitalStatus} ${styles.statusWarn}`}>Overweight</div>
                    </div>
                    <div className={styles.vitalItemBox}>
                      <Droplet size={14} color="#C62828" style={{ margin: '0 auto 4px' }} />
                      <div className={styles.vitalLabel}>Blood Sugar</div>
                      <div className={styles.vitalValue}>180</div>
                      <div className={`${styles.vitalStatus} ${styles.statusAlert}`}>High</div>
                    </div>
                  </div>
                  <button className={`${styles.btnSmall} ${styles.btnSmallTeal}`} style={{ width: '100%', justifyContent: 'center' }}>
                    <Plus size={13} /> Record New Vitals
                  </button>
                </div>

                {/* Quick Actions */}
                <div className={styles.cardWhite}>
                  <div className={styles.cardHeaderTitle}>Quick Actions</div>
                  <div className={styles.quickActionGrid}>
                    <div className={styles.quickActionBtn}>
                      <UploadCloud size={18} color="#2A7C6F" />
                      <span>Upload Docs</span>
                    </div>
                    <div className={styles.quickActionBtn}>
                      <Calendar size={18} color="#2A7C6F" />
                      <span>Schedule</span>
                    </div>
                    <div className={styles.quickActionBtn}>
                      <Share2 size={18} color="#2A7C6F" />
                      <span>Share</span>
                    </div>
                    <div className={styles.quickActionBtn}>
                      <Printer size={18} color="#2A7C6F" />
                      <span>Print</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Medical History & Recent Sessions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Medical History */}
                <div className={styles.cardWhite}>
                  <div className={styles.cardHeaderTitle}>
                    <span>Medical History</span>
                    <span className={styles.headerActionLink}>+ Add Entry</span>
                  </div>
                  <div className={styles.historyTimelineList}>
                    <div className={`${styles.historyItem} ${styles.stripRed}`}>
                      <div className={styles.historyTitleRow}>
                        <span>Hypertension</span>
                        <span className={styles.historyDate}>01/10/2025</span>
                      </div>
                      <div className={styles.historyNotes}>Diagnosed with essential hypertension. Currently on medication.</div>
                      <div className={styles.doctorSignature}>Dr. James Okafor</div>
                    </div>
                    <div className={`${styles.historyItem} ${styles.stripOrange}`}>
                      <div className={styles.historyTitleRow}>
                        <span>Type 2 Diabetes</span>
                        <span className={styles.historyDate}>02/02/2025</span>
                      </div>
                      <div className={styles.historyNotes}>Pre-diabetic condition progressed to Type 2. Managing with diet and metformin.</div>
                      <div className={styles.doctorSignature}>Dr. Aisha Mohammed</div>
                    </div>
                    <div className={`${styles.historyItem} ${styles.stripBlue}`}>
                      <div className={styles.historyTitleRow}>
                        <span>Cesarean Section</span>
                        <span className={styles.historyDate}>01/01/2025</span>
                      </div>
                      <div className={styles.historyNotes}>Emergency C-section delivery. No complications.</div>
                      <div className={styles.doctorSignature}>Dr. Folake Adebayo</div>
                    </div>
                    <div className={`${styles.historyItem} ${styles.stripGreen}`}>
                      <div className={styles.historyTitleRow}>
                        <span>Routine Vaccination</span>
                        <span className={styles.historyDate}>02/10/2023</span>
                      </div>
                      <div className={styles.historyNotes}>COVID-19 booster shot administered.</div>
                      <div className={styles.doctorSignature}>Clinic Nurse</div>
                    </div>
                  </div>
                </div>

                {/* Recent Sessions */}
                <div className={styles.cardWhite}>
                  <div className={styles.cardHeaderTitle}>
                    <span>Recent Sessions</span>
                    <span style={{ fontSize: '0.7rem', color: '#718096' }}><strong>Upcoming</strong> &nbsp;|&nbsp; Past</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div className={styles.recentSessionItem}>
                      <div className={styles.sessionLeft}>
                        <div className={`${styles.sessionIconCircle} ${styles.circleTeal}`}>
                          <Stethoscope size={13} />
                        </div>
                        <div>
                          <div className={styles.sessionTitle}>Routine Check-up</div>
                          <div className={styles.sessionMeta}>Today, 10:30 AM • Dr. James Okafor</div>
                        </div>
                      </div>
                      <Eye size={14} color="#2A7C6F" />
                    </div>

                    <div className={styles.recentSessionItem}>
                      <div className={styles.sessionLeft}>
                        <div className={`${styles.sessionIconCircle} ${styles.circleBlue}`}>
                          <FileCheck size={13} />
                        </div>
                        <div>
                          <div className={styles.sessionTitle}>Medication Review</div>
                          <div className={styles.sessionMeta}>Dec 15, 2025 • Dr. Aisha Mohammed</div>
                        </div>
                      </div>
                      <Eye size={14} color="#2A7C6F" />
                    </div>

                    <div className={styles.recentSessionItem}>
                      <div className={styles.sessionLeft}>
                        <div className={`${styles.sessionIconCircle} ${styles.circlePurple}`}>
                          <Clock size={13} />
                        </div>
                        <div>
                          <div className={styles.sessionTitle}>Follow up</div>
                          <div className={styles.sessionMeta}>Dec 10, 2025 • Dr. James Okafor</div>
                        </div>
                      </div>
                      <Eye size={14} color="#2A7C6F" />
                    </div>

                    <div style={{ textAlign: 'center', fontSize: '0.74rem', fontWeight: 700, color: '#2A7C6F', marginTop: '6px', cursor: 'default' }}>
                      View All Sessions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function InnvorCaseStudy({ caseStudy }: InnvorCaseStudyProps) {
  return (
    <div className={styles.innvorPage}>
      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 1: Cover Header & Platform Essence
      ══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroCoverSection}>
        <div className={styles.rail}>
          <RunningHeader pageNumber="1" />

          <div className={styles.coverHeaderTag}>
            PG-AGI / APPLIED AI AND PLATFORM ENGINEERING
          </div>

          <h1 className={styles.coverTitle}>Innvor AI</h1>
          <h2 className={styles.coverSubtitle}>Clinical engagement and documentation platform</h2>

          <p className={styles.coverLeadDesc}>
            An enterprise case study of connected clinical workflows, AI assisted documentation, and physician controlled review.
          </p>

          {/* Hero UI Mockup */}
          <PatientRecordMockup />
          <div className={styles.mockupCaption}>
            Connected patient context across clinical and administrative workflows
          </div>

          {/* Dark Highlight Banner */}
          <div className={styles.darkHighlightBanner}>
            From consultation capture to a reviewed clinical record
          </div>

          <div className={styles.coverTaglineFooter}>
            PRODUCT CASE STUDY • HEALTHCARE • SEPTEMBER 2026
          </div>

          <RunningFooter pageNumber="1" />
        </div>
      </section>

      <div className={styles.rail}>
        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 2: Contents
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="2" />

          <h2 className={styles.sectionTitle}>Contents</h2>
          <p className={styles.sectionSubtitle}>
            A connected system for physicians, care teams, and healthcare organizations
          </p>

          {/* Table of Contents */}
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '85%' }}>SECTION</th>
                  <th style={{ width: '15%' }}>PAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>01 What We Built</td>
                  <td className={styles.colPage}>3</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>02 Core Architecture</td>
                  <td className={styles.colPage}>4</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>03 Credit System and Monetisation</td>
                  <td className={styles.colPage}>5</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>04 User Facing Features</td>
                  <td className={styles.colPage}>6</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>05 Security and Auditability</td>
                  <td className={styles.colPage}>10</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>06 What Makes This Different</td>
                  <td className={styles.colPage}>11</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>07 Outcomes</td>
                  <td className={styles.colPage}>12</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.tealSubhead}>The clinical workflow</h3>
          <p className={styles.sectionParagraph}>
            A consultation creates information that must remain useful after the appointment. Innvor.ai brings patient context, conversation capture, report preparation, and review into a shared workflow, with the physician responsible for the final clinical record.
          </p>

          <h3 className={styles.tealSubhead}>Inside the product</h3>
          <p className={styles.sectionParagraph}>
            The following pages show the physician experience alongside the administration workspace. Patient consent, recording controls, review queues, clinic records, and billing are presented in context so the operating model is visible as well as described.
          </p>

          <div className={styles.darkHighlightBanner}>
            Clinical work and organizational oversight share the same patient and encounter context.
          </div>

          <RunningFooter pageNumber="2" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 3: 01 What We Built
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="3" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>What We Built</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            One platform connecting the consultation with the work around it
          </p>

          <p className={styles.sectionParagraph}>
            PG-AGI built Innvor.ai to connect patient intake, care assignment, consultation capture, and clinical documentation. Physicians can start from their daily appointments and carry the selected patient into the recording and review workflow.
          </p>

          {/* HQ Screenshot Pair: Physician Dashboard + Account Creation */}
          <div className={styles.twoImageShowcase}>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/innvor-images-hq/p03-physician-dashboard.png"
                alt="Innvor.ai – Physician dashboard with today's overview and upcoming appointments"
                width={1472}
                height={2284}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <span className={styles.mockupCaption}>Physician dashboard and appointment entry</span>
            </div>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/innvor-images-hq/p03-account-creation.png"
                alt="Innvor.ai – Account creation screen with Doctor and Admin role selection"
                width={1488}
                height={2276}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <span className={styles.mockupCaption}>Account creation with doctor and admin roles</span>
            </div>
          </div>

          <h3 className={styles.tealSubhead}>A workspace for each responsibility</h3>
          <p className={styles.sectionParagraph}>
            Doctors see completed visits, pending reviews, and upcoming appointments. Administrative users manage clinics, doctors, patient records, and subscriptions. Role selection is part of account creation, while patient information stays connected to the encounter.
          </p>

          <RunningFooter pageNumber="3" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 4: 02 Core Architecture
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="4" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>Core Architecture</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            Patient context flows through capture, AI processing, review, and record continuity
          </p>

          {/* Architecture Flowchart */}
          <div className={styles.archFlowchartContainer}>
            {/* Box 1 */}
            <div className={styles.archBox} style={{ backgroundColor: '#162846' }}>
              <span className={styles.archBoxTitle}>ENGAGEMENT AND ROUTING</span>
              <span className={styles.archBoxSubtitle}>Patient record • Care assignment • Encounter selection</span>
            </div>

            <div className={styles.archArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>

            {/* Box 2 */}
            <div className={styles.archBox} style={{ backgroundColor: '#19385C' }}>
              <span className={styles.archBoxTitle}>CONSENT AND CAPTURE</span>
              <span className={styles.archBoxSubtitle}>Recording consent • Digital signature • Audio session</span>
            </div>

            <div className={styles.archArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>

            {/* Box 3 */}
            <div className={styles.archBox} style={{ backgroundColor: '#0C8D7B' }}>
              <span className={styles.archBoxTitle}>AI INTELLIGENCE</span>
              <span className={styles.archBoxSubtitle}>Transcription • Coding suggestions • Report drafting</span>
            </div>

            <div className={styles.archArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>

            {/* Box 4 */}
            <div className={styles.archBox} style={{ backgroundColor: '#2A7C6F' }}>
              <span className={styles.archBoxTitle}>PHYSICIAN REVIEW</span>
              <span className={styles.archBoxSubtitle}>Inspect • Edit • Approve or reject</span>
            </div>

            <div className={styles.archArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>

            {/* Box 5 */}
            <div className={styles.archBox} style={{ backgroundColor: '#162846' }}>
              <span className={styles.archBoxTitle}>RECORDS AND KNOWLEDGE</span>
              <span className={styles.archBoxSubtitle}>Clinical history • Reviewed outputs • Change attribution</span>
            </div>
          </div>

          <div className={styles.mockupCaption}>
            Logical platform architecture
          </div>

          <p className={styles.sectionParagraph}>
            The intelligence layer turns encounter inputs into draft clinical artifacts. The review stage gives the physician control over what becomes part of the patient record. Verified consultation context feeds subsequent encounters through the connected record and knowledge layer.
          </p>

          <div className={styles.darkHighlightBanner}>
            The clinical approval boundary sits between AI generation and the durable record.
          </div>

          <RunningFooter pageNumber="4" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 5: 03 Credit System and Monetisation
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="5" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>Credit System and Monetisation</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            Organization plans combine feature access with operational usage visibility
          </p>

          <p className={styles.sectionParagraph}>
            The billing workspace brings subscription status, invoice history, payment methods, and plan management together. Usage is visible across AI sessions, storage, doctor licenses, and connected clinics.
          </p>

          {/* Billing Workspace Image Showcase */}
          <div className={styles.showcaseImageContainer} style={{ maxWidth: '755px', margin: '28px auto' }}>
            <Image
              src="/case-studies/innvor-images-hq/p05-billing-workspace.png"
              alt="Innvor.ai - Billing workspace with usage cards, invoices, and plan selection"
              width={1800}
              height={1980}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
              style={{ width: '100%', height: 'auto', imageRendering: 'auto' }}
            />
          </div>

          <div className={styles.mockupCaption}>
            Billing workspace with usage cards, invoices, and plan selection
          </div>

          <p className={styles.sectionParagraph}>
            Basic, Professional, and Enterprise tiers organize access around practice scale. The commercial structure accommodates recurring allowances and AI consumption, while administrators can compare capacity and manage the organization’s plan.
          </p>

          <RunningFooter pageNumber="5" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 6: 04 User Facing Features — Consent & Consultation Capture
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="6" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>User Facing Features</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            Consent and consultation capture
          </p>

          <p className={styles.sectionParagraph}>
            The selected patient remains visible before recording begins. Consent is separated into audio recording, AI processing, and storage and access, with a digital signature area and an explicit confirmation action.
          </p>

          {/* HQ Screenshot Pair: Patient Consent + Recording Session */}
          <div className={styles.twoImageShowcase}>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/innvor-images-hq/p06-patient-consent.png"
                alt="Innvor.ai – Patient consent before session start"
                width={956}
                height={2064}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <span className={styles.mockupCaption}>Patient consent before session start</span>
            </div>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/innvor-images-hq/p06-recording-session.png"
                alt="Innvor.ai – Recording with timer and pause control"
                width={980}
                height={1456}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <span className={styles.mockupCaption}>Recording with timer and pause control</span>
            </div>
          </div>

          <p className={styles.sectionParagraph}>
            During the encounter, the clinician can view patient details, edit history, select a language, pause the recording, and end the session. These controls keep capture attached to the right patient and appointment.
          </p>

          <RunningFooter pageNumber="6" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 7: 04 User Facing Features — Clinical Reports & Review Queue
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="7" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>User Facing Features</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            Clinical reports and the review queue
          </p>

          <p className={styles.sectionParagraph}>
            The generated report organizes the encounter into a summary, chief complaint, diagnosis, prescriptions, procedures, and treatment plan. The physician can edit the report before saving or downloading it.
          </p>

          {/* HQ Screenshot Pair: Clinical Report + Completed Sessions */}
          <div className={styles.twoImageShowcase}>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/innvor-images-hq/p07-clinical-report.png"
                alt="Innvor.ai – AI-generated clinical report with editing controls"
                width={972}
                height={1852}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <span className={styles.mockupCaption}>Structured clinical report with editing controls</span>
            </div>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/innvor-images-hq/p07-completed-sessions.png"
                alt="Innvor.ai – Completed sessions and outstanding reviews"
                width={1516}
                height={2400}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <span className={styles.mockupCaption}>Completed sessions and outstanding reviews</span>
            </div>
          </div>

          <p className={styles.sectionParagraph}>
            The completed sessions view supports patient search and separates records awaiting review from those ready for inspection. Coding and care suggestions stay within the physician’s review workflow.
          </p>

          <RunningFooter pageNumber="7" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 8: 04 User Facing Features — Clinic Operations & Care Team Visibility
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="8" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>User Facing Features</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            Clinic operations and care team visibility
          </p>

          {/* HQ Screenshot: Clinic Directory */}
          <div className={styles.showcaseImageContainer}>
            <Image
              src="/case-studies/innvor-images-hq/p08-clinic-directory.png"
              alt="Innvor.ai – Clinic directory with location, care team counts, and EHR fields"
              width={1816}
              height={1364}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>
          <div className={styles.mockupCaption}>
            Clinic directory with location, care team counts, and EHR fields
          </div>

          {/* HQ Screenshot: Clinic Profile */}
          <div className={styles.showcaseImageContainer}>
            <Image
              src="/case-studies/innvor-images-hq/p08-clinic-profile.png"
              alt="Innvor.ai – Clinic profile with administrators, staff, integration status, and activity"
              width={1808}
              height={1784}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <div className={styles.mockupCaption}>
            Clinic profile with administrators, staff, integration status, and activity
          </div>

          <p className={styles.sectionParagraph}>
            Administrators move from the clinic directory into a site profile to inspect contact details, medical staff, assigned administrators, and recent activity. Add and edit actions sit alongside the information they govern.
          </p>

          <RunningFooter pageNumber="8" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 9: 04 User Facing Features — Patient Record Context
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="9" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>User Facing Features</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            A patient record that carries context forward
          </p>

          <p className={styles.sectionParagraph}>
            Patient identity, consent status, current vitals, medical history, prescriptions, and recent sessions appear in one administrative view. This gives the care team an encounter entry point with the surrounding context already available.
          </p>

          {/* HQ Screenshot: Full Patient Record */}
          <div className={styles.showcaseImageContainer}>
            <Image
              src="/case-studies/innvor-images-hq/p01-cover-dashboard-screenshot.png"
              alt="Innvor.ai – Patient record with history, prescriptions, vitals, and session access"
              width={1800}
              height={1368}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>
          <div className={styles.mockupCaption}>
            Patient record with history, prescriptions, vitals, and session access
          </div>

          {/* Workflow Table */}
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>WORKFLOW</th>
                  <th>AVAILABLE ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Maintain patient context</td>
                  <td>Edit information, view history, add a history entry, record vitals</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Continue the encounter</td>
                  <td>Book a session and inspect recent or upcoming sessions</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Work with records</td>
                  <td>Upload documents, export, share, and print</td>
                </tr>
              </tbody>
            </table>
          </div>

          <RunningFooter pageNumber="9" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 10: 05 Security and Auditability
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="10" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>05</span>
            <h2 className={styles.sectionTitle}>Security and Auditability</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            Consent, assigned access, and accountable clinical review
          </p>

          <p className={styles.sectionParagraph}>
            The workflow makes consent and clinician responsibility visible at the points where they matter. Recording starts from a patient-specific consent screen, while clinical outputs pass through physician review.
          </p>

          {/* Control Table */}
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>CONTROL</th>
                  <th>WORKFLOW ROLE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Patient consent</td>
                  <td>Separate choices for recording, AI processing, and storage and access are paired with a signature step.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Doctor and admin roles</td>
                  <td>Account creation distinguishes clinical documentation access from system management.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Care team assignment</td>
                  <td>Record visibility follows the responsible physician, clinic, or hospital.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Physician verification</td>
                  <td>The clinician can approve, edit, or reject proposed outputs before they enter the final record.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Change attribution</td>
                  <td>The record architecture retains who changed or verified information and when.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Record continuity</td>
                  <td>Patient history and consultation context remain linked across encounters.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.tealSubhead}>Review remains a clinical responsibility</h3>
          <p className={styles.sectionParagraph}>
            A generated report is a working clinical artifact. Keeping the edit and review stage explicit allows the physician to check the consultation content, correct the output, and retain responsibility for the saved record.
          </p>

          <div className={styles.darkHighlightBanner}>
            Capture consent before recording. Retain physician control before committing clinical output.
          </div>

          <RunningFooter pageNumber="10" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 11: 06 What Makes This Different
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="11" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>06</span>
            <h2 className={styles.sectionTitle}>What Makes This Different</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            The product connects documentation with the surrounding care workflow
          </p>

          {/* Differences Table */}
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>CAPABILITY</th>
                  <th>PRACTICAL DIFFERENCE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Encounter context</td>
                  <td>Patient selection and prior history stay connected to capture and report review.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Structured clinical output</td>
                  <td>Reports organize the consultation into fields a physician can inspect and edit.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Coding in the workflow</td>
                  <td>ICD-10 and CPT suggestions sit alongside clinical documentation for verification.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>A visible review queue</td>
                  <td>Completed sessions and pending review states help clinicians locate unfinished documentation.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Organization management</td>
                  <td>Clinic profiles, staff administration, and patient records sit within the same platform.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Multilingual reach</td>
                  <td>Consultation support spans Igbo, Yoruba, English, French, Turkish, and Hindi.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Commercial administration</td>
                  <td>Plan selection, invoices, payment methods, and usage visibility are available to administrators.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.tealSubhead}>From a single encounter to organizational continuity</h3>
          <p className={styles.sectionParagraph}>
            The physician experience is anchored in the appointment and its documentation. The administrative experience is anchored in clinics, staff, patients, and subscriptions. Connecting these views supports both day-to-day clinical work and the operating needs of a healthcare organization.
          </p>

          <RunningFooter pageNumber="11" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 12: 07 Outcomes
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader pageNumber="12" />

          <div className={styles.sectionHeaderRow}>
            <span className={styles.sectionNumber}>07</span>
            <h2 className={styles.sectionTitle}>Outcomes</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            Operational value and a clear measurement framework
          </p>

          <p className={styles.sectionParagraph}>
            Innvor.ai establishes a connected workflow for capturing consultations, preparing structured reports, and returning outputs to the physician for review. Care teams can work from a shared patient record, while administrators can inspect clinics, staffing, and plan usage.
          </p>

          <h3 className={styles.tealSubhead}>System outcomes</h3>
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>OUTCOME</th>
                  <th>SYSTEM CONTRIBUTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Less manual documentation work</td>
                  <td>Audio capture and structured report drafting support note preparation.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Clearer review accountability</td>
                  <td>Pending review states and editing controls make unfinished work visible.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Continuity across encounters</td>
                  <td>Patient history, prescriptions, and session context are accessible together.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Centralized operational visibility</td>
                  <td>Clinic, care team, patient, and subscription views support administration.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.tealSubhead}>Outcome measurement</h3>
          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '56%' }}>KPI</th>
                  <th style={{ width: '22%' }}>BASELINE</th>
                  <th style={{ width: '22%' }}>POST ROLLOUT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Documentation minutes per encounter</td>
                  <td>[Enter value]</td>
                  <td>[Enter value]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Median time from session end to approval</td>
                  <td>[Enter value]</td>
                  <td>[Enter value]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Reports approved without substantive edits</td>
                  <td>[Enter %]</td>
                  <td>[Enter %]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Encounters with a completed record</td>
                  <td>[Enter %]</td>
                  <td>[Enter %]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Weekly active clinicians</td>
                  <td>[Enter count]</td>
                  <td>[Enter count]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.sectionParagraph}>
            Compare matched encounter types over a defined reporting period. Use session timestamps, review events, record completeness checks, and clinician activity to populate the measures.
          </p>

          <RunningFooter pageNumber="12" />
        </section>
      </div>
    </div>
  );
}
