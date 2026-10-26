import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Bell, CheckCircle, ShieldAlert, Users, Award, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { conferenceConfig } from '../config/conferenceConfig';

export const RegistrationSection: React.FC = () => {
  const { registration, event } = conferenceConfig;
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [rolePreference, setRolePreference] = useState('Delegate');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notificationError, setNotificationError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user already joined notification list in this browser
    const stored = localStorage.getItem('aic_mun_notification_registered');
    if (stored) {
      setIsSubscribed(true);
    }
  }, []);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotificationError('');

    if (!emailInput || !emailInput.includes('@')) {
      setNotificationError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: nameInput || 'Prospective Delegate',
        email: emailInput,
        preference: rolePreference,
        registeredAt: new Date().toISOString(),
        subject: `New AIC MUN 2026 Delegate Alert Registration: ${nameInput || emailInput}`,
      };

      // If an external email webhook / Google Form endpoint is configured, forward submission
      if (registration.notificationWebhookUrl) {
        try {
          await fetch(registration.notificationWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
          });
        } catch (err) {
          console.warn('Webhook transmission notice:', err);
        }
      }

      // Save notification entry in localStorage as client-side backup
      const existingList = JSON.parse(localStorage.getItem('aic_mun_registry_emails') || '[]');
      existingList.push(payload);
      localStorage.setItem('aic_mun_registry_emails', JSON.stringify(existingList));
      localStorage.setItem('aic_mun_notification_registered', 'true');
      setIsSubscribed(true);

      // Trigger celebratory celestial confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#8CCEFF', '#FFFFFF', '#4A7CBE', '#D4AF37'],
      });
    } catch {
      setIsSubscribed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-celestial-ice/10 bg-gradient-to-b from-space-950 via-space-900 to-space-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-celestial-ice/20 bg-space-800/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-celestial-ice" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-celestial-ice">
              Delegate Accreditation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-metallic mb-6">
            Join the Assembly
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-celestial-ice to-transparent mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Secure your credentials for {event.fullName}. Convening on {event.dates} in {event.timezone}.
          </p>
        </div>

        {/* Main Registration Card */}
        <div className="relative rounded-3xl glass-panel border border-celestial-ice/25 overflow-hidden shadow-[0_25px_60px_rgba(3,5,11,0.9)] p-6 sm:p-10 lg:p-12 mb-16">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-celestial-ice/60 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Status & Terms */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/40 text-celestial-ice text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-celestial-ice animate-ping" />
                <span>{registration.isOpen ? 'Registration Open' : registration.statusText}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {registration.isOpen 
                  ? 'Official Delegate Applications are Now Live' 
                  : 'Registrations Opening Soon for AIC MUN 2026'}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Whether you represent an institution as a head delegate, attend as an independent scholar, or advise a youth delegation, AIC MUN offers an unmatched standard of academic rigor and diplomatic refinement.
              </p>

              {/* Fee & Deadline Table Placeholders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-space-850 border border-celestial-ice/15">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Delegate Fee</span>
                  <span className="font-serif text-base font-bold text-slate-200">{registration.delegateFee}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-space-850 border border-celestial-ice/15">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Priority Deadline</span>
                  <span className="font-serif text-base font-bold text-slate-200">{registration.earlyBirdDeadline}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-space-850 border border-celestial-ice/15">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Regular Deadline</span>
                  <span className="font-serif text-base font-bold text-slate-200">{registration.regularDeadline}</span>
                </div>
              </div>

              {/* Registration Notes */}
              <div className="space-y-2 pt-2">
                {registration.notes.map((note, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Active Link OR Priority Notification Form */}
            <div className="lg:col-span-5">
              {registration.isOpen && registration.externalUrl ? (
                /* Active Registration Button */
                <div className="p-6 rounded-2xl bg-space-800/80 border border-celestial-ice/30 text-center space-y-5">
                  <p className="text-sm text-slate-200 font-medium">
                    The official registration form is active. Click below to enter the registration portal.
                  </p>
                  <a
                    href={registration.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-celestial-ice bg-gradient-to-r from-sky-500 to-blue-700 text-white font-serif font-bold tracking-wider uppercase text-sm shadow-[0_0_30px_rgba(140,206,255,0.4)] hover:shadow-[0_0_40px_rgba(140,206,255,0.6)] transition-all"
                  >
                    <span>Proceed to Application</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <p className="text-[11px] font-mono text-slate-400">
                    Secure Google Forms / Delegate Portal
                  </p>
                </div>
              ) : (
                /* Early Priority Notification Registry */
                <div className="p-6 sm:p-7 rounded-2xl bg-space-850 border border-celestial-ice/25 shadow-xl space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-400/30 flex items-center justify-center text-celestial-ice">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-white">
                        Priority Alert Registry
                      </h4>
                      <p className="text-[11px] font-mono text-celestial-ice/80">
                        Be first to receive committee matrices
                      </p>
                    </div>
                  </div>

                  {isSubscribed ? (
                    <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2 animate-in fade-in duration-300">
                      <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                      <h5 className="font-serif text-sm font-bold text-white">
                        You're on the Priority Registry!
                      </h5>
                      <p className="text-xs text-slate-300">
                        You will receive an instant alert as soon as the official delegate application portal opens.
                      </p>
                      <button
                        onClick={() => setIsSubscribed(false)}
                        className="text-[10px] font-mono text-slate-400 underline hover:text-white pt-2 cursor-pointer"
                      >
                        Register another contact
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleNotifySubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={nameInput}
                          onChange={(e) => setNameInput(e.target.value)}
                          placeholder="e.g. Delegate Alexander Wright"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-space-950 border border-celestial-ice/20 focus:border-celestial-ice focus:outline-none text-white text-xs placeholder-slate-600 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1">
                          Email Address <span className="text-sky-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          placeholder="delegate@institution.edu"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-space-950 border border-celestial-ice/20 focus:border-celestial-ice focus:outline-none text-white text-xs placeholder-slate-600 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1">
                          Participation Type
                        </label>
                        <select
                          value={rolePreference}
                          onChange={(e) => setRolePreference(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-space-950 border border-celestial-ice/20 focus:border-celestial-ice focus:outline-none text-slate-200 text-xs font-sans"
                        >
                          <option value="Delegate">Individual Delegate</option>
                          <option value="Delegation">Institutional Delegation Leader</option>
                          <option value="Advisor">Faculty Advisor</option>
                          <option value="EB">Executive Board Applicant</option>
                          <option value="Press">International Press Corps</option>
                        </select>
                      </div>

                      {notificationError && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          {notificationError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-lg border border-celestial-ice/50 bg-gradient-to-r from-celestial-blue/60 via-space-800 to-celestial-blue/50 text-white font-serif text-xs uppercase tracking-widest font-semibold hover:border-celestial-ice hover:shadow-[0_0_20px_rgba(140,206,255,0.3)] transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? 'Transmitting Registration...' : 'Notify Me on Launch'}
                      </button>

                      <p className="text-[10px] text-slate-500 font-mono text-center">
                        Zero spam. Strictly conference announcements & early invitations.
                      </p>
                    </form>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* 3 Delegation Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-celestial-ice/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-space-850 border border-celestial-ice/20 flex items-center justify-center text-celestial-ice">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white">Individual Delegates</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Students wishing to represent a sovereign nation independently. Receive full access to your assigned committee, study guides, and awards eligibility.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-celestial-ice/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-space-850 border border-celestial-ice/20 flex items-center justify-center text-celestial-ice">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white">School & College Delegations</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Represent your academic institution with a cohesive contingent of delegates. Compete for the prestigious Best Delegation Trophy.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-celestial-ice/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-space-850 border border-celestial-ice/20 flex items-center justify-center text-celestial-ice">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white">Executive Board & Press</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Seasoned MUN veterans and journalists can apply for committee chairship or journalistic coverage in the AiG International Press Corps.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
