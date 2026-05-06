import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCalendar, FaComments, FaFileMedical, FaPills } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Appointments", path: "/appointments", icon: <FaCalendar /> },
    { name: "Availabe Doctors", path: "/doctors", icon: <FaComments /> },
    { name: "Records", path: "/records", icon: <FaFileMedical /> },
    { name: "Prescription", path: "/prescription", icon: <FaPills /> },
  ];

  return (
    <div className="sidebar" style={styles.sidebar}>
      <h2 style={{ color: "white" }}>Medic Hub</h2>

      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          style={{
            ...styles.link,
            background:
              location.pathname === item.path ? "#ffffff33" : "transparent",
          }}
        >
          {item.icon} <span style={{ marginLeft: 10 }}>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#1e3a8a",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "8px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
  },
};

export default Sidebar;