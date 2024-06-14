import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

import TodoContext from './Context.js';

export default function TodoList() {
  
    const { theme, themeText, addTodo, todos, removeTodo, toggleComplete, changeTheme } = useContext(TodoContext);

    const newColor = theme === 'black' ? 'white' : 'black';

    const newColorText = themeText === 'white' ? 'black' : 'white';
  
    const todoItems = Object.keys(todos).filter(id => !todos[id].completed);

    const completedItems = Object.keys(todos).filter(id => todos[id].completed);

    return (
        <div style={{ backgroundColor: theme, color: themeText }}>
            <button className="mb-4 btn btn-primary" onClick={() => changeTheme(newColor, newColorText)}>
                Change Theme
            </button>
            <TodoInput addTodo={addTodo} />
            <section className="list d-flex row-cols-2">
                <div className="list_todo">
                    <h2 className="title">
                        Todo List
                    </h2>
                    <ul className="todo_item list-group">
                        {todoItems.map((id) => (
                            <TodoItem 
                                todo={todos[id]} 
                                key={id} 
                                id={id} 
                                removeTodo={removeTodo} 
                                toggleComplete={toggleComplete} 
                            />
                        ))}
                    </ul>
                </div>
                <div className="list_done">
                    <h2 className="title">
                        Done List
                    </h2>
                    <ul className="done_item list-group">
                        {completedItems.map((id) => (
                            <TodoItem 
                                todo={todos[id]} 
                                key={id} 
                                id={id} 
                                removeTodo={removeTodo} 
                                toggleComplete={toggleComplete} 
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}