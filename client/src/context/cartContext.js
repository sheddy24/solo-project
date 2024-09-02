// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.id === newItem.id);
    
    if (!existingItem) {
      setCartItems([...cartItems, newItem]);
    } else {
      // Optionally, update quantity or inform the user it's already in the cart
      alert(`${newItem.productName} is already in the cart.`);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
