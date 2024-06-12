import React from "react";

export default function TodoItem({ todo, index, removeTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo}
      <button className="btn btn-danger" onClick={() => removeTodo(index)}>
        Remove
      </button>
    </li>
  )
}