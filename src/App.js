
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import BookAppointment from "./components/BookAppointment";
import MedicalRecords from "./components/MedicalRecords";
import Prescription from "./components/Prescription";
import Premium from "./components/Premium";
import AvailableDoctors from "./components/AvailableDoctors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<BookAppointment />} />
        <Route path="/doctors" element={<AvailableDoctors />} />
        <Route path="/records" element={<MedicalRecords />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Router>
  );
}

export default App;


