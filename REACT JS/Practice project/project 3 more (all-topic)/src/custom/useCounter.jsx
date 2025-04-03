import { useEffect, useState } from "react";

function useCounter() {
  let savedCount = JSON.parse(localStorage.getItem("counter"));
  savedCount !== null ? savedCount : 0;

  const [count, setCount] = useState(savedCount);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return { count, handleClick };
}

export default useCounter;
