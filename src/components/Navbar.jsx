import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#0b6fa4", color: "#fff" }}>
      <Link to="/">Login</Link> | 
      <Link to="/signup">Signup</Link> | 
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/book">Appointments</Link> | 
      <Link to="/prescription">Prescriptions</Link> | 
      <Link to="/premium">Premium</Link>
    </nav>
  );
}

export default Navbar;