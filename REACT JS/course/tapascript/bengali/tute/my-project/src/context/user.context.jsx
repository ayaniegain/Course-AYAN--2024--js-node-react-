import React, { useReducer, useState } from "react";
import { createContext } from "react";
import data from "../data/data.json";

export const CartContext = createContext();

function BookContextDetails({ children }) {
  // const [cartItems, setcartItems] = useState(data)

  function reducer(state, action) {
  
    switch (action.type) {
      case "ADD_BOOK":
        return [...state, { ...action.payload }];
    }
  }

  const [state, dispatch] = useReducer(reducer, data);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default BookContextDetails;
