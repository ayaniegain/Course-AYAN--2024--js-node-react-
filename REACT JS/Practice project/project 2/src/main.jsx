import React, { useState, useEffect, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import jsonDataFetching from './context/index.js'
import TmemeColorContext from './context/TmemeColorContext.jsx'

export const ThemeContext = createContext('');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    jsonDataFetching().then(data => setTheme(data));
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <TmemeColorContext>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </TmemeColorContext>
)
