import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ToggleThemeContext({ children }) {
  let [theme, setTheme] = useState(false);

  function toggleSwitchTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleSwitchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ToggleThemeContext;

export function useThemeContext() {
  return useContext(ThemeContext);
}
