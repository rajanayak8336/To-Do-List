import React, { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete React Project",
      description: "Finish the Todo List application",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Practice Java",
      description: "Practice Java interview questions",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      title: "Learn SQL",
      description: "Practice SQL queries and joins",
      priority: "Low",
      status: "Completed",
    },
    {
      id: 4,
      title: "Update Resume",
      description: "Add latest projects to resume",
      priority: "High",
      status: "Pending",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [filter, setFilter] = useState("All");

 

  const handleAddTodo = (newTodo) => {
    setTodos((previousTodos) => [
      ...previousTodos,
      newTodo,
    ]);
  };



  const handleDeleteTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== id)
    );
  };



  const handleToggleTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? {
            ...todo,
            status:
              todo.status === "Completed"
                ? "Pending"
                : "Completed",
          }
          : todo
      )
    );
  };



  const handleEditTodo = (id) => {
    const todo = todos.find((item) => item.id === id);

    if (!todo) {
      return;
    }

    const newTitle = prompt(
      "Enter new task title:",
      todo.title
    );

    if (newTitle === null || newTitle.trim() === "") {
      return;
    }

    const newDescription = prompt(
      "Enter new description:",
      todo.description
    );

    setTodos((previousTodos) =>
      previousTodos.map((item) =>
        item.id === id
          ? {
            ...item,
            title: newTitle,
            description:
              newDescription === null
                ? item.description
                : newDescription,
          }
          : item
      )
    );
  };

  return (
    <div className="app">

      <Sidebar
        filter={filter}
        setFilter={setFilter}
      />

      <Header
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <TodoList
        todos={todos}
        onAdd={handleAddTodo}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
        onEdit={handleEditTodo}
        searchText={searchText}
        filter={filter}
        setFilter={setFilter}
      />

    </div>
  );
};

export default App;