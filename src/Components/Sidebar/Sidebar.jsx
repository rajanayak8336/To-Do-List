import React from "react";
import "./Sidebar.css";

const Sidebar = ({ filter, setFilter }) => {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>TodoList</h2>
      </div>

      <nav className="sidebar-nav">

        <button
          className={`nav-item ${
            filter === "All" ? "active" : ""
          }`}
          onClick={() => setFilter("All")}
        >
          <span>🏠</span>
          <span>Dashboard</span>
        </button>

        <button
          className={`nav-item ${
            filter === "Pending" ? "active" : ""
          }`}
          onClick={() => setFilter("Pending")}
        >
          <span>⏳</span>
          <span>Pending</span>
        </button>

        <button
          className={`nav-item ${
            filter === "Completed" ? "active" : ""
          }`}
          onClick={() => setFilter("Completed")}
        >
          <span>✅</span>
          <span>Completed</span>
        </button>

      </nav>

      <div className="sidebar-bottom">

        <button className="nav-item">
          <span>⚙️</span>
          <span>Settings</span>
        </button>

        <button className="nav-item">
          <span>🚪</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;