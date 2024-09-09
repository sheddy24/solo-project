import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create Context
const LaptopContext = createContext();

// Create Provider Component
export const LaptopProvider = ({ children }) => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch laptops from API
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('http://localhost:3006/laptops'); // Replace with your API endpoint
        setLaptops(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLaptops();
  }, []);

  return (
    <LaptopContext.Provider value={{ laptops, loading, error }}>
      {children}
    </LaptopContext.Provider>
  );
};

// Custom Hook to use Laptop Context
export const useLaptops = () => useContext(LaptopContext);
