export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  issuedDate: string;
  image: string;
  imageAlt: string;
  credentialUrl?: string;
}

export const certificates: CertificateItem[] = [
  {
    id: "certificate-id",
    title: "Nama Sertifikat",
    issuer: "Nama Penerbit",
    category: "Web Development",
    issuedDate: "Tanggal Terbit",
    image: "/images/certificates/nama-sertifikat.webp",
    imageAlt: "Sertifikat Nama Sertifikat",
  },
];