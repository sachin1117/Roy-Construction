import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Users, Clock, IndianRupee, Layers, ShieldCheck, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { ESTIMATOR_DEFAULTS } from '../../data/siteData';

export default function Calculator({ onLockEstimate, reducedMotion = false }) {
  const [projectType, setProjectType] = useState('residential_structure');
  const [areaSqFt, setAreaSqFt] = useState(1800);
  const [floors, setFloors] = useState(2);
  const [urgency, setUrgency] = useState('standard');

  // Dynamic calculations based on 40 years of Roy Construction benchmarks
  const estimation = useMemo(() => {
    const totalSlabArea = areaSqFt * floors;
    let baseRate = ESTIMATOR_DEFAULTS.sqftRates[projectType] || 380;
    
    // Urgency multiplier
    const speedMultiplier = urgency === 'fast_track' ? 1.4 : 1.0;
    const costMultiplier = urgency === 'fast_track' ? 1.08 : 1.0;

    // Estimated duration in working days
    const baseDays = Math.round((totalSlabArea / (ESTIMATOR_DEFAULTS.labourProductivity.sqftPerMasonPerDay * 4)) / speedMultiplier);
    const durationDays = Math.max(15, baseDays);

    // Workforce calculations per day
    const masonsNeeded = Math.max(2, Math.round((totalSlabArea / (durationDays * ESTIMATOR_DEFAULTS.labourProductivity.sqftPerMasonPerDay))));
    const helpersNeeded = Math.max(3, Math.round(masonsNeeded * ESTIMATOR_DEFAULTS.labourProductivity.helpersPerMason));
    const shutteringCarpenters = Math.max(2, Math.round(masonsNeeded * ESTIMATOR_DEFAULTS.labourProductivity.shutteringRatio));
    const barBenders = Math.max(1, Math.round(masonsNeeded * ESTIMATOR_DEFAULTS.labourProductivity.barBenderRatio));
    const totalCrewSize = masonsNeeded + helpersNeeded + shutteringCarpenters + barBenders;

    // Cost range calculation
    const totalEstimatedCost = Math.round(totalSlabArea * baseRate * costMultiplier);
    const minCost = Math.round(totalEstimatedCost * 0.95);
    const maxCost = Math.round(totalEstimatedCost * 1.08);

    return {
      totalSlabArea,
      durationDays,
      masonsNeeded,
      helpersNeeded,
      shutteringCarpenters,
      barBenders,
      totalCrewSize,
      minCost,
      maxCost,
    };
  }, [projectType, areaSqFt, floors, urgency]);

  const handleLockClick = () => {
    onLockEstimate({
      projectType,
      areaSqFt,
      floors,
      totalSlabArea: estimation.totalSlabArea,
      durationDays: estimation.durationDays,
      crewSize: estimation.totalCrewSize,
      estimatedCostRange: `₹${(estimation.minCost / 100000).toFixed(2)}L – ₹${(estimation.maxCost / 100000).toFixed(2)}L`,
    });
  };

  const projectTypesList = [
    { id: 'residential_structure', label: 'RCC Frame & Brickwork', desc: 'Columns, Slabs, Brick Masonry' },
    { id: 'turnkey_civil', label: 'Turnkey Civil (With Material)', desc: 'Complete end-to-end execution' },
    { id: 'commercial_warehouse', label: 'Warehouse / Industrial Shed', desc: 'Heavy flooring & steel staging' },
    { id: 'renovation_retrofit', label: 'Structural Renovation', desc: 'Beams, Jacketing & Plaster' },
  ];

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-classic-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classic-100 border border-classic-200 text-classic-850 text-xs font-semibold uppercase tracking-wider mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Interactive Civil & Workforce Estimator</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-classic-950 tracking-tight">
            Estimate Your Construction & Labour Needs
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Calibrated on 40 years of actual site productivity data across Bally, Belur, Liluah, and Greater Howrah.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card space-y-6">
            
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-3">
                1. Select Scope of Work:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypesList.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      projectType === type.id
                        ? 'bg-classic-50 border-classic-600 text-classic-950 ring-1 ring-classic-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold font-heading">{type.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Built-Up Area Slider & Direct Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                  2. Built-Up Footprint Area (Per Floor):
                </label>
                <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-classic-850 bg-classic-50 px-3 py-1 rounded-lg border border-classic-200">
                  <span>{areaSqFt.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-slate-500">Sq. Ft.</span>
                </div>
              </div>

              <input
                type="range"
                min="400"
                max="15000"
                step="50"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-classic-700 border border-slate-300"
              />

              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>400 Sq.Ft (Small Villa)</span>
                <span>5,000 Sq.Ft (Apartment)</span>
                <span>15,000+ Sq.Ft (Commercial)</span>
              </div>
            </div>

            {/* 3. Number of Floors */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-2">
                3. Total Number of Storeys (Floors):
              </label>
              <div className="grid grid-cols-6 gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFloors(num)}
                    className={`py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold border transition-all ${
                      floors === num
                        ? 'bg-classic-850 text-white border-classic-850 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {num === 1 ? 'G' : `G+${num - 1}`}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Timeline Urgency */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-2">
                4. Schedule Mode:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    urgency === 'standard'
                      ? 'bg-classic-50 border-classic-600 text-classic-950 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="font-heading font-bold text-xs sm:text-sm">Standard Pace</div>
                  <div className="text-[11px] text-slate-500">Optimal cure time & standard gang size</div>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency('fast_track')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    urgency === 'fast_track'
                      ? 'bg-amber-50 border-amber-500 text-amber-900 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="font-heading font-bold text-xs sm:text-sm text-amber-800">
                    Fast-Track Dispatch
                  </div>
                  <div className="text-[11px] text-slate-500">Double crew shift for rapid slab cycle</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Output Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card space-y-6 relative overflow-hidden">
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-classic-850" />

            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Estimated Civil & Crew Metrics
                </h3>
                <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                  Total Slab Footprint: <strong className="text-classic-850 font-mono">{estimation.totalSlabArea.toLocaleString('en-IN')} Sq. Ft.</strong>
                </p>
              </div>
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            </div>

            {/* Estimated Budget Index */}
            <div className="p-4 rounded-xl bg-classic-50 border border-classic-200">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                Estimated Contractual Index (Indicative)
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-classic-950 mt-1 flex items-baseline gap-1">
                <span>₹{(estimation.minCost / 100000).toFixed(2)}L</span>
                <span className="text-slate-400 text-sm font-normal">–</span>
                <span>₹{(estimation.maxCost / 100000).toFixed(2)} Lakhs</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1">
                * Exact rates depend on steel grade, river sand source & site access.
              </p>
            </div>

            {/* Estimated Required Workforce Breakdown */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold block">
                Recommended Daily Site Workforce:
              </span>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 text-[10px] block font-mono">Master Rajmistri</span>
                  <span className="font-bold text-slate-900 text-sm">{estimation.masonsNeeded} Masons</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 text-[10px] block font-mono">Site Helpers (যোগালী)</span>
                  <span className="font-bold text-slate-900 text-sm">{estimation.helpersNeeded} Workers</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 text-[10px] block font-mono">Shuttering Gang</span>
                  <span className="font-bold text-slate-900 text-sm">{estimation.shutteringCarpenters} Carpenters</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 text-[10px] block font-mono">Bar Benders (রড মিস্ত্রি)</span>
                  <span className="font-bold text-slate-900 text-sm">{estimation.barBenders} Craftsmen</span>
                </div>
              </div>

              {/* Total Crew & Timeline Metrics */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-2">
                  <Users className="w-4 h-4 text-classic-700 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block font-mono">Total Crew Size</span>
                    <span className="font-extrabold text-slate-900 text-sm">{estimation.totalCrewSize} Personnel</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block font-mono">Turnaround</span>
                    <span className="font-extrabold text-slate-900 text-sm">~{estimation.durationDays} Working Days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lock Estimate CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleLockClick}
                className="w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-white bg-classic-850 hover:bg-classic-900 shadow-md shadow-classic-850/20 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Lock This Estimate & Request Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Obligation • Direct review by Surendra Roy</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
