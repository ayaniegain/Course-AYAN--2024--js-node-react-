import React, { useState } from "react";
import { useContextFunc } from "../context/TodoContext";
import FormComp from "./FormComp";

function TodoResult() {
  let { todo, deleteTODOvalue, setTODOvalue,editTODOvalue } = useContextFunc();

  let [data, setData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTODOvalue(data);
  }

  return (
    <div>
      {todo &&
        todo.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <button onClick={() => deleteTODOvalue(item.id)}>delete</button>
            <button onClick={() => editTODOvalue(item.id, data)}>edit</button>
            <div>
              <form onSubmit={()=>handleSubmit(item.id)}>
                <input
                  type="text"
                  placeholder="my todo"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <button type="submit">edit</button>
              </form>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoResult;
