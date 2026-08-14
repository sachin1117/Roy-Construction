import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose, reducedMotion = false }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />,
    info: <Info className="w-5 h-5 text-classic-600 shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-200 bg-white text-slate-900',
    error: 'border-rose-200 bg-white text-slate-900',
    info: 'border-classic-200 bg-white text-slate-900',
  };

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4 pointer-events-none">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md ${borders[toast.type || 'info']}`}
          role="alert"
        >
          {icons[toast.type || 'info']}
          <div className="flex-1">
            <h4 className="font-heading font-bold text-sm text-slate-900">{toast.title}</h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-lg hover:bg-slate-100"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
