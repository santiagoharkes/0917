import React from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoPage() {
  return (
    <div className="todos">
      <div className="todos-header">
        <h3 className="todos-title">"Lo hice de 0" 🙄</h3>

        <div>
          <p>Nos quedan 10 items por hacer</p>

          <div className="buttons-container">
            <button className="todos-clear">Borrar completados</button>
            <button className="todos-clear">Borrar todos</button>
            <button className="todos-clear done">Cargar todos</button>
          </div>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
