# UMA-APP - Professional Labour Mobility Platform

A comprehensive, role-based digital platform designed to streamline the entire labour mobility lifecycle—from candidate enrollment and training through certification, vetting, and international placement.

## Features

- **Multi-Role Authentication**: Job Seekers, Admins, Trainers, Employers, and Brokers
- **Course Management**: 2-week training programs with enrollment and payment
- **Dashboard System**: Role-specific dashboards for each user type
- **Referral Tracking**: Built-in broker commission management
- **Job Placement**: International job opportunities in UAE and beyond
- **Responsive Design**: Mobile-friendly interface with UMSL branding

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **State Management**: localStorage (for demo purposes)
- **Routing**: Custom page navigation system
- **Styling**: Tailwind CSS with UMSL brand colors

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Modern web browser

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## User Roles & Test Accounts

Create accounts with different roles to test the system:

- **Job Seeker**: Register to enroll in courses and track training progress
- **Admin**: Manage courses, candidates, payments, and brokers
- **Broker**: Track referrals and commissions
- **Employer**: Browse candidates and post job openings

## Key Pages

- **Landing Page**: Hero section with job categories and features
- **Sign Up**: Multi-role registration with validation
- **Login**: Secure authentication with role-based routing
- **Dashboard**: Role-specific dashboards (5 different types)
- **Courses**: Browse and enroll in training programs

## Brand Colors

- Primary Blue: #0066B3
- Secondary Lime Green: #B8D430
- Dark Blue: #004A7C
- Light Blue: #4A9FD8

## Project Structure

```
src/
├── components/
│   ├── dashboards/     # Role-specific dashboard components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   └── ...
├── pages/
│   ├── LandingPage.tsx
│   ├── SignupPage.tsx
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   └── CoursesPage.tsx
├── utils/
│   ├── auth.ts         # Authentication functions
│   ├── constants.ts    # App constants
│   └── mockData.ts     # Mock data
└── AppLayout.tsx       # Main app layout
```

## Next Steps for Production

1. **Backend Integration**: Connect to Node.js/Express backend with MongoDB
2. **Payment Gateway**: Integrate M-Pesa, Stripe, or Flutterwave
3. **Email/SMS**: Add notification services
4. **File Upload**: Implement document upload for certificates
5. **Real-time Updates**: Add WebSocket for live notifications
6. **Testing**: Add unit and integration tests
7. **Deployment**: Deploy to production server

## Contact

For more information:
- Phone: +254 713 128 853
- Email: unitedmanpowerservicesltd@gmail.com

