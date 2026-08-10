export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "tools"
  | "other";

export type SkillIcon =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "symbol";
      key: string;
      alt: string;
    };

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategoryId;
  icon: SkillIcon;
  description?: string;
}

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  iconKey: string;
}

export const skillsSectionData = {
  sectionLabel: "My Skills",

  heading: {
    firstLine: "Technologies",
    highlightedText: "I Work With",
  },

  description:
    "These are the technologies and tools I use to build modern, responsive, and user-friendly websites.",

  categories: [
    {
      id: "frontend",
      title: "Frontend",
      iconKey: "code",
    },
    {
      id: "backend",
      title: "Backend",
      iconKey: "server",
    },
    {
      id: "tools",
      title: "Tools & Design",
      iconKey: "pen-tool",
    },
    {
      id: "other",
      title: "Other Skills",
      iconKey: "sparkles",
    },
  ] satisfies readonly SkillCategory[],
} as const;

export const skills: SkillItem[] = [
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    icon: {
      type: "image",
      src: "/images/skills/html.png",
      alt: "Logo HTML5",
    },
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    icon: {
      type: "image",
      src: "/images/skills/css.png",
      alt: "Logo CSS3",
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    icon: {
      type: "image",
      src: "/images/skills/javascript.png",
      alt: "Logo JavaScript",
    },
  },
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    icon: {
      type: "image",
      src: "/images/skills/react.png",
      alt: "Logo React.js",
    },
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    icon: {
      type: "image",
      src: "/images/skills/nextjs.png",
      alt: "Logo Next.js",
    },
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    icon: {
      type: "image",
      src: "/images/skills/laravel.png",
      alt: "Logo Laravel",
    },
  },
  {
    id: "php",
    name: "PHP",
    category: "backend",
    icon: {
      type: "image",
      src: "/images/skills/php.png",
      alt: "Logo PHP",
    },
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "backend",
    icon: {
      type: "image",
      src: "/images/skills/mysql.png",
      alt: "Logo MySQL",
    },
  },
  {
    id: "figma",
    name: "Figma",
    category: "tools",
    icon: {
      type: "image",
      src: "/images/skills/figma.png",
      alt: "Logo Figma",
    },
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    icon: {
      type: "image",
      src: "/images/skills/git.png",
      alt: "Logo Git",
    },
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    icon: {
      type: "image",
      src: "/images/skills/vscode.png",
      alt: "Logo Visual Studio Code",
    },
  },
  {
    id: "pixellab",
    name: "PixelLab",
    category: "tools",
    icon: {
      type: "image",
      src: "/images/skills/pixellab.png",
      alt: "Logo PixelLab",
    },
  },
  {
    id: "responsive-design",
    name: "Responsive Design",
    category: "other",
    icon: {
      type: "symbol",
      key: "responsive-design",
      alt: "Ikon responsive design",
    },
    description:
      "Merancang website yang responsif di berbagai perangkat.",
  },
  {
    id: "performance-optimization",
    name: "Performance Optimization",
    category: "other",
    icon: {
      type: "symbol",
      key: "performance-optimization",
      alt: "Ikon performance optimization",
    },
    description:
      "Mengoptimalkan kecepatan dan performa website agar lebih baik.",
  },
  {
    id: "clean-code",
    name: "Clean Code",
    category: "other",
    icon: {
      type: "symbol",
      key: "clean-code",
      alt: "Ikon clean code",
    },
    description:
      "Menulis kode yang rapi, terstruktur, dan mudah dirawat.",
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "other",
    icon: {
      type: "symbol",
      key: "problem-solving",
      alt: "Ikon problem solving",
    },
    description:
      "Mampu menganalisis masalah dan mencari solusi yang efektif.",
  },
];