import React, { createContext, useState } from "react";
import {
  getTodos,
  addTodoDb,
  deleteTodoDb,
  toggleTodoCompletedDb,
  isEditingTodoDb,
  updateTodoTextDb,
} from "./api/todos/crudTodo";

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
      isEditing: false,
    };

    const { response, newTodo = {} } = await addTodoDb(todoToSave);
    if (response.status >= 200 && response.status <= 299) {
      setState((prev) => ({
        ...prev,
        todos: [...prev.todos, newTodo],
      }));
    }
  }

  // delete data
  async function removeTodo(id) {
    const response = await deleteTodoDb(id);

    if (response) {
      const newTodos = state.todos.filter((todo) => todo._id !== id);
      setState((prev) => ({
        ...prev,
        todos: newTodos,
      }));
    }
  }

  // change complete status todo
  async function toggleComplete(id, completed, isEditing) {
    const response = await toggleTodoCompletedDb(id, completed, isEditing);
    if (response) {
      setState((prev) => ({
        ...prev,
        todos: prev.todos.map((todo) =>
          todo._id === id ? { ...todo, completed, isEditing } : todo
        ),
      }));
    }
  }

  // set editing
  async function enableEdit(id, isEditing) {
    const response = await isEditingTodoDb(id, isEditing);
    if (response) {
      setState((prev) => ({
        ...prev,
        todos: prev.todos.map((todo) =>
          todo._id === id ? { ...todo, isEditing } : todo
        ),
      }));
    }
  }

  async function handleText(id, text) {
    const response = await updateTodoTextDb(id, text);
    if (response) {
      setState((prev) => ({
        ...prev,
        todos: prev.todos.map((todo) =>
          todo._id === id ? { ...todo, text } : todo
        ),
      }));
    }
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
      value={{
        ...state,
        addTodo,
        removeTodo,
        toggleComplete,
        changeTheme,
        enableEdit,
        handleText,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
