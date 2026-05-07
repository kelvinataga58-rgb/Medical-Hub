import { useState } from "react";
import { useNavigate } from "react-router-dom";


const doctors = [

  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    status: "Available",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    status: "Busy",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Dentist",
    status: "Available",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. David Brown",
    specialty: "Neurologist",
    status: "Offline",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Amina Yusuf",
    specialty: "Pediatrician",
    status: "Available",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedic",
    status: "Available",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Olivia Taylor",
    specialty: "Gynecologist",
    status: "Busy",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Daniel Kim",
    specialty: "Psychiatrist",
    status: "Available",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Sophia Martinez",
    specialty: "ENT Specialist",
    status: "Offline",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Ethan Carter",
    specialty: "General Surgeon",
    status: "Available",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Grace Thompson",
    specialty: "Radiologist",
    status: "Busy",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Noah Anderson",
    specialty: "Oncologist",
    status: "Available",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Mia Robinson",
    specialty: "Ophthalmologist",
    status: "Available",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Lucas Walker",
    specialty: "Urologist",
    status: "Offline",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Chloe Harris",
    specialty: "Endocrinologist",
    status: "Available",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=400&q=80",
  },
];

const AvailableDoctors = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [status, setStatus] = useState("All");

  const specialties = ["All", ...new Set(doctors.map((doc) => doc.specialty))];
  const statuses = ["All", "Available", "Busy", "Offline"];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty =
      specialty === "All" || doctor.specialty === specialty;

    const matchesStatus = status === "All" || doctor.status === status;

    return matchesSearch && matchesSpecialty && matchesStatus;
  });

  const handleBook = (doctor) => {
    navigate("/appointments", { state: { doctor } });
  };

  return (
  <div className="page-content">
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Available Doctors</h1>
          <p style={styles.subtitle}>
            Search and book appointments with trusted specialists
          </p>
        </div>
      </div>

      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search doctor or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          style={styles.select}
        >
          {specialties.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.select}
        >
          {statuses.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="doctor-grid" style={styles.grid}>
        {filteredDoctors.map((doc, index) => (
          <div key={index} style={styles.card}>
            <img src={doc.image} alt={doc.name} style={styles.image} />

            <div style={styles.cardBody}>
              <h3 style={styles.name}>{doc.name}</h3>
              <p style={styles.specialty}>{doc.specialty}</p>

              <div style={styles.meta}>
                <span
                  style={{
                    ...styles.badge,
                    background:
                      doc.status === "Available"
                        ? "#dcfce7"
                        : doc.status === "Busy"
                        ? "#fef3c7"
                        : "#e5e7eb",
                    color:
                      doc.status === "Available"
                        ? "#166534"
                        : doc.status === "Busy"
                        ? "#92400e"
                        : "#374151",
                  }}
                >
                  {doc.status}
                </span>

                <span style={styles.rating}>⭐ {doc.rating}</span>
              </div>

              <button
                style={{
                  ...styles.button,
                  opacity: doc.status === "Available" ? 1 : 0.55,
                  cursor:
                    doc.status === "Available" ? "pointer" : "not-allowed",
                }}
                disabled={doc.status !== "Available"}
                onClick={() => handleBook(doc)}
              >
                {doc.status === "Available"
                  ? "Book Appointment"
                  : "Unavailable"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div style={styles.empty}>
          <h3>No doctors found</h3>
          <p>Try changing your search or filters.</p>
        </div>
      )}
    </div>
  </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    background: "#f5f7fb",
    minHeight: "100vh",
  },

  header: {
    marginBottom: "20px",
  },

  title: {
    margin: 0,
    color: "#111827",
  },

  subtitle: {
    color: "#6b7280",
    marginTop: "6px",
  },

  filters: {
    display: "flex",
    gap: "12px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },

  searchInput: {
    flex: "1",
    minWidth: "240px",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    outline: "none",
    background: "white",
  },

  select: {
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    background: "white",
    outline: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "22px",
  },

  card: {
    background: "white",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    border: "1px solid rgba(0,0,0,0.05)",
  },

  image: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
  },

  cardBody: {
    padding: "18px",
  },

  name: {
    margin: "0 0 6px",
    color: "#111827",
  },

  specialty: {
    color: "#6b7280",
    margin: "0 0 14px",
  },

  meta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },

  badge: {
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "600",
  },

  rating: {
    fontSize: "14px",
    color: "#374151",
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #3b82f6, #1e3a8a)",
    color: "white",
    fontWeight: "600",
  },

  empty: {
    marginTop: "40px",
    textAlign: "center",
    color: "#6b7280",
  },
};

export default AvailableDoctors;