import React, { useState, useEffect } from 'react';
import { HardHat, Menu, X, PhoneCall, Calculator, Users, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { COMPANY_INFO } from '../../data/siteData';

export default function Navbar({ onOpenQuoteModal, onOpenWorkerModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'timeline', 'services', 'calculator', 'why-us', 'for-workers', 'service-area', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Leadership', href: '#about', id: 'about' },
    { label: '40Y Timeline', href: '#timeline', id: 'timeline' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Estimator', href: '#calculator', id: 'calculator' },
    { label: 'For Workers', href: '#for-workers', id: 'for-workers', badge: 'শনিবার পাওনা' },
    { label: 'Service Areas', href: '#service-area', id: 'service-area' },
    { label: 'FAQs', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-3' 
        : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/80 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand in Classic Blue */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-classic-600 rounded-lg p-1">
            <div className="relative w-11 h-11 rounded-xl bg-classic-850 flex items-center justify-center shadow-md group-hover:bg-classic-900 transition-colors">
              <HardHat className="w-6 h-6 text-amber-400" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 text-slate-950 font-mono font-bold text-[9px] flex items-center justify-center rounded-full border border-white">
                40
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-classic-950 tracking-tight leading-none">
                  ROY <span className="text-classic-700 font-semibold text-lg sm:text-xl">CONSTRUCTION</span>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-medium">
                  Surendra Roy & Sachin Kumar
                </span>
                <span className="text-slate-300 text-[10px]">•</span>
                <span className="text-[10px] text-classic-700 font-semibold">Bally, Howrah</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-classic-850 bg-classic-50 font-bold'
                      : 'text-slate-600 hover:text-classic-850 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] bg-amber-100 text-amber-800 rounded-full border border-amber-300 font-medium">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-classic-850 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenWorkerModal}
              type="button"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-classic-850 hover:text-classic-950 bg-classic-50 hover:bg-classic-100 border border-classic-200 transition-all shadow-sm"
            >
              <Users className="w-3.5 h-3.5 text-classic-600" />
              <span>Hire Labour</span>
            </button>

            <button
              onClick={onOpenQuoteModal}
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-classic-850 hover:bg-classic-900 shadow-md shadow-classic-850/20 active:scale-95 transition-all"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-classic-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-classic-850" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-classic-50 text-classic-850 font-bold border border-classic-200'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-classic-900'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-3 grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWorkerModal();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-classic-50 border border-classic-200 text-xs font-semibold text-classic-850 text-center flex items-center justify-center gap-1.5"
              >
                <Users className="w-3.5 h-3.5 text-classic-600" />
                <span>Hire Labour</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-classic-850 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
