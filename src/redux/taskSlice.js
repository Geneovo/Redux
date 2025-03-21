import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), description: action.payload, isDone: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.isDone = !todo.isDone;
    },
    editTodo: (state, action) => {
      const { id, newDescription } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.description = newDescription;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, editTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
