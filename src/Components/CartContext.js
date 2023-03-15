import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [addItem, setAddItem] = useState([{ items: [] }]);

  const addItemWithDupeCheck = (item) => {
    const existingItem = addItem[0].items.find((i) => i._id === item._id);
    if (existingItem) {
      const updatedItems = addItem[0].items.map((i) =>
        i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setAddItem([{ items: updatedItems }]);
    } else {
      setAddItem([{ items: [...addItem[0].items, { ...item, quantity: 1 }] }]);
    }
  };

  return (
    <CartContext.Provider value={{ addItem, setAddItem, addItemWithDupeCheck }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
