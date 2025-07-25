const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');
const trips = require('../trips.json');
router.get('/api/trips', async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch trips' });
    }
});



// Use "/trips" as the route path to match the assignment
router.get('/trips', (req, res) => {
    res.render('trips', { trips });
});

module.exports = router;
