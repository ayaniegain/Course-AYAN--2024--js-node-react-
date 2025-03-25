import React, { useState, useMemo, useEffect } from "react";
import  { MemoizedChild } from "./MemoChlld";

function MemoComponent() {
  const [count1, setCount1] = useState(100);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);




  useEffect(() => {
    // console.log(count1 * 44)
  }, [count1])
  

  //   function handleClick1() {
  //       setCount1((prev) => prev + 1);
  // //     let i=0
  // //       while ( i<40000) {
  // //         console.log("count1----");

  // //     }
  // //     setCount1((prev) => prev + 1);
  //   }

  //   function handleClick2() {
  //     //     console.log("count2----");
  //     //     setCount2((prev) => prev + 1);
  //       }

  //       useEffect(() => {

  //         setCount1((prev) => prev + 1);

  //       }, [])

  //       useEffect(() => {

  //         setCount2((prev) => prev + 1);

  //       }, [])

  let newCount = useMemo(() => {
    // console.log("Calculating new count...");
    
    let i = 0;
    while (i < 4000000) {
      i++; 
    }

    return count1 + 1;
  }, [count1]);
  function handleClick1() {
    setCount1(newCount); 
  }

  function handleClick2() {
    console.log("count2----");
    setCount2((prev) => prev + 1);
  }

  function handleClick3() {
      setCount3((prev) => prev + 1);
    }
    
    console.log("count3 parent----✅");

    



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Count1: {count1}</h2>
      <h2 className="text-2xl font-semibold mb-4">Count2: {count2}</h2>

      <div className="flex gap-4">
        <button
          onClick={handleClick1}
          className="border-2 border-yellow-400 px-6 py-2 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Click 1
        </button>
        <button
          onClick={handleClick2}
          className="border-2 border-yellow-400 px-6 py-2 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Click 2
        </button>
      </div>
      <div className="my-2">
        <p className="text-red-600">React memo </p>
        <button
          onClick={handleClick3}
          className="border-2  border-yellow-400 px-6 py-2 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
        >
            click3 parent
        </button>
      <MemoizedChild count3={0} />
      </div>
    </div>
  );
}

export default MemoComponent
