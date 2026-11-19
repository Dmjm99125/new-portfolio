export type WorkExperienceItem = {
  number: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
};

export type TeachingFocusItem = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export type EducationItem = {
  number: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
  tags: string[];
  accent: "lime" | "warm";
};

export const workExperience: WorkExperienceItem[] = [
  {
    number: "01",
    role: "ESL Teacher",
    organization: "51Talk Corp.",
    period: "2018 – Present",
    description:
      "Teaching English as a Second Language to diverse groups of students, mostly Chinese, ranging from young learners to adults, using online platforms.",
    tags: ["Curriculum Development", "Student Assessment", "Cross-cultural Communication"],
  },
];

export const teachingFocus: TeachingFocusItem[] = [
  {
    number: "01",
    title: "ESL Instruction",
    description:
      "Helping non-native speakers develop English language skills through interactive and culturally sensitive teaching methods.",
    tags: ["Conversational English", "Grammar", "Cultural Integration"],
  },
  {
    number: "02",
    title: "Kindergarten",
    description:
      "Creating foundational learning experiences that spark curiosity and build essential academic and social skills.",
    tags: ["Early Literacy", "Social Skills", "Play-Based Learning"],
  },
];

export const education: EducationItem[] = [
  {
    number: "01",
    period: "2023–2027",
    degree: "Bachelor of Early Childhood Education",
    institution: "Gordon College — College of Education, Arts, and Sciences",
    description:
      "Specialized in teaching kids, mainly Kindergarten and Daycare. Coursework included child psychology, curriculum design, and educational technology.",
    tags: ["TESOL Methodology", "Child Psychology", "Research Methods"],
    accent: "lime",
  },
  {
    number: "02",
    period: "2010–2012",
    degree: "Associate in Computing Technology",
    institution: "Central Luzon College of Science & Technology",
    description:
      "Foundation in programming, database management, and software development that later informed an analytical approach to education.",
    tags: ["Programming", "Database Systems", "Software Engineering"],
    accent: "warm",
  },
];
