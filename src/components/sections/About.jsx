import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, ShieldCheck, HeartHandshake, CheckCircle2, UserCheck, HardHat, Star, MapPin, ExternalLink, Briefcase, Users, PhoneCall, Mail } from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP_TEAM } from '../../data/siteData';

export default function About({ reducedMotion = false }) {
  const commitments = [
    {
      icon: Compass,
      title: "Soil & Structural Integrity",
      desc: "Deep mastery of Howrah's alluvial soil dynamics, groundwater depth, and anti-settlement foundation engineering.",
    },
    {
      icon: HeartHandshake,
      title: "Worker Dignity & Loyalty",
      desc: "A 40-year unbroken commitment to Saturday weekly payouts. Our workforce stands with us because we stand by them.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Middlemen, Direct Leadership",
      desc: "Surendra Roy & Sachin Kumar physically inspect active sites. Every plumb line, shuttering joint, and rebar overlap is vetted on the ground.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-b border-slate-200 relative overflow-hidden">
      {/* Background Architectural Blueprint lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-classic-100/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classic-50 border border-classic-200 text-classic-850 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Leadership & 40-Year Heritage</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-classic-950 tracking-tight">
            The Men Behind Howrah's <br className="hidden sm:inline" />
            <span className="text-classic-850">Most Trusted Structures</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Combining 40 years of veteran field masonry with agile modern project management and verified workforce operations.
          </p>
        </div>

        {/* Dual Leadership Profiles Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Leader 1: Surendra Roy */}
          <div className="relative rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-classic-850 via-classic-700 to-amber-500" />
            
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-classic-50 border-2 border-classic-200 flex items-center justify-center text-classic-850 shadow-inner shrink-0">
                <HardHat className="w-9 h-9 text-amber-500" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-slate-900">Surendra Roy</h3>
                <p className="text-xs text-classic-850 font-bold font-mono uppercase tracking-wider">
                  Founder & Chief Master Craftsman
                </p>
                <span className="inline-block text-[11px] text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full font-bold mt-1">
                  40+ Years Heritage (Estd 1986)
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Pioneered high-precision civil masonry across Bally and Howrah. Personally oversees plumb lines, foundation soil tests, and zero-defect slab casting across residential and commercial sites.
            </p>

            <blockquote className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic leading-relaxed">
              “A building does not stand on cement bills — it stands on the plumb line, the water ratio, and the dignity given to the mason.”
            </blockquote>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Expertise: Structural RCC & Brickwork</span>
              <span className="font-mono text-classic-700 font-bold">Bally Headquarters</span>
            </div>
          </div>

          {/* Leader 2: Sachin Kumar */}
          <div className="relative rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-classic-600 to-classic-850" />
            
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-classic-50 border-2 border-classic-200 flex items-center justify-center text-classic-850 shadow-inner shrink-0">
                <Briefcase className="w-8 h-8 text-classic-700" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-slate-900">Sachin Kumar</h3>
                <p className="text-xs text-classic-850 font-bold font-mono uppercase tracking-wider">
                  Managing Director & Operations Lead
                </p>
                <span className="inline-block text-[11px] text-classic-800 bg-classic-100 px-2.5 py-0.5 rounded-full font-bold mt-1">
                  Workforce & Fast-Track Logistics
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Directs Roy Construction's 1,200+ labour contracting network, rapid squad mobilization across Greater Howrah, client contract management, and Saturday weekly payout compliance.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Direct Inquiries & Contracts:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-classic-700 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Direct Hotline:</span>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-slate-900 font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Operations: Labour & Turnkey Civil</span>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold text-classic-850 hover:underline"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Google Verified Hub</span>
              </a>
            </div>
          </div>

        </div>

        {/* 3 Core Commitments Strip */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-classic-300 hover:bg-white transition-all shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-classic-100 border border-classic-200 flex items-center justify-center text-classic-850 shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
