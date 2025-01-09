import React, { useReducer } from "react";

function ReducerExmp() {
  const cart = [
    { id: 1, name: "red Top", price: 10 },
    { id: 2, name: "blue top", price: 20 },
    { id: 3, name: "Jeans", price: 30 },
    { id: 4, name: "tshrt", price: 40 },
  ];

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];

      case "remove":
        return []; // Return an empty array to clear the cart.

      default:
        return state; // Ensure a default state is returned to avoid errors.
    }
  };

  const [state, dispatch] = useReducer(cartReducer, cart);

  // Calculate the total price dynamically based on the cart's state
  const CartTotal = state.reduce((curr, item) => curr + item.price, 0);

  return (
    <div className="p-4">
      <ul className="list-disc pl-5">
        {state.map((item) => (
          <li key={item.id} className="mb-2 text-lg text-gray-700">
            Name: {item.name}, Price: ${item.price}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600"
        onClick={() =>
          dispatch({
            type: "add",
            payload: { id: 5, name: "Mshrt", price: 80 },
          })
        }
      >
        Add Product 1
      </button>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600"
        onClick={() =>
          dispatch({
            type: "add",
            payload: { id: 6, name: "Mafler", price: 100 },
          })
        }
      >
        Add Product 2
      </button>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded m-2 hover:bg-red-600"
        onClick={() => dispatch({ type: "remove" })}
      >
        Remove All
      </button>
      <h2 className="text-2xl bg-green-300 mt-4 p-2 rounded">
        Total Expenses: ${CartTotal}
      </h2>
    </div>
  );
}

export default ReducerExmp;
