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
          <span className={styles.eyebrow}>Architecture</span>
          <h2 className={styles.sectionHeading}>
            Feature-first clean architecture on Flutter.
          </h2>

          <p className={styles.sectionParagraph}>
            The application follows a clean feature-first architecture, maintaining distinct presentation, domain, and data layers inside each module, backed by a native platform layer for direct hardware access. This separation keeps hardware-control logic isolated from UI rendering—the <code>mic_controls</code> module manages device domain state independently of the active screen.
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
              mic_controls holds the device-state domain — the core HID business logic — kept deliberately separate from the screens that render it
            </p>
          </div>

          {/* Presentation -> Domain -> Data -> Platform Flow */}
          <div className={styles.flowContainer}>
            <div className={styles.flowStep}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepTitle}>Presentation</div>
              <div className={styles.stepDetail}>Screens, widgets, screen-scoped state.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepTitle}>Domain</div>
              <div className={styles.stepDetail}>ChangeNotifiers, use-cases, application rules.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepTitle}>Data</div>
              <div className={styles.stepDetail}>Repositories, HID data sources, local cache.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepTitle}>Platform</div>
              <div className={styles.stepDetail}>Native Kotlin / Swift USB-HID bridge to the dongle.</div>
            </div>
          </div>
        </section>

        {/* ── 5. Dark Feature Banner ── */}
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

        {/* ── 6. USB HID Host Section ── */}
        <section className={styles.sectionBlock}>
          <span className={styles.eyebrow}>USB Protocol</span>
          <h2 className={styles.sectionHeading}>
            The app is a USB HID host, not an audio client.
          </h2>

          <p className={styles.sectionParagraph}>
            Standard audio APIs never see the receiver as a control surface — they only expose it as a playback device. VOOK instead claims the dongle&apos;s vendor-specific HID interface directly, reading and writing raw interrupt-endpoint frames rather than routing anything through the audio stack.
          </p>

          <div className={styles.compareGrid3}>
            <div className={styles.compareCard}>
              <span className={styles.compareLabel}>Audio</span>
              <p className={styles.compareDesc}>Playback only — no command channel, no device reports</p>
            </div>
            <div className={`${styles.compareCard} ${styles.compareActive}`}>
              <span className={styles.compareLabel}>USB</span>
              <p className={styles.compareDesc}>Vendor-specific HID interrupt endpoint — the real control path</p>
            </div>
            <div className={styles.compareCard}>
              <span className={styles.compareLabel}>Payload</span>
              <p className={styles.compareDesc}>Command-specific 17-byte frame, not raw PCM</p>
            </div>
          </div>

          <p className={styles.sectionParagraph}>
            Reach — no device commands over Bluetooth or standard audio routing. Device — no off-the-shelf HID report descriptors either; every field in the frame is vendor-defined and reverse-engineered against the chipset.
          </p>

          {/* VOOK App -> Dongle -> TX0/TX1 Diagram */}
          <div className={styles.flowContainer}>
            <div className={styles.flowStep}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepTitle}>VOOK App</div>
              <div className={styles.stepDetail}>Dispatches 17-byte command frames over the HID interrupt endpoint.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowStep}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepTitle}>USB-HID Dongle</div>
              <div className={styles.stepDetail}>Validates CRC-8 and routes the frame to the addressed transmitter.</div>
            </div>

            <div className={styles.flowArrow}>↓</div>

            <div className={styles.flowBranch}>
              <div className={styles.flowStep}>
                <div className={styles.stepNum}>TX0</div>
                <div className={styles.stepTitle}>Transmitter 0</div>
                <div className={styles.stepDetail}>Independent mute, gain, and denoise state.</div>
              </div>
              <div className={styles.flowStep}>
                <div className={styles.stepNum}>TX1</div>
                <div className={styles.stepTitle}>Transmitter 1</div>
                <div className={styles.stepDetail}>Independent mute, gain, and denoise state.</div>
              </div>
            </div>
          </div>

          {/* USB Dongle Photo */}
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
