import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCurrentUser, logout } from '../utils/auth';
import { USER_ROLES } from '../utils/constants';
import JobSeekerDashboard from '../components/dashboards/JobSeekerDashboard';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import BrokerDashboard from '../components/dashboards/BrokerDashboard';
import EmployerDashboard from '../components/dashboards/EmployerDashboard';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const user = getCurrentUser();

  if (!user) {
    onNavigate('login');
    return null;
  }

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  const renderDashboard = () => {
    switch (user.role) {
      case USER_ROLES.JOB_SEEKER:
        return <JobSeekerDashboard />;
      case USER_ROLES.ADMIN:
        return <AdminDashboard />;
      case USER_ROLES.BROKER:
        return <BrokerDashboard />;
      case USER_ROLES.EMPLOYER:
        return <EmployerDashboard />;
      default:
        return <JobSeekerDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderDashboard()}
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;

