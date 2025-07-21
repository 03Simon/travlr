const express = require('express');
const router = express.Router();
const trips = require('../trips.json');

router.get('/', (req, res) => {
    res.render('index', { trips });
});

module.exports = router;
