
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip');

router.get('/trips', tripController.listTrips);

module.exports = router;
