import {
  ADD_TODO,
  CLEAR_COMPLETE,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_MODE,
  EDIT_TODO,
  SET_TODOS,
} from "./Constants";

export const TodosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      state = state.filter((todo) => todo.id !== action.id);

      return state;

    default:
      return state;
  }
};
