import React, { useState } from "react";

console.log("initial rendering");

function ParentCounter() {
  const [showMessage, setshowmessage] = useState(false);
  const [showMessage2, setshowmessage2] = useState(false);

  let handleclick = () => {
    setshowmessage(!showMessage);
    setshowmessage2(!showMessage2);
  };
  console.log("parent");
  return (
    <>
      <Counter />
      <h2>showMessage: {showMessage && "showing "}</h2>
      <h2>showMessage2: {showMessage2 && "showing "}</h2>

      <button onClick={handleclick}>show</button>
    </>
  );
}

export default ParentCounter;

function Counter() {
  const [count, setCount] = useState(0);
  //   let count1 = 0;
  const handleclick = () => {
    // console.log("handleclick clicked");
    setCount(count + 1);
    // count1 = count1 + 1;❌
  };
  console.log("child");

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={handleclick}>inc</button>
      <AddData />
    </>
  );
}

function AddData() {
  const [data, setData] = useState([
    { id: 22, item: "mango" },
    { id: 23, item: "apple" },
    { id: 25, item: "kiwi" },
  ]);

  console.log(data);
  return (
    <>
      <ul>
        {data.map((e) => (
          <li key={e.id}>-{e.item}</li>
        ))}
      </ul>

      <button onClick={() => setData([{ id: 66, item: "orange" }, ...data])}>
        add
      </button>
    </>
  );
}
