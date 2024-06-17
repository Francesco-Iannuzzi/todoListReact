import React, { createContext, useState } from "react";
import { getTodos } from "./api/todos/get";
import { postTodo } from "./api/todos/post";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, setState] = useState({
    todos: [],
    theme: "light",
    themeText: "dark",
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setState((prev) => ({
        ...prev,
        todos,
      }));
    };
    fetchData();
  }, []);

  async function addTodo(todo) {
    const id = new Date().getTime().toString();
    const todoToSave = {
      text: todo,
      id,
      completed: false,
    };
    const response = await postTodo(todoToSave);
    if (response.status >= 200 && response.status <= 299) {
      setState((prev) => ({
        ...prev,
        todos: [...prev.todos, todoToSave],
      }));
    }
  }

  async function removeTodo(id) {
    const response = await deleteTodo(id);
    if (response.status >= 200 && response.status <= 299) {
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      setState((prev) => ({
        ...prev,
        todos: newTodos,
      }));
    }
  }

  function toggleComplete(id) {
    setState((prev) => ({
      ...prev,
      todos: {
        ...prev.todos,
        [id]: {
          ...prev.todos[id],
          completed: !prev.todos[id].completed,
        },
      },
    }));
  }

  function changeTheme(color, colorText) {
    setState((prev) => ({
      ...prev,
      theme: color,
      themeText: colorText,
    }));
  }

  return (
    <TodoContext.Provider
      value={{ ...state, addTodo, removeTodo, toggleComplete, changeTheme }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
