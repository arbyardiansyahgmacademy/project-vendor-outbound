const fs = require('fs');
const path = require('path');

const rootDir = 'c:/GM ACADEMY/PROJECT WEB VENDOROUTBOUND-ID NEW/web-vendoroutbound-id';

// SVG Icons (34x34 viewBox 0 0 24 24 stroke=currentColor)
const ICONS = {
  // Handshake / Users
  handshake: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>`,
  
  // Compass / Navigation
  compass: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>`,

  // Package / Box
  package: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>`,

  // Camera
  camera: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
             <circle cx="12" cy="13" r="4"></circle>
           </svg>`,

  // MessageSquare / Chat
  message: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <line x1="8" y1="9" x2="16" y2="9"></line>
              <line x1="8" y1="13" x2="14" y2="13"></line>
            </svg>`,

  // Book / Article
  book: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
           <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
         </svg>`,

  // Briefcase
  briefcase: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>`,

  // Heart / Family
  heart: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>`,

  // Graduation Cap / School
  school: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
             <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
           </svg>`,

  // Waves / Rafting
  waves: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          </svg>`,

  // Target / Team Building
  target: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <circle cx="12" cy="12" r="10"></circle>
             <circle cx="12" cy="12" r="6"></circle>
             <circle cx="12" cy="12" r="2"></circle>
           </svg>`,

  // Smile / Fun Games
  smile: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>`,

  // Award / Leadership
  award: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>`,

  // Building / Corporate
  building: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
               <path d="M9 22v-4h6v4"></path>
               <path d="M8 6h.01"></path>
               <path d="M16 6h.01"></path>
               <path d="M12 6h.01"></path>
               <path d="M12 10h.01"></path>
               <path d="M12 14h.01"></path>
               <path d="M16 10h.01"></path>
               <path d="M16 14h.01"></path>
               <path d="M8 10h.01"></path>
               <path d="M8 14h.01"></path>
             </svg>`,

  // Tag / Dollar / Hemat
  tag: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>`,

  // Shield / Standard
  shield: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
             <polyline points="9 12 11 14 15 10"></polyline>
           </svg>`,

  // Crown / Premium VIP
  crown: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>`,

  // Sliders / Custom
  sliders: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>`,

  // Flag / Camp
  flag: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
           <line x1="4" y1="22" x2="4" y2="15"></line>
         </svg>`,

  // Leaf / Nature Edukasi
  leaf: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
           <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
         </svg>`,

  // MapPin / Wisata
  mapPin: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
             <circle cx="12" cy="10" r="3"></circle>
           </svg>`,

  // Truck / Offroad 4x4
  truck: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>`,

  // Tent / Camping
  tent: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M19 21L12 4 5 21"></path>
           <path d="M12 4v17"></path>
           <path d="M9 21l3-6 3 6"></path>
           <line x1="2" y1="21" x2="22" y2="21"></line>
         </svg>`,

  // HelpCircle / 404
  helpCircle: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                 <circle cx="12" cy="12" r="10"></circle>
                 <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                 <line x1="12" y1="17" x2="12.01" y2="17"></line>
               </svg>`
};

// Page specific CTA definitions
const CTA_CONFIGS = {
  // 1. Root Pages
  'tentang-kami.html': {
    kicker: 'KOLABORASI & KONSULTASI RESMI',
    title: 'Siap Berkolaborasi Mewujudkan Outbound Terbaik Bersama Kami?',
    desc: 'Diskusikan nilai, budaya kerja, atau target transformasi organisasi Anda dengan tim konsultan Vendor Outbound. Kami siapkan konsep acara terarah tanpa biaya.',
    chips: ['✓ Fasilitator Bersertifikat BNSP', '✓ Diskusi & Proposal Gratis', '✓ Rekam Jejak 500+ Klien'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai kerja sama outbound setelah membaca profil Tentang Kami.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Panorama Outbound Alam Pegunungan Batu Malang',
    iconSvg: ICONS.handshake
  },
  'produk.html': {
    kicker: 'REKOMENDASI LAYANAN TERBAIK',
    title: 'Bingung Memilih Kategori Layanan yang Paling Sesuai?',
    desc: 'Sampaikan profil peserta, durasi yang diinginkan, dan tujuan utama acara Anda. Tim spesialis kami akan merekomendasikan program outbound yang paling tepat dan efisien.',
    chips: ['✓ Analisis Kebutuhan Gratis', '✓ Rekomendasi Lokasi Batu Malang', '✓ Penawaran Transparan'],
    waText: 'Halo Vendor Outbound, saya ingin rekomendasi layanan outbound yang cocok untuk rombongan kami.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Pilihan Program Outbound Batu Malang',
    iconSvg: ICONS.compass
  },
  'paket.html': {
    kicker: 'KONSULTASI & CUSTOM PAKET',
    title: 'Butuh Estimasi Biaya dan Kustomisasi Paket Outbound?',
    desc: 'Setiap paket dapat disesuaikan dengan anggaran, fasilitas penginapan, konsumsi, dan durasi acara Anda di Batu Malang maupun destinasi Jawa Timur lainnya.',
    chips: ['✓ Simulasi Rundown Gratis', '✓ Opsi Paket Fleksibel', '✓ Tanpa Biaya Tersembunyi'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi estimasi biaya dan pilihan paket outbound.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Paket Outbound Eksklusif Batu Malang',
    iconSvg: ICONS.package
  },
  'galeri.html': {
    kicker: 'DOKUMENTASI & PORTOFOLIO',
    title: 'Ingin Mengabadikan Momen Outbound Tak Terlupakan Seperti Ini?',
    desc: 'Vendor Outbound menyediakan paket lengkap termasuk dokumentasi foto dan video profesional (ground & drone) untuk mengabadikan momen kebersamaan tim Anda.',
    chips: ['✓ Dokumentasi Foto & Video Pro', '✓ Tim Media Siaga Lapangan', '✓ Resolusi Tinggi Siap Pakai'],
    waText: 'Halo Vendor Outbound, saya ingin menanyakan paket outbound lengkap dengan dokumentasi foto dan video.',
    bgImg: '/assets/images/gallery/team-building.jpg',
    bgAlt: 'Dokumentasi Outbound dan Gathering Lapangan',
    iconSvg: ICONS.camera
  },
  'kontak.html': {
    kicker: 'RESPONS CEPAT 24/7',
    title: 'Lebih Nyaman Diskusi Cepat Langsung via WhatsApp?',
    desc: 'Tak perlu menunggu lama, tim konsultan kami siap merespons pertanyaan, mengirimkan rincian program, dan menyusun estimasi penawaran langsung ke ponsel Anda.',
    chips: ['✓ Respons Cepat Dalam Hitungan Menit', '✓ Draf Proposal 1x24 Jam', '✓ Layanan Ramah & Solutif'],
    waText: 'Halo Vendor Outbound, saya ingin terhubung langsung untuk konsultasi kegiatan outbound.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Layanan Konsultasi WhatsApp Vendor Outbound',
    iconSvg: ICONS.message
  },
  'blog.html': {
    kicker: 'KONSULTASI BERDASARKAN WAWASAN',
    title: 'Ingin Menerapkan Tips Outbound Ini ke Acara Tim Anda?',
    desc: 'Diskusikan implementasi materi, strategi pemilihan lokasi, atau konsep rundown yang Anda baca di artikel kami bersama perancang program profesional kami.',
    chips: ['✓ Berbagi Solusi Praktis', '✓ Pendampingan Perencanaan', '✓ Konsultasi 100% Gratis'],
    waText: 'Halo Vendor Outbound, saya baru membaca artikel di blog dan ingin berdiskusi mengenai konsep outbound untuk kegiatan kami.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Artikel Wawasan Outbound dan Event Gathering',
    iconSvg: ICONS.book
  },

  // 2. Produk Subpages
  'produk/outbound-perusahaan.html': {
    kicker: 'PROGRAM KORPORASI & HRD',
    title: 'Rancang Program Outbound Perusahaan yang Berdampak Nyata',
    desc: 'Tingkatkan sinergi lintas departemen, leadership, dan produktivitas tim kerja Anda melalui simulasi experiential learning yang terstruktur dan terukur.',
    chips: ['✓ Dirancang Sesuai Budaya Kerja', '✓ Modul Teruji & Debrief Mendalam', '✓ Venue Representatif di Malang'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi program Outbound Perusahaan untuk instansi/kantor kami.',
    bgImg: '/assets/images/programs/team-building.jpg',
    bgAlt: 'Outbound Perusahaan Corporate Training Batu',
    iconSvg: ICONS.briefcase
  },
  'produk/family-gathering.html': {
    kicker: 'REKREASI KELUARGA & GATHERING',
    title: 'Wujudkan Acara Family Gathering Hangat, Seru, dan Guyub',
    desc: 'Games inklusif yang ramah untuk semua usia (anak-anak hingga lansia), didukung fasilitas resort nyaman dan suasana alam pegunungan Kota Batu yang sejuk.',
    chips: ['✓ Permainan Ramah Segala Usia', '✓ Suasana Rekreatif & Guyub', '✓ Lokasi Resort & Hotel Pilihan'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi kegiatan Family Gathering untuk rombongan kami.',
    bgImg: '/assets/images/programs/family-gathering.jpg',
    bgAlt: 'Family Gathering Ceria di Resort Batu Malang',
    iconSvg: ICONS.heart
  },
  'produk/outbound-sekolah.html': {
    kicker: 'EDUKASI & KARAKTER SISWA',
    title: 'Bentuk Karakter, Disiplin, dan Kepemimpinan Pelajar di Alam Bebas',
    desc: 'Program edukatif terpadu LDKS dan character building dengan pengawasan fasilitator berpengalaman dan standar keamanan medis yang ketat.',
    chips: ['✓ Instruktur Bersertifikasi & Ramah Anak', '✓ Kurikulum Disiplin & Karakter', '✓ Standar Keamanan & Medis Siaga'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi program Outbound Sekolah / Character Building untuk siswa kami.',
    bgImg: '/assets/images/programs/outbound-sekolah.jpg',
    bgAlt: 'Outbound Karakter dan Edukasi Sekolah Pelajar',
    iconSvg: ICONS.school
  },
  'produk/outbound-wisata.html': {
    kicker: 'PETUALANGAN & ADRENALIN',
    title: 'Pacu Semangat Tim dengan Wisata Petualangan Alam Bebas',
    desc: 'Kombinasikan keindahan alam pegunungan Batu Malang dengan petualangan arung jeram rafting, safari offroad 4x4, dan malam keakraban di highland camp.',
    chips: ['✓ Peralatan Standar Safety Internasional', '✓ Guide & Rescue Tersertifikasi', '✓ Rute Alami Terbaik di Jawa Timur'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi paket Outbound Wisata dan Adventure.',
    bgImg: '/assets/images/programs/rafting.jpg',
    bgAlt: 'Wisata Petualangan Rafting dan Offroad Alam Bebas',
    iconSvg: ICONS.waves
  },

  // 3. Paket Subpages
  'paket/team-building.html': {
    kicker: 'KONSULTASI PAKET TEAM BUILDING',
    title: 'Siap Tingkatkan Kolaborasi dan Kekompakan Tim Kerja Anda?',
    desc: 'Diskusikan profil peserta, tantangan internal kantor, dan target yang ingin dicapai. Dapatkan rancangan modul team building dan proposal penawaran resmi gratis.',
    chips: ['✓ Modul Sinergi Tim Terarah', '✓ Fasilitator BNSP Profesional', '✓ Venue Outbound Asri di Batu'],
    waText: 'Halo Vendor Outbound, saya tertarik berkonsultasi mengenai Paket Team Building Perusahaan.',
    bgImg: '/assets/images/programs/team-building.jpg',
    bgAlt: 'Paket Team Building Sinergis Perusahaan',
    iconSvg: ICONS.target
  },
  'paket/fun-games.html': {
    kicker: 'PAKET FUN GAMES REFRESHING',
    title: 'Hilangkan Kejenuhan Kerja dengan Simulasi Games yang Segar & Ceria',
    desc: 'Simulasi ice breaking dan fun team challenges yang membangkitkan tawa, mencairkan suasana kaku, dan mempererat relasi antar rekan sejawat.',
    chips: ['✓ Suasana Menyenangkan & Anti Stres', '✓ Pilihan Durasi Half Day / Full Day', '✓ Hadiah & Games Menarik'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Fun Games Refreshing.',
    bgImg: '/assets/images/programs/family-gathering.jpg',
    bgAlt: 'Fun Games Outbound Ceria Refreshing',
    iconSvg: ICONS.smile
  },
  'paket/leadership.html': {
    kicker: 'LEADERSHIP & STRATEGIS',
    title: 'Asah Kepemimpinan Tangguh & Pengambilan Keputusan Cepat',
    desc: 'Simulasi kepemimpinan berbobot di alam terbuka yang melatih ketahanan mental, kepemimpinan adaptif, manajemen krisis, dan strategi tim juara.',
    chips: ['✓ Simulasi Problem Solving Nyata', '✓ Evaluasi & Debrief Psikologis', '✓ Cocok untuk Manager & Supervisor'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi mengenai Paket Leadership Outbound.',
    bgImg: '/assets/images/programs/team-building.jpg',
    bgAlt: 'Leadership Management Outbound Training',
    iconSvg: ICONS.award
  },
  'paket/corporate-gathering.html': {
    kicker: 'CORPORATE GATHERING LENGKAP',
    title: 'Rencanakan Perhelatan Akbar Gathering Perusahaan Impian Anda',
    desc: 'Mulai dari manajemen venue hotel/resort, gala dinner, entertainment panggung, hingga rangkaian outbound interaktif untuk ratusan karyawan.',
    chips: ['✓ Event Management All-in-One', '✓ Kapasitas Skala Besar 50-500+ Pax', '✓ Sound System & Hiburan Lengkap'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi mengenai Paket Corporate Gathering Perusahaan.',
    bgImg: '/assets/images/programs/team-building.jpg',
    bgAlt: 'Gathering Akbar Perusahaan dan Instansi',
    iconSvg: ICONS.building
  },
  'paket/hemat.html': {
    kicker: 'PAKET HEMAT EFISIEN',
    title: 'Outbound Berkualitas dengan Anggaran Ekonomis & Efisien',
    desc: 'Solusi tepat bagi organisasi atau komunitas yang membutuhkan program kegiatan luar ruangan seru dan berbobot tanpa membebani anggaran belanja.',
    chips: ['✓ Biaya Terjangkau per Peserta', '✓ Tetap Berstandar Safety & Seru', '✓ Rincian Biaya Transparan'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Outbound Hemat.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Paket Outbound Hemat Terjangkau',
    iconSvg: ICONS.tag
  },
  'paket/standard.html': {
    kicker: 'PAKET STANDARD FAVORIT',
    title: 'Paket Pilihan Terfavorit dengan Fasilitas Lengkap & Seimbang',
    desc: 'Kombinasi ideal antara modul simulasi team building, konsumsi prasmanan higienis, tiket lokasi wisata alam, dan dokumentasi kegiatan.',
    chips: ['✓ Fasilitas Makan & Snack Lengkap', '✓ Modul Ice Breaking & Team Game', '✓ Lokasi Populer di Kawasan Batu'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Outbound Standard.',
    bgImg: '/assets/images/programs/team-building.jpg',
    bgAlt: 'Paket Outbound Standard Lengkap',
    iconSvg: ICONS.shield
  },
  'paket/premium.html': {
    kicker: 'PAKET PREMIUM EKSKLUSIF',
    title: 'Pengalaman Outbound Mewah dengan Kenyamanan Resort Terbaik',
    desc: 'Dapatkan fasilitas V.I.P, akomodasi resort berbintang, sajian kuliner istimewa, dokumentasi video sinematik drone, dan fasilitator master trainer.',
    chips: ['✓ Akomodasi Resort Berbintang', '✓ Video Drone & Dokumentasi Sinematik', '✓ Fasilitator Senior Master Trainer'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Outbound Premium VIP.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Paket Outbound Premium VIP Eksklusif',
    iconSvg: ICONS.crown
  },
  'paket/custom.html': {
    kicker: 'PAKET KUSTOM TEMATIK',
    title: 'Rancang Modul dan Rundown Outbound Khusus Sesuai Ekspektasi Anda',
    desc: 'Punya konsep tema tertentu, lokasi impian di luar daftar, atau durasi khusus multi-day? Konsultasikan bersama tim kami untuk menyusun proposal kustom.',
    chips: ['✓ Fleksibilitas Konsep 100%', '✓ Penyesuaian Venue & Fasilitas', '✓ Draf Proposal Cepat 24 Jam'],
    waText: 'Halo Vendor Outbound, saya ingin merancang Paket Custom Outbound sesuai kebutuhan khusus kami.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Paket Custom Tematik Outbound',
    iconSvg: ICONS.sliders
  },
  'paket/pelajar.html': {
    kicker: 'OUTBOUND EDUKASI PELAJAR',
    title: 'Bina Kekompakan dan Kemandirian Siswa di Lingkungan Alam Asri',
    desc: 'Kegiatan luar kelas yang menyegarkan pikiran, melatih tenggang rasa sesama teman, serta menumbuhkan cinta lingkungan bagi siswa SD, SMP, hingga SMA.',
    chips: ['✓ Ramah Anak & Mengedukasi', '✓ Pendampingan Penuh Instruktur', '✓ Area Kegiatan Tertutup & Aman'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Outbound Pelajar / Sekolah.',
    bgImg: '/assets/images/programs/outbound-sekolah.jpg',
    bgAlt: 'Paket Outbound Pelajar Sekolah',
    iconSvg: ICONS.school
  },
  'paket/character-building.html': {
    kicker: 'CHARACTER BUILDING SISWA',
    title: 'Tanamkan Mental Tangguh, Integritas, dan Disiplin Positif',
    desc: 'Metode experiential learning yang memupuk rasa percaya diri, tanggung jawab sosial, resiliensi mental, dan etika kepemimpinan generasi muda.',
    chips: ['✓ Evaluasi Karakter Personal & Tim', '✓ Instruktur Berpengalaman & Tegas', '✓ Rundown Terstruktur & Bernilai'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Character Building Siswa.',
    bgImg: '/assets/images/programs/outbound-sekolah.jpg',
    bgAlt: 'Pelatihan Karakter Siswa Character Building',
    iconSvg: ICONS.award
  },
  'paket/leadership-camp.html': {
    kicker: 'LEADERSHIP CAMP SISWA & OSIS',
    title: 'Kaderisasi Pemimpin Masa Depan Melalui Simulasi LDKS Lapangan',
    desc: 'Persiapkan pengurus organisasi siswa dan mahasiswa agar memiliki visi kepemimpinan yang jelas, kemampuan komunikasi publik, dan manajemen tim solid.',
    chips: ['✓ Kurikulum LDKS Aplikatif', '✓ Simulasi Manajemen Organisasi', '✓ Lingkungan Highland Menantang'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi mengenai Paket Leadership Camp / LDKS.',
    bgImg: '/assets/images/programs/outbound-sekolah.jpg',
    bgAlt: 'Leadership Camp LDKS Pengurus OSIS Siswa',
    iconSvg: ICONS.flag
  },
  'paket/edukasi.html': {
    kicker: 'OUTBOUND EDUKASI LINGKUNGAN',
    title: 'Belajar Sambil Bermain Melalui Petualangan Sains & Konservasi Alam',
    desc: 'Memperkenalkan ekosistem hayati, petik apel khas Kota Batu, pertanian organik, serta pengelolaan alam secara seru dan interaktif bagi para pelajar.',
    chips: ['✓ Pembelajaran Berbasis Praktik', '✓ Wisata Agro Edukatif Kota Batu', '✓ Didampingi Pemandu Spesialis'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi mengenai Paket Outbound Edukasi Alam.',
    bgImg: '/assets/images/programs/outbound-sekolah.jpg',
    bgAlt: 'Outbound Edukatif Konservasi Alam dan Agro',
    iconSvg: ICONS.leaf
  },
  'paket/wisata.html': {
    kicker: 'PAKET OUTBOUND WISATA',
    title: 'Padukan Semangat Outbound dengan Pesona Destinasi Wisata Batu Malang',
    desc: 'Nikmati perpaduan seru antara aktivitas team games di pagi hari dan eksplorasi destinasi ikonik pegunungan Kota Batu yang sejuk dan menawan.',
    chips: ['✓ Tiket Wisata & Transport Lengkap', '✓ Rekomendasi Destinasi Hits', '✓ Cocok untuk Liburan Kantor & Rombongan'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi mengenai Paket Outbound Plus Wisata.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Outbound Plus Wisata Kota Batu Malang',
    iconSvg: ICONS.mapPin
  },
  'paket/rafting.html': {
    kicker: 'WHITE WATER RAFTING',
    title: 'Taklukkan Jeram Sungai Kaliwatu Batu dengan Adrenalin Maksimal',
    desc: 'Pengalaman arung jeram seru di aliran sungai alami dengan jeram grade variatif, dipandu skipper bersertifikasi rescue dan peralatan keselamatan berstandar internasional.',
    chips: ['✓ Skipper Bersertifikat & Rescue Siaga', '✓ Asuransi & Safety Gear Lengkap', '✓ Termasuk Welcome Drink & Makan Siang'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Wisata Rafting Batu Malang.',
    bgImg: '/assets/images/programs/rafting.jpg',
    bgAlt: 'White Water Rafting Arung Jeram Kaliwatu',
    iconSvg: ICONS.waves
  },
  'paket/offroad.html': {
    kicker: 'SAFARI OFFROAD 4X4',
    title: 'Sensasi Jelajah Jalur Ekstrem Pegunungan dengan Jip 4x4 Tangguh',
    desc: 'Lintasi rute hutan pinus berlumpur, perkebunan apel, hingga lautan pasir Bromo. Petualangan yang menyatukan adrenalin, keindahan alam, dan kebersamaan tim.',
    chips: ['✓ Armada Jip Terawat & Driver Berpengalaman', '✓ Rute Alami Memukau & Menantang', '✓ Spot Foto Eksklusif Panorama Alam'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Safari Offroad 4x4.',
    bgImg: '/assets/images/programs/camping-safari.jpg',
    bgAlt: 'Safari Offroad Jip 4x4 Pegunungan Batu Bromo',
    iconSvg: ICONS.truck
  },
  'paket/camping.html': {
    kicker: 'HIGHLAND CAMPING & BONFIRE',
    title: 'Malam Keakraban Berbintang di Perkemahan Sejuk Pegunungan Batu',
    desc: 'Bangun keakraban mendalam di sekitar api unggun, tenda dome nyaman berstandar glamping/camping, udara sejuk pegunungan, dan panorama gemerlap lampu kota.',
    chips: ['✓ Tenda Nyaman, Matras & Sleeping Bag', '✓ Api Unggun & Suasana Akrab', '✓ Fasilitas Toilet & Listrik Terjamin'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi mengenai Paket Camping Pegunungan.',
    bgImg: '/assets/images/programs/camping-safari.jpg',
    bgAlt: 'Highland Camping Api Unggun Pegunungan Batu',
    iconSvg: ICONS.tent
  },
  'paket/family-gathering.html': {
    kicker: 'PAKET FAMILY GATHERING',
    title: 'Ciptakan Kebahagiaan dan Kehangatan Keluarga Besar yang Tak Terlupakan',
    desc: 'Dirancang khusus agar seluruh anggota keluarga dari lintas generasi dapat berpartisipasi dengan riang, aman, dan membawa pulang kenangan manis bersama.',
    chips: ['✓ Konsep Fun & Anti-Kelelahan', '✓ Fasilitas Ramah Anak & Keluarga', '✓ Suvenir & Doorprize Management'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi mengenai Paket Family Gathering.',
    bgImg: '/assets/images/programs/family-gathering.jpg',
    bgAlt: 'Paket Family Gathering Ceria',
    iconSvg: ICONS.heart
  },
  'paket/outbound-perusahaan.html': {
    kicker: 'PAKET OUTBOUND PERUSAHAAN',
    title: 'Investasi Terbaik untuk Kinerja, Loyalitas, dan Soliditas Karyawan',
    desc: 'Dapatkan proposal komprehensif yang memadukan target evaluasi manajemen dengan aktivitas outdoor yang menyenangkan dan membangkitkan loyalitas kerja.',
    chips: ['✓ Analisis Kebutuhan HR & Manajemen', '✓ Laporan Evaluasi Pasca Kegiatan', '✓ All-In Fasilitas Lengkap'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi Paket Outbound Perusahaan Komprehensif.',
    bgImg: '/assets/images/programs/team-building.jpg',
    bgAlt: 'Paket Outbound Pelatihan Karyawan Perusahaan',
    iconSvg: ICONS.briefcase
  },
  'paket/outbound-sekolah.html': {
    kicker: 'PAKET OUTBOUND SEKOLAH',
    title: 'Solusi Praktis Outbound Edukatif untuk Guru dan Rombongan Siswa',
    desc: 'Panitia sekolah tak perlu repot. Kami menangani seluruh perizinan lokasi, instruktur, makan siang, air mineral, hingga sound system di lapangan.',
    chips: ['✓ Panitia Sekolah Bebas Repot', '✓ Lokasi Aman dengan Lapangan Luas', '✓ Harga Khusus Rombongan Pelajar'],
    waText: 'Halo Vendor Outbound, saya ingin konsultasi Paket Outbound Sekolah & Pelajar.',
    bgImg: '/assets/images/programs/outbound-sekolah.jpg',
    bgAlt: 'Paket Outbound Edukatif Rombongan Sekolah',
    iconSvg: ICONS.school
  },
  'paket/outbound-wisata.html': {
    kicker: 'PAKET OUTBOUND WISATA BATU',
    title: 'Liburan Instansi yang Berkesan dengan Kombinasi Outbound & Wisata',
    desc: 'Jadikan outing tahunan Anda lebih dari sekadar berwisata biasa. Satukan kebersamaan lewat games kolaboratif sebelum mengeksplorasi panorama Kota Batu.',
    chips: ['✓ Rencana Perjalanan Wisata Teratur', '✓ Pilihan Destinasi Wisata Populer', '✓ Dokumentasi Liburan Berkesan'],
    waText: 'Halo Vendor Outbound, saya ingin berkonsultasi mengenai Paket Outbound Wisata Batu Malang.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Paket Outbound dan Rekreasi Wisata Batu',
    iconSvg: ICONS.compass
  },

  // 4. Blog Articles
  'blog/manfaat-team-building-untuk-perusahaan.html': {
    kicker: 'KONSULTASI SOLUSI SDM',
    title: 'Ingin Mengatasi Burnout & Memperkuat Kerja Sama Tim Perusahaan Anda?',
    desc: 'Wujudkan manfaat team building nyata seperti dalam artikel ini untuk divisi kerja Anda. Konsultasikan rancangan simulasi khusus bersama tim fasilitator kami.',
    chips: ['✓ Modul Sinergi Kerja Terukur', '✓ Pemulihan Motivasi & Antusiasme', '✓ Diskusi & Proposal HR Gratis'],
    waText: 'Halo Vendor Outbound, saya membaca artikel Manfaat Team Building dan ingin berdiskusi solusinya untuk tim kantor kami.',
    bgImg: '/assets/images/programs/team-building.jpg',
    bgAlt: 'Team Building Transformatif untuk Karyawan',
    iconSvg: ICONS.target
  },
  'blog/tips-memilih-lokasi-outbound.html': {
    kicker: 'REKOMENDASI VENUE BATU MALANG',
    title: 'Butuh Bantuan Memilih Lokasi Outbound Paling Tepat di Jawa Timur?',
    desc: 'Kami bermitra dengan puluhan venue terbaik di Batu, Malang, Pacet, dan Bromo. Kami siap membantu survei lapangan dan memilihkan tempat yang paling ideal.',
    chips: ['✓ 30+ Pilihan Venue Mitra Terkurasi', '✓ Pendampingan Survei Lapangan', '✓ Akses Bus & Sanitasi Terjamin'],
    waText: 'Halo Vendor Outbound, saya membaca panduan Memilih Lokasi Outbound dan butuh rekomendasi tempat untuk acara kami.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Rekomendasi Venue Outbound Pegunungan Batu',
    iconSvg: ICONS.mapPin
  },
  'blog/perbedaan-outbound-dan-gathering.html': {
    kicker: 'KONSULTASI FORMAT ACARA',
    title: 'Masih Ragu Memilih Antara Outbound atau Gathering untuk Rombongan Anda?',
    desc: 'Diskusikan ekspektasi pimpinan dan profil peserta Anda bersama kami. Kami akan bantu merumuskan format kombinasi terbaik agar acara berjalan optimal.',
    chips: ['✓ Penyelarasan Sasaran Acara', '✓ Opsi Format Fleksibel & Hybrid', '✓ Draf Rundown Cepat & Akurat'],
    waText: 'Halo Vendor Outbound, saya membaca artikel Perbedaan Outbound & Gathering dan ingin konsultasi format mana yang cocok untuk kami.',
    bgImg: '/assets/images/programs/family-gathering.jpg',
    bgAlt: 'Format Acara Outbound dan Gathering Terarah',
    iconSvg: ICONS.compass
  },

  // 5. 404 Recovery
  '404.html': {
    kicker: 'BANTUAN & PANDUAN CEPAT',
    title: 'Tidak Menemukan Halaman yang Anda Cari? Kami Siap Membantu',
    desc: 'Tanyakan langsung kepada konsultan kami via WhatsApp. Kami dengan senang hati mengarahkan informasi paket, venue, dan rincian harga yang Anda butuhkan.',
    chips: ['✓ Respons Ramah 24 Jam', '✓ Panduan Informasi Lengkap', '✓ Bebas Biaya Konsultasi'],
    waText: 'Halo Vendor Outbound, saya mengalami kendala mencari informasi di website dan butuh panduan paket kegiatan.',
    bgImg: '/assets/images/hero/hero-landscape.jpg',
    bgAlt: 'Bantuan Konsultasi Outbound 24 Jam',
    iconSvg: ICONS.helpCircle
  }
};

function generateCtaHtml(data) {
  const chipsHtml = data.chips.map(chip => `                <span class="cta-chip">${chip}</span>`).join('\n');
  const encodedWa = encodeURIComponent(data.waText);
  return `    <!-- FINAL CTA BANNER (Nestoria Reference Luxury Style) -->
    <section class="section cta-section-wrap" aria-label="Ajak Berkonsultasi">
      <div class="container">
        <div class="cta-banner-wrapper">
          <div class="cta-banner-bg-media">
            <img src="${data.bgImg}" alt="${data.bgAlt}" loading="lazy">
          </div>
          <div class="cta-banner-overlay"></div>

          <div class="cta-banner-left">
            <div class="cta-banner-icon-box">
              ${data.iconSvg.trim()}
            </div>
            <div class="cta-banner-content">
              <span class="cta-banner-kicker">${data.kicker}</span>
              <h2 class="cta-banner-title">${data.title}</h2>
              <p class="cta-banner-desc">
                ${data.desc}
              </p>
              <div class="cta-banner-chips">
${chipsHtml}
              </div>
            </div>
          </div>

          <div class="cta-banner-action-wrap">
            <a href="https://wa.me/6282211221909?text=${encodedWa}" target="_blank" rel="noopener noreferrer" class="cta-banner-btn-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.74 0.964 1.199.662.59 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
              </svg>
              <span>Konsultasi WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="cta-arrow-icon" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <div class="cta-sub-note">Resmi • Bebas Biaya • Respons 24 Jam</div>
          </div>
        </div>
      </div>
    </section>`;
}

let updatedCount = 0;

for (const [relPath, config] of Object.entries(CTA_CONFIGS)) {
  const filePath = path.join(rootDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.error(`File NOT found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  const newCta = generateCtaHtml(config);

  // Check if there is already an existing CTA section before </main>
  // Could be <section class="section..."> containing cta-banner-wrapper
  const oldCtaRegex = /(?:<!--\s*FINAL CTA[^>]*-->\s*)?<section[^>]*>(?:(?!<\/section>)[\s\S])*?<div class="cta-banner-wrapper">(?:(?!<\/section>)[\s\S])*?<\/section>\s*(?=<\/main>)/i;

  if (oldCtaRegex.test(content)) {
    content = content.replace(oldCtaRegex, newCta + '\n');
    console.log(`[REPLACED EXISTING CTA] in ${relPath}`);
  } else {
    // Insert immediately before </main>
    const mainCloseRegex = /(\s*)(<\/main>)/i;
    if (mainCloseRegex.test(content)) {
      content = content.replace(mainCloseRegex, `\n\n${newCta}\n$1$2`);
      console.log(`[INSERTED NEW CTA] in ${relPath}`);
    } else {
      console.error(`Could NOT find </main> in ${relPath}`);
      continue;
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  updatedCount++;
}

console.log(`\nSuccessfully updated ${updatedCount} files with luxury contextual CTA cards!`);
