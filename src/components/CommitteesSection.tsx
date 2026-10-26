import React, { useState } from 'react';
import { Layers, Clock, AlertCircle, BookOpen } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const CommitteesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { committees } = conferenceConfig;

  const categories = [
    'All',
    'General Assembly',
    'Specialized Agency',
    'Regional Body',
    'Crisis Committee',
    'International Press'
  ];

  const filteredCommittees = activeCategory === 'All'
    ? committees.items
    : committees.items.filter(item => item.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner Friendly':
        return 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30';
      case 'Intermediate':
        return 'text-sky-300 bg-sky-950/60 border-sky-500/30';
      case 'Advanced':
        return 'text-amber-300 bg-amber-950/60 border-amber-500/30';
      default:
        return 'text-slate-300 bg-slate-900/60 border-slate-700/30';
    }
  };

  return (
    <section id="committees" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-celestial-ice/10 bg-gradient-to-b from-space-900 via-space-850 to-space-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-celestial-ice/20 bg-space-800/60 mb-4">
            <Layers className="w-3.5 h-3.5 text-celestial-ice" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-celestial-ice">
              Academic Assemblies
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-metallic mb-6">
            Committees & Councils
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-celestial-ice to-transparent mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Step into the highest echelons of international governance. Below are the anticipated assembly bodies for AIC MUN 2026.
          </p>
        </div>

        {/* Official Status Notice Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl glass-panel border border-sky-400/20 shadow-[0_0_30px_rgba(140,206,255,0.08)] flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-400/30 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 text-celestial-ice" />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="font-serif font-bold text-white text-base">
                Committees Status:
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-[10px] font-mono text-celestial-ice uppercase tracking-wider">
                {committees.areAnnounced ? 'Official Matrices Published' : 'Official Agendas To Be Announced'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {committees.announcementNotice}
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-celestial-blue/30 text-white border border-celestial-ice/50 shadow-[0_0_15px_rgba(140,206,255,0.25)]'
                  : 'bg-space-800/60 text-slate-400 border border-transparent hover:text-slate-200 hover:border-celestial-ice/20'
              }`}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Committee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCommittees.map((committee) => (
            <div
              key={committee.id}
              className="group relative rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-celestial-ice/20 to-transparent group-hover:via-celestial-ice/60 transition-all duration-300" />
              
              <div>
                {/* Badges Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-space-800 border border-celestial-ice/20 text-slate-300">
                    {committee.category}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border ${getDifficultyColor(committee.difficulty)}`}>
                    {committee.difficulty}
                  </span>
                </div>

                {/* Short Monogram & Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-celestial-ice transition-colors">
                  {committee.shortName}
                </h3>
                <h4 className="text-xs text-slate-400 font-medium mb-4 leading-snug">
                  {committee.name}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
                  {committee.description}
                </p>

                {/* Agenda Box */}
                <div className="p-3.5 rounded-xl bg-space-950/70 border border-celestial-ice/15 mb-6">
                  <div className="flex items-center space-x-2 text-[10px] font-mono uppercase text-celestial-ice/80 mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Official Agenda</span>
                  </div>
                  <p className="text-xs text-slate-300 italic">
                    {committee.agenda}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-celestial-ice/10 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                  <BookOpen className="w-3.5 h-3.5 text-celestial-ice/60" />
                  <span className="text-[11px] font-mono">
                    {committee.guideUrl ? 'Background Guide' : 'Dossier TBA'}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-space-800/80 text-celestial-ice/70 border border-celestial-ice/20">
                  Matrix Releasing Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Delegate Information Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-400 font-mono">
            Want to recommend a committee or apply for Executive Board chairship?{' '}
            <a 
              href="#contact" 
              className="text-celestial-ice underline underline-offset-4 hover:text-white transition-colors"
            >
              Contact our Academic Directorate &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
