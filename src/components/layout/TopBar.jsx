import React from 'react';
import { Phone, MapPin, Clock, Sparkles, Star, ExternalLink, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/siteData';
import MotionToggle from '../ui/MotionToggle';

export default function TopBar({ reducedMotion, toggleReducedMotion }) {
  return (
    <div className="bg-classic-900 border-b border-classic-800 text-xs py-2 px-4 sm:px-6 lg:px-8 relative z-40 text-slate-100">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        
        {/* Left: Location & Google Maps Link */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-200">
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium hover:text-amber-300 transition-colors group"
            title="Open Roy Construction location in Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:animate-bounce" />
            <span className="underline decoration-dotted decoration-amber-400/60 underline-offset-2">
              Bally, Howrah (Near Police Station)
            </span>
            <ExternalLink className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
          </a>

          <span className="text-classic-700 hidden md:inline">|</span>

          {/* Official Email */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-classic-300" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          <span className="text-classic-700 hidden lg:inline">|</span>

          {/* Google Business Rating Badge */}
          <a
            href={COMPANY_INFO.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 bg-classic-850 px-2.5 py-0.5 rounded-full border border-classic-700 text-amber-300 hover:border-amber-400 transition-all text-[11px]"
          >
            <div className="flex items-center">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-bold font-mono">{COMPANY_INFO.googleRating}★</span>
            <span className="text-slate-300 font-normal">on Google ({COMPANY_INFO.googleReviewCount})</span>
          </a>
        </div>

        {/* Right: Emergency Hotline & Motion Switch */}
        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all px-3 py-1 rounded-md shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 animate-pulse text-slate-950" />
            <span>Call: {COMPANY_INFO.phone}</span>
          </a>

          <MotionToggle reducedMotion={reducedMotion} toggleReducedMotion={toggleReducedMotion} />
        </div>

      </div>
    </div>
  );
}
