'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Radio,
  Terminal,
  Activity,
  Zap,
} from 'lucide-react';
import styles from '@/styles/components/organisms/VookCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';
import EXTERNAL_LINKS from '@/constants/externalLinks';

interface VookCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

export default function VookCaseStudy({ caseStudy }: VookCaseStudyProps) {
  return (
    <div className={styles.vookPage}>
      {/* ── 1. Hero Section ── */}
      <section className={styles.heroSection}>
        <div className={styles.rail}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>VOOK AI</h1>

              <p className={styles.heroDesc}>
                A companion app that turns a phone into a real-time audio control surface for a wireless microphone system — built on a bidirectional USB-HID control channel, a dual transmitter binary protocol, AI audio post-processing, and a 180+ test firmware regression suite
              </p>

              <div className={styles.heroPillGrid}>
                <div className={styles.heroPillRow}>
                  <span className={styles.pillDark}>USB-HID device control</span>
                  <span className={styles.pillLight}>Dual-transmitter protocol</span>
                </div>
                <div className={styles.heroPillRow}>
                  <span className={styles.pillLight}>Firmware QA automation</span>
                  <span className={styles.pillLight}>AI denoising pipeline</span>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroImgWrap}>
                <Image
                  src="/assets/CaseStudies/VookPhones.png"
                  alt="VOOK AI Mobile Companion App Preview"
                  fill
                  priority
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Quick Meta Facts Bar ── */}
      <div className={styles.metaRail}>
        <div className={styles.rail}>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Platforms</span>
              <span className={styles.metaValue}>Android · iOS</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>IoT · Consumer hardware · AI audio</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Stack</span>
              <span className={styles.metaValue}>Flutter · Kotlin · Swift · Python · FastAPI</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Scope</span>
              <span className={styles.metaValue}>App · native HID layer · AI backend · firmware QA</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rail}>
        {/* ── 3. Overview Section ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Overview</span>
          <h2 className={styles.sectionHeading}>
            A single app that controls the hardware<br/> and runs the workflow.
          </h2>

          <p className={`${styles.sectionParagraph} ${styles.overviewIntroText}`}>
            VOOK is a wireless microphone ecosystem that turns a smartphone into a professional audio control surface. The hardware — a dual-transmitter wireless microphone system with a USB-C receiver dongle — pairs with the VOOK app so that creators can control their microphones in real time from the same device they record on, and then apply AI audio post-processing to the captured result.
          </p>

          {/* 4 Metric Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Hardware product lines driven from one mobile codebase</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>2</span>
              <span className={styles.statLabel}>Wireless transmitters managed independently per session</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>17<span className={styles.statSuffix}>-byte</span></span>
              <span className={styles.statLabel}>Binary HID frame with CRC-8 integrity checking</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>180+</span>
              <span className={styles.statLabel}>Automated firmware regression tests over raw USB</span>
            </div>
          </div>

          {/* Hardware Photo */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src="/assets/CaseStudies/VookHardwareBringup.png"
                alt="VOOK Hardware Bring-up & Pairing Validation"
                width={1120}
                height={545}
                className={styles.photoImg}
              />
            </div>
            <span className={styles.labEyebrow}>From the lab</span>
            <p className={styles.labCaption}>
              <strong>Hardware bring-up.</strong> Two transmitter units alongside the chipset vendor&apos;s bench tester, which reports per-channel search state and firmware version (V1.3.1.d) during pairing
            </p>
          </div>

          {/* 2 Feature Cards */}
          <div className={`${styles.twoCardGrid} ${styles.twoCardGridAlt}`}>
            <div className={`${styles.featureCard} ${styles.featureCardAlt}`}>
              <Image
                src="/assets/CaseStudies/VookCoreValuesIcon.png"
                alt="Core user values icon"
                width={73}
                height={73}
                className={styles.cardIconImg}
              />
              <h3 className={styles.cardTitle}>Core User Values</h3>
              <ul className={`${styles.cardBullets} ${styles.checkBullets}`}>
                <li><strong>Live control:</strong> mute, volume, and noise-cancellation adjusted during recording.</li>
                <li><strong>AI post-processing:</strong> AI-powered denoising applied to captured audio after the fact.</li>
                <li><strong>Cloud processing:</strong> credit-based cloud jobs with full account management.</li>
                <li><strong>Unified experience:</strong> one app that handles both the hardware and the creative workflow.</li>
              </ul>
            </div>

            <div className={`${styles.featureCard} ${styles.featureCardAlt}`}>
              <Image
                src="/assets/CaseStudies/VookHardwareIcon.png"
                alt="Hardware product lines icon"
                width={60}
                height={60}
                className={styles.cardIconImg}
              />
              <h3 className={styles.cardTitle}>Hardware Product Lines</h3>
              <ul className={`${styles.cardBullets} ${styles.checkBullets}`}>
                <li><strong>MiniMic</strong> — compact clip-on transmitter</li>
                <li><strong>AirMic</strong> — over-collar transmitter (K6 chipset).</li>
                <li><strong>ClipX</strong> — broadcast-grade lavalier (D11 chipset).</li>
              </ul>
              <p className={styles.cardFootnote}>
                All three lines share a common USB receiver dongle and speak the same firmware protocol — so one mobile codebase drives every product
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. Architecture Section ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>ARCHITECTURE</span>
          <h2 className={styles.sectionHeading}>
            Feature-first clean architecture on Flutter.
          </h2>

          <p className={styles.sectionParagraph}>
            The app follows a feature-first clean architecture, with distinct data, domain, and presentation layers inside each feature, and a native platform layer beneath for direct hardware access. The separation is what keeps the hardware-control logic testable and isolated from the UI.
          </p>

          {/* Layer Responsibility Table */}
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Responsibility</th>
                  <th>Technology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.layerCell}>Presentation</td>
                  <td>UI elements, widgets, screen layouts</td>
                  <td>Flutter UI</td>
                </tr>
                <tr>
                  <td className={styles.layerCell}>Domain</td>
                  <td>Business logic, state modification, use cases</td>
                  <td>Providers, ChangeNotifiers</td>
                </tr>
                <tr>
                  <td className={styles.layerCell}>Data</td>
                  <td>Data sourcing, network requests, storage</td>
                  <td>Repositories, Services</td>
                </tr>
                <tr>
                  <td className={styles.layerCell}>Platform</td>
                  <td>Native hardware interfacing, USB communication</td>
                  <td>Kotlin (Android) / Swift (iOS)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Core Infrastructure / Feature Modules */}
          <div className={styles.twoCardGrid}>
            <div className={`${styles.featureCard} ${styles.featureCardAlt}`}>
              <Image
                src="/assets/CaseStudies/VookCoreInfraIcon.png"
                alt="Core infrastructure icon"
                width={56}
                height={56}
                className={styles.cardIconImg}
              />
              <h3 className={styles.cardTitle}>Core Infrastructure</h3>
              <ul className={`${styles.cardBullets} ${styles.checkBullets}`}>
                <li><strong>State management:</strong> Provider + ChangeNotifier, scoped per screen.</li>
                <li><strong>Routing:</strong> <code>GoRouter</code> with named routes</li>
                <li><strong>HTTP:</strong> Dio with interceptors for auth-token injection and 401 refresh</li>
                <li><strong>Image caching:</strong> CachedNetworkImage with stable S3 cache keys.</li>
                <li><strong>Secure storage:</strong> <code>flutter_secure_storage</code> for JWT and profile data.</li>
                <li><strong>Audio playback:</strong> <code>audioplayers ^6.x</code> for the in-app demo player.</li>
              </ul>
            </div>

            <div className={styles.moduleColumn}>
              <h3 className={styles.cardTitle}>Feature Modules</h3>
              <div className={styles.moduleTags}>
                <span className={`${styles.moduleTag} ${styles.moduleTagActive}`}>auth</span>
                <span className={styles.moduleTag}>Home</span>
                <span className={styles.moduleTag}>enhance_page</span>
                <span className={styles.moduleTag}>output_page</span>
                <span className={styles.moduleTag}>clipx</span>
                <span className={styles.moduleTag}>mic_controls</span>
                <span className={styles.moduleTag}>profile</span>
                <span className={styles.moduleTag}>notifications</span>
                <span className={styles.moduleTag}>support</span>
              </div>
            </div>
          </div>

          <div className={styles.calloutDivider}>
            <span className={styles.calloutLine} />
            <p className={styles.calloutText}>
              MIC_CONTROLS HOLDS THE DEVICE-STATE DOMAIN — THE CORE HID BUSINESS LOGIC — KEPT DELIBERATELY SEPARATE FROM THE SCREENS THAT RENDER IT
            </p>
          </div>

          {/* Layered Architecture Diagram */}
          <div className={styles.layeredArchContainer}>
            <div className={styles.archCardWhite}>
              <strong>Presentation</strong> — Flutter widgets, screens, PageShell
            </div>

            <div className={styles.archDownArrow}>↓</div>

            <div className={styles.archCardDomain}>
              <strong>Domain</strong> — Providers / ChangeNotifiers (MicController = source of truth)
            </div>

            <div className={styles.archDownArrow}>↓</div>

            <div className={styles.archCardWhite}>
              <strong>Data</strong> — Repositories, Services, Dio, secure storage
            </div>

            <div className={styles.archDownArrow}>↓</div>

            <div className={styles.archCardPlatform}>
              <strong>Platform</strong> — Kotlin / Swift native USB-HID layer
            </div>

            <div className={styles.archDownArrow}>↓</div>

            <div className={styles.archCardDongle}>
              USB receiver dongle · dual transmitters
            </div>
          </div>

          <p className={styles.archFigureCaption}>
            <strong>Figure 1 — Layered architecture.</strong> UI never touches hardware directly; commands and state flow through the domain layer (MicController) and the native platform layer, which owns the USB-HID channel to the receiver dongle.
          </p>
        </section>

        {/* ── 5. Dark Feature Banner ── */}
        <div className={styles.darkBanner}>
          <div className={styles.darkContent}>
            <span className={styles.darkEyebrow}>THE CORE PROBLEM</span>
            <h2 className={styles.darkTitle}>
              USB–HID Hardware<br />Integration
            </h2>
            <p className={styles.darkDesc}>
              Building a bidirectional control channel between a Flutter app and a USB microphone over the HID protocol was the most technically demanding part of the system — the app has to act as a USB HID host, exchanging raw binary frames with firmware it does not own
            </p>
          </div>
        </div>

        {/* ── 6. USB HID Host Section ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>USB HID · DEVICE CONTROL</span>
          <h2 className={styles.sectionHeading}>
            The app is a USB HID host, not an audio client.
          </h2>

          <p className={styles.sectionParagraph}>
            HID is the same USB protocol used by keyboards and mice. VOOK’s receiver dongle exposes a vendor HID interface alongside its USB-audio interface. The app uses that HID channel — not audio APIs — to send control commands and receive device status, battery level, and transmitter state. In practice this means opening a raw interrupt endpoint and exchanging fixed 17-byte binary frames at runtime.
          </p>

          <div className={styles.calloutDivider}>
            <span className={styles.calloutLine} />
            <p className={styles.calloutText}>FRAME PROTOCOL</p>
          </div>

          <p className={styles.sectionParagraph}>
            Every message, in both directions, is a fixed 17-byte binary frame with a CRC-8 checksum (Dallas/Maxim) in the final byte.
          </p>

          {/* Green Frame Diagram (Figure 2) */}
          <div className={styles.greenDiagramWrapper}>
            <div className={styles.frameCardInner}>
              <div className={styles.frameCardHeader}>17-BYTE FIXED FRAME</div>
              <div className={styles.frameBoxesRow}>
                <div className={styles.frameBoxReport}>
                  <div className={styles.frameBoxTop}>0x01</div>
                  <div className={styles.frameBoxBottom}>Report ID</div>
                </div>
                <div className={styles.frameBoxCmd}>
                  <div className={styles.frameBoxTop}>CMD</div>
                  <div className={styles.frameBoxBottom}>Byte 1</div>
                </div>
                <div className={styles.frameBoxPayload}>
                  <div className={styles.frameBoxTop}>Payload — command-specific</div>
                  <div className={styles.frameBoxBottom}>Bytes 2 – 15 (14 bytes)</div>
                </div>
                <div className={styles.frameBoxCrc}>
                  <div className={styles.frameBoxTop}>CRC-8</div>
                  <div className={styles.frameBoxBottom}>Byte 16</div>
                </div>
              </div>
              <p className={styles.frameFootnote}>
                Byte 0 identifies the report · Byte 1 selects the command · Bytes 2–15 carry the payload · Byte 16 validates integrity.
              </p>
            </div>
          </div>

          <p className={styles.archFigureCaption}>
            <strong>Figure 2 — HID frame layout.</strong> A single fixed structure carries every host-to-device command and every device-to-host report, with a trailing CRC-8 byte that both sides validate.
          </p>

          {/* TX Host Commands */}
          <div className={styles.txHeaderRow}>
            <span className={styles.txBadge}>TX →</span>
            <h3 className={styles.txTitle}>Host-to-device commands</h3>
          </div>

          <div className={styles.txPillsRow}>
            <span className={`${styles.txPill} ${styles.txPillActive}`}>GET_STATE</span>
            <span className={styles.txPill}>SET_STATE</span>
            <span className={styles.txPill}>GET_VERSION</span>
            <span className={styles.txPill}>SET_MUTE</span>
            <span className={styles.txPill}>SET_VOLUME</span>
            <span className={styles.txPill}>SET_DENOISE_LEVEL</span>
            <span className={styles.txPill}>SET_ECHO</span>
            <span className={styles.txPill}>SET_VOICE_MODE</span>
            <span className={styles.txPill}>RESET_TO_DEFAULTS</span>
          </div>

          {/* RX Device Reports */}
          <div className={styles.txHeaderRow}>
            <span className={styles.rxBadge}>← RX</span>
            <h3 className={styles.txTitle}>Device-to-host reports</h3>
          </div>

          <p className={styles.sectionParagraph}>
            Live per-transmitter state: connected, muted, denoise level, echo, voice mode, battery %, volume, and signal strength.
          </p>

          {/* HID Identifiers */}
          <h4 className={styles.hidSubheading}>HID Identifiers</h4>
          <div className={styles.hidPillsRow}>
            <span className={`${styles.txPill} ${styles.txPillActive}`}>VID 0x4C4A</span>
            <span className={styles.txPill}>PID 0x4155</span>
            <span className={styles.txPill}>Interface[3] · vendor HID</span>
          </div>

          <div className={styles.calloutDivider}>
            <span className={styles.calloutLine} />
            <p className={styles.calloutText}>DUAL-TRANSMITTER TOPOLOGY</p>
          </div>

          <p className={styles.sectionParagraph}>
            Each device supports two wireless transmitters (TX0 and TX1). The receiver reports state for both independently in every input frame; the app tracks them as separate TxState models and renders each with its own controls. Commands can be sent per-transmitter or broadcast to both at once.
          </p>

          {/* Dual Transmitter Diagram (Figure 3) */}
          <div className={styles.coralDiagramWrapper}>
            <div className={styles.topoNodeWhite}>
              <div className={styles.topoTitlePurple}>VOOK app</div>
              <div className={styles.topoSubtitle}>USB HID host</div>
            </div>

            <div className={styles.topoBidiConnector}>
              <span className={styles.topoLabelWhite}>17-byte frames</span>
              <div className={styles.topoBidiArrowRight}>⟶</div>
              <div className={styles.topoBidiArrowLeft}>⟵</div>
            </div>

            <div className={styles.topoNodeDark}>
              <div className={styles.topoTitleWhite}>RX dongle</div>
              <div className={styles.topoSubtitleLight}>USB-C receiver</div>
            </div>

            <div className={styles.topoWirelessConnector}>
              <span className={styles.topoLabelWhite}>2.4 GHz wireless</span>
              <svg className={styles.topoForkSvg} viewBox="0 0 100 80" fill="none">
                <path d="M 10 40 L 90 14" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M 10 40 L 90 66" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <defs>
                  <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="white" />
                  </marker>
                </defs>
              </svg>
            </div>

            <div className={styles.topoTxStack}>
              <div className={styles.topoTxCard}>
                <div className={styles.topoTxTitle}>TX0</div>
                <div className={styles.topoTxSubtitle}>transmitter · own TxState</div>
              </div>
              <div className={styles.topoTxCard}>
                <div className={styles.topoTxTitle}>TX1</div>
                <div className={styles.topoTxSubtitle}>transmitter · own TxState</div>
              </div>
            </div>
          </div>

          <p className={styles.archFigureCaption}>
            <strong>Figure 3 — Dual-transmitter topology.</strong> One HID channel between app and receiver carries independent state for both transmitters; the app models and controls each separately, or broadcasts to both.
          </p>

          {/* USB Dongle Photo */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src="/assets/CaseStudies/vook/vook-regression-terminal.jpg"
                alt="VOOK USB-C Receiver Dongle Firmware Bridge"
                width={1200}
                height={675}
                className={styles.photoImg}
              />
            </div>
            <div className={styles.photoEyebrow}>TOOLING</div>
            <p className={styles.photoCaption}>
              <strong>Firmware bridge.</strong> The vendor’s USB updater exposes GND / RX / TX and an update pad, used to flash and inspect firmware over a serial bridge while developing against the HID protocol.
            </p>
          </div>
        </section>

        {/* ── 7. Native Access Section ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Native Bridge</span>
          <h2 className={styles.sectionHeading}>
            Native access below; a single source of truth above.
          </h2>

          <p className={styles.sectionParagraph}>
            Everything below the Dart boundary talks directly to hardware. Everything above it only ever reads from one <code>ChangeNotifier</code> — no screen owns hardware state, and no screen talks to the dongle directly.
          </p>

          <div className={styles.twoCardGrid}>
            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconShield}`}>
                <Terminal size={22} />
              </div>
              <h3 className={styles.cardTitle}>Native platform layer — Kotlin / Swift</h3>
              <ul className={styles.cardBullets}>
                <li>Kotlin <code>UsbManager</code> / Swift <code>IOKit</code> direct interrupt-endpoint access</li>
                <li>CRC-8 frame validation before a byte ever reaches Dart</li>
                <li>MethodChannel bridge exposes typed commands, not raw bytes</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconChip}`}>
                <Activity size={22} />
              </div>
              <h3 className={styles.cardTitle}>Domain / UI layer — MicController ChangeNotifier</h3>
              <ul className={styles.cardBullets}>
                <li>Single <code>ChangeNotifier</code> is the one source of truth for TX0/TX1</li>
                <li>Optimistic UI updates before hardware acknowledges a command</li>
                <li>Suppress-window buffering absorbs stale device reports</li>
              </ul>
            </div>
          </div>

          <div className={styles.flowContainer}>
            <div className={styles.flowStep}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepTitle}>Native Platform Layer</div>
              <div className={styles.stepDetail}>Kotlin / Swift drivers read raw USB-HID interrupt reports.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepTitle}>MicController (ChangeNotifier)</div>
              <div className={styles.stepDetail}>Single domain model reconciles TX0/TX1 state and suppress windows.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepTitle}>UI Widgets</div>
              <div className={styles.stepDetail}>Purely reactive — listen to the notifier, never touch hardware.</div>
            </div>
          </div>
        </section>

        {/* ── 8. Testing & Validation ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Debugging &amp; Validation</span>
          <h2 className={styles.sectionHeading}>
            180+ automated regression tests, run over raw USB.
          </h2>

          <p className={styles.sectionParagraph}>
            Because firmware runs on a third-party chipset and the hardware engineering team operated remotely, we developed an automated Python hardware-regression test suite. This suite communicates directly with the receiver over raw USB-HID from a dev machine, isolating firmware defects from mobile app bugs and providing the firmware team with reproducible failure cases.
          </p>

          {/* Terminal Screen Photo */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src="https://images.pgagi.in/Vook/IMG_4413.jpg"
                alt="VOOK Firmware Regression Suite Terminal Output"
                width={1120}
                height={630}
                unoptimized
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              <code>run_regression.py</code> against live hardware—full STEREO, RESET, PERSISTENCE, and CRC-validation regressions passing with raw HID frame assertion.
            </p>
          </div>

          {/* Pipeline Structure / Functional Coverage */}
          <div className={styles.twoCardGrid}>
            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconShield}`}>
                <Zap size={22} />
              </div>
              <h3 className={styles.cardTitle}>Pipeline Structure</h3>
              <ul className={styles.cardBullets}>
                <li>Fixture-driven setup/teardown against live hardware</li>
                <li><code>run_regression.py</code> runs from CI or a dev bench alike</li>
                <li>Structured pass/fail report per test case with raw frame capture</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconChip}`}>
                <Radio size={22} />
              </div>
              <h3 className={styles.cardTitle}>Functional Coverage</h3>
              <ul className={styles.cardBullets}>
                <li>STEREO, RESET, and PERSISTENCE command families</li>
                <li>CRC-8 frame integrity assertions on every response</li>
                <li>Mute, gain, and denoise-level command matrices across TX0/TX1</li>
              </ul>
            </div>
          </div>

          {/* 2 Lab Photos Side-by-Side */}
          <div className={styles.twoPhotoGrid}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image
                  src="https://images.pgagi.in/Vook/IMG_4415%20(1).jpg"
                  alt="VOOK Dual Transmitters & Receiver on Test Rig"
                  width={560}
                  height={380}
                  unoptimized
                  className={styles.photoImg}
                />
              </div>
              <p className={styles.photoCaption}>
                Dual transmitters and receiver exercised against the test rig with real-time pairing telemetry.
              </p>
            </div>

            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.photoFrame}>
                <Image
                  src="https://images.pgagi.in/Vook/IMG_4401%20(1).jpg"
                  alt="VOOK Pairing & Channel Verification"
                  width={560}
                  height={380}
                  unoptimized
                  className={styles.photoImg}
                />
              </div>
              <p className={styles.photoCaption}>
                Bench tester verifying channel assignment, battery telemetry, and firmware build integrity.
              </p>
            </div>
          </div>
        </section>

        {/* ── 9. Five Reliability Problems Found Section ── */}
        <section className={styles.reliabilitySection}>
          <div className={styles.relHeader}>
            <h3>Five Reliability Problems, And How They Were Fixed.</h3>
            <p>
              Reconciling two independent state machines across an asynchronous, lossy USB channel.
            </p>
          </div>

          <div className={styles.relList}>
            {/* 5.1 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>5.1 State suppression window</h4>
              <div className={styles.relRow}>
                <span className={styles.badgeIssue}>Issue</span>
                <p className={styles.relText}>
                  The physical device takes 200ms–800ms to apply a command while continuously streaming outdated state reports over USB, causing the app UI to flicker back and forth.
                </p>
              </div>
              <div className={styles.relRow}>
                <span className={styles.badgeFix}>Fix</span>
                <p className={styles.relText}>
                  Engineered the <strong>suppress window pattern</strong>: after dispatching a command, the app updates state optimistically and drops incoming device reports for 800ms until the hardware state settles.
                </p>
              </div>
            </div>

            {/* 5.2 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>5.2 Echo rapid-tap race condition</h4>
              <div className={styles.relRow}>
                <span className={styles.badgeIssue}>Issue</span>
                <p className={styles.relText}>
                  Toggling echo effects on both transmitters in rapid succession fired two independent packets against a stale <code>GET_STATE</code> response, dropping the second command.
                </p>
              </div>
              <div className={styles.relRow}>
                <span className={styles.badgeFix}>Fix</span>
                <p className={styles.relText}>
                  Built an atomic <code>setEchoBoth</code> composite frame and introduced a 120ms hardware debounce that collapses rapid taps into a single deterministic command.
                </p>
              </div>
            </div>

            {/* 5.3 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>5.3 Noise cancellation level reset on toggle-off</h4>
              <div className={styles.relRow}>
                <span className={styles.badgeIssue}>Issue</span>
                <p className={styles.relText}>
                  Toggling noise cancellation OFF caused the state sync listener to overwrite the user&apos;s stored denoise level preference with zero.
                </p>
              </div>
              <div className={styles.relRow}>
                <span className={styles.badgeFix}>Fix</span>
                <p className={styles.relText}>
                  Guarded the state listener to update stored preferences only on non-zero values, preserving the exact configured intensity (Level 1–4) when toggled back ON.
                </p>
              </div>
            </div>

            {/* 5.4 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>5.4 Reset re-applies stale state</h4>
              <div className={styles.relRow}>
                <span className={styles.badgeIssue}>Issue</span>
                <p className={styles.relText}>
                  After executing &ldquo;Reset to Defaults&rdquo;, mute would silently re-enable within seconds because the cached last-known TX state was stale and the suppress window was too short.
                </p>
              </div>
              <div className={styles.relRow}>
                <span className={styles.badgeFix}>Fix</span>
                <p className={styles.relText}>
                  The reset routine now synchronously purges and refreshes the cache before sending the reset frame, extending the suppress window to 1500ms.
                </p>
              </div>
            </div>

            {/* 5.5 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>5.5 USB hot-plug relaunching the app on Android</h4>
              <div className={styles.relRow}>
                <span className={styles.badgeIssue}>Issue</span>
                <p className={styles.relText}>
                  Physical button presses on the transmitter caused brief USB re-enumeration, triggering Android&apos;s <code>USB_DEVICE_ATTACHED</code> intent and forcefully stealing focus from active camera apps.
                </p>
              </div>
              <div className={styles.relRow}>
                <span className={styles.badgeFix}>Fix</span>
                <p className={styles.relText}>
                  Replaced static manifest intent filters with a dynamic runtime <code>BroadcastReceiver</code>, allowing the app to claim hardware endpoints silently in the background without affecting the active video recording lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. Bottom CTA ── */}
        <div className={styles.ctaBox}>
          <h3>See what your AI product could become</h3>
          <p>
            We engineer production-grade mobile software, low-latency firmware bridges, and edge AI models for connected hardware and IoT devices.
          </p>
          <a
            href={EXTERNAL_LINKS.CALENDLY_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtnRed}
          >
            Schedule a Discovery Call <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
