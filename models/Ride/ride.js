const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  rideId: { type: String, required: true },
  distance: { type: Number, required: true },
  fare: { type: Number, required: true }
});

module.exports = mongoose.model('Ride', rideSchema);
    