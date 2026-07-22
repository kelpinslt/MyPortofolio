# Kelpinn Portfolio Specifications — Start Here

## Ringkasan

Folder ini berisi hasil pemisahan non-lossy dari `PORTFOLIO-MASTER-SOURCE.txt` menjadi dokumentasi global dan lima
spesifikasi section untuk implementasi portfolio berbasis Next.js.

Sumber terdiri dari 9.054 baris dan mencakup Hero, About, Skills, Projects, serta Certificates. Setiap section
mempertahankan teks sumbernya secara utuh di dalam properti `raw_specification`, sehingga normalisasi file tidak
menghapus angka, instruksi, catatan, atau detail visual.

## Tujuan website

- Membangun personal developer portfolio bertema dark futuristic/cyber interface.
- Menggunakan hitam sebagai permukaan dominan dan merah sebagai aksen.
- Menampilkan Hero, About, Skills, Projects, dan Certificates sebagai satu halaman yang konsisten.
- Menggunakan spesifikasi sebagai sumber instruksi bagi AI coding atau developer, lalu menerjemahkannya menjadi
  komponen Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide React, dan sistem partikel yang sesuai.
- Mendekati referensi visual melalui implementasi awal dan proses visual comparison/fine tuning.

## Daftar file

1. `00-START-HERE.md` — panduan membaca dan implementasi.
2. `01-MASTER-SPEC.yaml` — metadata, struktur halaman, teknologi, aturan global, dan konflik.
3. `02-DESIGN-TOKENS.yaml` — kandidat token global dan token scoped per section.
4. `sections/01-HERO.yaml` — spesifikasi Hero.
5. `sections/02-ABOUT.yaml` — spesifikasi About.
6. `sections/03-SKILLS.yaml` — spesifikasi Skills.
7. `sections/04-PROJECTS.yaml` — spesifikasi Projects.
8. `sections/05-CERTIFICATES.yaml` — spesifikasi Certificates.
9. `VALIDATION-REPORT.md` — laporan cakupan dan validasi output.

## Urutan membaca

1. Baca `01-MASTER-SPEC.yaml`.
2. Baca `02-DESIGN-TOKENS.yaml`.
3. Baca file section yang sedang dikerjakan.
4. Gunakan `source_index` untuk menemukan blok penting.
5. Perlakukan `raw_specification` sebagai sumber detail paling lengkap.
6. Cocokkan hasil render dengan gambar referensi section apabila gambar tersedia.

## Prioritas sumber kebenaran

Apabila terdapat konflik:

1. Spesifikasi khusus section untuk section yang sedang dibangun.
2. Nilai eksplisit di `raw_specification`.
3. Aturan global di `01-MASTER-SPEC.yaml`.
4. Kandidat token di `02-DESIGN-TOKENS.yaml`.
5. Gambar referensi sebagai dasar visual comparison.
6. Jangan membuat nilai baru tanpa konfirmasi.

Nilai visual antarsection memang berbeda. Jangan memaksa semua section menggunakan satu nilai global apabila hal itu
merusak proporsi referensi. Gunakan token global sebagai default dan pertahankan override section yang eksplisit.

## Cara memakai file section

Setiap file section memiliki:

- `normalized_context`: konteks ringkas yang dapat dibaca cepat.
- `source_index`: indeks blok utama dan nomor baris asal.
- `raw_specification`: seluruh isi section sumber tanpa penghapusan.
- `conflicts`: tempat konflik lokal jika ditemukan kemudian.
- `unclassified_notes`: tempat catatan yang belum dapat dikategorikan.

`raw_specification` sengaja disimpan sebagai YAML literal block. Ini membuat file YAML tetap valid walaupun teks sumber
memiliki bagian YAML-like yang tidak selalu valid untuk diparse langsung.

## Urutan implementasi

1. Audit konflik token global.
2. Konfigurasi font, warna, background, breakpoint, dan motion dasar.
3. Buat komponen dekorasi reusable: particle field, dot grid, hexagon, glow, dan noise.
4. Implementasikan Hero.
5. Validasi Hero pada viewport referensi.
6. Implementasikan About dan validasi.
7. Implementasikan Skills dan validasi.
8. Implementasikan Projects dengan satu reusable `ProjectCard`.
9. Implementasikan Certificates dengan satu reusable `CertificateCard`.
10. Gabungkan semua section di `app/page.tsx`.
11. Lakukan validasi desktop, laptop, tablet, mobile, reduced motion, accessibility, dan performance.

## Aturan penting untuk AI/developer

- Jangan mendesain ulang atau menyederhanakan spesifikasi tanpa instruksi.
- Jangan menggunakan absolute positioning untuk grid/card utama.
- Absolute positioning hanya untuk lapisan latar dan ornamen.
- Gunakan CSS Grid/Flexbox untuk layout konten.
- Gunakan data array untuk project dan certificate card.
- Gunakan `next/image` ketika diwajibkan oleh spesifikasi section.
- Ornamen harus `pointer-events: none` dan `aria-hidden="true"`.
- Hormati `prefers-reduced-motion`.
- Pertahankan z-index agar dekorasi tidak menutupi teks.
- Nilai X/Y adalah baseline viewport referensi, bukan posisi universal untuk semua breakpoint.
- Jangan menganggap target similarity sebagai jaminan tanpa visual comparison.

## Data yang belum lengkap

- Target audiens tidak dinyatakan secara eksplisit.
- Strategi SEO global tidak dinyatakan.
- URL produksi, repository utama, analytics, CMS, dan integrasi eksternal tidak dinyatakan.
- Gambar referensi dan aset produksi tidak berada di dalam teks sumber ini.
- Beberapa section tidak memiliki breakpoint numerik lengkap.
- Konten aktual daftar project dan certificate hanya tersedia sejauh yang tertulis pada sumber.

## Konflik yang membutuhkan perhatian

- Frame desktop memakai 1440 px pada Hero/Skills dan 1586 px pada Projects/Certificates.
- Background global memiliki beberapa nilai: `#111111`, `#040404`, `#050505`, dan `#020202`.
- Accent merah memiliki beberapa varian: `#EF4444`, `#ff2d2d`, `#EF2B2B`, dan `#EF2027`.
- Ukuran section title berbeda sesuai section.
- Radius container berbeda: 30 px, 31 px, dan 38 px.
- Perilaku partikel Hero berbeda dari Projects/Certificates.

Konflik tersebut tidak otomatis merupakan kesalahan; sebagian dapat menjadi override section. Konfirmasi diperlukan
hanya jika proyek harus dipaksa memakai satu nilai global tunggal.

## Checklist implementasi

- [ ] Semua file dibaca sesuai urutan.
- [ ] Token global dan override section dibedakan.
- [ ] Hero selesai dan dibandingkan dengan referensi.
- [ ] About selesai dan dibandingkan dengan referensi.
- [ ] Skills selesai dan dibandingkan dengan referensi.
- [ ] Projects memakai reusable card dan data array.
- [ ] Certificates memakai reusable card dan data array.
- [ ] Dekorasi berada di belakang konten.
- [ ] Desktop reference viewport diuji.
- [ ] Laptop, tablet, dan mobile diuji.
- [ ] `prefers-reduced-motion` diuji.
- [ ] Alt text dan label aksesibilitas tersedia.
- [ ] Tidak ada clipping akibat fixed height.
- [ ] Tidak ada nilai konflik yang dipilih tanpa dokumentasi.
