import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoDetails from "./TodoDetails";

function Todo() {
  const [data, setData] = useState([]);
  let getData = async () => {
    let result = await axios.get("https://dummyjson.com/users");
    setData(result?.data?.users);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length <= 0) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      {data.map((e) => (
      <TodoDetails e={e} key={e.id}/>
      ))}
    </>
  );
}

export default Todo;
