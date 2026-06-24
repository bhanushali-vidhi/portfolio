
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Layers, Zap, ExternalLink, Users, Pencil, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyDetail as CaseStudyDetailType } from '../types';
// Added DoodleSparkle to the import list
import { DoodleUnderline, DoodleStar, DoodleArrow, DoodleCircle, DoodleSparkle, DoodleSpiral } from '../components/Doodles';

// --- SVG Components for Workflows ---

const ManualWorkflowSVG = () => (
  <svg viewBox="0 0 300 580" className="w-full h-auto max-w-[320px] mx-auto filter drop-shadow-sm">
    <defs>
      <marker id="arrow-manual" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#333" />
      </marker>
    </defs>
    <style>
      {`
        .manual-box { fill: #fee2e2; stroke: #ef4444; stroke-width: 2px; rx: 8px; }
        .manual-text { font-family: 'Crimson Text', serif; font-size: 14px; font-weight: 600; fill: #1f2937; text-anchor: middle; dominant-baseline: middle; }
        .manual-arrow { stroke: #333; stroke-width: 2px; fill: none; marker-end: url(#arrow-manual); }
      `}
    </style>
    
    <g transform="translate(50, 10)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Document Upload</text>
    </g>
    <path d="M150,55 L150,85" className="manual-arrow" />

    <g transform="translate(50, 85)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Manual Document Reading</text>
    </g>
    <path d="M150,130 L150,160" className="manual-arrow" />

    <g transform="translate(50, 160)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Copy Details to Excel</text>
    </g>
    <path d="M150,205 L150,235" className="manual-arrow" />

    <g transform="translate(50, 235)">
      <rect x="0" y="0" width="200" height="60" className="manual-box" />
      <text x="100" y="20" className="manual-text">Check Govt Websites</text>
      <text x="100" y="40" className="manual-text">Manually</text>
    </g>
    <path d="M150,295 L150,325" className="manual-arrow" />

    <g transform="translate(50, 325)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Compare Data by Eye</text>
    </g>
    <path d="M150,370 L150,400" className="manual-arrow" />

    <g transform="translate(50, 400)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Mark Verified / Unverified</text>
    </g>
    <path d="M150,445 L150,475" className="manual-arrow" />

    <g transform="translate(50, 475)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Repeat for Next Document</text>
    </g>
  </svg>
);

const AIWorkflowSVG = () => (
  <svg viewBox="0 0 500 650" className="w-full h-auto font-sans text-xs filter drop-shadow-sm">
     <defs>
      <marker id="arrow-ai" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#333" />
      </marker>
    </defs>
    <style>
      {`
        .ai-box { fill: #dbeafe; stroke: #2563eb; stroke-width: 2px; rx: 8px; }
        .ai-diamond { fill: #fff7ed; stroke: #f97316; stroke-width: 2px; }
        .ai-box-green { fill: #dcfce7; stroke: #16a34a; stroke-width: 2px; rx: 8px; }
        .ai-box-red { fill: #fee2e2; stroke: #ef4444; stroke-width: 2px; rx: 8px; }
        .ai-text { font-family: 'Crimson Text', serif; font-size: 14px; font-weight: 600; fill: #1f2937; text-anchor: middle; dominant-baseline: middle; }
        .ai-arrow { stroke: #333; stroke-width: 2px; fill: none; marker-end: url(#arrow-ai); }
        .ai-label { font-family: 'Crimson Text', serif; font-size: 11px; fill: #4b5563; }
      `}
    </style>

    <g transform="translate(175, 10)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Document Upload</text>
    </g>
    <path d="M250,50 L250,70" className="ai-arrow" />

    <g transform="translate(175, 70)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Preprocessing & OCR</text>
    </g>
    <path d="M250,110 L250,130" className="ai-arrow" />

    <g transform="translate(175, 130)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Field Extraction</text>
    </g>
    <path d="M250,170 L250,190" className="ai-arrow" />

    <g transform="translate(250, 230)">
      <polygon points="0,-40 60,0 0,40 -60,0" className="ai-diamond" />
      <text x="0" y="0" className="ai-text">Data Complete?</text>
    </g>
    
    <path d="M190,230 L100,230 L100,530" className="ai-arrow" strokeDasharray="4" />
    <rect x="115" y="220" width="25" height="18" fill="#f3f4f6" />
    <text x="127" y="233" textAnchor="middle" className="ai-label">No</text>

    <path d="M250,270 L250,300" className="ai-arrow" />
    <rect x="237" y="275" width="26" height="18" fill="#f3f4f6" />
    <text x="250" y="288" textAnchor="middle" className="ai-label">Yes</text>

    <g transform="translate(175, 300)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Verification Checks</text>
    </g>
    <path d="M250,340 L250,370" className="ai-arrow" />

    <g transform="translate(250, 410)">
      <polygon points="0,-40 60,0 0,40 -60,0" className="ai-diamond" />
      <text x="0" y="0" className="ai-text">Match Status</text>
    </g>

    <path d="M207,428 L150,470" className="ai-arrow" /> 
    <rect x="150" y="435" width="55" height="18" fill="#e5e7eb" />
    <text x="177" y="448" textAnchor="middle" className="ai-label">Mismatch</text>

    <g transform="translate(75, 470)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-red" />
      <text x="60" y="20" className="ai-text">Unverified</text>
    </g>
    <path d="M135,510 L135,530" className="ai-arrow" />

    <path d="M250,450 L250,470" className="ai-arrow" />
    <rect x="230" y="450" width="40" height="18" fill="#e5e7eb" />
    <text x="250" y="463" textAnchor="middle" className="ai-label">Match</text>

    <g transform="translate(200, 470)">
      <rect x="0" y="0" width="100" height="40" className="ai-box-green" />
      <text x="50" y="20" className="ai-text">Verified</text>
    </g>

    <path d="M293,428 L350,470" className="ai-arrow" />
    <rect x="300" y="435" width="40" height="18" fill="#e5e7eb" />
    <text x="320" y="448" textAnchor="middle" className="ai-label">Partial</text>

    <g transform="translate(325, 470)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-green" />
      <text x="60" y="20" className="ai-text">Partially Verified</text>
    </g>

    <path d="M250,510 L270,530 L300,530" className="ai-arrow" fill="none" />
    <path d="M385,510 L365,530 L350,530" className="ai-arrow" fill="none" />

    <g transform="translate(75, 530)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-red" />
      <text x="60" y="20" className="ai-text">Manual Review</text>
    </g>

    <g transform="translate(280, 530)">
      <rect x="0" y="0" width="140" height="40" className="ai-box" />
      <text x="70" y="20" className="ai-text">Claim Processing</text>
    </g>
  </svg>
);


const caseStudiesData: Record<string, CaseStudyDetailType & { highFiImages: string[] }> = {
  '1': {
    id: '1',
    title: 'Reducing Document Verification Time by 95%',
    category: 'Product Design',
    description: 'Enabled 3–4× higher case throughput by reducing document verification time by 95% through automation.',
    imageUrl: 'https://ais-pre-5qp56ocwb6pxoler3jfgsk-302303930896.asia-east1.run.app/api/images/7',
    link: '#',
    client: 'Deloitte India (Internal)',
    year: 'Sep 2025 - Present',
    role: 'Product Designer Intern',
    tools: ['Figma', 'Miro', 'User Research'],
    challenge: 'An automobile company receives hundreds of documents daily (invoices, buyer details, etc.) for verification. The manual process took 15–20 minutes per document, was error-prone, and caused severe backlogs during peak sales seasons. Verification of ID details was also unreliable manually.',
    approach: 'We reimagined the workflow by mapping the manual process and identifying bottlenecks. We then designed an AI-powered verification system. My focus was on rethinking the UX to be fast, reliable, and user-friendly, moving from a manual entry system to an exception-handling model.',
    solution: 'An AI-powered document verification system that extracts, verifies, and structures data automatically. The system uses OCR for scanning, cross-verifies with government APIs, and only flags exceptions for manual review.',
    results: [
      'Verification time reduced by 95% (<60s vs 20mins)',
      'Accuracy increased by 92% via API cross-checks',
      'Manual effort reduced by 80%',
      'Approvals became 5x faster',
      'Team size reduced from 25 to 3-4 people'
    ],
    contentImages: [
    '/wireframe1-doc-verify.jpeg', 
    '/wireframe2-doc-verify.jpeg', 
    '/wireframe3-doc-verify.jpeg', 
    '/wireframe4-doc-verify.jpeg'
    ],
    highFiImages: [
      '/screen1-doc-verify.png',
      '/screen2-doc-verify.jpeg',
      '/screen3-doc-verify.png',
      '/screen4-doc-verify.png'
    ]
  },


  '2': {
    id: '2',
    title: 'Groomify',
    category: 'Product Thinking',
    description: 'Designing for decisions people are afraid to make. A real-time grooming simulation that reduces uncertainty.',
    imageUrl: '/groomify.png',
    link: '#',
    client: 'L’Oréal Brandstorm 2025',
    year: '2025',
    role: 'Product Designer',
    tools: ['Figma', 'AR Simulation', 'User Research'],
    challenge: 'Grooming decisions are irreversible. Users avoid experimentation because they cannot visualize the outcome on themselves, leading to "guesswork" and regret.',
    approach: 'Shifted from a "styling app" to a "decision support tool". Focused on reducing risk through real-time visualization and fine-grained density/length controls.',
    solution: 'A real-time grooming simulation app that allows users to see different beard styles and lengths on their own face before committing to a cut.',
    results: [
      'Increased user confidence in trying new styles',
      'Reduced "barber regret" through precise visualization',
      'Enabled safe experimentation with irreversible decisions'
    ],
    contentImages: [
      '/screen1-groomify.png',
      '/screen3-groomify.png',
      '/screen6-groomify.png'
    ],

    highFiImages: [
      '/screen1-groomify.png',
      '/screen4-groomify.png',
      '/screen3-groomify.png'
    ],
    trigger: "“Maybe I should have asked for less…” …but it was already too late.",
    insight: "Users don’t avoid experimentation because they don’t care. They avoid it because: They cannot visualize the outcome on themselves.",
    hmw: "How might we help users feel confident about grooming decisions before committing to them?",
    currentExp: "Users today: Search on Google, Guess what suits them, Hope the barber gets it right. Decision = Guesswork.",
    productThinking: ["Reduce risk", "Enable safe experimentation", "Build confidence through visualization"],
    userFlow: ["Open App", "Camera Access", "Live Try-On", "Customize Style", "Save / Compare", "Show Barber / Decide"],
    keyScreens: [
      { title: "Live Try-On Screen", annotations: ["Real-time preview reduces imagination gap", "Minimal UI avoids distraction"] },
      { title: "Customization Screen", annotations: ["Users think in adjustments, not presets", "Fine control builds trust"] },
      { title: "Comparison / Save Screen", annotations: ["Comparison increases confidence", "Decision-making improves with visual contrast"] }
    ],
    constraints: ["Lighting affects accuracy", "Face mapping may not be precise", "Users may expect real-life perfection", "AR performance depends on device"],
    testing: ["Do users trust the simulation?", "Do they actually use it before haircuts?", "Does it reduce regret?"],
    futureScope: ["AI-based recommendations", "Barber integration", "Personalized grooming history"],
    reflection: "I started with a styling idea. But it turned out to be a confidence problem. Users don’t need more options—they need certainty. Good design reduces risk, not just effort. The real problem often lies in what users avoid, not what they say."
  },

  '3': {
    id: '3',
    title: 'F Real Estate by FashionTV',
    category: 'Design Systems × Dev Handoff',
    description: 'Designing FashionTV’s first luxury real-estate platform — a B2B brand-licensing site connecting global developers to the FTV brand. Live across 9 page templates.',
    imageUrl: '/f-real-estate-hero.jpg',
    link: 'https://frealestatebyftv.in/',
    liveUrl: 'https://frealestatebyftv.in/',
    client: 'FashionTV India',
    year: 'Jun 2025 – Aug 2025',
    role: 'UI/UX Designer Intern · Component Design + Dev Handoff Lead',
    tools: ['Figma', 'Auto-Layout', 'Variants', 'Notion'],
    teamSize: { designers: 2, developers: 3 },
    ownership: [
      'Built the reusable Figma component library — 24 components × 3 breakpoints — that powered all 9 templates.',
      'Designed major sections end-to-end: Press taxonomy, Project Detail, Past Events, Statistics block, and the B2B Contact form. Senior designer reviewed and signed off.',
      'Owned developer handoff solo — annotated specs, edge cases, breakpoint behavior, twice-weekly Figma walkthroughs, and PR-preview reviews before merge.',
      'Acted as the bridge between design and engineering — my Computer Engineering background meant I could read the React, spot spec drift, and fix it in Figma instead of escalating.'
    ],
    challenge: 'FashionTV was launching a new B2B vertical — licensing the FTV brand to luxury real-estate developers across India and the UAE. The site had to convince three audiences in one tab: developers evaluating FTV as a co-brand for ₹500M+ projects, investors browsing curated luxury properties, and press scanning for credibility. One site, one navigation, one visual language — three completely different intents.',
    approach: 'We mapped the audiences first, the pages second. Press became the trust-building moment, not a footer afterthought. The Project Detail template was built to scale from 5 client brands to 20+ without re-architecture. Every page assembled itself from a single 24-component library, which is what made the dev handoff fast.',
    solution: 'A 9-template B2B platform with a shared component system, a press section that doubles as the credibility engine, and a contact form that pre-qualifies leads by intent (developer vs. investor vs. licensee).',
    bottlenecks: [
      'No existing IA — content for 5+ developer clients had to coexist without diluting any one brand.',
      'Press credibility was the critical conversion lever, but had no home in the original brief.',
      'The contact form had to qualify B2B intent (developer / investor / licensee) at submission, not after.',
      'Two designers + three developers — handoff drift was the real risk, not visual polish.'
    ],
    componentsCount: 24,
    handoffPractices: [
      'Annotated spacing tokens (4 / 8 / 12 / 16 / 24 / 32 / 48) on every component.',
      'Hover, active, and disabled states drawn explicitly — no "figure it out" gaps.',
      'Responsive breakpoints at 1440 / 1024 / 768 / 375, with reflow callouts.',
      'Edge cases written into the file (e.g., "Press card with 0 articles → hide section, don\'t render empty grid").',
      'Twice-weekly Figma walkthroughs at standup; PR-preview review before any merge.'
    ],
    sectionsOwned: [
      {
        title: 'Press as a Credibility Engine',
        description: 'A filterable press grid (All / Merlin / Terra Casa / Danube / SBP / Glenworld) that surfaces real coverage — Times of India, Newstime — exactly where developers expect proof. Press wasn\'t a footer afterthought; it became the conversion moment.',
        image: '/f-re-press.jpg',
        note: 'For a B2B brand-licensing site, third-party press beats first-party copy. Always.'
      },
      {
        title: 'The Statistics Block',
        description: 'The first scroll has one job: prove scale. 15+ projects, 500M+ valuation, 2000+ units, 10M+ sq.ft. designed. Numbers do that faster than copy can.',
        image: '/f-re-stats.jpg',
        note: 'Recruiters and developers both skim — give them four numbers before any paragraph.'
      },
      {
        title: 'B2B Intent-Qualifying Contact Form',
        description: 'A standard contact form treats a developer and an end-buyer the same. We split the form into Personal Information, Developer Information, and Licensing Category — sales gets a pre-qualified lead, not noise.',
        image: '/f-re-contact.jpg',
        note: 'Form fields are a strategic decision, not a UI one. Each field is a question you\'re asking on behalf of the sales team.'
      }
    ],
    brandsOnboarded: ['Merlin Group', 'Terra Casa', 'Danube Fashionz', 'SBP', 'Glenworld'],
    results: [
      'Site live and shipping at frealestatebyftv.in — verifiable, not a mockup.',
      '9 page templates built from a single 24-component library.',
      '5 developer brands onboarded at launch (Merlin, Terra Casa, Danube, SBP, Glenworld).',
      'Press coverage in The Times of India and Newstime — real third-party validation embedded into the site.',
      'Handoff cycle reduced ~3× — average 1 review round per template vs. 3–4 baseline, by front-loading specs and edge cases.',
      'Component library still in active use for projects added post-launch.'
    ],
    contentImages: [],
    highFiImages: [
      '/f-re-home.jpg',
      '/f-re-residential.jpg',
      '/f-re-press.jpg',
      '/f-re-contact.jpg'
    ],
    reflection: "My biggest learning: a great Figma file is worth nothing if developers can't build from it on the first read. Going in, I thought design ended when the file was clean. I learned that handoff is a separate craft — it's writing for engineers, not for designers. The annotations, the edge cases, the breakpoint behavior — those are design deliverables, not afterthoughts. If I were redoing this, I'd build the component library before the page designs, not alongside them. Half the rework on this project came from designing pages first and back-deriving components second. The harder lesson: as the most junior person on a 5-person team, I had to earn the right to flag dev-spec mismatches. I learned to do it by showing, not telling — opening Figma side-by-side with the deployed preview and pointing at the diff."
  }
};

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudiesData[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center font-serif">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6 pt-24 pb-16"
    >
      
      {/* Navigation Header */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mb-10"
      >
        <Link to="/" className="inline-flex items-center text-base font-hand font-bold text-pencil hover:text-ink transition-colors transform hover:-translate-x-1">
          <ArrowLeft size={18} className="mr-2" />
          Back to Work
        </Link>
      </motion.div>

      {/* Hero Section */}
      <header className="mb-12">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-block relative"
        >
             <span className="text-base font-hand font-bold tracking-wider text-blue-600 uppercase mb-3 block transform -rotate-1">
              Chapter: {study.category}
            </span>
            <DoodleStar className="absolute -top-6 -right-8 w-8 h-8 text-yellow-400 opacity-60" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif font-bold text-ink mb-5 leading-tight"
        >
          {study.id === '1'
            ? 'Speeding Up Document Verification by 20× Through AI-Driven Automation'
            : study.id === '3'
              ? 'Designing FashionTV’s First Luxury Real-Estate Platform'
              : study.title}
        </motion.h1>

        {study.id === '3' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xl md:text-2xl font-serif italic text-pencil leading-relaxed mb-8 max-w-3xl"
          >
            A B2B brand-licensing site connecting global developers — Merlin Group, Danube, SBP, Glenworld — to the FashionTV brand. Live across <span className="marker-highlight px-1">9 page templates</span>.
          </motion.p>
        )}

        {study.id === '3' && study.liveUrl && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-button inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 font-hand font-bold text-base shadow-md"
            >
              <ExternalLink size={16} />
              <span>View Live Site</span>
            </a>
            <span className="inline-flex items-center gap-2 bg-paper border-2 border-ink px-5 py-2.5 font-hand text-base text-ink rounded-full transform -rotate-1">
              <Users size={16} />
              <span>Team: {study.teamSize?.designers} designers · {study.teamSize?.developers} devs</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-50 border-2 border-dashed border-blue-300 px-5 py-2.5 font-hand text-base text-blue-700 rounded-full transform rotate-1">
              <Pencil size={16} />
              <span>Component Design + Dev Handoff Lead</span>
            </span>
          </motion.div>
        )}

        {study.id === '1' && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-highlight/10 border-2 border-dashed border-highlight/30 p-4 rounded-lg mb-8 transform -rotate-1"
          >
            <p className="text-sm font-serif italic text-pencil">
              <strong>Disclaimer:</strong> This project is under Non-Disclosure Agreement. Below is a brief insight into the process and outcomes.
            </p>
          </motion.div>
        )}

        {study.id === '2' && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-500/5 border-2 border-dashed border-blue-300/40 p-4 rounded-lg mb-8 transform rotate-1"
          >
            <p className="text-sm font-serif italic text-pencil">
              <strong>Note:</strong> Submitted to L’Oréal Brandstorm 2025 — a global student innovation challenge. The prototype was developed for the initial round; we did not advance to the next stage. The case study below captures the product thinking and research that drove the concept.
            </p>
          </motion.div>
        )}

        {study.trigger && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <blockquote className="text-2xl md:text-3xl font-serif italic text-pencil border-l-4 border-blue-400 pl-6 py-2">
              {study.trigger}
            </blockquote>
          </motion.div>
        )}

        {/* Project Metadata Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y-2 border-dashed border-gray-300"
        >
          <div>
             <span className="block text-sm font-hand text-gray-400 mb-1">Role</span>
            <span className="font-serif font-bold text-lg text-ink">{study.role}</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Tools</span>
            <span className="font-serif font-bold text-lg text-ink">{study.tools.join(', ')}</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Timeline</span>
            <span className="font-serif font-bold text-lg text-ink">{study.year}</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Location</span>
            <span className="font-serif font-bold text-lg text-ink">Mumbai</span>
          </div>
        </motion.div>
      </header>

      {/* Content Sections */}
      <div className="grid md:grid-cols-12 gap-12 mb-20">
        
        {/* Sidebar / Context */}
        <div className="md:col-span-3 hidden md:block">
           <div className="sticky top-32">
             <h3 className="text-xl font-hand font-bold text-ink mb-4 underline decoration-wavy decoration-blue-300">Contents</h3>
             <ul className="space-y-3 text-lg font-serif text-pencil italic">
               {study.id === '1' ? (
                 <>
                   <li><a href="#problem" className="hover:text-ink">The Challenge</a></li>
                   <li><a href="#ideation" className="hover:text-ink">Workflows</a></li>
                   <li><a href="#process" className="hover:text-ink">Sketches & System</a></li>
                   <li><a href="#results" className="hover:text-ink">Outcomes</a></li>
                 </>
               ) : study.id === '3' ? (
                 <>
                   <li><a href="#problem" className="hover:text-ink">The Challenge</a></li>
                   <li><a href="#team" className="hover:text-ink">Team & Role</a></li>
                   <li><a href="#process" className="hover:text-ink">System & Handoff</a></li>
                   <li><a href="#screens" className="hover:text-ink">Sections I Owned</a></li>
                   <li><a href="#results" className="hover:text-ink">Outcomes</a></li>
                   <li><a href="#reflection" className="hover:text-ink">Reflection</a></li>
                 </>
               ) : (
                 <>
                   <li><a href="#insight" className="hover:text-ink">Insight</a></li>
                   <li><a href="#problem" className="hover:text-ink">The Problem</a></li>
                   <li><a href="#solution" className="hover:text-ink">The Solution</a></li>
                   <li><a href="#screens" className="hover:text-ink">Key Screens</a></li>
                   <li><a href="#reflection" className="hover:text-ink">Reflection</a></li>
                 </>
               )}
             </ul>
           </div>
        </div>

        {/* Main Text Content */}
        <div className="md:col-span-9 space-y-20">
          
          {/* Insight Section (Groomify) */}
          {study.insight && (
            <motion.section 
              id="insight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-ink mb-6 flex items-center">
                  🔍 Insight
                  <DoodleUnderline className="ml-4 w-32 text-blue-300 opacity-50" />
              </h2>
              <p className="text-xl text-ink font-serif leading-relaxed mb-8">
                {study.insight}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02, rotate: 2 }} className="bg-paper p-6 sketch-border transform rotate-1">
                  <p className="font-hand text-lg italic">“I don’t trust new styles”</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, rotate: -2 }} className="bg-paper p-6 sketch-border transform -rotate-1">
                  <p className="font-hand text-lg italic">“What if it looks bad?”</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, rotate: 3 }} className="bg-paper p-6 sketch-border transform rotate-2">
                  <p className="font-hand text-lg italic">“Barbers don’t always get it right”</p>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Problem Statement */}
          <motion.section 
            id="problem"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-ink mb-6 flex items-center">
                {study.id === '1' ? 'The Challenge' : '🎯 The Problem'}
                <DoodleUnderline className="ml-4 w-32 text-red-300 opacity-50" />
            </h2>
            <p className="text-xl text-ink font-serif leading-relaxed mb-6">
              {study.hmw || study.challenge}
            </p>
            {study.currentExp && (
              <div className="bg-red-500/5 p-6 rounded-lg border border-red-500/10 mb-8">
                <h4 className="font-bold font-hand text-lg mb-4 text-red-500">Current Experience: Guesswork</h4>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-ink">Search</span>
                    <span className="text-2xl">🔍</span>
                  </div>
                  <DoodleArrow className="w-8 h-8 text-red-300 hidden sm:block" />
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-ink">Imagine</span>
                    <span className="text-2xl">💭</span>
                  </div>
                  <DoodleArrow className="w-8 h-8 text-red-300 hidden sm:block" />
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-ink">Try</span>
                    <span className="text-2xl">✂️</span>
                  </div>
                  <DoodleArrow className="w-8 h-8 text-red-300 hidden sm:block" />
                  <div className="flex flex-col items-center">
                    <span className="font-serif font-bold text-red-500">Regret</span>
                    <span className="text-2xl">😬</span>
                  </div>
                </div>
              </div>
            )}
            {study.id === '1' && (
              <div className="bg-red-500/5 p-6 rounded-lg border border-red-500/10">
                 <h4 className="font-bold font-hand text-lg mb-2 text-red-500">Bottlenecks Identified:</h4>
                 <ul className="list-disc ml-5 space-y-1 font-serif text-ink">
                   <li>15–20 minutes manual verification per document.</li>
                   <li>Manual cross-checks with government portals.</li>
                   <li>High error rates during peak sales seasons.</li>
                 </ul>
              </div>
            )}
            {study.id === '3' && study.bottlenecks && (
              <div className="bg-red-500/5 p-6 rounded-lg border border-red-500/10">
                 <h4 className="font-bold font-hand text-lg mb-3 text-red-500">Three audiences. One tab. The bottlenecks:</h4>
                 <ul className="space-y-2 font-serif text-ink">
                   {study.bottlenecks.map((b, i) => (
                     <li key={i} className="flex items-start">
                       <span className="font-hand text-red-500 mr-3 mt-0.5">→</span>
                       <span>{b}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            )}
          </motion.section>

          {/* Team & My Role (Case 3) */}
          {study.id === '3' && study.ownership && (
            <motion.section
              id="team"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-ink mb-8 flex items-center">
                  👥 The Team & My Role
                  <DoodleUnderline className="ml-4 w-32 text-blue-400 opacity-50" />
              </h2>

              {/* Team makeup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-paper p-6 sketch-border transform -rotate-1">
                  <div className="flex items-center mb-3">
                    <Pencil size={20} className="text-blue-600 mr-3" />
                    <h4 className="font-hand text-xl font-bold text-ink">Design (2)</h4>
                  </div>
                  <ul className="space-y-1.5 font-serif text-ink">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                      <span className="font-bold">Vidhi Bhanushali (me)</span>
                      <span className="ml-2 text-sm text-pencil italic">— components + handoff</span>
                    </li>
                    <li className="flex items-center text-pencil">
                      <span className="w-2 h-2 rounded-full bg-pencil/40 mr-3"></span>
                      <span>Senior Designer — review & polish</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-paper p-6 sketch-border transform rotate-1">
                  <div className="flex items-center mb-3">
                    <Code2 size={20} className="text-green-600 mr-3" />
                    <h4 className="font-hand text-xl font-bold text-ink">Engineering (3)</h4>
                  </div>
                  <ul className="space-y-1.5 font-serif text-pencil">
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500/60 mr-3"></span><span>Full-stack dev — frontend lead</span></li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500/60 mr-3"></span><span>Full-stack dev — CMS + APIs</span></li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500/60 mr-3"></span><span>Full-stack dev — integrations</span></li>
                  </ul>
                </div>
              </div>

              {/* Ownership */}
              <div className="bg-blue-500/5 p-8 rounded-2xl border-2 border-dashed border-blue-300/40">
                <h4 className="font-hand text-xl font-bold text-blue-700 mb-5 flex items-center">
                  <span className="text-2xl mr-2">✏️</span> What I Owned
                </h4>
                <ul className="space-y-4">
                  {study.ownership.map((item, i) => (
                    <li key={i} className="flex items-start text-ink font-serif text-lg leading-relaxed">
                      <span className="font-hand font-bold text-blue-600 mr-3 mt-1">{String(i + 1).padStart(2, '0')}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why this matters */}
              <div className="mt-8 p-6 bg-highlight/20 sketch-border transform rotate-1 relative">
                <DoodleSparkle className="absolute -top-4 -right-4 w-10 h-10 text-yellow-400 opacity-70" />
                <p className="text-lg font-serif italic text-ink leading-relaxed">
                  <strong className="font-hand not-italic text-xl text-ink mr-2">💡 Why this matters:</strong>
                  As a Computer Engineering student, I bridged the design–development gap natively. I could read the developers' React, spot when a component was diverging from spec, and fix it in Figma — instead of escalating.
                </p>
              </div>
            </motion.section>
          )}

          {/* System & Handoff (Case 3) */}
          {study.id === '3' && study.handoffPractices && (
            <motion.section
              id="process"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-ink mb-8 flex items-center">
                  🧩 From Sitemap to System
                  <DoodleArrow className="ml-4 w-12 h-12 text-blue-300 opacity-60" />
              </h2>
              <p className="text-xl text-ink font-serif leading-relaxed mb-10">
                {study.approach}
              </p>

              {/* Component library + Handoff side-by-side */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Component library */}
                <div className="bg-paper p-8 sketch-border relative">
                  <div className="flex items-center mb-4">
                    <Layers size={22} className="text-blue-600 mr-3" />
                    <h3 className="text-2xl font-serif font-bold text-ink">The Component Library</h3>
                  </div>
                  <p className="font-serif text-ink leading-relaxed mb-5">
                    I built every page from one library — <span className="marker-highlight px-1 font-bold">{study.componentsCount} reusable components</span>, each with desktop + tablet + mobile variants and at least 3 interaction states.
                  </p>
                  <p className="font-serif italic text-pencil text-base">
                    The engineers built each component once. 9 templates assembled themselves.
                  </p>
                  <DoodleStar className="absolute -top-4 -right-4 w-10 h-10 text-yellow-400 opacity-60" />
                </div>

                {/* Handoff practices */}
                <div className="bg-ink text-paper p-8 rounded-[30px] relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <Code2 size={22} className="text-blue-300 mr-3" />
                    <h3 className="text-2xl font-serif font-bold">Developer Handoff</h3>
                  </div>
                  <p className="font-serif leading-relaxed opacity-90 mb-5">
                    Every component shipped with:
                  </p>
                  <ul className="space-y-2.5">
                    {study.handoffPractices.map((p, i) => (
                      <li key={i} className="flex items-start font-serif text-sm leading-relaxed opacity-95">
                        <span className="font-hand text-blue-300 mr-2 mt-0.5">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <DoodleSpiral className="absolute -bottom-12 -right-12 w-40 h-40 text-white opacity-10" />
                </div>
              </div>

              {/* Brand strip */}
              {study.brandsOnboarded && (
                <div className="bg-paper p-6 border-2 border-dashed border-gray-300 rounded-2xl">
                  <p className="font-hand text-pencil text-base mb-3 uppercase tracking-wider">Developer brands onboarded at launch</p>
                  <div className="flex flex-wrap gap-3">
                    {study.brandsOnboarded.map((brand, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 bg-paper border-2 border-ink font-serif text-base text-ink"
                        style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.section>
          )}

          {/* Sections I Owned (Case 3) - alternating image/text */}
          {study.id === '3' && study.sectionsOwned && (
            <section id="screens">
              <h2 className="text-3xl font-serif font-bold text-ink mb-12 flex items-center">
                  📐 Sections I Designed End-to-End
                  <DoodleUnderline className="ml-4 w-40 text-blue-300 opacity-50" />
              </h2>

              <div className="space-y-24">
                {study.sectionsOwned.map((sec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
                  >
                    <div className="flex-1 w-full">
                      <div className="sketch-border bg-paper p-2 shadow-xl transform transition-transform hover:scale-[1.01]" style={{ rotate: idx % 2 === 0 ? '-1deg' : '1deg' }}>
                        <img
                          src={sec.image}
                          alt={sec.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-5">
                      <span className="font-hand text-blue-600 text-lg">0{idx + 1}</span>
                      <h3 className="text-3xl font-serif font-bold text-ink leading-tight">{sec.title}</h3>
                      <p className="text-lg font-serif text-ink leading-relaxed">
                        {sec.description}
                      </p>
                      <div className="flex items-start bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <span className="font-serif text-base italic text-gray-700">“{sec.note}”</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Solution Section (Groomify) */}
          {study.id === '2' && (
            <motion.section 
              id="solution"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-ink mb-6 flex items-center">
                  💡 The Solution
                  <DoodleUnderline className="ml-4 w-32 text-green-300 opacity-50" />
              </h2>
              <p className="text-xl text-ink font-serif leading-relaxed mb-8">
                {study.solution}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-500/5 p-8 rounded-2xl border border-blue-500/10">
                  <h4 className="text-2xl font-serif font-bold text-blue-500 mb-4">🧠 Product Thinking</h4>
                  <ul className="space-y-3">
                    {study.productThinking?.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="font-serif text-lg text-ink opacity-90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-paper p-8 sketch-border">
                  <h4 className="text-2xl font-serif font-bold text-ink mb-4">📍 User Flow</h4>
                  <div className="space-y-2">
                    {study.userFlow?.map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-ink">
                        <span className="font-hand text-pencil">{idx + 1}.</span>
                        <span className="font-serif text-lg">{step}</span>
                        {idx < (study.userFlow?.length || 0) - 1 && <span className="text-pencil opacity-30">↓</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Ideation & Workflows (Case 1) */}
          {study.id === '1' && (
            <section id="ideation">
              <h2 className="text-3xl font-serif font-bold text-ink mb-8">Process: Mapping the Change</h2>
              
              <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-12">
                <div className="flex-1">
                   <div className="bg-white p-2 sketch-border transform -rotate-1 shadow-md mb-4">
                      <ManualWorkflowSVG />
                   </div>
                   <p className="text-center font-hand text-xl text-red-500 font-bold">Manual Flow</p>
                </div>

                <div className="flex-1">
                   <div className="bg-white p-2 sketch-border transform rotate-1 shadow-md mb-4">
                      <AIWorkflowSVG />
                   </div>
                   <p className="text-center font-hand text-xl text-blue-600 font-bold">AI-Automated Flow</p>
                </div>
              </div>
            </section>
          )}

          {/* Key Screens (Groomify) */}
          {study.id === '2' && (
            <section id="screens">
              <h2 className="text-3xl font-serif font-bold text-ink mb-12 flex items-center">
                  📱 Key Screens
                  <DoodleArrow className="ml-4 w-12 h-12 text-blue-300 opacity-60" />
              </h2>
              
              <div className="space-y-32">
                {study.keyScreens?.map((screen, idx) => (
                  <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                    <div className="flex-1 w-full">
                      <div className="sketch-border overflow-hidden bg-white p-2 shadow-2xl transform transition-transform group-hover:scale-[1.01]">
                        <img 
                          src={study.highFiImages[idx] || study.highFiImages[0]} 
                          alt={screen.title} 
                          className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500" 
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <h3 className="text-3xl font-serif font-bold text-ink">{screen.title}</h3>
                      <div className="space-y-4">
                        {screen.annotations.map((note, nIdx) => (
                          <div key={nIdx} className="flex items-start bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                            <span className="font-serif text-lg italic text-gray-700">“{note}”</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Wireframes & System Screenshots Section (Case 1) */}
          {study.id === '1' && (
            <section id="process">
              <div className="relative mb-8">
                <h2 className="text-3xl font-serif font-bold text-ink flex items-center">
                  From Sketches to System
                  <DoodleArrow className="ml-4 w-12 h-12 text-blue-300 opacity-60" />
                </h2>
              </div>
              
              {/* 1. Wireframes Carousel */}
              <div className="mb-12">
                <div className="flex items-center space-x-2 mb-4 text-pencil font-hand text-lg">
                   <Layers size={18} />
                   <span>Low-Fidelity Explorations</span>
                </div>
                <div className="relative -mx-6 px-6 overflow-x-auto pb-8 snap-x flex space-x-6 scrollbar-hide">
                   {study.contentImages.map((img, idx) => (
                     <div key={idx} className="snap-center flex-shrink-0 w-[80%] md:w-[600px]">
                        <div className="bg-white p-3 sketch-border shadow-lg transform hover:rotate-1 transition-transform">
                          <img src={img} alt={`Wireframe ${idx + 1}`} className="w-full h-auto rounded-md" />
                          <p className="text-center font-hand mt-3 text-pencil italic">Concept Sketch 0{idx + 1}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* 2. Transition Paragraph */}
              <div className="max-w-2xl mx-auto py-12 px-8 bg-paper border-l-4 border-blue-400 relative mb-12">
                 <DoodleSparkle className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400 opacity-60 animate-pulse" />
                 <p className="text-xl font-serif italic text-ink leading-relaxed">
                   After validating the initial layouts with stakeholders, we moved into high-fidelity design. The goal was to build a robust "Control Center" that felt familiar to spreadsheet users but carried the power of machine learning. We focused on clear visual feedback for verified data and prominent highlighting for discrepancies.
                 </p>
              </div>

              {/* 3. Actual System Screenshots */}
              <div className="space-y-12">
                 <div className="flex items-center space-x-2 mb-4 text-ink font-hand text-xl font-bold">
                   <Monitor size={22} className="text-blue-600" />
                   <span>High-Fidelity Implementation</span>
                 </div>
                 
                 <div className="grid grid-cols-1 gap-12">
                    {study.highFiImages.map((img, idx) => (
                      <div key={idx} className="group relative">
                         <div className="sketch-border overflow-hidden bg-white p-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                            <img src={img} alt={`System Screenshot ${idx + 1}`} className="w-full h-auto rounded-lg" />
                         </div>
                         <div className="absolute -bottom-4 -right-4 bg-ink text-white px-4 py-1 rounded-full font-hand text-lg rotate-3">
                            Screen 0{idx + 1}
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </section>
          )}

          {/* Constraints & Reality Check (Groomify) */}
          {study.constraints && (
            <section>
              <h2 className="text-3xl font-serif font-bold text-ink mb-8 flex items-center">
                  ⚠️ Constraints & Reality Check
                  <DoodleCircle className="ml-4 w-12 h-12 text-yellow-200 opacity-50" />
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {study.constraints.map((item, idx) => (
                  <div key={idx} className="bg-paper p-6 sketch-border flex items-center space-x-4">
                    <span className="text-2xl">⚡</span>
                    <span className="font-serif text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Results / Outcomes */}
          <motion.section 
            id="results" 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-highlight/10 p-10 sketch-border relative transform -rotate-1"
          >
            <DoodleCircle className="absolute -top-6 -left-6 w-20 h-20 text-blue-200 -z-10" />
            <div className="flex items-center space-x-3 mb-8">
               <Zap className="text-yellow-600 fill-yellow-600" size={32} />
               <h2 className="text-3xl font-serif font-bold text-ink">
                 {study.id === '1' || study.id === '3' ? 'Impact & Outcomes' : '🧪 What I Would Test'}
               </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {(study.testing || study.results).map((result, idx) => (
                <div key={idx} className="flex items-start bg-paper/50 p-4 rounded-lg border border-highlight/20">
                  <div className="w-2 h-2 rounded-full bg-ink mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="text-ink font-serif text-lg leading-snug">{result}</p>
                </div>
              ))}
            </div>
            <DoodleStar className="absolute -bottom-6 -right-6 w-16 h-16 text-yellow-400 opacity-40 animate-float" />
          </motion.section>

          {/* Future Scope (Groomify) */}
          {study.futureScope && (
            <section>
              <h2 className="text-3xl font-serif font-bold text-ink mb-6 flex items-center">
                  🚀 Future Scope
                  <DoodleSparkle className="ml-4 w-12 h-12 text-blue-300 opacity-60" />
              </h2>
              <div className="flex flex-wrap gap-4">
                {study.futureScope.map((item, idx) => (
                  <span key={idx} className="px-6 py-2 bg-ink text-paper rounded-full font-hand text-xl rotate-1">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Reflection (Groomify) */}
          {study.reflection && (
            <section id="reflection" className="pt-10 border-t-2 border-dashed border-gray-200">
              <h2 className="text-3xl font-serif font-bold text-ink mb-8 flex items-center">
                  💬 Reflection
                  <DoodleArrow className="ml-4 w-12 h-12 text-pencil opacity-30 transform rotate-90" />
              </h2>
              <div className="bg-paper p-10 sketch-border relative">
                <DoodleSparkle className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400 opacity-60" />
                <p className="text-2xl font-serif italic text-ink leading-relaxed mb-8">
                  "{study.reflection.split('. ')[0]}."
                </p>
                <div className="space-y-4">
                  {study.reflection.split('. ').slice(1).map((sentence, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2.5 mr-4 flex-shrink-0"></div>
                      <p className="text-xl font-serif text-pencil">{sentence}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Development Status Note (Case 1) */}
          {study.id === '1' && (
            <section className="pt-10 border-t-2 border-dashed border-gray-200">
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 relative overflow-hidden">
                <DoodleSparkle className="absolute -top-2 -right-2 w-12 h-12 text-blue-300 opacity-30" />
                <p className="text-xl font-serif text-ink leading-relaxed italic">
                  "This product is under development and we are building more features to it like automated Incentives and Reimbursements. To get the URL of this website, please connect with me."
                </p>
              </div>
            </section>
          )}

          {/* Closing CTA (Case 3) */}
          {study.id === '3' && study.liveUrl && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-10 border-t-2 border-dashed border-gray-200"
            >
              <div className="bg-highlight/20 p-10 sketch-border relative transform rotate-1 text-center">
                <DoodleStar className="absolute -top-6 -left-6 w-14 h-14 text-yellow-400 opacity-60 animate-float" />
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-4">See it live.</h3>
                <p className="text-lg font-serif italic text-pencil mb-8 max-w-xl mx-auto">
                  Curious about design systems, dev handoff, or B2B web work? The site is shipping — go poke at it.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-button inline-flex items-center gap-2 bg-ink text-paper px-7 py-3 font-hand font-bold text-lg shadow-lg"
                  >
                    <ExternalLink size={18} />
                    <span>frealestatebyftv.in</span>
                  </a>
                  <a
                    href="mailto:vvidhi.design@gmail.com"
                    className="font-hand text-lg text-pencil hover:text-ink underline decoration-wavy decoration-blue-300"
                  >
                    or drop a hello →
                  </a>
                </div>
              </div>
            </motion.section>
          )}

        </div>
      </div>

    </motion.article>
  );
};

export default CaseStudyDetail;
