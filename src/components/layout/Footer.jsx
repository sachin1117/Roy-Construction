import React from 'react';
import { HardHat, Phone, MapPin, Mail, ShieldCheck, ArrowUp, Clock, CheckCircle2, Star, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREAS } from '../../data/siteData';

export default function Footer({ onOpenQuoteModal, onOpenWorkerModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-classic-950 border-t border-classic-900 text-slate-300 relative z-20">
      {/* Upper Architectural Caution Border */}
      <div className="h-1.5 w-full caution-strip" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Leadership Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  ROY <span className="text-amber-400 font-normal">CONSTRUCTION</span>
                </span>
                <p className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                  Established 1986 • Bally, Howrah
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Founded by <strong className="text-white">Surendra Roy</strong> and directed by <strong className="text-white">Sachin Kumar</strong>. Delivering 40 years of uncompromised mastery in civil brickwork, RCC structures, and disciplined labour contracting across Greater Howrah & Hooghly.
            </p>

            {/* Google Business Direct Badge Card */}
            <a
              href={COMPANY_INFO.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-classic-900 border border-classic-800 hover:border-amber-400/50 text-xs block transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>Google Business Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400" />
              </div>
              <p className="text-[11px] text-slate-300 mt-1 font-mono">
                Rated {COMPANY_INFO.googleRating}/5.0 based on {COMPANY_INFO.googleReviewCount} client reviews
              </p>
            </a>

            <div className="p-2.5 rounded-xl bg-classic-900/60 border border-classic-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-classic-300 font-medium text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Govt. Reg. License: {COMPANY_INFO.license}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services & Labour Hub */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Contracting Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-classic-600">›</span> Turnkey Residential Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-classic-600">›</span> Master Rajmistri & Mason Supply
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-classic-600">›</span> RCC Formwork & Bar Bending
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-classic-600">›</span> Commercial Warehouse Flooring
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-classic-600">›</span> Structural Restoration & Retrofitting
                </a>
              </li>
              <li>
                <a href="#for-workers" className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center gap-2">
                  <span className="text-amber-400">★</span> শ্রমিক ভর্তি ও শনিবার পাওনা
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coverage Hubs */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-classic-400" />
              Service Zones in Howrah
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SERVICE_AREAS.slice(0, 8).map((area) => (
                <a
                  key={area.id}
                  href="#service-area"
                  className="hover:text-white transition-colors py-1 px-2 rounded-lg bg-classic-900 border border-classic-800 hover:border-classic-700 text-[11px] flex items-center justify-between"
                >
                  <span>{area.name}</span>
                  <span className="text-[9px] text-amber-400 font-mono">30-60m</span>
                </a>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-3">
              * Emergency same-day crew dispatch available for Bally, Belur & Uttarpara.
            </p>
          </div>

          {/* Col 4: Bally HQ Contact & Rapid Action */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Bally Headquarters
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 font-semibold text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 font-semibold font-mono text-white">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-classic-400 shrink-0" />
                <span>Mon–Sat: 7:00 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-classic-850 hover:bg-classic-800 text-white font-bold text-xs transition-colors border border-classic-700 flex items-center justify-center gap-2 text-center"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-md text-center"
              >
                Instant Construction Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Leadership, Coordinates, Back to top */}
        <div className="mt-14 pt-8 border-t border-classic-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} Roy Construction. All rights reserved.</span>
            <span>•</span>
            <span>Leadership: <strong>Surendra Roy & Sachin Kumar</strong></span>
            <span>•</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-400 hover:underline">
              {COMPANY_INFO.email}
            </a>
            <span>•</span>
            <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-classic-300 hover:underline">
              Google Maps Location
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-classic-900 hover:bg-classic-850 text-slate-200 border border-classic-800 hover:border-classic-700 text-xs transition-all"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
