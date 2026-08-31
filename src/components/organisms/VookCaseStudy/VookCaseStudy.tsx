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
          <span className={styles.eyebrowPill}>IMPLEMENTATION</span>
          <h2 className={styles.sectionHeading}>
            Native access below, a single source of truth above.
          </h2>

          <div className={styles.implCardGrid}>
            {/* Left Card: Native platform layer */}
            <div className={styles.implCard}>
              <div className={styles.implIconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M2 2H22L12 12L22 22H2V2Z" fill="url(#kotlin-grad-vook)" />
                  <defs>
                    <linearGradient id="kotlin-grad-vook" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7F52FF" />
                      <stop offset="0.5" stopColor="#E44857" />
                      <stop offset="1" stopColor="#C711E1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h3 className={styles.implCardTitle}>
                Native platform layer — UsbHidPlugin (Kotlin)
              </h3>

              <ul className={styles.implBulletList}>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    <strong>VID/PID filtering</strong> on connect events so only VOOK devices are claimed.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    Opens the HID interrupt interface (<span className={styles.greenMono}>Interface[3]</span>).
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    A dedicated <span className={styles.grayMono}>HidReadThread</span> polls continuously at ~20 ms and forwards frames to Flutter over a <span className={styles.grayMono}>MethodChannel</span>.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    Writes outbound frames synchronously; manages the USB permission flow per device.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Card: Domain layer */}
            <div className={styles.implCard}>
              <div className={styles.implIconBox}>
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="11" r="5" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.5" />
                  <rect x="7" y="18" width="18" height="8" rx="4" fill="#9333EA" />
                  <text x="16" y="24" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">Domain</text>
                  <path d="M16 6V8M21 11H23M9 11H11" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="23" cy="7" r="1.5" fill="#EC4899" />
                </svg>
              </div>

              <h3 className={styles.implCardTitle}>
                Domain layer — MicController (ChangeNotifier)
              </h3>

              <ul className={styles.implBulletList}>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    Parses every 17–byte frame into a typed <span className={styles.grayMono}>MicState</span> and exposes reactive TX state to the UI.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    Builds and writes outbound command frames.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    A suppress-window mechanism prevents incoming reports from overwriting optimistic local state right after a command.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    A background loop sends <span className={styles.blueMono}>GET_STATE</span> on a 3–second interval when no other traffic is active.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    <strong>TX reconnect logic</strong> re-sends last-known state when a transmitter reappears after going out of range.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    <strong>Reset-to-defaults</strong> sets a defined safe state with a 1500 ms suppress window to let firmware settle.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Callout */}
          <div className={styles.suppressCallout}>
            — SUPPRESS WINDOW — THE CENTRAL RELIABILITY PATTERN
          </div>

          <p className={styles.suppressDesc}>
            Each device supports two wireless transmitters (TX0 and TX1). The receiver reports state for both independently in every input frame; the app tracks them as separate TxState models and renders each with its own controls. Commands can be sent per-transmitter or broadcast to both at once.
          </p>

          {/* Figure 4 Timing Diagram */}
          <div className={styles.purpleDiagramWrapper}>
            <div className={styles.timingInner}>
              <div className={styles.timingHeader}>
                <div className={styles.pointerLeft}>
                  <span className={styles.pointerTextWhite}>SET_MUTE sent</span>
                  <div className={styles.verticalTickBlue} />
                </div>
                <div className={styles.pointerRight}>
                  <span className={styles.settledText}>settled report accepted</span>
                </div>
              </div>

              <div className={styles.barsContainer}>
                <div className={styles.settledVerticalLine} />
                <div className={styles.barOptimistic}>
                  UI shows intended state immediately (optimistic)
                </div>
                <div className={styles.barSuppress}>
                  suppress window — incoming reports ignored (800ms · 1500ms on reset)
                </div>
              </div>

              <div className={styles.timelineAxis}>
                <div className={styles.axisLine} />
                <div className={styles.dotStale} />
                <div className={styles.dotCleared} />
              </div>

              <div className={styles.axisLabelsRow}>
                <span className={styles.axisLabelT0}>t = 0</span>
                <span className={styles.axisLabelStale}>stale report (dropped)</span>
                <span className={styles.axisLabelCleared}>window cleared</span>
                <span className={styles.axisLabelTime}>time →</span>
              </div>
            </div>
          </div>

          <p className={styles.purpleFigureCaption}>
            <strong>Figure 4 — Suppress-window timing.</strong> After a command, the UI updates optimistically and incoming reports are ignored for a short window (800 ms; 1500 ms for resets). Stale reports that arrive mid-window are dropped; the first report after the window reflects the firmware’s settled state.
          </p>
        </section>

        {/* ── 8. Testing & Validation ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrowPill}>FIRMWARE QA</span>
          <h2 className={styles.sectionHeading}>
            180+ automated regression tests, run over raw USB.
          </h2>

          <p className={styles.sectionParagraph}>
            Because the firmware runs on a third-party chipset and the hardware team is remote, a Python hardware-regression suite was built to verify firmware behaviour directly over USB-HID from a development machine — independently of the Flutter app. This isolates firmware issues from app issues and gives the firmware team precise, reproducible failure cases instead of vague reports.
          </p>

          {/* Terminal Screen Photo */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src="/assets/CaseStudies/vook/vook-lab-tester.jpg"
                alt="VOOK Firmware Regression Suite Terminal Output"
                width={1200}
                height={675}
                className={styles.photoImg}
              />
            </div>
            <div className={styles.photoEyebrow}>PROOF · QA RUN</div>
            <p className={styles.photoCaption}>
              <strong>run_regression.py against live hardware.</strong> Full STEREO, RESET, PERSISTENCE and CRC-validation regressions passing — each assertion sends raw HID frames and validates the device’s response, including state persistence across polls and CRC integrity.
            </p>
          </div>

          {/* Pipeline Structure / Functional Coverage */}
          <div className={styles.implCardGrid}>
            <div className={styles.implCard}>
              <div className={styles.floatingIconWrap}>
                <svg width="42" height="32" viewBox="0 0 42 32" fill="none">
                  {/* Top server bar */}
                  <rect x="2" y="2" width="17" height="6.5" rx="2" fill="#F59E0B" />
                  <rect x="23" y="2" width="17" height="6.5" rx="2" fill="#3B82F6" />
                  <circle cx="10.5" cy="5.25" r="1.5" fill="#ffffff" />
                  <circle cx="31.5" cy="5.25" r="1.5" fill="#ffffff" />

                  {/* Middle connection */}
                  <path d="M10.5 8.5V13M31.5 8.5V13M10.5 13H31.5M21 13V17.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Bottom server bar */}
                  <rect x="2" y="17.5" width="17" height="6.5" rx="2" fill="#F59E0B" />
                  <rect x="23" y="17.5" width="17" height="6.5" rx="2" fill="#3B82F6" />
                  <circle cx="10.5" cy="20.75" r="1.5" fill="#ffffff" />
                  <circle cx="31.5" cy="20.75" r="1.5" fill="#ffffff" />

                  {/* Bottom branch node */}
                  <path d="M21 24V27.5M14 27.5H28" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="21" cy="27.5" r="2" fill="#10B981" />
                </svg>
              </div>
              <h3 className={styles.implCardTitle}>Pipeline Structure</h3>
              <ul className={styles.implBulletList}>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    <strong>180+ individual test scripts (test_01 ... test_182)</strong>, each exercising a specific capability or edge case.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    Tests send raw HID frames and validate the device’s response frames.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    A shared utility module handles USB enumeration, frame encoding, CRC calculation, and response parsing.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    run_regression.py orchestrates the full suite and prints pass/fail metrics
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.implCard}>
              <div className={styles.floatingIconWrap}>
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none">
                  <rect x="8" y="3" width="24" height="28" rx="4" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
                  <rect x="12" y="7" width="16" height="3.5" rx="1.5" fill="#0EA5E9" />
                  <line x1="12" y1="15" x2="28" y2="15" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="12" y1="20" x2="28" y2="20" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="12" y1="25" x2="22" y2="25" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="8" cy="8" r="5" fill="#10B981" />
                  <circle cx="8" cy="8" r="2.5" fill="#FBBF24" />
                  <path d="M6.5 8L7.5 9L9.5 7" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.implCardTitle}>Functional Coverage</h3>
              <ul className={styles.implBulletList}>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    <strong>Command round-trips</strong> for mute, volume, denoise, echo, and voice mode; all four denoise levels per device type.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    Echo and mute reliability over 20 rapid cycles each; reset-to-defaults returns every field to a safe state.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    <strong>TX hot-plug (transmitter disconnect/reconnect mid-session) and RX replug</strong> (receiver removed and reinserted without app restart).
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    Voice-mode persistence across TX power cycles; NC default-on workaround for a known first-connect firmware quirk.
                  </span>
                </li>
                <li className={styles.implBulletItem}>
                  <span className={styles.implCheck}>✓</span>
                  <span>
                    Idle unsolicited-report detection (12-minute passive listen) and a battery-drain baseline (10-minute polling).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2 Lab Photos Side-by-Side */}
          <div className={styles.twoPhotoGrid}>
            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.benchPhotoFrame}>
                <Image
                  src="/assets/CaseStudies/vook/vook-lab-telemetry.jpg"
                  alt="VOOK Pairing on the bench tester"
                  width={600}
                  height={375}
                  className={styles.benchPhotoImg}
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <div className={styles.photoEyebrow}>BENCH</div>
              <p className={styles.photoCaption}>
                Pairing on the bench tester — CH2 connecting to a transmitter by address.
              </p>
            </div>

            <div className={styles.photoWrapper} style={{ margin: 0 }}>
              <div className={styles.benchPhotoFrame}>
                <Image
                  src="/assets/CaseStudies/vook/vook-usb-bridge.jpg"
                  alt="VOOK Both transmitters and receiver exercised against the rig"
                  width={600}
                  height={375}
                  className={styles.benchPhotoImg}
                  style={{ objectPosition: 'center 65%' }}
                />
              </div>
              <div className={styles.photoEyebrow}>BENCH</div>
              <p className={styles.photoCaption}>
                Both transmitters and receiver exercised against the rig during regression.
              </p>
            </div>
          </div>
        </section>

        {/* ── 9. Five Reliability Problems Found Section ── */}
        <section className={styles.sectionBlock}>
          {/* Dark Banner */}
          <div className={styles.darkBanner}>
            <div className={styles.darkContent}>
              <span className={styles.darkEyebrow}>ENGINEERING PROBLEMS SOLVED</span>
              <h2 className={styles.darkTitle}>
                Five Reliability Problems, And
                <br />
                How They Were Fixed.
              </h2>
              <p className={styles.darkDesc}>
                Controlling hardware from a mobile app means reconciling two independent state machines across an asynchronous, lossy channel. Most of the difficult bugs lived in that gap. Each was reproduced in the Python suite before being fixed in the app.
              </p>
            </div>
          </div>

          {/* Five Problem / Solution Blocks */}
          <div className={styles.problemsList}>
            {/* 5.1 */}
            <div className={styles.problemItem}>
              <h3 className={styles.problemItemTitle}>5.1 // State suppression window</h3>
              <div className={styles.problemBox}>
                <div className={styles.problemBoxLabel}>Problem //</div>
                <p className={styles.problemBoxText}>
                  After a command, the device takes ~200–800 ms to apply it and keeps reporting the old state meanwhile. The optimistic UI update was immediately overwritten by the stale report, causing toggles to snap back.
                </p>
              </div>
              <div className={styles.solutionBox}>
                <div className={styles.solutionBoxLabel}>Solution //</div>
                <p className={styles.solutionBoxText}>
                  A suppress-window timer blocks incoming state from overwriting local state for a configurable duration (default 800 ms, 1500 ms for resets). The UI shows the intended state at once; the first report after the window reflects the settled firmware state.
                </p>
              </div>
            </div>

            {/* 5.2 */}
            <div className={styles.problemItem}>
              <h3 className={styles.problemItemTitle}>5.2 // Echo rapid-tap race condition</h3>
              <div className={styles.problemBox}>
                <div className={styles.problemBoxLabel}>Problem //</div>
                <p className={styles.problemBoxText}>
                  Setting echo on both transmitters sequentially fired two commands ~10 ms apart; each reset the suppress timer, and interleaving with a stale GET_STATE left one TX in the wrong state, self-correcting only seconds later.
                </p>
              </div>
              <div className={styles.solutionBox}>
                <div className={styles.solutionBoxLabel}>Solution //</div>
                <p className={styles.solutionBoxText}>
                  An atomic setEchoBoth frame sets both transmitters at once, and a 120 ms debounce collapses rapid taps into a single hardware command rather than a queue of frames.
                </p>
              </div>
            </div>

            {/* 5.3 */}
            <div className={styles.problemItem}>
              <h3 className={styles.problemItemTitle}>5.3 // Noise-cancellation level lost on toggle-off</h3>
              <div className={styles.problemBox}>
                <div className={styles.problemBoxLabel}>Problem //</div>
                <p className={styles.problemBoxText}>
                  The NC level (Low/Medium/High) was stored separately from the on/off state. Turning NC off (level = 0) let the sync listener overwrite the stored preference with 0, so turning it back on defaulted to Low.
                </p>
              </div>
              <div className={styles.solutionBox}>
                <div className={styles.solutionBoxLabel}>Solution //</div>
                <p className={styles.solutionBoxText}>
                  The sync listener was guarded to update the stored level only when the incoming denoise level is non-zero, preserving the last configured level so “resume” restores the user’s previous setting.
                </p>
              </div>
            </div>

            {/* 5.4 */}
            <div className={styles.problemItem}>
              <h3 className={styles.problemItemTitle}>5.4 // Reset re-applies stale state</h3>
              <div className={styles.problemBox}>
                <div className={styles.problemBoxLabel}>Problem //</div>
                <p className={styles.problemBoxText}>
                  After “Reset to Defaults”, mute would turn back on within seconds: the cached last-known-TX state (used to restore settings on reconnect) wasn’t updated during reset, and a 500 ms suppress window was too short, letting a background poll scrape stale values.
                </p>
              </div>
              <div className={styles.solutionBox}>
                <div className={styles.solutionBoxLabel}>Solution //</div>
                <p className={styles.solutionBoxText}>
                  The reset routine now updates the last-known-TX cache to the post-reset defaults before sending the command, and the suppress window was extended to 1500 ms for all reset operations.
                </p>
              </div>
            </div>

            {/* 5.5 */}
            <div className={styles.problemItem}>
              <h3 className={styles.problemItemTitle}>5.5 // USB hot-plug relaunching the app on Android</h3>
              <div className={styles.problemBox}>
                <div className={styles.problemBoxLabel}>Problem //</div>
                <p className={styles.problemBoxText}>
                  Pressing the physical TX button briefly re-enumerates the USB device. With a USB_DEVICE_ATTACHED intent filter in the manifest, every re-enumeration forced the app into the foreground, disrupting the third-party recording app in use.
                </p>
              </div>
              <div className={styles.solutionBox}>
                <div className={styles.solutionBoxLabel}>Solution //</div>
                <p className={styles.solutionBoxText}>
                  The manifest intent filter was removed and detection moved entirely to a runtime BroadcastReceiver that handles hot-plug silently — claiming the device without changing the activity lifecycle or hijacking focus.
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
