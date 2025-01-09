import React, { useContext, useState } from "react";
import { createContext } from "react";
export const CounterContext = createContext(0);

export const useContextFunc = () => {
  const count = useContext(CounterContext);

  return count;
};

function Context({ children }) {
  const [count, setcount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setcount }}>
      {children}
    </CounterContext.Provider>
  );
}

export default Context;
