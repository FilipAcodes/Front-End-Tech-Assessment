import React, { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [addItem, setAddItem] = useState();

  return (
    <CartContext.Provider value={{ addItem, setAddItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
