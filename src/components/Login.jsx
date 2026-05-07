



// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     // fake login
//     localStorage.setItem("user", JSON.stringify(form));

//     navigate("/dashboard");
//   };

//   return (
//   <div className="page-content">
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2>Welcome Back 👋</h2>
//         <p style={styles.subtitle}>Login to continue</p>

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             value={form.email}
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>

//         <p style={styles.footer}>
//           Don’t have an account?{" "}
//           <Link to="/signup">Sign up</Link>
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
//     background: "#f4f6f9",
//   },

//   card: {
//     width: "350px",
//     padding: "30px",
//     background: "#fff",
//     borderRadius: "12px",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//     textAlign: "center",
//   },

//   subtitle: {
//     color: "#777",
//     marginBottom: "20px",
//   },

//   input: {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     outline: "none",
//   },

//   button: {
//     width: "100%",
//     padding: "12px",
//     background: "#1e3a8a",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },

//   footer: {
//     marginTop: "15px",
//     fontSize: "14px",
//   },
// };

// export default Login;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter your email and password");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/login", {
        email: form.email,
        password: form.password,
      });

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (error) {
      alert("Invalid email or password");
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Login to continue to Medic Hub</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
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
            Login
          </button>
        </form>

        <p style={styles.footer}>
          Don’t have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign Up
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
    maxWidth: "400px",
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

export default Login;