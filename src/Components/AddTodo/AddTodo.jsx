import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ onAdd, onClose }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a task title");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority: priority,
      status: "Pending",
    };

    onAdd(newTodo);

    setTitle("");
    setDescription("");
    setPriority("Medium");

    onClose();
  };

  return (
    <div className="modal-overlay">

      <form
        className="add-todo-form"
        onSubmit={handleSubmit}
      >

        <div className="form-header">

          <h2>Add New Task</h2>

          <button
            type="button"
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <label>Task Title</label>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <label>Description</label>

        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <label>Priority</label>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button
          type="submit"
          className="submit-btn"
        >
          Add Task
        </button>

      </form>

    </div>
  );
};

export default AddTodo;