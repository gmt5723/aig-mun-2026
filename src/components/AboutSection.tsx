import React from 'react';
import { Globe, Award, Sparkles, Compass } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-celestial-ice/10 bg-gradient-to-b from-space-900 via-space-850 to-space-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-celestial-ice/20 bg-space-800/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-celestial-ice" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-celestial-ice">
              The Multilateral Mission
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-metallic mb-6">
            Diplomacy from an Orbital Perspective
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-celestial-ice to-transparent mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Model United Nations is an internationally acclaimed academic simulation that empowers aspiring diplomats and critical thinkers to step into the roles of global ambassadors, confronting our world's most intricate dilemmas.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Poster Showcase & Planetary Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer atmospheric aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/20 via-blue-900/30 to-purple-900/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Frame Card */}
              <div className="relative rounded-2xl overflow-hidden border border-celestial-ice/25 bg-space-800 shadow-[0_20px_50px_rgba(3,5,11,0.9)] p-3">
                <div className="relative rounded-xl overflow-hidden aspect-[9/16] bg-space-950">
                  <img
                    src="/assets/aig-mun-poster.png"
                    alt="AiG MUN Official Conference Artwork"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950/90 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Metadata */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-space-900/80 backdrop-blur-md border border-celestial-ice/20 flex items-center justify-between">
                    <div>
                      <p className="font-serif text-xs font-semibold text-white tracking-wide">
                        {conferenceConfig.event.fullName}
                      </p>
                      <p className="text-[10px] font-mono text-celestial-ice/80">
                        {conferenceConfig.event.dates}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded bg-sky-500/20 border border-sky-400/30 text-[9px] font-mono uppercase text-sky-200">
                      Official Artwork
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Why Model United Nations Matters
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In an era characterized by rapid technological advancement and interconnected geopolitical systems, the challenges we face—from artificial intelligence governance to ecological conservation, peacebuilding, and human rights—transcend state borders.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At AiG MUN, delegates immerse themselves in real multilateral negotiations. Through structured parliamentary debate, unmoderated caucusing, and resolution drafting, participants discover that meaningful progress is not achieved through unilateral decree, but through principled compromise and articulate diplomacy.
              </p>
            </div>

            {/* Triad Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-celestial-ice/10">
              
              <div className="p-4 rounded-xl glass-panel glass-panel-hover border border-celestial-ice/15">
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-400/30 flex items-center justify-center mb-3">
                  <Globe className="w-4 h-4 text-celestial-ice" />
                </div>
                <h4 className="font-serif text-base font-bold text-white mb-1">
                  Peace
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Resolving global friction through de-escalation, conflict resolution, and international law.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel glass-panel-hover border border-celestial-ice/15">
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-400/30 flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4 text-celestial-ice" />
                </div>
                <h4 className="font-serif text-base font-bold text-white mb-1">
                  Progress
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pioneering visionary policies that embrace science, sustainability, and multilateral innovation.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel glass-panel-hover border border-celestial-ice/15">
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-400/30 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4 text-celestial-ice" />
                </div>
                <h4 className="font-serif text-base font-bold text-white mb-1">
                  Prosperity
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fostering equitable economic frameworks, global education, and dignity for all nations.
                </p>
              </div>

            </div>

            {/* Quote / Editorial Manifesto */}
            <div className="p-5 rounded-xl border-l-2 border-celestial-ice bg-space-800/40 relative">
              <blockquote className="text-sm sm:text-base italic text-slate-200">
                "When viewed from cosmic orbit, the Earth displays no borders—only an interconnected cradle of humanity. AiG MUN calls upon the youth of today to safeguard that fragile blue marble through the power of diplomacy."
              </blockquote>
              <p className="text-[11px] font-mono text-celestial-ice/80 mt-2 uppercase tracking-widest">
                — AiG MUN Secretariat Philosophy
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
