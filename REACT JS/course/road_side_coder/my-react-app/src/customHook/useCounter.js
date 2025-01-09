import { useState } from "react";

function useCounter(initial = 0, step = 1) {
  let [count, setCount] = useState(initial);

  let inc = () => {
    setCount(count + step);
  };

  let dec = () => {
    setCount(count - step);
  };

  let res = () => {
    setCount(initial);
  };

  return { inc, dec, res, count };
}

export default useCounter;
