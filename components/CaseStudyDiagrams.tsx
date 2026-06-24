import React from 'react';

/**
 * Diagrams hand-drawn for the F Real Estate case study.
 * Sketchbook-style: paper bg, ink stroke, blue accents, hand-font labels.
 *
 * Each one is responsive (100% width, viewBox-driven).
 */

const COLORS = {
  ink: '#1a1a1a',
  paper: '#faf8f4',
  pencil: '#5a5a5a',
  rule: '#d9d4cb',
  blue: '#2563eb',
  blueSoft: '#dbeafe',
  yellow: '#fde68a',
  red: '#ef4444',
  green: '#16a34a',
};

// ───────────────────────────────────────────────────────────
// 1. SITEMAP — IA tree of the F Real Estate site
// Pages inferred from the live site: Home, About, Residential,
// Commercial, Hospitality, Press, Events, Blogs, Contact.
// ───────────────────────────────────────────────────────────
export const SitemapSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 900 540"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="F Real Estate sitemap"
  >
    {/* Paper bg */}
    <rect width="900" height="540" fill={COLORS.paper} />

    {/* Title */}
    <text x="40" y="44" fontFamily="'Caveat', cursive" fontSize="26" fill={COLORS.pencil}>
      Site Map — the canvas I designed within
    </text>

    {/* Root: Home */}
    <g>
      <rect x="380" y="80" width="140" height="48" rx="6" fill={COLORS.ink} />
      <text x="450" y="110" textAnchor="middle" fontFamily="serif" fontSize="18" fill={COLORS.paper} fontWeight="600">Home</text>
    </g>

    {/* Tier 1 connector lines */}
    {[100, 245, 390, 535, 680, 805].map((x, i) => (
      <path
        key={i}
        d={`M 450 128 C 450 160, ${x + 60} 160, ${x + 60} 200`}
        stroke={COLORS.pencil}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
    ))}

    {/* Tier 1: top-level pages */}
    {[
      { x: 100, label: 'About' },
      { x: 245, label: 'Residential' },
      { x: 390, label: 'Commercial' },
      { x: 535, label: 'Hospitality' },
      { x: 680, label: 'Press' },
      { x: 805, label: 'Contact' },
    ].map(({ x, label }) => (
      <g key={label}>
        <rect x={x} y="200" width="120" height="44" rx="6" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="1.5" />
        <text x={x + 60} y="227" textAnchor="middle" fontFamily="serif" fontSize="15" fill={COLORS.ink} fontWeight="500">
          {label}
        </text>
      </g>
    ))}

    {/* Tier 2 (under Press) — extra pages: Events, Blogs */}
    <path d="M 740 244 C 740 280, 740 280, 740 310" stroke={COLORS.pencil} strokeWidth="1.5" strokeDasharray="4 3" />
    <path d="M 740 244 C 740 280, 600 280, 600 310" stroke={COLORS.pencil} strokeWidth="1.5" strokeDasharray="4 3" />

    <g>
      <rect x="540" y="310" width="120" height="40" rx="6" fill={COLORS.paper} stroke={COLORS.pencil} strokeWidth="1.2" />
      <text x="600" y="335" textAnchor="middle" fontFamily="serif" fontSize="14" fill={COLORS.pencil}>Blogs</text>
    </g>
    <g>
      <rect x="680" y="310" width="120" height="40" rx="6" fill={COLORS.paper} stroke={COLORS.pencil} strokeWidth="1.2" />
      <text x="740" y="335" textAnchor="middle" fontFamily="serif" fontSize="14" fill={COLORS.pencil}>Events</text>
    </g>

    {/* Tier 2 under Residential — Project Detail (the scaling template) */}
    <path d="M 305 244 C 305 280, 305 280, 305 310" stroke={COLORS.blue} strokeWidth="1.6" />
    <g>
      <rect x="225" y="310" width="160" height="48" rx="6" fill={COLORS.blueSoft} stroke={COLORS.blue} strokeWidth="1.6" />
      <text x="305" y="332" textAnchor="middle" fontFamily="serif" fontSize="14" fill={COLORS.ink} fontWeight="600">Project Detail</text>
      <text x="305" y="350" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="13" fill={COLORS.blue}>1 template, many projects</text>
    </g>

    {/* Tier 3 — the 5 developer brands fanning out from Project Detail */}
    {[
      { x: 60, label: 'Merlin' },
      { x: 175, label: 'Terra Casa' },
      { x: 290, label: 'Danube' },
      { x: 405, label: 'SBP' },
      { x: 520, label: 'Glenworld' },
    ].map(({ x, label }) => (
      <g key={label}>
        <path d={`M 305 358 C 305 400, ${x + 50} 400, ${x + 50} 432`} stroke={COLORS.blue} strokeWidth="1.2" opacity="0.6" />
        <rect x={x} y="432" width="100" height="36" rx="999" fill={COLORS.paper} stroke={COLORS.blue} strokeWidth="1.4" />
        <text x={x + 50} y="455" textAnchor="middle" fontFamily="serif" fontSize="13" fill={COLORS.blue} fontWeight="500">
          {label}
        </text>
      </g>
    ))}

    {/* Hand-written annotation */}
    <text x="40" y="500" fontFamily="'Caveat', cursive" fontSize="20" fill={COLORS.pencil}>
      — Press grew into the credibility engine; what looked like a footer link became a top-level destination.
    </text>
  </svg>
);

// ───────────────────────────────────────────────────────────
// 2. COMPONENTS — the 3 components Vidhi actually designed
// Footer, Mobile Navigation, Contact Form. Truthful, not invented.
// ───────────────────────────────────────────────────────────
export const ComponentsSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 900 540"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Components designed for the team’s shared Figma library"
  >
    <rect width="900" height="540" fill={COLORS.paper} />

    {/* Title */}
    <text x="40" y="44" fontFamily="'Caveat', cursive" fontSize="26" fill={COLORS.pencil}>
      Reusable Components — designed by me · adopted into the shared library
    </text>

    {/* === COMPONENT 1: FOOTER === */}
    <g>
      <text x="40" y="100" fontFamily="serif" fontSize="14" fill={COLORS.ink} fontWeight="600">01 · FOOTER</text>
      <rect x="40" y="115" width="820" height="100" rx="6" fill={COLORS.ink} />
      <text x="65" y="148" fontFamily="serif" fontSize="14" fill={COLORS.paper} fontWeight="600">An experience</text>
      <text x="65" y="166" fontFamily="serif" fontSize="14" fill={COLORS.paper} fontWeight="600">you'll never forget</text>
      <rect x="65" y="178" width="100" height="22" rx="11" fill={COLORS.paper} />
      <text x="115" y="194" textAnchor="middle" fontFamily="serif" fontSize="10" fill={COLORS.ink} fontWeight="600">CONNECT WITH US →</text>

      {/* Nav cols */}
      {[
        { x: 380, items: ['Home', 'Blogs', 'Events', 'Contact'] },
        { x: 470, items: ['About Us', 'Residential', 'Hospitality', 'Commercial'] },
      ].map((col, i) => (
        <g key={i}>
          {col.items.map((it, j) => (
            <text key={it} x={col.x} y={140 + j * 14} fontFamily="serif" fontSize="9" fill={COLORS.paper} opacity="0.85">{it}</text>
          ))}
        </g>
      ))}

      {/* Newsletter */}
      <text x="640" y="138" fontFamily="serif" fontSize="9" fill={COLORS.paper} opacity="0.7">SUBSCRIBE TO OUR NEWSLETTER</text>
      <rect x="640" y="148" width="190" height="22" rx="3" fill="none" stroke={COLORS.paper} strokeWidth="1" />
      <text x="650" y="163" fontFamily="serif" fontSize="9" fill={COLORS.paper} opacity="0.5">ENTER YOUR EMAIL ID</text>
    </g>

    {/* === COMPONENT 2: MOBILE NAV === */}
    <g>
      <text x="40" y="245" fontFamily="serif" fontSize="14" fill={COLORS.ink} fontWeight="600">02 · MOBILE NAV (closed → open)</text>

      {/* Closed state */}
      <rect x="40" y="260" width="180" height="240" rx="14" fill={COLORS.ink} stroke={COLORS.ink} strokeWidth="2" />
      <text x="55" y="282" fontFamily="serif" fontSize="9" fill={COLORS.paper} fontWeight="700">REAL ESTATE</text>
      <text x="55" y="293" fontFamily="serif" fontSize="7" fill={COLORS.paper} opacity="0.7">by fashiontv</text>
      {/* hamburger */}
      <line x1="190" y1="278" x2="205" y2="278" stroke={COLORS.paper} strokeWidth="1.5" />
      <line x1="190" y1="284" x2="205" y2="284" stroke={COLORS.paper} strokeWidth="1.5" />
      <line x1="190" y1="290" x2="205" y2="290" stroke={COLORS.paper} strokeWidth="1.5" />
      <text x="55" y="380" fontFamily="serif" fontSize="22" fill={COLORS.paper} fontWeight="300">Reimagine</text>
      <text x="55" y="404" fontFamily="serif" fontSize="22" fill={COLORS.paper} fontStyle="italic">luxury living.</text>

      {/* Open state */}
      <rect x="240" y="260" width="180" height="240" rx="14" fill={COLORS.ink} stroke={COLORS.ink} strokeWidth="2" />
      <text x="255" y="282" fontFamily="serif" fontSize="9" fill={COLORS.paper} fontWeight="700">REAL ESTATE</text>
      {/* close X */}
      <line x1="390" y1="276" x2="402" y2="288" stroke={COLORS.paper} strokeWidth="1.5" />
      <line x1="402" y1="276" x2="390" y2="288" stroke={COLORS.paper} strokeWidth="1.5" />
      {['Home', 'About Us', 'Residential', 'Commercial', 'Hospitality', 'Press', 'Contact'].map((l, i) => (
        <text key={l} x="255" y={320 + i * 22} fontFamily="serif" fontSize="13" fill={COLORS.paper} fontWeight="500">{l}</text>
      ))}

      {/* Arrow between states */}
      <path d="M 222 380 L 235 380 M 232 376 L 235 380 L 232 384" stroke={COLORS.pencil} strokeWidth="1.4" fill="none" />
    </g>

    {/* === COMPONENT 3: CONTACT FORM === */}
    <g>
      <text x="450" y="245" fontFamily="serif" fontSize="14" fill={COLORS.ink} fontWeight="600">03 · CONTACT FORM (B2B intent-qualifying)</text>

      <rect x="450" y="260" width="410" height="240" rx="6" fill="#e8e0d2" stroke={COLORS.ink} strokeWidth="1.5" />

      {/* Section: Personal Information */}
      <text x="470" y="285" fontFamily="serif" fontSize="13" fill={COLORS.ink} fontWeight="600">Personal Information</text>
      <line x1="470" y1="295" x2="700" y2="295" stroke={COLORS.ink} strokeWidth="1" opacity="0.3" />
      {/* Two field row */}
      <text x="470" y="312" fontFamily="serif" fontSize="9" fill={COLORS.pencil}>NAME</text>
      <line x1="470" y1="318" x2="630" y2="318" stroke={COLORS.pencil} strokeWidth="1" />
      <text x="650" y="312" fontFamily="serif" fontSize="9" fill={COLORS.pencil}>NUMBER</text>
      <line x1="650" y1="318" x2="830" y2="318" stroke={COLORS.pencil} strokeWidth="1" />
      <text x="470" y="338" fontFamily="serif" fontSize="9" fill={COLORS.pencil}>E-MAIL</text>
      <line x1="470" y1="344" x2="830" y2="344" stroke={COLORS.pencil} strokeWidth="1" />

      {/* Collapsed sections */}
      <text x="470" y="378" fontFamily="serif" fontSize="13" fill={COLORS.pencil} opacity="0.5">Developer Information</text>
      <line x1="470" y1="388" x2="830" y2="388" stroke={COLORS.pencil} strokeWidth="1" opacity="0.2" />

      <text x="470" y="408" fontFamily="serif" fontSize="13" fill={COLORS.pencil} opacity="0.5">Licensing Category</text>
      <line x1="470" y1="418" x2="830" y2="418" stroke={COLORS.pencil} strokeWidth="1" opacity="0.2" />

      {/* Submit button */}
      <rect x="470" y="450" width="80" height="28" rx="4" fill={COLORS.ink} />
      <text x="510" y="468" textAnchor="middle" fontFamily="serif" fontSize="11" fill={COLORS.paper}>SUBMIT</text>

      {/* Annotation arrow + note */}
      <path d="M 580 462 L 720 462 L 720 432" stroke={COLORS.blue} strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
      <text x="585" y="455" fontFamily="'Caveat', cursive" fontSize="14" fill={COLORS.blue}>3 sections, qualified at submit</text>
    </g>
  </svg>
);

// ───────────────────────────────────────────────────────────
// 3. HANDOFF — annotation layer on a real component (Contact form)
// Spacing tokens, states, breakpoints, edge cases.
// ───────────────────────────────────────────────────────────
export const HandoffSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 900 540"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Developer handoff annotation example"
  >
    <rect width="900" height="540" fill={COLORS.paper} />

    {/* Title */}
    <text x="40" y="40" fontFamily="'Caveat', cursive" fontSize="24" fill={COLORS.pencil}>
      Handoff annotation — Contact Form
    </text>

    {/* === FRAME: the component being annotated === */}
    <g>
      <rect x="120" y="80" width="440" height="380" rx="6" fill="#e8e0d2" stroke={COLORS.ink} strokeWidth="1.5" />

      {/* Heading */}
      <text x="150" y="118" fontFamily="serif" fontSize="18" fill={COLORS.ink} fontWeight="600">Personal Information</text>

      {/* Field 1 */}
      <text x="150" y="160" fontFamily="serif" fontSize="11" fill={COLORS.pencil}>NAME</text>
      <line x1="150" y1="170" x2="340" y2="170" stroke={COLORS.pencil} strokeWidth="1.2" />
      <text x="360" y="160" fontFamily="serif" fontSize="11" fill={COLORS.pencil}>NUMBER</text>
      <line x1="360" y1="170" x2="530" y2="170" stroke={COLORS.pencil} strokeWidth="1.2" />

      {/* Field 2 */}
      <text x="150" y="210" fontFamily="serif" fontSize="11" fill={COLORS.pencil}>E-MAIL</text>
      <line x1="150" y1="220" x2="530" y2="220" stroke={COLORS.pencil} strokeWidth="1.2" />

      {/* Submit button (in-focus state) */}
      <rect x="150" y="280" width="100" height="36" rx="4" fill={COLORS.ink} />
      <text x="200" y="304" textAnchor="middle" fontFamily="serif" fontSize="13" fill={COLORS.paper}>SUBMIT</text>

      {/* Submit button — disabled state mini preview */}
      <rect x="280" y="280" width="100" height="36" rx="4" fill={COLORS.pencil} opacity="0.4" />
      <text x="330" y="304" textAnchor="middle" fontFamily="serif" fontSize="13" fill={COLORS.paper}>SUBMIT</text>

      <text x="150" y="335" fontFamily="serif" fontSize="9" fill={COLORS.pencil}>default</text>
      <text x="280" y="335" fontFamily="serif" fontSize="9" fill={COLORS.pencil}>disabled (no e-mail)</text>
    </g>

    {/* === ANNOTATIONS === */}

    {/* Spacing token: top */}
    <line x1="150" y1="140" x2="150" y2="120" stroke={COLORS.blue} strokeWidth="1" />
    <line x1="146" y1="140" x2="154" y2="140" stroke={COLORS.blue} strokeWidth="1" />
    <line x1="146" y1="120" x2="154" y2="120" stroke={COLORS.blue} strokeWidth="1" />
    <text x="100" y="135" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill={COLORS.blue}>24</text>

    {/* Spacing token: between fields */}
    <line x1="100" y1="170" x2="100" y2="220" stroke={COLORS.blue} strokeWidth="1" />
    <line x1="96" y1="170" x2="104" y2="170" stroke={COLORS.blue} strokeWidth="1" />
    <line x1="96" y1="220" x2="104" y2="220" stroke={COLORS.blue} strokeWidth="1" />
    <text x="78" y="200" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill={COLORS.blue}>32</text>

    {/* Spacing token: between section + submit */}
    <line x1="100" y1="220" x2="100" y2="280" stroke={COLORS.blue} strokeWidth="1" />
    <line x1="96" y1="220" x2="104" y2="220" stroke={COLORS.blue} strokeWidth="1" />
    <line x1="96" y1="280" x2="104" y2="280" stroke={COLORS.blue} strokeWidth="1" />
    <text x="78" y="255" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill={COLORS.blue}>48</text>

    {/* Callout: focus state */}
    <path d="M 250 300 L 320 380 L 600 380" stroke={COLORS.red} strokeWidth="1.2" strokeDasharray="4 2" fill="none" />
    <circle cx="250" cy="300" r="3" fill={COLORS.red} />
    <text x="610" y="376" fontFamily="'Caveat', cursive" fontSize="16" fill={COLORS.red}>states drawn:</text>
    <text x="610" y="396" fontFamily="serif" fontSize="11" fill={COLORS.ink}>• default</text>
    <text x="610" y="412" fontFamily="serif" fontSize="11" fill={COLORS.ink}>• focus (1.5px ink stroke)</text>
    <text x="610" y="428" fontFamily="serif" fontSize="11" fill={COLORS.ink}>• disabled (40% opacity)</text>

    {/* === RIGHT-SIDE: spec panel === */}
    <g>
      <rect x="600" y="80" width="265" height="270" rx="6" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="1.2" />
      <text x="615" y="105" fontFamily="serif" fontSize="13" fill={COLORS.ink} fontWeight="700">SPEC</text>
      <line x1="615" y1="113" x2="850" y2="113" stroke={COLORS.ink} strokeWidth="1" />

      {/* Spacing tokens */}
      <text x="615" y="135" fontFamily="serif" fontSize="11" fill={COLORS.pencil} fontWeight="600">SPACING TOKENS</text>
      <text x="615" y="153" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill={COLORS.ink}>4 · 8 · 12 · 16 · 24 · 32 · 48</text>

      {/* Breakpoints */}
      <text x="615" y="180" fontFamily="serif" fontSize="11" fill={COLORS.pencil} fontWeight="600">BREAKPOINTS</text>
      <text x="615" y="198" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill={COLORS.ink}>1440 · 1024 · 768 · 375</text>

      {/* States */}
      <text x="615" y="225" fontFamily="serif" fontSize="11" fill={COLORS.pencil} fontWeight="600">STATES</text>
      <text x="615" y="243" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill={COLORS.ink}>default · hover · focus</text>
      <text x="615" y="257" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill={COLORS.ink}>active · disabled · error</text>

      {/* Edge case */}
      <text x="615" y="285" fontFamily="serif" fontSize="11" fill={COLORS.pencil} fontWeight="600">EDGE CASES</text>
      <text x="615" y="303" fontFamily="serif" fontSize="10" fill={COLORS.ink}>• disable submit until</text>
      <text x="615" y="316" fontFamily="serif" fontSize="10" fill={COLORS.ink}>  e-mail is valid</text>
      <text x="615" y="330" fontFamily="serif" fontSize="10" fill={COLORS.ink}>• Press card with 0 articles</text>
      <text x="615" y="343" fontFamily="serif" fontSize="10" fill={COLORS.ink}>  → hide section, no empty grid</text>
    </g>

    {/* Hand-written caption bottom */}
    <text x="40" y="500" fontFamily="'Caveat', cursive" fontSize="18" fill={COLORS.pencil}>
      — Spacing tokens, states, breakpoints, and edge cases — written into the file, not over Slack.
    </text>
  </svg>
);
