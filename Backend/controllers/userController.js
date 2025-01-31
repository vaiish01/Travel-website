// controllers/userController.js
const User = require("../models/User");

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract userId from JWT token

    // Find user in the database, excluding the password field
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUserProfile };
