const express = require('express');
const Ride = require('../models/ride');

const router = express.Router();

const { listRides, getRideDetails } = require('../controllers/rideController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.get('/rides', authenticateToken, listRides);
router.get('/rides/:rideId', authenticateToken, getRideDetails);

module.exports = router;

// List Rides
router.get('/rides', async (req, res) => {
  const rides = [
    { rideId: '1', distance: 10, fare: 100 },
    { rideId: '2', distance: 20, fare: 200 }
  ]; // Mock data or database query
  res.status(200).json(rides);
});

// Ride Details
router.get('/rides/:rideId', async (req, res) => {
  const { rideId } = req.params;
  const ride = { rideId, distance: 10, fare: 100, details: "Detailed mock data" }; // Mock data
  res.status(200).json(ride);
});

module.exports = router;
