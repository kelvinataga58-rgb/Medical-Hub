import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <h2>Welcome to Medic Hub</h2>

      <div className="card">
        <h3>👤 Patient Summary</h3>
        <p>Name: John Doe</p>
        <p>Last Visit: 12 March 2026</p>
        <p>Status: <span className="badge success">Active</span></p>
      </div>

      <div className="card">
        <h3>📅 Upcoming Appointment</h3>
        <p>Doctor: Dr. Amina</p>
        <p>Date: 30 April 2026</p>
        <p>Status: <span className="badge pending">Pending</span></p>
      </div>

      <div className="card">
        <h3>💡 Health Tip</h3>
        <p>Drink plenty of water and maintain regular checkups.</p>
      </div>
    </div>
  );
}

export default Dashboard;