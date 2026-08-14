import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HardHat, ShieldCheck } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, children, reducedMotion = false }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window in Crisp White with Classic Blue Banner */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Architectural Banner */}
          <div className="h-2 w-full caution-strip" />

          {/* Modal Header */}
          <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-classic-50 border border-classic-200 flex items-center justify-center text-classic-850">
                <HardHat className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">{title}</h3>
                {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {children}
          </div>

          {/* Modal Footer Trust Bar */}
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-classic-600" />
              <span>Direct Response from Surendra Roy</span>
            </div>
            <span className="font-mono text-slate-400 font-semibold">BALLY, HOWRAH</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
