// const MedicalRecords = () => {
//   const isPremium = localStorage.getItem("premium") === "true";

//   const records = [
//     {
//       title: "Complete Blood Count",
//       type: "Lab Report",
//       doctor: "Dr. Sarah Johnson",
//       date: "2026-04-20",
//       status: "Normal",
//       summary: "Hemoglobin, WBC, and platelet count are within normal range.",
//     },
//     {
//       title: "Chest X-Ray",
//       type: "Radiology",
//       doctor: "Dr. David Brown",
//       date: "2026-03-12",
//       status: "Reviewed",
//       summary: "No abnormal lung findings detected.",
//     },
//     {
//       title: "Blood Sugar Test",
//       type: "Lab Report",
//       doctor: "Dr. Chloe Harris",
//       date: "2026-02-08",
//       status: "Needs Attention",
//       summary: "Slightly elevated glucose level. Follow-up recommended.",
//     },
//   ];

//   if (!isPremium) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.lockCard}>
//           <h1>Private Medical Records</h1>
//           <p>
//             Your medical records are protected. Unlock access with Premium for
//             KES 650.
//           </p>

//           <button
//             onClick={() => (window.location.href = "/premium")}
//             style={styles.unlockButton}
//           >
//             Unlock Records
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h1>Medical Records</h1>
//       <p style={styles.subtitle}>View your private health history and reports.</p>

//       <div style={styles.summaryGrid}>
//         <div style={styles.summaryCard}>
//           <h3>Total Records</h3>
//           <h2>12</h2>
//         </div>
//         <div style={styles.summaryCard}>
//           <h3>Lab Reports</h3>
//           <h2>7</h2>
//         </div>
//         <div style={styles.summaryCard}>
//           <h3>Pending Reviews</h3>
//           <h2>1</h2>
//         </div>
//       </div>

//       <div style={styles.recordsList}>
//         {records.map((record, index) => (
//           <div key={index} style={styles.recordCard}>
//             <div>
//               <span style={styles.typeBadge}>{record.type}</span>
//               <h3>{record.title}</h3>
//               <p style={styles.text}>{record.summary}</p>
//               <p style={styles.meta}>
//                 {record.doctor} • {record.date}
//               </p>
//             </div>

//             <div style={styles.rightSide}>
//               <span
//                 style={{
//                   ...styles.statusBadge,
//                   background:
//                     record.status === "Normal"
//                       ? "#dcfce7"
//                       : record.status === "Reviewed"
//                       ? "#dbeafe"
//                       : "#fef3c7",
//                   color:
//                     record.status === "Normal"
//                       ? "#166534"
//                       : record.status === "Reviewed"
//                       ? "#1e40af"
//                       : "#92400e",
//                 }}
//               >
//                 {record.status}
//               </span>

//               <button style={styles.viewButton}>View Report</button>
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
//   recordsList: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "16px",
//   },
//   recordCard: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "18px",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "20px",
//   },
//   typeBadge: {
//     padding: "6px 10px",
//     borderRadius: "999px",
//     background: "#eef2ff",
//     color: "#3730a3",
//     fontSize: "12px",
//     fontWeight: "bold",
//   },
//   text: {
//     color: "#4b5563",
//   },
//   meta: {
//     color: "#6b7280",
//     fontSize: "14px",
//   },
//   rightSide: {
//     minWidth: "150px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-end",
//     justifyContent: "space-between",
//   },
//   statusBadge: {
//     padding: "7px 12px",
//     borderRadius: "999px",
//     fontSize: "13px",
//     fontWeight: "bold",
//   },
//   viewButton: {
//     padding: "10px 14px",
//     border: "none",
//     borderRadius: "12px",
//     background: "#1e3a8a",
//     color: "white",
//     cursor: "pointer",
//   },
//   lockCard: {
//     maxWidth: "520px",
//     background: "white",
//     padding: "30px",
//     borderRadius: "20px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//   },
//   unlockButton: {
//     padding: "13px 18px",
//     border: "none",
//     borderRadius: "12px",
//     background: "linear-gradient(135deg, #f59e0b, #d97706)",
//     color: "white",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
// };

// export default MedicalRecords;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

const MedicalRecords = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [records, setRecords] = useState([]);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (!user) return;

    axios
      .get(`${API_URL}/medical-records/${user.id}`)
      .then((res) => {
        setRecords(res.data.records || []);
        setLocked(false);
      })
      .catch((err) => {
        if (err.response?.data?.premium_required) {
          setLocked(true);
        }
      });
  }, []);

  if (!user) {
    return <div style={styles.container}>Please login to view medical records.</div>;
  }

  if (locked) {
    return (
      <div style={styles.container}>
        <div style={styles.lockCard}>
          <h1>Private Medical Records</h1>
          <p>Your records are locked. Pay KES 650 to unlock private access.</p>
          <button onClick={() => navigate("/premium")} style={styles.unlockButton}>
            Unlock Records
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Medical Records</h1>
      <p style={styles.subtitle}>View your private health history and reports.</p>

      <div style={styles.recordsList}>
        {records.length === 0 ? (
          <div style={styles.empty}>No medical records found.</div>
        ) : (
          records.map((record) => (
            <div key={record.id} style={styles.recordCard}>
              <div>
                <span style={styles.typeBadge}>{record.type}</span>
                <h3>{record.title}</h3>
                <p>{record.summary}</p>
                <p style={styles.meta}>{record.doctor} • {record.record_date}</p>
              </div>

              <div style={styles.rightSide}>
                <span style={styles.statusBadge}>{record.status}</span>
                <button style={styles.viewButton}>View Report</button>
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
  recordsList: { display: "flex", flexDirection: "column", gap: "16px", marginTop: "25px" },
  recordCard: { background: "white", padding: "20px", borderRadius: "18px", boxShadow: "0 8px 24px rgba(0,0,0,0.07)", display: "flex", justifyContent: "space-between", gap: "20px" },
  typeBadge: { padding: "6px 10px", borderRadius: "999px", background: "#eef2ff", color: "#3730a3", fontWeight: "bold" },
  meta: { color: "#6b7280", fontSize: "14px" },
  rightSide: { display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" },
  statusBadge: { padding: "7px 12px", borderRadius: "999px", background: "#dcfce7", color: "#166534", fontWeight: "bold" },
  viewButton: { padding: "10px 14px", border: "none", borderRadius: "12px", background: "#1e3a8a", color: "white" },
  lockCard: { maxWidth: "520px", background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
  unlockButton: { padding: "13px 18px", border: "none", borderRadius: "12px", background: "#d97706", color: "white", fontWeight: "bold" },
  empty: { background: "white", padding: "25px", borderRadius: "18px" },
};

export default MedicalRecords;