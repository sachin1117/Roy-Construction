import React from 'react';
import { Eye, EyeOff, Sparkles, Activity } from 'lucide-react';

export default function MotionToggle({ reducedMotion, toggleReducedMotion, className = "" }) {
  return (
    <button
      onClick={toggleReducedMotion}
      type="button"
      className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
        reducedMotion
          ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 hover:bg-amber-500/20'
          : 'bg-navy-800/80 border-slate-700/60 text-slate-300 hover:text-slate-100 hover:border-slate-500'
      } ${className}`}
      title={reducedMotion ? "Reduced Motion is Active (Click to enable animations)" : "Smooth Animations Active (Click for reduced motion)"}
      aria-label="Toggle reduced motion preference"
    >
      {reducedMotion ? (
        <>
          <EyeOff className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Reduced Motion: ON</span>
          <span className="sm:hidden">Motion OFF</span>
        </>
      ) : (
        <>
          <Activity className="w-3.5 h-3.5 text-blueprint-400 group-hover:animate-pulse" />
          <span className="hidden sm:inline">Fluid Motion</span>
          <span className="sm:hidden">Motion ON</span>
        </>
      )}
    </button>
  );
}
