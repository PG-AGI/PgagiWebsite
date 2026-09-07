'use client';

import React from 'react';
import styles from '@/styles/components/organisms/CrackedCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface CrackedCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

// ── SVG Diagram 1: The Capability Abstraction ──
function Figure1CapabilityAbstraction() {
  return (
    <div className={styles.figureCard}>
      <svg
        viewBox="0 0 930 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.figureSvg}
      >
        <defs>
          <marker
            id="cracked-arrow"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 2 L 8 5 L 1 8 Z" fill="#D9532F" />
          </marker>
          <marker
            id="cracked-arrow-gray"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 2 L 8 5 L 1 8 Z" fill="#AFA99E" />
          </marker>
        </defs>

        {/* 1. Left: ONE CALL Box */}
        <rect x="15" y="98" width="168" height="56" rx="18" fill="#0E0F12" />
        <text x="99" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700" letterSpacing="0.06em" fontFamily="inherit">
          ONE CALL
        </text>
        <text x="99" y="139" textAnchor="middle" fill="#E4E4E7" fontSize="10.5" fontFamily="monospace">
          capability: &quot;web-search&quot;
        </text>

        {/* Orange Arrow to Candidate Ranking */}
        <line x1="183" y1="126" x2="236" y2="126" stroke="#D9532F" strokeWidth="2" markerEnd="url(#cracked-arrow)" />

        {/* 2. Middle: CANDIDATE RANKING Box */}
        <rect x="238" y="62" width="178" height="136" rx="14" fill="#D9532F" />
        <text x="327" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" letterSpacing="0.06em" fontFamily="inherit">
          CANDIDATE RANKING
        </text>
        <text x="327" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="400" fontFamily="inherit">
          excluded: offline, missing,
        </text>
        <text x="327" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="400" fontFamily="inherit">
          in outage, unverified
        </text>
        <text x="327" y="142" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="400" fontFamily="inherit">
          ordered: last-resort last →
        </text>
        <text x="327" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="400" fontFamily="inherit">
          verified first → health class
        </text>
        <text x="327" y="170" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="400" fontFamily="inherit">
          → lower price → catalog order
        </text>

        {/* Connecting Lines from Ranking to Candidates */}
        <line x1="416" y1="92" x2="475" y2="48" stroke="#D9532F" strokeWidth="2" markerEnd="url(#cracked-arrow)" />
        <line x1="416" y1="116" x2="482" y2="105" stroke="#AFA99E" strokeWidth="1.5" markerEnd="url(#cracked-arrow-gray)" />
        <line x1="416" y1="142" x2="482" y2="157" stroke="#AFA99E" strokeWidth="1.5" markerEnd="url(#cracked-arrow-gray)" />
        <line x1="416" y1="168" x2="480" y2="216" stroke="#AFA99E" strokeWidth="1.5" markerEnd="url(#cracked-arrow-gray)" />

        {/* 3. Candidate Nodes */}
        {/* Tavily (Selected) */}
        <rect x="460" y="24" width="206" height="48" rx="16" fill="#0E0F12" />
        <text x="563" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="inherit">
          Tavily · Agent web search
        </text>
        <text x="563" y="60" textAnchor="middle" fill="#D4D4D8" fontSize="10" fontWeight="400" fontFamily="inherit">
          $0.010 / call · 100% over 9 runs
        </text>

        {/* Exa */}
        <rect x="484" y="84" width="158" height="42" rx="16" fill="#FFFFFF" stroke="#E2DDD5" strokeWidth="1" />
        <text x="563" y="101" textAnchor="middle" fill="#111113" fontSize="10.5" fontWeight="600" fontFamily="inherit">
          Exa · Neural search
        </text>
        <text x="563" y="115" textAnchor="middle" fill="#52525B" fontSize="10" fontWeight="400" fontFamily="inherit">
          $0.010 / call · verified
        </text>

        {/* Serper */}
        <rect x="484" y="136" width="158" height="42" rx="16" fill="#FFFFFF" stroke="#E2DDD5" strokeWidth="1" />
        <text x="563" y="153" textAnchor="middle" fill="#111113" fontSize="10.5" fontWeight="600" fontFamily="inherit">
          Serper · Google results
        </text>
        <text x="563" y="167" textAnchor="middle" fill="#52525B" fontSize="10" fontWeight="400" fontFamily="inherit">
          $0.0040 / call · live
        </text>

        {/* +4 Further */}
        <rect x="480" y="194" width="166" height="44" rx="14" fill="#ECE5DA" stroke="#DCD5C9" strokeWidth="1" />
        <text x="563" y="212" textAnchor="middle" fill="#3F3931" fontSize="10.5" fontWeight="600" fontFamily="inherit">
          + 4 further candidates
        </text>
        <text x="563" y="226" textAnchor="middle" fill="#6B655D" fontSize="9.5" fontWeight="400" fontFamily="inherit">
          ranked but not selected
        </text>

        {/* Solid orange arrow from Selected Tavily to Right Box */}
        <line x1="666" y1="48" x2="738" y2="108" stroke="#D9532F" strokeWidth="2" markerEnd="url(#cracked-arrow)" />
        {/* Dashed gray fallbacks from Exa/Serper */}
        <line x1="642" y1="105" x2="728" y2="123" stroke="#AFA99E" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#cracked-arrow-gray)" />
        <line x1="642" y1="157" x2="728" y2="141" stroke="#AFA99E" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#cracked-arrow-gray)" />

        {/* 4. Right: SELECTED Box */}
        <rect x="730" y="96" width="186" height="64" rx="18" fill="#0E0F12" />
        <text x="823" y="117" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700" letterSpacing="0.06em" fontFamily="inherit">
          SELECTED
        </text>
        <text x="823" y="135" textAnchor="middle" fill="#D4D4D8" fontSize="10" fontWeight="400" fontFamily="inherit">
          best live tool, billed on success
        </text>
        <text x="823" y="149" textAnchor="middle" fill="#D4D4D8" fontSize="10" fontWeight="400" fontFamily="inherit">
          fallback ready if it fails
        </text>
      </svg>
      <div className={styles.figureCaption}>
        Figure 1 — The capability abstraction: 159 named tasks resolving to 336 candidate endpoints across 77 providers.
      </div>
    </div>
  );
}

// ── SVG Diagram 2: Core Architecture Across Six Sequential Planes ──
function Figure2CoreArchitecture() {
  return (
    <div className={styles.figureCard}>
      <svg
        viewBox="0 0 860 840"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.figureSvg}
      >
        <defs>
          <marker
            id="arch-arrow"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 2 L 8 5 L 1 8 Z" fill="#D9532F" />
          </marker>
        </defs>

        {/* ── PLANE 01: CALLER SURFACE ── */}
        <rect x="20" y="10" width="820" height="100" rx="8" fill="#F4EFEA" stroke="#E6DFD5" strokeWidth="1.5" />
        <text x="40" y="32" fill="#71717A" fontSize="11" fontWeight="800" letterSpacing="0.14em" fontFamily="inherit">
          01 · CALLER SURFACE
        </text>
        {/* 4 Cards */}
        <rect x="40" y="44" width="180" height="52" rx="6" fill="#0E0F12" />
        <text x="130" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="inherit">Agent runtimes</text>
        <text x="130" y="82" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="inherit">Claude Code · Cursor · CrewAI</text>

        <rect x="235" y="44" width="180" height="52" rx="6" fill="#0E0F12" />
        <text x="325" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="inherit">MCP server</text>
        <text x="325" y="82" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="inherit">tools/list · tools/call</text>

        <rect x="430" y="44" width="195" height="52" rx="6" fill="#D9532F" />
        <text x="527" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="inherit">Keyless self-signup</text>
        <text x="527" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="500" fontFamily="monospace">POST /v1/run · $2 grant</text>

        <rect x="640" y="44" width="180" height="52" rx="6" fill="#0E0F12" />
        <text x="730" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="inherit">Human dashboard</text>
        <text x="730" y="82" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="inherit">fund · govern · audit</text>

        {/* Down Arrow 1 */}
        <line x1="430" y1="110" x2="430" y2="134" stroke="#D9532F" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

        {/* ── PLANE 02: GATEWAY ── */}
        <rect x="20" y="136" width="820" height="100" rx="8" fill="#F4EFEA" stroke="#E6DFD5" strokeWidth="1.5" />
        <text x="40" y="158" fill="#71717A" fontSize="11" fontWeight="800" letterSpacing="0.14em" fontFamily="inherit">
          02 · GATEWAY — every /v1/run passes these gates in order
        </text>
        {/* 5 Cards */}
        <rect x="35" y="170" width="145" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="107" y="192" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Key resolve</text>
        <text x="107" y="208" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">SHA-256 hash</text>

        <rect x="195" y="170" width="145" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="267" y="192" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Rate limit</text>
        <text x="267" y="208" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">per key / IP hash</text>

        <rect x="355" y="170" width="150" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="430" y="192" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Policy + freeze</text>
        <text x="430" y="208" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">allow · deny · hours</text>

        <rect x="520" y="170" width="145" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="592" y="192" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Budget hold</text>
        <text x="592" y="208" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">max_cost_usd · caps</text>

        <rect x="680" y="170" width="145" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="752" y="192" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Result cache</text>
        <text x="752" y="208" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">600 s · fee only</text>

        {/* Down Arrow 2 */}
        <line x1="430" y1="236" x2="430" y2="260" stroke="#D9532F" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

        {/* ── PLANE 03: SMART ROUTER ── */}
        <rect x="20" y="262" width="820" height="100" rx="8" fill="#F4EFEA" stroke="#E6DFD5" strokeWidth="1.5" />
        <text x="40" y="284" fill="#71717A" fontSize="11" fontWeight="800" letterSpacing="0.14em" fontFamily="inherit">
          03 · SMART ROUTER — one call names the task, not the tool
        </text>
        {/* 4 Cards */}
        <rect x="35" y="296" width="185" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="127" y="318" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Capability table</text>
        <text x="127" y="334" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">159 tasks · 336 candidates</text>

        <rect x="235" y="296" width="195" height="52" rx="6" fill="#D9532F" />
        <text x="332" y="318" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="inherit">Candidate ranking</text>
        <text x="332" y="334" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="inherit">verified → health → price</text>

        <rect x="445" y="296" width="185" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="537" y="318" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Fallback chain</text>
        <text x="537" y="334" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">up to 3 candidates</text>

        <rect x="645" y="296" width="180" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="735" y="318" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Waterfall executor</text>
        <text x="735" y="334" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">cheapest-first · free miss</text>

        {/* Down Arrow 3 */}
        <line x1="430" y1="362" x2="430" y2="386" stroke="#D9532F" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

        {/* ── PLANE 04: CREDENTIAL PLANE ── */}
        <rect x="20" y="388" width="820" height="100" rx="8" fill="#F4EFEA" stroke="#E6DFD5" strokeWidth="1.5" />
        <text x="40" y="410" fill="#71717A" fontSize="11" fontWeight="800" letterSpacing="0.14em" fontFamily="inherit">
          04 · CREDENTIAL PLANE — resolved after every gate, decrypted only inside the run
        </text>
        {/* 4 Cards */}
        <rect x="35" y="422" width="185" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="127" y="444" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Master accounts</text>
        <text x="127" y="460" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">env-held · cost +15%</text>

        <rect x="235" y="422" width="195" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="332" y="444" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">BYOK credentials</text>
        <text x="332" y="460" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">AES-256-GCM · fee only</text>

        <rect x="445" y="422" width="185" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="537" y="444" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Vault relay</text>
        <text x="537" y="460" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">write-only secrets</text>

        <rect x="645" y="422" width="180" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="735" y="444" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Private runner</text>
        <text x="735" y="460" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">customer network egress</text>

        {/* Down Arrow 4 */}
        <line x1="430" y1="488" x2="430" y2="512" stroke="#D9532F" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

        {/* ── PLANE 05: PROVIDER FABRIC (Dark Container) ── */}
        <rect x="20" y="514" width="820" height="106" rx="8" fill="#0D0D0E" stroke="#27272A" strokeWidth="1.5" />
        <text x="40" y="538" fill="#A1A1AA" fontSize="11" fontWeight="800" letterSpacing="0.14em" fontFamily="inherit">
          05 · PROVIDER FABRIC — 69,826 tools · 1,249 providers
        </text>
        {/* 4 Dark Cards */}
        <rect x="35" y="550" width="185" height="54" rx="6" fill="#18181B" stroke="#27272A" strokeWidth="1" />
        <text x="127" y="572" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700" fontFamily="inherit">Scrape &amp; crawl</text>
        <text x="127" y="589" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="inherit">Apify · Firecrawl · Browserbase</text>

        <rect x="235" y="550" width="195" height="54" rx="6" fill="#18181B" stroke="#27272A" strokeWidth="1" />
        <text x="332" y="572" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700" fontFamily="inherit">Search &amp; data</text>
        <text x="332" y="589" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="inherit">Exa · Tavily · Serper · Apollo</text>

        <rect x="445" y="550" width="185" height="54" rx="6" fill="#18181B" stroke="#27272A" strokeWidth="1" />
        <text x="537" y="572" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700" fontFamily="inherit">Model inference</text>
        <text x="537" y="589" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="inherit">OpenAI · Anthropic · Groq · fal</text>

        <rect x="645" y="550" width="180" height="54" rx="6" fill="#18181B" stroke="#27272A" strokeWidth="1" />
        <text x="735" y="572" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700" fontFamily="inherit">First-party &amp; public</text>
        <text x="735" y="589" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="inherit">Web Reader · Domain Intel · SEC</text>

        {/* Down Arrow 5 */}
        <line x1="430" y1="620" x2="430" y2="644" stroke="#D9532F" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

        {/* ── PLANE 06: LEDGER, MEASUREMENT & AUDIT ── */}
        <rect x="20" y="646" width="820" height="100" rx="8" fill="#F4EFEA" stroke="#E6DFD5" strokeWidth="1.5" />
        <text x="40" y="668" fill="#71717A" fontSize="11" fontWeight="800" letterSpacing="0.14em" fontFamily="inherit">
          06 · LEDGER, MEASUREMENT &amp; AUDIT — written on every run, success or failure
        </text>
        {/* 4 Cards */}
        <rect x="35" y="680" width="185" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="127" y="702" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">runs table</text>
        <text x="127" y="718" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">input · status · duration · cost</text>

        <rect x="235" y="680" width="195" height="52" rx="6" fill="#D9532F" />
        <text x="332" y="702" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="inherit">Wallet ledger</text>
        <text x="332" y="718" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="inherit">run id · units · provider · fee</text>

        <rect x="445" y="680" width="185" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="537" y="702" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Metrics engine</text>
        <text x="537" y="718" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">30-day · 200-run window</text>

        <rect x="645" y="680" width="180" height="52" rx="6" fill="#FFFFFF" stroke="#DCD8CF" strokeWidth="1" />
        <text x="735" y="702" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="700" fontFamily="inherit">Audit chain</text>
        <text x="735" y="718" textAnchor="middle" fill="#71717A" fontSize="10" fontFamily="inherit">insert-only · SHA-256 linked</text>
      </svg>
      <div className={styles.figureCaption}>
        Figure 2 — Platform architecture across six planes, from caller surface to ledger, measurement and audit.
      </div>
    </div>
  );
}

// ── SVG Diagram 3: Run Lifecycle End to End Flowchart ──
function Figure3RunLifecycle() {
  return (
    <div className={styles.figureCard}>
      <svg
        viewBox="0 0 980 570"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.figureSvg}
      >
        <defs>
          <marker
            id="flow-arrow-dark"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 2 L 8 5 L 1 8 Z" fill="#111113" />
          </marker>
          <marker
            id="flow-arrow-orange"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 2 L 8 5 L 1 8 Z" fill="#D9532F" />
          </marker>
          <marker
            id="flow-arrow-gray"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 2 L 8 5 L 1 8 Z" fill="#AFA99E" />
          </marker>
        </defs>

        {/* 1. CALL */}
        <rect x="275" y="16" width="390" height="36" rx="18" fill="#0E0F12" />
        <text x="470" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="500" fontFamily="inherit">
          1 · CALL — capability or tool named, one key
        </text>

        {/* Arrow 1 -> 2 */}
        <line x1="470" y1="52" x2="470" y2="72" stroke="#111113" strokeWidth="1.5" markerEnd="url(#flow-arrow-dark)" />

        {/* 2. INSPECT */}
        <rect x="235" y="74" width="470" height="36" rx="18" fill="#FFFFFF" stroke="#E6DFD5" strokeWidth="1" />
        <text x="470" y="97" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="500" fontFamily="inherit">
          2 · INSPECT — price model returned before anything is spent
        </text>

        {/* Arrow 2 -> 3 */}
        <line x1="470" y1="110" x2="470" y2="130" stroke="#111113" strokeWidth="1.5" markerEnd="url(#flow-arrow-dark)" />

        {/* 3. HOLD */}
        <rect x="210" y="132" width="520" height="36" rx="18" fill="#FFFFFF" stroke="#E6DFD5" strokeWidth="1" />
        <text x="470" y="155" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="500" fontFamily="inherit">
          3 · HOLD — estimated maximum reserved against the prepaid balance
        </text>

        {/* Arrow 3 -> 4 */}
        <line x1="470" y1="168" x2="470" y2="188" stroke="#111113" strokeWidth="1.5" markerEnd="url(#flow-arrow-dark)" />

        {/* 4. ROUTE */}
        <rect x="200" y="190" width="540" height="38" rx="19" fill="#D9532F" />
        <text x="470" y="214" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="600" fontFamily="inherit">
          4 · ROUTE — ranked candidate selected (verified → health → price)
        </text>

        {/* Arrow 4 -> 5 */}
        <line x1="470" y1="228" x2="470" y2="248" stroke="#111113" strokeWidth="1.5" markerEnd="url(#flow-arrow-dark)" />

        {/* 5. EXECUTE */}
        <rect x="220" y="250" width="500" height="36" rx="18" fill="#FFFFFF" stroke="#E6DFD5" strokeWidth="1" />
        <text x="470" y="273" textAnchor="middle" fill="#111113" fontSize="11.5" fontWeight="500" fontFamily="inherit">
          5 · EXECUTE — upstream call over HTTPS, run row written first
        </text>

        {/* Branch Lines from Step 5 */}
        <line x1="360" y1="286" x2="310" y2="314" stroke="#111113" strokeWidth="1.5" markerEnd="url(#flow-arrow-dark)" />
        <line x1="580" y1="286" x2="680" y2="314" stroke="#111113" strokeWidth="1.5" markerEnd="url(#flow-arrow-dark)" />

        {/* Branch 1: 2xx SUCCESS */}
        <rect x="245" y="316" width="130" height="30" rx="15" fill="#0E0F12" />
        <text x="310" y="335" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700" fontFamily="inherit">
          2xx · SUCCESS
        </text>

        {/* Branch 2: 5xx / 408 / 429 FAILURE */}
        <rect x="600" y="316" width="180" height="30" rx="15" fill="#ECE5DA" stroke="#DCD5C9" strokeWidth="1" />
        <text x="690" y="335" textAnchor="middle" fill="#111113" fontSize="11" fontWeight="600" fontFamily="inherit">
          5xx / 408 / 429 · FAILURE
        </text>

        {/* Connecting Lines from 2xx SUCCESS to 4 Settlement Boxes */}
        <line x1="265" y1="346" x2="81" y2="376" stroke="#111113" strokeWidth="1.3" markerEnd="url(#flow-arrow-dark)" />
        <line x1="295" y1="346" x2="231" y2="376" stroke="#111113" strokeWidth="1.3" markerEnd="url(#flow-arrow-dark)" />
        <line x1="325" y1="346" x2="381" y2="376" stroke="#111113" strokeWidth="1.3" markerEnd="url(#flow-arrow-dark)" />
        <line x1="355" y1="346" x2="531" y2="376" stroke="#111113" strokeWidth="1.3" markerEnd="url(#flow-arrow-dark)" />

        {/* 4 Settlement Boxes under Success */}
        <rect x="12" y="378" width="138" height="56" rx="8" fill="#D9532F" />
        <text x="81" y="396" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="inherit">Master account</text>
        <text x="81" y="411" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="inherit">provider price + 15%</text>
        <text x="81" y="423" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="inherit">+ $0.001 fee</text>

        <rect x="160" y="378" width="142" height="56" rx="8" fill="#FFFFFF" stroke="#E2DDD5" strokeWidth="1" />
        <text x="231" y="396" textAnchor="middle" fill="#111113" fontSize="11" fontWeight="700" fontFamily="inherit">BYOK</text>
        <text x="231" y="411" textAnchor="middle" fill="#111113" fontSize="9" fontFamily="inherit">provider bills the customer</text>
        <text x="231" y="423" textAnchor="middle" fill="#111113" fontSize="9" fontFamily="inherit">$0.001 fee only</text>

        <rect x="312" y="378" width="138" height="56" rx="8" fill="#FFFFFF" stroke="#E2DDD5" strokeWidth="1" />
        <text x="381" y="396" textAnchor="middle" fill="#111113" fontSize="11" fontWeight="700" fontFamily="inherit">Cache hit</text>
        <text x="381" y="411" textAnchor="middle" fill="#111113" fontSize="9.5" fontFamily="inherit">$0 provider price</text>
        <text x="381" y="423" textAnchor="middle" fill="#111113" fontSize="9.5" fontFamily="inherit">$0.001 fee only</text>

        <rect x="460" y="378" width="142" height="56" rx="8" fill="#FFFFFF" stroke="#E2DDD5" strokeWidth="1" />
        <text x="531" y="396" textAnchor="middle" fill="#111113" fontSize="11" fontWeight="700" fontFamily="inherit">Waterfall hit</text>
        <text x="531" y="411" textAnchor="middle" fill="#111113" fontSize="9" fontFamily="inherit">hit cost + 35%, or the</text>
        <text x="531" y="423" textAnchor="middle" fill="#111113" fontSize="9" fontFamily="inherit">sum of all attempts</text>

        {/* LEDGER DEBIT */}
        <rect x="35" y="452" width="540" height="34" rx="17" fill="#0E0F12" />
        <text x="305" y="473" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="inherit">
          LEDGER DEBIT — run id · units billed · provider share · platform fee
        </text>

        {/* Distinct ORANGE / CORAL line with arrow pointing to METRICS WINDOW */}
        <line x1="305" y1="486" x2="305" y2="508" stroke="#D9532F" strokeWidth="2.5" markerEnd="url(#flow-arrow-orange)" />

        {/* METRICS WINDOW */}
        <rect x="12" y="510" width="586" height="34" rx="17" fill="#0E0F12" />
        <text x="305" y="531" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="600" fontFamily="inherit">
          METRICS WINDOW — counts toward the tool&apos;s published success rate and latency
        </text>

        {/* Under Failure: Retry and NOT BILLED */}
        <line x1="660" y1="346" x2="660" y2="376" stroke="#111113" strokeWidth="1.3" markerEnd="url(#flow-arrow-dark)" />
        <line x1="720" y1="346" x2="820" y2="376" stroke="#111113" strokeWidth="1.3" markerEnd="url(#flow-arrow-dark)" />

        <rect x="595" y="378" width="134" height="56" rx="8" fill="#FFFFFF" stroke="#E2DDD5" strokeWidth="1" />
        <text x="662" y="400" textAnchor="middle" fill="#111113" fontSize="10.5" fontWeight="700" fontFamily="inherit">Retry on next candidate</text>
        <text x="662" y="417" textAnchor="middle" fill="#111113" fontSize="9.5" fontFamily="inherit">up to 3 tried per run</text>

        <rect x="740" y="378" width="175" height="56" rx="8" fill="#ECE5DA" stroke="#DCD5C9" strokeWidth="1" />
        <text x="827" y="396" textAnchor="middle" fill="#111113" fontSize="11" fontWeight="700" fontFamily="inherit">NOT BILLED</text>
        <text x="827" y="411" textAnchor="middle" fill="#111113" fontSize="9" fontFamily="inherit">zero units · zero provider · zero fee</text>
        <text x="827" y="423" textAnchor="middle" fill="#111113" fontSize="9" fontFamily="inherit">hold released</text>

        {/* Re-route Dashed Loop Arrow */}
        <path d="M 729 388 C 840 330 840 235 742 209" stroke="#AFA99E" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#flow-arrow-gray)" />
        <text x="835" y="275" textAnchor="start" fill="#7A746B" fontSize="10" fontStyle="italic" fontFamily="inherit">
          re-route
        </text>

        {/* Failures count too Dashed Line Arrow */}
        <path d="M 662 434 C 640 465 625 495 600 527" stroke="#AFA99E" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#flow-arrow-gray)" />
        <text x="680" y="475" textAnchor="middle" fill="#7A746B" fontSize="10" fontStyle="italic" fontFamily="inherit">
          failures count too
        </text>
      </svg>
      <div className={styles.figureCaption}>
        Figure 3 — Run lifecycle: inspect before spend, hold, route, execute, then settle to the ledger and the metrics window.
      </div>
    </div>
  );
}

// ── Main Cracked Case Study Component ──
export default function CrackedCaseStudy(_props: CrackedCaseStudyProps) {
  return (
    <div className={styles.crackedPage}>
      {/* ══════════════════════════════════════════════════════════════════════════
          COVER HERO (Page 1)
      ══════════════════════════════════════════════════════════════════════════ */}
      <header className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroHeaderRow}>
            <div className={styles.heroBrand}>
              CRACKED<span className={styles.brandDot}>.</span>AI
            </div>
            <div className={styles.heroCaseTag}>ENGINEERING CASE STUDY</div>
          </div>

          <div className={styles.heroEyebrowRow}>
            <span className={styles.heroEyebrowNum}>01</span>
            <span className={styles.heroEyebrowDot}>·</span>
            <span className={styles.heroEyebrowText}>THE AGENT EXECUTION LAYER</span>
          </div>

          <h1 className={styles.heroTitle}>
            Agents sign up
            <br />
            by calling.
            <span className={styles.heroTitleAccent}>Humans fund them.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            One key to 69,826 tools across 1,249 providers, ranked by measured health and real price.
            Failed runs are free.
          </p>

          <div className={styles.terminalBox}>
            <span className={styles.terminalDollar}>$</span>
            <span className={styles.terminalCommand}>set up https://cracked.ai/SKILL.md</span>
          </div>

          <p className={styles.terminalSubtext}>
            One request registers the workspace, executes the task and returns the key. No form, no card, no human in the loop.
          </p>

          <div className={styles.heroStatsGrid}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatNumber}>69,826</span>
              <span className={styles.heroStatLabel}>TOOLS IN CATALOG</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatNumber}>1,249</span>
              <span className={styles.heroStatLabel}>PROVIDERS</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatNumber}>159</span>
              <span className={styles.heroStatLabel}>ROUTED TASKS</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatNumber}>$0.001</span>
              <span className={styles.heroStatLabel}>FEE PER RUN</span>
            </div>
          </div>

          <div className={styles.heroMetaGrid}>
            <div className={styles.heroMetaCol}>
              <span className={styles.heroMetaLabel}>CLIENT</span>
              <span className={styles.heroMetaValue}>Cracked AI LLC</span>
            </div>
            <div className={styles.heroMetaCol}>
              <span className={styles.heroMetaLabel}>DOMAIN</span>
              <span className={styles.heroMetaValue}>Agent infrastructure</span>
            </div>
            <div className={styles.heroMetaCol}>
              <span className={styles.heroMetaLabel}>CATALOG STATE</span>
              <span className={styles.heroMetaValue}>7 September 2026</span>
            </div>
            <div className={styles.heroMetaCol}>
              <span className={styles.heroMetaLabel}>PREPARED BY</span>
              <span className={styles.heroMetaValue}>PG-AGI</span>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════════
          TABLE OF CONTENTS & WHITEPAPER BODY (Pages 2 to 23)
      ══════════════════════════════════════════════════════════════════════════ */}
      <main className={styles.whitepaperContainer}>
        {/* ── Table of Contents (Page 2) ── */}
        <section className={styles.tocSection}>
          <div className={styles.tocEyebrow}>CONTENTS</div>
          <h2 className={styles.tocTitle}>What this document covers</h2>
          <hr className={styles.tocDivider} />

          <div className={styles.tocList}>
            <div className={styles.tocItem}>
              <span className={styles.tocNum}>01</span>
              <div className={styles.tocContent}>
                <h3 className={styles.tocHeading}>What We Built</h3>
                <p className={styles.tocSummary}>
                  The problem of fragmented tool access, the two-sided identity model, and the capability abstraction that replaces per-provider integration work.
                </p>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={styles.tocNum}>02</span>
              <div className={styles.tocContent}>
                <h3 className={styles.tocHeading}>Core Architecture</h3>
                <p className={styles.tocSummary}>
                  Six planes from caller surface to audit chain, the run record, smart-run ranking and fallback, and the measurement subsystem behind every published figure.
                </p>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={styles.tocNum}>03</span>
              <div className={styles.tocContent}>
                <h3 className={styles.tocHeading}>Credit System &amp; Monetisation</h3>
                <p className={styles.tocSummary}>
                  Prepaid workspace balances, the per-run fee model, cost-plus versus bring-your-own-key economics, waterfall pricing, annual blocks and agent-native payment.
                </p>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={styles.tocNum}>04</span>
              <div className={styles.tocContent}>
                <h3 className={styles.tocHeading}>User-Facing Features</h3>
                <p className={styles.tocSummary}>
                  Discovery surfaces, developer integration paths, workspace governance controls and the human funding experience.
                </p>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={styles.tocNum}>05</span>
              <div className={styles.tocContent}>
                <h3 className={styles.tocHeading}>Security &amp; Auditability</h3>
                <p className={styles.tocSummary}>
                  Key custody, encryption at rest and in transit, the policy engine, logging boundaries and the hash-chained audit log.
                </p>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={styles.tocNum}>06</span>
              <div className={styles.tocContent}>
                <h3 className={styles.tocHeading}>What Makes This Different</h3>
                <p className={styles.tocSummary}>
                  Seven structural decisions that separate a measured execution layer from an API aggregator.
                </p>
              </div>
            </div>

            <div className={styles.tocItem}>
              <span className={styles.tocNum}>07</span>
              <div className={styles.tocContent}>
                <h3 className={styles.tocHeading}>Outcomes</h3>
                <p className={styles.tocSummary}>
                  The KPI framework across adoption, reliability, unit economics and governance.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.calloutBox}>
            <div className={styles.calloutEyebrow}>HOW TO READ THIS DOCUMENT</div>
            <div className={styles.calloutBody}>
              <p>
                Every figure quoted in this study is a value the platform itself computes and publishes at render time from its own capability table, registry and endpoint metrics. Prices, success rates, catalog counts and health statuses are therefore point-in-time values for the catalog state on 7 September 2026.
              </p>
              <p>
                Section 07 is a measurement framework rather than a results table: the KPI structure is fixed, the values are populated from workspace and ledger data once a reporting period closes.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════
            SECTION 01: WHAT WE BUILT (Pages 3-5)
        ══════════════════════════════════════════════════════════════════════════ */}
        <section id="section-01">
          <div className={styles.sectionBanner}>
            <div className={styles.sectionBadgeNum}>01</div>
            <div className={styles.sectionBannerText}>
              <span className={styles.sectionBannerEyebrow}>SECTION ONE</span>
              <h2 className={styles.sectionBannerTitle}>What We Built</h2>
            </div>
          </div>

          <p className={styles.proseP}>
            Cracked is a single-key execution layer that sits between an AI agent and the entire commercial tool market. An agent holds one credential, names either a tool or a task, and receives a result billed to a prepaid balance. Behind that one call sit 69,826 catalogued tools from 1,249 providers, a router that picks the best live candidate for the task, a ledger that records every unit billed, and a measurement subsystem that publishes the real success rate and real price of everything it routes to.
          </p>

          <h3 className={styles.h2Title}>The problem being solved</h3>

          <p className={styles.proseP}>
            Tool access is the hardest unsolved part of shipping an agent. Every capability an agent needs — search, scraping, enrichment, transcription, inference — lives behind a different provider with its own authentication scheme, its own billing model, its own error semantics and its own undocumented reliability. Building an agent that can do twenty things means twenty integrations, twenty accounts, twenty invoices and twenty failure modes to handle individually. Worse, none of those providers publish what a call actually costs at the volume an agent generates, or how often the endpoint actually works.
          </p>

          <p className={styles.proseP}>
            That friction is not merely engineering overhead. It is a structural blocker, because an autonomous agent cannot open a provider account, cannot accept a terms-of-service page, cannot enter a card and cannot read an onboarding email. The economic actor doing the work is not the economic actor able to pay for it.
          </p>

          <div className={styles.calloutBox}>
            <div className={styles.calloutEyebrow}>THE CORE INSIGHT</div>
            <div className={styles.calloutSubhead}>Agents sign up by calling. Humans fund them.</div>
            <div className={styles.calloutBody}>
              <p>
                Identity and payment are separated. The agent obtains a working credential through the same interface it uses to do work — a single HTTP request, no form, no browser, no human in the loop. The human retains the funding relationship, the spending policy and the audit trail.
              </p>
            </div>
          </div>

          <h3 className={styles.h2Title}>The three entry paths</h3>

          <p className={styles.proseP}>
            The platform is designed so that the distance between intent and first successful run is one step, whichever surface the caller arrives on.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>PATH</th>
                  <th>MECHANISM</th>
                  <th>WHAT THE CALLER GETS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Skill handoff</td>
                  <td>
                    A machine-readable capability manifest is published at /SKILL.md. An agent is pointed at the URL and configures itself from it.
                    <br />
                    <em>Supported across Claude Code, Cursor, ChatGPT, Codex, LangChain, CrewAI, Vercel AI SDK, OpenAI Agents and MCP.</em>
                  </td>
                  <td>A fully configured client with catalog awareness, no human integration work.</td>
                </tr>
                <tr>
                  <td>Keyless self-signup</td>
                  <td>
                    The agent issues a POST to /v1/run with no credential. The call creates a workspace, executes the requested tool and returns the new key in the X-Cracked-Key response header.
                  </td>
                  <td>A live key and $2.00 of starting credit, from a single request with no form and no card.</td>
                </tr>
                <tr>
                  <td>Human dashboard</td>
                  <td>
                    Sign-in through email and password, Google, or SAML on the enterprise plan; the workspace is funded, governed and audited from the browser.
                  </td>
                  <td>Funding, policy authorship, approval queues, ledger export and the audit log.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── From tools to capabilities (Page 4) ── */}
          <h3 className={styles.h2Title}>From tools to capabilities</h3>

          <p className={styles.proseP}>
            The catalog alone would still leave the hardest decision with the caller: which of five scrapers, seven search APIs or nine language models to use for this particular task, right now, at this price. The capability layer removes that decision entirely. A capability is a named task, not a named vendor. The caller asks for the task; the router resolves the vendor at execution time from live health and live price.
          </p>

          <Figure1CapabilityAbstraction />

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>CATALOG DIMENSION</th>
                  <th>VALUE</th>
                  <th>DEFINITION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Routed capabilities</td>
                  <td>159</td>
                  <td>Named agent tasks addressable by a single capability string.</td>
                </tr>
                <tr>
                  <td>Candidate endpoints</td>
                  <td>336</td>
                  <td>Distinct provider endpoints registered as candidates behind those capabilities.</td>
                </tr>
                <tr>
                  <td>Providers behind capabilities</td>
                  <td>77</td>
                  <td>Upstream vendors serving at least one candidate endpoint.</td>
                </tr>
                <tr>
                  <td>Capabilities with a live tool</td>
                  <td>158</td>
                  <td>Capabilities with at least one currently available candidate.</td>
                </tr>
                <tr>
                  <td>Capabilities with a measured rate</td>
                  <td>50</td>
                  <td>Capabilities where at least one candidate has cleared five measured runs.</td>
                </tr>
                <tr>
                  <td>Capabilities with a sample receipt</td>
                  <td>112</td>
                  <td>Capabilities publishing a real sample output attached to a run receipt.</td>
                </tr>
                <tr>
                  <td>Measured runs behind the rates</td>
                  <td>994</td>
                  <td>Non-cached, non-blocked runs standing behind the published success rates.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.proseP}>
            Capabilities are grouped into functional domains, each with its own category hub and its own reliability, speed, price and usage leaderboards. The domain spread is deliberately wide, because an agent workload is rarely confined to one class of tool.
          </p>

          {/* ── Domains Table (Pages 4 & 5) ── */}
          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>DOMAIN</th>
                  <th>REPRESENTATIVE CAPABILITIES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Search &amp; SEO</td>
                  <td>Web search, news search, documentation search, company news</td>
                </tr>
                <tr>
                  <td>Web scraping</td>
                  <td>Page to text, site URL mapping, screenshots, sitemap parsing, RSS, URL summarisation</td>
                </tr>
                <tr>
                  <td>Social media</td>
                  <td>Instagram, TikTok, YouTube, X, Reddit, LinkedIn, Facebook, Threads, Pinterest profile, post, comment and hashtag extraction</td>
                </tr>
                <tr>
                  <td>Sales &amp; lead generation</td>
                  <td>Company enrichment, work email discovery, email verification, people search, phone lookup</td>
                </tr>
                <tr>
                  <td>Finance &amp; crypto</td>
                  <td>Stock quotes and fundamentals, SEC filings, FX conversion, spot crypto prices, DeFi TVL and yields, wallet balances, gas price</td>
                </tr>
                <tr>
                  <td>Developer &amp; infrastructure</td>
                  <td>WHOIS and RDAP, DNS, TLS certificate checks, IP geolocation, GitHub, npm and PyPI metadata</td>
                </tr>
                <tr>
                  <td>AI models</td>
                  <td>Chat completion, embeddings, translation, summarisation, sentiment, moderation, keyword extraction</td>
                </tr>
                <tr>
                  <td>Image, video &amp; audio</td>
                  <td>Text-to-image, high-fidelity image generation, image editing and upscaling, background removal, video and music generation, text-to-speech, transcription, captions</td>
                </tr>
                <tr>
                  <td>Commerce &amp; marketplaces</td>
                  <td>Amazon, eBay, Etsy, Walmart, Best Buy, AliExpress, Shopify, Google Shopping, app store listings and reviews</td>
                </tr>
                <tr>
                  <td>Knowledge, health &amp; local</td>
                  <td>arXiv, PubMed, ClinicalTrials.gov, openFDA, Wikipedia, Google Books, geocoding, weather, air quality, holidays, VIN decoding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════
            SECTION 02: CORE ARCHITECTURE (Pages 6-9)
        ══════════════════════════════════════════════════════════════════════════ */}
        <section id="section-02">
          <div className={styles.sectionBanner}>
            <div className={styles.sectionBadgeNum}>02</div>
            <div className={styles.sectionBannerText}>
              <span className={styles.sectionBannerEyebrow}>SECTION TWO</span>
              <h2 className={styles.sectionBannerTitle}>Core Architecture</h2>
            </div>
          </div>

          <p className={styles.proseP}>
            The system is organised as six sequential planes. A request enters at the caller surface, passes every gate in the gateway before any credential is resolved, is routed to a ranked candidate, executed against the provider fabric under whichever credential the workspace has configured, and settled into a ledger, a metrics window and an append-only audit chain. No plane can be skipped, and the write to the run record happens before the upstream call is made rather than after it returns.
          </p>

          <Figure2CoreArchitecture />

          {/* ── 2.1 The run record (Page 7) ── */}
          <h3 className={styles.h2Title}>2.1 The run record</h3>

          <p className={styles.proseP}>
            Every request to /v1/run writes a row to the runs table before the upstream call is dispatched, then updates that row when the call returns. The row is the single source of truth for billing, for measurement and for the receipt the caller can retrieve later.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>RECORDED FIELD</th>
                  <th>PURPOSE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Provider and endpoint</td>
                  <td>Which upstream was actually selected by the router for this run.</td>
                </tr>
                <tr>
                  <td>Input payload</td>
                  <td>The request as submitted, so a charge can be traced to the request that caused it.</td>
                </tr>
                <tr>
                  <td>Output payload</td>
                  <td>The result, unless the workspace has disabled output storage.</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>One of RUNNING, COMPLETED, FAILED (upstream 5xx), TIMED_OUT (upstream 408) or BLOCKED (no key or no balance, provider never called).</td>
                </tr>
                <tr>
                  <td>Provider HTTP status</td>
                  <td>The upstream response code, which determines whether the run counts as a success.</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>Wall-clock latency in milliseconds, including runs that failed.</td>
                </tr>
                <tr>
                  <td>Billed units and amounts</td>
                  <td>Units billed, provider share and platform fee, recorded in micro-dollars.</td>
                </tr>
                <tr>
                  <td>Cache flag</td>
                  <td>Whether the result was served from the result cache rather than the provider.</td>
                </tr>
                <tr>
                  <td>Timestamps</td>
                  <td>Created and completed times, used for the metrics window and for last-success reporting.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 2.2 Smart-run ranking and fallback (Page 7) ── */}
          <h3 className={styles.h2Title}>2.2 Smart-run ranking and fallback</h3>

          <p className={styles.proseP}>
            When a caller names a capability rather than a tool, the router evaluates the capability&apos;s candidate list at execution time. Candidates that are unavailable — provider offline, endpoint absent, health in outage, or unverified where the capability requires verification — are excluded before ranking begins. The remaining candidates are ordered by a deterministic comparison sequence.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>RANK CRITERION</th>
                  <th>RULE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Last-resort flag</td>
                  <td>Candidates explicitly flagged as fallbacks are placed after everything else.</td>
                </tr>
                <tr>
                  <td>Verification</td>
                  <td>Verified candidates rank ahead of unverified ones.</td>
                </tr>
                <tr>
                  <td>Health class</td>
                  <td>Healthy, stable and unknown rank ahead of degraded.</td>
                </tr>
                <tr>
                  <td>Estimated price</td>
                  <td>Lower estimated price ranks ahead of higher.</td>
                </tr>
                <tr>
                  <td>Catalog order</td>
                  <td>Deterministic tiebreak, so identical candidates resolve consistently.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.proseP}>
            The router attempts up to three candidates and stops at the first that answers. A 2xx response, an accepted asynchronous run, or a 404 or 410 all count as an answer — the tool worked, the record simply does not exist upstream. A 5xx, 408, 429 or other 4xx status triggers the next candidate. Independently of capability-level fallback, an individual endpoint whose upstream returns 5xx or 408 is retried against its own declared fallback endpoints inside the same run.
          </p>

          {/* ── Waterfall capabilities (Page 8) ── */}
          <h4 className={styles.h3Accent}>Waterfall capabilities</h4>
          <p className={styles.proseP}>
            A subset of capabilities — company enrichment, work email discovery, email verification, phone finding, person enrichment and identity resolution — are resolved as waterfalls rather than as single selections. Providers are tried cheapest-first and the run stops at the first hit. A provider holding no record for the query is a free miss, so only the provider that actually answers contributes to the charge.
          </p>

          {/* ── 2.3 Result caching (Page 8) ── */}
          <h3 className={styles.h2Title}>2.3 Result caching</h3>
          <p className={styles.proseP}>
            Identical inputs to deterministic tools — scrapes, searches, public reference data — are served from the result cache for the platform fee alone, with a 600-second default lifetime and a hard ceiling of 86,400 seconds. Generation, messaging, file and asynchronous tools are never cached. A cache hit is still written as a run with the cache flag set and a provider price of zero, and every published metric filters it out: its duration measures database latency rather than provider latency, and it cannot fail, so counting it would flatter both the median and the success rate.
          </p>

          {/* ── 2.4 The measurement subsystem (Page 8) ── */}
          <h3 className={styles.h2Title}>2.4 The measurement subsystem</h3>
          <p className={styles.proseP}>
            No figure on the platform is provider self-reported and none comes from a synthetic benchmark. Every health status, latency figure and success rate is computed from run records written by the router itself, using a fixed window: per endpoint, the most recent 200 runs that are neither cached nor blocked and were created within the last 30 days.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>METRIC</th>
                  <th>COMPUTATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Success</td>
                  <td>
                    Status COMPLETED with a provider HTTP status between 200 and 299. Every other run in the window counts against the rate, including a completed run that returned 404 or 422. BLOCKED runs are excluded entirely, because they measure the caller&apos;s account rather than the provider.
                  </td>
                </tr>
                <tr>
                  <td>Success rate</td>
                  <td>
                    Share of the window that succeeded, rounded to one decimal, published once an endpoint has at least five measured runs.
                  </td>
                </tr>
                <tr>
                  <td>Median latency</td>
                  <td>Fiftieth percentile of duration across the whole window, failed runs included.</td>
                </tr>
                <tr>
                  <td>p95 latency</td>
                  <td>Ninety-fifth percentile, computed per endpoint and shown on tool pages; rankings never use it.</td>
                </tr>
                <tr>
                  <td>Last success</td>
                  <td>Completion time of the newest successful run in the window.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className={styles.h3Accent}>Health classification</h4>
          <p className={styles.proseP}>
            Status is derived from the window by an ordered rule set in which the first match wins.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>STATUS</th>
                  <th>CONDITION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Unknown</td>
                  <td>No runs in the window, or no success rate could be computed.</td>
                </tr>
                <tr>
                  <td>Healthy</td>
                  <td>Last success completed under 15 minutes ago and success rate is at least 80%.</td>
                </tr>
                <tr>
                  <td>Stable</td>
                  <td>Success rate is at least 90% over at least three runs.</td>
                </tr>
                <tr>
                  <td>Degraded</td>
                  <td>Success rate is at least 50%, or below 50% on fewer than three runs.</td>
                </tr>
                <tr>
                  <td>Outage</td>
                  <td>Success rate is below 50% over at least three runs.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Active probing (Page 9) ── */}
          <h4 className={styles.h3Accent}>Active probing</h4>
          <p className={styles.proseP}>
            Passive measurement of customer traffic is supplemented by three independent probe systems, so a tool that nobody has called recently still carries a current health signal.
          </p>

          <ul className={styles.proseList}>
            <li>
              <strong>Nightly MCP probe.</strong> Every server in the aggregated MCP catalog is sent initialize, notifications/initialized and tools/list with 12-second timeouts, after which the cheapest side-effect-free tool it advertises is called once with a 20-second timeout. A streak counter tracks consecutive nights on which tools/list failed; at three the server is treated as dead and dropped from the registry, and one successful listing resets the count.
            </li>
            <li>
              <strong>Fifteen-minute canaries.</strong> An external monitor on a separate host reads /v1/health, executes canary runs against a dedicated QA key on a rotating schedule, and checks master-account balances. Canary runs are real upstream calls and count toward provider health; the run totals on the public status page exclude them, so customer traffic is reported separately.
            </li>
            <li>
              <strong>Actor verification.</strong> A verified badge means the actor was started through the production API as an asynchronous run using the sample input held in the curated catalog, and returned a completed run with at least one item. The run identifier and verification timestamp are stored on the catalog entry; a timeout, an error or a completed run with zero items records the error and clears the badge.
            </li>
          </ul>

          {/* ── 2.5 The run lifecycle end to end (Page 9) ── */}
          <h3 className={styles.h2Title}>2.5 The run lifecycle end to end</h3>
          <p className={styles.proseP}>
            The lifecycle diagram below traces a single call from the caller&apos;s intent through pricing disclosure, balance reservation, routing, execution and settlement, showing every branch that changes what is billed.
          </p>

          <Figure3RunLifecycle />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════
            SECTION 03: CREDIT SYSTEM & MONETISATION (Pages 10-13)
        ══════════════════════════════════════════════════════════════════════════ */}
        <section id="section-03">
          <div className={styles.sectionBanner}>
            <div className={styles.sectionBadgeNum}>03</div>
            <div className={styles.sectionBannerText}>
              <span className={styles.sectionBannerEyebrow}>SECTION THREE</span>
              <h2 className={styles.sectionBannerTitle}>Credit System &amp; Monetisation</h2>
            </div>
          </div>

          <p className={styles.proseP}>
            There is no subscription, no seat licence and no minimum spend. A workspace holds a prepaid balance, and every successful run deducts the provider&apos;s metered price plus a flat platform fee. Failed runs are free. That single sentence is the entire commercial model, and it is deliberately simple because the entity spending the money is frequently a machine that cannot evaluate a pricing page.
          </p>

          <div className={styles.section03StatStrip}>
            <div className={styles.s3StatItem}>
              <span className={styles.s3StatNumber}>$0.001</span>
              <span className={styles.s3StatLabel}>PLATFORM FEE PER SUCCESS</span>
            </div>
            <div className={styles.s3StatItem}>
              <span className={styles.s3StatNumber}>+15%</span>
              <span className={styles.s3StatLabel}>MASTER ACCOUNT MARKUP</span>
            </div>
            <div className={styles.s3StatItem}>
              <span className={styles.s3StatNumber}>$0</span>
              <span className={styles.s3StatLabel}>MARKUP ON YOUR OWN KEY</span>
            </div>
            <div className={styles.s3StatItem}>
              <span className={styles.s3StatNumber}>$2.00</span>
              <span className={styles.s3StatLabel}>STARTING CREDIT</span>
            </div>
          </div>

          {/* ── 3.1 The three billing modes (Page 10) ── */}
          <h3 className={styles.h2Title}>3.1 The three billing modes</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>MODE</th>
                  <th>PROVIDER SHARE</th>
                  <th>PLATFORM FEE</th>
                  <th>WHEN IT APPLIES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Master account</td>
                  <td>Provider price + 15%</td>
                  <td>$0.001 per success</td>
                  <td>Default. The run executes on Cracked&apos;s own provider account; the workspace needs no upstream relationship at all.</td>
                </tr>
                <tr>
                  <td>Bring your own key</td>
                  <td>$0 — the provider bills the customer directly</td>
                  <td>$0.001 per success</td>
                  <td>A workspace connects its own credential for Apify, OpenAI, Apollo, Semrush or any other keyed provider. The 15% is eliminated.</td>
                </tr>
                <tr>
                  <td>Cached repeat</td>
                  <td>$0</td>
                  <td>$0.001 per success</td>
                  <td>Identical input to a deterministic tool inside the cache window.</td>
                </tr>
                <tr>
                  <td>Failure</td>
                  <td>$0</td>
                  <td>$0</td>
                  <td>Upstream 5xx, 408 or timeout. The run is recorded and counts toward that tool&apos;s published success rate, but nothing is charged.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.calloutBox}>
            <div className={styles.calloutEyebrow}>PRICING IS DISCLOSED BEFORE SPEND, NOT AFTER</div>
            <div className={styles.calloutBody}>
              <p>
                Discovery and inspection are free. The exact price model for a tool — per call, per result or per unit — is returned by inspect before anything is spent, and a per-result tool bills only the results actually returned, so a search that comes back with fewer results costs proportionally less.
              </p>
              <p>
                The max_cost_usd parameter caps the total spend of a run before it starts, including every attempt in a waterfall.
              </p>
            </div>
          </div>

          {/* ── 3.2 Worked unit economics (Pages 10-11) ── */}
          <h3 className={styles.h2Title}>3.2 Worked unit economics</h3>
          <p className={styles.proseP}>
            Each row below is computed from the live catalog price of a named tool. The direct column is the provider&apos;s own list price for the same volume where Cracked resells at a published markup, and excludes the provider subscription, the integration time and the retries. The own-key column is what the platform bills when the provider account belongs to the customer.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>JOB</th>
                  <th>TOOL</th>
                  <th>PROVIDER PRICE</th>
                  <th>ON CRACKED</th>
                  <th>DIRECT</th>
                  <th>OWN KEY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,000 Google Maps places</td>
                  <td>Apify Store</td>
                  <td>$0.0017 / result</td>
                  <td>$1.73</td>
                  <td>$1.50</td>
                  <td>$0.0010</td>
                </tr>
                <tr>
                  <td>1,000 Instagram profiles</td>
                  <td>Apify Store</td>
                  <td>$0.0018 / result</td>
                  <td>$1.84</td>
                  <td>$1.60</td>
                  <td>$0.0010</td>
                </tr>
                <tr>
                  <td>100 Google searches</td>
                  <td>Serper</td>
                  <td>$0.0040 / call</td>
                  <td>$0.500</td>
                  <td>—</td>
                  <td>$0.100</td>
                </tr>
                <tr>
                  <td>1,000 pages to markdown</td>
                  <td>Firecrawl</td>
                  <td>$0.012 / call</td>
                  <td>$13.00</td>
                  <td>—</td>
                  <td>$1.00</td>
                </tr>
                <tr>
                  <td>100 weather forecasts</td>
                  <td>Open-Meteo</td>
                  <td>Free</td>
                  <td>$0.100</td>
                  <td>—</td>
                  <td>$0.100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className={styles.h3Accent}>Cost of a single typical run</h4>
          <p className={styles.proseP}>
            A typical run assumes ten results for per-result tools, two thousand tokens for language models and five hundred characters for speech synthesis.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>TOOL</th>
                  <th>PROVIDER PRICE</th>
                  <th>TYPICAL RUN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fetch page as text</td>
                  <td>Free per call</td>
                  <td>$0.0010</td>
                </tr>
                <tr>
                  <td>Weather forecast</td>
                  <td>Free per call</td>
                  <td>$0.0010</td>
                </tr>
                <tr>
                  <td>Google web search (Serper)</td>
                  <td>$0.0040 per call</td>
                  <td>$0.0050</td>
                </tr>
                <tr>
                  <td>Chat completion (OpenAI)</td>
                  <td>$0.0040 per 1k tokens + $0.001 call</td>
                  <td>$0.010</td>
                </tr>
                <tr>
                  <td>Get Instagram profile (Apify)</td>
                  <td>$0.0018 per result</td>
                  <td>$0.019</td>
                </tr>
                <tr>
                  <td>Text to speech (ElevenLabs)</td>
                  <td>$0.00003 per character + $0.002 call</td>
                  <td>$0.018</td>
                </tr>
                <tr>
                  <td>Claude message (Anthropic)</td>
                  <td>$0.012 per 1k tokens + $0.001 call</td>
                  <td>$0.026</td>
                </tr>
                <tr>
                  <td>Domain overview (Semrush)</td>
                  <td>$0.030 per call</td>
                  <td>$0.031</td>
                </tr>
                <tr>
                  <td>People search (Apollo)</td>
                  <td>$0.010 per result + $0.01 call</td>
                  <td>$0.111</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className={styles.h3Accent}>What the starting grant and the first top-up buy</h4>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>TOOL</th>
                  <th>TYPICAL RUN</th>
                  <th>$2 FREE CREDIT</th>
                  <th>$5 TOP-UP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fetch page as text</td>
                  <td>$0.0010</td>
                  <td>2,000 runs</td>
                  <td>5,000 runs</td>
                </tr>
                <tr>
                  <td>Google web search</td>
                  <td>$0.0050</td>
                  <td>400 runs</td>
                  <td>1,000 runs</td>
                </tr>
                <tr>
                  <td>Scrape as markdown</td>
                  <td>$0.013</td>
                  <td>153 runs</td>
                  <td>384 runs</td>
                </tr>
                <tr>
                  <td>Get Instagram profile</td>
                  <td>$0.019</td>
                  <td>103 runs</td>
                  <td>257 runs</td>
                </tr>
                <tr>
                  <td>People search</td>
                  <td>$0.111</td>
                  <td>18 runs</td>
                  <td>45 runs</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 3.3 Waterfall pricing (Pages 11-12) ── */}
          <h3 className={styles.h2Title}>3.3 Waterfall pricing</h3>
          <p className={styles.proseP}>
            Waterfall capabilities need a different rule, because a single logical lookup may touch several providers before one answers. The provider share of a waterfall run is the larger of two figures: the successful provider&apos;s cost plus 35%, or the total cost of every attempt in the run including misses and failures. One platform fee is charged when something was found. A run that finds nothing pays exactly what its attempts cost the providers — which is zero when every provider in the chain charges only on success.
          </p>

          <div className={styles.calloutBox}>
            <div className={styles.calloutEyebrow}>WHY THE RUN RECORD SHOWS THREE NUMBERS</div>
            <div className={styles.calloutBody}>
              <p>
                Every waterfall run publishes the hit cost, the cost of all attempts and the resulting margin. The pricing rule is therefore auditable from the receipt rather than inferred from an invoice line, and max_cost_usd caps the whole chain rather than each attempt.
              </p>
            </div>
          </div>

          {/* ── 3.4 Balance mechanics (Page 12) ── */}
          <h3 className={styles.h2Title}>3.4 Balance mechanics</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>MECHANIC</th>
                  <th>RULE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Starting grant</td>
                  <td>Every new workspace begins with $2.00 and no card on file. An agent that self-registers through its first keyless run receives the same $2.00 and the key is returned once.</td>
                </tr>
                <tr>
                  <td>Card top-ups</td>
                  <td>First top-up from $5, then $10 to $5,000 per top-up through Stripe. Auto top-up is configurable from the dashboard.</td>
                </tr>
                <tr>
                  <td>Credit expiry</td>
                  <td>Purchased credit is spendable for 12 months from purchase and is spent oldest-first. Grants and promotional credit retain the expiry they were issued with. The next expiry is exposed on the balance page and through the wallet balance endpoint.</td>
                </tr>
                <tr>
                  <td>Holds</td>
                  <td>The estimated maximum cost of a run is reserved against the balance before execution and released on failure.</td>
                </tr>
                <tr>
                  <td>Ledger</td>
                  <td>Every debit carries the run identifier, the units billed, the provider share and the fee. It is exportable from the dashboard or through the wallet activities endpoint.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 3.5 Annual blocks (Page 12) ── */}
          <h3 className={styles.h2Title}>3.5 Annual blocks</h3>
          <p className={styles.proseP}>
            For teams committing five thousand dollars or more a year, prepaid blocks are invoiced once and credited on payment. Block credit is spent at exactly the same per-run prices as card credit — the discount is delivered as extra credit rather than as a separate price list, which keeps a single pricing surface across every workspace regardless of contract size.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>BLOCK</th>
                  <th>INVOICED</th>
                  <th>CREDIT ISSUED</th>
                  <th>EFFECTIVE RATE</th>
                  <th>TERMS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Starter</td>
                  <td>$5,000 / year</td>
                  <td>$5,500 (10% extra)</td>
                  <td>90.9¢ per credit dollar</td>
                  <td>Stripe invoice, net 30, PO supported. Valid 12 months from credit date.</td>
                </tr>
                <tr>
                  <td>Team</td>
                  <td>$25,000 / year</td>
                  <td>$28,750 (15% extra)</td>
                  <td>87.0¢ per credit dollar</td>
                  <td>Stripe invoice, net 30, PO supported. Valid 12 months from credit date.</td>
                </tr>
                <tr>
                  <td>Scale</td>
                  <td>$100,000 / year</td>
                  <td>$120,000 (20% extra)</td>
                  <td>83.3¢ per credit dollar</td>
                  <td>Stripe invoice, net 30, PO supported. Valid 12 months from credit date.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.proseP}>
            Unused block credit is not refunded and does not roll over past expiry. Enterprise arrangements extend the same model with volume pricing, dedicated master accounts on chosen providers, higher rate limits, invoicing and single sign-on.
          </p>

          {/* ── 3.6 Agent-native payment (Page 13) ── */}
          <h3 className={styles.h2Title}>3.6 Agent-native payment</h3>
          <p className={styles.proseP}>
            Card payment presumes a human. For agent-to-agent settlement the platform supports x402: the agent signs a USDC transfer to the platform&apos;s receiving address on Base, and the payment is verified and settled through the Coinbase Developer Platform facilitator where keys are configured, or a public facilitator otherwise. The platform never holds a customer wallet key. Every settlement is written to the workspace audit log alongside the human-initiated top-ups, so a mixed-funding workspace still reconciles to one ledger.
          </p>

          <h4 className={styles.h3Accent}>Where the margin comes from</h4>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>REVENUE LINE</th>
                  <th>BASIS</th>
                  <th>CHARACTERISTIC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Platform fee</td>
                  <td>$0.001 on every successful run, identical for every tool</td>
                  <td>Volume-linked, provider-independent, unaffected by upstream price changes.</td>
                </tr>
                <tr>
                  <td>Cost-plus spread</td>
                  <td>15% on the provider price for runs on master accounts</td>
                  <td>Scales with spend; eliminated by design when a workspace brings its own key.</td>
                </tr>
                <tr>
                  <td>Waterfall spread</td>
                  <td>35% on the successful provider&apos;s cost, floored at the total cost of attempts</td>
                  <td>Compensates for the risk of paying for misses on multi-provider lookups.</td>
                </tr>
                <tr>
                  <td>Block prepayment</td>
                  <td>Annual invoiced commitments of $5k, $25k and $100k</td>
                  <td>Working capital and revenue predictability; discount delivered as credit, not price.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════
            SECTION 04: USER-FACING FEATURES (Pages 14-15)
        ══════════════════════════════════════════════════════════════════════════ */}
        <section id="section-04">
          <div className={styles.sectionBanner}>
            <div className={styles.sectionBadgeNum}>04</div>
            <div className={styles.sectionBannerText}>
              <span className={styles.sectionBannerEyebrow}>SECTION FOUR</span>
              <h2 className={styles.sectionBannerTitle}>User-Facing Features</h2>
            </div>
          </div>

          <p className={styles.proseP}>
            The product has two distinct users with almost no overlap in what they need. The agent needs a credential, a capability name and a price it can reason about. The human needs to know what the agent is doing, what it is spending and how to stop it. The surface area is organised around that split.
          </p>

          {/* ── 4.1 Discovery and evidence (Page 14) ── */}
          <h3 className={styles.h2Title}>4.1 Discovery and evidence</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>SURFACE</th>
                  <th>WHAT IT DOES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Capability catalog</td>
                  <td>Every routed task with its candidate count, the currently selected best live tool, that tool&apos;s price, its measured success rate and the sample size behind it.</td>
                </tr>
                <tr>
                  <td>Tool directory</td>
                  <td>The full catalog of individual tools, each with a price, a health status, a latency profile and a run history.</td>
                </tr>
                <tr>
                  <td>Category hubs</td>
                  <td>Domain-level views grouping related capabilities with their shared provider set.</td>
                </tr>
                <tr>
                  <td>Leaderboards</td>
                  <td>Reliability, speed, price and usage rankings per category, rebuilt at most every five minutes and archived weekly. Qualification requires at least five runs in the window; the fastest board additionally requires a non-zero median and a success rate of at least 50%.</td>
                </tr>
                <tr>
                  <td>Benchmarks and comparisons</td>
                  <td>Head-to-head views of competing tools on the same capability, drawn from the same measured window.</td>
                </tr>
                <tr>
                  <td>Sample outputs and receipts</td>
                  <td>112 capabilities publish a real sample output attached to a verifiable run receipt.</td>
                </tr>
                <tr>
                  <td>Datasets and reports</td>
                  <td>Exportable snapshots of the measured catalog, each carrying the timestamp of the snapshot it was taken from.</td>
                </tr>
                <tr>
                  <td>Monitors and signals</td>
                  <td>Standing watches over tools and data sources that surface change rather than requiring a poll.</td>
                </tr>
                <tr>
                  <td>Cost calculator</td>
                  <td>Pre-run modelling of a workload&apos;s cost against current catalog prices.</td>
                </tr>
                <tr>
                  <td>Free tools tier</td>
                  <td>First-party and public-data endpoints that carry no provider price at all — only the platform fee.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 4.2 Developer and agent integration (Pages 14-15) ── */}
          <h3 className={styles.h2Title}>4.2 Developer and agent integration</h3>
          <p className={styles.proseP}>
            Integration is deliberately available at four levels of abstraction, because the right level depends on whether a human or a model is doing the wiring.
          </p>

          <ul className={styles.proseList}>
            <li>
              <strong>Raw HTTP.</strong> A single POST to /v1/run naming either a tool or a capability, authenticated with one bearer token. The keyless variant of the same call performs registration as a side effect.
            </li>
            <li>
              <strong>MCP.</strong> The full catalog exposed as an MCP server, with OAuth tokens that expire after 30 days and refresh tokens after 180, so any MCP-capable client inherits the entire tool surface without bespoke work.
            </li>
            <li>
              <strong>Framework adapters.</strong> Native paths for Claude Code, Cursor, ChatGPT, Codex, LangChain, CrewAI, the Vercel AI SDK and OpenAI Agents, plus first-party SDKs and a CLI installer.
            </li>
            <li>
              <strong>Self-configuration.</strong> A published SKILL.md manifest and an llms.txt descriptor, so an agent can read the platform&apos;s own capabilities and configure itself without a human writing integration code at all.
            </li>
          </ul>

          <div className={styles.codeSnippet}>
            {`$ curl https://cracked.ai/v1/run -H "Authorization: Bearer ck_live_..." \\
  -d '{"capability":"web-search","input":{"query":"peptide therapy","limit":10}}'`}
          </div>

          <p className={styles.proseP}>
            An embeddable widget extends the same catalog into third-party surfaces, and a provider-side application path lets vendors list their own API into the registry, where it is measured on the same terms as everything else.
          </p>

          {/* ── 4.3 Workspace governance (Page 15) ── */}
          <h3 className={styles.h2Title}>4.3 Workspace governance</h3>
          <p className={styles.proseP}>
            Governance is the human half of the product, and it is where an agent platform either becomes deployable inside a company or does not. Controls attach at three levels of granularity — the workspace, an individual key, or a tag applied across keys — and are evaluated in the gateway before any credential is resolved.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>CONTROL</th>
                  <th>SCOPE AND BEHAVIOUR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Role model</td>
                  <td>Four roles. Owners manage roles and single sign-on. Owners and admins invite members, set budgets, write policies and request invoices. Approvers decide approval requests. Members run tools.</td>
                </tr>
                <tr>
                  <td>Capability and provider policy</td>
                  <td>Allow and deny lists for capabilities and for providers, so a workspace can forbid an entire upstream vendor outright.</td>
                </tr>
                <tr>
                  <td>Cost ceilings</td>
                  <td>A maximum cost per run alongside daily and monthly caps.</td>
                </tr>
                <tr>
                  <td>Time windows</td>
                  <td>Allowed hours, so an agent cannot transact outside an approved operating window.</td>
                </tr>
                <tr>
                  <td>Approval thresholds</td>
                  <td>Runs above a configured value route to an approver queue instead of executing.</td>
                </tr>
                <tr>
                  <td>Kill switches</td>
                  <td>A key or an entire workspace can be frozen, and the freeze is evaluated before any credential is resolved.</td>
                </tr>
                <tr>
                  <td>Key scoping</td>
                  <td>An API key is bound to one workspace and cannot create other keys, invite members or change billing; those actions require a signed-in dashboard session.</td>
                </tr>
                <tr>
                  <td>Output storage toggle</td>
                  <td>A workspace can disable run output storage entirely with a single workspace patch.</td>
                </tr>
                <tr>
                  <td>Ledger and audit access</td>
                  <td>Ledger export and the full audit log are readable in the dashboard, through the API, and as CSV or JSON.</td>
                </tr>
                <tr>
                  <td>Single sign-on</td>
                  <td>Enterprise workspaces can enforce SAML and map an email domain to the workspace.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.calloutBox}>
            <div className={styles.calloutEyebrow}>THE FUNDING EXPERIENCE</div>
            <div className={styles.calloutBody}>
              <p>
                A human arriving at the platform is not there to write code — they are there to fund and supervise an agent that is already running. The dashboard is built around that: balance and next expiry, a ledger where every debit resolves to the run that caused it, policy authorship, an approval queue, and a freeze control that takes effect before the next credential resolution.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════
            SECTION 05: SECURITY & AUDITABILITY (Pages 16-18)
        ══════════════════════════════════════════════════════════════════════════ */}
        <section id="section-05">
          <div className={styles.sectionBanner}>
            <div className={styles.sectionBadgeNum}>05</div>
            <div className={styles.sectionBannerText}>
              <span className={styles.sectionBannerEyebrow}>SECTION FIVE</span>
              <h2 className={styles.sectionBannerTitle}>Security &amp; Auditability</h2>
            </div>
          </div>

          <p className={styles.proseP}>
            The platform holds two things that matter: other people&apos;s provider credentials, and the record of what their agents did with them. The security model is therefore built around a single question — what would a database read alone reveal — and the answer is designed to be nothing usable.
          </p>

          {/* ── 5.1 Key custody (Page 16) ── */}
          <h3 className={styles.h2Title}>5.1 Key custody</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>CREDENTIAL TYPE</th>
                  <th>HOW IT IS HELD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cracked API keys</td>
                  <td>Generated from the operating system random source, shown once, stored as a SHA-256 hash plus a display prefix. A database read yields no usable key.</td>
                </tr>
                <tr>
                  <td>MCP OAuth tokens</td>
                  <td>Stored as hashes only. Access tokens expire after 30 days, refresh tokens after 180.</td>
                </tr>
                <tr>
                  <td>Master provider accounts</td>
                  <td>Keys live in the application environment, and in the runner&apos;s environment where a runner is deployed — never in the database. The application never transmits a master key to the runner; each side reads its own environment.</td>
                </tr>
                <tr>
                  <td>Customer provider keys</td>
                  <td>AES-256-GCM in the database under a key held in the application environment. Decrypted only inside a run. The dashboard shows the first and last four characters and never the value again.</td>
                </tr>
                <tr>
                  <td>Vault secrets</td>
                  <td>Write-only. Decrypted only inside a relay call or a one-time CLI environment exchange; never returned to a browser, an API response or a model.</td>
                </tr>
                <tr>
                  <td>Passwords</td>
                  <td>Held by the authentication provider. The platform&apos;s own tables never contain a password.</td>
                </tr>
                <tr>
                  <td>Payment instruments</td>
                  <td>Card numbers are entered on payment-provider-hosted pages and are never sent to or stored by the platform. For x402, the agent signs the transfer and the platform never holds a customer wallet key.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 5.2 Encryption (Page 16) ── */}
          <h3 className={styles.h2Title}>5.2 Encryption</h3>
          <ul className={styles.proseList}>
            <li>
              <strong>At rest.</strong> AES-256-GCM with a random 96-bit nonce per record and an authentication tag, so a modified ciphertext fails to decrypt rather than decrypting to garbage. The encryption key is held in the application environment, not in the database.
            </li>
            <li>
              <strong>Storage layer.</strong> The database and its backups run on managed Postgres with volume and backup encryption.
            </li>
            <li>
              <strong>In transit.</strong> All traffic to the site, the API and the MCP endpoint is served over TLS. Upstream provider calls are made over HTTPS, and the relay refuses plain HTTP outright.
            </li>
          </ul>

          {/* ── 5.3 Access control (Pages 16-17) ── */}
          <h3 className={styles.h2Title}>5.3 Access control</h3>
          <p className={styles.proseP}>
            Beyond the role model and the policy engine described in the previous section, three structural controls narrow the blast radius of any single compromise.
          </p>

          <ul className={styles.proseList}>
            <li>
              <strong>Row-level security</strong> in Postgres restricts reads to workspace members; writes pass through the application service role rather than a client credential.
            </li>
            <li>
              <strong>Staff-only endpoints</strong> are gated by an allow-list of staff addresses and require a signed-in dashboard session. They are not reachable with an API key at all.
            </li>
            <li>
              <strong>An enterprise workspace</strong> can move the upstream call itself into its own network with a private runner, so provider traffic never leaves the customer&apos;s perimeter.
            </li>
          </ul>

          {/* ── 5.4 Logging boundaries (Page 17) ── */}
          <h3 className={styles.h2Title}>5.4 Logging boundaries</h3>
          <p className={styles.proseP}>
            The logging design draws an explicit line: enough is recorded that every charge has a receipt, and nothing beyond that line is retained.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>LOGGED</th>
                  <th>NEVER STORED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Run rows — provider, endpoint, input, output, status, duration and cost for every run.
                    <br />
                    <em>Output is omitted when the workspace has disabled output storage.</em>
                  </td>
                  <td>Plaintext API keys or OAuth tokens — hashes only.</td>
                </tr>
                <tr>
                  <td>Run traces — each gate that ran (authentication, rate limit, freeze, policy, budget, hold) with its result.</td>
                  <td>
                    Plaintext provider credentials or vault secrets in the database — ciphertext only. Plaintext exists in memory for the duration of a call.
                  </td>
                </tr>
                <tr>
                  <td>Per-upstream-call metadata — host, method, HTTP status and elapsed time.</td>
                  <td>Upstream request paths, query strings, headers or bodies. They are never written to a trace.</td>
                </tr>
                <tr>
                  <td>
                    Audit events — actor, target, IP address, user agent and a metadata object filtered so any field named like a key, secret, token or ciphertext is dropped.
                  </td>
                  <td>Card numbers or bank details — entered on payment-provider-hosted pages.</td>
                </tr>
                <tr>
                  <td>
                    A salted hash of the caller address for anonymous playground use, agent self-registration and the contact form, used for rate limiting.
                  </td>
                  <td>Raw IP addresses for any of those anonymous paths.</td>
                </tr>
                <tr>
                  <td>Hosting request logs and transactional email delivery events at the respective vendors.</td>
                  <td>
                    Secret values inside relayed responses — substituted values are redacted from headers and body before the response is stored or returned.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 5.5 The audit chain (Page 17) ── */}
          <h3 className={styles.h2Title}>5.5 The audit chain</h3>
          <p className={styles.proseP}>
            Every privileged action in a workspace is written to an insert-only audit log: API key creation, revocation, rotation and edits; invites, role changes and removals; budget and policy changes; approvals; freezes and pauses; provider credential and secret changes; top-ups and invoices; publishing or suspending a listed API; single sign-on domain changes; and x402 settlements.
          </p>

          <div className={styles.calloutBox}>
            <div className={styles.calloutEyebrow}>TAMPER EVIDENCE IS STRUCTURAL, NOT PROCEDURAL</div>
            <div className={styles.calloutBody}>
              <p>
                Each audit row records the actor — a user or an API key — the target, the IP address, the user agent and secret-free metadata. Each row is chained to the previous one by a sequence number and a SHA-256 hash written by a database trigger, and the database refuses updates and deletes outright.
              </p>
              <p>
                The chain can be verified two ways: through a verification endpoint on the API, or offline with the published verification script. An auditor does not have to trust the platform&apos;s assertion that the log is intact — they can recompute it.
              </p>
            </div>
          </div>

          {/* ── 5.6 Data boundaries and sub-processors (Page 18) ── */}
          <h3 className={styles.h2Title}>5.6 Data boundaries and sub-processors</h3>
          <p className={styles.proseP}>
            A provider receives data only when a workspace actually runs one of its endpoints, and a policy can deny any provider for a workspace, a key or a tag. Providers connected with a customer&apos;s own key process that data under the customer&apos;s own agreement with them. The infrastructure vendor set is derived from the services the application is configured to call rather than from a static list.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>FUNCTION</th>
                  <th>DATA INVOLVED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Application hosting and edge network</td>
                  <td>Request data and logs.</td>
                </tr>
                <tr>
                  <td>Database, authentication and file storage</td>
                  <td>Account, workspace, run, ledger, hold and audit data; encrypted provider credentials and vault secrets.</td>
                </tr>
                <tr>
                  <td>Card payments, top-ups and invoicing</td>
                  <td>Billing contact and payment status. Card data never touches the platform.</td>
                </tr>
                <tr>
                  <td>Transactional email</td>
                  <td>Recipient address, subject and plain-text body.</td>
                </tr>
                <tr>
                  <td>x402 payment facilitation</td>
                  <td>Signed payment authorisation, payer and receiving addresses, amount and network. No account data.</td>
                </tr>
                <tr>
                  <td>Product and website analytics</td>
                  <td>Pseudonymous usage events, disabled when the browser sends Do Not Track.</td>
                </tr>
                <tr>
                  <td>Upstream tool providers</td>
                  <td>Run inputs and outputs, only for endpoints the workspace actually invokes.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 5.7 Certification position, incidents and deletion (Page 18) ── */}
          <h3 className={styles.h2Title}>5.7 Certification position, incidents and deletion</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>CURRENT STATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SOC 2</td>
                  <td>No report is held. A Type I engagement is planned and has not started; no completion date is set and no certification is claimed.</td>
                </tr>
                <tr>
                  <td>Other certifications</td>
                  <td>None held or claimed. Signed security questionnaires and data processing agreements are available on request.</td>
                </tr>
                <tr>
                  <td>Incident response</td>
                  <td>
                    Reports go to the security address. Affected customers are notified at workspace owner addresses once scope is known. Every production incident is recorded publicly with cause, duration and the fix that shipped, rendered from a file in the repository.
                  </td>
                </tr>
                <tr>
                  <td>Vulnerability disclosure</td>
                  <td>A published policy covering the affected endpoint, reproduction steps and proof of concept, mirrored in the repository. Reports are acknowledged by email.</td>
                </tr>
                <tr>
                  <td>Data deletion</td>
                  <td>
                    Keys, connections, secrets, files and members are deletable from the dashboard or the API. Deleting a workspace removes its runs, traces, ledger, holds, credentials, secrets, invoices and audit log through cascading deletes.
                  </td>
                </tr>
                <tr>
                  <td>Retention</td>
                  <td>Per-record-type retention is published in the trust centre alongside the incident history.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════
            SECTION 06: WHAT MAKES THIS DIFFERENT (Pages 19-20)
        ══════════════════════════════════════════════════════════════════════════ */}
        <section id="section-06">
          <div className={styles.sectionBanner}>
            <div className={styles.sectionBadgeNum}>06</div>
            <div className={styles.sectionBannerText}>
              <span className={styles.sectionBannerEyebrow}>SECTION SIX</span>
              <h2 className={styles.sectionBannerTitle}>What Makes This Different</h2>
            </div>
          </div>

          <p className={styles.proseP}>
            There are many API aggregators. What separates this build is not the size of the catalog but seven structural decisions, each of which costs the platform something and each of which is verifiable by the customer rather than asserted by the vendor.
          </p>

          <div className={styles.differentiatorsGrid}>
            <div className={styles.diffCard}>
              <span className={styles.diffNum}>01</span>
              <div className={styles.diffBody}>
                <h4 className={styles.diffTitle}>Measured, never self-reported</h4>
                <p className={styles.diffText}>
                  Every health figure, latency figure and price is computed from run records written by the platform&apos;s own router. No provider supplies its own number and no figure comes from a synthetic benchmark. A success rate is published only after five measured runs, and the sample size is printed beside every figure so a small sample is visible as a small sample.
                </p>
              </div>
            </div>

            <div className={styles.diffCard}>
              <span className={styles.diffNum}>02</span>
              <div className={styles.diffBody}>
                <h4 className={styles.diffTitle}>Failure is free, and it is counted</h4>
                <p className={styles.diffText}>
                  An upstream 5xx or timeout costs the caller nothing — zero units, zero provider charge, zero fee — but the run is still recorded and still counts against that tool&apos;s published success rate. The incentive is aligned in the only direction that matters: the platform earns nothing from a broken provider and its own catalog page says so.
                </p>
              </div>
            </div>

            <div className={styles.diffCard}>
              <span className={styles.diffNum}>03</span>
              <div className={styles.diffBody}>
                <h4 className={styles.diffTitle}>The price is known before the call</h4>
                <p className={styles.diffText}>
                  Discovery and inspection are free, the price model is returned before spend, per-result tools bill only the results actually returned, and max_cost_usd caps a run before it starts. An agent can reason about cost as a parameter rather than discovering it on an invoice.
                </p>
              </div>
            </div>

            <div className={styles.diffCard}>
              <span className={styles.diffNum}>04</span>
              <div className={styles.diffBody}>
                <h4 className={styles.diffTitle}>Routing is the product, not the catalog</h4>
                <p className={styles.diffText}>
                  A caller names a task, not a vendor. Candidates are filtered for availability, ranked by verification, health class and price, tried up to three deep, and independently retried on declared endpoint-level fallbacks. Provider selection is a runtime decision informed by live evidence rather than a build-time decision frozen into the caller&apos;s code.
                </p>
              </div>
            </div>

            <div className={styles.diffCard}>
              <span className={styles.diffNum}>05</span>
              <div className={styles.diffBody}>
                <h4 className={styles.diffTitle}>Agent-native identity and payment</h4>
                <p className={styles.diffText}>
                  Registration happens inside the work: a keyless run creates the workspace, executes the request and returns the key in a response header, with the same starting grant a human would get. Settlement can be signed by the agent in USDC on-chain, or funded by a human with a card. Identity and funding are decoupled by design.
                </p>
              </div>
            </div>

            <div className={styles.diffCard}>
              <span className={styles.diffNum}>06</span>
              <div className={styles.diffBody}>
                <h4 className={styles.diffTitle}>Cost-plus that the customer can remove</h4>
                <p className={styles.diffText}>
                  The 15% master-account markup exists to pay for the provider relationship, and any workspace that already has that relationship can connect its own key and pay the platform fee alone. The economics are stated as a rule rather than a negotiation, and the cheapest configuration is documented on the public pricing page.
                </p>
              </div>
            </div>

            <div className={styles.diffCard}>
              <span className={styles.diffNum}>07</span>
              <div className={styles.diffBody}>
                <h4 className={styles.diffTitle}>Auditability that does not require trust</h4>
                <p className={styles.diffText}>
                  The audit log is insert-only, hash-chained by a database trigger, and refuses updates and deletes at the database layer. The chain is verifiable through the API or offline with a published script. Every ledger debit resolves to the run identifier that caused it, and every waterfall run publishes its hit cost, its attempt cost and its margin.
                </p>
              </div>
            </div>
          </div>

          <h3 className={styles.h2Title}>The limits the platform publishes about itself</h3>

          <p className={styles.proseP}>
            The measurement methodology is published with its own weaknesses stated, which is itself part of the differentiation. Small samples move sharply — a rate over five runs shifts twenty points on a single failure, so the sample size is always printed. The measured window contains verification and canary traffic alongside customer traffic with whatever inputs those callers chose, so a provider that behaves differently on other inputs is not captured. Latency is measured from one region to the provider and back, excluding the agent&apos;s own network path.
          </p>

          <p className={styles.proseP}>
            And the figures describe the recent past of a specific endpoint through this router; they are not a service-level commitment by the platform or by any provider.
          </p>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════
            SECTION 07: OUTCOMES (Pages 21-23)
        ══════════════════════════════════════════════════════════════════════════ */}
        <section id="section-07">
          <div className={styles.sectionBanner}>
            <div className={styles.sectionBadgeNum}>07</div>
            <div className={styles.sectionBannerText}>
              <span className={styles.sectionBannerEyebrow}>SECTION SEVEN</span>
              <h2 className={styles.sectionBannerTitle}>Outcomes</h2>
            </div>
          </div>

          <p className={styles.proseP}>
            The platform instruments itself, so the reporting framework below is populated directly from the runs table, the wallet ledger, the metrics window and the audit log rather than from a separate analytics layer. Each metric is defined here with its data source and its reporting cadence; values are entered when a reporting period closes.
          </p>

          {/* ── 7.1 Adoption and activation (Page 21) ── */}
          <h3 className={styles.h2Title}>7.1 Adoption and activation</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>METRIC</th>
                  <th>DEFINITION</th>
                  <th>SOURCE</th>
                  <th>PERIOD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Workspaces created</td>
                  <td>New workspaces in period, split human sign-up versus agent self-registration</td>
                  <td>Workspace table</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Agent self-registration share</td>
                  <td>Share of new workspaces created by a keyless first run</td>
                  <td>Runs + workspace table</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Time to first successful run</td>
                  <td>Median elapsed time from workspace creation to first 2xx run</td>
                  <td>Runs table</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Grant-to-paid conversion</td>
                  <td>Share of workspaces that top up after exhausting the $2 grant</td>
                  <td>Wallet ledger</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Framework mix</td>
                  <td>Distribution of first runs across MCP, SDK, raw HTTP and skill-manifest paths</td>
                  <td>Run metadata</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Active workspaces</td>
                  <td>Workspaces with at least one billed run in period</td>
                  <td>Runs table</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 7.2 Execution volume and reliability (Pages 21-22) ── */}
          <h3 className={styles.h2Title}>7.2 Execution volume and reliability</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>METRIC</th>
                  <th>DEFINITION</th>
                  <th>SOURCE</th>
                  <th>PERIOD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Billed runs</td>
                  <td>Successful runs excluding cache hits and canaries</td>
                  <td>Runs table</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Platform-wide success rate</td>
                  <td>Share of non-cached, non-blocked runs completing 2xx</td>
                  <td>Metrics window</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Fallback engagement rate</td>
                  <td>Share of capability runs where the first candidate failed and a fallback answered</td>
                  <td>Run traces</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Fallback recovery rate</td>
                  <td>Share of engaged fallbacks that produced a successful answer</td>
                  <td>Run traces</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Median and p95 latency</td>
                  <td>Per capability and platform-wide, failed runs included</td>
                  <td>Metrics window</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Cache hit rate</td>
                  <td>Share of runs served from the result cache</td>
                  <td>Runs table</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Capabilities with a measured rate</td>
                  <td>Count of capabilities where a candidate has cleared five measured runs</td>
                  <td>Capability table</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Providers dropped by probe</td>
                  <td>Aggregated MCP servers removed after three consecutive failed nightly listings</td>
                  <td>MCP probe log</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 7.3 Unit economics (Page 22) ── */}
          <h3 className={styles.h2Title}>7.3 Unit economics</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>METRIC</th>
                  <th>DEFINITION</th>
                  <th>SOURCE</th>
                  <th>PERIOD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gross transaction value</td>
                  <td>Total provider price plus fees debited in period</td>
                  <td>Wallet ledger</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Platform fee revenue</td>
                  <td>Count of successful runs multiplied by the per-run fee</td>
                  <td>Wallet ledger</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Cost-plus spread</td>
                  <td>Margin captured on master-account runs</td>
                  <td>Wallet ledger</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Waterfall spread</td>
                  <td>Margin captured on waterfall runs, net of paid misses</td>
                  <td>Run records</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>BYOK share of runs</td>
                  <td>Share of successful runs executed on customer-owned credentials</td>
                  <td>Credential resolution log</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Average revenue per workspace</td>
                  <td>Fee plus spread divided by active workspaces</td>
                  <td>Wallet ledger</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Prepaid balance outstanding</td>
                  <td>Unspent credit on balance, with next expiry profile</td>
                  <td>Wallet ledger</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Block-committed revenue</td>
                  <td>Annual block credit issued and unconsumed</td>
                  <td>Invoices + ledger</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Cost of failed runs</td>
                  <td>Provider charges absorbed on runs that were not billed to the caller</td>
                  <td>Runs table</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 7.4 Governance and trust (Pages 22-23) ── */}
          <h3 className={styles.h2Title}>7.4 Governance and trust</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>METRIC</th>
                  <th>DEFINITION</th>
                  <th>SOURCE</th>
                  <th>PERIOD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Policy-blocked runs</td>
                  <td>Runs stopped at the gateway by policy, freeze, budget or hours</td>
                  <td>Run traces</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Approval queue volume and latency</td>
                  <td>Runs routed to an approver and median time to decision</td>
                  <td>Audit log</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Kill-switch activations</td>
                  <td>Key and workspace freezes in period</td>
                  <td>Audit log</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Audit chain verification runs</td>
                  <td>Successful chain verifications, by API and offline script</td>
                  <td>Audit verification log</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Ledger export volume</td>
                  <td>Ledger and audit exports taken by customers</td>
                  <td>Audit log</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Output-storage opt-outs</td>
                  <td>Workspaces running with output storage disabled</td>
                  <td>Workspace settings</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Production incidents</td>
                  <td>Incidents recorded with cause, duration and shipped fix</td>
                  <td>Incident record</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.calloutBox}>
            <div className={styles.calloutEyebrow}>REPORTING CADENCE</div>
            <div className={styles.calloutBody}>
              <p>
                Catalog and measurement metrics regenerate continuously — public pages at most hourly, leaderboards at most every five minutes, the MCP probe nightly and canaries every fifteen minutes. Commercial and governance metrics close on the calendar month against the wallet ledger and the audit log.
              </p>
              <p>
                Because measurement and billing derive from the same run record, adoption, reliability and revenue reconcile to a single row per run rather than to three separate systems.
              </p>
            </div>
          </div>
        </section>

        {/* ── Document Footer ── */}
        <footer className={styles.docFooter}>
          <span>CRACKED.AI · ENGINEERING CASE STUDY</span>
          <span>PG-AGI</span>
        </footer>
      </main>
    </div>
  );
}
