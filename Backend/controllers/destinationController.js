const Destination = require("../models/Destination");

// Get all destinations
const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new destination
const addDestination = async (req, res) => {
  const { name, description, location, price } = req.body;
  try {
    const destination = await Destination.create({ name, description, location, price });
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDestinations, addDestination };
