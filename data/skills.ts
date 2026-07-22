export type SkillCategory =
  | "frontend"
  | "backend"
  | "tools"
  | "other";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  iconPath?: string;
  iconAlt?: string;
}

export const skills: SkillItem[] = [
  {
    id: "html",
    name: "HTML",
    category: "frontend",
    iconPath: "/images/skills/html.svg",
    iconAlt: "Logo HTML",
  },
  {
    id: "css",
    name: "CSS",
    category: "frontend",
    iconPath: "/images/skills/css.svg",
    iconAlt: "Logo CSS",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    iconPath: "/images/skills/javascript.svg",
    iconAlt: "Logo JavaScript",
  },
];