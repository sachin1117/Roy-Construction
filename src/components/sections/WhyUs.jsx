import React from 'react';
import { Shield, Coins, UserCheck, Eye, Sparkles, Clock, Star, Quote, ExternalLink } from 'lucide-react';
import { WHY_US_PILLARS, TESTIMONIALS, COMPANY_INFO } from '../../data/siteData';

const iconMap = {
  Shield: Shield,
  Coins: Coins,
  UserCheck: UserCheck,
  Eye: Eye,
  Sparkles: Sparkles,
  Clock: Clock,
};

export default function WhyUs({ reducedMotion = false }) {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-20 lg:py-28 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classic-50 border border-classic-200 text-classic-850 text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>The Roy Construction Guarantee</span>
          </div>
          <h2
            id="why-us-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-classic-950 tracking-tight"
          >
            Why Builders & Developers in Howrah Rely on Us
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            In civil contracting, reputation is forged in concrete. Over 40 years, here is what sets our execution apart from every other contractor in Bally, Belur, and Greater Howrah.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_PILLARS.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Shield;
            return (
              <article
                key={pillar.number}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-classic-400 transition-all duration-300 group hover:-translate-y-1 shadow-card hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-classic-50 border border-classic-200 flex items-center justify-center text-classic-850 group-hover:scale-110 group-hover:bg-classic-100 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-classic-400 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-classic-850 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-classic-700 font-semibold mt-0.5">
                  {pillar.bengali}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </article>
            );
          })}
        </div>

        {/* Testimonials Showcase with Review Schema Markup */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading font-bold text-2xl text-classic-950">
              Verified Client Testimonials — Howrah & Hooghly
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Feedback from actual property owners and structural engineers who worked with Surendra Roy & Sachin Kumar.
            </p>
            <a
              href={COMPANY_INFO.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read all Roy Construction reviews on Google Business Profile"
              className="inline-flex items-center gap-1.5 text-xs text-classic-700 hover:text-classic-950 font-bold mt-2 hover:underline"
            >
              <span>Read all {COMPANY_INFO.googleReviewCount} reviews on Google Business Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {TESTIMONIALS.map((testi, idx) => (
              <figure
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm"
                itemScope
                itemType="https://schema.org/Review"
                itemProp="itemListElement"
              >
                {/* Hidden machine-readable review metadata */}
                <meta itemProp="itemReviewed" content="Roy Construction, Bally Howrah" />
                <meta itemProp="author" content={testi.author} />
                <meta itemProp="reviewRating" content={String(testi.rating)} />
                <meta itemProp="position" content={String(idx + 1)} />

                <blockquote>
                  {/* Star Rating */}
                  <div
                    className="flex items-center gap-1 text-amber-500 mb-3"
                    aria-label={`${testi.rating} out of 5 stars`}
                    role="img"
                  >
                    {Array.from({ length: testi.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p
                    className="text-xs sm:text-sm text-slate-700 italic leading-relaxed"
                    itemProp="reviewBody"
                  >
                    "{testi.quote}"
                  </p>
                </blockquote>

                <figcaption className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 font-heading block">{testi.author}</span>
                    <span className="text-[11px] text-slate-500">{testi.role} • {testi.location}</span>
                    <span className="text-[10px] text-slate-400 italic block">{testi.project}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 font-bold shrink-0 ml-2">
                    Verified ✓
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
