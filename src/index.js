import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TodoList from "./TodoList";
import { TodoProvider } from "./Context";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  </StrictMode>
);