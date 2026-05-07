
// import { useState } from "react";

// const BookAppointment = () => {
//   const [form, setForm] = useState({
//     doctor: "",
//     date: "",
//     time: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Appointment booked successfully!");
//   };

//   return (
//     <div className="page-content">
//     <div style={styles.container}>
//       <h1>Book Appointment</h1>

//       <form style={styles.card} onSubmit={handleSubmit}>
//         <select name="doctor" onChange={handleChange} style={styles.input}>
//           <option>Select Doctor</option>
//           <option>Dr. Sarah Johnson</option>
//           <option>Dr. Emily Williams</option>
//         </select>

//         <input
//           type="date"
//           name="date"
//           onChange={handleChange}
//           style={styles.input}
//         />

//         <input
//           type="time"
//           name="time"
//           onChange={handleChange}
//           style={styles.input}
//         />

//         <textarea
//           name="reason"
//           placeholder="Reason for visit"
//           onChange={handleChange}
//           style={styles.input}
//         />

//         <button style={styles.button}>Book Appointment</button>
//       </form>
      
//     </div>
//   </div>
//   );
// };

// const styles = {
//   container: { padding: "30px" },
//   card: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "12px",
//     maxWidth: "400px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
  
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     background: "#1e3a8a",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//   },
  
// };

// export default BookAppointment;


import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

const BookAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedDoctor = location.state?.doctor;

  const user = JSON.parse(localStorage.getItem("user"));

  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    doctor_id: selectedDoctor?.id || "",
    appointment_date: "",
    appointment_time: "",
    reason: "",
  });

  useEffect(() => {
    axios.get(`${API_URL}/doctors`).then((res) => {
      setDoctors(res.data.doctors || []);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (!form.doctor_id || !form.appointment_date || !form.appointment_time) {
      alert("Please fill in doctor, date, and time");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/appointments`, {
        user_id: user.id,
        doctor_id: form.doctor_id,
        appointment_date: form.appointment_date,
        appointment_time: form.appointment_time,
        reason: form.reason,
      });

      if (res.data.success) {
        alert("Appointment booked successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Failed to book appointment");
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Book Appointment</h1>
      <p style={styles.subtitle}>Schedule a visit with your preferred doctor.</p>

      <form onSubmit={bookAppointment} style={styles.card}>
        <label>Doctor</label>
        <select name="doctor_id" value={form.doctor_id} onChange={handleChange} style={styles.input}>
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name} - {doc.specialty}
            </option>
          ))}
        </select>

        <label>Date</label>
        <input type="date" name="appointment_date" value={form.appointment_date} onChange={handleChange} style={styles.input} />

        <label>Time</label>
        <input type="time" name="appointment_time" value={form.appointment_time} onChange={handleChange} style={styles.input} />

        <label>Reason</label>
        <textarea name="reason" value={form.reason} onChange={handleChange} placeholder="Reason for visit..." style={styles.textarea} />

        <button style={styles.button}>Book Appointment</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: "30px", background: "#f5f7fb", minHeight: "100vh" },
  subtitle: { color: "#6b7280" },
  card: { maxWidth: "520px", background: "white", padding: "25px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" },
  input: { width: "100%", padding: "12px", margin: "8px 0 16px", borderRadius: "12px", border: "1px solid #ddd" },
  textarea: { width: "100%", padding: "12px", height: "100px", margin: "8px 0 16px", borderRadius: "12px", border: "1px solid #ddd" },
  button: { width: "100%", padding: "14px", border: "none", borderRadius: "12px", background: "#1e3a8a", color: "white", fontWeight: "bold", cursor: "pointer" },
};

export default BookAppointment;