import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockCourses } from '../utils/mockData';

interface CoursesPageProps {
  onNavigate: (page: string) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const handleEnroll = (course: any) => {
    setSelectedCourse(course);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0066B3] mb-4">Available Training Courses</h1>
          <p className="text-xl text-gray-600">Professional 2-week training programs for international employment</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mockCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#0066B3] to-[#4A9FD8] p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-sm">Course Code: {course.code}</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-600 text-sm">Duration</p>
                    <p className="font-semibold">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Start Date</p>
                    <p className="font-semibold">{new Date(course.startDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Capacity</p>
                    <p className="font-semibold">{course.enrolled}/{course.capacity}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Status</p>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      {course.status}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <p className="text-gray-700 mb-2">{course.description}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Course Fee:</span>
                    <span className="text-xl font-bold text-[#0066B3]">KES {course.fee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Commitment Fee:</span>
                    <span className="text-lg font-bold text-[#B8D430]">KES {course.commitmentFee.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleEnroll(course)}
                  className="w-full bg-[#B8D430] text-white py-3 rounded-lg font-semibold hover:bg-[#a0bd28] transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-[#0066B3] mb-4">Enroll in Course</h3>
            <p className="text-gray-600 mb-4">
              You are enrolling in <strong>{selectedCourse.title}</strong>
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2">Commitment Fee Required:</p>
              <p className="text-2xl font-bold text-[#B8D430]">KES {selectedCourse.commitmentFee.toLocaleString()}</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Please login or create an account to proceed with enrollment and payment.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('signup')}
                className="flex-1 bg-[#B8D430] text-white py-2 rounded-lg hover:bg-[#a0bd28]"
              >
                Sign Up
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="flex-1 bg-[#0066B3] text-white py-2 rounded-lg hover:bg-[#004A7C]"
              >
                Login
              </button>
            </div>
            <button
              onClick={() => setSelectedCourse(null)}
              className="w-full mt-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CoursesPage;

