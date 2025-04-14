import React, { createContext, useContext, useState } from "react";

export let alltodoContext = createContext();

function TodoContext({ children }) {
  let [todo, setAllTodo] = useState([]);

  function setTODOvalue(item) {
    setAllTodo([...todo, { name: item, id: todo.length + 1, desc: "dummy" }]);
  }
  function deleteTODOvalue(itemId) {
    setAllTodo(todo.filter((item) => item.id !== +itemId));
  }
  function editTODOvalue(itemId, textTodo) {
    let findItem = todo.find((todo) => todo.id == +itemId);

    let updateValue = todo.map((e) =>
      e.id === findItem.id ? { ...e, name: textTodo } : e
    );

    setAllTodo(updateValue);
  }

  return (
    <alltodoContext.Provider
      value={{ todo, setTODOvalue, deleteTODOvalue, editTODOvalue }}
    >
      {children}
    </alltodoContext.Provider>
  );
}

export default TodoContext;

export function useContextFunc() {
  return useContext(alltodoContext);
}
