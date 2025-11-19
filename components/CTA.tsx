import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';

const CTA: React.FC = () => {
  const registerMessage = `Assalamualaikum, Saya tertarik ikut Program Tilawah 40 Hari 🌟\n\nSaya ingin mendaftar untuk Batch 2:\n\n👤 Nama: [Isi nama lengkap]\n🎂 Usia: [Isi usia]\n📍 Domisili: [Isi kota/kabupaten]\n💬 Alasan Ikut Program: [Tulis motivasi kamu]\n\nJazakumullah khairan 🤲`;
  const adminMessage = `Assalamualaikum, ada hal yang ingin saya tanyakan terkait Program Tilawah 40 Hari 🌟\n\n👤 Nama: [Isi nama lengkap]\n💬 Hal yang ingin ditanyakan: [Tulis hal yang ingin ditanyakan]\n\nJazakumullah khairan🤲`;
  return (
    <section id="daftar" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold tracking-wide mb-6 border border-amber-500/30">
           PENDAFTARAN DITUTUP SEBENTAR LAGI
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white font-serif mb-8">
          Jangan Tunda Lagi! <br />
          <span className="text-emerald-400">Mulai Perjalanan Spiritualmu Hari Ini</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Setiap hari yang kita tunda adalah kesempatan pahala yang hilang.
          Investasikan 15 menit harimu untuk ketenangan hati dan pahala berlimpah.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href={`${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(registerMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl shadow-emerald-900/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 animate-pulse hover:animate-none"
          >
            YA, SAYA MAU IKUT!
          </a>
          <a 
            href={`${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(adminMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-3"
          >
            <MessageSquare className="w-5 h-5" />
            Chat Admin
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-slate-400">
           <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>100% Gratis</span>
           </div>
           <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Tanpa Ikatan</span>
           </div>
           <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Aman & Terjaga</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;