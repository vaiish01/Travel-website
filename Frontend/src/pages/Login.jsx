import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await api.post("/users/login", { email, password });

      // Store the token in localStorage
      localStorage.setItem("token", response.data.token);
      console.log("Stored Token:", localStorage.getItem("token")); // Debugging

      // Redirect user to the dashboard after successful login
      navigate("/dashboard"); // Navigate to the dashboard page
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
          width: "50%", // Increased width
          maxWidth: "500px", // Limit max width
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "#333", fontSize: "28px" }}>
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            width: "100%",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            width: "100%",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#28a745", // Updated color to green
            color: "white",
            padding: "15px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "18px",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
        {error && (
          <p
            style={{
              color: "red",
              marginTop: "15px",
              fontSize: "16px",
            }}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
