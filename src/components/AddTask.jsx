import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/taskSlice";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 border rounded"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
