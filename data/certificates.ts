export interface CertificateItem {
  id: string;
  organization: string;
  category: string;
  issuedDate: string;
  image: string;
  imageAlt: string;
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
    image: "/images/certificates/pandi-domain-id.webp",
    imageAlt: "Sertifikat Junior Web Developer dari Pandi Domain Id",
    credentialUrl: null,
  },
  {
    id: "apple-developer-academy",
    organization: "Apple Developer Academy",
    category: "iOS Development",
    issuedDate: "26 June 2024 - 31 July 2024",
    image: "/images/certificates/apple-developer-academy.webp",
    imageAlt: "Sertifikat iOS Developer Foundation dari Apple Developer Academy",
    credentialUrl: null,
  },
  {
    id: "microsoft",
    organization: "Microsoft",
    category: "Cloud Computing",
    issuedDate: "20 August 2024",
    image: "/images/certificates/microsoft.webp",
    imageAlt: "Sertifikat Microsoft Azure Fundamentals dari Microsoft",
    credentialUrl: null,
  },
  {
    id: "institut-teknologi-del",
    organization: "Institut Teknologi Del",
    category: "Web Optimization",
    issuedDate: "26 May 2025 - 27 May 2025",
    image: "/images/certificates/institut-teknologi-del.webp",
    imageAlt: "Sertifikat Web Optimization dari Institut Teknologi Del",
    credentialUrl: null,
  },
  {
    id: "universitas-ciputra",
    organization: "Universitas Ciputra",
    category: "Full Stack Development",
    issuedDate: "14 March 2024",
    image: "/images/certificates/universitas-ciputra.webp",
    imageAlt: "Sertifikat Full Stack Web Development dari Universitas Ciputra",
    credentialUrl: null,
  },
  {
    id: "alibaba-cloud",
    organization: "Alibaba Cloud",
    category: "Cloud Computing",
    issuedDate: "30 May 2024",
    image: "/images/certificates/alibaba-cloud.webp",
    imageAlt: "Sertifikat Alibaba Cloud Developer Associate dari Alibaba Cloud",
    credentialUrl: null,
  },
  {
    id: "indonesia-stock-exchange",
    organization: "Indonesia Stock Exchange (IDX)",
    category: "Financial Technology",
    issuedDate: "12 January 2025",
    image: "/images/certificates/indonesia-stock-exchange.webp",
    imageAlt: "Sertifikat Indonesia Stock Exchange Course dari IDX",
    credentialUrl: null,
  },
  {
    id: "universitas-negeri-jakarta",
    organization: "Universitas Negeri Jakarta",
    category: "Web Programming",
    issuedDate: "18 November 2024",
    image: "/images/certificates/universitas-negeri-jakarta.webp",
    imageAlt: "Sertifikat Pemrograman Web Lanjutan dari Universitas Negeri Jakarta",
    credentialUrl: null,
  },
];