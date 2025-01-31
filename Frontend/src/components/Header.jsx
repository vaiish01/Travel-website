import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hovered, setHovered] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    backgroundColor: "#2a3d55",
    color: "white",
  };

  const navStyle = {
    display: "flex",
    gap: "30px",
  };

  const linkStyle = (isHovered) => ({
    textDecoration: "none",
    color: isHovered ? "orange" : "white",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  });

  const dropdownStyle = {
    position: "absolute",
    top: "60px",
    right: "50px",
    backgroundColor: "#2a3d55",
    padding: "10px 20px",
    borderRadius: "5px",
    display: showDropdown ? "block" : "none",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <header style={headerStyle}>
      <h1>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>Travelista</div>
      </h1>
      <nav style={navStyle}>
        <Link
          to="/"
          style={linkStyle(hovered === "home")}
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}
        >
          Home
        </Link>
        <Link
          to="/destinations"
          style={linkStyle(hovered === "destinations")}
          onMouseEnter={() => setHovered("destinations")}
          onMouseLeave={() => setHovered(null)}
        >
          Destinations
        </Link>
        <Link
          to="/booking"
          style={linkStyle(hovered === "booking")}
          onMouseEnter={() => setHovered("booking")}
          onMouseLeave={() => setHovered(null)}
        >
          Booking
        </Link>
        <div
          style={linkStyle(hovered === "login")}
          onMouseEnter={() => setHovered("login")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown
        >
          Login/Signup
          {showDropdown && (
            <div style={dropdownStyle}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white", display: "block", margin: "5px 0" }}
                onClick={() => setShowDropdown(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white", display: "block", margin: "5px 0" }}
                onClick={() => setShowDropdown(false)}
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
