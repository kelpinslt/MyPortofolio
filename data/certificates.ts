export interface CertificateItem {
  id: string;
  organization: string;
  category: string;
  issuedDate: string;
  image: string | null;
  imageAlt: string | null;
  credentialUrl: string | null;
}

export const certificatesSectionData = {
  heading: {
    firstLine: "My",
    highlightedText: "Certifications",
  },

  description: [
    "Berbagai sertifikasi dan pelatihan yang telah saya selesaikan",
    "untuk meningkatkan kompetensi dan kemampuan profesional.",
  ],

  quote:
    "Selalu belajar, berkembang, dan menjadi versi terbaik dari diri sendiri.",
} as const;

export const certificates: readonly CertificateItem[] = [
  {
    id: "pandi-domain-id",
    organization: "Pandi Domain Id",
    category: "Web Development",
    issuedDate: "27 August 2024",
    image: null,
    imageAlt: null,
    credentialUrl: null,
  },
  {
    id: "apple-developer-academy",
    organization: "Apple Developer Academy",
    category: "iOS Development",
    issuedDate: "26 June 2024 - 31 July 2024",
    image: null,
    imageAlt: null,
    credentialUrl: null,
  },
  {
    id: "microsoft",
    organization: "Microsoft",
    category: "Cloud Computing",
    issuedDate: "20 August 2024",
    image: null,
    imageAlt: null,
    credentialUrl: null,
  },
  {
    id: "institut-teknologi-del",
    organization: "Institut Teknologi Del",
    category: "Web Optimization",
    issuedDate: "26 May 2025 - 27 May 2025",
    image: null,
    imageAlt: null,
    credentialUrl: null,
  },
  {
    id: "universitas-ciputra",
    organization: "Universitas Ciputra",
    category: "Full Stack Development",
    issuedDate: "14 March 2024",
    image: null,
    imageAlt: null,
    credentialUrl: null,
  },
  {
    id: "alibaba-cloud",
    organization: "Alibaba Cloud",
    category: "Cloud Computing",
    issuedDate: "30 May 2024",
    image: null,
    imageAlt: null,
    credentialUrl: null,
  },
  {
    id: "indonesia-stock-exchange",
    organization: "Indonesia Stock Exchange (IDX)",
    category: "Financial Technology",
    issuedDate: "12 January 2025",
    image: null,
    imageAlt: null,
    credentialUrl: null,
  },
  {
    id: "universitas-negeri-jakarta",
    organization: "Universitas Negeri Jakarta",
    category: "Web Programming",
    issuedDate: "18 November 2024",
    image: null,
    imageAlt: null,
    credentialUrl: null,
  },
];