import React from 'react';
import { getCurrentUser } from '../../utils/auth';

const JobSeekerDashboard: React.FC = () => {
  const user = getCurrentUser();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#0066B3] to-[#4A9FD8] rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user?.fullName}!</h1>
        <p className="text-lg">User ID: {user?.id}</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl mb-2">📚</div>
          <p className="text-gray-600 text-sm">Course Progress</p>
          <p className="text-2xl font-bold text-[#0066B3]">75%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl mb-2">📅</div>
          <p className="text-gray-600 text-sm">Attendance</p>
          <p className="text-2xl font-bold text-[#B8D430]">13/14 days</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl mb-2">📝</div>
          <p className="text-gray-600 text-sm">Assessment</p>
          <p className="text-2xl font-bold text-[#0066B3]">85%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl mb-2">🎓</div>
          <p className="text-gray-600 text-sm">Certificate</p>
          <p className="text-2xl font-bold text-[#B8D430]">Pending</p>
        </div>
      </div>

      {/* Course Details */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-[#0066B3] mb-4">My Course Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Course Name</p>
            <p className="font-semibold">Homecare Worker Training - October 2025</p>
          </div>
          <div>
            <p className="text-gray-600">Duration</p>
            <p className="font-semibold">2 Weeks (14 Days)</p>
          </div>
          <div>
            <p className="text-gray-600">Start Date</p>
            <p className="font-semibold">28 October 2025</p>
          </div>
          <div>
            <p className="text-gray-600">End Date</p>
            <p className="font-semibold">8 November 2025</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>Day 10 of 14</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-[#B8D430] h-3 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      {/* Placement Status */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-[#0066B3] mb-4">Placement Journey</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#B8D430] rounded-full flex items-center justify-center text-white font-bold mb-2">✓</div>
            <p className="text-xs">Registration</p>
          </div>
          <div className="flex-1 h-1 bg-[#B8D430]"></div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#B8D430] rounded-full flex items-center justify-center text-white font-bold mb-2">✓</div>
            <p className="text-xs">Training</p>
          </div>
          <div className="flex-1 h-1 bg-[#B8D430]"></div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#0066B3] rounded-full flex items-center justify-center text-white font-bold mb-2">3</div>
            <p className="text-xs">Assessment</p>
          </div>
          <div className="flex-1 h-1 bg-gray-300"></div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mb-2">4</div>
            <p className="text-xs">Vetting</p>
          </div>
          <div className="flex-1 h-1 bg-gray-300"></div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mb-2">5</div>
            <p className="text-xs">Placement</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <button className="bg-[#0066B3] text-white p-4 rounded-lg hover:bg-[#004A7C] transition">
          📄 View Certificate
        </button>
        <button className="bg-[#B8D430] text-white p-4 rounded-lg hover:bg-[#a0bd28] transition">
          💼 Browse Jobs
        </button>
        <button className="bg-[#0066B3] text-white p-4 rounded-lg hover:bg-[#004A7C] transition">
          📞 Contact Support
        </button>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;

