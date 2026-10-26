import React from 'react';
import { Shield, Users, Mic, Brain, Handshake, Globe, Sparkles } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

const iconMap = {
  Shield: Shield,
  Users: Users,
  Mic: Mic,
  Brain: Brain,
  Handshake: Handshake,
  Globe: Globe,
};

export const WhyParticipateSection: React.FC = () => {
  return (
    <section id="why-participate" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950/70 border-t border-celestial-ice/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-celestial-ice/20 bg-space-800/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-celestial-ice" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-celestial-ice">
              Curriculum for Future Leaders
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-metallic mb-6">
            {conferenceConfig.whyParticipate.title}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-celestial-ice to-transparent mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            {conferenceConfig.whyParticipate.subtitle}
          </p>
        </div>

        {/* 6 High-End Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {conferenceConfig.whyParticipate.skills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Globe;

            return (
              <div
                key={index}
                className="group relative rounded-2xl glass-panel glass-panel-hover p-7 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Glow Line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-celestial-ice/20 to-transparent group-hover:via-celestial-ice/60 transition-all duration-300" />
                
                {/* Background Subtle Gradient Orb on Hover */}
                <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-400/15 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-space-800 border border-celestial-ice/20 flex items-center justify-center text-celestial-ice group-hover:border-celestial-ice group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(140,206,255,0.3)] transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-space-850 border border-celestial-ice/15 text-slate-400 group-hover:text-celestial-ice group-hover:border-celestial-ice/30 transition-colors">
                      {skill.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-celestial-ice transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-celestial-ice/10 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                  <span>Pillar 0{index + 1}</span>
                  <span className="text-celestial-ice/60 group-hover:translate-x-1 transition-transform">
                    explore &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
