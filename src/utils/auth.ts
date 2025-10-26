import { USER_ROLES } from './constants';

// Mock authentication functions (replace with real API calls)
export const login = async (email: string, password: string) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
};

export const signup = async (userData: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const exists = users.find((u: any) => u.email === userData.email);
      
      if (exists) {
        reject(new Error('Email already exists'));
      } else {
        const newUser = {
          ...userData,
          id: `UMA-${userData.role.toUpperCase()}-${Date.now()}`,
          createdAt: new Date().toISOString(),
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        resolve(newUser);
      }
    }, 500);
  });
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!getCurrentUser();
};

