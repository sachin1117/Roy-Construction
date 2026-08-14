import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, MapPin, Award, ChevronLeft, ChevronRight, Compass, Sparkles, Building2, Hammer, Layers, Users, Truck } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../../data/siteData';

const iconMap = {
  Hammer: Hammer,
  Building2: Building2,
  Layers: Layers,
  Users: Users,
  Truck: Truck,
  Award: Award,
};

export default function RulerTimeline({ reducedMotion = false }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeMilestone = TIMELINE_MILESTONES[selectedIndex];
  const IconComponent = iconMap[activeMilestone.icon] || Award;

  // Calculate spirit level bubble offset based on current index (-35px to +35px)
  const bubbleOffset = ((selectedIndex / (TIMELINE_MILESTONES.length - 1)) - 0.5) * 70;

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_MILESTONES.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < TIMELINE_MILESTONES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="timeline" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle blueprint grid pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classic-100 border border-classic-300 text-classic-850 text-xs font-semibold uppercase tracking-wider mb-3">
            <Ruler className="w-3.5 h-3.5" />
            <span>Interactive Architectural Ruler (1986 — 2026)</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-classic-950 tracking-tight">
            40 Centimeters. 40 Years. <br className="hidden sm:inline" />
            <span className="text-classic-850">Measured in Concrete & Trust.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Slide through four decades of structural craftsmanship across Bally, Belur, Liluah, Salkia, and the Kona Expressway corridor.
          </p>
        </div>

        {/* Interactive Spirit Level Widget */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="spirit-level-container rounded-2xl p-4 flex flex-col items-center">
            <div className="w-full flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-600 px-1 mb-1.5 font-bold">
              <span className="text-classic-850 flex items-center gap-1">
                <Compass className="w-3 h-3 text-classic-700" /> PRECISION SPIRIT LEVEL
              </span>
              <span className="text-classic-700">0.00° CALIBRATION</span>
              <span>1986 — 2026</span>
            </div>

            {/* Level Glass Vial */}
            <div className="relative w-full h-8 bg-slate-200 rounded-full border border-slate-300 overflow-hidden flex items-center justify-center shadow-inner">
              {/* Glass Reflection Highlight */}
              <div className="absolute top-1 left-3 right-3 h-2 bg-white/70 rounded-full pointer-events-none" />

              {/* Center Alignment Lines */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 border-l border-r border-classic-600/50 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-classic-700 pointer-events-none" />

              {/* Moving Spirit Bubble */}
              <motion.div
                animate={reducedMotion ? { x: 0 } : { x: bubbleOffset }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="w-7 h-5 spirit-level-bubble rounded-full border border-amber-600 shadow-md relative"
              >
                <div className="absolute top-0.5 left-1.5 w-2 h-1 bg-white/90 rounded-full" />
              </motion.div>
            </div>
            
            <div className="text-[11px] text-slate-600 mt-2 font-mono">
              Active Milestone: <strong className="text-classic-850">{activeMilestone.year}</strong> ({activeMilestone.title})
            </div>
          </div>
        </div>

        {/* Architectural Ruler Tape Visual */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="ruler-tape rounded-2xl p-4 sm:p-6 shadow-card border border-slate-300 relative bg-white">
            
            {/* Top Tape Coordinates */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 border-b border-slate-200 pb-2 mb-3">
              <span className="text-classic-850 font-bold">METRIC SCALE (1 CM = 1 YEAR OF SERVICE)</span>
              <span className="text-slate-500 hidden sm:inline">ROY CONSTRUCTION ARCHITECTURAL SPECIFICATION</span>
              <span className="text-classic-700 font-bold">ORIGIN: BALLY, HOWRAH</span>
            </div>

            {/* Millimeter Ticks Strip */}
            <div className="relative py-4 select-none">
              {/* Tick Marks Grid */}
              <div className="flex items-end justify-between w-full h-10 px-2 sm:px-6">
                {Array.from({ length: 41 }).map((_, i) => {
                  const isMajor = i % 5 === 0;
                  const isDecade = i % 10 === 0;
                  const matchingMilestoneIndex = TIMELINE_MILESTONES.findIndex((m) => m.year === 1986 + i);
                  const hasMilestone = matchingMilestoneIndex !== -1;
                  const isSelected = matchingMilestoneIndex === selectedIndex;

                  return (
                    <div
                      key={i}
                      onClick={() => hasMilestone && setSelectedIndex(matchingMilestoneIndex)}
                      className={`flex flex-col items-center transition-all ${
                        hasMilestone ? 'cursor-pointer group' : ''
                      }`}
                    >
                      {/* Interactive Milestone Indicator Pin */}
                      {hasMilestone && (
                        <div
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full mb-1 flex items-center justify-center text-[8px] font-bold font-mono transition-all ${
                            isSelected
                              ? 'bg-classic-850 text-white scale-125 ring-4 ring-classic-200'
                              : 'bg-slate-300 text-slate-700 group-hover:bg-classic-600 group-hover:text-white'
                          }`}
                        >
                          ●
                        </div>
                      )}

                      {/* Tick Line */}
                      <div
                        className={`transition-colors ${
                          isSelected
                            ? 'w-1 h-8 bg-classic-850'
                            : isDecade
                            ? 'ruler-tick-major'
                            : isMajor
                            ? 'ruler-tick-half'
                            : 'ruler-tick-mm'
                        }`}
                      />

                      {/* Ruler Numbering */}
                      {isMajor && (
                        <span
                          className={`text-[9px] sm:text-[10px] font-mono mt-1 ${
                            isSelected
                              ? 'text-classic-850 font-bold'
                              : 'text-slate-500'
                          }`}
                        >
                          {i}cm
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Year Selector Buttons for Mobile */}
            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2">
              {TIMELINE_MILESTONES.map((m, idx) => (
                <button
                  key={m.year}
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedIndex === idx
                      ? 'bg-classic-850 text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Milestone Detail Card */}
        <div className="mt-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.year}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-card relative overflow-hidden"
            >
              {/* Corner Watermark */}
              <div className="absolute -right-4 -bottom-4 text-8xl sm:text-9xl font-heading font-black text-slate-100 select-none pointer-events-none">
                {activeMilestone.year}
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-6">
                
                {/* Left: Icon, Badge, Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-classic-50 border border-classic-200 flex items-center justify-center text-classic-850">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-extrabold text-2xl sm:text-3xl text-classic-850">
                          {activeMilestone.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-classic-100 text-classic-850 border border-classic-200 font-bold">
                          {activeMilestone.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">
                        Ruler Scale: {activeMilestone.mark}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mt-2">
                    {activeMilestone.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-classic-700">
                    {activeMilestone.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeMilestone.description}
                  </p>

                  {/* Highlights and Location */}
                  <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-classic-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-mono block">Primary Sector</span>
                        <span className="text-slate-800 font-semibold">{activeMilestone.location}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-mono block">Craft Record</span>
                        <span className="text-slate-800 font-semibold">{activeMilestone.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Step Navigation Controls */}
                <div className="flex sm:flex-col items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all hover:scale-105"
                    aria-label="Previous milestone"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-xl bg-classic-850 hover:bg-classic-900 text-white font-bold transition-all hover:scale-105 shadow-md shadow-classic-850/20"
                    aria-label="Next milestone"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
