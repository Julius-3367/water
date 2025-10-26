import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { jobCategories } from '../utils/mockData';

interface JobsPageProps {
  onNavigate: (page: string) => void;
}

const JobsPage: React.FC<JobsPageProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobs = [
    {
      id: 1,
      title: 'Cleaner - Recycling Company',
      company: 'Al Noor Recycling LLC',
      location: 'Dubai, UAE',
      salary: '1,300 AED',
      gender: 'Both Gender',
      positions: 15,
      type: 'Full-time',
      contract: '2 years',
      benefits: ['Accommodation', 'Food', 'Transport', 'Medical Insurance'],
      requirements: ['Age 19-45', 'Valid Passport', 'Good Conduct Certificate', 'Medical Fitness'],
    },
    {
      id: 2,
      title: 'Electrician',
      company: 'Gulf Technical Services',
      location: 'Abu Dhabi, UAE',
      salary: '1,500 AED',
      gender: 'Males Only',
      positions: 8,
      type: 'Full-time',
      contract: '2 years',
      benefits: ['Accommodation', 'Food', 'Transport', 'Medical Insurance', 'Annual Leave'],
      requirements: ['Age 19-45', 'Valid Passport', 'Electrician Certificate', 'Experience Required'],
    },
    {
      id: 3,
      title: 'Welder',
      company: 'Emirates Construction Group',
      location: 'Sharjah, UAE',
      salary: '1,500 AED',
      gender: 'Males Only',
      positions: 10,
      type: 'Full-time',
      contract: '2 years',
      benefits: ['Accommodation', 'Food', 'Transport', 'Medical Insurance'],
      requirements: ['Age 19-45', 'Valid Passport', 'Welding Certificate', '2+ years experience'],
    },
    {
      id: 4,
      title: 'Construction Helper',
      company: 'Dubai Building Solutions',
      location: 'Dubai, UAE',
      salary: '1,000-1,200 AED',
      gender: 'Males Only',
      positions: 20,
      type: 'Full-time',
      contract: '2 years',
      benefits: ['Accommodation', 'Food', 'Transport', 'Medical Insurance'],
      requirements: ['Age 19-45', 'Valid Passport', 'Good Conduct Certificate', 'Physical Fitness'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0066B3] mb-4">Available Job Opportunities</h1>
          <p className="text-xl text-gray-600">International positions in UAE with competitive benefits</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map(job => (
            <div key={job.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-r from-[#0066B3] to-[#4A9FD8] p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                <p className="text-sm">{job.company}</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#B8D430]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#B8D430]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{job.gender}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#B8D430]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg font-bold text-[#B8D430]">{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#B8D430]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span className="text-sm">{job.positions} positions</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Benefits:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, i) => (
                      <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-[#B8D430] text-white py-3 rounded-lg font-semibold hover:bg-[#a0bd28] transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-[#0066B3] mb-4">{selectedJob.title}</h3>
            <p className="text-gray-600 mb-4">{selectedJob.company} - {selectedJob.location}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Job Details</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p><strong>Salary:</strong> {selectedJob.salary}</p>
                <p><strong>Contract:</strong> {selectedJob.contract}</p>
                <p><strong>Type:</strong> {selectedJob.type}</p>
                <p><strong>Positions:</strong> {selectedJob.positions}</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Requirements</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {selectedJob.requirements.map((req: string, i: number) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.benefits.map((benefit: string, i: number) => (
                  <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> You must complete our training program and obtain certification before applying for jobs. 
                Please register and enroll in a course first.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('courses')}
                className="flex-1 bg-[#B8D430] text-white py-2 rounded-lg hover:bg-[#a0bd28]"
              >
                View Courses
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="flex-1 bg-[#0066B3] text-white py-2 rounded-lg hover:bg-[#004A7C]"
              >
                Register Now
              </button>
            </div>
            <button
              onClick={() => setSelectedJob(null)}
              className="w-full mt-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default JobsPage;

