import React, { createContext, useContext, useReducer } from "react";

import { TodosReducer } from "./TodosReducer";

export const TodosContext = createContext();

const initialState = [];

export const TodosProvider = ({ children }) => {
  const [todosState, dispatch] = useReducer(TodosReducer, initialState);

  return (
    <TodosContext.Provider
      value={{
        todosState,
        dispatch,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
