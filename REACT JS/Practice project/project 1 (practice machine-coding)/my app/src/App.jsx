import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from './page/Home'
import Abount from './page/Abount'
import Contact from './page/Contact'
import Nav from './page/Nav'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<Abount />} />
     <Route path="/contact" element={<Contact />} />
    </Routes>
      </>
  )
}

export default App