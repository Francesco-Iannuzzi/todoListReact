import React, { useState, useContext } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

import TodoContext from './Context.js';

export default function TodoList() {

  const { theme, toggleTheme, addTodo, todos, removeTodo, handleClick } = useContext(TodoContext);
  
  return (
    <>
      <button className="mb-4 btn btn-primary" onClick={handleClick}>
        Change Theme
      </button>
      <h1 className="title">
        Todo List
      </h1>
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