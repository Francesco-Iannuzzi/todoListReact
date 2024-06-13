import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => [...prev, todo]);
  }

  function removeTodo(index) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1 className="title">Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <ul className="list-group">
        {todos.map((todo, index) => (
          <TodoItem 
            todo={todo} 
            key={index} 
            index={index} 
            removeTodo={removeTodo} 
          />
        ))}
      </ul>
    </>
  )
}