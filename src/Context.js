import React, { createContext, useState } from "react";
import { getTodos } from "./api/todos/crudTodo";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, setState] = useState({
    todos: [],
    theme: "light",
    themeText: "dark",
    uncompletedTodos: [],
    completedTodos: [],
  });

  const fetchData = async () => {
    const todos = await getTodos();
    setState((prev) => ({
      ...prev,
      todos,
    }));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      completedTodos: prev.todos?.filter((todo) => todo.completed),
      uncompletedTodos: prev.todos?.filter((todo) => !todo.completed),
    }));
  }, [state.todos]);

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
    const findTodo = state.todos.find((todo) => todo.id === id);
    setState((prev) => ({
      ...prev,
      todos: [
        ...prev.todos.filter((todo) => todo.id !== id),
        { ...findTodo, completed: !findTodo.completed },
      ],
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
