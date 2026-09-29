import React from "react";
import "./Todo.css";

const Todo = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) => {

  return (
    <div className="todo-card">

      <input
        type="checkbox"
        checked={todo.status === "Completed"}
        onChange={() => onToggle(todo.id)}
      />

      <div className="todo-content">
        <h3 className={todo.status === "Completed" ? "completed-title" : ""}>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>

      <span className={`priority ${todo.priority.toLowerCase()}`}>{todo.priority}</span>

      <span className={`status ${todo.status.toLowerCase()}`}>{todo.status}</span>

      <div className="todo-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(todo.id)}
        >
          ✏️
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
        >
          🗑️
        </button>

      </div>

    </div>
  );
};

export default Todo;