import React, { useState } from 'react';
import OneChild from './OneChild';
import { useCallback } from 'react';

function OneParent() {
  let [counter,setCounter]=useState(0)
  console.log("render parent");


  let handleClick=useCallback(()=>{
    setCounter(prevCounter => prevCounter + 1);
  }, [counter]); 


  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Parent useCallback Counter {counter}</h2>
      <OneChild  handleClick={handleClick}/>
     
    </div>
  );
}

export default OneParent;
