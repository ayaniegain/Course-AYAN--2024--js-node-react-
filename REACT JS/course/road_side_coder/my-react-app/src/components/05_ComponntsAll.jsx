import React, { useRef, useState } from "react";

function Component() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const val = useRef('')

  function incCount() {
    setCount((e) => e + 1);
  }

function handleChange(e){
  // setInput(e.target.value)

  setInput(val.current.value)
}

  return (
    <>
      <div>Count : {count}</div>
      <div>Input : {input}</div>
      <button onClick={incCount}>inc</button>

      {/* <input type="text" value={input} onChange={handleChange} /> */}
      <input type="text" ref={val} onChange={handleChange} />
    </>
  );
}

export default Component;
