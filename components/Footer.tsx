import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, Youtube, Music2, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-800 font-serif mb-4">
              Pondok Quran <br/> Digitalpreneur
            </h3>
            <p className="text-slate-600 mb-6">
              Membangun generasi Qurani, Mandiri, dan Peduli.
              Program ini adalah amal jariyah.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>
                <a href={CONTACT_INFO.whatsapp} className="flex items-start gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 text-emerald-600" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 text-emerald-600" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 mt-0.5 text-emerald-600" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Ikuti Kami</h4>
            <div className="flex gap-4">
               <a href={CONTACT_INFO.instagram} className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
               </a>
               <a href={CONTACT_INFO.youtube} className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
               </a>
               <a href={CONTACT_INFO.tiktok} className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all" aria-label="TikTok">
                 <Music2 className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-4">
               Update program, kajian, dan inspirasi harian.
            </p>
          </div>

          {/* Links */}
          <div>
             <h4 className="font-bold text-slate-900 mb-6">Link Cepat</h4>
             <ul className="space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-emerald-600">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-emerald-600">Program Lainnya</a></li>
                <li><a href="#" className="hover:text-emerald-600">FAQ</a></li>
                <li><a href="#" className="hover:text-emerald-600">Daftar Program</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center">
           <p className="text-slate-500 text-sm">
             Copyright © 2019 Pondok Quran Digitalpreneur Abdurrahman Bin Auf. All Rights Reserved.
           </p>
           <p className="text-slate-400 text-xs mt-2">
             Dibuat dengan 💚 untuk mendekatkan umat kepada Al-Qur'an
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;