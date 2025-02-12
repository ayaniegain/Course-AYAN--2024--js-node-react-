import React, { useEffect, useRef, useState } from "react";

function Counter() {
  const inputRef = useRef(0);
  const focusRef = useRef(true);

  const [text, settext] = useState("")
  const [count, seCount] = useState()
 
  useEffect(() => {

    inputRef.current=inputRef.current+1
    focusRef.current.focus()
    
  })
  


  return <div>
    <label>Enter Name</label>
    <br />
    <input value={text} ref={focusRef} type="text" placeholder="enter name" className="border-2 border-gray-600"  onChange={(e)=>settext(e.target.value)}/>
    <h2>
    {inputRef.current} 
    <button onClick={()=>seCount(count+1)}>click</button>
    </h2>
  </div>;
}

export default Counter;
