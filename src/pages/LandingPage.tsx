import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobCategories from '../components/JobCategories';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate} />
      <JobCategories onNavigate={onNavigate} />
      <Features />
      <HowItWorks onNavigate={onNavigate} />
      <Footer />
    </div>
  );
};

export default LandingPage;

