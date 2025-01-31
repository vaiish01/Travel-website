const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
    try {
        const { user, destination, date, status } = req.body;

        if (!user || !destination || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const booking = new Booking({ user, destination, date, status });
        await booking.save();

        res.status(201).json({ message: "Booking created successfully", booking });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
