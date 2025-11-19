import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TESTIMONIALS, STATS_DATA } from '../constants';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 bg-emerald-950 text-white overflow-hidden relative">
      {/* Decorative Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute w-96 h-96 bg-emerald-400 rounded-full blur-[100px] -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-emerald-600 rounded-full blur-[100px] bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Apa Kata Alumni Batch Pertama?</h2>
          <p className="text-emerald-200">Jangan percaya kata kami, percaya kata mereka yang sudah merasakan manfaatnya!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="bg-emerald-900/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-800 hover:bg-emerald-900 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-700 mb-4 opacity-50" />
              <p className="text-emerald-100 mb-6 italic leading-relaxed">"{item.quote}"</p>
              <div>
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-emerald-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-around gap-12 border border-white/10">
          <div className="flex-1 text-center md:text-left">
             <h3 className="text-2xl md:text-3xl font-bold mb-2">Tingkat Konsistensi Tinggi</h3>
             <p className="text-emerald-200 mb-6">
               Sistem kami terbukti membantu peserta untuk tetap istiqomah hingga akhir program.
             </p>
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-900/50 p-4 rounded-xl">
                  <p className="text-3xl font-bold text-emerald-400">50+</p>
                  <p className="text-sm text-emerald-200">Alumni Batch 1</p>
                </div>
                <div className="bg-emerald-900/50 p-4 rounded-xl">
                  <p className="text-3xl font-bold text-emerald-400">25.000+</p>
                  <p className="text-sm text-emerald-200">Halaman Dibaca</p>
                </div>
             </div>
          </div>
          
          <div className="w-full md:w-64 h-64 relative">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={STATS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {STATS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#064e3b', borderColor: '#047857', color: 'white' }}
                    itemStyle={{ color: 'white' }}
                  />
                </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="text-3xl font-bold text-white">92%</span>
                <span className="text-xs text-emerald-300 uppercase tracking-wider">Konsisten</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;