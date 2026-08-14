import React from 'react';

export default function BlueprintGrid({ opacity = 0.7, className = "" }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Light Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-grid" />

      {/* Architectural Measurement Accents */}
      <svg className="absolute w-full h-full text-classic-600 opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="architectural-crosshair" width="160" height="160" patternUnits="userSpaceOnUse">
            <line x1="80" y1="72" x2="80" y2="88" stroke="currentColor" strokeWidth="1" />
            <line x1="72" y1="80" x2="88" y2="80" stroke="currentColor" strokeWidth="1" />
            <circle cx="80" cy="80" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#architectural-crosshair)" />
      </svg>

      {/* Blueprint Corner Bracket Markers */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-classic-500/20" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-classic-500/20" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-classic-500/20" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-classic-500/20" />
      
      {/* Structural Dimension Coordinates */}
      <div className="absolute top-6 left-8 text-[10px] font-mono tracking-widest text-classic-800/40 uppercase">
        LOC: 22.6508°N 88.3426°E // BALLY_HQ
      </div>
      <div className="absolute top-6 right-8 text-[10px] font-mono tracking-widest text-amber-700/40 uppercase">
        SPEC: IS 456:2000 // ROY-CONST-40Y
      </div>
    </div>
  );
}
