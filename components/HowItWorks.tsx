import React from 'react';
import { STEPS, CONTACT_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="manfaat" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
            Gimana Cara Kerjanya? Simpel Banget!
          </h2>
          <p className="text-slate-600">
            Ikuti langkah mudah ini untuk memulai perjalanan spiritualmu.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-100"></div>

          <div className="space-y-12">
            {STEPS.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full md:w-1/2">
                   <div className={`p-6 bg-white rounded-2xl shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-xl font-bold text-emerald-800 mb-2 flex items-center gap-2 md:inline-flex">
                        <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center text-sm md:hidden">{index + 1}</span>
                        {step.title}
                      </h3>
                      <p className="text-slate-600">{step.desc}</p>
                   </div>
                </div>
                
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-xl border-4 border-white">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
           <div className="inline-block bg-white border border-emerald-100 rounded-2xl p-8 shadow-lg max-w-2xl">
              <h3 className="text-emerald-800 font-bold text-xl mb-4">Detail Program Batch 2</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
                <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Mulai</p>
                    <p className="font-semibold text-slate-800">1 Des 2025</p>
                </div>
                <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Selesai</p>
                    <p className="font-semibold text-slate-800">9 Jan 2025</p>
                </div>
                 <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Biaya</p>
                    <p className="font-semibold text-emerald-600">100% GRATIS</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                 <a 
                  href="#daftar"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors w-full justify-center md:w-auto"
                >
                  Daftar Batch 2 Sekarang
                  <ArrowDown className="w-4 h-4" />
                 </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;