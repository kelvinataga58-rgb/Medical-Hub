
import { useState } from "react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
  };

  return (
    <div className="page-content">
    <div style={styles.container}>
      <h1>Book Appointment</h1>

      <form style={styles.card} onSubmit={handleSubmit}>
        <select name="doctor" onChange={handleChange} style={styles.input}>
          <option>Select Doctor</option>
          <option>Dr. Sarah Johnson</option>
          <option>Dr. Emily Williams</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="reason"
          placeholder="Reason for visit"
          onChange={handleChange}
          style={styles.input}
        />

        <button style={styles.button}>Book Appointment</button>
      </form>
      
    </div>
  </div>
  );
};

const styles = {
  container: { padding: "30px" },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
  
};

export default BookAppointment;