const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  let token = req.header("Authorization");
  console.log("Received Token in Backend:", token); // Debugging

  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  if (token.startsWith("Bearer ")) {
    token = token.replace("Bearer ", "");
  } else {
    return res.status(403).json({ message: "Invalid token format" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("JWT Verification Error:", err.message);
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = user; // Attach user to request
    next();
  });
};

module.exports = authenticateJWT;
