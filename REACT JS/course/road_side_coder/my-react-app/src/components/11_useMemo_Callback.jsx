import React, { useCallback, useMemo, useState } from 'react'

function MemoandCallBack() {
  const [counter,setCounter]=useState(0)
  const [counter2,setCounter2]=useState(10)


const expensiveCalc=useCallback(()=>{
  console.log("expensive calc")
  return counter*(counter**counter)
},[counter])


// const expensiveCalc=useMemo (()=>{
//   console.log("expensive calc")
//   return counter*(counter**counter)
// },[counter])





  return (
    <>
    <div>counter2 :{counter2}</div>
    <div>Exp counter :{expensiveCalc()}</div>
    <button className='btn' onClick={()=>setCounter(counter+1)}>inc</button>
    <button  className="btn !bg-green-600" onClick={()=>setCounter2(counter2-1)}>dec</button>
    </>
  )
}

export default MemoandCallBack