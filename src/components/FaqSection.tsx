import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Eligibility & Registration', 'Preparation', 'Rules & Conduct'];

  const filteredFaqs = conferenceConfig.faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-celestial-ice/10 bg-gradient-to-b from-space-950 via-space-900 to-space-950">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-celestial-ice/20 bg-space-800/60 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-celestial-ice" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-celestial-ice">
              Inquiries & Guidance
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-metallic mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-celestial-ice to-transparent mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Essential guidelines for prospective delegates, faculty advisors, and first-time participants.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search delegate questions (e.g., beginner, attire, procedure)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-space-850/80 border border-celestial-ice/20 focus:border-celestial-ice focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[11px] font-mono text-slate-400 hover:text-white absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-celestial-blue/30 text-white border border-celestial-ice/50 shadow-[0_0_12px_rgba(140,206,255,0.2)]'
                    : 'bg-space-800/60 text-slate-400 border border-transparent hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="Conference FAQ List">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 rounded-2xl glass-panel text-center text-slate-400 text-sm font-mono">
              No matching questions found. Try refining your search query.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-space-850/90 border-celestial-ice/40 shadow-[0_8px_25px_rgba(3,5,11,0.6)]'
                      : 'bg-space-900/60 border-celestial-ice/15 hover:border-celestial-ice/30'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-celestial-ice/50 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      <span className="text-xs font-mono text-celestial-ice/70 shrink-0">
                        Q{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-sm sm:text-base font-semibold text-slate-100">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`p-1.5 rounded-full bg-space-800 border border-celestial-ice/20 text-celestial-ice transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-sky-950 border-celestial-ice/50' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-celestial-ice/10 pt-3 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Note */}
        <div className="mt-12 p-6 rounded-2xl bg-space-900/50 border border-celestial-ice/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-celestial-ice shrink-0" />
            <span>Have a specific query not covered here?</span>
          </div>
          <a
            href={`mailto:${conferenceConfig.contact.email}`}
            className="px-4 py-2 rounded-lg border border-celestial-ice/30 hover:border-celestial-ice bg-space-800 text-xs font-mono text-slate-200 hover:text-white transition-colors"
          >
            Email Support Desk &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
