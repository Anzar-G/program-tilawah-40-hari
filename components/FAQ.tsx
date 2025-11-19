import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-slate-600">
            Punya pertanyaan? Kemungkinan besar jawabannya ada di sini!
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-colors ${activeIndex === index ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 hover:border-emerald-200'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${activeIndex === index ? 'text-emerald-800' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-emerald-100/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;