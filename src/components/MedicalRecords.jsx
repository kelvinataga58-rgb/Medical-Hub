const MedicalRecords = () => {
  const records = [
    { title: "Blood Test", date: "2025-01-10", status: "Normal" },
    { title: "X-Ray Report", date: "2025-02-05", status: "Reviewed" },
  ];

  return (
  <div className="page-content">
    <div style={styles.container}>
      <h1>Medical Records</h1>

      {records.map((rec, index) => (
        <div key={index} style={styles.card}>
          <h3>{rec.title}</h3>
          <p>Date: {rec.date}</p>
          <span style={styles.status}>{rec.status}</span>
        </div>
      ))}
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
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  status: {
    color: "#1e3a8a",
    fontWeight: "bold",
  },
};

export default MedicalRecords;