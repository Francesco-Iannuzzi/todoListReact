import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import TodoContext from "./Context.js";

export default function TodoList() {
  const {
    theme,
    themeText,
    addTodo,
    removeTodo,
    toggleComplete,
    enableEdit,
    handleText,
    completedTodos,
    uncompletedTodos,
    changeTheme,
  } = useContext(TodoContext);

  const newColor = theme === "black" ? "white" : "black";
  const newColorText = themeText === "white" ? "black" : "white";

  return (
    <div className="p-1" style={{ backgroundColor: theme, color: themeText }}>
      <button
        className="mb-4 btn btn-primary"
        onClick={() => changeTheme(newColor, newColorText)}
      >
        Change Theme
      </button>
      <TodoInput addTodo={addTodo} />
      <section className="list d-flex row-cols-2">
        <div className="list_todo">
          <h2 className="title">Todo List</h2>
          <ul className="todo_item list-group">
            {uncompletedTodos?.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo._id}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
                enableEdit={enableEdit}
                handleText={handleText}
              />
            ))}
          </ul>
        </div>
        <div className="list_done">
          <h2 className="title">Done List</h2>
          <ul className="done_item list-group">
            {completedTodos?.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo._id}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
