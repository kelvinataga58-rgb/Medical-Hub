
// import React from "react";

// function Dashboard() {
//   return (
//     <div className="dashboard">
      
//       {/* HEADER */}
//       <div className="dashboard-header">
//         <h2>Welcome back, John 👋</h2>
//         <p>Here’s your health overview</p>
//       </div>

//       {/* STATS */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <div className="icon">📅</div>
//           <div>
//             <h3>2</h3>
//             <p>Appointments</p>
//           </div>
//         </div>

//         <div className="stat-card">
//           <div className="icon">💊</div>
//           <div>
//             <h3>3</h3>
//             <p>Prescriptions</p>
//           </div>
//         </div>

//         <div className="stat-card">
//           <div className="icon">📁</div>
//           <div>
//             <h3>5</h3>
//             <p>Medical Records</p>
//           </div>
//         </div>

//         <div className="stat-card highlight">
//           <div className="icon">❤️</div>
//           <div>
//             <h3>92%</h3>
//             <p>Health Score</p>
//           </div>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="dashboard-content">
        
//         {/* APPOINTMENTS */}
//         <div className="card-section">
//           <h3>Upcoming Appointments</h3>

//           <div className="list-item">
//             <div>
//               <strong>Dr. Sarah Johnson</strong>
//               <p>Cardiologist • 30 Apr 2026 • 3:00 PM</p>
//             </div>
//             <span className="badge upcoming">Upcoming</span>
//           </div>

//           <div className="list-item">
//             <div>
//               <strong>Dr. Emily Williams</strong>
//               <p>Pediatrician • 02 May 2026 • 10:00 AM</p>
//             </div>
//             <span className="badge upcoming">Upcoming</span>
//           </div>
//         </div>

//         {/* PRESCRIPTIONS */}
//         <div className="card-section">
//           <h3>Recent Prescriptions</h3>

//           <div className="list-item">
//             <div>
//               <strong>Paracetamol</strong>
//               <p>2x daily</p>
//             </div>
//           </div>

//           <div className="list-item">
//             <div>
//               <strong>Amoxicillin</strong>
//               <p>3x daily</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <motion.div 
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Welcome back, John 👋</h2>
        <p>Here’s your health overview</p>
      </motion.div>

      {/* STATS */}
      <div className="stats-grid">
        {[ 
          { icon: "📅", value: "2", label: "Appointments" },
          { icon: "💊", value: "3", label: "Prescriptions" },
          { icon: "📁", value: "5", label: "Records" },
          { icon: "❤️", value: "92%", label: "Health Score", highlight: true }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`stat-card ${item.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">{item.icon}</div>
            <div>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="dashboard-content">

        {/* APPOINTMENTS */}
        <motion.div 
          className="card-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Upcoming Appointments</h3>

          {["Dr. Sarah Johnson", "Dr. Emily Williams"].map((doc, i) => (
            <motion.div 
              key={i}
              className="list-item"
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <strong>{doc}</strong>
                <p>Consultation • Upcoming</p>
              </div>
              <span className="badge upcoming">Upcoming</span>
            </motion.div>
          ))}
        </motion.div>

        {/* PRESCRIPTIONS */}
        <motion.div 
          className="card-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Recent Prescriptions</h3>

          {["Paracetamol", "Amoxicillin"].map((med, i) => (
            <motion.div 
              key={i}
              className="list-item"
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <strong>{med}</strong>
                <p>Take as prescribed</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default Dashboard;