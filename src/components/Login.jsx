// import React, { useState } from 'react'
// import {Await, Link, useNavigate} from 'react-router-dom'
// import axios from "axios";

// const Login =()=>{

//   const[email,setEmail]=useState("");
//   const[password,setPassword]=useState("");

//   const[error,setError]=useState("");
//   const[loading,setLoading]=useState("");
//   const[success,setSuccess]=useState("");

//   const navigate = useNavigate();

//   const submit=async(e)=>{
  

//     e.preventDefault()
//     setLoading("Please wait as we upload your details")

//     try {
//        const data=new FormData();

//       data.append("email",email);
//       data.append("password",password);
     

//     const response = await axios.post("http://papii.alwaysdata.net/api/signin",data);
   
//       setLoading("")

//       // Check is the response has user item

//       if (response.data.user){
//         // If user is Found, Store user details in local storage
//         localStorage.setItem("user",JSON.stringify(response.data.user));
//         setSuccess(response.data.message);

//         //Redirect to /getproducts component

//         setTimeout(()=>{
//           navigate("/")

//         },200)
//       }
//       else{
//         // Usert not found, show error message

//         setError(response.data.message)
//       }

//       // reset your form

//       setEmail("")
//       setPassword("")


//     } catch (error) {
     
      
//     }
//   }






// return (
//     <div className='row justify-content-center'>

//       <div className='col-md-6 card shadow'>

//         <h1>Login</h1>

//         <form action="" onSubmit={submit}>

//           <p className='text-danger'>{error}</p>
//           <p className='text-warning'>{loading}</p>
//           <p className='text-success'>{success}</p>

          
//           <input type="email" placeholder='Enter your email' className='form-control' value={email}onChange={(e)=>setEmail(e.target.value)} required/>
//           <br />
//           <br />

//           <input type="password" placeholder='Enter your password' className='form-control' value={password}onChange={(e)=>setPassword(e.target.value)}required/>

//           <br />
//           <br />

//           <input type="submit" value="signin" className='btn bg-success text-white w-100'/>
//           <br />
//           <br />

//           <p>Don't have an account? <Link to="/SignUp">SignUp</Link></p>

          
          
//         </form>

//       </div>

//     </div>
//   )
// }


// export default Login

// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // your auth logic
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;





// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     localStorage.setItem("user", "true"); // fake login
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // fake login
    localStorage.setItem("user", JSON.stringify(form));

    navigate("/dashboard");
  };

  return (
  <div className="page-content">
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
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
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f9",
  },

  card: {
    width: "350px",
    padding: "30px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  subtitle: {
    color: "#777",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#1e3a8a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  footer: {
    marginTop: "15px",
    fontSize: "14px",
  },
};

export default Login;