const express = require("express");
const Destination = require("../models/Destination");
const router = express.Router();

// ✅ Add a new destination (Admin only)
router.post("/", async (req, res) => {
  try {
    const { name, location, description, price, image } = req.body;

    const newDestination = new Destination({ name, location, description, price, image });
    await newDestination.save();

    res.status(201).json({ message: "Destination added successfully", destination: newDestination });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Get all destinations
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Get a single destination by ID
router.get("/:id", async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ message: "Destination not found" });

    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Update a destination (Admin only)
router.put("/:id", async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedDestination) return res.status(404).json({ message: "Destination not found" });

    res.json({ message: "Destination updated successfully", destination: updatedDestination });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Delete a destination (Admin only)
router.delete("/:id", async (req, res) => {
  try {
    const deletedDestination = await Destination.findByIdAndDelete(req.params.id);

    if (!deletedDestination) return res.status(404).json({ message: "Destination not found" });

    res.json({ message: "Destination deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
