import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Redux To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
