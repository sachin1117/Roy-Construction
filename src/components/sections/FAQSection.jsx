import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../../data/siteData';

export default function FAQSection({ reducedMotion = false }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classic-50 border border-classic-200 text-classic-850 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-classic-950 tracking-tight">
            Common Questions About Our Services & Location
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Have questions about civil construction rates, labour supply, or our Bally headquarters?
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-classic-850 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-classic-850 text-white rotate-180' : 'bg-slate-200 text-slate-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3"
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 rounded-2xl bg-classic-50 border border-classic-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-base text-classic-950">
              Need personalized consultation with Surendra Roy or Sachin Kumar?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Call us or drop an email at <strong>{COMPANY_INFO.email}</strong>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-xl bg-classic-850 text-white font-bold text-xs hover:bg-classic-900 transition-colors shadow-sm"
            >
              Call Now
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
