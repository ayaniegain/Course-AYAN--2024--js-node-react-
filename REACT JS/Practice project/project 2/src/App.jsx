import React, { useContext, useState } from "react";
import Product from "./components/Product";
import Counter from "./components/Counter";
import NestedChildren from "./components/NestedChildren";
import DataFetch from "./components/DataFetch";
import { Themecolor } from "./context/TmemeColorContext";
import CounterReducer from "./reducer/CounterReducer";

function App() {
  const [counter, setcounter] = useState(0);
  const {colorpalate,setcolorpalate} = useContext(Themecolor);

  const handleClick = () => {
    setcounter((c) => c + 1);

    console.log(colorpalate)
    setcolorpalate('red')
  };

  let productDetails = [
    { name: "Toy", price: 120 },
    { name: "Toy2", price: 100 },
  ];

  return (
    <div>
      <Product productDetails={productDetails} />
      <Counter counter={counter} onhandleCount={handleClick} />
      <NestedChildren>
        <h2>This is nested children</h2>
      </NestedChildren>

      <CounterReducer/>
      <DataFetch/>
    </div>
  );
}

export default App;
