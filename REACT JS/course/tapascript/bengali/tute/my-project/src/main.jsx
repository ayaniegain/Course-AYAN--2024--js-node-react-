import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookContextDetails from './context/user.context.jsx'

createRoot(document.getElementById('root')).render(
  <BookContextDetails>
    <App />
  </BookContextDetails>,
)
