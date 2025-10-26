import React from 'react';
import { jobCategories } from '../utils/mockData';

interface JobCategoriesProps {
  onNavigate?: (page: string) => void;
}

const JobCategories: React.FC<JobCategoriesProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0066B3] mb-4">Available Positions</h2>
          <p className="text-xl text-gray-600">Join our team in Dubai with competitive salaries and benefits</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {jobCategories.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <div className="h-64 overflow-hidden bg-gray-100">
                <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0066B3] mb-2">{job.title}</h3>
                {job.subtitle && <p className="text-sm text-gray-600 mb-3">{job.subtitle}</p>}
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#B8D430]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{job.gender}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#B8D430]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl font-bold text-[#B8D430]">Salary: {job.salary}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate?.('signup')}
                  className="w-full bg-[#0066B3] text-white py-3 rounded-lg font-semibold hover:bg-[#004A7C] transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#0066B3] to-[#4A9FD8] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Requirements to Qualify</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-[#B8D430] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Age 19-45 years</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-[#B8D430] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fast Visas, 2 years contract</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-[#B8D430] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Valid Passport & Good Conduct</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-[#B8D430] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Commission & Medical Fees apply</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-[#B8D430] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>UAE embassy attestation required</span>
            </div>
          </div>
          <p className="mt-6 text-lg font-semibold text-[#B8D430]">Transport, Food & Accommodation PROVIDED</p>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;

