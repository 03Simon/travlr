const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    location: String,
    featured: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Trip', tripSchema);
