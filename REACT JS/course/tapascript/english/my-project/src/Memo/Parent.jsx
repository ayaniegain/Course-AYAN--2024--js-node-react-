import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [count, setcount] = useState(0)

function handleClick() {
    setcount((prev)=>prev+1)
}
console.log("parent rendering")

  return (
    <div>
        <p>this is Parent</p>
        <p>{count}</p>
        <button onClick={handleClick}>click</button>
        <Child header={"this is child header"}/>
    </div>
  )
}

export default Parent