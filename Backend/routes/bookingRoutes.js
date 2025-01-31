const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// ✅ Create a new booking
router.post("/", async (req, res) => {
  try {
    console.log("🔍 Received Data:", req.body);

    const { user, destination, date } = req.body;

    // Validate required fields
    if (!user || !destination || !date) {
      return res.status(400).json({ message: "User, destination, and date are required" });
    }

    // Create and save booking
    const newBooking = new Booking({ user, destination, date });
    await newBooking.save();

    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});




// ✅ Get all bookings (with user & destination details)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user destination");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ Cancel a booking
router.delete("/user/:name", async (req, res) => {
  try {
    const { name } = req.params;

    // Find and delete booking(s) by user name
    const deletedBooking = await Booking.findOneAndDelete({ user: name });

    if (!deletedBooking) {
      return res.status(404).json({ message: "No booking found for this user" });
    }

    res.json({ message: "Booking deleted successfully", booking: deletedBooking });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
