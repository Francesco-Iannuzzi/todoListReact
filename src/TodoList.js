import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  // const addTodo = (todo) => {
  //   console.log('addTdo todo = ',todo);
  //   setTodos((prev) => [...prev, todo]);
  // }

  function addTodo(todo) {
    setTodos((prev) => [...prev, todo]);
  }

  // const removeTodo = (index) => {
  //   console.log('removeTodo index = ',index);
  //   setTodos((prev) => prev.filter((_, i) => i !== index));
  // }

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