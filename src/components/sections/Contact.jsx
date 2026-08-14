import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, HardHat, Users, CheckCircle2, Clock, MessageSquare, Sparkles, Navigation, Star, ExternalLink, UserCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREAS, LEADERSHIP_TEAM } from '../../data/siteData';

export default function Contact({ onQuoteSubmit, prefilledData = null, reducedMotion = false }) {
  const [formMode, setFormMode] = useState('construction');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Bally, Howrah',
    serviceType: prefilledData?.projectType ? 'Turnkey Civil Construction' : 'RCC Residential Frame',
    areaSqFt: prefilledData?.areaSqFt || '',
    workerCount: '10 to 20 Workers',
    startDate: 'Within 7 Days',
    message: prefilledData ? `Estimated Footprint: ${prefilledData.totalSlabArea} sq.ft, Est. Crew: ${prefilledData.crewSize} personnel.` : '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onQuoteSubmit({ ...formData, formMode });
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: 'Bally, Howrah',
        serviceType: 'RCC Residential Frame',
        areaSqFt: '',
        workerCount: '10 to 20 Workers',
        startDate: 'Within 7 Days',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classic-100 border border-classic-200 text-classic-850 text-xs font-semibold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Inquiry & Quote Request</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-classic-950 tracking-tight">
            Consult With Surendra Roy & Sachin Kumar
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Get transparent cost evaluations, schedule on-site soil inspections, or book dedicated labour squads across Howrah & Hooghly.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form in Pure White (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card space-y-6">
            
            {/* Mode Switcher */}
            <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setFormMode('construction')}
                className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  formMode === 'construction'
                    ? 'bg-classic-850 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <HardHat className="w-4 h-4 text-amber-400" />
                <span>Civil Construction Quote</span>
              </button>

              <button
                type="button"
                onClick={() => setFormMode('labour')}
                className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  formMode === 'labour'
                    ? 'bg-classic-850 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-4 h-4 text-classic-300" />
                <span>Hire Labour Force</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Subir Banerjee"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border ${
                      errors.name ? 'border-rose-500' : 'border-slate-300'
                    } text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                    Phone Number (10 Digits) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98305 82419"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border ${
                      errors.phone ? 'border-rose-500' : 'border-slate-300'
                    } text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Location & Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                    Project Site Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
                  >
                    {SERVICE_AREAS.map((a) => (
                      <option key={a.id} value={`${a.name}, ${a.district}`}>
                        {a.name} ({a.district})
                      </option>
                    ))}
                    <option value="Other Location in West Bengal">Other Location (WB)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                    {formMode === 'construction' ? 'Service Category' : 'Labour Squad Required'}
                  </label>
                  {formMode === 'construction' ? (
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
                    >
                      <option>RCC Residential Frame & Brickwork</option>
                      <option>Turnkey Civil Construction (End-to-End)</option>
                      <option>Commercial Warehouse Flooring & Slabs</option>
                      <option>Structural Renovation & Beam Jacketing</option>
                    </select>
                  ) : (
                    <select
                      value={formData.workerCount}
                      onChange={(e) => setFormData({ ...formData, workerCount: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
                    >
                      <option>Small Squad (4 - 8 Workers)</option>
                      <option>Standard Gang (10 - 20 Workers)</option>
                      <option>Large Team (25 - 50+ Workers)</option>
                      <option>Specialist Rajmistri & Bar Benders Only</option>
                    </select>
                  )}
                </div>
              </div>

              {/* Area / Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                    Approx Built-Up Area / Notes
                  </label>
                  <input
                    type="text"
                    value={formData.areaSqFt}
                    onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                    placeholder="e.g. 2,400 sq.ft or G+3 building"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                    Target Start Date
                  </label>
                  <select
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
                  >
                    <option>Immediately (Emergency / 24-48 hrs)</option>
                    <option>Within 7 Days</option>
                    <option>Within 2 to 4 Weeks</option>
                    <option>Next Month (Planning Phase)</option>
                  </select>
                </div>
              </div>

              {/* Message / Project Details */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                  Specific Requirements / Site Details (Optional)
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details like soil conditions, slab casting date, or specific rebar requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-classic-600 focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-heading font-bold text-sm text-white bg-classic-850 hover:bg-classic-900 shadow-md shadow-classic-850/20 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Submit Inquiry to Surendra Roy & Sachin Kumar</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Google Maps & Direct Leadership Contacts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Google Business Profile & Map Embed Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-classic-50 border border-classic-200 flex items-center justify-center text-classic-850">
                    <MapPin className="w-6 h-6 text-classic-700" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">Bally Headquarters</h3>
                    <p className="text-xs text-classic-700 font-mono font-semibold">Roy Construction • Verified Google Place</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-300 text-amber-900 text-xs font-bold font-mono">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                  <span>{COMPANY_INFO.googleRating}★</span>
                </div>
              </div>

              {/* Interactive Google Map Preview linked to exact place */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
                <iframe
                  title="Roy Construction Exact Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.9867087677463!2d88.34175!3d22.6543619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d00018ea45b%3A0xa757574c441041b0!2sRoy%20construction!5e0!3m2!1sen!2sin!4v1786735900000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 px-3 py-1.5 bg-classic-850/95 hover:bg-classic-900 text-white rounded-lg text-[11px] font-bold shadow-md backdrop-blur-sm flex items-center gap-1.5 transition-all group-hover:scale-105"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 space-y-1.5 pt-1 border-t border-slate-200">
                <p className="font-semibold text-slate-800">{COMPANY_INFO.address.street}</p>
                <p>{COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city} — {COMPANY_INFO.address.pincode}</p>
                <p className="text-slate-500 text-xs italic">({COMPANY_INFO.address.landmark})</p>
              </div>

              {/* Direct Leadership Contact Strip */}
              <div className="pt-2 border-t border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Founder:</span>
                  <span className="font-bold text-slate-900">Surendra Roy (40+ Yrs)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Managing Director:</span>
                  <span className="font-bold text-slate-900">Sachin Kumar</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-classic-700 hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-classic-850 hover:bg-classic-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>

                <a
                  href={COMPANY_INFO.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-300"
                >
                  <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  <span>Google Reviews</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>

              {/* Direct Phone Action */}
              <div className="pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-classic-50 border border-classic-200 hover:border-classic-400 text-classic-850 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-classic-600" />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Connect */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-300 p-6 shadow-sm flex items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  Instant WhatsApp Consultation
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Send architectural blueprints or site photos directly.
                </p>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Surendra Roy & Sachin Kumar, I would like to discuss a construction / labour contracting requirement in Howrah.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
