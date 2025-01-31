import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";
import Login from "./pages/Login";    // Import Login Page
import Signup from "./pages/Signup";  // Import Signup Page

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} /> {/* Add Login Route */}
          <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
