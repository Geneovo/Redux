import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

// The main component of the application, which renders the entire to-do list application
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* The title of the application. */}
      {/* The component for adding new tasks. */}
      <h1 className="text-3xl font-bold mb-6">Redux To-Do List</h1>
      <AddTask />
      {/* The component for listing all the tasks. */}
      <ListTask />
    </div>
  );
};

export default App;
