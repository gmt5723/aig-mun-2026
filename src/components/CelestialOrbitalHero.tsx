import React, { useState, useEffect } from 'react';
import { Calendar, Compass, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const CelestialOrbitalHero: React.FC<HeroProps> = ({ onRegisterClick, onExploreClick }) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const targetDate = new Date(conferenceConfig.event.startDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Conference Introduction"
    >
      {/* Concentric Celestial Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Ring 1 - Outer faint */}
        <div className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] lg:w-[1200px] lg:h-[1200px] rounded-full border border-celestial-ice/10 animate-spin-very-slow opacity-60" />
        
        {/* Ring 2 - Elliptical tilted orbit */}
        <div 
          className="w-[450px] h-[750px] sm:w-[700px] sm:h-[1050px] rounded-full border border-celestial-ice/15 animate-spin-reverse-slow opacity-75"
          style={{ transform: 'rotate(25deg)' }}
        >
          {/* Micro satellite orb on the ring */}
          <div className="w-2.5 h-2.5 bg-celestial-ice rounded-full shadow-[0_0_12px_#8CCEFF] absolute top-12 left-1/4" />
        </div>

        {/* Ring 3 - Inner glowing orbit */}
        <div 
          className="w-[320px] h-[520px] sm:w-[500px] sm:h-[800px] rounded-full border border-sky-400/20 opacity-80"
          style={{ transform: 'rotate(-35deg)' }}
        >
          <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#ffffff] absolute bottom-16 right-1/4" />
        </div>

        {/* Core Atmospheric Light Glow */}
        <div className="absolute w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-gradient-to-b from-sky-500/10 via-blue-900/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Top Celestial Date Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-celestial-ice/25 bg-space-800/80 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(140,206,255,0.12)] animate-pulse-subtle">
          <Calendar className="w-4 h-4 text-celestial-ice" />
          <span className="text-xs sm:text-sm font-serif tracking-widest uppercase text-slate-200">
            {conferenceConfig.event.dates}
          </span>
          <span className="w-1 h-1 rounded-full bg-celestial-ice/60" />
          <span className="text-[11px] font-mono text-celestial-ice uppercase tracking-wider">
            {conferenceConfig.event.timezone}
          </span>
        </div>

        {/* Poster Brand Showcase & Monogram Section */}
        <div className="flex flex-col items-center mb-6">
          {/* Central Authentic Brand Logo Graphic */}
          <div className="relative group mb-3 max-w-[320px] sm:max-w-[420px] transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-blue-600/10 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <img 
              src="/assets/aig-mun-logo-transparent.png" 
              alt="AIC MUN — Peace. Progress. Prosperity." 
              className="relative w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(140,206,255,0.3)]"
            />
          </div>

          {/* Tagline Badge */}
          <div className="flex items-center justify-center space-x-3 mt-1 mb-4">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-celestial-ice/40" />
            <h2 className="font-serif text-sm sm:text-lg md:text-xl tracking-[0.25em] sm:tracking-[0.35em] text-metallic uppercase font-medium">
              {conferenceConfig.event.tagline}
            </h2>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-celestial-ice/40" />
          </div>

          <p className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light px-4">
            An elite Model United Nations assembly convening future diplomats, international strategists, and visionary leaders beneath the vastness of our shared planetary horizon.
          </p>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full max-w-2xl my-8 px-2">
          <div className="p-5 sm:p-7 rounded-2xl glass-panel shadow-[0_15px_40px_rgba(3,5,11,0.9)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-celestial-ice/40 to-transparent" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-celestial-ice">
                  Conference Countdown
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                12 Dec 2026 • 09:00 IST
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-space-850/80 border border-celestial-ice/15 shadow-inner"
                >
                  <span className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(140,206,255,0.4)]">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mt-2 mb-10">
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-celestial-ice/60 bg-gradient-to-r from-celestial-blue/60 via-space-800 to-celestial-blue/40 text-white font-medium text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(140,206,255,0.25)] hover:shadow-[0_0_35px_rgba(140,206,255,0.45)] hover:border-celestial-ice transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-celestial-ice"
          >
            <span>{conferenceConfig.registration.isOpen ? 'Register Now' : 'Join Delegate Registry'}</span>
            <ArrowRight className="w-4 h-4 text-celestial-ice group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-slate-700 hover:border-celestial-ice/40 bg-space-800/60 hover:bg-space-700/60 text-slate-300 hover:text-white font-medium text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            <Compass className="w-4 h-4 text-slate-400" />
            <span>Explore Conference</span>
          </button>
        </div>

        {/* Registration Status Pill */}
        <div className="inline-flex items-center space-x-2 text-xs text-slate-400 bg-space-900/60 px-4 py-1.5 rounded-full border border-celestial-ice/10">
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>
            {conferenceConfig.registration.isOpen 
              ? 'Official Delegate Applications Active' 
              : 'Official Delegate Registrations Opening Soon — Reserve Priority Notification'}
          </span>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onExploreClick();
            }}
            className="group flex flex-col items-center text-slate-500 hover:text-celestial-ice transition-colors cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2 group-hover:tracking-[0.25em] transition-all">
              Descend into Diplomacy
            </span>
            <div className="w-6 h-10 rounded-full border border-celestial-ice/30 flex items-start justify-center p-1 group-hover:border-celestial-ice/60 transition-colors shadow-[0_0_10px_rgba(140,206,255,0.1)]">
              <ChevronDown className="w-4 h-4 text-celestial-ice animate-bounce mt-1" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
