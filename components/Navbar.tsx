import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      style={{ height: '64px' }}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center h-full">
           {/* Logo */}
           <div className="h-full flex items-center">
             <img
               src="/logo-aba.png"
               alt="Logo Pondok Quran Digitalpreneur"
               className="h-10 md:h-12 w-auto object-contain"
             />
           </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
           {[
             { label: 'Tentang', href: '#tentang' },
             { label: 'Manfaat', href: '#manfaat' },
             { label: 'Testimoni', href: '#testimoni' },
             { label: 'FAQ', href: '#faq' },
           ].map((link) => (
             <a 
               key={link.label} 
               href={link.href} 
               className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-emerald-100 hover:text-white'}`}
             >
               {link.label}
             </a>
           ))}
           <a 
             href="#daftar"
             className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
               isScrolled 
                 ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                 : 'bg-white text-emerald-800 hover:bg-emerald-50'
             }`}
           >
             Daftar Gratis
           </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg p-4 flex flex-col gap-4 md:hidden">
          {[
            { label: 'Tentang', href: '#tentang' },
            { label: 'Manfaat', href: '#manfaat' },
            { label: 'Testimoni', href: '#testimoni' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
             <a 
               key={link.label} 
               href={link.href}
               className="text-slate-600 font-medium py-2 border-b border-slate-50 last:border-0"
               onClick={() => setMobileMenuOpen(false)}
             >
               {link.label}
             </a>
           ))}
           <a 
             href="#daftar"
             className="bg-emerald-600 text-white text-center py-3 rounded-lg font-bold"
             onClick={() => setMobileMenuOpen(false)}
           >
             Daftar Sekarang
           </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;