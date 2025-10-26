import React, { useState } from 'react';
import { IMAGES } from '../utils/constants';
import { getCurrentUser, logout } from '../utils/auth';

interface NavbarProps {
  onNavigate?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    if (onNavigate) onNavigate('home');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate?.('home')}>
            <img src={IMAGES.userImage} alt="UMSL Logo" className="h-10 w-auto" />
            <span className="ml-3 text-xl font-bold text-[#0066B3]">UMSL</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => onNavigate?.('home')} className="text-gray-700 hover:text-[#0066B3]">Home</button>
            <button onClick={() => onNavigate?.('jobs')} className="text-gray-700 hover:text-[#0066B3]">Jobs</button>
            <button onClick={() => onNavigate?.('courses')} className="text-gray-700 hover:text-[#0066B3]">Courses</button>
            <button onClick={() => onNavigate?.('about')} className="text-gray-700 hover:text-[#0066B3]">About</button>
            
            {currentUser ? (
              <>
                <button onClick={() => onNavigate?.('dashboard')} className="bg-[#B8D430] text-white px-4 py-2 rounded-lg hover:bg-[#a0bd28]">Dashboard</button>
                <button onClick={handleLogout} className="text-gray-700 hover:text-red-600">Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => onNavigate?.('login')} className="text-[#0066B3] hover:text-[#004A7C]">Login</button>
                <button onClick={() => onNavigate?.('signup')} className="bg-[#B8D430] text-white px-4 py-2 rounded-lg hover:bg-[#a0bd28]">Sign Up</button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => { onNavigate?.('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Home</button>
            <button onClick={() => { onNavigate?.('jobs'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Jobs</button>
            <button onClick={() => { onNavigate?.('courses'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Courses</button>
            {currentUser ? (
              <>
                <button onClick={() => { onNavigate?.('dashboard'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 bg-[#B8D430] text-white">Dashboard</button>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-red-600">Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => { onNavigate?.('login'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-[#0066B3]">Login</button>
                <button onClick={() => { onNavigate?.('signup'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 bg-[#B8D430] text-white">Sign Up</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

