import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import BookAppointment from "./components/BookAppointment";
import Prescription from "./components/Prescription";
import Premium from "./components/Premium";
import MedicalRecords from "./components/MedicalRecords";

function App() {
  return (
    <Router>
      <div className="app-container">

        {/* SIDEBAR */}
        <nav>
          <h3 style={{ color: "white" }}>Medic Hub</h3>
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/book">Appointments</Link>
          <Link to="/prescription">Prescription</Link>
          <Link to="/premium">Premium</Link>
        </nav>

        {/* MAIN CONTENT */}
        <div className="main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/prescription" element={<Prescription />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/records" element={<MedicalRecords />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;


