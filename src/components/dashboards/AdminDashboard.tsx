import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066B3] to-[#4A9FD8] rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-lg">Manage all aspects of the UMSL platform</p>
      </div>

      {/* KPIs */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Total Enrollments</p>
          <p className="text-3xl font-bold text-[#0066B3]">1,247</p>
          <p className="text-xs text-green-600 mt-1">↑ 12% this month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Active Trainees</p>
          <p className="text-3xl font-bold text-[#B8D430]">156</p>
          <p className="text-xs text-gray-600 mt-1">8 courses running</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Revenue (Month)</p>
          <p className="text-3xl font-bold text-[#0066B3]">KES 2.4M</p>
          <p className="text-xs text-green-600 mt-1">↑ 8% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Placement Rate</p>
          <p className="text-3xl font-bold text-[#B8D430]">87%</p>
          <p className="text-xs text-gray-600 mt-1">Target: 90%</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 px-6">
            {['overview', 'candidates', 'courses', 'payments', 'brokers'].map(tab => (
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
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0066B3]">Recent Activity</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#B8D430] rounded-full flex items-center justify-center text-white mr-3">
                        {i}
                      </div>
                      <div>
                        <p className="font-semibold">New enrollment: Mary Achieng</p>
                        <p className="text-sm text-gray-600">Homecare Worker Training - 2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-[#0066B3] hover:underline">View</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'candidates' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#0066B3]">Candidate Management</h3>
                <button className="bg-[#B8D430] text-white px-4 py-2 rounded-lg hover:bg-[#a0bd28]">
                  Add Candidate
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">ID</th>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Course</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map(i => (
                      <tr key={i} className="border-b">
                        <td className="px-4 py-3">UMA-JS-{i}</td>
                        <td className="px-4 py-3">Student {i}</td>
                        <td className="px-4 py-3">HCW-Oct</td>
                        <td className="px-4 py-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-[#0066B3] hover:underline text-sm">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#0066B3]">Course Management</h3>
                <button className="bg-[#B8D430] text-white px-4 py-2 rounded-lg hover:bg-[#a0bd28]">
                  Create Course
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map(i => (
                  <div key={i} className="border rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2">Homecare Worker Training</h4>
                    <p className="text-sm text-gray-600 mb-2">Start: 28 Oct 2025 | Duration: 2 weeks</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Enrolled: 48/50</span>
                      <button className="text-[#0066B3] hover:underline text-sm">Manage</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div>
              <h3 className="text-xl font-bold text-[#0066B3] mb-4">Payment Records</h3>
              <div className="space-y-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-semibold">Payment #{i}00{i}</p>
                      <p className="text-sm text-gray-600">Student {i} - KES 15,000</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Paid</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'brokers' && (
            <div>
              <h3 className="text-xl font-bold text-[#0066B3] mb-4">Broker Management</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Broker</th>
                      <th className="px-4 py-2 text-left">Referrals</th>
                      <th className="px-4 py-2 text-left">Commission</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map(i => (
                      <tr key={i} className="border-b">
                        <td className="px-4 py-3">Broker {i}</td>
                        <td className="px-4 py-3">{i * 5}</td>
                        <td className="px-4 py-3">KES {i * 15000}</td>
                        <td className="px-4 py-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Active</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

