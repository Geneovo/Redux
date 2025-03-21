import { createSlice } from "@reduxjs/toolkit";

// Create a new slice to manage the state
const initialState = {
  todos: [],
  filter: "all",
};

// Initialize the state and define the reducers for the state management functions
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
   
    // Add a new todo item to the list
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), description: action.payload, isDone: false });
    },

    // Toggle the done status of a todo item
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.isDone = !todo.isDone;
    },

    // Edits the description of an existing todo item in the list.
    editTodo: (state, action) => {
      const { id, newDescription } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.description = newDescription;
    },

    // Sets the current filter for the todo list
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, editTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
