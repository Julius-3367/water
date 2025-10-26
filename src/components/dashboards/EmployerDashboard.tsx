import React, { useState } from 'react';

const EmployerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('candidates');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066B3] to-[#4A9FD8] rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Employer Dashboard</h1>
        <p className="text-lg">Find and hire qualified candidates</p>
      </div>

      {/* KPIs */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Job Openings</p>
          <p className="text-3xl font-bold text-[#0066B3]">8</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Applications</p>
          <p className="text-3xl font-bold text-[#B8D430]">67</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Interviews</p>
          <p className="text-3xl font-bold text-[#0066B3]">12</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Hired (Month)</p>
          <p className="text-3xl font-bold text-[#B8D430]">5</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 px-6">
            {['candidates', 'jobs', 'applications'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-[#0066B3] text-[#0066B3]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'candidates' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#0066B3]">Browse Candidates</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <button className="bg-[#B8D430] text-white px-4 py-2 rounded-lg hover:bg-[#a0bd28]">
                    Search
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                        👤
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">Candidate {i}</h4>
                        <p className="text-sm text-gray-600">Homecare Worker Training</p>
                        <div className="flex gap-2 mt-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Certified</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Available</span>
                        </div>
                        <div className="mt-2 text-sm">
                          <p>Score: <span className="font-semibold">88%</span></p>
                          <p>Attendance: <span className="font-semibold">95%</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 bg-[#0066B3] text-white py-2 rounded hover:bg-[#004A7C]">
                        View Profile
                      </button>
                      <button className="flex-1 bg-[#B8D430] text-white py-2 rounded hover:bg-[#a0bd28]">
                        Shortlist
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'jobs' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#0066B3]">My Job Postings</h3>
                <button className="bg-[#B8D430] text-white px-4 py-2 rounded-lg hover:bg-[#a0bd28]">
                  Post New Job
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Homecare Worker', positions: 10, applications: 45, status: 'Open' },
                  { title: 'Electrician', positions: 5, applications: 22, status: 'Open' },
                ].map((job, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg">{job.title}</h4>
                        <p className="text-sm text-gray-600">Positions: {job.positions} | Applications: {job.applications}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">{job.status}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="text-[#0066B3] hover:underline text-sm">View Details</button>
                      <button className="text-[#0066B3] hover:underline text-sm">Edit</button>
                      <button className="text-red-600 hover:underline text-sm">Close</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <h3 className="text-xl font-bold text-[#0066B3] mb-4">Recent Applications</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-semibold">Candidate {i}</p>
                      <p className="text-sm text-gray-600">Applied for: Homecare Worker - 2 days ago</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-[#0066B3] text-white px-3 py-1 rounded text-sm hover:bg-[#004A7C]">
                        Review
                      </button>
                      <button className="bg-[#B8D430] text-white px-3 py-1 rounded text-sm hover:bg-[#a0bd28]">
                        Schedule Interview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;

