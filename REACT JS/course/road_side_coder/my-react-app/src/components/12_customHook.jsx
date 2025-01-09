import React from 'react'
import useCounter from '../customHook/useCounter'
import useTheme from '../customHook/useTheme'

function CustomHook() {

  let {inc,dec,res,count}=useCounter(0,2)
  let {toggle,themeclr}=useTheme("white")


  return (
    <div style={{ backgroundColor: themeclr, height: '100vh' }}>
     <div >
      <button  onClick={toggle} className='h-10 w-10 bg-slate-500 text-white text-2xl fixed right-10 top-2'>Click </button>
    </div>
    <div >
      <h2 className='p-2 text-3xl space-x-2 text-green-700'>count:{count}</h2>
      <button className='btn' onClick={inc}>Increment</button>
      <button className='btn' onClick={dec}>Decrement</button>
      <button className='btn' onClick={res}>Reset</button>
    </div>
   
    </div>
  )
}

export default CustomHook