export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  demoUrl?: string;
  repositoryUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Website portfolio pribadi yang dibangun menggunakan Next.js.",
    image: "/images/projects/portfolio-website.webp",
    imageAlt: "Tampilan website portfolio Kelpinn",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];