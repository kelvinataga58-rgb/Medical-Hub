// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Premium = () => {
//   const navigate = useNavigate();

//   const [phone, setPhone] = useState("");
//   const [premium, setPremium] = useState(
//     localStorage.getItem("premium") === "true"
//   );
//   const [loading, setLoading] = useState(false);

//   const handlePayment = () => {
//     if (!phone.trim()) {
//       alert("Please enter your M-Pesa phone number");
//       return;
//     }

//     if (!phone.startsWith("254") || phone.length !== 12) {
//       alert("Enter phone number in this format: 254712345678");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       localStorage.setItem("premium", "true");
//       setPremium(true);
//       setLoading(false);
//       alert("Payment successful! Medical records unlocked.");
//       navigate("/records");
//     }, 1500);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.hero}>
//         <span style={styles.badge}>Premium Access</span>
//         <h1>Unlock Private Medical Records</h1>
//         <p>
//           Pay a one-time fee of <strong>KES 650</strong> to access your private
//           health reports, lab results, prescriptions, and medical history.
//         </p>
//       </div>

//       <div style={styles.grid}>
//         <div style={styles.card}>
//           <h2>Medic Hub Premium</h2>
//           <h1 style={styles.price}>KES 650</h1>
//           <p style={styles.subtext}>One-time payment</p>

//           <ul style={styles.list}>
//             <li>✅ Access private medical records</li>
//             <li>✅ View lab reports and doctor notes</li>
//             <li>✅ Secure health history dashboard</li>
//             <li>✅ Prescription tracking</li>
//             <li>✅ Priority doctor access</li>
//           </ul>

//           {premium ? (
//             <button style={styles.activeButton} onClick={() => navigate("/records")}>
//               Premium Active — View Records
//             </button>
//           ) : (
//             <>
//               <input
//                 type="text"
//                 placeholder="M-Pesa number e.g. 254712345678"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 style={styles.input}
//               />

//               <button onClick={handlePayment} style={styles.button}>
//                 {loading ? "Processing Payment..." : "Pay KES 650"}
//               </button>
//             </>
//           )}
//         </div>

//         <div style={styles.infoCard}>
//           <h3>What happens after payment?</h3>
//           <p>
//             Once payment is completed, your account is upgraded and private
//             records become available immediately.
//           </p>

//           <div style={styles.feature}>
//             <strong>🔒 Secure Access</strong>
//             <span>Your private records stay locked until payment.</span>
//           </div>

//           <div style={styles.feature}>
//             <strong>📄 Medical History</strong>
//             <span>View lab reports, doctor notes, and test results.</span>
//           </div>

//           <div style={styles.feature}>
//             <strong>💊 Prescription Insights</strong>
//             <span>Track medications and refill reminders.</span>
//           </div>
//         </div>
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

//   hero: {
//     background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
//     color: "white",
//     padding: "35px",
//     borderRadius: "22px",
//     marginBottom: "25px",
//   },

//   badge: {
//     background: "rgba(255,255,255,0.2)",
//     padding: "7px 12px",
//     borderRadius: "999px",
//     fontSize: "13px",
//     fontWeight: "bold",
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "22px",
//   },

//   card: {
//     background: "white",
//     padding: "28px",
//     borderRadius: "22px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//   },

//   infoCard: {
//     background: "white",
//     padding: "28px",
//     borderRadius: "22px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//   },

//   price: {
//     color: "#1e3a8a",
//     marginBottom: "0",
//   },

//   subtext: {
//     color: "#6b7280",
//   },

//   list: {
//     lineHeight: "2",
//     paddingLeft: "20px",
//   },

//   input: {
//     width: "100%",
//     padding: "13px",
//     borderRadius: "12px",
//     border: "1px solid #d1d5db",
//     marginBottom: "12px",
//   },

//   button: {
//     width: "100%",
//     padding: "14px",
//     border: "none",
//     borderRadius: "12px",
//     background: "linear-gradient(135deg, #16a34a, #15803d)",
//     color: "white",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },

//   activeButton: {
//     width: "100%",
//     padding: "14px",
//     border: "none",
//     borderRadius: "12px",
//     background: "#1e3a8a",
//     color: "white",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },

//   feature: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "5px",
//     padding: "15px",
//     background: "#f9fafb",
//     borderRadius: "14px",
//     marginTop: "12px",
//     color: "#4b5563",
//   },
// };

// export default Premium;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

const Premium = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [phone, setPhone] = useState(user?.phone || "");
  const [loading, setLoading] = useState(false);

  const activatePremium = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!phone.trim()) {
      alert("Enter your M-Pesa phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/premium/activate`, {
        user_id: user.id,
        amount: 650,
      });

      if (res.data.success) {
        const updatedUser = { ...user, is_premium: 1 };
        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Premium activated. Medical records unlocked.");
        navigate("/records");
      }
    } catch (error) {
      alert("Premium activation failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <span style={styles.badge}>Premium Access</span>
        <h1>Unlock Private Medical Records</h1>
        <p>Pay KES 650 to access your private reports and health history.</p>
      </div>

      <div style={styles.card}>
        <h2>Medic Hub Premium</h2>
        <h1 style={styles.price}>KES 650</h1>
        <p style={styles.subtext}>One-time access fee</p>

        <ul style={styles.list}>
          <li>Access private medical records</li>
          <li>View lab reports and doctor notes</li>
          <li>Track prescriptions and history</li>
          <li>Priority healthcare access</li>
        </ul>

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="M-Pesa number e.g. 254712345678"
          style={styles.input}
        />

        <button onClick={activatePremium} style={styles.button}>
          {loading ? "Processing..." : "Pay KES 650"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "30px", background: "#f5f7fb", minHeight: "100vh" },
  hero: { background: "linear-gradient(135deg, #1e3a8a, #3b82f6)", color: "white", padding: "35px", borderRadius: "22px", marginBottom: "25px" },
  badge: { background: "rgba(255,255,255,0.2)", padding: "7px 12px", borderRadius: "999px", fontWeight: "bold" },
  card: { maxWidth: "460px", background: "white", padding: "28px", borderRadius: "22px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
  price: { color: "#1e3a8a" },
  subtext: { color: "#6b7280" },
  list: { lineHeight: "2" },
  input: { width: "100%", padding: "13px", borderRadius: "12px", border: "1px solid #ddd", marginBottom: "12px" },
  button: { width: "100%", padding: "14px", border: "none", borderRadius: "12px", background: "#16a34a", color: "white", fontWeight: "bold", cursor: "pointer" },
};

export default Premium;