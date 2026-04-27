import React, { useState } from "react";

function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  return (
    <div>
      <h2>Create Account</h2>
      <input placeholder="Name" onChange={(e) => setUser({...user, name: e.target.value})} /><br />
      <input placeholder="Email" onChange={(e) => setUser({...user, email: e.target.value})} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})} /><br />
      <button>Register</button>
    </div>
  );
}

export default Signup;