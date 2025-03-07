import React from "react";
import "./Dashboard.css"
import Profile from "../Profile/Profile";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1>
        <Profile /> {/* Profile dropdown */}
      </header>
      <main className="dashboard-content">
        {/* Other dashboard content */}
      </main>
    </div>
  );
};

export default Dashboard;
