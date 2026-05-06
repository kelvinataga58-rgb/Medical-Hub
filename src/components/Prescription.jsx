
const Prescription = () => {
  const prescriptions = [
    { name: "Paracetamol", dosage: "500mg", status: "Take twice daily" },
    { name: "Amoxicillin", dosage: "250mg", status: "After meals" },
  ];

  return (
  <div className="page-content">
    <div style={styles.container}>
      <h1>Prescriptions</h1>

      {prescriptions.map((med, index) => (
        <div key={index} style={styles.card}>
          <h3>{med.name}</h3>
          <p>{med.dosage}</p>
          <span style={styles.note}>{med.status}</span>
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
  note: {
    color: "gray",
    fontSize: "14px",
  },
};

export default Prescription;