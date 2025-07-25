const mongoose = require('./db');
const Trip = require('./models/trip');
const tripsData = require('./trips.json');

// Optional: Clear existing trips
Trip.deleteMany({})
  .then(() => {
    return Trip.insertMany(tripsData);
  })
  .then(() => {
    console.log('✅ Trips data seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('❌ Error seeding data:', err);
    mongoose.connection.close();
  });
