import React from 'react';
import { getCurrentUser } from '../../utils/auth';

const BrokerDashboard: React.FC = () => {
  const user = getCurrentUser();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066B3] to-[#4A9FD8] rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Broker Dashboard</h1>
        <p className="text-lg">Track your referrals and commissions</p>
        <p className="text-sm mt-2">Referral Code: <span className="font-bold text-[#B8D430]">{user?.id}</span></p>
      </div>

      {/* KPIs */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Total Referrals</p>
          <p className="text-3xl font-bold text-[#0066B3]">23</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Active Trainees</p>
          <p className="text-3xl font-bold text-[#B8D430]">8</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Total Commissions</p>
          <p className="text-3xl font-bold text-[#0066B3]">KES 45,000</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm mb-1">Pending Payment</p>
          <p className="text-3xl font-bold text-[#B8D430]">KES 15,000</p>
        </div>
      </div>

      {/* Referral Link */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-[#0066B3] mb-4">Your Referral Link</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={`https://uma-app.com/signup?ref=${user?.id}`}
            readOnly
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
          />
          <button className="bg-[#B8D430] text-white px-6 py-2 rounded-lg hover:bg-[#a0bd28]">
            Copy
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="bg-[#0066B3] text-white px-4 py-2 rounded-lg hover:bg-[#004A7C] flex items-center">
            📱 Share via WhatsApp
          </button>
          <button className="bg-[#0066B3] text-white px-4 py-2 rounded-lg hover:bg-[#004A7C] flex items-center">
            📧 Share via Email
          </button>
        </div>
      </div>

      {/* My Referrals */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-[#0066B3] mb-4">My Referrals</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Enrollment Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Commission</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Mary Achieng', course: 'HCW-Oct', date: '20 Oct 2025', status: 'Completed', commission: 3000 },
                { name: 'John Omondi', course: 'HCW-Oct', date: '21 Oct 2025', status: 'In Progress', commission: 3000 },
                { name: 'Jane Mwangi', course: 'HCW-Nov', date: '15 Nov 2025', status: 'Enrolled', commission: 3000 },
              ].map((referral, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-3">{referral.name}</td>
                  <td className="px-4 py-3">{referral.course}</td>
                  <td className="px-4 py-3">{referral.date}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      referral.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      referral.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {referral.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold">KES {referral.commission.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Commission Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-[#0066B3] mb-4">Commission Summary</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <span>Total Earned</span>
            <span className="font-bold text-[#0066B3]">KES 45,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <span>Total Paid</span>
            <span className="font-bold text-green-600">KES 30,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <span>Balance Pending</span>
            <span className="font-bold text-[#B8D430]">KES 15,000</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-[#B8D430] text-white py-3 rounded-lg hover:bg-[#a0bd28]">
          Request Payment
        </button>
      </div>
    </div>
  );
};

export default BrokerDashboard;

