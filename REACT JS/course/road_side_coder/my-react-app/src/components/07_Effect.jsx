import React, { useEffect, useLayoutEffect, useState } from "react";
// useEffect used when the component renders
// [] prevents unnecessary re-renders
// if [] is run once.

function ApiCall() {
  let [data, setData] = useState([]);
  let [count, setCount] = useState(1);
  let [total, setTotal] = useState(100);

  async function getDatafromApi() {
    if (data.length === 0) {
      let data = await fetch("https://dummyjson.com/products");
      let response = await data.json();
      setData(response.products);
    }
  }
  
  useLayoutEffect(() => {

  }, [])

  // useEffect with an empty dependency array to ensure the API call is made only once
  useEffect(() => {
    getDatafromApi();
  }, []);

  // useEffect to update total whenever count changes
  useEffect(() => {
    setTotal(100 * count);
  }, [count]);

  console.log(total);
  // console.log(data);

  return (
    <>
      <div className="counter p-4">
        <h2 className="text-xl font-bold">counter: {count}</h2>
        <h2 className="text-xl font-bold">total: {total}</h2>

        <button className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600" onClick={() => setCount((prev) => prev + 1)}>inc</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded m-2 hover:bg-red-600" onClick={() => setCount((prev) => prev - 1)}>dec</button>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
        {data.map((item) => {
          let {
            brand,
            category,
            images,
            dimensions: { height, width },
            id,
          } = item;

          return (
            <div
              key={id}
              className="bg-yellow-400"
              style={{ height: `${height}px`, width: `${width}px` }}
            >
              <h2 className="text-green-700">{brand}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ApiCall;
