# Backend Setup Guide - Node.js + MongoDB

This guide will help you set up the backend for the UMA-APP platform.

## Prerequisites

- Node.js 18+ installed
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn package manager

## Backend Structure

```
backend/
├── server.js           # Main server file
├── config/
│   └── db.js          # Database configuration
├── models/            # MongoDB models
│   ├── User.js
│   ├── Course.js
│   ├── Payment.js
│   ├── Certificate.js
│   └── Application.js
├── routes/            # API routes
│   ├── auth.js
│   ├── courses.js
│   ├── payments.js
│   └── applications.js
├── middleware/
│   └── auth.js        # Authentication middleware
└── package.json
```

## Installation Steps

### 1. Create Backend Directory

```bash
mkdir backend
cd backend
npm init -y
```

### 2. Install Dependencies

```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv
npm install --save-dev nodemon
```

### 3. Create .env File

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/uma-app
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

### 4. Create server.js

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/payments', require('./routes/payments'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 5. Create MongoDB Models

**models/User.js:**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['job_seeker', 'admin', 'trainer', 'employer', 'broker'],
    required: true 
  },
  nationalId: { type: String, required: true },
  referralCode: String,
  status: { 
    type: String, 
    enum: ['pending', 'active', 'suspended'],
    default: 'active'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
```

**models/Course.js:**
```javascript
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  duration: { type: String, default: '2 Weeks' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  capacity: { type: Number, required: true },
  enrolled: { type: Number, default: 0 },
  fee: { type: Number, required: true },
  commitmentFee: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['draft', 'active', 'completed', 'archived'],
    default: 'active'
  },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
```

### 6. Create API Routes

**routes/auth.js:**
```javascript
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/signup', async (req, res) => {
  try {
    const { email, password, ...userData } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      ...userData,
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
```

### 7. Update package.json Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### 8. Run Backend Server

```bash
npm run dev
```

## Connecting Frontend to Backend

Update `src/utils/auth.ts` in the frontend:

```typescript
const API_URL = 'http://localhost:5000/api';

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  
  if (!response.ok) {
    throw new Error('Invalid credentials');
  }
  
  const data = await response.json();
  localStorage.setItem('token', data.token);
  localStorage.setItem('currentUser', JSON.stringify(data.user));
  return data.user;
};
```

## Next Steps

1. Add payment gateway integration (M-Pesa, Stripe)
2. Implement email/SMS notifications
3. Add file upload for documents
4. Create admin panel API routes
5. Add data validation and error handling
6. Implement rate limiting and security measures
7. Set up production deployment

