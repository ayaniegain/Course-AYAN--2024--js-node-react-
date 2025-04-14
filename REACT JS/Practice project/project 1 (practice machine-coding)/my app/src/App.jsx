import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from './page/Home'
import Abount from './page/Abount'
import Contact from './page/Contact'
import Nav from './page/Nav'
import Todo from './page/Todo'
import TodoContext from './context/TodoContext'

function App() {
  return (
    <TodoContext>
    <Nav/>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<Abount />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/todo" element={<Todo />} />
    </Routes>
      </TodoContext>
  )
}

export default App