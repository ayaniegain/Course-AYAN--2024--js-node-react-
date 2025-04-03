import React, { useEffect, useRef, useState } from "react";

function Hooks() {
  let counterValue = useRef(0);
  let divref = useRef("");
  let inputElem = useRef();

  const [, setDummyState] = useState(0);

  useEffect(() => {
    inputElem.current.focus();
  }, []);

  const handleClick = () => {
    counterValue.current++;
    setDummyState((prev) => prev + 1);
    // console.log("Counter:", counterValue.current);
    // console.log("Div Element:", divref.current);
  };

  return (
    <>
      <span style={{ color: "red", paddingRight: "20px" }}>
        this is hook to directely target to dom{" "}
      </span>
      <div>Hooks counter {counterValue.current}</div>
      <button onClick={handleClick}>click</button>
      <div ref={divref}>hello</div>
      <input type="text" name="name" ref={inputElem} placeholder="text" />
    </>
  );
}

export default Hooks;
