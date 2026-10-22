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
  megha: "/megha.jpeg",
  mallikarjuna: "/arjun.jpeg",
  community: "https://images.unsplash.com/photo-1543067361-9bf996edf6ff?crop=entropy&cs=srgb&fm=jpg&q=85",
  gurgaon: "https://images.unsplash.com/photo-1761413049230-2c0dd9af7c9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBndXJnYW9uJTIwYXJjaGl0ZWN0dXJlJTIwc2t5c2NyYXBlciUyMG5pZ2h0fGVufDB8fHx8MTc4OTIwNTc2MHww&ixlib=rb-4.1.0&q=85",
  heroVideo: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4",
};

export const METRICS = [
  { prefix: "$", value: 500, suffix: "M+", label: "Tech Asset Coverage" },
  { prefix: "", value: 200, suffix: "+", label: "Successful Audits" },
  { prefix: "", value: 100, suffix: "%", label: "Audit Pass Rate" },
  { prefix: "", value: 15, suffix: "+", label: "Frameworks Supported" },
];

export const FRAMEWORKS = [
  "SOC 1", "SOC 2 Type I & II", "SOC 3", "ISO/IEC 27001", "ISO/IEC 42001",
  "NIST CSF 2.0", "NIST AI RMF", "HITRUST CSF", "PCI DSS v4.0", "HIPAA",
  "GDPR & Global Privacy", "CCPA/CPRA", "CSA STAR", "CMMC", "Cyber Essentials",
];

export const SERVICES = [
  {
    slug: "cybersecurity-compliance",
    icon: ShieldCheck,
    category: "Cybersecurity",
    title: "Cybersecurity & Compliance",
    tags: ["SOC", "ISO", "NIST", "HITRUST"],
    desc: "Build trust, strengthen security, and achieve compliance through practical, scalable programs aligned with your business objectives.",
    deliverables: [
      "SOC 1, SOC 2 & SOC 3 · ISO 27001 · ISO 42001 · CSA STAR · PCI DSS · HITRUST",
      "NIST CSF · NIST AI RMF · CMMC · Cyber Essentials · HIPAA",
      "GDPR & Privacy Programs · CCPA · Cloud Security Assessments",
      "Compliance Readiness & Gap Assessments · Policy & Control Frameworks · Compliance Managed Services",
    ],
  },
  {
    slug: "risk-governance",
    icon: Network,
    category: "Risk & Governance",
    title: "Risk & Governance",
    tags: ["IT Risk", "TPRM", "Governance"],
    desc: "Manage technology and third-party risks with confidence through effective governance, oversight, and risk management practices.",
    deliverables: [
      "IT Risk Assessments & Control Validation",
      "Third Party Risk Management & Vendor Due Diligence",
      "Technology Governance: IT, Cloud, AI, Cyber, Data, Third Party",
      "Technology Risk Management & Risk Framework Design",
    ],
  },
  {
    slug: "audit-assurance",
    icon: ServerCog,
    category: "Audit & Assurance",
    title: "Audit & Assurance",
    tags: ["SOX", "ITGC / ITAC", "Internal Audit"],
    desc: "Prepare for audits, validate controls, and demonstrate assurance through independent reviews and structured assessment programs.",
    deliverables: [
      "SOX & Technology Assurance",
      "ITGC Testing & ITAC Testing",
      "Internal Audit Reviews",
      "Audit Readiness & Audit Support",
    ],
  },
  {
    slug: "managed-services",
    icon: InfinityIcon,
    category: "Managed Services",
    title: "Managed Services",
    tags: ["Compliance Operations", "Continuous Monitoring"],
    desc: "Extend your team with experienced professionals who help operate and manage compliance, risk, and assurance activities at scale.",
    deliverables: [
      "Compliance Operations Management",
      "Audit Coordination & Support",
      "Evidence Collection Workflows",
      "Customer Security Questionnaires & Continuous Compliance Monitoring",
    ],
  },
  {
    slug: "program-implementation",
    icon: Rocket,
    category: "Transformation",
    title: "Program Implementation & Transformation",
    tags: ["Program Development", "Implementation"],
    desc: "Turn strategy into execution by building and embedding governance, security, and compliance capabilities that deliver lasting value.",
    deliverables: [
      "Security Program & Framework Implementation",
      "Policy & Procedure Development",
      "Control Design & Implementation",
      "Training & Awareness · Compliance Transformation · Remediation Management · Continuous Improvement",
    ],
  },
];

export const SERVICE_CATEGORIES = ["All", "Cybersecurity", "Risk & Governance", "Audit & Assurance", "Managed Services", "Transformation"];

export const GAUSSIANS_DIFFERENCE = {
  chapter: { no: "02", label: "The Gaussians Difference" },
  title: "The Gaussians Difference | Why Clients Choose Us",
  subtitle: "Building Trust. Delivering Assurance. Driving Outcomes.",
  lead: "Organizations choose Gaussians because they need more than recommendations—they need a trusted partner who can execute. What sets us apart is not only what we do, but how we do it.",
  conclusion: "Trust is earned through honest conversations, transparent communication, professional execution, and a relentless commitment to client success.",
};

export const HOW_WE_HELP = {
  title: "How We Help",
  subtitle: "Helping Organizations Navigate Risk and Build Trust",
  items: [
    "Achieve Compliance",
    "Strengthen Security",
    "Pass Audits with Confidence",
    "Manage Technology & Third-Party Risk",
    "Scale Operations Efficiently",
    "Access Experienced Specialists",
  ],
};

export const PILLARS = [
  {
    title: "Experienced Global Professionals",
    desc: "Experienced professionals with global consulting and industry backgrounds bringing deep practical expertise to every engagement.",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Flexible engagement models, including advisory, managed services, staff augmentation, and dedicated teams aligned to your goals.",
  },
  {
    title: "Hands-on Execution & Operational Support",
    desc: "Hands-on execution and operational support, not just recommendations—delivering structured, scalable, and business-aligned programs.",
  },
  {
    title: "Scalable Delivery Capabilities",
    desc: "Scalable delivery capabilities without compromising quality, governance, or accountability across global environments.",
  },
  {
    title: "Senior Leadership Involvement",
    desc: "Personalized attention and active involvement from senior leadership throughout the lifecycle of every engagement.",
  },
  {
    title: "A Trusted Partner Throughout the Journey",
    desc: "A trusted partner throughout the journey, from readiness and implementation to ongoing operations and assurance.",
  },
];

export const MATRIX = {
  columns: ["Gaussians", "Traditional Advisory", "Automated SaaS"],
  rows: [
    ["Delivery mode", "Hands-on execution & operational support", "Reports & advisory recommendations", "Self-serve dashboards"],
    ["Team seniority", "Senior leadership & global veterans", "Junior-heavy staffing", "Automated bot support"],
    ["Audit defense", "Audit readiness, walkthroughs & defense", "High-level review only", "No auditor participation"],
    ["Engagement flexibility", "Advisory, managed, staff aug & offshore", "Rigid time-and-materials SOWs", "Rigid SaaS subscription"],
    ["Assurance focus", "Governance, risk, security & compliance", "Siloed compliance checks", "Checkbox evidence scanning"],
    ["Value outcome", "Long-term partnership & trust", "Transaction-driven billing", "Self-managed workload"],
  ],
};

export const MODELS = [
  {
    name: "Advisory & Consulting",
    tag: "ADVISORY",
    desc: "Expert guidance to help design, assess and improve your programs.",
    bullets: [
      "Compliance readiness & gap assessments",
      "Risk framework design & control validation",
      "Technology & cybersecurity governance",
      "Senior leadership counsel & strategic roadmaps",
    ],
    ideal: "Organizations seeking expert strategy, assessment, and program architecture.",
  },
  {
    name: "Managed Services",
    tag: "MANAGED",
    desc: "Ongoing support to operate compliance, risk and assurance activities.",
    bullets: [
      "Continuous compliance monitoring",
      "Customer security questionnaire resolution",
      "Evidence collection workflows & tracking",
      "Audit coordination & year-round readiness",
    ],
    ideal: "Teams needing continuous operational ownership of compliance and risk.",
  },
  {
    name: "Staff Augmentation",
    tag: "AUGMENTATION",
    desc: "Skilled professionals embedded within your team.",
    bullets: [
      "Experienced practitioners embedded in your workflows",
      "Direct collaboration with your engineering & security teams",
      "Aligned with your timezone, tools, and processes",
      "Flexible scaling to meet critical project milestones",
    ],
    ideal: "Organizations requiring immediate specialist capacity embedded in their team.",
  },
  {
    name: "Dedicated Offshore Teams",
    tag: "OFFSHORE",
    desc: "Scalable, cost-effective teams aligned to your business objectives.",
    bullets: [
      "Dedicated delivery teams based out of India",
      "Cost-effective delivery at enterprise scale",
      "Seamless alignment across global time zones",
      "Managed with rigorous quality governance and accountability",
    ],
    ideal: "Companies scaling global operations with high quality and cost efficiency.",
  },
];

export const MISSION_VISION = {
  mission: {
    title: "Mission",
    desc: "To be the trusted partner organizations rely on to strengthen security, manage risk, achieve compliance, and build lasting trust with their customers, stakeholders, and communities.",
  },
  vision: {
    title: "Vision",
    desc: "To create a world where security, compliance, and trust are not barriers to growth, but foundations for sustainable success.",
  },
};

export const HOW_WE_WORK = {
  title: "How We Work",
  subtitle: "Five principles guiding our daily operations and client partnerships.",
  principles: [
    "We continuously invest in our people, ensuring they stay aligned with evolving technologies, risks, regulations, and industry frameworks.",
    "We maintain strong internal security practices, quality standards, and delivery governance in everything we do.",
    "We operate with integrity, transparency, professional execution, consistent delivery, and proactive communication.",
    "We work alongside our clients as an extension of their teams rather than from the sidelines.",
    "We focus on outcomes, helping clients solve challenges, strengthen programs, and create lasting value.",
  ],
};

export const LEADERSHIP_OVERVIEW = {
  title: "Leadership and Subject Matter Experts",
  lead: "Gaussians is led by experienced professionals who have spent their careers helping organizations navigate cybersecurity, compliance, governance, risk, and assurance challenges in complex and rapidly evolving business environments.",
  paragraphs: [
    "Our leadership team combines deep subject matter expertise with hands-on operational experience, having supported organizations ranging from high-growth startups to established global enterprises. Beyond advisory services, our leaders have built and scaled teams, established centers of excellence, managed large-scale compliance and risk programs, and partnered closely with business leaders to drive meaningful outcomes.",
    "What sets our leadership apart is a commitment to staying connected to both our clients and our teams. We believe the best solutions come from understanding business realities, working collaboratively, and remaining accountable from strategy through execution.",
    "At Gaussians, leadership is measured not only by expertise, but by the trust we earn, the people we develop, and the outcomes we help our clients achieve.",
  ],
};

export const LEADERS = [
  {
    name: "Megha Bakshi",
    role: "Founder & Director",
    focus: "Technology Risk & Trust Leader",
    track: "15+ Years Executive Leadership · Big 4 & Global Industry Veteran",
    bio: "Megha founded Gaussians to bridge the gap between strategic security governance and practical execution. Leveraging extensive experience across Big 4 consulting and enterprise leadership, she empowers organizations — from high-growth startups to established global enterprises — to build practical, scalable GRC programs that drive trust and business growth.",
    image: IMAGES.megha,
    slug: "megha-bakshi",
  },
  {
    name: "Mallikarjuna (Arjun) Reddy",
    role: "Associate Director – Technology Assurance & Risk Advisory",
    focus: "Helping organizations strengthen controls, manage risk, and achieve assurance with confidence.",
    track: "200+ Successful Audit & GRC Engagements · Leading CPA Firm & MNC Experience",
    bio: "Helping organizations strengthen controls, manage risk, and achieve assurance with confidence. With extensive experience leading complex engagements across SOC 1, SOC 2, ISO 27001, CMMC, PCI DSS, HITRUST, HIPAA, and SOX ITGC, Arjun directs technology assurance and risk advisory at Gaussians, helping clients achieve statutory compliance and zero-surprise audit outcomes.",
    image: IMAGES.mallikarjuna,
    slug: "mallikarjuna-reddy",
  },
];

export const GLOBAL_PRESENCE = {
  chapter: { no: "03", label: "Global Presence" },
  title: "Supporting organizations across",
  accent: "global markets.",
  lead: "Supporting organizations across global markets with trusted expertise in cybersecurity, compliance, governance, and assurance.",
  desc: "Our flexible delivery model enables us to work seamlessly across regions, time zones, and operating environments through offshore, remote, hybrid, and embedded team structures—providing clients with experienced professionals, scalable support, and strong accountability.",
  conclusion: "Wherever our clients operate, our focus remains the same: strengthening trust, managing risk, and delivering outcomes.",
  models: [
    { title: "Offshore", desc: "Dedicated offshore delivery teams providing scalable support, deep domain knowledge, and strong accountability." },
    { title: "Remote", desc: "Seamless remote collaboration across regions and time zones to meet demanding operational schedules." },
    { title: "Hybrid", desc: "Coordinated blend of on-site advisory presence and flexible off-site execution." },
    { title: "Embedded", desc: "Specialist practitioners working side-by-side with your leadership, security, and compliance teams." },
  ],
};

export const FORWARD = [
  {
    icon: GraduationCap,
    title: "Learn",
    desc: "We are passionate about helping aspiring and experienced professionals continuously develop their skills and expand their perspectives. Through internships, mentorship programs, training sessions, workshops, webinars, and real-world exposure, we help individuals build the knowledge, confidence, and practical experience needed to succeed in an evolving digital world.",
  },
  {
    icon: BookOpen,
    title: "Share",
    desc: "Knowledge becomes valuable when it is shared. Through thought leadership, industry insights, expert discussions, articles, webinars, and practical learning sessions, we strive to make complex topics easier to understand and apply.",
  },
  {
    icon: Users,
    title: "Grow",
    desc: "Growth is a continuous journey. We encourage curiosity, innovation, collaboration, and professional development across every stage of a career. By bringing together professionals, students, industry experts, and organizations, we help foster a community built on learning, collaboration, and continuous improvement.",
  },
  {
    icon: HeartHandshake,
    title: "Give Back",
    desc: "Our profession has been shaped by individuals who invested their time, knowledge, and experience in helping others succeed. Gaussians Forward is our way of giving back. Through mentorship, community initiatives, educational support, knowledge-sharing forums, and collaborative programs, we seek to create a positive impact beyond business outcomes and contribute to the growth of the broader professional community.",
  },
];

export const FORWARD_COMMITMENT = {
  title: "Our Commitment",
  subtitle: "Learn. Share. Grow. Give Back.",
  desc: "These principles guide everything we do through Gaussians Forward. Together, they reflect our belief that stronger professionals build stronger organizations, stronger communities, and a more trusted digital future.",
};

export const SUCCESS_STORIES = {
  title: "Success Stories",
  tagline: "Practical support. Clear outcomes. Lasting value.",
  note: "This section can be finalized once approved testimonials and client permissions are available.",
  testimonialsIntro: "Our clients value Gaussians for our practical approach, clear communication, and commitment to quality. We work closely with teams to understand their challenges, simplify complex requirements, and deliver support that is reliable and easy to act on. Whether we are supporting an audit, reviewing controls, helping with compliance readiness, or advising on risk remediation, our focus remains the same: to make the process smoother, clearer, and more valuable.",
  story: {
    badge: "Client Success Story",
    title: "Building a Stronger IT GRC and Third-Party Risk Program",
    context: "A growing technology business wanted to strengthen its IT governance, risk, and compliance structure while also improving the way it managed third-party security assessments.",
    solution: "Gaussians supported the organization by helping establish IT GRC processes, develop policies and procedures, design a risk and control framework, validate controls, and support audit readiness activities. The team also assisted with third-party risk assessments, documentation reviews, issue tracking, quality checks, and ongoing communication with key stakeholders.",
    impact: "The engagement helped the organization bring more structure, consistency, and accountability to its compliance and risk management activities. It also supported better visibility into control gaps, remediation progress, and third-party risk exposure.",
  },
};

export const QUOTES = [
  {
    text: "Gaussians helped us bring structure and clarity to our compliance journey. Their team was responsive, knowledgeable, and practical in their approach. They understood our business needs and supported us throughout the process with clear guidance and high-quality documentation.",
    author: "Client Feedback",
    org: "Technology Organization",
  },
  {
    text: "Working with Gaussians gave our team the confidence to manage audit requirements more effectively. Their ability to simplify complex control expectations and provide actionable recommendations made a real difference.",
    author: "Client Feedback",
    org: "Enterprise Compliance Team",
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
  regions: "Supporting organizations across global markets with trusted expertise in cybersecurity, compliance, governance, and assurance through offshore, remote, hybrid, and embedded team structures.",
};
