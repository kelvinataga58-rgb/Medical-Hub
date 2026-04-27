import React, { useState } from "react";

function BookAppointment() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h2>Book Appointment</h2>

        <label>Select Doctor</label>
        <select onChange={(e) => setDoctor(e.target.value)}>
          <option value="">Choose...</option>
          <option>Dr. Amina - General Physician</option>
          <option>Dr. Kamau - Cardiologist</option>
          <option>Dr. Otieno - Dermatologist</option>
        </select>

        <label>Select Date</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />

        <button>Confirm Booking</button>
      </div>
    </div>
  );
}

export default BookAppointment;