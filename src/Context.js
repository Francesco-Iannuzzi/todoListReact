import React, { createContext, useState } from "react";
import { getTodos, addTodoDb, deleteTodoDb } from "./api/todos/crudTodo";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, setState] = useState({
    todos: [],
    theme: "light",
    themeText: "dark",
    uncompletedTodos: [],
    completedTodos: [],
  });

  // recover data
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

  // add data item
  async function addTodo(todo) {
    const todoToSave = {
      text: todo,
      completed: false,
    };
    const response = await addTodoDb(todoToSave);
    if (response.status >= 200 && response.status <= 299) {
      setState((prev) => ({
        ...prev,
        todos: [...prev.todos, todoToSave],
      }));
    }
  }

  // delete data
  async function removeTodo(id) {
    const response = await deleteTodoDb(id);

    const newTodos = state.todos.filter((todo) => todo._id !== id);
    setState((prev) => ({
      ...prev,
      todos: newTodos,
    }));
    // if (response.status >= 200 && response.status <= 299) {

    // }
  }

  // update data
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

  // change theme color
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
