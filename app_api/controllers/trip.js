
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const listTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving trips", error: err });
  }
};

module.exports = {
  listTrips,
};
