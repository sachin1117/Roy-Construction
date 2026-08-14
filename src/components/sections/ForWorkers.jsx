import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, ShieldCheck, HeartHandshake, Phone, ArrowRight, MessageSquare, CheckCircle2, TrendingUp, Home, CalendarCheck, HeartPulse, UserPlus, HardHat } from 'lucide-react';
import { WORKER_HUB, COMPANY_INFO } from '../../data/siteData';

const iconMap = {
  Wallet: Wallet,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  HeartPulse: HeartPulse,
  Home: Home,
  CalendarCheck: CalendarCheck,
};

export default function ForWorkers({ onWorkerSubmit, reducedMotion = false }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    trade: 'Master Rajmistri',
    experienceYears: '3 to 5 Years',
    currentLocation: 'Bally / Belur / Howrah',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your 10-digit mobile number';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onWorkerSubmit(formData);
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        trade: 'Master Rajmistri',
        experienceYears: '3 to 5 Years',
        currentLocation: 'Bally / Belur / Howrah',
      });
      setErrors({});
    }, 600);
  };

  return (
    <section id="for-workers" className="py-20 lg:py-28 bg-white border-t border-b border-slate-200 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-classic-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-classic-50 border border-classic-200 text-classic-850 text-xs font-bold uppercase tracking-wider mb-3">
            <Wallet className="w-4 h-4 text-classic-700" />
            <span>শ্রমিক কল্যাণ ও নিয়োগ পোর্টাল (Worker Hub)</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-classic-950 tracking-tight">
            শ্রমিক ভাইদের পাশে ৪০ বছর — <br className="hidden sm:inline" />
            <span className="text-classic-850">প্রতি শনিবার সঠিক পাওনা</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {WORKER_HUB.payoutPledgeSub} We believe that a contractor is only as strong as the dignity and security he gives to his craftsmen.
          </p>
        </div>

        {/* 6 Worker Welfare Benefits in White Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKER_HUB.benefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-classic-300 hover:bg-white transition-all group shadow-sm hover:shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-classic-100 border border-classic-200 flex items-center justify-center text-classic-850 mb-4 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="font-heading font-bold text-base text-slate-900">
                  {benefit.title}
                </h3>
                
                <p className="text-xs text-classic-850 font-bold mt-1">
                  {benefit.bengali}
                </p>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Wage Transparency Table & Fast Enrollment Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Transparent Daily Wage Scale (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  মজুরি কাঠামো (Daily Wage Scale)
                </h3>
                <p className="text-xs text-slate-500">Transparent daily rates with overtime & weekly payouts</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300 font-bold">
                100% Guaranteed
              </span>
            </div>

            <div className="space-y-2 pt-1">
              {WORKER_HUB.tradeCategories.map((trade, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs shadow-sm"
                >
                  <div>
                    <span className="font-bold text-slate-900 block">{trade.name}</span>
                    <span className="text-[10px] text-slate-500">Exp: {trade.experience}</span>
                  </div>
                  <span className="font-mono font-bold text-classic-850 text-sm">
                    {trade.dailyRange}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 italic pt-2">
              * Overtime calculated at 1.5x after 8-hour duty. Payout disbursed every Saturday evening at Bally depot.
            </p>
          </div>

          {/* Right Column: Worker Quick Enrollment Form (6 Cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-card space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-classic-700" />
                  নতুন শ্রমিক যোগদান ফর্ম (Worker Enrollment)
                </h3>
                <p className="text-xs text-slate-500">Fill this to join Surendra Roy's active construction gangs</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1">
                  আপনার নাম (Full Name) *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Ghosh / Raju Mandal"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border ${
                    errors.name ? 'border-rose-500' : 'border-slate-300'
                  } text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white`}
                />
                {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
              </div>

              {/* Mobile Phone Number */}
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1">
                  মোবাইল নম্বর (Phone Number) *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9830XXXXXX"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border ${
                    errors.phone ? 'border-rose-500' : 'border-slate-300'
                  } text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white`}
                />
                {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
              </div>

              {/* Trade Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1">
                    কাজের ধরণ (Trade / Skill)
                  </label>
                  <select
                    value={formData.trade}
                    onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-classic-600 focus:bg-white"
                  >
                    <option>Master Rajmistri</option>
                    <option>General Mason</option>
                    <option>Shuttering Carpenter</option>
                    <option>Bar Bender / Rebar Tyer</option>
                    <option>Semi-Skilled Helper (যোগালী)</option>
                    <option>Tiles & Flooring Specialist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1">
                    অভিজ্ঞতা (Experience)
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-classic-600 focus:bg-white"
                  >
                    <option>0 to 2 Years</option>
                    <option>3 to 5 Years</option>
                    <option>5 to 10 Years</option>
                    <option>10+ Years (Senior Karigar)</option>
                  </select>
                </div>
              </div>

              {/* Submit Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl font-heading font-bold text-xs sm:text-sm text-white bg-classic-850 hover:bg-classic-900 shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>জমা দিন (Submit Application)</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </>
                  )}
                </button>

                {/* Direct WhatsApp Callout */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('নমস্কার সুরেন্দ্র বাবু, আমি রায় কনস্ট্রাকশনে কাজে যোগ দিতে চাই।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Join</span>
                </a>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
