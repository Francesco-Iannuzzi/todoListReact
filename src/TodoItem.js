import React, { useState } from "react";

export default function TodoItem({
  todo,
  removeTodo,
  toggleComplete,
  enableEdit,
  handleText,
}) {
  const [editText, setEditText] = useState(todo.text);

  const handleEditTextChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditTextSave = () => {
    handleText(todo._id, editText);
    enableEdit(todo._id, false);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.isEditing ? (
          <input
            className="form-control border border-2"
            type="text"
            value={editText}
            id="editText"
            onChange={handleEditTextChange}
            onBlur={handleEditTextSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEditTextSave();
              }
            }}
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
