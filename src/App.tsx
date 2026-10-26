import React from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { Navbar } from './components/Navbar';
import { CelestialOrbitalHero } from './components/CelestialOrbitalHero';
import { AboutSection } from './components/AboutSection';
import { WhyParticipateSection } from './components/WhyParticipateSection';
import { CommitteesSection } from './components/CommitteesSection';
import { ScheduleSection } from './components/ScheduleSection';
import { RegistrationSection } from './components/RegistrationSection';
import { SecretariatSection } from './components/SecretariatSection';
import { FaqSection } from './components/FaqSection';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  const scrollToRegistration = () => {
    const el = document.getElementById('registration');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#03050B] text-[#E2E8F0] selection:bg-celestial-ice/20 selection:text-celestial-ice">
      {/* 2D Canvas Interactive Starfield & Meteors */}
      <StarfieldCanvas />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar onRegisterClick={scrollToRegistration} />

        {/* Hero Section */}
        <main className="flex-grow">
          <CelestialOrbitalHero 
            onRegisterClick={scrollToRegistration}
            onExploreClick={scrollToAbout}
          />

          {/* About Section */}
          <AboutSection />

          {/* Why Participate Section */}
          <WhyParticipateSection />

          {/* Committees Section */}
          <CommitteesSection />

          {/* Schedule Section */}
          <ScheduleSection />

          {/* Registration Section */}
          <RegistrationSection />

          {/* Secretariat Section */}
          <SecretariatSection />

          {/* Frequently Asked Questions */}
          <FaqSection />
        </main>

        {/* Contact & Footer */}
        <ContactFooter />
      </div>
    </div>
  );
};

export default App;
