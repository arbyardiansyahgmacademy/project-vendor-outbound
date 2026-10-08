# PRD — VENDOROUTBOUND.ID

> **Product Requirements Document (PRD) & Technical Website Specification**  
> **Brand:** Vendor Outbound  
> **Domain:** `vendoroutbound.id`  
> **Document Version:** 1.0 — 2026  
> **Status:** Ready for Design & Development

---

## 1. Ringkasan Produk

**vendoroutbound.id** adalah website profesional untuk vendor penyelenggara kegiatan outbound, experiential learning, team building, leadership camp, corporate gathering, family gathering, outbound sekolah, serta wisata dan adventure.

Website dirancang bukan sekadar sebagai company profile, tetapi sebagai **digital sales platform** yang mampu:

- menjelaskan layanan secara cepat dan meyakinkan;
- membantu calon klien memilih program;
- menampilkan dokumentasi kegiatan secara visual;
- menghasilkan lead melalui WhatsApp;
- membangun topical authority melalui artikel;
- mendukung SEO, AEO, dan GEO;
- memberikan pengalaman premium pada desktop maupun mobile;
- tetap ringan karena menggunakan arsitektur static web tanpa framework UI berat.

> **Catatan validasi:** klaim seperti jumlah event, jumlah peserta, rating, lama pengalaman, sertifikasi, penghargaan, jumlah klien, maupun fasilitas tertentu hanya boleh ditampilkan apabila benar-benar tersedia bukti bisnis yang dapat diverifikasi.

---

# 2. Identitas & Positioning Bisnis

| Komponen | Ketentuan |
|---|---|
| Brand | **Vendor Outbound** |
| Domain | **https://vendoroutbound.id** |
| Positioning | Vendor penyelenggara kegiatan outbound dan experiential learning |
| Fokus | Team building, leadership, corporate gathering, family gathering, outbound sekolah, wisata & adventure |
| Kontak WhatsApp | **+62 822-1122-1909** |
| WhatsApp URL | `https://wa.me/6282211221909` |
| CTA Default | `Halo Vendor Outbound, saya ingin berkonsultasi mengenai kebutuhan kegiatan outbound.` |
| Cakupan utama | Batu, Malang, Mojokerto/Pacet/Trawas, Bromo, Banyuwangi dan destinasi Jawa Timur/Nasional sesuai ketersediaan layanan |
| Arsitektur | Modern Semantic Static Web |
| Teknologi | HTML5 + CSS3 + Vanilla JavaScript |
| Target utama | Lead generation, brand authority, organic search, dan konsultasi WhatsApp |

### Positioning statement

> **Vendor Outbound** membantu perusahaan, sekolah, keluarga, komunitas, dan organisasi merancang kegiatan outbound yang terstruktur, menyenangkan, aman, dan sesuai tujuan kegiatan.

---

# 3. Tujuan Website

## 3.1 Tujuan Bisnis

1. Meningkatkan jumlah inquiry melalui WhatsApp.
2. Menjadi pusat informasi resmi brand Vendor Outbound.
3. Mempermudah calon klien memahami pilihan program.
4. Mengubah pengunjung website menjadi calon lead yang lebih siap berkonsultasi.
5. Membangun kepercayaan melalui profil, dokumentasi, FAQ, dan informasi program.
6. Menjadi aset digital jangka panjang untuk SEO dan topical authority.

## 3.2 Tujuan Pengguna

Pengunjung harus dapat:

- mengetahui Vendor Outbound dalam beberapa detik;
- menemukan jenis layanan yang sesuai;
- memahami tujuan dan manfaat setiap program;
- melihat dokumentasi kegiatan;
- mengetahui area/destinasi yang tersedia;
- memperkirakan kebutuhan kegiatan;
- mengirim inquiry tanpa harus mengisi formulir panjang;
- menemukan jawaban atas pertanyaan umum;
- membaca artikel edukatif sebelum mengambil keputusan.

## 3.3 KPI Utama

KPI yang dapat digunakan setelah website aktif:

- WhatsApp click-through rate;
- jumlah inquiry WhatsApp;
- jumlah halaman layanan yang dikunjungi;
- organic impressions;
- organic clicks;
- CTR dari hasil pencarian;
- ranking keyword prioritas;
- engagement pada artikel;
- conversion rate landing page;
- Core Web Vitals;
- jumlah halaman terindeks;
- kualitas internal linking.

---

# 4. Target Audience

## A. Perusahaan / Corporate

- HR/HRD;
- GA/General Affairs;
- People Development;
- panitia gathering;
- manajemen;
- komunitas internal perusahaan.

### Kebutuhan

- team building;
- employee engagement;
- leadership;
- corporate gathering;
- refreshing;
- komunikasi dan kolaborasi tim.

## B. Sekolah

- kepala sekolah;
- guru;
- waka kesiswaan;
- pembina OSIS;
- panitia kegiatan;
- orang tua/wali.

### Kebutuhan

- outbound pelajar;
- character building;
- LDKS;
- leadership;
- edukasi alam;
- kegiatan kelompok.

## C. Family / Komunitas

- keluarga besar;
- komunitas;
- organisasi;
- alumni;
- kelompok sosial.

### Kebutuhan

- family gathering;
- fun games;
- wisata;
- camping;
- aktivitas kebersamaan.

## D. Wisata & Adventure

- wisatawan;
- komunitas;
- kelompok perusahaan;
- sekolah;
- keluarga.

### Kebutuhan

- rafting;
- offroad;
- camping;
- adventure;
- wisata terintegrasi outbound.

---

# 5. User Journey

## Journey 1 — Corporate Lead

`Google → Artikel/Landing Page → Layanan → Paket → Galeri → FAQ → WhatsApp`

## Journey 2 — Sekolah

`Google → Outbound Sekolah → Character Building / LDKS → Contoh Program → Galeri → WhatsApp`

## Journey 3 — Family Gathering

`Google → Family Gathering → Pilihan Paket → Destinasi → Galeri → Konsultasi`

## Journey 4 — Adventure

`Google → Outbound Wisata → Rafting / Offroad / Camping → Detail → WhatsApp`

## Journey 5 — Direct Visitor

`Homepage → Rencanakan Kegiatan → Pilih Kategori + Lokasi + Peserta → Generate WhatsApp`

---

# 6. Sitemap & Information Architecture

```text
vendoroutbound.id/
│
├── index.html
├── tentang-kami.html
├── produk.html
├── paket.html
├── gallery.html
├── blog.html
├── kontak.html
├── 404.html
│
├── paket/
│   ├── outbound-perusahaan.html
│   ├── family-gathering.html
│   ├── outbound-sekolah.html
│   ├── outbound-wisata.html
│   │
│   ├── team-building.html
│   ├── fun-games.html
│   ├── leadership-camp.html
│   ├── corporate-gathering.html
│   │
│   ├── paket-hemat.html
│   ├── paket-standard.html
│   ├── paket-premium.html
│   ├── paket-custom.html
│   │
│   ├── outbound-pelajar.html
│   ├── character-building.html
│   ├── ldks-leadership.html
│   ├── edukasi.html
│   │
│   ├── outbound-plus-wisata.html
│   ├── outbound-rafting.html
│   ├── outbound-offroad.html
│   └── outbound-camping.html
│
├── blog/
│   └── [artikel-seo].html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── image/
│       ├── hero/
│       ├── logo/
│       ├── paket/
│       ├── gallery/
│       └── author-artikel/
│
├── robots.txt
├── sitemap.xml
└── favicon.svg
```

---

# 7. Struktur Folder Development

## Prinsip

- semantic;
- modular;
- mudah dipelihara;
- tidak menggunakan framework UI berat;
- asset terorganisasi;
- URL mudah dibaca manusia dan mesin pencari.

## Aturan Naming

- gunakan lowercase;
- gunakan hyphen;
- hindari spasi;
- slug harus deskriptif;
- jangan membuat slug berdasarkan tanggal publikasi;
- gunakan URL permanen.

Contoh:

```text
/paket/team-building.html
/blog/manfaat-team-building-untuk-perusahaan.html
```

---

# 8. Global Design System

## 8.1 Visual Direction

Konsep utama:

> **Premium Adventure × Corporate Professional × Modern Editorial**

Visual tidak boleh terasa seperti website travel generik. Website harus memadukan:

- nuansa adventure;
- profesionalitas vendor;
- fotografi outdoor;
- typography editorial;
- whitespace yang cukup;
- card layout modern;
- bento grid;
- subtle glass effect;
- micro interaction.

## 8.2 Warna

Primary:

```css
--maroon-900: #2B0810;
--maroon-800: #420C18;
--maroon-700: #6B1426;
```

Neutral:

```css
--white: #FFFFFF;
--surface: #F7F5F3;
--text: #171316;
--muted: #6E676A;
--border: #E8E1E3;
```

Accent digunakan secara terbatas agar CTA tetap menonjol.

## 8.3 Typography

Rekomendasi:

- Heading: Playfair Display;
- UI/body: Plus Jakarta Sans / Outfit;
- fallback wajib menggunakan system font.

## 8.4 UI Principles

- hierarchy jelas;
- tombol CTA konsisten;
- radius tidak berlebihan;
- shadow lembut;
- contrast WCAG;
- mobile-first;
- tidak menggunakan animasi berlebihan;
- visual premium tetapi tetap cepat.

---


# 8A. Metadata SEO — Title & Meta Description

Setiap halaman **WAJIB memiliki metadata SEO yang unik**, relevan dengan search intent halaman, dan tidak boleh menggunakan template metadata yang sama secara massal.

## 8A.1 Aturan `<title>`

Ketentuan:

- Panjang target **maksimal 60 karakter**.
- Setiap halaman harus memiliki `<title>` yang **berbeda**.
- Title harus menggambarkan isi halaman secara spesifik.
- Keyword utama ditempatkan secara natural.
- Brand `Vendor Outbound` dapat digunakan bila masih memenuhi batas karakter.
- Hindari keyword stuffing.
- Jangan menggunakan title yang hanya berbeda karena nomor halaman.
- Jangan menggunakan title generik seperti `Home`, `Page`, atau `Detail Paket`.

### Contoh

```html
<title>Vendor Outbound Batu Malang | Vendor Outbound</title>
```

Untuk halaman layanan:

```html
<title>Team Building Perusahaan | Vendor Outbound</title>
```

Untuk artikel:

```html
<title>Manfaat Team Building untuk Perusahaan</title>
```

### Validasi

Setiap URL harus diperiksa dengan aturan:

```text
title.length <= 60
title halaman A != title halaman B
```

> **Catatan:** 60 karakter adalah batas editorial/implementasi PRD. Tampilan aktual pada hasil Google dapat terpotong berbeda tergantung perangkat dan lebar piksel.

---

## 8A.2 Aturan Meta Description

Ketentuan:

- Panjang **maksimal 120 karakter**.
- Setiap halaman harus memiliki meta description yang **berbeda**.
- Harus menjelaskan manfaat atau isi halaman.
- Mengandung keyword secara natural jika relevan.
- Harus mendorong pengguna untuk membuka halaman.
- Jangan menyalin paragraf pertama halaman.
- Jangan menggunakan satu meta description untuk seluruh halaman.
- Hindari keyword stuffing.
- Hindari klaim yang tidak dapat dibuktikan.

### Format HTML

```html
<meta
  name="description"
  content="Temukan program team building perusahaan yang dapat disesuaikan dengan tujuan, peserta, lokasi, dan kebutuhan kegiatan."
>
```

### Validasi

```text
meta_description.length <= 120
meta_description halaman A != meta_description halaman B
```

---

## 8A.3 Unique Metadata Matrix

Sebelum website launch, buat daftar metadata seluruh URL:

| URL | Primary Keyword | SEO Title | Title ≤60 | Meta Description | Meta ≤120 | Unique |
|---|---|---|---|---|---|---|
| `/` | vendor outbound | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/tentang-kami.html` | tentang Vendor Outbound | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/produk.html` | layanan outbound | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket.html` | paket outbound | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/gallery.html` | galeri outbound | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/blog.html` | artikel outbound | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/kontak.html` | kontak Vendor Outbound | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/team-building.html` | team building perusahaan | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/fun-games.html` | fun games perusahaan | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/leadership-camp.html` | leadership camp | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/corporate-gathering.html` | corporate gathering | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/paket-hemat.html` | family gathering hemat | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/paket-standard.html` | family gathering standard | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/paket-premium.html` | family gathering premium | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/paket-custom.html` | family gathering custom | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/outbound-pelajar.html` | outbound pelajar | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/character-building.html` | character building | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/ldks-leadership.html` | LDKS leadership | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/edukasi.html` | edukasi outbound | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/outbound-plus-wisata.html` | outbound wisata | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/outbound-rafting.html` | outbound rafting | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/outbound-offroad.html` | outbound offroad | wajib unik | ✓ | wajib unik | ✓ | ✓ |
| `/paket/outbound-camping.html` | outbound camping | wajib unik | ✓ | wajib unik | ✓ | ✓ |

Untuk artikel blog, metadata dibuat **satu per satu berdasarkan search intent artikel**.

---

## 8A.4 Metadata Tidak Boleh Duplikat

Dilarang:

```html
<title>Vendor Outbound | Vendor Outbound</title>
```

digunakan pada banyak halaman.

Dilarang:

```html
<meta name="description"
content="Vendor Outbound menyediakan berbagai program outbound profesional.">
```

digunakan berulang pada seluruh halaman.

Setiap halaman harus memiliki kombinasi:

```text
URL
+
Search Intent
+
Primary Keyword
+
SEO Title
+
Meta Description
```

yang spesifik.

---

## 8A.5 Template Metadata Berdasarkan Page Type

### Homepage

```text
[Primary Topic] | Vendor Outbound
```

### Service Hub

```text
[Layanan Utama] untuk [Target] | Vendor Outbound
```

### Package Detail

```text
[Nama Program] untuk [Target/Benefit] | Vendor Outbound
```

### Destination

```text
[Program] di [Lokasi] | Vendor Outbound
```

### Blog

```text
[Topik Utama / Search Intent]
```

### Contact

```text
Kontak Vendor Outbound | Konsultasi Kegiatan
```

Template hanya menjadi pola awal. **Hasil final tetap wajib unik per halaman.**

---

## 8A.6 SEO Metadata QA

Sebelum deployment, lakukan automated/manual audit untuk:

- [ ] Semua halaman memiliki `<title>`.
- [ ] Tidak ada `<title>` kosong.
- [ ] Tidak ada `<title>` duplikat.
- [ ] Semua title ≤ 60 karakter.
- [ ] Semua halaman memiliki meta description.
- [ ] Tidak ada meta description kosong.
- [ ] Tidak ada meta description duplikat.
- [ ] Semua meta description ≤ 120 karakter.
- [ ] Keyword utama relevan dengan halaman.
- [ ] Title tidak keyword stuffing.
- [ ] Meta description tidak keyword stuffing.
- [ ] Metadata sesuai isi halaman.
- [ ] Metadata tidak menggunakan klaim yang tidak terbukti.
- [ ] Artikel blog memiliki metadata unik.
- [ ] Halaman kategori dan detail paket tidak memakai metadata identik.
- [ ] Canonical URL sesuai halaman.
- [ ] Open Graph title/description tidak secara otomatis menyebabkan metadata SEO menjadi duplikat.

### Contoh automated validation

Pseudo-logic:

```javascript
for (const page of pages) {
  assert(page.title.length <= 60);
  assert(page.metaDescription.length <= 120);
}

assert(unique(titles).length === titles.length);
assert(unique(metaDescriptions).length === metaDescriptions.length);
```

---


# 8B. Clean URL Architecture — URL Profesional Tanpa `.html`

## 8B.1 Prinsip Utama Clean URL

Seluruh URL publik pada `vendoroutbound.id` WAJIB menggunakan **Clean URL** tanpa ekstensi file seperti `.html`, `.htm`, `.php`, atau ekstensi teknis lainnya.

Tujuan utama:

- URL terlihat lebih profesional.
- URL lebih mudah dibaca manusia.
- URL lebih mudah dibagikan melalui WhatsApp, email, dan media sosial.
- Struktur URL lebih konsisten untuk SEO.
- URL tidak mengekspos struktur implementasi teknis.
- Migrasi atau perubahan teknologi di masa depan lebih mudah.
- Memudahkan pengelolaan canonical URL, sitemap, dan internal linking.
- Menciptakan struktur website yang terasa seperti platform profesional, bukan kumpulan file statis.

### Aturan WAJIB

```text
BENAR
https://vendoroutbound.id/
https://vendoroutbound.id/tentang-kami/
https://vendoroutbound.id/produk/
https://vendoroutbound.id/paket/
https://vendoroutbound.id/paket/outbound-perusahaan/
https://vendoroutbound.id/blog/
https://vendoroutbound.id/blog/manfaat-team-building-untuk-perusahaan/
https://vendoroutbound.id/kontak/

SALAH
https://vendoroutbound.id/index.html
https://vendoroutbound.id/tentang-kami.html
https://vendoroutbound.id/produk.html
https://vendoroutbound.id/paket.html
https://vendoroutbound.id/blog.html
https://vendoroutbound.id/blog/manfaat-team-building.html
https://vendoroutbound.id/kontak.html
```

---

## 8B.2 Struktur URL Utama

Gunakan struktur hierarki yang pendek, jelas, dan sesuai dengan arsitektur informasi website.

```text
/
├── tentang-kami/
├── produk/
│   ├── outbound-perusahaan/
│   ├── family-gathering/
│   ├── outbound-sekolah/
│   └── outbound-wisata/
├── paket/
│   ├── outbound-perusahaan/
│   ├── family-gathering/
│   ├── outbound-sekolah/
│   └── outbound-wisata/
├── galeri/
├── blog/
├── kontak/
└── 404/
```

Jika terdapat halaman detail paket, gunakan pola:

```text
/paket/{kategori}/{slug-paket}/
```

Contoh:

```text
/paket/outbound-perusahaan/team-building/
/paket/outbound-perusahaan/fun-games/
/paket/outbound-perusahaan/leadership-camp/
/paket/outbound-perusahaan/corporate-gathering/

/paket/family-gathering/hemat/
/paket/family-gathering/standard/
/paket/family-gathering/premium/
/paket/family-gathering/custom/

/paket/outbound-sekolah/pelajar/
/paket/outbound-sekolah/character-building/
/paket/outbound-sekolah/leadership/
/paket/outbound-sekolah/edukasi/

/paket/outbound-wisata/wisata/
/paket/outbound-wisata/rafting/
/paket/outbound-wisata/offroad/
/paket/outbound-wisata/camping/
```

---

## 8B.3 Aturan Slug URL

Setiap slug harus:

1. Menggunakan huruf kecil.
2. Menggunakan bahasa yang natural dan mudah dipahami.
3. Menggunakan tanda hubung `-` sebagai pemisah kata.
4. Tidak menggunakan underscore `_`.
5. Tidak menggunakan spasi.
6. Tidak menggunakan karakter khusus.
7. Tidak menggunakan parameter yang tidak diperlukan.
8. Tidak menggunakan tanggal jika tanggal bukan bagian penting dari identitas konten.
9. Tidak menggunakan kata-kata teknis seperti `page`, `detail`, `content`, `post`, atau `index`.
10. Tidak menggunakan ekstensi `.html`.
11. Tidak menggunakan slug yang terlalu panjang.
12. Mengandung keyword utama secara natural jika memang relevan.
13. Tidak melakukan keyword stuffing.
14. Tidak berubah-ubah tanpa alasan.

### Contoh

```text
BENAR
/team-building/
/family-gathering/
/outbound-sekolah/
/corporate-gathering/
/manfaat-team-building-untuk-perusahaan/

SALAH
/team_building/
/TeamBuilding/
/team%20building/
/team-building.html
/page-team-building/
/detail-team-building/
/team-building-2026-01-01/
```

---

## 8B.4 URL Tidak Boleh Mengekspos Struktur File

Struktur folder pada server tidak boleh menjadi struktur URL publik secara otomatis.

Contoh struktur file implementasi:

```text
/pages/
    tentang-kami.html
    produk.html
    paket.html

/packages/
    outbound-perusahaan/
        team-building.html

/blog/
    manfaat-team-building.html
```

Struktur file tersebut adalah **implementasi internal**, bukan URL publik.

URL publik tetap harus:

```text
/tentang-kami/
/produk/
/paket/outbound-perusahaan/team-building/
/blog/manfaat-team-building/
```

Dengan demikian:

- file `.html` tetap boleh digunakan secara internal jika arsitektur static-site membutuhkannya;
- tetapi `.html` **tidak boleh tampil pada URL yang dilihat pengguna**;
- server, hosting, reverse proxy, atau routing layer harus menangani pemetaan Clean URL → file internal.

---

## 8B.5 Routing Clean URL

Website harus menggunakan routing yang memungkinkan request seperti:

```text
/paket/
/paket/outbound-perusahaan/
/paket/outbound-perusahaan/team-building/
/blog/
/blog/manfaat-team-building-untuk-perusahaan/
```

ditampilkan tanpa perlu menulis:

```text
/paket.html
/paket/outbound-perusahaan.html
/paket/outbound-perusahaan/team-building.html
/blog.html
/blog/manfaat-team-building-untuk-perusahaan.html
```

### Rekomendasi untuk Static HTML

Karena project menggunakan arsitektur HTML5 + CSS3 + Vanilla JavaScript, implementasi Clean URL dapat menggunakan:

- server rewrite;
- hosting rewrite rules;
- static hosting routing;
- framework/build system jika digunakan di masa depan;
- folder-based `index.html`.

Untuk hosting yang mendukung folder-based routing, pola implementasi dapat berupa:

```text
/tentang-kami/index.html
/produk/index.html
/paket/index.html
/paket/outbound-perusahaan/index.html
/paket/outbound-perusahaan/team-building/index.html
/blog/index.html
/blog/manfaat-team-building-untuk-perusahaan/index.html
/kontak/index.html
```

URL yang tampil kepada pengguna:

```text
/tentang-kami/
/produk/
/paket/
/paket/outbound-perusahaan/
/paket/outbound-perusahaan/team-building/
/blog/
/blog/manfaat-team-building-untuk-perusahaan/
/kontak/
```

**Catatan:** `index.html` merupakan file implementasi internal dan tidak boleh ditampilkan pada URL canonical/public.

---

## 8B.6 Trailing Slash

Gunakan satu standar trailing slash secara konsisten untuk seluruh halaman direktori.

Standar yang direkomendasikan:

```text
https://vendoroutbound.id/
https://vendoroutbound.id/tentang-kami/
https://vendoroutbound.id/produk/
https://vendoroutbound.id/paket/
https://vendoroutbound.id/paket/outbound-perusahaan/
https://vendoroutbound.id/blog/
https://vendoroutbound.id/kontak/
```

Hindari memiliki dua URL aktif untuk halaman yang sama:

```text
/tentang-kami
/tentang-kami/
```

Salah satu harus menjadi URL canonical utama.

Rekomendasi project:

```text
/tentang-kami/
```

sebagai format canonical.

Jika versi tanpa slash tetap diakses, redirect permanen ke versi canonical:

```text
/tentang-kami
        ↓ 301
/tentang-kami/
```

---

## 8B.7 Canonical URL

Setiap halaman indexable WAJIB memiliki canonical URL yang sesuai dengan Clean URL.

Contoh:

```html
<link
  rel="canonical"
  href="https://vendoroutbound.id/paket/outbound-perusahaan/team-building/"
>
```

Canonical tidak boleh menggunakan:

```text
https://vendoroutbound.id/paket/outbound-perusahaan/team-building.html
```

Canonical harus selalu menunjuk ke URL publik yang benar-benar dipakai pengguna.

### Aturan Canonical

- HTTPS.
- Domain utama `vendoroutbound.id`.
- Clean URL.
- Konsisten dengan trailing slash.
- Tidak menggunakan `.html`.
- Tidak menggunakan URL parameter jika parameter tidak membuat halaman unik.
- Tidak menggunakan URL redirect sebagai canonical.
- Tidak menunjuk ke halaman 404.
- Setiap halaman memiliki canonical yang relevan.

---

## 8B.8 Redirect dari URL Lama

Jika sebelumnya terdapat URL dengan `.html`, URL lama tidak boleh dibiarkan menjadi halaman aktif yang terpisah.

Contoh migrasi:

```text
/tentang-kami.html
        ↓ 301
/tentang-kami/

/produk.html
        ↓ 301
/produk/

/paket.html
        ↓ 301
/paket/

/blog.html
        ↓ 301
/blog/

/blog/manfaat-team-building.html
        ↓ 301
/blog/manfaat-team-building/
```

Gunakan **301 Permanent Redirect** untuk URL lama yang telah diganti secara permanen.

Jangan membuat redirect chain seperti:

```text
.html
  ↓
tanpa slash
  ↓
dengan slash
```

Lebih baik langsung:

```text
.html
  ↓ 301
Clean URL final
```

---

## 8B.9 Internal Linking

Semua internal link pada website WAJIB menggunakan Clean URL.

### BENAR

```html
<a href="/tentang-kami/">Tentang Kami</a>
<a href="/produk/">Produk</a>
<a href="/paket/">Paket</a>
<a href="/paket/outbound-perusahaan/team-building/">Team Building</a>
<a href="/blog/">Blog</a>
<a href="/kontak/">Kontak</a>
```

### SALAH

```html
<a href="/tentang-kami.html">Tentang Kami</a>
<a href="/produk.html">Produk</a>
<a href="/paket.html">Paket</a>
<a href="/blog.html">Blog</a>
```

Tidak boleh ada internal link yang mengarah ke URL `.html`.

---

## 8B.10 Sitemap XML

`/sitemap.xml` hanya boleh mencantumkan URL canonical Clean URL.

Contoh:

```xml
<url>
  <loc>https://vendoroutbound.id/</loc>
</url>

<url>
  <loc>https://vendoroutbound.id/tentang-kami/</loc>
</url>

<url>
  <loc>https://vendoroutbound.id/paket/</loc>
</url>

<url>
  <loc>https://vendoroutbound.id/paket/outbound-perusahaan/team-building/</loc>
</url>

<url>
  <loc>https://vendoroutbound.id/blog/manfaat-team-building-untuk-perusahaan/</loc>
</url>
```

Jangan masukkan:

```text
/index.html
/tentang-kami.html
/paket.html
/blog.html
```

---

## 8B.11 Robots.txt

`robots.txt` tidak boleh mengarahkan crawler ke URL `.html` sebagai URL utama.

Contoh:

```text
Sitemap: https://vendoroutbound.id/sitemap.xml
```

Jika ada URL teknis yang tidak perlu diindeks, pengaturan harus dilakukan secara sengaja dan tidak mengganggu crawling halaman publik.

---

## 8B.12 Open Graph dan Social Sharing

URL pada Open Graph harus menggunakan Clean URL.

Contoh:

```html
<meta
  property="og:url"
  content="https://vendoroutbound.id/paket/outbound-perusahaan/team-building/"
>
```

Jangan:

```html
<meta
  property="og:url"
  content="https://vendoroutbound.id/paket/outbound-perusahaan/team-building.html"
>
```

Dengan demikian, URL yang dibagikan melalui:

- WhatsApp;
- Facebook;
- Instagram;
- LinkedIn;
- Telegram;
- email;

tetap menggunakan URL profesional.

---

## 8B.13 URL untuk Blog

Format artikel blog harus:

```text
/blog/{slug-artikel}/
```

Contoh:

```text
/blog/manfaat-team-building-untuk-perusahaan/
/blog/cara-membangun-kekompakan-tim/
/blog/panduan-family-gathering-perusahaan/
/blog/outbound-sekolah-untuk-character-building/
```

Hindari:

```text
/blog/article-01.html
/blog/post-123.html
/blog/2026/10/07/judul-artikel.html
/blog/index.php?id=123
```

Tanggal hanya digunakan pada URL jika memang merupakan bagian penting dari arsitektur editorial. Untuk project ini, **tanggal tidak diperlukan pada slug artikel** agar URL lebih ringkas dan evergreen.

---

## 8B.14 URL untuk Paket

Gunakan struktur yang menggambarkan hubungan kategori → paket.

```text
/paket/{kategori}/{paket}/
```

Contoh:

```text
/paket/outbound-perusahaan/team-building/
/paket/outbound-perusahaan/fun-games/
/paket/outbound-perusahaan/leadership-camp/

/paket/family-gathering/hemat/
/paket/family-gathering/standard/
/paket/family-gathering/premium/

/paket/outbound-sekolah/pelajar/
/paket/outbound-sekolah/character-building/

/paket/outbound-wisata/rafting/
/paket/outbound-wisata/offroad/
/paket/outbound-wisata/camping/
```

Struktur ini membantu pengguna dan search engine memahami konteks halaman.

---

## 8B.15 URL untuk Produk/Layanan

Gunakan URL berdasarkan intent layanan, bukan berdasarkan nama file.

Contoh:

```text
/produk/
/produk/outbound-perusahaan/
/produk/family-gathering/
/produk/outbound-sekolah/
/produk/outbound-wisata/
```

Jika halaman layanan lebih spesifik dibutuhkan:

```text
/produk/outbound-perusahaan/team-building/
/produk/outbound-perusahaan/leadership/
/produk/outbound-sekolah/character-building/
```

Jangan mencampur pola URL tanpa alasan, misalnya:

```text
/produk/team-building.html
/layanan-family-gathering.html
/service/outbound.php
```

---

## 8B.16 Parameter URL

Parameter URL hanya boleh digunakan jika benar-benar diperlukan oleh fungsi website.

Hindari URL seperti:

```text
/paket/?id=123
/blog/?post=45
/produk/?category=outbound
```

Untuk halaman konten yang dapat diindeks, gunakan path Clean URL:

```text
/paket/outbound-perusahaan/team-building/
/blog/manfaat-team-building-untuk-perusahaan/
/produk/outbound-perusahaan/
```

Parameter yang digunakan untuk tracking seperti UTM tidak boleh menghasilkan canonical yang berbeda.

Contoh:

```text
/blog/manfaat-team-building-untuk-perusahaan/?utm_source=whatsapp
```

Canonical tetap:

```text
https://vendoroutbound.id/blog/manfaat-team-building-untuk-perusahaan/
```

---

## 8B.17 Aturan URL untuk CTA WhatsApp

CTA WhatsApp bukan halaman internal website, sehingga tidak perlu dipaksakan menjadi Clean URL website.

Gunakan:

```text
https://wa.me/6282211221909
```

dengan parameter pesan yang sesuai jika diperlukan.

Contoh CTA:

```text
https://wa.me/6282211221909?text=Halo%20Vendor%20Outbound%2C%20saya%20ingin%20berkonsultasi
```

Namun, URL WhatsApp hanya digunakan untuk CTA eksternal dan **tidak dimasukkan sebagai URL halaman website dalam sitemap**.

---

## 8B.18 URL 404

Halaman 404 menggunakan:

```text
/404/
```

Namun, halaman 404 harus dikirim dengan HTTP status:

```text
404 Not Found
```

Bukan:

```text
200 OK
```

URL yang tidak ditemukan tidak boleh diarahkan secara otomatis ke homepage hanya untuk menghindari 404.

Contoh:

```text
/paket/tidak-ditemukan/
        ↓
HTTP 404
        ↓
Halaman 404 yang membantu pengguna
```

Halaman 404 harus menyediakan:

- tombol kembali ke Beranda;
- link ke Paket;
- link ke Produk;
- link ke Blog;
- CTA WhatsApp.

---

## 8B.19 URL dan Breadcrumb

Breadcrumb harus mengikuti struktur URL.

Contoh:

```text
Beranda
└── Paket
    └── Outbound Perusahaan
        └── Team Building
```

URL:

```text
/
└── /paket/
    └── /paket/outbound-perusahaan/
        └── /paket/outbound-perusahaan/team-building/
```

Breadcrumb tidak boleh menunjukkan hierarki yang berbeda dari struktur URL kecuali terdapat alasan UX/SEO yang jelas.

---

## 8B.20 JSON-LD dan URL

Semua structured data yang membutuhkan properti `url` harus menggunakan Clean URL.

Contoh:

```json
{
  "@type": "WebPage",
  "@id": "https://vendoroutbound.id/paket/outbound-perusahaan/team-building/",
  "url": "https://vendoroutbound.id/paket/outbound-perusahaan/team-building/"
}
```

Untuk breadcrumb:

```json
{
  "@type": "ListItem",
  "position": 3,
  "name": "Team Building",
  "item": "https://vendoroutbound.id/paket/outbound-perusahaan/team-building/"
}
```

Tidak boleh menggunakan URL `.html` pada JSON-LD.

---

## 8B.21 URL Governance

Setiap pembuatan halaman baru harus melalui aturan berikut:

```text
1. Tentukan search intent.
2. Tentukan kategori halaman.
3. Tentukan slug utama.
4. Pastikan slug lowercase.
5. Pastikan menggunakan hyphen.
6. Pastikan tidak ada .html.
7. Pastikan tidak ada parameter yang tidak diperlukan.
8. Pastikan tidak bentrok dengan URL lain.
9. Buat canonical Clean URL.
10. Tambahkan internal link.
11. Tambahkan ke sitemap jika indexable.
12. Periksa redirect.
13. Periksa status HTTP.
14. Periksa breadcrumb.
15. Periksa JSON-LD.
16. Periksa Open Graph.
```

---

## 8B.22 URL Migration Checklist

Setiap perubahan URL harus melewati checklist:

- [ ] URL lama teridentifikasi.
- [ ] URL baru menggunakan Clean URL.
- [ ] URL baru tidak mengandung `.html`.
- [ ] URL baru menggunakan lowercase.
- [ ] URL baru menggunakan hyphen.
- [ ] URL baru memiliki struktur hierarki yang benar.
- [ ] 301 redirect dibuat jika URL lama sudah pernah dipublikasikan.
- [ ] Tidak ada redirect chain.
- [ ] Canonical diperbarui.
- [ ] Internal link diperbarui.
- [ ] Sitemap diperbarui.
- [ ] Breadcrumb diperbarui.
- [ ] JSON-LD diperbarui.
- [ ] Open Graph URL diperbarui.
- [ ] CTA/share link diperiksa.
- [ ] HTTP status diverifikasi.
- [ ] Tidak ada broken link.

---

## 8B.23 Clean URL QA

Sebelum website dianggap selesai, lakukan pemeriksaan:

```text
[ ] Homepage menggunakan /
[ ] Tidak ada index.html pada URL publik
[ ] Tidak ada .html pada URL publik
[ ] Tidak ada .php pada URL publik
[ ] Semua URL menggunakan lowercase
[ ] Semua slug menggunakan hyphen
[ ] Tidak ada underscore
[ ] Tidak ada spasi/encoded space
[ ] Tidak ada duplicate URL
[ ] Trailing slash konsisten
[ ] Canonical menggunakan Clean URL
[ ] Sitemap hanya menggunakan Clean URL
[ ] Internal link hanya menggunakan Clean URL
[ ] Breadcrumb sesuai URL
[ ] JSON-LD menggunakan Clean URL
[ ] Open Graph menggunakan Clean URL
[ ] URL lama memiliki 301 jika diperlukan
[ ] Tidak ada redirect chain
[ ] Halaman 404 mengembalikan HTTP 404
[ ] Tidak ada soft 404
[ ] URL final dapat diakses langsung
```

---

## 8B.24 Standar URL Final Vendor Outbound

Standar URL final project:

| Halaman | URL |
|---|---|
| Beranda | `/` |
| Tentang Kami | `/tentang-kami/` |
| Produk | `/produk/` |
| Produk Outbound Perusahaan | `/produk/outbound-perusahaan/` |
| Produk Family Gathering | `/produk/family-gathering/` |
| Produk Outbound Sekolah | `/produk/outbound-sekolah/` |
| Produk Outbound Wisata | `/produk/outbound-wisata/` |
| Paket | `/paket/` |
| Paket Outbound Perusahaan | `/paket/outbound-perusahaan/` |
| Team Building | `/paket/outbound-perusahaan/team-building/` |
| Fun Games | `/paket/outbound-perusahaan/fun-games/` |
| Leadership Camp | `/paket/outbound-perusahaan/leadership-camp/` |
| Corporate Gathering | `/paket/outbound-perusahaan/corporate-gathering/` |
| Family Gathering | `/paket/family-gathering/` |
| Hemat | `/paket/family-gathering/hemat/` |
| Standard | `/paket/family-gathering/standard/` |
| Premium | `/paket/family-gathering/premium/` |
| Custom | `/paket/family-gathering/custom/` |
| Outbound Sekolah | `/paket/outbound-sekolah/` |
| Pelajar | `/paket/outbound-sekolah/pelajar/` |
| Character Building | `/paket/outbound-sekolah/character-building/` |
| Leadership | `/paket/outbound-sekolah/leadership/` |
| Edukasi | `/paket/outbound-sekolah/edukasi/` |
| Outbound Wisata | `/paket/outbound-wisata/` |
| Wisata | `/paket/outbound-wisata/wisata/` |
| Rafting | `/paket/outbound-wisata/rafting/` |
| Offroad | `/paket/outbound-wisata/offroad/` |
| Camping | `/paket/outbound-wisata/camping/` |
| Galeri | `/galeri/` |
| Blog | `/blog/` |
| Artikel | `/blog/{slug-artikel}/` |
| Kontak | `/kontak/` |
| 404 | `/404/` |

**Keputusan arsitektur:** seluruh URL publik `vendoroutbound.id` harus terlihat seperti URL website profesional dan tidak boleh memperlihatkan ekstensi file implementasi.

---


> **URL Standard:** Seluruh aturan SEO, AEO, GEO, internal linking, canonical, sitemap, Open Graph, breadcrumb, dan structured data dalam PRD ini wajib mengikuti **Clean URL Architecture** pada Section 8B. URL publik tidak boleh menggunakan `.html`.

# 9. Global Header / Navbar

## Desktop

Menu:

1. Beranda
2. Tentang Kami
3. Layanan
4. Paket
5. Destinasi
6. Galeri
7. Blog
8. Kontak

CTA:

> **Konsultasi via WhatsApp**

### Mega Menu

Kolom 1 — Perusahaan:

- Team Building
- Fun Games
- Leadership Camp
- Corporate Gathering

Kolom 2 — Family:

- Paket Hemat
- Paket Standard
- Paket Premium
- Paket Custom

Kolom 3 — Sekolah:

- Outbound Pelajar
- Character Building
- LDKS Leadership
- Edukasi

Kolom 4 — Adventure:

- Outbound Wisata
- Rafting
- Offroad
- Camping

## Mobile

- hamburger;
- drawer navigation;
- accordion submenu;
- CTA WhatsApp sticky;
- body scroll lock ketika drawer terbuka;
- tombol close yang mudah dijangkau.

---

# 10. Homepage — `index.html`

Homepage menjadi halaman utama untuk **trust + discovery + conversion**.

## Section 01 — Hero

### Eyebrow

`VENDOR OUTBOUND • TEAM BUILDING • GATHERING • ADVENTURE`

### H1

> **Vendor Outbound untuk Kegiatan Perusahaan, Sekolah, Keluarga & Komunitas**

### Supporting copy

Menjelaskan secara singkat layanan, pendekatan, dan area kegiatan tanpa klaim berlebihan.

### CTA

- Jelajahi Program
- Konsultasi WhatsApp

### Hero visual

- panorama kegiatan/outdoor;
- WebP/AVIF jika didukung;
- responsive image;
- `width` dan `height` wajib;
- `fetchpriority="high"` hanya untuk LCP image;
- tidak menggunakan video background berat.

---

# 11. Homepage — Activity Planner

Buat widget:

> **Rencanakan Kegiatan Anda**

## Tab

- Perusahaan
- Gathering
- Sekolah
- Wisata

## Input

- jenis kegiatan;
- perkiraan jumlah peserta;
- lokasi/destinasi;
- tanggal;
- kebutuhan khusus.

## Output

Sistem membuat draft WhatsApp otomatis.

Contoh:

```text
Halo Vendor Outbound,

Saya ingin berkonsultasi mengenai:
Jenis kegiatan: Corporate Gathering
Jumlah peserta: 80 orang
Lokasi: Batu
Tanggal: [tanggal]

Mohon informasi mengenai pilihan program yang sesuai.
Terima kasih.
```

### Prinsip UX

- maksimal 4–5 input utama;
- dapat digunakan tanpa login;
- tidak menyimpan data sensitif;
- error message jelas;
- mobile friendly.

---

# 12. Homepage — Trust & Value Proposition

Gunakan **trust signals yang benar-benar dapat diverifikasi**.

Contoh:

- Program dapat disesuaikan;
- Konsultasi kebutuhan;
- Dokumentasi kegiatan;
- SOP kegiatan;
- Tim/fasilitator sesuai ketersediaan;
- Pilihan lokasi fleksibel.

> Jangan menampilkan angka seperti `500+ event`, `15K+ peserta`, `4.9 rating`, `99% kepuasan`, atau sertifikasi apabila data tersebut belum diverifikasi.

---

# 13. Homepage — Filosofi Experiential Learning

Jelaskan:

### 1. Learning by Doing

Peserta belajar melalui pengalaman langsung.

### 2. Guided Reflection

Peserta diajak memahami pengalaman yang baru dilakukan.

### 3. Application

Pembelajaran dihubungkan dengan kebutuhan nyata di sekolah, organisasi, maupun perusahaan.

### 4. Sustainable Impact

Program diarahkan agar insight kegiatan dapat diterapkan setelah kegiatan selesai.

---

# 14. Homepage — Program Utama

Empat pilar utama:

## 01 — Outbound Perusahaan

Fokus:

- team building;
- communication;
- leadership;
- collaboration;
- corporate gathering.

## 02 — Family Gathering

Fokus:

- fun;
- kebersamaan;
- rekreasi;
- family bonding.

## 03 — Outbound Sekolah

Fokus:

- character building;
- leadership;
- LDKS;
- edukasi alam.

## 04 — Outbound Wisata & Adventure

Fokus:

- wisata;
- rafting;
- offroad;
- camping;
- adventure.

---

# 15. Homepage — Why Choose Us

Gunakan 4–6 kartu:

1. **Goal Oriented**
2. **Flexible Program**
3. **Safety First**
4. **Experienced Team**
5. **Transparent Communication**
6. **End-to-End Coordination**

Semua klaim harus disesuaikan dengan kondisi bisnis nyata.

---

# 16. Homepage — Gallery

Konsep:

> **Editorial Bento Gallery**

Layout:

```text
┌─────────────────────┬─────────────┐
│                     │             │
│     HERO IMAGE      │   IMAGE 02  │
│                     │             │
├──────────┬──────────┼─────────────┤
│ IMAGE 03 │ IMAGE 04 │   IMAGE 05  │
└──────────┴──────────┴─────────────┘
```

Fitur:

- filter kategori;
- lightbox;
- keyboard navigation;
- touch swipe;
- zoom;
- lazy loading;
- caption;
- alt text.

---

# 17. Homepage — Blog

Tampilkan 3 artikel terbaru berdasarkan:

- Awareness;
- Consideration;
- Commercial.

Card:

- image;
- category;
- title;
- excerpt;
- author;
- tanggal;
- estimated reading time.

---

# 18. Homepage — FAQ

Pertanyaan utama:

- Apa itu outbound?
- Apa yang perlu disiapkan?
- Apakah program dapat disesuaikan?
- Apakah bisa untuk perusahaan?
- Apakah bisa untuk sekolah?
- Apakah bisa family gathering?
- Bagaimana menentukan lokasi?
- Bagaimana proses konsultasinya?

Gunakan accordion accessible dengan:

- button semantics;
- `aria-expanded`;
- `aria-controls`;
- keyboard support.

---

# 19. Homepage — Final CTA

Headline:

> **Sudah punya gambaran kegiatannya? Mari kita susun program yang sesuai.**

CTA:

> **Konsultasi via WhatsApp**

Secondary:

> **Lihat Semua Program**

---

# 20. Halaman Tentang Kami — `tentang-kami.html`

Tujuan: membangun **entity trust dan E-E-A-T**.

## Struktur

1. Breadcrumb
2. Hero
3. Profil Vendor Outbound
4. Filosofi
5. Visi
6. Misi
7. Nilai kerja
8. Cara kerja
9. Safety & operational approach
10. CTA

### Visi

Visi harus menggunakan pernyataan bisnis yang benar-benar disepakati internal.

### Misi

Minimal menjelaskan:

- kualitas program;
- relevansi kebutuhan peserta;
- keselamatan;
- koordinasi;
- pengalaman peserta.

---

# 21. Halaman Layanan — `produk.html`

Hub seluruh layanan.

## Service Cards

### Corporate

- Team Building
- Fun Games
- Leadership Camp
- Corporate Gathering

### Family

- Family Gathering
- Paket Hemat
- Paket Standard
- Paket Premium
- Paket Custom

### School

- Outbound Pelajar
- Character Building
- LDKS Leadership
- Edukasi

### Adventure

- Outbound Wisata
- Rafting
- Offroad
- Camping

Tambahkan:

- siapa yang cocok;
- tujuan;
- contoh aktivitas;
- CTA;
- internal links.

---

# 22. Halaman Paket — `paket.html`

Berfungsi sebagai **commercial catalog hub**.

## Struktur

1. Hero
2. Filter kategori
3. 4 kategori utama
4. daftar sub-program
5. tabel perbandingan
6. panduan memilih program
7. FAQ
8. CTA WhatsApp

### Catatan Harga

Website **tidak wajib menampilkan harga publik** apabila model bisnis memerlukan konsultasi terlebih dahulu.

Jika harga belum final:

> `Konsultasikan kebutuhan kegiatan untuk mendapatkan rekomendasi program dan penawaran.`

Jangan menampilkan harga fiktif.

---

# 23. Detail Paket — `paket/*.html`

Setiap halaman detail mengikuti template konsisten.

## Above the Fold

- breadcrumb;
- badge kategori;
- H1;
- short answer;
- hero image;
- CTA;
- trust/value points.

## Interactive Gallery

- main image;
- 4–5 thumbnails;
- prev/next;
- caption;
- lightbox.

## Package Configurator

Pilihan:

- durasi;
- jumlah peserta;
- lokasi;
- kebutuhan kegiatan.

Output:

> ringkasan kebutuhan + WhatsApp CTA.

## Tab Content

### Tab 1 — Sasaran & Metodologi

Jelaskan tujuan program dan metode.

### Tab 2 — Modul & Aktivitas

Contoh:

- ice breaking;
- trust building;
- problem solving;
- teamwork;
- communication;
- synergy project.

### Tab 3 — Fasilitas

Pisahkan:

- Included;
- Optional;
- Excluded.

### Tab 4 — Contoh Rundown

Berikan contoh alur kegiatan, bukan janji jadwal final.

---

# 24. Daftar Detail Paket

## Outbound Perusahaan

- `/paket/team-building.html`
- `/paket/fun-games.html`
- `/paket/leadership-camp.html`
- `/paket/corporate-gathering.html`

## Family Gathering

- `/paket/paket-hemat.html`
- `/paket/paket-standard.html`
- `/paket/paket-premium.html`
- `/paket/paket-custom.html`

## Outbound Sekolah

- `/paket/outbound-pelajar.html`
- `/paket/character-building.html`
- `/paket/ldks-leadership.html`
- `/paket/edukasi.html`

## Outbound Wisata & Adventure

- `/paket/outbound-plus-wisata.html`
- `/paket/outbound-rafting.html`
- `/paket/outbound-offroad.html`
- `/paket/outbound-camping.html`

---

# 25. Gallery — `gallery.html`

## Filter

- Semua
- Perusahaan
- Sekolah
- Family Gathering
- Wisata
- Adventure
- Destinasi

## Metadata Foto

Setiap foto memiliki:

- descriptive filename;
- alt text;
- caption;
- category;
- location jika relevan;
- loading strategy.

Contoh:

```text
outbound-team-building-batu-malang.webp
```

---

# 26. Blog Hub — `blog.html`

Blog menjadi mesin **topical authority**.

## Content Funnel

### TOFU — Awareness

Contoh:

- Apa itu outbound?
- Manfaat team building;
- Manfaat kegiatan outdoor;
- Outbound vs gathering.

### MOFU — Consideration

Contoh:

- Cara memilih vendor outbound;
- Cara menentukan lokasi;
- Cara menyusun rundown;
- Tips memilih program sekolah.

### BOFU — Commercial

Contoh:

- Vendor outbound Batu;
- Outbound perusahaan Malang;
- Paket family gathering;
- Outbound sekolah Malang;
- Outbound rafting Jawa Timur.

---

# 27. Template Artikel Blog

Setiap artikel:

1. Breadcrumb
2. Category
3. H1
4. Author
5. Published date
6. Updated date jika ada
7. Reading time
8. Featured image
9. Executive summary
10. Answer-first box
11. TOC
12. Main content
13. Comparison/table jika relevan
14. Internal links
15. FAQ
16. Author bio
17. Related articles
18. WhatsApp CTA

## Answer-First

Target sekitar **40–80 kata**, langsung menjawab intent pencarian.

Jangan membuat jawaban hanya untuk mesin pencari. Jawaban harus tetap natural dan berguna bagi pembaca.

---

# 28. SEO, AEO & GEO

## Technical SEO

Setiap halaman wajib memiliki:

- unique `<title>`;
- meta description;
- canonical;
- H1 tunggal;
- heading hierarchy;
- semantic HTML;
- descriptive URL;
- alt image;
- internal links;
- breadcrumb;
- Open Graph;
- Twitter/X metadata;
- sitemap;
- robots;
- favicon.

## AEO

Gunakan:

- answer-first content;
- definisi langsung;
- FAQ;
- tabel;
- list;
- comparison;
- clear headings;
- concise paragraphs.

## GEO / AI Search

Bangun entity consistency:

```text
Brand: Vendor Outbound
Domain: vendoroutbound.id
Primary contact: +62 822-1122-1909
```

Gunakan informasi yang konsisten pada:

- website;
- metadata;
- JSON-LD;
- footer;
- contact page;
- about page;
- social profiles bila tersedia.

---

# 29. Structured Data / JSON-LD

Gunakan schema hanya apabila sesuai dengan konten nyata.

## Homepage

- `WebSite`
- `Organization`
- `ProfessionalService`
- `BreadcrumbList`
- `FAQPage` jika FAQ terlihat pada halaman

## About

- `AboutPage`
- `Organization`
- `BreadcrumbList`

## Service

- `Service`
- `BreadcrumbList`
- `FAQPage` bila sesuai

## Package

- `Service`
- `CollectionPage`
- `ItemList`
- `BreadcrumbList`

## Gallery

- `CollectionPage`
- `ImageGallery`
- `BreadcrumbList`

## Blog

- `Blog`
- `CollectionPage`
- `BreadcrumbList`

## Article

- `Article` / `BlogPosting`
- `BreadcrumbList`
- `FAQPage` bila FAQ benar-benar tersedia

## Contact

- `ContactPage`
- `ProfessionalService`
- `BreadcrumbList`

> Jangan menggunakan review/rating schema atau atribut bisnis yang tidak benar-benar tersedia.

---

# 30. Internal Linking Strategy

Setiap halaman harus memiliki hubungan kontekstual.

Contoh:

```text
Artikel
  ↓
Layanan
  ↓
Kategori
  ↓
Detail Paket
  ↓
Gallery
  ↓
Contact
```

### Anchor text

Gunakan anchor deskriptif:

- `vendor outbound perusahaan`;
- `program team building`;
- `outbound sekolah`;
- `family gathering`;
- `outbound rafting`;
- `konsultasi outbound`.

Hindari penggunaan anchor `klik di sini` secara berlebihan.

---

# 31. WhatsApp Lead System

Nomor utama:

```text
+62 822-1122-1909
```

URL:

```text
https://wa.me/6282211221909
```

## CTA Placement

- navbar;
- hero;
- activity planner;
- setiap service card;
- setiap detail package;
- FAQ;
- final CTA;
- footer;
- floating button.

## Dynamic Message

Parameter:

```text
jenis kegiatan
jumlah peserta
lokasi
tanggal
program
catatan
```

Semua parameter harus di-URL encode.

---

# 32. Interactive Features

## 32.1 Package Configurator

Input:

- duration;
- participant count;
- destination;
- program.

Output:

- dynamic summary;
- WhatsApp message.

## 32.2 Gallery Lightbox

Support:

- next;
- previous;
- close;
- zoom;
- swipe;
- keyboard;
- thumbnail navigation.

## 32.3 Gallery Filter

Tanpa page reload.

## 32.4 Testimonials

Jika testimoni tersedia:

- tampilkan sumber/nama secara jelas;
- jangan membuat testimoni fiktif;
- jangan menambahkan rating palsu.

## 32.5 Back to Top

Muncul setelah scroll tertentu.

## 32.6 Scroll Reveal

Gunakan `IntersectionObserver`.

Wajib mendukung:

```css
@media (prefers-reduced-motion: reduce) {
  /* disable non-essential animation */
}
```

---

# 33. Performance / Core Web Vitals

Target implementasi:

- LCP cepat;
- CLS rendah;
- INP responsif;
- mobile-first;
- minim JavaScript;
- minim third-party scripts.

## Image Optimization

Wajib:

- WebP sebagai default;
- AVIF sebagai enhancement bila tersedia;
- responsive `srcset`;
- `sizes`;
- lazy loading untuk image non-critical;
- preload hanya untuk asset penting;
- fixed dimensions;
- compression.

## JavaScript

- vanilla JS;
- defer;
- modular;
- tidak memblokir rendering;
- hindari library besar;
- tidak menjalankan script yang tidak dibutuhkan.

## CSS

- satu master stylesheet dapat digunakan;
- gunakan CSS variables;
- remove unused CSS;
- minify production;
- hindari dependency CSS framework berat.

---

# 34. Accessibility

Target:

> **WCAG 2.2 AA sebagai standar implementasi.**

Checklist:

- semantic HTML;
- keyboard navigation;
- visible focus state;
- contrast cukup;
- alt text;
- aria hanya jika diperlukan;
- form label;
- error state;
- skip link;
- reduced motion;
- button bukan `<div>`;
- link bukan `<button>` jika navigasi.

---

# 35. Responsive Breakpoints

Minimum:

```text
Mobile: 320–767px
Tablet: 768–1023px
Desktop: 1024–1439px
Large Desktop: 1440px+
```

Prioritas:

1. Mobile
2. Tablet
3. Desktop

Semua komponen wajib diuji pada:

- 320px;
- 375px;
- 390px;
- 414px;
- 768px;
- 1024px;
- 1280px;
- 1440px.

---

# 36. Security & Privacy

Karena website bersifat static:

- jangan menyimpan password user;
- jangan menyimpan data inquiry secara client-side tanpa kebutuhan;
- jangan expose API key;
- sanitasi input;
- gunakan HTTPS;
- gunakan security headers bila hosting mendukung;
- hindari third-party script yang tidak diperlukan.

Form hanya boleh meminta data yang benar-benar diperlukan.

---

# 37. Analytics

Integrasikan secara ringan dan privacy-conscious.

Event yang direkomendasikan:

```text
whatsapp_click
package_view
package_config_change
planner_submit
gallery_open
article_view
internal_link_click
contact_view
```

Jika menggunakan analytics pihak ketiga, pastikan implementasinya tidak merusak Core Web Vitals.

---

# 38. SEO URL Rules

Gunakan:

```text
/vendoroutbound.id/
vendoroutbound.id/paket/
vendoroutbound.id/paket/team-building.html
vendoroutbound.id/blog/manfaat-team-building.html
```

Jangan:

```text
/blog/article?id=123
/blog/post-17
/paket/produk1
```

Slug:

- lowercase;
- hyphen;
- keyword natural;
- tidak berlebihan;
- tidak memasukkan tanggal kecuali memang diperlukan.

---

# 39. Sitemap

`sitemap.xml` harus:

- hanya memuat URL canonical;
- menghapus URL 404;
- menghindari duplicate URL;
- diperbarui saat halaman baru diterbitkan;
- menggunakan absolute URL `https://vendoroutbound.id/...`.

---

# 40. Robots.txt

Minimal:

```text
User-agent: *
Allow: /

Sitemap: https://vendoroutbound.id/sitemap.xml
```

Jangan memblokir asset penting seperti CSS atau JavaScript.

---

# 41. Footer

Footer multi-column:

## Brand

- logo;
- positioning;
- short description.

## Layanan

- Outbound Perusahaan
- Family Gathering
- Outbound Sekolah
- Outbound Wisata

## Program

- Team Building
- Leadership Camp
- Rafting
- Offroad
- Camping

## Informasi

- Tentang Kami
- Galeri
- Blog
- FAQ
- Kontak

## Contact

- WhatsApp;
- social media yang benar-benar tersedia.

Copyright:

```text
© 2026 Vendor Outbound. All rights reserved.
```

---

# 42. Floating Actions

## WhatsApp

Posisi:

`bottom-right`

Fungsi:

- direct WhatsApp;
- tooltip;
- accessible label.

## Back to Top

Posisi:

`bottom-right` di atas tombol WhatsApp atau menggunakan layout yang tidak bertabrakan.

Jangan membuat floating buttons menutupi konten pada layar kecil.

---

# 43. 404 Page

Isi:

> **Halaman yang Anda cari tidak ditemukan.**

CTA:

- Kembali ke Beranda;
- Lihat Paket;
- Konsultasi WhatsApp.

Tambahkan rekomendasi:

- Team Building;
- Family Gathering;
- Outbound Sekolah;
- Adventure.

---

# 44. Content Governance

Setiap konten harus melewati checklist:

- faktual;
- relevan;
- tidak misleading;
- tidak keyword stuffing;
- memiliki sumber bila menyebut data eksternal;
- tidak membuat testimonial fiktif;
- tidak membuat sertifikasi fiktif;
- tidak membuat angka pencapaian fiktif;
- memiliki internal link;
- memiliki CTA yang relevan.

---

# 45. Editorial Author

Artikel dapat menggunakan author editorial yang benar-benar ditunjuk oleh bisnis.

Format:

```text
Nama Penulis
Role / Editorial
Published: DD Month YYYY
Updated: DD Month YYYY
Reading time: X min
```

Jangan menggunakan badge `Verified` kecuali memang ada mekanisme verifikasi yang jelas.

---

# 46. Image Guidelines

Semua gambar utama website harus:

- profesional;
- relevan dengan program;
- tidak generik;
- memiliki komposisi premium;
- tidak menampilkan watermark pihak lain;
- memiliki lisensi yang sah;
- dioptimalkan untuk web.

## Hero

Rasio:

```text
16:9
```

## Supporting image

```text
4:3 / 3:2 / 1:1
```

sesuai layout.

## Tidak boleh

- gambar pecah;
- gambar terlalu berat;
- stock photo yang tidak relevan;
- gambar dengan teks kecil yang sulit dibaca;
- gambar tanpa alt text.

---

# 47. Microcopy CTA

Contoh:

### Hero

`Jelajahi Program`

### Detail Paket

`Konsultasikan Program`

### Planner

`Kirim Kebutuhan via WhatsApp`

### Contact

`Mulai Konsultasi`

### Article

`Butuh Bantuan Memilih Program?`

---

# 48. Aturan Harga

Jika harga tidak ingin dipublikasikan:

- jangan membuat angka estimasi;
- jangan membuat harga dummy;
- jangan menggunakan kata "mulai Rp..." tanpa data resmi.

Gunakan:

> **Harga dan penawaran disesuaikan dengan jenis kegiatan, jumlah peserta, lokasi, durasi, fasilitas, dan kebutuhan program.**

---

# 49. Quality Assurance

## Functional QA

- semua link bekerja;
- semua CTA WhatsApp benar;
- form planner menghasilkan pesan benar;
- gallery bekerja;
- filter bekerja;
- mobile menu bekerja;
- accordion bekerja;
- share buttons bekerja;
- 404 bekerja.

## SEO QA

- title unik;
- description unik;
- canonical;
- H1;
- schema valid;
- sitemap;
- robots;
- internal links;
- image alt;
- OG metadata.

## Performance QA

Test:

- Lighthouse;
- PageSpeed Insights;
- Chrome DevTools;
- mobile throttling.

## Accessibility QA

Test:

- keyboard;
- screen reader basic;
- contrast;
- focus state;
- reduced motion.

---

# 50. Definition of Done

Website dianggap siap launch jika:

### Design

- [ ] desktop polished;
- [ ] tablet polished;
- [ ] mobile polished;
- [ ] typography konsisten;
- [ ] spacing konsisten;
- [ ] CTA jelas.

### Development

- [ ] HTML semantic;
- [ ] CSS production-ready;
- [ ] JS vanilla;
- [ ] no console errors;
- [ ] no broken links.

### SEO

- [ ] metadata lengkap;
- [ ] canonical;
- [ ] sitemap;
- [ ] robots;
- [ ] JSON-LD;
- [ ] internal linking;
- [ ] breadcrumb.

### Performance

- [ ] image optimized;
- [ ] CSS optimized;
- [ ] JS deferred;
- [ ] no unnecessary third-party script;
- [ ] Core Web Vitals diperiksa.

### Conversion

- [ ] WhatsApp CTA aktif;
- [ ] dynamic WhatsApp message;
- [ ] planner aktif;
- [ ] package CTA;
- [ ] contact page.

### Content

- [ ] no fabricated claims;
- [ ] no fake reviews;
- [ ] no fake certifications;
- [ ] no unsupported statistics;
- [ ] copywriting consistent.

---

# 51. Recommended Technical Stack

```text
HTML5
CSS3
Vanilla JavaScript
SVG
WebP / AVIF
JSON-LD
XML Sitemap
robots.txt
```

Tidak menggunakan:

```text
React
Vue
Angular
Next.js
Bootstrap
Tailwind
jQuery
UI framework berat
```

kecuali ada kebutuhan teknis yang benar-benar justified.

---

# 52. Recommended Architecture

```text
                    ┌─────────────────────┐
                    │    HOMEPAGE         │
                    │  Discovery + Lead   │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
        LAYANAN             PAKET              BLOG
             │                 │                 │
             ▼                 ▼                 ▼
        KATEGORI          DETAIL PROGRAM     ARTIKEL
             │                 │                 │
             └─────────────────┼─────────────────┘
                               ▼
                       GALLERY / TRUST
                               │
                               ▼
                         CONTACT / WA
                               │
                               ▼
                            LEAD
```

---

# 53. Conversion Architecture

Setiap halaman harus menjawab 5 pertanyaan:

1. **Apa layanan ini?**
2. **Untuk siapa?**
3. **Apa manfaatnya?**
4. **Bagaimana bentuk kegiatannya?**
5. **Bagaimana cara konsultasi?**

Jika pengunjung belum siap membeli, arahkan ke:

- artikel;
- FAQ;
- galeri;
- halaman program terkait.

Jika sudah siap:

> **WhatsApp CTA**

---

# 54. SEO Content Cluster

## Cluster A — Outbound

- apa itu outbound;
- manfaat outbound;
- jenis outbound;
- outbound untuk perusahaan;
- outbound sekolah;
- outbound keluarga.

## Cluster B — Team Building

- manfaat team building;
- team building vs fun games;
- contoh team building;
- cara membuat team building;
- aktivitas team building.

## Cluster C — Corporate Gathering

- corporate gathering;
- ide gathering perusahaan;
- rundown gathering;
- tips memilih vendor;
- budget planning.

## Cluster D — School

- outbound pelajar;
- character building;
- LDKS;
- leadership siswa;
- edukasi outdoor.

## Cluster E — Adventure

- rafting;
- offroad;
- camping;
- outbound wisata;
- adventure Jawa Timur.

---

# 55. Entity Consistency

Gunakan identitas yang konsisten:

```text
Vendor Outbound
vendoroutbound.id
+62 822-1122-1909
```

Hindari variasi brand yang membingungkan seperti:

```text
Vendor Outbound Indonesia
Seven Star Vendor
Vendor Outbound Malang
Vendor Outbound Batu
```

sebagai nama entitas utama, kecuali memang merupakan nama resmi yang digunakan bisnis.

---

# 56. Brand Voice

Karakter komunikasi:

- profesional;
- ramah;
- meyakinkan;
- tidak berlebihan;
- edukatif;
- praktis;
- human;
- conversion-oriented.

Hindari:

- "nomor 1";
- "paling terbaik";
- "termurah";
- "100% dijamin sukses";
- klaim absolut tanpa bukti.

Gunakan:

- "dapat disesuaikan";
- "dirancang berdasarkan kebutuhan";
- "konsultasikan";
- "pilihan program";
- "sesuai kondisi kegiatan".

---

# 57. Contact Protocol

## WhatsApp

**+62 822-1122-1909**

Default message:

```text
Halo Vendor Outbound,

Saya ingin berkonsultasi mengenai kebutuhan kegiatan outbound.

Jenis kegiatan:
Jumlah peserta:
Lokasi:
Tanggal:
Kebutuhan/program:

Mohon rekomendasi program yang sesuai.
Terima kasih.
```

> Jam layanan dan SLA respons harus mengikuti kebijakan bisnis yang sebenarnya. Jangan menjanjikan respons 24 jam jika belum dipastikan.

---

# 58. Social Proof Policy

Social proof hanya boleh berasal dari:

- testimoni nyata;
- dokumentasi nyata;
- logo klien dengan izin;
- case study yang dapat diverifikasi;
- angka yang memiliki sumber internal.

Tidak boleh:

- membuat nama perusahaan fiktif;
- membuat rating fiktif;
- membuat jumlah event fiktif;
- membuat sertifikat fiktif;
- membuat review AI/fiktif.

---

# 59. Future Enhancement

Tahap lanjutan dapat mencakup:

1. CMS/headless content workflow;
2. dashboard lead;
3. CRM;
4. quotation generator;
5. downloadable proposal;
6. event inquiry database;
7. availability checker;
8. customer portal;
9. online booking;
10. automated follow-up;
11. advanced analytics.

Fitur tersebut **tidak wajib pada MVP**.

---

# 60. MVP Scope

## Prioritas P0

- Homepage;
- Tentang Kami;
- Layanan;
- Paket;
- Detail Paket;
- Gallery;
- Blog;
- Contact;
- 404;
- WhatsApp CTA;
- responsive design;
- technical SEO;
- JSON-LD;
- sitemap;
- robots.

## Prioritas P1

- activity planner;
- package configurator;
- gallery lightbox;
- social sharing;
- dynamic TOC;
- filters.

## Prioritas P2

- analytics advanced;
- lead tracking;
- quotation system;
- CRM;
- customer portal.

---

# 61. Final Product Vision

**vendoroutbound.id** harus terasa seperti:

> **Website vendor outbound premium yang modern, cepat, informatif, dipercaya, dan fokus menghasilkan konsultasi nyata.**

Bukan sekadar website yang memiliki banyak halaman, tetapi sebuah sistem digital dengan alur:

```text
DISCOVER
   ↓
UNDERSTAND
   ↓
COMPARE
   ↓
TRUST
   ↓
CONSULT
   ↓
CONVERT
```

---

# 62. Kesimpulan

Project **vendoroutbound.id** menggunakan pendekatan **Modern Semantic Static Web** dengan fokus pada:

1. **Premium UX** — tampilan adventure yang tetap profesional.
2. **High Conversion** — CTA WhatsApp dan planner terintegrasi.
3. **SEO/AEO/GEO** — konten terstruktur dan entity consistency.
4. **Performance** — HTML5, CSS3, Vanilla JS, optimized images.
5. **Accessibility** — keyboard, semantic HTML, contrast, reduced motion.
6. **Content Authority** — topical cluster dan internal linking.
7. **Trust** — informasi bisnis yang faktual dan dapat diverifikasi.
8. **Scalability** — struktur halaman siap dikembangkan menjadi puluhan hingga ratusan halaman.
9. **Maintainability** — struktur folder, naming, komponen, dan template konsisten.
10. **Lead Generation** — seluruh customer journey diarahkan secara natural menuju konsultasi.

## Prinsip Utama

> **Build for users first, search engines second, and conversion naturally.**

Website harus terlihat premium, tetapi tidak mengorbankan kecepatan.  
Website harus SEO-friendly, tetapi tidak melakukan keyword stuffing.  
Website harus menjual, tetapi tidak menggunakan klaim yang tidak dapat dibuktikan.  
Website harus interaktif, tetapi tetap ringan dan accessible.

---

## Dokumen Referensi

Dokumen ini disusun dengan mempertahankan struktur, layanan, fitur, arsitektur, dan ketentuan utama dari dokumen struktur project Vendor Outbound yang diberikan, kemudian diperkuat menjadi PRD yang lebih siap untuk proses UI/UX, development, SEO, QA, dan deployment.

**End of PRD — vendoroutbound.id**
