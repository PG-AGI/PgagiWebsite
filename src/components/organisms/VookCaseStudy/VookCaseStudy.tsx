'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Shield, 
  Cpu, 
  ArrowRight, 
  ExternalLink, 
  Radio, 
  Sliders, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Layers,
  Zap,
  Activity
} from 'lucide-react';
import styles from '@/styles/components/organisms/VookCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

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
                  src="https://images.pgagi.in/Case%20Studies/Vook.jpg"
                  alt="VOOK AI Mobile Companion App Preview"
                  fill
                  priority
                  unoptimized
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
            Engineering the companion app for next-gen wireless audio hardware.
          </h2>

          <p className={styles.sectionParagraph}>
            <strong>VOOK</strong> is a wireless microphone ecosystem that turns a smartphone into a professional audio control surface. The hardware—a dual-transmitter wireless microphone system with a USB-C receiver dongle—pairs with the VOOK companion app so content creators can control their microphones in real time from the same mobile device they record on, then apply AI audio post-processing to the captured result.
          </p>

          <p className={styles.sectionParagraph}>
            The app is built on a clean cross-platform architecture with native Kotlin (Android) and Swift (iOS) layers handling direct USB-HID hardware access. A Python FastAPI backend powers AI denoising and account management, while a from-scratch Python regression suite of 180+ automated tests validates firmware behaviour independently of the app itself.
          </p>

          {/* 4 Metric Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <span className={styles.statValue}>95%</span>
              <span className={styles.statLabel}>Sound Clarity & Noise Suppression</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>&lt;15ms</span>
              <span className={styles.statLabel}>Ultra-Low Latency Round-Trip Control</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>2×</span>
              <span className={styles.statLabel}>Battery Optimization & Efficiency</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>180+</span>
              <span className={styles.statLabel}>Automated Firmware Regression Tests</span>
            </div>
          </div>

          {/* Hardware Photo */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src="https://images.pgagi.in/Vook/IMG_4401%20(1).jpg"
                alt="VOOK Hardware Bring-up & Pairing Validation"
                width={1120}
                height={630}
                unoptimized
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              Hardware bring-up: two transmitter units alongside the chipset vendor&apos;s bench tester, reporting per-channel search state and firmware pairing.
            </p>
          </div>

          {/* 2 Feature Cards */}
          <div className={styles.twoCardGrid}>
            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconShield}`}>
                <Shield size={22} />
              </div>
              <h3 className={styles.cardTitle}>Real-Time AI Noise Suppression</h3>
              <ul className={styles.cardBullets}>
                <li>4 configurable levels of on-device neural noise reduction</li>
                <li>Studio-grade spectral subtraction and vocal isolation</li>
                <li>Preserves acoustic warmth while removing room reflections and wind</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconChip}`}>
                <Cpu size={22} />
              </div>
              <h3 className={styles.cardTitle}>Seamless Hardware-to-App Sync</h3>
              <ul className={styles.cardBullets}>
                <li>Instant USB-HID device enumeration on physical plug-in</li>
                <li>Simultaneous independent state tracking for TX0 and TX1</li>
                <li>Zero audio interruption to background video and camera recording apps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 4. The Challenge Section ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>The Challenge</span>
          <h2 className={styles.sectionHeading}>
            Overcoming Ultra-Low Latency & Hardware Fragmentation
          </h2>

          <p className={styles.sectionParagraph}>
            Controlling hardware in real-time over USB while a smartphone records high-bitrate 4K video presents severe architectural hurdles. Standard audio APIs do not expose internal hardware registers, and standard Bluetooth GATT profiles introduce 100ms+ latency spikes. The companion app had to act as a custom <strong>USB-HID host</strong>, reconcile dual-transmitter state machines across an asynchronous channel, and survive aggressive mobile OS power management without interrupting video capture.
          </p>

          {/* Comparison Table */}
          <div className={styles.tableOuter}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Architectural Dimension</th>
                  <th>Standard Bluetooth Audio</th>
                  <th className={styles.vookCol}>VOOK Custom Pipeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Control Protocol</strong></td>
                  <td>BLE GATT (High overhead & packet drops)</td>
                  <td className={styles.vookCol}>17-Byte Binary HID Frames with CRC-8 Checksum</td>
                </tr>
                <tr>
                  <td><strong>Control Round-Trip Latency</strong></td>
                  <td>120ms – 250ms delay</td>
                  <td className={styles.vookCol}>&lt; 15ms Deterministic Immediate Response</td>
                </tr>
                <tr>
                  <td><strong>Dual-Transmitter Tracking</strong></td>
                  <td>Serial polling / single channel collapse</td>
                  <td className={styles.vookCol}>Simultaneous Independent TX0 / TX1 State Models</td>
                </tr>
                <tr>
                  <td><strong>Background Reliability</strong></td>
                  <td>Vulnerable to OS battery killing</td>
                  <td className={styles.vookCol}>Native BroadcastReceiver & Silent Claiming</td>
                </tr>
                <tr>
                  <td><strong>AI Audio Post-Processing</strong></td>
                  <td>Device-bound or manual export</td>
                  <td className={styles.vookCol}>Asynchronous Cloud S3 Pipeline with Presigned URLs</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2 Detail Cards */}
          <div className={styles.twoCardGrid}>
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <span>17-Byte Binary HID Protocol Spec</span>
                <span>VID: 0x4C4A | PID: 0x4155</span>
              </div>
              <div className={styles.codeRow}>
                <span className={styles.codeKey}>Byte 00:</span>
                <span className={styles.codeVal}>Report ID</span>
                <span className={styles.codeDesc}>// Vendor specific report type</span>
              </div>
              <div className={styles.codeRow}>
                <span className={styles.codeKey}>Byte 01:</span>
                <span className={styles.codeVal}>Command</span>
                <span className={styles.codeDesc}>// SET_MUTE, SET_ECHO, SET_DENOISE</span>
              </div>
              <div className={styles.codeRow}>
                <span className={styles.codeKey}>Byte 02-15:</span>
                <span className={styles.codeVal}>Payload</span>
                <span className={styles.codeDesc}>// Target TX, dB level, telemetry</span>
              </div>
              <div className={styles.codeRow}>
                <span className={styles.codeKey}>Byte 16:</span>
                <span className={styles.codeVal}>CRC-8</span>
                <span className={styles.codeDesc}>// Dallas/Maxim integrity validation</span>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconShield}`}>
                <Layers size={22} />
              </div>
              <h3 className={styles.cardTitle}>One Codebase, Three Product Lines</h3>
              <p className={styles.sectionParagraph} style={{ marginBottom: 12 }}>
                A single mobile codebase and firmware protocol powers the entire VOOK hardware product family:
              </p>
              <ul className={styles.cardBullets}>
                <li><strong>MiniMic:</strong> Ultra-compact clip-on mic for mobile vloggers</li>
                <li><strong>AirMic:</strong> Over-collar transmitter with K6 chipset</li>
                <li><strong>ClipX:</strong> Broadcast-grade lavalier with D11 dual-DSP chipset</li>
              </ul>
            </div>
          </div>

          {/* ── 5. System Architecture Flow ── */}
          <div className={styles.flowContainer}>
            <h3 style={{ margin: '0 0 16px', fontSize: '1.25rem', fontWeight: 700, color: '#0F172A' }}>
              End-to-End Audio & Control Pipeline
            </h3>
            
            <div className={styles.flowStep}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepTitle}>Microphone Input</div>
              <div className={styles.stepDetail}>Dual MEMS array captures acoustic audio and transmits over 2.4GHz RF.</div>
            </div>
            
            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepTitle}>USB-C Receiver Dongle</div>
              <div className={styles.stepDetail}>Dongle exposes USB Audio Class + Vendor HID Interface (17-byte frames).</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepTitle}>Native Platform Bridge</div>
              <div className={styles.stepDetail}>Kotlin / Swift drivers handle USB interrupt endpoints and CRC-8 frame validation.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepTitle}>VOOK Companion App</div>
              <div className={styles.stepDetail}>Optimistic UI updates, suppress-window buffering, and real-time gain/denoise control.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>5</div>
              <div className={styles.stepTitle}>Cloud AI Audio Pipeline</div>
              <div className={styles.stepDetail}>Async S3 staging with deep learning denoising models and instant A/B waveform comparison.</div>
            </div>
          </div>

          {/* ── 6. Dark Feature Banner ── */}
          <div className={styles.darkBanner}>
            <div className={styles.darkContent}>
              <h2 className={styles.darkTitle}>USB-HID Hardware Integration</h2>
              <p className={styles.darkDesc}>
                Deep integration with native USB HAL on Android and iOS to achieve deterministic, zero-latency hardware control.
              </p>
              <div className={styles.darkPills}>
                <span className={styles.darkPill}>Direct Interrupt Endpoints</span>
                <span className={styles.darkPill}>17-Byte CRC-8 Maxim Frames</span>
                <span className={styles.darkPill}>Optimistic UI with 800ms Suppress Window</span>
                <span className={styles.darkPill}>Lossless Dual-TX Telemetry</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Core Architecture Section ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Core Architecture</span>
          <h2 className={styles.sectionHeading}>
            Designing a Zero-Latency Audio Processing Stack
          </h2>

          <p className={styles.sectionParagraph}>
            The application follows a clean feature-first architecture, maintaining distinct presentation, domain, and data layers inside each module, backed by a native platform layer for direct hardware access. This separation keeps hardware-control logic isolated from UI rendering—the <code>mic_controls</code> module manages device domain state independently of the active screen.
          </p>

          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <Image
                src="https://images.pgagi.in/Vook/IMG_4409%20(1).jpg"
                alt="VOOK USB-C Receiver Dongle Firmware Bridge"
                width={1120}
                height={630}
                unoptimized
                className={styles.photoImg}
              />
            </div>
            <p className={styles.photoCaption}>
              Firmware bridge: the vendor&apos;s USB updater exposes serial pads (GND, RX, TX) used to flash and inspect firmware during HID protocol development.
            </p>
          </div>
        </section>

        {/* ── 8. Firmware & DSP Co-Design ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Firmware & DSP</span>
          <h2 className={styles.sectionHeading}>
            Software-Hardware Co-Design for Pro Audio
          </h2>

          <div className={styles.twoCardGrid}>
            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconShield}`}>
                <Radio size={22} />
              </div>
              <h3 className={styles.cardTitle}>Dual-Transmitter Synchronization</h3>
              <ul className={styles.cardBullets}>
                <li>Independent battery, mute, and gain status for TX0 and TX1</li>
                <li>Instant stereo / mono channel splitting at 48kHz / 24-bit</li>
                <li>Dynamic RF frequency hopping against 2.4GHz WiFi congestion</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.cardIconWrap} ${styles.iconChip}`}>
                <Sparkles size={22} />
              </div>
              <h3 className={styles.cardTitle}>Cloud AI Post-Processing Engine</h3>
              <ul className={styles.cardBullets}>
                <li>Presigned S3 staging with asynchronous background polling</li>
                <li>A/B trial demo player with sample-accurate synchronized timestamps</li>
                <li>Waveform rendering and multi-format audio export (WAV/MP3/AAC)</li>
              </ul>
            </div>
          </div>

          {/* DSP Magenta / Purple Tuning Block */}
          <div className={styles.dspBlock}>
            <div className={styles.dspHeader}>
              <h3>Real-Time Audio Parameter Tuning & DSP Staging</h3>
              <span className={styles.dspBadge}>LIVE DSP TELEMETRY</span>
            </div>
            <div className={styles.dspGrid}>
              <div className={styles.dspCard}>
                <div className={styles.dspLabel}>Sample Rate & Depth</div>
                <div className={styles.dspValue}>48 kHz / 24-bit PCM</div>
              </div>
              <div className={styles.dspCard}>
                <div className={styles.dspLabel}>Dynamic Range</div>
                <div className={styles.dspValue}>114 dB SNR</div>
              </div>
              <div className={styles.dspCard}>
                <div className={styles.dspLabel}>THD+N Distortion</div>
                <div className={styles.dspValue}>&lt; 0.005% @ 1kHz</div>
              </div>
              <div className={styles.dspCard}>
                <div className={styles.dspLabel}>Spectral Subtraction</div>
                <div className={styles.dspValue}>Active Neural Filter</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. Testing & Validation ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>Debugging & Validation</span>
          <h2 className={styles.sectionHeading}>
            Rigorous Hardware Validation Across 50+ Mobile Devices
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

        {/* ── 10. Five Reliability Problems Found Section ── */}
        <section className={styles.reliabilitySection}>
          <div className={styles.relHeader}>
            <h3>Five Reliability Problems Found. How They Were Fixed.</h3>
            <p>
              Reconciling two independent state machines across an asynchronous, lossy USB channel.
            </p>
          </div>

          <div className={styles.relList}>
            {/* Problem 1 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>1. Command State Latency Race</h4>
              <div className={styles.relRow}>
                <span className={styles.badgeIssue}>Issue</span>
                <p className={styles.relText}>
                  The physical device takes 200ms–800ms to apply a command while continuously streaming outdated state reports over USB, causing the app UI to flicker back and forth.
                </p>
              </div>
              <div className={styles.relRow}>
                <span className={styles.badgeFix}>Fix</span>
                <p className={styles.relText}>
                  Engineered the <strong>Suppress Window pattern</strong>: after dispatching a command, the app updates state optimistically and drops incoming device reports for 800ms (1500ms for resets) until the hardware state settles.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>2. Rapid Echo / Denoise Toggle Collision</h4>
              <div className={styles.relRow}>
                <span className={styles.badgeIssue}>Issue</span>
                <p className={styles.relText}>
                  Toggling effects on both transmitters in rapid succession fired two independent packets against a stale <code>GET_STATE</code> response, dropping the second command.
                </p>
              </div>
              <div className={styles.relRow}>
                <span className={styles.badgeFix}>Fix</span>
                <p className={styles.relText}>
                  Built an atomic <code>setEchoBoth</code> composite frame and introduced a 120ms hardware debounce that collapses rapid user taps into a single deterministic command.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>3. Noise Cancellation Level Preference Wipe</h4>
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

            {/* Problem 4 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>4. Post-Reset Silent Mute Re-enablement</h4>
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

            {/* Problem 5 */}
            <div className={styles.relCard}>
              <h4 className={styles.relTitle}>5. USB Re-enumeration Interrupting Recording Apps</h4>
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

        {/* ── 11. Bottom CTA ── */}
        <div className={styles.ctaBox}>
          <h3>Transform your hardware product with custom AI companion apps.</h3>
          <p>
            We engineer production-grade mobile software, low-latency firmware bridges, and edge AI models for connected hardware and IoT devices.
          </p>
          <a
            href="https://calendly.com/sahil-pgagi/30min"
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
