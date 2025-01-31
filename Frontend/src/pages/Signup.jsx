import React, { useState } from "react";
import api from "../services/api"; 
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check if fields are empty
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    console.log("🔹 Sending signup request:", { name, email, password });

    try {
      // ✅ Make API request
      const response = await api.post("/users/signup", { name, email, password });

      console.log("✅ Signup successful:", response.data);

      navigate("/login"); // Redirect on success
    } catch (err) {
      console.error("❌ Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  // Inline CSS styles for a larger size
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f9",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "40px", // Increased padding for larger form
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px", // Increased width for a larger form
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "15px", // Increased padding for larger inputs
    margin: "15px 0", // Increased margin for more space
    borderRadius: "6px", // Slightly rounded edges
    border: "1px solid #ddd",
    fontSize: "16px", // Increased font size for better readability
  };

  const buttonStyle = {
    backgroundColor: "#28a745",
    color: "white",
    padding: "15px 20px", // Increased padding for the button
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px", // Increased font size for the button
  };

  const errorStyle = {
    color: "red",
    marginTop: "15px", // Increased margin for error message
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input 
          style={inputStyle} 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          style={inputStyle} 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          style={inputStyle} 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button style={buttonStyle} type="submit">Sign Up</button>
        {error && <p style={errorStyle}>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
