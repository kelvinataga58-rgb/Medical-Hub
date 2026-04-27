import React from "react";
import { useNavigate } from "react-router-dom";

function Premium() {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Processing M-Pesa payment of KES 650...");
    navigate("/records");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Premium Plan</h2>
        <p><strong>KES 650 / month</strong></p>

        <ul>
          <li>✔ Full medical history access</li>
          <li>✔ Doctor notes & reports</li>
          <li>✔ Priority appointments</li>
        </ul>

        <button onClick={handlePayment}>Upgrade Now</button>
      </div>
    </div>
  );
}

export default Premium;