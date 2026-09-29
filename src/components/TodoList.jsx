import React, { useState } from "react";

import './TodoList.css';
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const TodoList = ({
  todos,
  onAdd,
  onDelete,
  onToggle,
  onEdit,
  searchText,
  filter,
  setFilter,
}) => {

  const [showAddForm, setShowAddForm] =
    useState(false);


  const filteredTodos = todos.filter((todo) => {

    const matchesSearch =
      todo.title
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      todo.description
        .toLowerCase()
        .includes(searchText.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      todo.status === filter;

    return matchesSearch && matchesFilter;
  });


  const totalTasks = todos.length;

  const pendingTasks = todos.filter(
    (todo) => todo.status === "Pending"
  ).length;

  const completedTasks = todos.filter(
    (todo) => todo.status === "Completed"
  ).length;

  return (
    <main className="todo-container">

      <div className="todo-header">

        <div>
          <h1>My Tasks</h1>

          <p>
            Manage your daily tasks
          </p>
        </div>

        <button
          className="add-task-btn"
          onClick={() => setShowAddForm(true)}
        >
          + Add Task
        </button>

      </div>

      <div className="task-summary">

        <div className="summary-card">
          <h3>{totalTasks}</h3>
          <p>Total Tasks</p>
        </div>

        <div className="summary-card">
          <h3>{pendingTasks}</h3>
          <p>Pending</p>
        </div>

        <div className="summary-card">
          <h3>{completedTasks}</h3>
          <p>Completed</p>
        </div>

      </div>

      <div className="filter-buttons">

        <button className={filter === "All" ? "filter-active" : ""} onClick={() => setFilter("All")}>All</button>

        <button className={filter === "Pending" ? "filter-active" : ""} onClick={() => setFilter("Pending")}>Pending</button>

        <button className={filter === "Completed" ? "filter-active" : ""} onClick={() => setFilter("Completed")}>Completed</button>

      </div>


      <div className="todo-list">{filteredTodos.length > 0 ? (filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))

        ) : (

          <div className="empty-state">
            <div className="empty-icon">
              📝
            </div>

            <h3>No tasks found</h3>

            <p>
              Try adding a new task or changing your filter.
            </p>
          </div>

        )}

      </div>

      {showAddForm && (
        <AddTodo
          onAdd={onAdd}
          onClose={() => setShowAddForm(false)}
        />

      )}

    </main>
  );
};

export default TodoList;