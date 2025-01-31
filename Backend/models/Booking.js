const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: String, required: true }, // Store user as a name (string)
    destination: { type: String, required: true }, // Store destination as a name (string)
    date: { type: Date, required: true },
    status: { type: String, enum: ["pending", "confirmed", "canceled"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
