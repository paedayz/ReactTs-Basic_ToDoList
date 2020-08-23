import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Component
import Todo from "./components/CreateTodo";
import TodoTable from "./components/TodoTable";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
        <TodoTable />
      </div>
    </Provider>
  );
}

export default App;
