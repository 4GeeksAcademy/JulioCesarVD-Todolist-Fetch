import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";
import Home from "./component/home.jsx";

ReactDOM.render(<Home />, document.querySelector("#app"));
import TodoList from "./component/Todolist.jsx"; 

ReactDOM.render(
  <div>
    <Home />
    <TodoList /> 
  </div>,
  document.querySelector("#app")
);
