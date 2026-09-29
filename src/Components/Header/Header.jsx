import React from "react";
import "./Header.css";

const Header = ({ searchText, setSearchText }) => {
  return (
    <header className="header">

      <div className="header-left">
        <h2>Dashboard</h2>
      </div>

      <div className="header-right">

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search tasks..."
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
          />

        </div>

        <div className="profile">

          <div className="profile-image">
            RN
          </div>

          <div className="profile-info">
            <h4>NEC</h4>
            <span>Admin</span>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;