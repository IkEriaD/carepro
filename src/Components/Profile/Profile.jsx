import React, { useState, useEffect, useRef } from "react";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fetch user data from localStorage
  const fullName = window.localStorage.getItem("fullName") || "User";

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const handleLogout = () => {
    // Clear localStorage and navigate to login page
    window.localStorage.clear();
    navigate("/login");
  };

  const handleLinkClick = (path) => {
    setDropdownOpen(false); // Close the dropdown
    navigate(path); // Navigate to the selected route
  };

  return (
    <div className="profile" ref={dropdownRef}>
      <div className="profile-header" onClick={toggleDropdown}>
        <span className="profile-name">{fullName}</span>
        <i
          className={dropdownOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}
        ></i>
      </div>
      {dropdownOpen && (
        <div className="profile-dropdown">
          <ul>
            <li onClick={() => handleLinkClick("/dashboard")}>Dashboard</li>
            <li onClick={() => handleLinkClick("/settings")}>Settings</li>
            <li onClick={() => handleLinkClick("/profile")}>My Profile</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
