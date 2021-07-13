import * as constants from "./Constants";

import { Todo } from "./TodoModel";

export const addTodo = (tareita) => ({
  type: constants.ADD_TODO,
  payload: new Todo(tareita),
});

export const deleteTodo = (id) => ({
  type: constants.DELETE_TODO,
  id,
});

export const completeTodo = (id) => ({
  type: constants.COMPLETE_TODO,
  id,
});
