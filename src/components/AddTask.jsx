import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/taskSlice";

// AddTask component allows users to add new tasks
const AddTask = () => {
  const [task, setTask] = useState(""); // State to hold
  const dispatch = useDispatch(); // Hook to dispatch 

  // Handles adding a new task
  const handleAddTask = () => {
    if (task.trim() === "") return; // Do nothing if the input is empty
    dispatch(addTodo(task)); // Dispatch the action to add a new task
    setTask(""); // Clear the input field
  };

  return (
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)} // Update task state on input change
        className="p-2 border rounded"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
