import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/taskSlice";
import Task from "./Task";

const ListTask = () => {
  const { todos, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) =>
    filter === "done" ? todo.isDone : filter === "notDone" ? !todo.isDone : true
  );

  return (
    <div>
      <div className="mb-4 flex gap-2 justify-center">
        <button onClick={() => dispatch(setFilter("all"))} className="p-2 bg-gray-500 text-white rounded">
          All
        </button>
        <button onClick={() => dispatch(setFilter("done"))} className="p-2 bg-green-500 text-white rounded mx-2">
          Done
        </button>
        <button onClick={() => dispatch(setFilter("notDone"))} className="p-2 bg-red-500 text-white rounded">
          Not Done
        </button>
      </div>

      {filteredTodos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTask;
