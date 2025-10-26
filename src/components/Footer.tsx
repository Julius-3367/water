import React from 'react';
import { IMAGES } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0066B3] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={IMAGES.userImage} alt="UMSL Logo" className="h-12 w-auto mb-4 bg-white rounded p-1" />
            <h3 className="text-xl font-bold mb-2">United Manpower Services Limited</h3>
            <p className="text-sm text-gray-200">Connecting talent with opportunities across the globe.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#B8D430] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#B8D430] transition">Our Services</a></li>
              <li><a href="#" className="hover:text-[#B8D430] transition">Available Jobs</a></li>
              <li><a href="#" className="hover:text-[#B8D430] transition">Training Courses</a></li>
              <li><a href="#" className="hover:text-[#B8D430] transition">Success Stories</a></li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#B8D430] transition">Register Now</a></li>
              <li><a href="#" className="hover:text-[#B8D430] transition">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-[#B8D430] transition">Training Programs</a></li>
              <li><a href="#" className="hover:text-[#B8D430] transition">Requirements</a></li>
              <li><a href="#" className="hover:text-[#B8D430] transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +254 713 128 853
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                unitedmanpowerservicesltd@gmail.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; 2025 United Manpower Services Limited. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-sm hover:text-[#B8D430]">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-[#B8D430]">Terms of Service</a>
            <a href="#" className="text-sm hover:text-[#B8D430]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

