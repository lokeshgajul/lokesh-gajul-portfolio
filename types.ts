export type SkillLevel = "Expert" | "Proficient" | "Familiar";

export type ProjectCategory =
  | "all"
  | "fullstack"
  | "mobile"
  | "frontend"
  | "backend";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  isFlagship?: boolean;
  problem?: string;
  solution?: string;
  impact?: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  metrics?: ProjectMetric[];
  image?: string;
  imagePlaceholderGradient?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: "Internship" | "Full-time" | "Contract";
  description: string[];
  tech?: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  score: string;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon: string;
  category: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  shortBio: string[];
  location: string;
  openToWork: boolean;
  statusText: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
