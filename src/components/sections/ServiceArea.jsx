import React, { useState } from 'react';
import { MapPin, Clock, CheckCircle2, Navigation, Users, Building, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../../data/siteData';

export default function ServiceArea({ onOpenQuoteModal, reducedMotion = false }) {
  const [selectedAreaId, setSelectedAreaId] = useState(SERVICE_AREAS[0].id);
  const selectedArea = SERVICE_AREAS.find((a) => a.id === selectedAreaId) || SERVICE_AREAS[0];

  return (
    <section id="service-area" aria-labelledby="service-area-heading" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classic-100 border border-classic-200 text-classic-850 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Howrah & Hooghly Civil Operations</span>
          </div>
          <h2 id="service-area-heading" className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-classic-950 tracking-tight">
            Rapid Site Dispatch & Local Coverage
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Operating from our central Bally depot near Bally Police Station on G.T. Road, Roy Construction guarantees rapid on-site inspection and skilled labour dispatch across Howrah & southern Hooghly.
          </p>
        </div>

        {/* Interactive Zone Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Zone Selector Pills (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold block mb-3">
              Select Sector to Inspect Dispatch Status:
            </span>

            {SERVICE_AREAS.map((area) => {
              const isSelected = selectedAreaId === area.id;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-classic-50 border-classic-600 text-classic-950 shadow-md ring-1 ring-classic-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                      isSelected ? 'bg-classic-850 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {area.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-slate-900">{area.name}</div>
                      <div className="text-[11px] text-slate-500">{area.district} • PIN {area.pin}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-classic-850 block font-bold border border-slate-200">
                      {area.dispatchTime}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Zone Deep Dive Card (7 Cols) */}
          <article className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card space-y-6 relative overflow-hidden">
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-classic-850" />

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                    {selectedArea.name} Sector
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-classic-50 text-classic-850 border border-classic-200 font-bold">
                    {selectedArea.tag}
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  District: {selectedArea.district} | PIN: {selectedArea.pin} | West Bengal
                </p>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-classic-50 border border-classic-200 text-classic-850 font-mono text-xs font-bold">
                <Clock className="w-4 h-4 text-classic-600" />
                <span>Dispatch: {selectedArea.dispatchTime}</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Completed Works</span>
                <span className="font-heading font-bold text-xl text-classic-850 mt-0.5 block">{selectedArea.projectsCompleted}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Active Deployments</span>
                <span className="font-heading font-bold text-xl text-slate-900 mt-0.5 block">{selectedArea.activeCrews}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Site Quality Audit</span>
                <span className="font-heading font-bold text-sm text-emerald-700 mt-0.5 block">By Founder / MD</span>
              </div>
            </div>

            {/* Localities Covered */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold block">
                Primary Neighborhoods & Key Sites Covered:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedArea.coverageAreas.map((loc, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Zone Highlight Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
              <Navigation className="w-5 h-5 text-classic-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-heading block mb-0.5">Engineering Note:</strong>
                {selectedArea.highlight}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="flex-1 py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-white bg-classic-850 hover:bg-classic-900 shadow-md shadow-classic-850/20 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Deploy Crew to {selectedArea.name}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors"
              >
                <MapPin className="w-4 h-4 text-classic-600" />
                <span>View Bally Hub on Map</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}
