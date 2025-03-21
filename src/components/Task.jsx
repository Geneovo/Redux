import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo } from "../redux/taskSlice";

// Component that displays a single task.
const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(todo.description);

  // Handles saving the task edits.
  const handleEdit = () => {
    dispatch(editTodo({ id: todo.id, newDescription }));
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between p-3 border-b">
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="p-2 border"
        />
      ) : (
        <span className={todo.isDone ? "line-through text-gray-500" : ""}>{todo.description}</span>
      )}

      <div className="flex gap-2">
        <button onClick={() => dispatch(toggleTodo(todo.id))} className="bg-green-500 text-white p-2 rounded mx-2">
          {/* Toggle the task state between done and undone */}
          {todo.isDone ? "Undo" : "Done"}
        </button>
        {isEditing ? (
          <button onClick={handleEdit} className="bg-yellow-500 text-white p-2 rounded">
            {/* Save the task edits */}
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white p-2 rounded">
            {/* Toggle the task to edit mode */}
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
