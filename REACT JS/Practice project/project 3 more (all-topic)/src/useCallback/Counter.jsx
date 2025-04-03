import React, { memo } from 'react'

function Counter({countValue,onClick}) {


    console.log(countValue)
  return (
    <div>  <span>example of use callback</span>
        <h2>total count {countValue}</h2>
        <button onClick={onClick}>click</button>
    </div>
  )
}

export default memo(Counter)