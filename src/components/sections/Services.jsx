import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Users, CheckCircle2, Wrench, Clock, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../../data/siteData';

export default function Services({ onOpenQuoteModal, onOpenWorkerModal, reducedMotion = false }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Civil Construction', 'Labour Supply & Contracting', 'Structural & Renovation'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/ItemList"
      className="py-20 lg:py-28 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classic-50 border border-classic-200 text-classic-850 text-xs font-semibold uppercase tracking-wider mb-3">
            <HardHat className="w-3.5 h-3.5" />
            <span>Civil Construction & Labour Contracting — Bally, Howrah</span>
          </div>
          <h2
            id="services-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-classic-950 tracking-tight"
            itemProp="name"
          >
            Civil Construction & Workforce Solutions in Howrah
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed" itemProp="description">
            From deep foundation RCC casting in Bally to deploying 100+ vetted shuttering and rebar workers along the Kona Expressway — Roy Construction handles end-to-end structural contracts across Greater Howrah & Hooghly.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter construction services by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-classic-850 text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid — semantic article markup for each service */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="tabpanel"
          aria-label={`Services in: ${activeCategory}`}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, position) => (
              <motion.article
                key={service.id}
                layout
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                aria-labelledby={`service-title-${service.id}`}
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
                className="rounded-2xl bg-white border border-slate-200 hover:border-classic-400 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <meta itemProp="position" content={String(position + 1)} />
                <meta itemProp="provider" content="Roy Construction, Bally, Howrah" />

                <div>
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-classic-50 text-classic-850 border border-classic-200 font-bold"
                      itemProp="serviceType"
                    >
                      {service.category}
                    </span>
                    {service.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-300 font-medium">
                        <Sparkles className="w-3 h-3 text-amber-600" /> Core Service
                      </span>
                    )}
                  </div>

                  {/* Title & Bengali Subtitle */}
                  <h3
                    id={`service-title-${service.id}`}
                    className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-classic-850 transition-colors"
                    itemProp="name"
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs text-classic-700 font-semibold mt-1">
                    {service.bengaliTitle}
                  </p>

                  <p
                    className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed"
                    itemProp="description"
                  >
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Scope of Execution:
                    </span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-classic-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specifications Box */}
                  <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-classic-600" /> Crew Capacity:
                      </span>
                      <span className="font-semibold text-slate-800">{service.teamCapacity}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-amber-600" /> Timeline:
                      </span>
                      <span className="font-semibold text-slate-800">{service.timelineRate}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Wrench className="w-3.5 h-3.5 text-slate-500" /> Equipment:
                      </span>
                      <span className="font-semibold text-slate-700 text-[11px] truncate max-w-[160px]" title={service.toolsSupplied}>
                        {service.toolsSupplied}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4">
                  <button
                    onClick={service.category === 'Labour Supply & Contracting' ? onOpenWorkerModal : onOpenQuoteModal}
                    type="button"
                    aria-label={`Get a quote for ${service.title}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-classic-850 text-slate-800 hover:text-white font-heading font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 border border-slate-200 hover:border-classic-850 shadow-sm"
                  >
                    <span>
                      {service.category === 'Labour Supply & Contracting' ? 'Request Labour Squad' : 'Request Service Quote'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                  </button>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Services CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-classic-50 border border-classic-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-heading font-bold text-lg text-classic-950">
              Need a customized civil or workforce contract in Howrah?
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Surendra Roy & Sachin Kumar personally review every enquiry.{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-classic-700 font-bold hover:underline">
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            type="button"
            className="px-6 py-3 rounded-xl bg-classic-850 hover:bg-classic-900 text-white font-bold text-sm shadow-md transition-colors shrink-0 flex items-center gap-2"
          >
            <HardHat className="w-4 h-4 text-amber-400" />
            <span>Get Custom Quote</span>
          </button>
        </div>

      </div>
    </section>
  );
}
