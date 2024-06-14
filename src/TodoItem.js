import React from "react";

export default function TodoItem({ todo, id, removeTodo, toggleComplete }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </div>
            <div>
                <button className="btn btn-danger me-2" onClick={() => removeTodo(id)}>
                    Remove
                </button>
                <button className="btn btn-success" onClick={() => toggleComplete(id)}>
                    {todo.completed ? 'Undo' : 'Done'}
                </button>
            </div>
        </li>
    );
}
