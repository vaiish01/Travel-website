const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
 
  image: { type: String, required: true },
  region: { 
    type: String, 
    required: true, 
    enum: ["North India", "South India", "East India", "West India"] 
  }
});

module.exports = mongoose.model("Destination", DestinationSchema);
