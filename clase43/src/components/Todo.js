import React from "react";
import { useTodos } from "../context/Todos/TodosContext";

import { deleteTodo } from "../context/Todos/TodosActions";

function Todo({ todo }) {
  const { dispatch } = useTodos();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className={todo.complete ? "todos-complete" : ""}>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <span>{todo.label}</span>
      <button onClick={handleDelete}></button>
    </li>
  );
}

export default Todo;
