// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify(form));
//     navigate("/dashboard");
//   };

//   return (
//   <div className="page-content">
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2>Create Account</h2>

//         <form onSubmit={handleSignup}>
//           <input
//             name="name"
//             placeholder="Full Name"
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <input
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <button style={styles.button}>Sign Up</button>
//         </form>

//         <p>
//           Already have an account?{" "}
//           <Link to="/Login">Login</Link>
//         </p>
//       </div>
//     </div>
//   </div>
//   );
// };

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#f5f7fb",
//   },

//   card: {
//     width: "350px",
//     padding: "30px",
//     background: "white",
//     borderRadius: "12px",
//     boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
//   },

//   input: {
//     width: "100%",
//     padding: "12px",
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

// export default Signup;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.phone || !form.password) {
//       alert("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await axios.post("http://127.0.0.1:5000/register", {
//         full_name: form.name,
//         email: form.email,
//         phone: form.phone,
//         password: form.password,
//       });

//       if (res.data.success) {
//         alert("Account created successfully. Please login.");
//         navigate("/login");
//       } else {
//         alert(res.data.message || "Signup failed");
//       }
//     } catch (error) {
//   console.log(error.response?.data || error);

//   alert(
//     error.response?.data?.message ||
//       "Signup failed. Please check your backend."
//   );
// }
//   };

const handleSignup = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.phone || !form.password) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const res = await axios.post("http://127.0.0.1:5000/register", {
      full_name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    });

    if (res.data.success) {

      // AUTO LOGIN AFTER SIGNUP
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: res.data.user_id,
          full_name: form.name,
          email: form.email,
          phone: form.phone,
        })
      );

      alert("Account created successfully");

      // DIRECT TO DASHBOARD
      navigate("/dashboard");
    }

  } catch (error) {
    console.log(error.response?.data || error);

    alert(
      error.response?.data?.message ||
      "Signup failed"
    );
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join Medic Hub and manage your health</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number e.g. 254712345678"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e0f2fe, #f8fafc)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "white",
    padding: "32px",
    borderRadius: "22px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
  },

  title: {
    margin: 0,
    color: "#111827",
    textAlign: "center",
  },

  subtitle: {
    color: "#6b7280",
    textAlign: "center",
    marginBottom: "24px",
  },

  input: {
    width: "100%",
    padding: "13px",
    marginBottom: "14px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #3b82f6, #1e3a8a)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "5px",
  },

  footer: {
    textAlign: "center",
    marginTop: "18px",
    color: "#6b7280",
  },

  link: {
    color: "#1e3a8a",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Signup;