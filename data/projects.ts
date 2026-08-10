export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string | null;
  imageAlt: string | null;
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
    image: "/images/projects/puskesmas.jpg",
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
    image: null,
    imageAlt: null,
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
    image: null,
    imageAlt: null,
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
    image: null,
    imageAlt: null,
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
    image: null,
    imageAlt: null,
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
    image: null,
    imageAlt: null,
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
    image: null,
    imageAlt: null,
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
    image: null,
    imageAlt: null,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    caseStudyUrl: null,
    websiteUrl: null,
    featured: true,
  },
];