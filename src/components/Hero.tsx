import React from 'react';
import { IMAGES } from '../utils/constants';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#0066B3] to-[#4A9FD8] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={IMAGES.hero} alt="Dubai Skyline" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Work in <span className="text-[#B8D430]">DUBAI</span>
            </h1>
            <p className="text-3xl font-semibold">Join THE TEAM</p>
            <p className="text-xl text-gray-100">
              Professional labour mobility platform connecting skilled workers with international opportunities in the UAE and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => onNavigate?.('signup')}
                className="bg-[#B8D430] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a0bd28] transform hover:scale-105 transition shadow-lg"
              >
                Register Now
              </button>
              <button 
                onClick={() => onNavigate?.('jobs')}
                className="bg-white text-[#0066B3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition shadow-lg"
              >
                Browse Jobs
              </button>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/30">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#B8D430]">1000+</p>
                <p className="text-sm">Placed Workers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#B8D430]">50+</p>
                <p className="text-sm">Partner Companies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#B8D430]">95%</p>
                <p className="text-sm">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img src={IMAGES.userImage} alt="UMSL" className="w-full max-w-md mx-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

