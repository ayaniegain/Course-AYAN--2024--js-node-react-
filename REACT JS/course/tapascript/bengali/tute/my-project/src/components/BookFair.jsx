import React from 'react'
import Header from './Header'
import Search from './Search'
import BookList from './BookList'

function BookFair() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Header/>
      <Search/>
      <BookList/>
    </div>
  )
}

export default BookFair