import { BookOpen, Calendar, CheckCircle, Heart, MessageCircle, Shield, Star, Users, Award, Clock, Globe, Target } from 'lucide-react';

export const CONTACT_INFO = {
  whatsapp: "https://wa.me/6285129940137",
  phone: "085129940137",
  email: "pondokdigitalpreneur@gmail.com",
  address: "Kota Cirebon, Jawa Barat",
  instagram: "https://www.instagram.com/pondokabdurrahmanbinauf/",
  youtube: "https://www.youtube.com/@masjidabbacirebon",
  tiktok: "https://www.tiktok.com/@pondokaba"
};

export const PROBLEMS = [
  {
    title: "Mushaf berdebu di lemari",
    desc: "Ingin baca tapi selalu tertunda dengan alasan 'nanti', 'sibuk', 'capek'.",
    icon: BookOpen
  },
  {
    title: "Tilawah tidak konsisten",
    desc: "Semangat di awal bulan, tapi habis itu hilang tanpa jejak.",
    icon: Calendar
  },
  {
    title: "Merasa sendiri",
    desc: "Tidak ada yang mengingatkan, tidak ada yang menyemangati.",
    icon: Users
  },
  {
    title: "Tidak punya target",
    desc: "Baca Al-Qur'an tanpa goal yang terukur, akhirnya jalan di tempat.",
    icon: Target
  },
  {
    title: "Penyesalan Pasca Ramadhan",
    desc: "'Harusnya aku khatam waktu Ramadhan kemarin...' Penyesalan selalu datang terlambat.",
    icon: Heart
  },
  {
    title: "Kehilangan semangat spiritual",
    desc: "Merasa jauh dari Al-Qur'an, padahal Al-Qur'an adalah obat hati.",
    icon: Shield
  }
];

export const STEPS = [
  {
    title: "Daftar Gratis",
    desc: "Klik tombol daftar, isi form sederhana dengan nama dan nomor WhatsApp-mu. Prosesnya cuma 1 menit!",
    icon: CheckCircle
  },
  {
    title: "Masuk Grup WhatsApp",
    desc: "Kamu akan diundang ke grup WhatsApp Program Tilawah 40 Hari Batch 2. Bertemu ratusan sahabat baru!",
    icon: MessageCircle
  },
  {
    title: "Baca Al-Qur'an Setiap Hari",
    desc: "Bebas baca berapa halaman. 5? 15? Boleh! Yang penting KONSISTEN setiap hari.",
    icon: BookOpen
  },
  {
    title: "Lapor Progress Harian",
    desc: "Setiap hari sebelum jam 21.00 malam, chat di grup dengan format simpel.",
    icon: Clock
  },
  {
    title: "Pantau Rekap Harian",
    desc: "Admin mengirim rekap harian. Lihat progressmu dan teman-teman untuk motivasi.",
    icon: Calendar
  },
  {
    title: "Selesaikan & Dapat Hadiah",
    desc: "Hari ke-40: Konsisten? Dapat Sertifikat Digital & E-Book Eksklusif.",
    icon: Award
  }
];

export const TESTIMONIALS = [
  {
    name: "Abaikeun",
    role: "Pengajar, Cirebon",
    quote: "Tak ada kesan yang begitu menarik selain mendapatkan lingkungan yang baik dan penyemangat untuk terus berlomba dalam kebaikan. Alhamdulillah program ini membuat saya konsisten tilawah untuk pertama kalinya dalam hidup saya!",
    stars: 5
  },
  {
    name: "Nizar",
    role: "Mahasiswa UNDIP, Semarang",
    quote: "Alhamdulillah, sejak mengikuti program ini, mengaji terasa mudah dan lancar. Rasanya semakin dekat dengan Allah SWT. Sebagai mahasiswa yang sibuk, saya pikir tidak bisa konsisten. Ternyata dengan support grup, semuanya jadi mudah!",
    stars: 5
  },
  {
    name: "Nabila",
    role: "Mahasiswi Oxford University, UK",
    quote: "Barakallah! Alhamdulillah karena mengikuti program ini saya merasakan kembali jati diri saya sebagai muslimah, apalagi saat ini sedang berada di negeri yang mayoritas non-muslim. Program ini jadi pengingat dan penyemangat saya setiap hari.",
    stars: 5
  }
];

export const FAQS = [
  {
    question: "Apakah program ini benar-benar gratis?",
    answer: "Ya, 100% GRATIS! Tidak ada biaya pendaftaran, tidak ada biaya bulanan. Ini adalah program dakwah untuk menebar kebaikan."
  },
  {
    question: "Saya sibuk kerja/kuliah, apa bisa ikut?",
    answer: "Sangat bisa! Cukup luangkan 15-30 menit per hari. Bisa pagi sebelum berangkat, istirahat makan siang, atau malam sebelum tidur."
  },
  {
    question: "Apakah ada target wajib berapa halaman per hari?",
    answer: "TIDAK ADA! Kamu bebas baca sesuai kemampuan. Mau 5 halaman? Boleh! Yang penting adalah konsistensi setiap hari."
  },
  {
    question: "Kalau saya tidak bisa lapor setiap hari gimana?",
    answer: "Tidak masalah! Laporan harian sangat dianjurkan, tapi kalau ada 1-2 hari terlewat, tidak apa-apa. Kami tidak akan mengeluarkan peserta yang skip beberapa hari."
  },
  {
    question: "Saya belum lancar baca Al-Qur'an, boleh ikut?",
    answer: "Boleh banget! Justru ini kesempatan emas untuk melatih kelancaran. Baca pelan-pelan tidak masalah. Admin siap support kamu!"
  }
];

export const STATS_DATA = [
  { name: 'Konsisten', value: 92, fill: '#059669' }, // emerald-600
  { name: 'Tidak Konsisten', value: 8, fill: '#e2e8f0' },
];