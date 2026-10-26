import React from 'react';
import { ArrowUp, Mail, MapPin, Calendar, Globe, Sparkles } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const ContactFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Mission', href: '#about' },
    { name: 'Why Participate', href: '#why-participate' },
    { name: 'Committees', href: '#committees' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Accreditation', href: '#registration' },
    { name: 'The Secretariat', href: '#secretariat' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer id="contact" className="relative border-t border-celestial-ice/15 bg-[#020307] pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Nebula Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-sky-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-celestial-ice/10">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-full border border-celestial-ice/40 bg-space-800 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(140,206,255,0.25)]">
                <img 
                  src="/assets/aig-mun-logo-transparent.png" 
                  alt="AiG MUN Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-metallic">
                  {conferenceConfig.event.name}
                </h3>
                <p className="text-[10px] font-mono tracking-widest uppercase text-celestial-ice/80">
                  {conferenceConfig.event.edition}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-sm">
              Conferring beneath the shared canopy of space, empowering the next generation of global leaders through the bedrock principles of international diplomacy.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-space-900 border border-celestial-ice/15">
              <Sparkles className="w-3.5 h-3.5 text-celestial-ice" />
              <span className="font-serif text-xs font-semibold tracking-wider text-slate-200 uppercase">
                {conferenceConfig.event.tagline}
              </span>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{conferenceConfig.event.dates}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{conferenceConfig.event.venue.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Convening in {conferenceConfig.event.timezone}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-white border-b border-celestial-ice/10 pb-2">
              Conference Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-celestial-ice transition-colors flex items-center space-x-1 group"
                  >
                    <span className="text-slate-600 group-hover:text-celestial-ice">&rsaquo;</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Communication & Socials (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-white border-b border-celestial-ice/10 pb-2">
              Liaison & Communications
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {conferenceConfig.contact.supportNote}
            </p>

            <div className="p-3.5 rounded-xl bg-space-900 border border-celestial-ice/20 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-400/30 flex items-center justify-center text-celestial-ice shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Official Email</span>
                <a
                  href={`mailto:${conferenceConfig.contact.email}`}
                  className="text-xs font-mono text-slate-200 hover:text-celestial-ice transition-colors truncate block"
                >
                  {conferenceConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Social Channels Preview (configurable) */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                Official Channels
              </span>
              <div className="flex flex-wrap gap-2">
                {conferenceConfig.contact.socials.map((social, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-space-900 border border-celestial-ice/10 text-[11px] font-mono text-slate-400"
                    title={social.isLive ? social.handle : 'To Be Announced'}
                  >
                    {social.platform}: <span className="text-slate-500">{social.handle}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {conferenceConfig.event.year} {conferenceConfig.event.fullName}. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-slate-400 font-serif">
              {conferenceConfig.event.tagline}
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-celestial-ice/20 hover:border-celestial-ice bg-space-900 text-slate-300 hover:text-white transition-all cursor-pointer group"
              aria-label="Back to top"
            >
              <span className="text-[10px] uppercase tracking-wider">Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-celestial-ice group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
