import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, PhoneCall, ArrowRight, Users, CheckCircle, Sparkles, MapPin, Star, ExternalLink, Award } from 'lucide-react';
import { COMPANY_INFO, HERO_STATS } from '../../data/siteData';
import AnimatedCounter from '../ui/AnimatedCounter';
import BlueprintGrid from '../ui/BlueprintGrid';

export default function Hero({ onOpenQuoteModal, onOpenWorkerModal, reducedMotion = false }) {
  return (
    <section
      id="hero"
      aria-label="Roy Construction Hero — Civil Contractor Bally Howrah"
      className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-classic-50/40"
    >
      {/* Blueprint Grid and Geometric Background */}
      <BlueprintGrid opacity={0.6} />

      {/* Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-classic-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {/* Live Deployment Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Live Deployment: <strong>Bally, Belur & Kona Expressway</strong></span>
          </div>

          {/* Google Verified Business Rating Badge */}
          <a
            href={COMPANY_INFO.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Roy Construction Google Business Profile — 4.9 Stars"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-classic-50 border border-classic-200 text-classic-850 text-xs font-bold font-heading hover:bg-classic-100 transition-all shadow-sm group"
          >
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span>Google: {COMPANY_INFO.googleRating}★ ({COMPANY_INFO.googleReviewCount} Reviews)</span>
            <ExternalLink className="w-3 h-3 text-classic-600 group-hover:text-classic-900" />
          </a>

          {/* 40-Year Seal */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold font-heading">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>ESTD 1986 • 40 YEARS OF TRUST</span>
          </div>
        </div>

        {/* Main Hero Header — Keyword-rich H1 for SEO */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-classic-950 tracking-tight leading-[1.15]"
          >
            Best Civil Contractor in{' '}
            <span className="text-classic-850">Bally, Howrah</span>
            {' '}— 40 Years of Master Masonry & Labour Precision
          </motion.h1>

          {/* SEO-enriched subheading */}
          <motion.p
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Founded in <strong className="text-slate-800">1986 by Surendra Roy</strong> and now directed by{' '}
            <strong className="text-slate-800">Sachin Kumar</strong> — Roy Construction delivers unyielding civil structures, precision RCC slab casting, and verified disciplined labour gangs across Bally, Belur, Liluah, and Greater Howrah.
          </motion.p>

          {/* Address + Location anchor for Local SEO */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500"
          >
            <MapPin className="w-3.5 h-3.5 text-classic-500 shrink-0" />
            <address className="not-italic">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-classic-700 hover:underline transition-colors font-medium"
              >
                128/B G.T. Road, Near Bally Police Station, Bally, Howrah — 711201, West Bengal
              </a>
            </address>
          </motion.div>

          {/* Core Trust Pills */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-classic-600 shrink-0" />
              <span>Direct Founder Supervision by Surendra Roy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-classic-600 shrink-0" />
              <span>100% Saturday Worker Payout Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-classic-600 shrink-0" />
              <span>Sub-2-Hour Emergency Labour Dispatch from Bally</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenQuoteModal}
              type="button"
              aria-label="Request a Civil Construction Quote from Roy Construction"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-base text-white bg-classic-850 hover:bg-classic-900 shadow-xl shadow-classic-850/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <HardHat className="w-5 h-5 text-amber-400" />
              <span>Request Construction Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenWorkerModal}
              type="button"
              aria-label="Hire verified construction labour from Roy Construction Bally"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-heading font-semibold text-base text-classic-900 hover:text-classic-950 bg-white hover:bg-slate-50 border border-slate-300 shadow-md transform hover:-translate-y-0.5 transition-all"
            >
              <Users className="w-5 h-5 text-classic-600" />
              <span>Hire Labour Force</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              aria-label={`Call Roy Construction at ${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-semibold text-classic-850 hover:text-classic-950 bg-classic-50 border border-classic-200 hover:border-classic-400 transition-all"
            >
              <PhoneCall className="w-4 h-4 animate-bounce text-classic-600" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* 4 Key Statistics Cards */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          role="list"
          aria-label="Roy Construction Key Statistics"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              role="listitem"
              className="relative group p-6 rounded-2xl bg-white border border-slate-200 hover:border-classic-400 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Classic Blue Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-classic-850" />

              {/* Corner Ruler Tick */}
              <div className="absolute top-3 right-3 text-[9px] font-mono text-slate-400">
                #0{idx + 1}
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-classic-850 tracking-tight flex items-baseline">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  reducedMotion={reducedMotion}
                />
              </div>

              <div className="mt-2 text-sm sm:text-base font-bold text-slate-900 font-heading">
                {stat.label}
              </div>

              <div className="mt-1 text-xs text-slate-500 font-normal leading-snug">
                {stat.subtext}
              </div>

              {/* Bottom Hover Accent Line */}
              <div className="mt-4 h-1 w-8 bg-slate-200 group-hover:w-full group-hover:bg-amber-500 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
