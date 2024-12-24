import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../main";
import { Themecolor } from "../context/TmemeColorContext";

function Counter({ counter, onhandleCount }) {
  let [changecolor, setChangecolor] = useState(false);
  const {colorpalate,setcolorpalate} = useContext(Themecolor);

  let bgColor = { background: "green", color: "white" };

  useEffect(() => {
    if (counter == 10) {
      setChangecolor(true);
    } else {
      setChangecolor(false);
    }
  }, [counter]);  

  const theme = useContext(ThemeContext);


  return (
    <>
    <h2 style={{color: colorpalate}}>Color Change </h2>
      <div style={changecolor ? bgColor : null}>Counter--{counter}</div>
      <div style={changecolor ? bgColor : null}> {theme.title}</div>
      <button onClick={onhandleCount}>counter button </button>
    </>
  );
}

export default Counter;
