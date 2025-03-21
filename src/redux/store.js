import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

// Store the current state of the task in the store and allows us to access it from anywhere in the application that needs it
const store = configureStore({
    reducer: {
        todos: taskReducer,
    },
});

export default store;