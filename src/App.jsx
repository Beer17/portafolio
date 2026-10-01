import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import StackAndServices from './components/StackAndServices';
import FeaturedProjects from './components/FeaturedProjects';
import ScoutLeadership from './components/ScoutLeadership';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="app-main-wrapper" style={{ background: 'var(--bg-dark)', minHeight: '100vh', color: '#ffffff' }}>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <StackAndServices />
        <FeaturedProjects />
        <ScoutLeadership />
      </main>
      <ContactFooter />
    </div>
  );
}
