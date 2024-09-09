import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the AuthContext
const AuthContext = createContext();

// Hook to access AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  // Function to log in the user
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3006/test/login', {
        email,
        password,
      });

      // Set the user details in the context after a successful login
      setUser(response.data);

      // Store user details in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear the user from localStorage
  };

  // Optionally use useEffect to clear the user if localStorage is cleared (refresh session)
  useEffect(() => {
    if (!user) {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
