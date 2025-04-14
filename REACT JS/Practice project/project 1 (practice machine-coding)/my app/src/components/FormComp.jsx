import React, { useState } from 'react'

function FormComp({setTODOvalue}) {

  
  let [data,setData]= useState("")
  
      function handleSubmit(e) {
          e.preventDefault()
          setTODOvalue(data)
      }

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='my todo' value={data} onChange={(e)=>setData(e.target.value)} />
    <button type='submit'>ADD</button>
</form>
  )
}

export default FormComp