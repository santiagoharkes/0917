import React, { useState } from "react";
import { useTodos } from "../context/Todos/TodosContext";

import { addTodo } from "../context/Todos/TodosActions";

function TodoForm() {
  const [loDelInput, setLoDelInput] = useState("");
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(loDelInput));

    setLoDelInput("");
  };

  return (
    <form name="todos" className="todos-form" onSubmit={handleSubmit}>
      <label htmlFor="todo">Yo te conozco, escribí algo</label>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Gorditona"
        onChange={(e) => setLoDelInput(e.target.value)}
        value={loDelInput}
      />
    </form>
  );
}

export default TodoForm;
