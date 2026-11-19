import eduece10Image from "../assets/eduece10-colors.jpg";
import mathVentureImage from "../assets/mathventure-swe.png";
import theTeachersImage from "../assets/the-teachers.jpg";

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
};

export type CaseStudy = {
  subtitle: string;
  role: string;
  context: string;
  focus: string;
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  takeaway: string;
};

export type ProjectExtraLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  live: string;
  code: string;
  extraLinks?: ProjectExtraLink[];
  variant: "lime" | "yellow" | "lilac";
  featured?: boolean;
  image?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "mathventure",
    number: "01",
    eyebrow: "Software Engineering · Educational Technology",
    title: "Project MathVenture",
    image: mathVentureImage,
    description:
      "An interactive mathematics learning platform for kindergarten pupils, combining gamified activities, classroom management, and offline-first functionality to support engaging and accessible learning.",
    tags: [
      "TypeScript",
      "Vitest",
      "React",
      "Tanstack Start",
      "Supabase",
      "Deno",
      "PostgreSQL",
      "IndexedDB",
      "SQLite",
    ],
    live: "https://mathventureprototype1.netlify.app/",
    code: "https://github.com/adriaanamd/mathventure",
    extraLinks: [
      {
        label: "Collaborator repo",
        url: "https://github.com/dmjm99125/mathventurev2",
      },
    ],
    variant: "lime",
    featured: true,
    caseStudy: {
      subtitle:
        "Addressing early numeracy and DepEd curriculum sequencing gaps in the Philippines through 9 offline-first, gamified kindergarten math modules.",
      role: "Lead Game Developer",
      context: "Backed by 'Counting the Uncounted' ECEd Research · New Cabalan Elementary School",
      focus: "9 DepEd Numeracy Modules · SQLite OPFS / Tauri Offline Sync",
      metrics: [
        {
          value: "9 Modules",
          label: "Targeted games built around DepEd kindergarten competencies including Sequencing",
        },
        {
          value: "42 Pupils",
          label: "Grounded in empirical pre/post-test research at New Cabalan Elementary School",
        },
        {
          value: "7-Day Lease",
          label:
            "Full offline classroom operation via SQLite WASM (OPFS), IndexedDB & Windows Tauri",
        },
      ],
      sections: [
        {
          eyebrow: "01 · The Problem",
          title:
            "Filipino kids struggle with early math instruction—and sequencing takes one of the worst direct hits",
          body: "With 84% of Filipino 15-year-olds scoring below minimum math proficiency in PISA 2022, the root starts in early childhood—where unaddressed gaps compound over time ('the Matthew Effect'). Across the DepEd kindergarten curriculum (MATATAG MELCs), children struggle heavily to understand standard math instruction, and sequencing—ordering by size/length, identifying before/after/between, and arranging least-to-greatest—is one of the hardest-hit competencies. At the same time, public elementary classrooms rarely have reliable internet for cloud-only edtech tools.",
        },
        {
          eyebrow: "02 · System Architecture",
          title:
            "True offline-first classroom operation across Web PWA (SQLite OPFS) and Windows Tauri",
          body: "MathVenture was engineered so a teacher can log in once online, download the classroom pack, and run an entire class without internet on a sliding 7-day offline lease:",
          bullets: [
            "Dual-runtime local persistence: Uses SQLite WASM in OPFS (behind a worker boundary) with automatic fallback to a durable IndexedDB adapter on the web PWA, and native SQLite (mathventure-app.sqlite3) via a Rust-managed atomic transaction bridge on Windows Tauri.",
            "Dependency-ordered outbox sync: Local class creation, roster switches, assignments, quiz checkpoints, and attempts queue in a durable outbox and reconcile with Supabase (PostgreSQL + Deno Edge Functions) via 'Sync now' when coverage returns.",
            "Security & privacy: Stores only a salted password verifier locally (never raw passwords) and routes cloud traffic exclusively through HTTPS Supabase Edge Functions.",
          ],
        },
        {
          eyebrow: "03 · Core Features & Engineering",
          title: "Conceived around 9 interactive learning modules and localized Filipino context",
          body: "Anchored on Clements and Sarama's Learning Trajectories Approach and revised directly with early childhood educators, the platform features 9 dedicated student modules alongside a Teacher Control Panel:",
          bullets: [
            "The 9 Core Modules: (1) Sequencing & Pattern Completion (with Alpabasa video integration), (2) Numbers & Counting (1–20 correspondence), (3) Addition (scaffolded 1–5 sums up to 10), (4) Subtraction (minuends up to 7), (5) Comparison, (6) Clock & Time Reading, (7) Colors, (8) Shapes (localized everyday objects: bilog, parisukat, tatsulok, oval), and (9) Measurement—plus unrestricted Free Play.",
            "Strict pedagogical guardrails: Enforces exact attempt counts, immediate audio-visual celebration feedback, and explicit 'Repeat Game' / 'Skip or Next Game' controls tailored for 5-to-6-year-old learners.",
            "Teacher Control Panel: Multi-section classroom management, custom quiz assignments, cached student switching, and Recharts mastery analytics.",
          ],
        },
        {
          eyebrow: "04 · Impact & Quality Built-In",
          title: "Backed by empirical research and multi-runtime CI quality gates",
          body: "Paired with the Gordon College ECEd research study 'Counting the Uncounted' (which demonstrated statistically significant numeracy gains, Wilcoxon W = 143, p = .008, large effect size |r_rb| = 0.52), the repository enforces blocking CI lanes across Vitest frontend suites, Deno Supabase tests, and Rust cargo test/clippy checks.",
        },
      ],
      takeaway:
        "Closing early math gaps in Philippine classrooms requires solving the pedagogical problem and the infrastructure problem together: culturally familiar play for competencies like sequencing, running on an offline-first engine that never waits on school Wi-Fi.",
    },
  },
  {
    slug: "the-teachers",
    number: "02",
    eyebrow: "Numeracy development",
    title: "The Teachers",
    image: theTeachersImage,
    description:
      "A learning resource that turns foundational numeracy concepts into a clear, friendly digital experience for young learners.",
    tags: ["Learning design", "HTML", "CSS"],
    live: "https://maamjofas1.netlify.app/",
    code: "https://github.com/Dmjm99125/theteachers",
    variant: "yellow",
  },
  {
    slug: "maam-jos-classroom",
    number: "03",
    eyebrow: "Early childhood education",
    title: "Ma’am Jo’s Classroom",
    image: eduece10Image,
    description:
      "A thoughtful course project for EDUECE10, designed to organize classroom ideas and make educational content feel welcoming.",
    tags: ["Early learning", "HTML", "CSS"],
    live: "https://maamjofasmaganda1.netlify.app/",
    code: "https://github.com/Dmjm99125/maamjofasmaganda",
    variant: "lilac",
  },
];
