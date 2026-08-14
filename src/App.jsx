import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useLenis } from './hooks/useLenis';
import { useReducedMotion } from './hooks/useReducedMotion';

// Layout Components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import RulerTimeline from './components/sections/RulerTimeline';
import Services from './components/sections/Services';
import Calculator from './components/sections/Calculator';
import WhyUs from './components/sections/WhyUs';
import ServiceArea from './components/sections/ServiceArea';
import ForWorkers from './components/sections/ForWorkers';
import FAQSection from './components/sections/FAQSection';
import Contact from './components/sections/Contact';

// UI Components
import Modal from './components/ui/Modal';
import Toast from './components/ui/Toast';

export default function App() {
  const { reducedMotion, toggleReducedMotion } = useReducedMotion();
  
  // Enable Lenis only if reduced motion is false
  useLenis(!reducedMotion);

  // Modals state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isWorkerModalOpen, setIsWorkerModalOpen] = useState(false);
  const [calculatorPrefill, setCalculatorPrefill] = useState(null);

  // Toast state
  const [toast, setToast] = useState(null);

  const showToast = (title, message, type = 'success') => {
    setToast({ title, message, type });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const triggerConfetti = () => {
    if (reducedMotion) return;
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0F3876', '#2563EB', '#F59E0B', '#3B82F6'],
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleQuoteSubmit = (data) => {
    setIsQuoteModalOpen(false);
    triggerConfetti();
    showToast(
      'Inquiry Submitted Successfully!',
      `Thank you ${data.name}. Surendra Roy & Sachin Kumar will personally contact you at ${data.phone} within 2 hours.`,
      'success'
    );
  };

  const handleWorkerSubmit = (data) => {
    setIsWorkerModalOpen(false);
    triggerConfetti();
    showToast(
      'Worker Registration Received!',
      `ধন্যবাদ ${data.name}! আপনার আবেদন গৃহীত হয়েছে। আমাদের টিম আপনাকে ${data.phone} নম্বরে যোগাযোগ করবে।`,
      'success'
    );
  };

  const handleLockEstimate = (calcData) => {
    setCalculatorPrefill(calcData);
    setIsQuoteModalOpen(true);
    showToast(
      'Estimate Locked!',
      `Calculation for ${calcData.totalSlabArea} sq.ft (${calcData.crewSize} workers) locked. Please fill in your contact details.`,
      'info'
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-classic-700 selection:text-white font-sans">
      
      {/* Top Notification Bar in Classic Blue */}
      <TopBar reducedMotion={reducedMotion} toggleReducedMotion={toggleReducedMotion} />

      {/* Main Navigation Header in Crisp White */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenWorkerModal={() => setIsWorkerModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {/* Hero Section with Live Stats & Google Rating */}
        <Hero
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onOpenWorkerModal={() => setIsWorkerModalOpen(true)}
          reducedMotion={reducedMotion}
        />

        {/* Leadership & Heritage - Surendra Roy & Sachin Kumar */}
        <About reducedMotion={reducedMotion} />

        {/* Flagship Interactive Ruler Timeline (1986-2026) */}
        <RulerTimeline reducedMotion={reducedMotion} />

        {/* Services & Labour Solutions */}
        <Services
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onOpenWorkerModal={() => setIsWorkerModalOpen(true)}
          reducedMotion={reducedMotion}
        />

        {/* Interactive Civil & Labour Estimator */}
        <Calculator
          onLockEstimate={handleLockEstimate}
          reducedMotion={reducedMotion}
        />

        {/* 6 Trust Pillars & Verification Guarantee */}
        <WhyUs reducedMotion={reducedMotion} />

        {/* Howrah & Hooghly Operational Service Matrix */}
        <ServiceArea
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          reducedMotion={reducedMotion}
        />

        {/* Dedicated Worker Dignity & Saturday Weekly Payout Portal */}
        <ForWorkers
          onWorkerSubmit={handleWorkerSubmit}
          reducedMotion={reducedMotion}
        />

        {/* Frequently Asked Questions (SEO FAQs) */}
        <FAQSection reducedMotion={reducedMotion} />

        {/* Multi-Mode Contact & Direct Consultation Form with Google Map */}
        <Contact
          onQuoteSubmit={handleQuoteSubmit}
          prefilledData={calculatorPrefill}
          reducedMotion={reducedMotion}
        />
      </main>

      {/* Global Structured Footer in Classic Blue */}
      <Footer
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenWorkerModal={() => setIsWorkerModalOpen(true)}
      />

      {/* Quick Quote Modal */}
      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setCalculatorPrefill(null);
        }}
        title="Request Construction Quote / Labour Dispatch"
        subtitle={calculatorPrefill ? `Locked Estimate: ${calculatorPrefill.totalSlabArea} sq.ft (${calculatorPrefill.estimatedCostRange})` : "Direct inspection & rates from Surendra Roy & Sachin Kumar"}
        reducedMotion={reducedMotion}
      >
        <ModalQuoteForm
          onSubmit={handleQuoteSubmit}
          initialData={calculatorPrefill}
        />
      </Modal>

      {/* Worker Quick Callback Modal */}
      <Modal
        isOpen={isWorkerModalOpen}
        onClose={() => setIsWorkerModalOpen(false)}
        title="শ্রমিক ভাইদের সরাসরি কলব্যাক (Worker Callback)"
        subtitle="প্রতি শনিবার সঠিক পাওনা — রায় কনস্ট্রাকশন পরিবারের সাথে যুক্ত হোন"
        reducedMotion={reducedMotion}
      >
        <ModalWorkerForm onSubmit={handleWorkerSubmit} />
      </Modal>

      {/* Floating System Toast Alert */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        reducedMotion={reducedMotion}
      />

    </div>
  );
}

/**
 * Inline Modal Quote Form Component (Classic Blue & Crisp White)
 */
function ModalQuoteForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Bally, Howrah',
    serviceType: initialData ? 'RCC Residential Frame & Brickwork' : 'Turnkey Civil Construction',
    message: initialData ? `Calculated: ${initialData.totalSlabArea} sq.ft, ${initialData.crewSize} workers.` : '',
  });

  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">Your Full Name *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Debasis Roy"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
        />
        {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">Phone Number (10 Digits) *</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="e.g. 98305 XXXXX"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
        />
        {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">Site Location</label>
          <select
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-classic-600 focus:bg-white"
          >
            <option>Bally, Howrah</option>
            <option>Belur, Howrah</option>
            <option>Uttarpara, Hooghly</option>
            <option>Liluah, Howrah</option>
            <option>Salkia, Howrah</option>
            <option>Kona Expressway</option>
            <option>Dankuni / Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">Requirement</label>
          <select
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-classic-600 focus:bg-white"
          >
            <option>RCC Residential Frame</option>
            <option>Turnkey Civil Construction</option>
            <option>Skilled Rajmistri Gang Supply</option>
            <option>Shuttering & Bar Bending</option>
            <option>Structural Renovation</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">Notes / Area Details</label>
        <textarea
          rows="2"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Any specific instructions or estimated start date..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-classic-600 focus:bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-white bg-classic-850 hover:bg-classic-900 shadow-md shadow-classic-850/20 active:scale-98 transition-all"
      >
        Submit Quote Request
      </button>
    </form>
  );
}

/**
 * Inline Modal Worker Form Component
 */
function ModalWorkerForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    trade: 'Master Rajmistri',
    experienceYears: '3 to 5 Years',
  });

  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">আপনার নাম (Full Name) *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Ramesh Ghosh"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
        />
        {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">মোবাইল নম্বর (Phone Number) *</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="e.g. 98305 XXXXX"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-classic-600 focus:bg-white"
        />
        {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">কাজের ধরণ (Trade)</label>
          <select
            value={formData.trade}
            onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-classic-600 focus:bg-white"
          >
            <option>Master Rajmistri</option>
            <option>General Mason</option>
            <option>Shuttering Carpenter</option>
            <option>Bar Bender / Rebar</option>
            <option>Helper (যোগালী)</option>
            <option>Tiles Specialist</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">অভিজ্ঞতা (Exp.)</label>
          <select
            value={formData.experienceYears}
            onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-classic-600 focus:bg-white"
          >
            <option>0 to 2 Years</option>
            <option>3 to 5 Years</option>
            <option>5 to 10 Years</option>
            <option>10+ Years</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-white bg-classic-850 hover:bg-classic-900 shadow-md shadow-classic-850/20 active:scale-98 transition-all"
      >
        যোগদান জমা দিন (Submit Callback)
      </button>
    </form>
  );
}
