import React from "react";
import useCounter from "../../custom/useCounter";
import Button from "../Button";

function CounterPage() {
  const { count, handleClick } = useCounter();

  return (
    <div>
      <h2>Counter</h2>
      <span style={{ color: 'green', paddingRight: '28px' ,fontSize:'30px'}}>
      example for local storage </span>
      <h4>
        My count is:
        <span style={{ color: 'red', paddingRight: '20px' }}>
          {count}
        </span>
      </h4>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default CounterPage;
