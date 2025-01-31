import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children; // Allow access to the protected route
};

export default ProtectedRoute;
