import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Why Participate', href: '#why-participate' },
    { name: 'Committees', href: '#committees' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-sky-400 via-celestial-ice to-blue-500 z-50 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(140,206,255,0.7)]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#03050B]/85 backdrop-blur-md border-b border-celestial-ice/15 shadow-[0_8px_32px_rgba(3,5,11,0.8)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Monogram */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center space-x-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-celestial-ice/50 rounded-lg p-1"
              aria-label="AIC MUN Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-celestial-ice/30 bg-space-800/80 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(140,206,255,0.2)] group-hover:border-celestial-ice/70 transition-colors">
                <img 
                  src="/assets/aig-mun-logo-transparent.png" 
                  alt="AIC MUN Emblem" 
                  className="w-full h-full object-contain p-0.5 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-metallic">
                  {conferenceConfig.event.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-celestial-ice/70 font-mono -mt-1">
                  2026 Edition
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs uppercase tracking-widest text-slate-300 hover:text-celestial-ice transition-colors font-medium rounded-md hover:bg-celestial-ice/5 focus:outline-none focus:ring-1 focus:ring-celestial-ice/40"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onRegisterClick}
                className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full border border-celestial-ice/40 bg-gradient-to-r from-celestial-blue/30 via-space-800 to-celestial-blue/20 text-white text-xs uppercase tracking-widest font-semibold shadow-[0_0_20px_rgba(140,206,255,0.15)] hover:shadow-[0_0_25px_rgba(140,206,255,0.35)] hover:border-celestial-ice transition-all duration-300 flex items-center space-x-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-celestial-ice"
              >
                <span className="relative z-10 flex items-center gap-1.5 text-slate-100 group-hover:text-white">
                  <Sparkles className="w-3.5 h-3.5 text-celestial-ice animate-pulse" />
                  {conferenceConfig.registration.isOpen ? 'Register Now' : 'Register / Notify'}
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-celestial-ice group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-celestial-ice/10 via-celestial-ice/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-celestial-ice hover:bg-space-800/60 border border-celestial-ice/20 transition-colors focus:outline-none focus:ring-2 focus:ring-celestial-ice"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-celestial-ice/20 bg-[#060A16]/95 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-lg text-sm uppercase tracking-wider font-medium text-slate-200 hover:text-celestial-ice hover:bg-space-700/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-celestial-ice/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRegisterClick();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border border-celestial-ice/40 bg-gradient-to-r from-celestial-blue/40 to-space-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lg shadow-sky-950/40"
                >
                  <Sparkles className="w-4 h-4 text-celestial-ice" />
                  <span>{conferenceConfig.registration.isOpen ? 'Register Now' : 'Delegate Registration'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
