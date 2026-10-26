import React from 'react';
import { Users, Mail, Sparkles, UserCheck } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

export const SecretariatSection: React.FC = () => {
  const { secretariat } = conferenceConfig;

  return (
    <section id="secretariat" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-celestial-ice/10 bg-space-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-celestial-ice/20 bg-space-800/60 mb-4">
            <Users className="w-3.5 h-3.5 text-celestial-ice" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-celestial-ice">
              Executive Leadership
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-metallic mb-6">
            The Secretariat
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-celestial-ice to-transparent mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            The governing body stewarding diplomatic excellence, academic fidelity, and seamless conference execution for AiG MUN 2026.
          </p>
        </div>

        {/* If Secretariat is NOT yet announced, show the prestigious announcement state */}
        {!secretariat.isAnnounced ? (
          <div className="max-w-4xl mx-auto">
            {/* Announcement Card */}
            <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-celestial-ice/20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(3,5,11,0.8)]">
              <div className="w-16 h-16 rounded-2xl bg-space-850 border border-celestial-ice/30 flex items-center justify-center mx-auto mb-6 text-celestial-ice shadow-[0_0_20px_rgba(140,206,255,0.2)]">
                <UserCheck className="w-8 h-8" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-sky-950/70 border border-sky-400/30 text-[10px] font-mono text-celestial-ice uppercase tracking-widest mb-4">
                Executive Appointments in Progress
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Secretariat to Be Announced
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-light">
                {secretariat.announcementNotice}
              </p>

              {/* Secretariat Structure Previews (without fake names) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {secretariat.members.map((member) => (
                  <div key={member.id} className="p-4 rounded-xl bg-space-850/80 border border-celestial-ice/15 space-y-2">
                    <span className="text-[10px] font-mono text-celestial-ice/70 uppercase tracking-wider block">
                      {member.division}
                    </span>
                    <h4 className="font-serif text-base font-bold text-white">
                      {member.role}
                    </h4>
                    <p className="text-xs text-slate-400 leading-snug">
                      {member.bio}
                    </p>
                    <div className="pt-2 text-[10px] font-mono text-slate-500 italic">
                      Appointment Pending
                    </div>
                  </div>
                ))}
              </div>

              {/* Join Secretariat / EB Callout */}
              <div className="mt-10 pt-8 border-t border-celestial-ice/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-slate-400">
                <Sparkles className="w-4 h-4 text-celestial-ice" />
                <span>Interested in joining our Secretariat or Executive Board?</span>
                <a 
                  href="#contact" 
                  className="px-3.5 py-1.5 rounded-lg border border-celestial-ice/30 hover:border-celestial-ice bg-space-800 text-white transition-colors"
                >
                  Contact Secretariat Desk
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Real Profile Cards Grid when announced */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secretariat.members.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl glass-panel glass-panel-hover p-6 flex flex-col justify-between border border-celestial-ice/20 group"
              >
                <div>
                  <div className="aspect-square rounded-xl bg-space-850 border border-celestial-ice/20 overflow-hidden mb-4 relative">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <Users className="w-12 h-12" />
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-celestial-ice uppercase tracking-wider block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  {member.bio && (
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-celestial-ice/10 flex items-center space-x-3 text-slate-400">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="hover:text-celestial-ice transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-celestial-ice transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
