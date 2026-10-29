import type {
  ProfileData,
  Project,
  Experience,
  Education,
} from "../../types.ts";
import nourishnet from "../assets/nourishnet.png";
import exblore from "../assets/exblore.png";
import textutils from "../assets/textutils.png";

export interface SkillGroup {
  category: string;
  items: string[];
}

export const PROFILE_DATA: ProfileData = {
  name: "Lokesh Gajul",
  role: "Full-Stack Developer & Software Engineer",
  tagline: "Building clean, fast, and accessible web & mobile applications.",
  shortBio: [
    "I'm a final-year B.E. Information Technology student at RGIT Mumbai who learns by shipping real products, from full-stack web apps to mobile apps used by actual people.",
    "Beyond coursework, I've completed engineering internships, deployed commercial React Native applications to the Google Play Store, and handled production database migrations on PostgreSQL, building services with TypeScript and Node.js along the way.",
    "I'm looking for internship and entry-level roles where I can keep learning, contribute to clean, well-architected code, and build interfaces that put users first.",
  ],
  location: "Mumbai, India",
  openToWork: true,
  statusText: "Open to opportunities",
  email: "lokeshgajul465@gmail.com",
  github: "https://github.com/lokeshgajul",
  linkedin: "https://www.linkedin.com/in/lokesh-gajul-697069237/",
  resumeUrl: "#resume",
  stats: [
    { label: "Play Store Apps", value: "4+", sublabel: "Published" },
    { label: "Technologies", value: "15+", sublabel: "In Production" },
    { label: "Academic Score", value: "88%+", sublabel: "Distinction" },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "FAST API", "JWT"],
  },
  {
    category: "Databases & BaaS",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Vite"],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "nourishnet",
    title: "NourishNet",
    subtitle: "Food Rescue & Redistribution Network",
    description:
      "A platform connecting restaurants and donors with verified local NGOs to curb food waste and streamline distribution to communities in need.",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    isFlagship: true,
    problem:
      "Edible restaurant food is wasted daily while local shelters struggle with food supply without real-time coordination.",
    solution:
      "A dispatch platform that enables immediate broadcast of available food and coordinates pickup within 2 hours.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: nourishnet,
    liveUrl: "https://nourishnet-food-donation-platform.netlify.app/",
    githubUrl: "https://github.com/lokeshgajul/NourishNet",
  },
  {
    id: "exblore",
    title: "Exblore",
    subtitle: "Community Publishing Platform",
    description:
      "A fast, distraction-free blog website where users publish articles across various categories, join niche communities, and toggle light/dark modes.",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    isFlagship: false,
    problem:
      "Cluttered publishing sites loaded with tracking and slow initial loads.",
    solution:
      "Clean markdown-enabled authoring, category filters, and persistent zero-flicker dark mode.",
    image: exblore,
    tech: ["React", "Express", "MongoDB", "Node.js", "Context API"],
    liveUrl: "https://exblore.netlify.app/",
    githubUrl: "https://github.com/lokeshgajul/Exblore",
  },
  {
    id: "textutils",
    title: "TextUtils",
    subtitle: "Real-time Text Utility Suite",
    description:
      "A lightweight client-side application for instant string manipulation, case conversion, whitespace cleaning, and reading metrics.",
    category: "frontend",
    categoryLabel: "Frontend",
    isFlagship: false,
    problem:
      "Repetitive manual formatting tasks often done on ad-heavy websites that compromise user privacy.",
    solution:
      "100% client-side string transformations with instant clipboard support.",
    image: textutils,
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://lokeshgajul.github.io/my-app/",
    githubUrl: "https://github.com/lokeshgajul/my-app",
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "fihavock",
    role: "Software Development Intern (React Native)",
    company: "Fi Havock Digital Private Limited",
    location: "Mumbai, Maharashtra",
    period: "Jan 2024 – Jun 2024",
    type: "Internship",
    description: [
      "Published 4+ mobile applications to the Google Play Store maintaining high crash-free session rates.",
      "Improved app responsiveness and screen transition speed by 70% through Redux state restructuring and API caching.",
      "Implemented secure sandbox and live payment gateway flows with backend transaction verification.",
    ],
    tech: ["React Native", "TypeScript", "Redux", "REST APIs", "Play Console"],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "rgit",
    degree: "Bachelor of Information Technology (B.E. IT)",
    school: "Rajiv Gandhi Institute of Technology (RGIT)",
    location: "Mumbai, Maharashtra",
    period: "2024 - 2027",
    score: "Ongoing",
    highlights: [
      "Coursework in Data Structures, Algorithms, Software Engineering, and Database Management.",
    ],
  },
  {
    id: "polytechnic",
    degree: "Diploma in Information Technology",
    school: "Government Polytechnic",
    location: "Maharashtra, India",
    period: "2021 - 2024",
    score: "88.75% (Distinction)",
    highlights: [
      "Distinction in fundamental Computer and IT engineering disciplines.",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    school: "Vikas High School",
    location: "Maharashtra, India",
    period: "Completed",
    score: "85.80% (Distinction)",
    highlights: ["Excellence in Mathematics and Science."],
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
