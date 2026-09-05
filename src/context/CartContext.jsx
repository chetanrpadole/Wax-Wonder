/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('wil-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lastAddedItem, setLastAddedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('wil-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1) => {
    let finalQty = quantity;

    setItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id);
      if (existingIndex > -1) {
        finalQty = prev[existingIndex].quantity + quantity;
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: finalQty,
        };
        return next;
      }
      return [...prev, { ...product, quantity }];
    });

    setLastAddedItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
      addedQuantity: quantity,
      totalQuantity: finalQty,
      timestamp: Date.now(),
    });
  };

  const clearLastAddedItem = () => setLastAddedItem(null);

  const removeFromCart = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  const getTotal = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getItemCount = () =>
    items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
        lastAddedItem,
        clearLastAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
