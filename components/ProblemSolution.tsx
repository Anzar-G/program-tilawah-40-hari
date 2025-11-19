import React from 'react';
import { PROBLEMS } from '../constants';
import { motion } from 'framer-motion';

const ProblemSolution: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
            Apakah kamu mengalami ini?
          </h2>
          <p className="text-lg text-slate-600">
            Al-Qur'an adalah kitab suci yang seharusnya jadi teman sehari-hari. Tapi kenyataannya...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                <problem.icon className="w-6 h-6 text-red-500 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{problem.title}</h3>
              <p className="text-slate-600">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-emerald-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-emerald-600 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-emerald-300 font-semibold tracking-wider uppercase text-sm mb-2 block">Solusi Kami</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
                Program Tilawah 40 Hari
              </h3>
              <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
                Sistem accountability berbasis komunitas yang dirancang untuk membantumu 
                <strong className="text-white"> konsisten membaca Al-Qur'an </strong> 
                setiap hari.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-xl mb-1">Qurani</h4>
                  <p className="text-sm text-emerald-100">Membangun generasi dekat Al-Qur'an</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-xl mb-1">Mandiri</h4>
                  <p className="text-sm text-emerald-100">Melatih disiplin spiritual</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-xl mb-1">Peduli</h4>
                  <p className="text-sm text-emerald-100">Saling mengingatkan</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-white rounded-2xl p-2 rotate-3 shadow-2xl hidden lg:block">
                 <img 
                  src="/masjid.jpg" 
                  alt="Masjid"
                  className="w-full h-full object-cover rounded-xl"
                 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;