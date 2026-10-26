import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, Download, CheckCircle2 } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const ScheduleSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const { schedule } = conferenceConfig;

  const currentDayData = schedule.days.find(d => d.dayNumber === selectedDay) || schedule.days[0];

  // Helper function to generate an .ics file download for delegates
  const downloadCalendarEvent = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//AIC MUN//Official Conference 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:aicmun2026-conference@aicmun.org',
      'DTSTAMP:20261026T000000Z',
      'DTSTART:20261212T033000Z', // 09:00 IST = 03:30 UTC
      'DTEND:20261213T133000Z',   // 19:00 IST = 13:30 UTC
      'SUMMARY:AIC MUN 2026 (Model United Nations Conference)',
      'DESCRIPTION:AIC Model United Nations 2026 — Peace. Progress. Prosperity. Official two-day international conference.',
      'LOCATION:AIC MUN 2026 Venue (TBA)',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'AIC-MUN-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-celestial-ice/10 bg-space-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-celestial-ice/20 bg-space-800/60 mb-4">
            <Calendar className="w-3.5 h-3.5 text-celestial-ice" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-celestial-ice">
              Conference Itinerary
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-metallic mb-6">
            Two Days of Multilateralism
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-celestial-ice to-transparent mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            AIC MUN convenes over two immersive days of formal assemblies, intense caucus negotiations, and resolution balloting.
          </p>
        </div>

        {/* Schedule Notice Pill */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl glass-panel border border-sky-400/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <AlertCircle className="w-5 h-5 text-celestial-ice shrink-0" />
            <span className="text-xs text-slate-300">
              {schedule.announcementNotice}
            </span>
          </div>
          
          <button
            onClick={downloadCalendarEvent}
            className="shrink-0 px-4 py-2 rounded-lg border border-celestial-ice/30 hover:border-celestial-ice bg-space-800/80 hover:bg-space-700 text-slate-200 hover:text-white text-xs font-mono flex items-center space-x-2 transition-all cursor-pointer"
            aria-label="Add AIC MUN 2026 to your calendar"
          >
            <Download className="w-3.5 h-3.5 text-celestial-ice" />
            <span>Save to Calendar (.ics)</span>
          </button>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-space-900 border border-celestial-ice/20 shadow-lg">
            {schedule.days.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDay(day.dayNumber)}
                className={`px-6 sm:px-10 py-3 rounded-xl font-serif text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 cursor-pointer flex flex-col items-center ${
                  selectedDay === day.dayNumber
                    ? 'bg-gradient-to-r from-celestial-blue/40 via-space-800 to-celestial-blue/30 text-white border border-celestial-ice/40 shadow-[0_0_20px_rgba(140,206,255,0.25)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>Day 0{day.dayNumber}</span>
                <span className="text-[10px] font-mono font-normal tracking-widest uppercase opacity-75 mt-0.5">
                  {day.dateFormatted}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Day Theme Banner */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
            {currentDayData.dayOfWeek} Focus
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
            {currentDayData.theme}
          </h3>
        </div>

        {/* Visual Timeline Component */}
        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-8 before:absolute before:top-4 before:bottom-4 before:left-[19px] sm:before:left-[35px] before:w-[2px] before:bg-gradient-to-b before:from-sky-400 before:via-celestial-ice/40 before:to-transparent">
          <div className="space-y-8 sm:space-y-10">
            {currentDayData.slots.map((slot, index) => (
              <div key={index} className="relative flex items-start space-x-4 sm:space-x-6 group">
                
                {/* Orbital Node Pin */}
                <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-space-900 border-2 border-celestial-ice/40 group-hover:border-celestial-ice flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(140,206,255,0.2)] group-hover:shadow-[0_0_18px_rgba(140,206,255,0.5)] transition-all duration-300">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-celestial-ice group-hover:scale-125 transition-transform" />
                </div>

                {/* Timeline Content Card */}
                <div className="flex-1 p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover border border-celestial-ice/15">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-space-800 border border-celestial-ice/20 text-[11px] font-mono text-celestial-ice">
                      <Clock className="w-3 h-3" />
                      <span>{slot.time}</span>
                    </div>

                    {slot.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-sky-950/60 border border-sky-400/30 text-sky-300">
                        {slot.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-2 group-hover:text-celestial-ice transition-colors">
                    {slot.title}
                  </h4>

                  {slot.description && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {slot.description}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Confirmation Check */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-xl bg-space-900/60 border border-celestial-ice/10 text-center flex items-center justify-center space-x-2 text-xs text-slate-400 font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Full synchronized delegate timetable will be released with committee allocations.</span>
        </div>

      </div>
    </section>
  );
};
