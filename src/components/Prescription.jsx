// const Prescription = () => {
//   const prescriptions = [
//     {
//       medicine: "Paracetamol",
//       dosage: "500mg",
//       frequency: "Twice daily",
//       duration: "5 days",
//       doctor: "Dr. Sarah Johnson",
//       status: "Active",
//       refill: "Not needed",
//     },
//     {
//       medicine: "Amoxicillin",
//       dosage: "250mg",
//       frequency: "Three times daily",
//       duration: "7 days",
//       doctor: "Dr. Emily Williams",
//       status: "Active",
//       refill: "2 days left",
//     },
//     {
//       medicine: "Vitamin D",
//       dosage: "1000 IU",
//       frequency: "Once daily",
//       duration: "30 days",
//       doctor: "Dr. Chloe Harris",
//       status: "Completed",
//       refill: "Available",
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       <h1>Prescriptions</h1>
//       <p style={styles.subtitle}>
//         Track your medications, dosage, and refill status.
//       </p>

//       <div style={styles.summaryGrid}>
//         <div style={styles.summaryCard}>
//           <h3>Active Medicines</h3>
//           <h2>2</h2>
//         </div>
//         <div style={styles.summaryCard}>
//           <h3>Refills Soon</h3>
//           <h2>1</h2>
//         </div>
//         <div style={styles.summaryCard}>
//           <h3>Completed</h3>
//           <h2>1</h2>
//         </div>
//       </div>

//       <div style={styles.grid}>
//         {prescriptions.map((item, index) => (
//           <div key={index} style={styles.card}>
//             <div style={styles.top}>
//               <div>
//                 <span style={styles.icon}>💊</span>
//                 <h3>{item.medicine}</h3>
//               </div>

//               <span
//                 style={{
//                   ...styles.status,
//                   background:
//                     item.status === "Active" ? "#dcfce7" : "#e5e7eb",
//                   color: item.status === "Active" ? "#166534" : "#374151",
//                 }}
//               >
//                 {item.status}
//               </span>
//             </div>

//             <div style={styles.details}>
//               <p>
//                 <strong>Dosage:</strong> {item.dosage}
//               </p>
//               <p>
//                 <strong>Frequency:</strong> {item.frequency}
//               </p>
//               <p>
//                 <strong>Duration:</strong> {item.duration}
//               </p>
//               <p>
//                 <strong>Doctor:</strong> {item.doctor}
//               </p>
//             </div>

//             <div style={styles.footer}>
//               <span>{item.refill}</span>
//               <button style={styles.button}>Set Reminder</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "30px",
//     background: "#f5f7fb",
//     minHeight: "100vh",
//   },
//   subtitle: {
//     color: "#6b7280",
//   },
//   summaryGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
//     gap: "18px",
//     margin: "25px 0",
//   },
//   summaryCard: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "18px",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
//     gap: "20px",
//   },
//   card: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "18px",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
//   },
//   top: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//   },
//   icon: {
//     fontSize: "28px",
//   },
//   status: {
//     padding: "7px 12px",
//     borderRadius: "999px",
//     fontSize: "13px",
//     fontWeight: "bold",
//   },
//   details: {
//     color: "#4b5563",
//     lineHeight: "1.7",
//     marginTop: "15px",
//   },
//   footer: {
//     marginTop: "18px",
//     paddingTop: "15px",
//     borderTop: "1px solid #eee",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     color: "#6b7280",
//   },
//   button: {
//     padding: "9px 12px",
//     border: "none",
//     borderRadius: "10px",
//     background: "#1e3a8a",
//     color: "white",
//     cursor: "pointer",
//   },
// };

// export default Prescription;



import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

const Prescription = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    if (!user) return;

    axios
      .get(`${API_URL}/prescriptions/${user.id}`)
      .then((res) => setPrescriptions(res.data.prescriptions || []))
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return <div style={styles.container}>Please login to view prescriptions.</div>;
  }

  return (
    <div style={styles.container}>
      <h1>Prescriptions</h1>
      <p style={styles.subtitle}>Track your medications and refill status.</p>

      <div style={styles.grid}>
        {prescriptions.length === 0 ? (
          <div style={styles.empty}>No prescriptions found.</div>
        ) : (
          prescriptions.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.top}>
                <h3>{item.medicine}</h3>
                <span style={styles.status}>{item.status}</span>
              </div>

              <p><strong>Dosage:</strong> {item.dosage}</p>
              <p><strong>Frequency:</strong> {item.frequency}</p>
              <p><strong>Duration:</strong> {item.duration}</p>
              <p><strong>Doctor:</strong> {item.doctor}</p>

              <div style={styles.footer}>
                <span>{item.refill}</span>
                <button style={styles.button}>Set Reminder</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "30px", background: "#f5f7fb", minHeight: "100vh" },
  subtitle: { color: "#6b7280" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "20px", marginTop: "25px" },
  card: { background: "white", padding: "20px", borderRadius: "18px", boxShadow: "0 8px 24px rgba(0,0,0,0.07)" },
  top: { display: "flex", justifyContent: "space-between" },
  status: { background: "#dcfce7", color: "#166534", padding: "7px 12px", borderRadius: "999px", fontWeight: "bold" },
  footer: { display: "flex", justifyContent: "space-between", borderTop: "1px solid #eee", paddingTop: "15px", marginTop: "15px" },
  button: { padding: "9px 12px", border: "none", borderRadius: "10px", background: "#1e3a8a", color: "white" },
  empty: { background: "white", padding: "25px", borderRadius: "18px" },
};

export default Prescription;