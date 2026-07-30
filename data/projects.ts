export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: readonly string[];
  caseStudyUrl: string | null;
  websiteUrl: string | null;
  featured: boolean;
}

export const projectsSectionData = {
  sectionLabel: "Selected Projects",

  heading: {
    firstLine: "Featured",
    highlightedText: "Projects",
  },

  description:
    "Berbagai project terbaik yang telah saya kembangkan selama proses belajar dan eksplorasi teknologi.",

  actions: {
    caseStudyLabel: "View Case Study",
    websiteLabel: "Visit Website",
  },
} as const;

export const projects: readonly ProjectItem[] = [
  {
    id: "puskesmas-tandang",
    title: "Website Puskesmas Tandang",
    description:
      "Sistem informasi layanan kesehatan untuk memudahkan pasien dan admin dalam mengelola data dan layanan.",
    image: "/images/projects/puskesmas-tandang.webp",
    imageAlt: "Tampilan Website Puskesmas Tandang",
    technologies: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
  {
    id: "janji-martahan-coffee",
    title: "Janji Martahan Coffee",
    description:
      "Website company profile untuk kedai kopi dengan tampilan modern dan pengalaman pengguna yang optimal.",
    image: "/images/projects/janji-martahan-coffee.webp",
    imageAlt: "Tampilan website Janji Martahan Coffee",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
  {
    id: "traveltrack",
    title: "TravelTrack",
    description:
      "Platform travelling untuk mencari destinasi wisata terbaik dan merencanakan perjalanan dengan mudah.",
    image: "/images/projects/traveltrack.webp",
    imageAlt: "Tampilan platform TravelTrack",
    technologies: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
  {
    id: "dashboard-admin-template",
    title: "Dashboard Admin Template",
    description:
      "Template dashboard admin modern dengan berbagai komponen UI dan data visualisasi yang interaktif.",
    image: "/images/projects/dashboard-admin-template.webp",
    imageAlt: "Tampilan Dashboard Admin Template",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
  {
    id: "bem-it-del",
    title: "Website BEM IT Del",
    description:
      "Website organisasi mahasiswa untuk informasi kegiatan, berita, dan pengelolaan data anggota.",
    image: "/images/projects/bem-it-del.webp",
    imageAlt: "Tampilan Website BEM IT Del",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
  {
    id: "videnti",
    title: "Videnti (Web & Mobile App)",
    description:
      "Aplikasi absensi pintar dengan fitur face recognition, geolocation, dan real-time tracking untuk kehadiran.",
    image: "/images/projects/videnti.webp",
    imageAlt: "Tampilan aplikasi Videnti versi web dan mobile",
    technologies: ["Flutter", "Dart", "Laravel", "MySQL"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "Website portfolio pribadi dengan desain futuristik dan animasi interaktif yang modern.",
    image: "/images/projects/personal-portfolio.webp",
    imageAlt: "Tampilan Personal Portfolio Kelpinn",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    description:
      "Website e-commerce dengan fitur keranjang, pembayaran, dan manajemen produk.",
    image: "/images/projects/ecommerce-website.webp",
    imageAlt: "Tampilan E-Commerce Website",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
];