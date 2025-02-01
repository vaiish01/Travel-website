import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const successMessage = `Login Successful! Welcome back, ${formData.email}`;
    localStorage.setItem("loginMessage", successMessage);
    alert(successMessage);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
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
          width: "50%",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "#333", fontSize: "28px" }}>
          Login
        </h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
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
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
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
            backgroundColor: "#28a745",
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
      </form>
    </div>
  );
};

export default Login;
