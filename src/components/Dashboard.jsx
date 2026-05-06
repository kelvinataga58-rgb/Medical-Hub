
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
 <div className="page-layout">
  <Sidebar />
    <div className="page-content">

      <div style={styles.container}>
        <h1>Welcome back, John 👋</h1>
        <p style={{ color: "gray" }}>Here’s your health overview</p>
       

        {/* TOP CARDS */}
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Appointments</h3>
            <p style={styles.big}>2</p>
            <span style={styles.sub}>Next: Tomorrow 10AM</span>
          </div>

          <div style={styles.card}>
            <h3>Prescriptions</h3>
            <p style={styles.big}>3</p>
            <span style={styles.sub}>1 needs refill</span>
          </div>

          <div style={styles.card}>
            <h3>Records</h3>
            <p style={styles.big}>5</p>
            <span style={styles.sub}>Updated recently</span>
          </div>

          <div style={{ ...styles.card, background: "#e6f0ff" }}>
            <h3>Health Score</h3>
            <p style={styles.big}>92%</p>
            <span style={styles.sub}>Excellent</span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div style={styles.mainGrid}>
          
          {/* Upcoming Appointments */}
          <div style={styles.cardLarge}>
            <h2>Upcoming Appointments</h2>

            <div style={styles.item}>
              <strong>Dr. Sarah Johnson</strong>
              <p>Consultation • Tomorrow 10:00 AM</p>
            </div>

            <div style={styles.item}>
              <strong>Dr. Emily Williams</strong>
              <p>Dental Check • Friday 2:00 PM</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={styles.cardLarge}>
            <h2>Recent Activity</h2>

            <ul style={{ paddingLeft: "20px" }}>
              <li>Prescription updated</li>
              <li>Blood test results uploaded</li>
              <li>Appointment booked</li>
            </ul>
          </div>

          {/* Health Trends (simple visual feel) */}
          <div style={styles.cardLarge}>
            <h2>Health Trends</h2>
            <div style={styles.fakeChart}>
              <div style={{ height: "60%", background: "#4CAF50" }}></div>
              <div style={{ height: "80%", background: "#2196F3" }}></div>
              <div style={{ height: "50%", background: "#FFC107" }}></div>
              <div style={{ height: "70%", background: "#9C27B0" }}></div>
            </div>
          </div>

          {/* Notifications */}
          <div style={styles.cardLarge}>
            <h2>Notifications</h2>
            <p>🔔 Appointment reminder tomorrow</p>
            <p>💊 Time to take medication</p>
          </div>

          {/* Quick Actions */}
          <div style={styles.cardLarge}>
            <h2>Quick Actions</h2>

            <button style={styles.button}>Book Appointment</button>
            <button style={styles.button}>Upload Report</button>
            <button style={styles.button}>Chat with Doctor</button>
          </div>

          {/* Doctor Card */}
          <div style={styles.cardLarge}>
            <h2>Your Doctor</h2>
            <p><strong>Dr. Sarah Johnson</strong></p>
            <p>Cardiologist</p>
            <button style={styles.button}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    width: "100%",
    background: "#f5f7fb",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },

  cardLarge: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },

  big: {
    fontSize: "28px",
    fontWeight: "bold",
  },

  sub: {
    color: "gray",
    fontSize: "14px",
  },

  item: {
    marginTop: "10px",
    paddingBottom: "10px",
    borderBottom: "1px solid #eee",
  },

  fakeChart: {
    display: "flex",
    alignItems: "flex-end",
    gap: "10px",
    height: "120px",
  },

  button: {
    display: "block",
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#1e3a8a",
    color: "white",
    cursor: "pointer",
    width: "100%",
  },
};

export default Dashboard;