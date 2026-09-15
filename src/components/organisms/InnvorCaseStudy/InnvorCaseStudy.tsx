'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
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
import EXTERNAL_LINKS from '@/constants/externalLinks';

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



                    <svg width="46" height="46" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-8deg)' }}>
                      <rect x="5" y="10" width="44" height="40" rx="9" fill="#9FC1A3" />
                      <rect x="14" y="4" width="5" height="10" rx="2.5" fill="#9FC1A3" />
                      <rect x="35" y="4" width="5" height="10" rx="2.5" fill="#9FC1A3" />
                      <line x1="5" y1="21" x2="49" y2="21" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.95" />
                      <path d="M19 33.5L25.5 40L36 27.5" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* 3 Pending Reviews */}
                <div className={styles.overviewCardWhite}>
                  <div>
                    <div className={styles.statNumberDark}>3</div>
                    <div className={styles.statSubtextMuted}>Pending Reviews</div>
                  </div>
                  <div className={styles.tagIcon3D}>
                    <svg width="46" height="46" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(20deg)' }}>
                      <rect x="9" y="4" width="36" height="46" rx="10" fill="#2563EB" />
                      <circle cx="27" cy="14" r="4" fill="#FFFFFF" />
                      <circle cx="19" cy="27" r="2.5" fill="#FFFFFF" />
                      <rect x="25" y="25" width="15" height="4" rx="2" fill="#FFFFFF" />
                      <circle cx="19" cy="37" r="2.5" fill="#FFFFFF" />
                      <rect x="25" y="35" width="15" height="4" rx="2" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#15294E', margin: '16px 0 10px' }}>
                Upcoming Appointments
              </div>
              <div className={styles.appointmentCardList}>
                {/* 1: Emma Thompson with blue pin indicator */}
                <div style={{ position: 'relative' }}>
                  <div className={styles.appointmentCardItem}>
                    <div className={styles.patientInfo}>
                      <span className={styles.patientNameText}>Emma Thompson</span>
                      <span className={styles.appointmentMetaText}>Annual Checkup • 3:00 PM</span>
                    </div>
                    <button className={styles.btnStartSession}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                        <line x1="12" y1="7" x2="12" y2="13" />
                        <line x1="9" y1="10" x2="15" y2="10" />
                      </svg>
                      Start A Session
                    </button>
                  </div>
                  <div className={styles.blueIndicatorPin} />
                </div>

                {/* 2: Michael Chen */}
                <div className={styles.appointmentCardItem}>
                  <div className={styles.patientInfo}>
                    <span className={styles.patientNameText}>Michael Chen</span>
                    <span className={styles.appointmentMetaText}>Follow-up • 3:30 PM</span>
                  </div>
                  <button className={styles.btnStartSession}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <line x1="12" y1="7" x2="12" y2="13" />
                      <line x1="9" y1="10" x2="15" y2="10" />
                    </svg>
                    Start A Session
                  </button>
                </div>

                {/* 3: Lisa Rodriguez */}
                <div className={styles.appointmentCardItem}>
                  <div className={styles.patientInfo}>
                    <span className={styles.patientNameText}>Lisa Rodriguez</span>
                    <span className={styles.appointmentMetaText}>Consultation • 4:00 PM</span>
                  </div>
                  <button className={styles.btnStartSession}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <line x1="12" y1="7" x2="12" y2="13" />
                      <line x1="9" y1="10" x2="15" y2="10" />
                    </svg>
                    Start A Session
                  </button>
                </div>

                {/* 4: Ashle Bren */}
                <div className={styles.appointmentCardItem}>
                  <div className={styles.patientInfo}>
                    <span className={styles.patientNameText}>Ashle Bren</span>
                    <span className={styles.appointmentMetaText}>Consultation • 4:00 PM</span>
                  </div>
                  <button className={styles.btnStartSession}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <line x1="12" y1="7" x2="12" y2="13" />
                      <line x1="9" y1="10" x2="15" y2="10" />
                    </svg>
                    Start A Session
                  </button>
                </div>

                {/* 5: Henry J. */}
                <div className={styles.appointmentCardItem}>
                  <div className={styles.patientInfo}>
                    <span className={styles.patientNameText}>Henry J.</span>
                    <span className={styles.appointmentMetaText}>Consultation • 4:00 PM</span>
                  </div>
                  <button className={styles.btnStartSession}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <line x1="12" y1="7" x2="12" y2="13" />
                      <line x1="9" y1="10" x2="15" y2="10" />
                    </svg>
                    Start A Session
                  </button>
                </div>
              </div>

              {/* Floating Bottom Dock */}
              <div className={styles.floatingBottomDock}>
                {/* Tab 1: Dashboard (Active) */}
                <div className={`${styles.dockTab} ${styles.dockTabActive}`}>
                  <LayoutGrid size={17} />
                  <span>Dashboard</span>
                  <div className={styles.dockActiveLine} />
                </div>

                {/* Tab 2: My Patients */}
                <div className={styles.dockTab}>
                  <Users size={17} />
                  <span>My Patients</span>
                </div>

                {/* Tab 3: Sessions */}
                <div className={styles.dockTab}>
                  <FileCheck size={17} />
                  <span>Sessions</span>
                </div>

                {/* Tab 4: Notes */}
                <div className={styles.dockTab}>
                  <FileText size={17} />
                  <span>Notes</span>
                </div>

                {/* Tab 5: Settings */}
                <div className={styles.dockTab}>
                  <UserCheck size={17} />
                  <span>Settings</span>
                </div>
              </div>
            </div>

            {/* Screen 2: Account Creation */}
            <div className={styles.screenMockupCard} style={{ background: '#F8FAFD', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#15294E' }}>innvor.ai</span>
              </div>

              <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px 20px', border: '1px solid #EAEFF5', boxShadow: '0 4px 18px rgba(21, 41, 78, 0.04)' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#15294E', textAlign: 'center', margin: '0 0 4px' }}>Create Account</h4>
                <p style={{ fontSize: '0.74rem', color: '#64748B', textAlign: 'center', margin: '0 0 16px' }}>Secure access for healthcare professionals</p>

                {/* Email Field */}
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#15294E', display: 'block', marginBottom: '4px' }}>Email *</label>
                  <div className={styles.formInputWrapper}>
                    <Mail size={14} color="#94A3B8" />
                    <input type="text" readOnly defaultValue="doctor@hospital.com" />
                  </div>
                </div>

                {/* Password Field */}
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#15294E', display: 'block', marginBottom: '4px' }}>Password *</label>
                  <div className={styles.formInputWrapper}>
                    <Lock size={14} color="#94A3B8" />
                    <input type="password" readOnly defaultValue="password123" placeholder="Enter your password" />
                    <Eye size={14} color="#94A3B8" />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#15294E', display: 'block', marginBottom: '4px' }}>Confirm Password *</label>
                  <div className={styles.formInputWrapper}>
                    <Lock size={14} color="#94A3B8" />
                    <input type="password" readOnly defaultValue="password123" placeholder="Enter your password" />
                    <Eye size={14} color="#94A3B8" />
                  </div>
                </div>

                {/* Role Field */}
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#15294E', display: 'block', marginBottom: '6px' }}>Role *</label>
                  <div className={styles.roleOptionList}>
                    {/* Doctor Option (Selected) */}
                    <div className={styles.roleOptionCard} style={{ border: '1.5px solid #2D7D6F', background: '#F4FBF8' }}>
                      <div className={styles.roleRadioDot} style={{ borderColor: '#2D7D6F', background: '#2D7D6F' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FFFFFF' }} />
                      </div>
                      <div className={styles.roleIconBadge} style={{ background: '#EFF6FF' }}>
                        <User size={15} color="#2563EB" />
                      </div>
                      <div className={styles.roleTextCol}>
                        <span className={styles.roleTitle}>Doctor</span>
                        <span className={styles.roleDesc}>Clinical documentation access</span>
                      </div>
                    </div>

                    {/* Admin Option */}
                    <div className={styles.roleOptionCard}>
                      <div className={styles.roleRadioDot} />
                      <div className={styles.roleIconBadge} style={{ background: '#F0FDF4' }}>
                        <User size={15} color="#16A34A" />
                      </div>
                      <div className={styles.roleTextCol}>
                        <span className={styles.roleTitle}>Admin</span>
                        <span className={styles.roleDesc}>Managing the system</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className={styles.termsCheckboxRow} style={{ marginBottom: '14px' }}>
                  <input type="checkbox" defaultChecked readOnly style={{ accentColor: '#2D7D6F', marginTop: '3px', cursor: 'default' }} />
                  <div>
                    <div style={{ color: '#334155', fontWeight: 600 }}>I agree to the innvor.ai <span style={{ color: '#2563EB', textDecoration: 'underline' }}>term and policies</span></div>
                    <div style={{ fontSize: '0.65rem', color: '#64748B', marginTop: '1px' }}>
                      I consent innvor.ai to use my information and feedback data for this AI tool working.
                    </div>
                  </div>
                </div>

                {/* Primary Button */}
                <button className={styles.btnSubmitForm} style={{ width: '100%', padding: '11px', borderRadius: '8px' }}>
                  Get Started
                </button>
              </div>

              {/* Support Footer */}
              <div style={{ textAlign: 'center', fontSize: '0.7rem', color: '#64748B', marginTop: '16px', lineHeight: 1.4 }}>
                <div>Need help? Contact IT Support</div>
                <div style={{ marginTop: '2px', fontWeight: 600 }}>
                  <span style={{ color: '#2563EB' }}>📞</span> +234-800-MEDAI &nbsp;&nbsp; <span style={{ color: '#2563EB' }}>✉</span> <span style={{ color: '#2563EB' }}>support@medai.ng</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'center', margin: '10px 0 24px' }}>
            <span className={styles.mockupCaption} style={{ margin: 0 }}>Physician dashboard and appointment entry</span>
            <span className={styles.mockupCaption} style={{ margin: 0 }}>Account creation with doctor and admin roles</span>
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
          <div className={styles.showcaseImageContainer} style={{ maxWidth: '755px' }}>
            <Image
              src="/case-studies/Credit System and Monetisation.png"
              alt="Innvor.ai - Billing workspace with usage cards, invoices, and plan selection"
              width={755}
              height={811}
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

          {/* User Facing Features Image Showcase */}
          <div className={styles.showcaseImageContainer} style={{ maxWidth: '942px' }}>
            <Image
              src="/case-studies/User Facing Features.png"
              alt="Innvor.ai - Patient consent before session start and Recording with timer and pause control"
              width={942}
              height={775}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
              style={{ width: '100%', height: 'auto', imageRendering: 'auto' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'center', margin: '8px 0 24px' }}>
            <span className={styles.mockupCaption} style={{ margin: 0 }}>Patient consent before session start</span>
            <span className={styles.mockupCaption} style={{ margin: 0 }}>Recording with timer and pause control</span>
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

          {/* Two Screens Grid */}
          <div className={styles.twoScreenGrid}>
            {/* Screen 1: Clinical Report */}
            <div className={styles.screenMockupCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: '#718096' }}>← Back</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1A202C' }}>AI-Generated Clinical Report</span>
                <Edit3 size={14} color="#2A7C6F" />
              </div>

              {/* Patient Banner */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 12px', marginBottom: '14px', display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                <div>
                  <strong>Emma Thompson</strong> (PID: #PT-2024-0158)<br />
                  <span style={{ color: '#718096' }}>DOB: 24/03/1988 • 36 Yrs Old • Female</span>
                </div>
                <div style={{ textAlign: 'right', color: '#2A7C6F', fontWeight: 600 }}>
                  Annual Checkup<br />
                  3:00 PM - 3:30 PM
                </div>
              </div>

              {/* Summary */}
              <div className={styles.reportSectionBlock}>
                <div className={styles.reportSectionTitle}>Summary</div>
                <div className={styles.reportSectionBody}>
                  Patient presents for annual wellness examination. No acute concerns reported. Patient reports feeling generally well with no significant changes since last visit. Denies fever, chills, weight loss, or weight gain. Sleep patterns normal, appetite good. No new medications, or supplements.
                </div>
              </div>

              {/* Chief Complaint */}
              <div className={styles.reportSectionBlock}>
                <div className={styles.reportSectionTitle}>Chief Complaint</div>
                <div className={styles.reportSectionBody}>
                  Patient presents for annual wellness examination. No acute concerns reported.
                </div>
              </div>

              {/* Diagnosis */}
              <div className={styles.reportSectionBlock}>
                <div className={styles.reportSectionTitle}>🩺 Diagnosis</div>
                <div className={styles.reportSectionBody}>
                  <strong>Encounter for general adult medical examination without abnormal findings</strong><br />
                  Annual wellness visit for healthy adult female with no acute concerns or abnormal findings on examination.
                </div>
              </div>

              {/* Prescriptions */}
              <div className={styles.reportSectionBlock}>
                <div className={styles.reportSectionTitle}>💊 Prescriptions</div>
                <div className={styles.reportSectionBody}>
                  <strong style={{ color: '#2A7C6F' }}>Vitamin D3 Cholecalciferol 2000 IU</strong><br />
                  <span style={{ fontSize: '0.72rem', color: '#718096' }}>Dosage: 1 tablet daily | Quantity: 30 tablets | Refills: 2 | Route: Oral</span><br />
                  <span style={{ fontSize: '0.72rem' }}>Instructions: Take with food to enhance absorption. For bone health maintenance.</span>
                </div>
              </div>

              {/* Procedures */}
              <div className={styles.reportSectionBlock}>
                <div className={styles.reportSectionTitle}>🩺 Procedures</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div className={styles.reportSectionBody} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong>Lipid Panel</strong><br />
                      <span style={{ fontSize: '0.7rem', color: '#718096' }}>CPT: 80061 | Priority: Routine | Fasting: Yes</span>
                    </div>
                  </div>
                  <div className={styles.reportSectionBody} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong>Mammography Bilateral</strong><br />
                      <span style={{ fontSize: '0.7rem', color: '#718096' }}>CPT: 77067 | Priority: Routine | Due: 24 months</span>
                    </div>
                    <span style={{ background: '#FCE7F3', color: '#BE185D', padding: '2px 6px', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 700 }}>Imaging</span>
                  </div>
                </div>
              </div>

              {/* Treatment Plan */}
              <div className={styles.reportSectionBlock}>
                <div className={styles.reportSectionTitle}>📋 Treatment Plan</div>
                <div className={styles.reportSectionBody}>
                  • Continue current preventive care routine. No acute interventions required at this time.<br />
                  • Maintain healthy lifestyle and exercise routine.<br />
                  • Continue balanced diet with adequate calcium and vitamin D.<br />
                  • Regular sleep schedule and stress management.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                <button className={styles.btnSmall} style={{ flex: 1, justifyContent: 'center' }}>Save Report</button>
                <button className={`${styles.btnSmall} ${styles.btnSmallTeal}`} style={{ flex: 1, justifyContent: 'center' }}>Save &amp; Download Report</button>
              </div>
            </div>

            {/* Screen 2: Review Queue */}
            <div className={styles.screenMockupCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: '#718096' }}>← Back</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1A202C' }}>Visit Completed</span>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1A202C', margin: '0 0 2px' }}>Today&apos;s Completed Sessions</h4>
              <p style={{ fontSize: '0.75rem', color: '#718096', margin: '0 0 14px' }}>All the Today&apos;s sessions with patients</p>

              <div className={styles.searchBar} style={{ maxWidth: '100%', marginBottom: '16px' }}>
                <Search size={14} />
                <span>Search patients by name, ID or condition...</span>
              </div>

              <div className={styles.reviewQueueList}>
                {/* Session 1 */}
                <div className={styles.reviewQueueItem}>
                  <div>
                    <div className={styles.queuePatientName}>Emma Thompson</div>
                    <div className={styles.queueMeta}>Patient ID: #PT-2024-0158 • Follow-up • 15 min session</div>
                    <div style={{ fontSize: '0.7rem', color: '#137333', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#137333' }} /> Generated: 2:45 PM
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className={styles.badgeAccuracy}>96.5% AI Accuracy</span>
                    <div style={{ fontSize: '0.72rem', color: '#2A7C6F', fontWeight: 700, marginTop: '4px', cursor: 'default' }}>View Details</div>
                  </div>
                </div>

                {/* Session 2 */}
                <div className={styles.reviewQueueItem}>
                  <div>
                    <div className={styles.queuePatientName}>Mrs. Adaora Nwosu</div>
                    <div className={styles.queueMeta}>Follow-up • 15 min session</div>
                    <div style={{ fontSize: '0.7rem', color: '#137333', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#137333' }} /> Generated: 2:45 PM
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ background: '#EBF8FF', color: '#1E88E5', fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '12px' }}>Rate now: 4.5 Accuracy</span>
                    <div style={{ fontSize: '0.72rem', color: '#2A7C6F', fontWeight: 700, marginTop: '4px', cursor: 'default' }}>View Details</div>
                  </div>
                </div>

                {/* Session 3 */}
                <div className={styles.reviewQueueItem}>
                  <div>
                    <div className={styles.queuePatientName}>Mrs. Adaora Nwosu</div>
                    <div className={styles.queueMeta}>Follow-up • 15 min session</div>
                    <div style={{ fontSize: '0.7rem', color: '#137333', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#137333' }} /> Generated: 2:45 PM
                    </div>
                  </div>
                  <span className={styles.badgePending}>Review Pending</span>
                </div>

                {/* Session 4 */}
                <div className={styles.reviewQueueItem}>
                  <div>
                    <div className={styles.queuePatientName}>Mrs. Adaora Nwosu</div>
                    <div className={styles.queueMeta}>Follow-up • 15 min session</div>
                    <div style={{ fontSize: '0.7rem', color: '#137333', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#137333' }} /> Generated: 2:45 PM
                    </div>
                  </div>
                  <span className={styles.badgePending}>Review Pending</span>
                </div>

                {/* Session 5 */}
                <div className={styles.reviewQueueItem}>
                  <div>
                    <div className={styles.queuePatientName}>Mrs. Adaora Nwosu</div>
                    <div className={styles.queueMeta}>Follow-up • 15 min session</div>
                    <div style={{ fontSize: '0.7rem', color: '#137333', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#137333' }} /> Generated: 2:45 PM
                    </div>
                  </div>
                  <span className={styles.badgePending}>Review Pending</span>
                </div>

                {/* Session 6 */}
                <div className={styles.reviewQueueItem}>
                  <div>
                    <div className={styles.queuePatientName}>Mrs. Adaora Nwosu</div>
                    <div className={styles.queueMeta}>Follow-up • 15 min session</div>
                    <div style={{ fontSize: '0.7rem', color: '#137333', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#137333' }} /> Generated: 2:45 PM
                    </div>
                  </div>
                  <span className={styles.badgePending}>Review Pending</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'center', margin: '8px 0 24px' }}>
            <span className={styles.mockupCaption} style={{ margin: 0 }}>Structured clinical report with editing controls</span>
            <span className={styles.mockupCaption} style={{ margin: 0 }}>Completed sessions and outstanding reviews</span>
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

          {/* Screen 1: Clinic Directory */}
          <div className={styles.mockupFrame}>
            <div className={styles.mockupBodyLayout}>
              <aside className={styles.mockupSidebar}>
                <div className={styles.sidebarBrand}>innvor.ai</div>
                <div className={styles.sidebarNavItem}><LayoutGrid size={17} /> Dashboard</div>
                <div className={`${styles.sidebarNavItem} ${styles.activeNav}`}><Building2 size={17} /> Clinics Management</div>
                <div className={styles.sidebarNavItem}><Stethoscope size={17} /> Manage Doctors</div>
                <div className={styles.sidebarNavItem}><Users size={17} /> Manage Patient</div>
                <div className={styles.sidebarNavItem}><CreditCard size={17} /> Billing &amp; Plans</div>
                <div className={styles.sidebarNavItem}><GraduationCap size={17} /> Training and Tooltips</div>
              </aside>

              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 0 }}>
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
                    <div className={styles.avatarPill}>NH</div>
                  </div>
                </div>

                <main className={styles.mockupMainContent}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#1A202C' }}>Clinic Management</h3>
                      <span style={{ fontSize: '0.78rem', color: '#718096' }}>Manage clinic details, administrators, and EHR integrations</span>
                    </div>
                    <button className={`${styles.btnSmall} ${styles.btnSmallTeal}`}><Plus size={13} /> Add New Clinic</button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', maxWidth: '380px', marginBottom: '16px' }}>
                    <div className={styles.usageStatCard}>
                      <span className={styles.statLabel}>Total Clinics</span>
                      <div className={styles.statNumber}>08</div>
                    </div>
                    <div className={styles.usageStatCard}>
                      <span className={styles.statLabel}>Total Admins</span>
                      <div className={styles.statNumber}>48</div>
                    </div>
                  </div>

                  <div className={styles.cardWhite} style={{ padding: 0, overflowX: 'auto' }}>
                    <table style={{ width: '100%', fontSize: '0.8rem', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#4A5568', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                          <th style={{ padding: '10px 14px' }}>Clinic Details</th>
                          <th>Location</th>
                          <th>Doctors</th>
                          <th>Admins</th>
                          <th>EHR</th>
                          <th style={{ textAlign: 'right', paddingRight: '14px' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '10px 14px', fontWeight: 700 }}>Lagos General Hospital <span style={{ fontSize: '0.68rem', color: '#A0AEC0', display: 'block' }}>ID: LLH-492</span></td>
                          <td>Lagos, Nigeria</td>
                          <td>24</td>
                          <td>3</td>
                          <td><span style={{ color: '#137333', background: '#E6F4EA', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700 }}>● OpenMRS</span></td>
                          <td style={{ textAlign: 'right', paddingRight: '14px' }}>✏️ 👁️ 🗑️</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '10px 14px', fontWeight: 700 }}>Abuja Medical Center <span style={{ fontSize: '0.68rem', color: '#A0AEC0', display: 'block' }}>ID: AMC-102</span></td>
                          <td>Abuja, Nigeria</td>
                          <td>18</td>
                          <td>2</td>
                          <td><span style={{ color: '#137333', background: '#E6F4EA', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700 }}>● Cloud Backup</span></td>
                          <td style={{ textAlign: 'right', paddingRight: '14px' }}>✏️ 👁️ 🗑️</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '10px 14px', fontWeight: 700 }}>Port Harcourt Cardiac Center <span style={{ fontSize: '0.68rem', color: '#A0AEC0', display: 'block' }}>ID: PHC-304</span></td>
                          <td>Port Harcourt, Nigeria</td>
                          <td>12</td>
                          <td>2</td>
                          <td><span style={{ color: '#137333', background: '#E6F4EA', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700 }}>● OpenMRS</span></td>
                          <td style={{ textAlign: 'right', paddingRight: '14px' }}>✏️ 👁️ 🗑️</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '10px 14px', fontWeight: 700 }}>Kano State Hospital <span style={{ fontSize: '0.68rem', color: '#A0AEC0', display: 'block' }}>ID: KSH-804</span></td>
                          <td>Kano, Nigeria</td>
                          <td>31</td>
                          <td>4</td>
                          <td><span style={{ color: '#137333', background: '#E6F4EA', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700 }}>● OpenMRS</span></td>
                          <td style={{ textAlign: 'right', paddingRight: '14px' }}>✏️ 👁️ 🗑️</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '10px 14px', fontWeight: 700 }}>Ibadan Family Clinic <span style={{ fontSize: '0.68rem', color: '#A0AEC0', display: 'block' }}>ID: IFC-205</span></td>
                          <td>Ibadan, Nigeria</td>
                          <td>8</td>
                          <td>1</td>
                          <td><span style={{ color: '#137333', background: '#E6F4EA', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700 }}>● Cloud Backup</span></td>
                          <td style={{ textAlign: 'right', paddingRight: '14px' }}>✏️ 👁️ 🗑️</td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', fontSize: '0.74rem', color: '#718096', borderTop: '1px solid #E2E8F0' }}>
                      <span>Showing 1 to 5 of 24 clinics</span>
                      <span>&lt; 1 2 3 &gt;</span>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <div className={styles.mockupCaption}>
            Clinic directory with location, care team counts, and EHR fields
          </div>

          {/* Screen 2: Clinic Profile */}
          <div className={styles.mockupFrame} style={{ marginTop: '32px' }}>
            <div className={styles.mockupBodyLayout}>
              <aside className={styles.mockupSidebar}>
                <div className={styles.sidebarBrand}>innvor.ai</div>
                <div className={styles.sidebarNavItem}><LayoutGrid size={17} /> Dashboard</div>
                <div className={`${styles.sidebarNavItem} ${styles.activeNav}`}><Building2 size={17} /> Clinics Management</div>
                <div className={styles.sidebarNavItem}><Stethoscope size={17} /> Manage Doctors</div>
                <div className={styles.sidebarNavItem}><Users size={17} /> Manage Patient</div>
              </aside>

              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 0 }}>
                <div className={styles.mockupTopBar}>
                  <div className={styles.topBarLeft}>
                    <span className={styles.brandLogo}>innvor.ai</span>
                  </div>
                  <div className={styles.topBarRight}>
                    <div className={styles.avatarPill}>NH</div>
                  </div>
                </div>

                <main className={styles.mockupMainContent}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                      <span style={{ fontSize: '0.74rem', color: '#718096' }}>← Back</span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: '#1A202C' }}>Clinic Name Here</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className={`${styles.btnSmall} ${styles.btnSmallTeal}`}><Edit3 size={12} /> Edit Clinic</button>
                      <button className={styles.btnSmall}><Download size={12} /> Export Data</button>
                    </div>
                  </div>

                  {/* 3 Blocks Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '16px' }}>
                    {/* Contact Information */}
                    <div className={styles.cardWhite}>
                      <div className={styles.cardHeaderTitle}>Contact Information</div>
                      <div style={{ fontSize: '0.75rem', color: '#4A5568', lineHeight: 1.4 }}>
                        123 Victoria Island, Lagos, Nigeria<br />
                        +234 901 234 5678<br />
                        admin@cnh.ng
                      </div>
                    </div>

                    {/* Quick Statistics */}
                    <div className={styles.cardWhite}>
                      <div className={styles.cardHeaderTitle}>Quick Statistics</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', textAlign: 'center' }}>
                        <div>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1A202C' }}>24</div>
                          <div style={{ fontSize: '0.68rem', color: '#718096' }}>Doctors</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1A202C' }}>1,247</div>
                          <div style={{ fontSize: '0.68rem', color: '#718096' }}>Patients</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1A202C' }}>3,892</div>
                          <div style={{ fontSize: '0.68rem', color: '#718096' }}>Consultations</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1A202C' }}>3</div>
                          <div style={{ fontSize: '0.68rem', color: '#718096' }}>Admins</div>
                        </div>
                      </div>
                    </div>

                    {/* Integration Status */}
                    <div className={styles.cardWhite}>
                      <div className={styles.cardHeaderTitle}>Integration Status</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.74rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>OpenMRS</span>
                          <span style={{ color: '#137333', fontWeight: 700 }}>● Connected</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Cloud Backup</span>
                          <span style={{ color: '#137333', fontWeight: 700 }}>● Connected</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Nigeria Compliance</span>
                          <span style={{ color: '#137333', fontWeight: 700 }}>● Active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Administrators */}
                  <div className={styles.cardWhite} style={{ marginBottom: '16px' }}>
                    <div className={styles.cardHeaderTitle}>
                      <span>Clinic Administrators</span>
                      <span className={styles.headerActionLink}>+ Add Administrator</span>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem' }}>
                      <div style={{ background: '#F8FAFC', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                        <strong>Fatima Okoli</strong>
                        <div style={{ fontSize: '0.68rem', color: '#718096' }}>Lead Administrator</div>
                      </div>
                      <div style={{ background: '#F8FAFC', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                        <strong>James Ojo</strong>
                        <div style={{ fontSize: '0.68rem', color: '#718096' }}>System Administrator</div>
                      </div>
                    </div>
                  </div>

                  {/* Medical Staff */}
                  <div className={styles.cardWhite}>
                    <div className={styles.cardHeaderTitle}>
                      <span>Medical Staff</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ fontSize: '0.74rem', color: '#718096' }}>All Specialties ⌄</span>
                        <span className={styles.headerActionLink}>+ Add Doctor</span>
                      </div>
                    </div>
                    <table style={{ width: '100%', fontSize: '0.78rem', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ color: '#A0AEC0', borderBottom: '1px solid #E2E8F0' }}>
                          <th style={{ padding: '6px 0' }}>Doctor</th>
                          <th>Specialty</th>
                          <th>Consultations</th>
                          <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '8px 0', fontWeight: 700 }}>Dr. Ahmed Hassan</td>
                          <td>Cardiology</td>
                          <td>142</td>
                          <td style={{ textAlign: 'right' }}>✏️ 👁️</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '8px 0', fontWeight: 700 }}>Dr. Ahmed Hassan</td>
                          <td>General Practice</td>
                          <td>98</td>
                          <td style={{ textAlign: 'right' }}>✏️ 👁️</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px 0', fontWeight: 700 }}>Dr. Ahmed Hassan</td>
                          <td>Pediatrics</td>
                          <td>76</td>
                          <td style={{ textAlign: 'right' }}>✏️ 👁️</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Recent Activity */}
                  <div style={{ marginTop: '14px', fontSize: '0.74rem', color: '#718096' }}>
                    <strong>Recent Activity:</strong> Dr. Ahmed Hassan completed a consultation with patient Fatima Doe (10 mins ago)
                  </div>
                </main>
              </div>
            </div>
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

          {/* Full Patient Record Mockup */}
          <PatientRecordMockup />
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

          {/* VOOK AI Style Discovery CTA */}
          <div className={styles.ctaBox}>
            <h3>Build your Healthcare AI platform with PG-AGI</h3>
            <p>
              We engineer secure, HIPAA/NDPR-compliant clinical documentation systems, AI voice scribe engines, and scalable healthcare architectures.
            </p>
            <a
              href={EXTERNAL_LINKS.CALENDLY_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnTeal}
            >
              Schedule a Discovery Call <ArrowRight size={18} />
            </a>
          </div>

          <RunningFooter pageNumber="12" />
        </section>
      </div>
    </div>
  );
}
