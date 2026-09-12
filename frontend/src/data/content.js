import {
  BrainCircuit,
  ShieldCheck,
  Network,
  ServerCog,
  Infinity as InfinityIcon,
  Rocket,
  GraduationCap,
  BookOpen,
  Users,
  HeartHandshake,
} from "lucide-react";

export const IMAGES = {
  arch1: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?crop=entropy&cs=srgb&fm=jpg&q=85",
  arch2: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?crop=entropy&cs=srgb&fm=jpg&q=85",
  arch3: "https://images.unsplash.com/photo-1549791084-5f78368b208b?crop=entropy&cs=srgb&fm=jpg&q=85",
  megha: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?crop=entropy&cs=srgb&fm=jpg&q=85",
  mallikarjuna: "https://images.unsplash.com/photo-1686434538659-bb72333a1054?crop=entropy&cs=srgb&fm=jpg&q=85",
  community: "https://images.unsplash.com/photo-1543067361-9bf996edf6ff?crop=entropy&cs=srgb&fm=jpg&q=85",
  gurgaon: "https://images.unsplash.com/photo-1761413049230-2c0dd9af7c9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBndXJnYW9uJTIwYXJjaGl0ZWN0dXJlJTIwc2t5c2NyYXBlciUyMG5pZ2h0fGVufDB8fHx8MTc4OTIwNTc2MHww&ixlib=rb-4.1.0&q=85",
  heroVideo: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4",
};

export const METRICS = [
  { prefix: "$", value: 500, suffix: "M+", label: "Tech Asset Coverage" },
  { prefix: "", value: 200, suffix: "+", label: "Successful Audits" },
  { prefix: "", value: 100, suffix: "%", label: "Audit Pass Rate" },
  { prefix: "<", value: 24, suffix: "hr", label: "Rapid Incident Response" },
];

export const FRAMEWORKS = [
  "SOC 1", "SOC 2 Type I & II", "SOC 3", "ISO/IEC 27001", "ISO/IEC 42001",
  "NIST CSF 2.0", "NIST AI RMF", "HITRUST CSF", "PCI DSS v4.0", "HIPAA",
  "GDPR & Global Privacy", "CCPA/CPRA", "CSA STAR", "CMMC", "Cyber Essentials",
];

export const SERVICES = [
  {
    slug: "ai-governance",
    icon: BrainCircuit,
    category: "AI & Emerging Tech",
    title: "AI & Emerging Tech Governance",
    tags: ["ISO/IEC 42001", "NIST AI RMF"],
    desc: "Pioneering structured risk management, transparency frameworks, and ethical compliance models for Generative AI and LLM enterprise deployments.",
    deliverables: [
      "AI model inventory & risk classification",
      "ISO 42001 AIMS design & implementation",
      "LLM transparency & ethics frameworks",
      "Generative AI policy architecture",
    ],
  },
  {
    slug: "audit-assurance",
    icon: ShieldCheck,
    category: "Audit & Assurance",
    title: "Continuous Audit Defense & Assurance",
    tags: ["SOC 1/2/3", "ISO 27001"],
    desc: "Turnkey audit readiness, control mapping, evidence collection workflows, and direct auditor facilitation with zero surprises.",
    deliverables: [
      "Rapid audit readiness programs",
      "Control mapping & gap remediation",
      "Automated evidence collection workflows",
      "Direct auditor walkthrough facilitation",
    ],
  },
  {
    slug: "tprm",
    icon: Network,
    category: "Cybersecurity",
    title: "Third-Party & Ecosystem Risk Management",
    tags: ["TPRM", "Supply Chain"],
    desc: "Automated vendor due diligence, continuous supply chain risk monitoring, and automated security questionnaire resolution engines.",
    deliverables: [
      "Automated vendor due diligence",
      "Continuous supply chain monitoring",
      "Security questionnaire resolution engine",
      "Vendor tiering & risk scoring",
    ],
  },
  {
    slug: "tech-assurance",
    icon: ServerCog,
    category: "Audit & Assurance",
    title: "Technology Assurance & ITGC/ITAC Testing",
    tags: ["SOX ITGC", "Cloud Security"],
    desc: "Deep technical validation of database controls, application security, cloud identity architecture, and SOX IT General Controls.",
    deliverables: [
      "Database & application control validation",
      "Cloud identity architecture review",
      "SOX ITGC / ITAC testing",
      "Access & change management audits",
    ],
  },
  {
    slug: "managed-grc",
    icon: InfinityIcon,
    category: "Managed GRC",
    title: "Turnkey Managed Compliance",
    tags: ["GRC-as-a-Service", "Continuous Monitoring"],
    desc: "An embedded extension of your security team handling day-to-day evidence harvesting, continuous monitoring, and posture upkeep.",
    deliverables: [
      "Continuous evidence harvesting",
      "24/7 posture monitoring & upkeep",
      "Audit calendar management",
      "Dedicated compliance pod",
    ],
  },
  {
    slug: "transformation",
    icon: Rocket,
    category: "Cybersecurity",
    title: "Strategic Security Program Transformation",
    tags: ["Zero to Enterprise", "Policy Architecture"],
    desc: "From ground zero to enterprise-ready: complete policy architecture, threat modeling, runbook engineering, and security awareness.",
    deliverables: [
      "Complete policy architecture",
      "Threat modeling & runbook engineering",
      "Security awareness programs",
      "Zero-to-enterprise roadmap",
    ],
  },
];

export const SERVICE_CATEGORIES = ["All", "Cybersecurity", "AI & Emerging Tech", "Audit & Assurance", "Managed GRC"];

export const PILLARS = [
  {
    title: "Hands-On Operational Ownership",
    desc: "While traditional consultants deliver lengthy PDFs, Gaussians executes directly — authoring policies, engineering technical controls, harvesting evidence, and leading auditor walkthroughs.",
  },
  {
    title: "Direct Senior Executive Access",
    desc: "No junior hand-offs. Every project is architected and actively led by practice directors with 15+ years of Big 4 and enterprise GRC leadership experience.",
  },
  {
    title: "Agile & Adaptable Delivery Architecture",
    desc: "Seamlessly scale between strategic advisory, turnkey managed services, embedded staff augmentation, and dedicated offshore centers of excellence.",
  },
  {
    title: "Relentless Velocity & Precision",
    desc: "Deployment timelines built to keep pace with fast-moving product shipping cycles without compromising regulatory standards or governance integrity.",
  },
];

export const MATRIX = {
  columns: ["Gaussians", "Traditional Advisory", "Automated SaaS"],
  rows: [
    ["Delivery mode", "Hands-on execution & ownership", "Advisory reports & PDFs", "Self-serve dashboards"],
    ["Team seniority", "Practice directors, 15+ yrs", "Junior-heavy staffing", "Support tickets"],
    ["Audit facilitation", "We lead auditor walkthroughs", "You present, they advise", "No auditor interaction"],
    ["AI governance", "ISO 42001 & NIST AI RMF native", "Emerging practice", "Not covered"],
    ["Velocity", "Sprint-aligned, <90 day readiness", "Quarterly engagement cycles", "Instant setup, slow outcomes"],
    ["Flexibility", "Advisory to embedded to offshore CoE", "Rigid statements of work", "Fixed subscriptions"],
  ],
};

export const MODELS = [
  {
    name: "Advisory & Strategic Consulting",
    tag: "STRATEGY",
    desc: "High-impact maturity benchmarking, gap assessments, program architecture, and executive risk counsel.",
    bullets: ["GRC maturity benchmarking", "Gap assessments & remediation roadmaps", "Security program architecture", "Executive & board-level risk counsel"],
    ideal: "Organizations defining or recalibrating their security roadmap.",
  },
  {
    name: "Managed GRC Operations",
    tag: "MANAGED",
    desc: "Full operational management of continuous evidence harvesting, vendor security reviews, and ongoing audit readiness.",
    bullets: ["Continuous evidence harvesting", "Vendor security review operations", "Year-round audit readiness", "Posture monitoring & reporting"],
    ideal: "Teams that want compliance run for them, end to end.",
  },
  {
    name: "Specialist Staff Augmentation",
    tag: "EMBEDDED",
    desc: "On-demand embedding of senior GRC, privacy, and cybersecurity engineers directly into your engineering sprints.",
    bullets: ["Senior GRC & privacy engineers", "Embedded inside your sprint cycles", "Your tools, your rituals, your timezone", "Ramp up or down on demand"],
    ideal: "Engineering orgs needing senior firepower on demand.",
  },
  {
    name: "Dedicated Offshore Center of Excellence",
    tag: "OFFSHORE COE",
    desc: "Scalable, cost-efficient delivery units operating out of India, fully aligned with your schedule, tools, and time zones.",
    bullets: ["Dedicated India-based delivery unit", "Full timezone & tooling alignment", "Cost-efficient at enterprise scale", "Governed by Gaussians practice directors"],
    ideal: "Enterprises scaling cost-efficient global delivery.",
  },
];

export const LEADERS = [
  {
    name: "Megha Bakshi",
    role: "Founder & Director",
    focus: "Technology Risk & Trust Leader",
    track: "15+ Years Executive Leadership · Big 4 & Global Industry Veteran",
    bio: "Megha founded Gaussians to bridge the gap between strategic security governance and practical execution. Leveraging extensive experience across Big 4 consulting and enterprise leadership, she empowers organizations — from high-growth scale-ups to global enterprises — to build practical, scalable GRC programs that drive trust and business growth.",
    image: IMAGES.megha,
    slug: "megha-bakshi",
  },
  {
    name: "Mallikarjuna Reddy",
    role: "Associate Director",
    focus: "Technology Assurance & Risk Advisory",
    track: "200+ Successful Audit & GRC Engagements · Leading CPA Firm & MNC Experience",
    bio: "With a record of leading over 200 complex engagements across SOC 1, SOC 2, ISO 27001, CMMC, PCI DSS, HITRUST, HIPAA, and SOX ITGC, Mallikarjuna directs technology assurance and risk advisory at Gaussians, helping clients achieve statutory compliance and zero-surprise audit outcomes.",
    image: IMAGES.mallikarjuna,
    slug: "mallikarjuna-reddy",
  },
];

export const FORWARD = [
  { icon: GraduationCap, title: "Learn", desc: "Empowering emerging professionals through technical bootcamps, real-world audit apprenticeships, and hands-on GRC mentorship." },
  { icon: BookOpen, title: "Share", desc: "Democratizing compliance knowledge through open-source control matrices, regulatory transition guides, and technical whitepapers." },
  { icon: Users, title: "Grow", desc: "Fostering multidisciplinary dialogues connecting CISOs, risk executives, and academic researchers to shape the future of risk management." },
  { icon: HeartHandshake, title: "Give Back", desc: "Providing pro bono security assessments and compliance guidance to social impact ventures and non-profit organizations." },
];

export const IMPACT_METRICS = [
  { value: "90", suffix: " Days", label: "To multi-framework audit readiness" },
  { value: "100", suffix: "%", label: "Pass rate across SOC 2 & ISO 27001" },
  { value: "65", suffix: "%", label: "Faster customer questionnaire turnaround" },
  { value: "Zero", suffix: "", label: "Developer downtime through delivery" },
];

export const QUOTES = [
  {
    text: "Gaussians brought clarity, velocity, and hands-on execution to our compliance journey. Their technical depth and operational ownership allowed us to close enterprise deals faster.",
    author: "VP of Engineering",
    org: "Global Cloud Enterprise",
  },
  {
    text: "Working with Gaussians gave our executive team total confidence. They stayed in the trenches with us through every single audit phase.",
    author: "Head of Information Security",
    org: "FinTech Enterprise",
  },
];

export const ARTICLES = [
  {
    slug: "iso-42001-playbook",
    category: "AI Security",
    title: "ISO 42001 Decoded: The First Enterprise AI Governance Playbook",
    excerpt: "The world's first AI management system standard is here. A field guide to AIMS scope, Annex A controls, and what auditors will actually test.",
    date: "Jun 2026",
    read: "12 min",
    featured: true,
  },
  {
    slug: "soc2-90-days",
    category: "Cloud Audits",
    title: "SOC 2 Type II in 90 Days: An Execution Timeline",
    excerpt: "A week-by-week readiness plan that keeps your engineers shipping while evidence collection runs on rails.",
    date: "Jun 2026",
    read: "9 min",
  },
  {
    slug: "nist-ai-rmf-vs-iso-42001",
    category: "AI Security",
    title: "NIST AI RMF vs ISO 42001: Mapping the Overlap",
    excerpt: "One control matrix, two frameworks. How to satisfy both without doubling your evidence burden.",
    date: "May 2026",
    read: "8 min",
  },
  {
    slug: "pci-dss-v4",
    category: "Regulatory Bulletins",
    title: "PCI DSS v4.0: The Requirements That Bite Hardest",
    excerpt: "Targeted risk analyses, MFA everywhere, and the customized approach — what changed and what to do about it.",
    date: "May 2026",
    read: "7 min",
  },
  {
    slug: "tprm-automation",
    category: "Cloud Audits",
    title: "Killing the Security Questionnaire Backlog",
    excerpt: "How a resolution engine and a living evidence library cut questionnaire turnaround by 65% for a global scale-up.",
    date: "Apr 2026",
    read: "6 min",
  },
  {
    slug: "cmmc-roadmap",
    category: "Regulatory Bulletins",
    title: "CMMC 2.0: The Defense Contractor's Roadmap",
    excerpt: "Level 2 assessments are live. What the DIB needs in place before a C3PAO walks through the door.",
    date: "Apr 2026",
    read: "10 min",
  },
  {
    slug: "hitrust-v11",
    category: "Regulatory Bulletins",
    title: "HITRUST CSF v11: A Transition Guide for Health Tech",
    excerpt: "Fewer requirements, sharper scoping. Planning a v11 migration without losing your existing assurance capital.",
    date: "Mar 2026",
    read: "8 min",
  },
];

export const ARTICLE_CATEGORIES = ["All", "AI Security", "Cloud Audits", "Regulatory Bulletins"];

export const CONTACT = {
  email: "info@gaussians.com",
  phone: "+91 9711283991",
  address: "Unit 314, Suncity Success Tower, Sector 65, Gurgaon, Haryana 122001, India",
  regions: "Serving global organizations across North America, EMEA, and APAC via remote, hybrid, embedded, and dedicated offshore delivery models.",
};
