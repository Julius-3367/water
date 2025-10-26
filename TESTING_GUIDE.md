# Testing Guide - UMA-APP Platform

This guide will help you test all features of the UMA-APP platform.

## Getting Started

1. Start the development server:
```bash
npm run dev
```

2. Open your browser to `http://localhost:5173`

## Test Scenarios

### 1. Landing Page Navigation

**Test Steps:**
- ✅ Click on "UMSL" logo - should stay on home page
- ✅ Click "Home" in navbar - should stay on home page
- ✅ Click "Jobs" - should navigate to jobs page
- ✅ Click "Courses" - should navigate to courses page
- ✅ Click "Register Now" button in hero - should go to signup page
- ✅ Click "Browse Jobs" button in hero - should go to jobs page
- ✅ Click "Apply Now" on any job category card - should go to signup page
- ✅ Click "Start Your Journey Today" - should go to signup page
- ✅ Test mobile menu (resize browser) - menu should open/close

### 2. User Registration (Job Seeker)

**Test Steps:**
1. Click "Sign Up" in navbar
2. Fill in the form:
   - Full Name: "John Doe"
   - Email: "john@example.com"
   - Phone: "+254712345678"
   - Role: "Job Seeker"
   - National ID: "12345678"
   - Password: "Password123!"
   - Confirm Password: "Password123!"
   - Check "Terms & Conditions"
3. Click "Create Account"
4. Should see success message and redirect to login

**Expected Results:**
- ✅ Form validates all fields
- ✅ Password mismatch shows error
- ✅ Terms checkbox required
- ✅ Account created successfully
- ✅ Redirects to login page

### 3. User Login

**Test Steps:**
1. Click "Login" in navbar
2. Enter credentials:
   - Email: "john@example.com"
   - Password: "Password123!"
3. Click "Login"

**Expected Results:**
- ✅ Invalid credentials show error
- ✅ Valid credentials redirect to dashboard
- ✅ "Remember Me" checkbox works
- ✅ User stays logged in

### 4. Job Seeker Dashboard

**Test Steps:**
1. Login as job seeker
2. View dashboard sections:
   - Welcome header with user name
   - Key metrics cards (Progress, Attendance, Assessment, Certificate)
   - Course details section
   - Progress bar showing completion
   - Placement journey tracker
   - Quick action buttons

**Expected Results:**
- ✅ All sections display correctly
- ✅ User name shows in welcome message
- ✅ Metrics display sample data
- ✅ Progress bar shows 75%
- ✅ Placement tracker shows current stage
- ✅ Quick action buttons are clickable

### 5. Admin Dashboard

**Test Steps:**
1. Create admin account (role: "Admin")
2. Login and view dashboard
3. Test tabs:
   - Overview - shows recent activity
   - Candidates - shows candidate list
   - Courses - shows course management
   - Payments - shows payment records
   - Brokers - shows broker management

**Expected Results:**
- ✅ KPIs display correctly
- ✅ All tabs switch content
- ✅ Tables display sample data
- ✅ Action buttons are visible
- ✅ "Add" buttons present

### 6. Broker Dashboard

**Test Steps:**
1. Create broker account (role: "Broker")
2. Login and view dashboard
3. Check sections:
   - Referral code displayed
   - Referral link with copy button
   - Share buttons (WhatsApp, Email)
   - Referrals table
   - Commission summary

**Expected Results:**
- ✅ Unique referral code shown
- ✅ Referral link includes code
- ✅ Share buttons clickable
- ✅ Referrals table shows sample data
- ✅ Commission summary displays totals
- ✅ "Request Payment" button works

### 7. Employer Dashboard

**Test Steps:**
1. Create employer account (role: "Employer")
2. Login and view dashboard
3. Test tabs:
   - Candidates - browse and search
   - Jobs - view job postings
   - Applications - review applications

**Expected Results:**
- ✅ KPIs show job metrics
- ✅ Candidate cards display
- ✅ Search functionality present
- ✅ "Shortlist" and "View Profile" buttons work
- ✅ Job postings show details
- ✅ Applications list displays

### 8. Courses Page

**Test Steps:**
1. Navigate to Courses page
2. View available courses
3. Click "Enroll Now" on a course
4. Modal should appear

**Expected Results:**
- ✅ Course cards display correctly
- ✅ Course details show (dates, fees, capacity)
- ✅ Enrollment modal opens
- ✅ Modal shows commitment fee
- ✅ "Sign Up" and "Login" buttons work
- ✅ "Cancel" closes modal

### 9. Jobs Page

**Test Steps:**
1. Navigate to Jobs page
2. View job listings
3. Click "Apply Now" on a job
4. Modal should appear with job details

**Expected Results:**
- ✅ Job cards display correctly
- ✅ Job details show (salary, location, benefits)
- ✅ Application modal opens
- ✅ Requirements and benefits listed
- ✅ "View Courses" and "Register Now" buttons work
- ✅ "Close" closes modal

### 10. Logout Functionality

**Test Steps:**
1. Login as any user
2. Click "Logout" in navbar
3. Should redirect to home page

**Expected Results:**
- ✅ User logged out successfully
- ✅ Redirects to landing page
- ✅ "Login" and "Sign Up" buttons visible again
- ✅ Cannot access dashboard without login

## Browser Testing

Test on multiple browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Responsive Testing

Test on different screen sizes:
- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

## Known Limitations (Demo Version)

1. **Data Persistence**: Uses localStorage (data clears on browser clear)
2. **Payment Processing**: Mock payment (no real gateway integration)
3. **Email/SMS**: No actual notifications sent
4. **File Upload**: Not implemented in demo
5. **Real-time Updates**: No WebSocket connection

## Next Steps for Production

1. Connect to real backend API
2. Integrate payment gateway (M-Pesa, Stripe)
3. Add email/SMS notification service
4. Implement file upload for documents
5. Add real-time notifications
6. Implement data validation on backend
7. Add security measures (rate limiting, CSRF protection)
8. Deploy to production server

## Troubleshooting

**Issue: Page not loading**
- Solution: Check if dev server is running (`npm run dev`)

**Issue: Login not working**
- Solution: Create account first, then login with same credentials

**Issue: Dashboard not showing**
- Solution: Make sure you're logged in and have correct role

**Issue: Styles not applying**
- Solution: Check if Tailwind CSS is properly configured

## Support

For issues or questions:
- Email: unitedmanpowerservicesltd@gmail.com
- Phone: +254 713 128 853

