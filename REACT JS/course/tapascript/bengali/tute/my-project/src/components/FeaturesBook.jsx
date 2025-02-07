import React, { useContext } from "react";
import { CartContext } from "../context/user.context";

function FeaturesBook({ featured }) {
  const {state : cartItems, dispatch}  = useContext(CartContext);


  return (
    <>
      <div>FeaturesBook {String(featured)}</div>
      <div>
        {cartItems.map((e) => {
          return <p key={e.name}>{e.name}</p>;
        })}
      </div>
    </>
  );
}

export default FeaturesBook;
