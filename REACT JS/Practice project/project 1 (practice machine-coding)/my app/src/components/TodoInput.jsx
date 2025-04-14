import React, { useState } from 'react'
import { useContextFunc } from '../context/TodoContext'
import FormComp from './FormComp'

function TodoInput() {
    let {setTODOvalue}= useContextFunc()


  return (
   <>
   <FormComp setTODOvalue={setTODOvalue}/>
   </>
  )
}

export default TodoInput