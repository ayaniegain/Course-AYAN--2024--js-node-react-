import React, { useEffect } from "react";
import img from "../assets/react.svg";
import { useState } from "react";
import { ShimmerCircularImage } from "react-shimmer-effects";

function Condition() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  let obj={
    name:"aynn",
    age:25,
    game:{
      practice:{
        running:true,
        jogging:"yes"
      }
    }
  }

  let fruites=null;
  let veg="carrot"

  let lodineEl= <div><h2>page loading </h2></div>

  return (
    <div>
      <h2>Picture {loading ? "Loading... " : "showing"}</h2>

      <div>
        {loading && <ShimmerCircularImage size={150} />}
        <div>
          {!loading && <img src={img} alt="img" style={{ height: "100px" }} />}
        </div>
        {loading && lodineEl}
      </div>
      <h2>optional channing- {obj.game?.practice?.jogging}</h2>
      <h2>Nullish - {fruites ?? veg}</h2>


    </div>
  );
}


export default Condition;
