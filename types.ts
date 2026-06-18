export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
}

export interface CaseStudyDetail extends CaseStudy {
  client: string;
  year: string;
  role: string;
  tools: string[];
  challenge: string;
  approach: string;
  solution: string;
  results: string[];
  contentImages: string[];
  highFiImages: string[];
  trigger?: string;
  insight?: string;
  hmw?: string;
  currentExp?: string;
  productThinking?: string[];
  userFlow?: string[];
  keyScreens?: { title: string; annotations: string[] }[];
  constraints?: string[];
  testing?: string[];
  futureScope?: string[];
  reflection?: string;
  liveUrl?: string;
  teamSize?: { designers: number; developers: number };
  ownership?: string[];
  bottlenecks?: string[];
  componentsCount?: number;
  handoffPractices?: string[];
  sectionsOwned?: { title: string; description: string; image: string; note: string }[];
  statsBlock?: { value: string; label: string }[];
  brandsOnboarded?: string[];
}