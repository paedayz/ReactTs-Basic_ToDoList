import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Component
import Todo from "./components/CreateTodo";
import TodoTable from "./components/TodoTable";

function App() {
  return (
    <div className="App">
      <Todo />
      <TodoTable />
    </div>
  );
}

export default App;
