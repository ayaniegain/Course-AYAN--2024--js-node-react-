import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register'
import './App.css'
import {  Routes, Route } from "react-router";
function App() {

  return (
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
 
  )
}

export default App
