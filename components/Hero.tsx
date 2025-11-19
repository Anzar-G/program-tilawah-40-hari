import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Share2, Copy, X, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const shareData = {
    title: 'Program Tilawah 40 Hari',
    text: 'Yuk ikuti Program Tilawah 40 Hari dari Pondok Quran Digitalpreneur! 100% Gratis, membangun kebiasaan baca Al-Qur\'an bersama komunitas.',
    url: typeof window !== 'undefined' ? window.location.href : ''
  };

  const handleShareClick = async () => {
    // Try native share first for mobile experience
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.text,
          url: shareData.url,
        });
      } catch (error) {
        // If user cancels or it fails, we can just ignore or fallback
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to custom modal for desktop/unsupported
      setIsShareModalOpen(true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareData.url).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareData.text + '\n\n' + shareData.url)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop" 
          alt="Membaca Al-Quran" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 text-center">
        {/* Trust Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-100 text-sm font-medium tracking-wide">Batch 2 Dimulai 27 November 2025</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6 text-white"
        >
          Sudah Berapa Lama <br className="hidden md:block" />
          <span className="text-emerald-400">Mushafmu</span> Hanya Jadi Pajangan?
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Program Tilawah 40 Hari - Baca Al-Qur'an Bersama Komunitas, Lapor Progress Harian, Raih Pahala Berlimpah & E-Book Eksklusif!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#daftar"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            DAFTAR SEKARANG - 100% GRATIS!
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Share Button */}
          <button
            onClick={handleShareClick}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group"
          >
            <Share2 className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
            Bagikan
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-slate-400"
        >
          {['Gratis', 'Fleksibel', 'Rekap Harian', 'Sertifikat Digital', 'E-Book Eksklusif'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Share Modal Fallback */}
      <AnimatePresence>
        {isShareModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative"
              >
                <button 
                  onClick={() => setIsShareModalOpen(false)}
                  className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-xl font-bold text-slate-800 mb-2">Bagikan Program</h3>
                <p className="text-slate-500 text-sm mb-6">Ajak teman dan keluarga untuk meraih pahala bersama.</p>

                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppShare}
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-semibold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Share via WhatsApp
                  </button>
                  
                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-xl font-semibold transition-colors border border-slate-200"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-600">Link Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span>Salin Link</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;