import React from "react";
import { useTodos } from "../context/Todos/TodosContext";

import Todo from "./Todo";

function TodoList() {
  const { todosState } = useTodos();

  return (
    <ul className="todos-list">
      {todosState?.map((valor) => (
        <Todo todo={valor} key={valor.id} />
      ))}
    </ul>
  );
}

export default TodoList;
