const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/travlr'; // You can rename 'travlr' if needed
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log(`✅ Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('⚠️ Mongoose disconnected');
});

module.exports = mongoose;
