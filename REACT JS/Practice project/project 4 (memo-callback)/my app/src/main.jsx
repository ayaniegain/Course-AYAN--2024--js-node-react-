import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleThemeContext from './context/ToggleThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ToggleThemeContext>
    <App />
  </ToggleThemeContext>,
)
