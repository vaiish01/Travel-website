import { useEffect, useState } from "react";
import api from "../services/api"; // Axios instance or your API service file
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirect

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate(); // useNavigate for redirecting

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token from Local Storage:", token); // Check if token is retrieved

        if (!token) {
          setError("No token found. Please log in again.");
          navigate("/login"); // Redirect to login if token is not found
          return;
        }

        const response = await api.get("/users/profile", {
          headers: { Authorization: `Bearer ${token}` }, // Attach token
        });

        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user data", err);
        setError("Failed to fetch profile data");
        if (err.response && err.response.status === 403) {
          // If token is expired or invalid, redirect to login
          navigate("/login");
        }
      } finally {
        setLoading(false); // Stop loading once the data is fetched or error occurs
      }
    };

    fetchUserData();
  }, [navigate]); // Adding navigate to dependency array

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <p>{error}</p>}
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Dashboard;
