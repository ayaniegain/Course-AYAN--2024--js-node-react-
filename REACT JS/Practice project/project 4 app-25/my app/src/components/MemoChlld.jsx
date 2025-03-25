import React, { useState } from "react";

function MemoChlld({ count3 }) {
  const [count4, setCount4] = useState(0);

  console.log("count3 child render⭐");

  function handleClick4() {
    console.log("count4 children sibling----➕");
    setCount4((prev) => prev + 1);
  }

  return (
    <>
      <div>MemoChlld counter3----- {count3}</div>
      <button
        onClick={handleClick4}
        className="border-2  border-yellow-400 px-6 py-2 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
      >
        click4 child
      </button>
      <div>MemoChlld sibling counter4----- {count4}</div>
    </>
  );
}


export const MemoizedChild= React.memo(MemoChlld)
