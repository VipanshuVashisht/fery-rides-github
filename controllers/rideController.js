const rides = require('../data/mockRides.json');

exports.listRides = (req, res) => {
  res.status(200).json(rides);
};

exports.getRideDetails = (req, res) => {
  const { rideId } = req.params;
  const ride = rides.find(r => r.rideId === rideId);
  if (!ride) return res.status(404).json({ error: 'Ride not found.' });
  res.status(200).json(ride);
};
