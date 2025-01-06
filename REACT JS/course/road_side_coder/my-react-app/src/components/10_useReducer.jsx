import React, { useReducer, useState } from "react";
import { useEffect } from "react";

function ReducerExmp() {
  const cart = [
    { id: 1, name: "red Top", price: 10 },
    { id: 2, name: "blue top", price: 20 },
    { id: 3, name: "Jeans", price: 30 },
    { id: 4, name: "tshrt ", price: 40 },
  ];

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "add":
        {
          state.push(action.payload);
        }

        break;
      case "remove":
        {
          state = [];
        }

        break;

      case "total":
        {
       state=   cart.reduce((curr, all) => curr + all.price, 0)
        }

        break;

      default:
        break;
    }

    return state;
  };

  
  
  const [state, disPatch] = useReducer(cartReducer, cart);
  
  console.log(state);
  
  // let [total, setTotal] = useState(null);
  // useEffect(() => {
  //   setTotal(cart.reduce((curr, all) => curr + all.price, 0));
  // }, [state]);


  return (
    <div className="p-4">
      <ul className="list-disc pl-5">
        {state.map((item) => (
          <li key={item.id} className="mb-2 text-lg text-gray-700">
            name is-{item.name}, price is-{item.price}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600"
        onClick={() =>
          disPatch({
            type: "add",
            payload: { id: 5, name: "Mshrt ", price: 80 },
          })
        }
      >
        Add Product 1
      </button>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600"
        onClick={() =>
          disPatch({
            type: "add",
            payload: { id: 6, name: "Mafler ", price: 100 },
          })
        }
      >
        Add Product 2
      </button>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded m-2 hover:bg-red-600"
        onClick={() => disPatch({ type: "remove" })}
      >
        REMOVE All
      </button>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded m-2 hover:bg-green-600"
        onClick={() => disPatch({ type: "total" })}
      >
        Total Price
      </button>
      <h2 className="text-2xl bg-green-300">total expences is -{state} </h2>
    </div>
  );
}

export default ReducerExmp;
