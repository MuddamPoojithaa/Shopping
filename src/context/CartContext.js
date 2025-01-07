// src/context/CartContext.js

import React, { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext(); 

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If it exists, update the quantity or return the previous state
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      // If it doesn't exist, add the product to the cart
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to calculate the total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalAmount, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};
