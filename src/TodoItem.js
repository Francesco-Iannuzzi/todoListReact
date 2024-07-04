import React from "react";

export default function TodoItem({
  todo,
  removeTodo,
  toggleComplete,
  enableEdit,
  handleText,
}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.isEditing ? (
          <input
            className="form-control border border-2"
            type="text"
            value={todo.text}
            id="editText"
            onChange={() => handleText(todo.text)}
          />
        ) : (
          todo.text
        )}
      </div>
      <div>
        {!todo.completed && (
          <button
            className="btn btn-primary me-2"
            onClick={() => enableEdit(todo._id, !todo.isEditing)}
          >
            Edit
          </button>
        )}
        <button
          className="btn btn-danger me-2"
          onClick={() => removeTodo(todo._id)}
        >
          Remove
        </button>
        <button
          className="btn btn-success"
          onClick={() => toggleComplete(todo._id, !todo.completed)}
        >
          {todo.completed ? "Undo" : "Done"}
        </button>
      </div>
    </li>
  );
}
