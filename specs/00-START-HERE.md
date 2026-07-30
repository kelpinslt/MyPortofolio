Kelpinn Portfolio Specifications — Start Here

Status paket

Paket ini berisi lima spesifikasi section yang telah diselaraskan dengan gambar referensi masing-masing.

Status: perencanaan dikunci dan siap masuk ke audit data/aset, kemudian implementasi TSX.

Section final:

Hero

About

Skills

Projects

Certificates

Navigasi final:

About | Skills | Project | Certificates

Tidak ada Contact Section pada paket saat ini.

Struktur folder

specs/
├── references/
│   ├── hero.png
│   ├── about.png
│   ├── skills.png
│   ├── projects.png
│   └── certificates.png
├── sections/
│   ├── 01-HERO.yaml
│   ├── 02-ABOUT.yaml
│   ├── 03-SKILLS.yaml
│   ├── 04-PROJECTS.yaml
│   └── 05-CERTIFICATES.yaml
├── 00-START-HERE.md
├── 01-MASTER-SPEC.yaml
├── 02-DESIGN-TOKENS.yaml
└── VALIDATION-REPORT.md

Nama file bersifat case-sensitive. Gunakan skills.png, bukan Skills.png.

Fungsi setiap dokumen

00-START-HERE.mdPanduan membaca, urutan kerja, serta aturan untuk AI/developer.

01-MASTER-SPEC.yamlStruktur global, urutan section, navigasi final, arsitektur komponen, aturan responsive, accessibility, dan performance.

02-DESIGN-TOKENS.yamlToken fallback global dan override visual masing-masing section.

sections/*.yamlSumber detail utama untuk section terkait: ukuran, posisi, warna, content contract, animation, responsive, dan aturan implementasi.

references/*.pngAcuan static visual comparison.

VALIDATION-REPORT.mdHasil audit konsistensi paket.

Urutan membaca untuk AI

Baca 00-START-HERE.md.

Baca 01-MASTER-SPEC.yaml.

Baca 02-DESIGN-TOKENS.yaml.

Baca YAML section yang akan dikerjakan.

Baca data TypeScript section tersebut.

Periksa gambar referensi section.

Tampilkan analisis dan daftar file yang akan diubah.

Implementasikan hanya setelah analisis dinyatakan benar.

Prioritas sumber kebenaran

Apabila ada perbedaan:

Keputusan final yang sudah dikonfirmasi pengguna.

YAML section yang sedang dikerjakan.

Gambar referensi untuk validasi komposisi statis.

File data/*.ts untuk teks, gambar produksi, dan URL.

01-MASTER-SPEC.yaml.

02-DESIGN-TOKENS.yaml sebagai fallback.

Catatan:

Gambar referensi tidak menghapus intentional enhancement yang tertulis di YAML.

Particle Hero tetap wajib walaupun tidak terlihat pada screenshot statis.

Nilai per section tidak boleh dipaksa menjadi satu token global.

Jangan mengarang data yang belum tersedia.

Frame referensi

Section

Gambar sumber

Normalisasi/target

Hero

715 × 462

1440 × 930

About

1853 × 849

1440 × 660

Skills

499 × 325

1440 × ±938

Projects

1586 × 992

1586 × 992

Certificates

1586 × 992

1586 × 992

Koordinat desktop adalah baseline visual. Jangan menggunakan satu set koordinat tetap untuk seluruh breakpoint.

Aturan arsitektur sederhana

Gunakan:

components/
├── cards/
│   ├── ProjectCard.tsx
│   └── CertificateCard.tsx
├── decorations/
│   ├── ParticleBackground.tsx
│   ├── DotGrid.tsx
│   ├── GlowLayer.tsx
│   ├── Hexagon.tsx
│   └── NoiseLayer.tsx
├── sections/
│   ├── hero/HeroSection.tsx
│   ├── about/AboutSection.tsx
│   ├── skills/SkillsSection.tsx
│   ├── projects/ProjectsSection.tsx
│   └── certificates/CertificatesSection.tsx
└── ui/
    └── Navbar.tsx

Jangan membuat file komponen terpisah untuk setiap project, certificate, kategori skill, judul, badge, atau dekorasi kecil.

Aturan data

Hero menggunakan tiga role:

Developer?

Designer?

Mobile Developer?

Pergantian role setiap 3000ms.

Skills berjumlah 16 item.

Projects berjumlah 8 item.

Certificates berjumlah 8 item.

Project dan certificate menggunakan satu reusable card dan data array.

URL yang belum tersedia harus tetap null.

Tombol/link yang memiliki URL null tidak boleh menjadi tautan palsu.

Nama dan ekstensi file di public/images harus sama persis dengan path pada data dan YAML.

Urutan implementasi

Audit seluruh data/*.ts.

Verifikasi seluruh aset produksi di public/images.

Konfigurasi font dan global CSS dasar.

Buat dekorasi reusable.

Implementasikan Hero dan lakukan screenshot comparison.

Implementasikan About dan validasi.

Implementasikan Skills dan validasi.

Implementasikan Projects menggunakan satu ProjectCard.

Implementasikan Certificates menggunakan satu CertificateCard.

Gabungkan seluruh section di app/page.tsx.

Uji desktop, laptop, tablet, mobile, keyboard, reduced motion, dan performance.

Data yang masih boleh belum lengkap

Hal berikut tidak menghalangi pembuatan struktur dan tampilan:

Email dan URL sosial About.

Case-study URL dan website URL Projects.

Credential URL Certificates.

Nama ekstensi aset produksi yang belum diverifikasi.

AI tidak boleh mengarang nilai tersebut.

Prompt awal untuk AI coding

Baca seluruh dokumen global, YAML section, data TypeScript, dan gambar referensi
yang diberikan. Jangan mengubah kode sebelum melakukan analisis.

Tampilkan:
1. Pemahaman layout dan visual.
2. Data dan aset yang akan digunakan.
3. Daftar file yang akan diubah.
4. Konflik atau data yang belum tersedia.
5. Urutan implementasi.

Gunakan section YAML sebagai kontrak implementasi dan gambar referensi untuk
visual comparison. Jangan mengubah section lain, jangan mengarang URL atau aset,
dan jangan membuat komponen mikro yang tidak diperlukan.

Checklist sebelum implementasi TSX

Semua YAML valid.

Lima gambar referensi tersedia.

Nama skills.png memakai huruf kecil.

Navigasi final adalah About, Skills, Project, Certificates.

Hero memakai Mobile Developer?.

data/hero.ts dan data/navigation.ts sesuai Hero YAML.

Path foto About sesuai file sebenarnya.

Seluruh ikon Skills tersedia.

Delapan gambar Projects tersedia.

Delapan gambar Certificates tersedia.

URL yang belum ada tetap null.

Tidak ada placeholder.

Tidak ada Contact link tanpa section.