import React, { useEffect, useRef, useState } from "react";

//current
//uncontrolled
//mutable references
//accassaing focus
// storing mutabe value that causing re-renders.
//caching values to avoid re-initiazion on re-renders

function CompREF() {
  let [count, setCount] = useState(0);

  let id=897766
  const countref = useRef(0);
  const store = useRef(id);
  const txtRef = useRef(null);

  const inputRef=useRef(null)


  const handleTextChanges=()=>{

    if (txtRef.current) {
      
      
      txtRef.current.innerText ="fine"
    }

  }

  return (
    <>
    <div>
      CompREF
      <h2>ref: {countref.current}</h2>
      <h2>state: {count}</h2>
      <button
        className="bg-slate-400 h-8 w-10"
        onClick={() => {
          countref.current += 1;
        }}
      >
        inc ref
      </button>
      <button
        className="bg-slate-400 h-8 w-10"
        onClick={() => setCount((count) => count + 1)}
      >
        inc state
      </button>

      {/* accessing dom element */}

      <div>
        <h2  ref ={txtRef}>hello how are you?</h2>
      </div>

      <p>storing state value if rneder {store.current}</p>

      <button  className="bg-red-400 h-8 w-10" onClick={handleTextChanges}>txt-cng </button>
    </div>
      <div>
        <input type="text" ref={inputRef} className="border-2 border-blue-700" placeholder="text" />
      </div>

      <button  className="bg-red-400 h-8 w-10" onClick={()=>inputRef.current.focus()}>click </button>
    </>
  );
}

export default CompREF;
// 5.5 start useContext