import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoResult from '../components/TodoResult'

function Todo() {
  return (
    <div>
        <h1>TODO APPLICATION</h1>

        <div>
            <TodoInput/>
            <TodoResult/>
        </div>


    </div>
  )
}

export default Todo