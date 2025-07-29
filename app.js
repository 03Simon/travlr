require('./db'); 
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const travelRoutes = require('./routes/travel');
const apiRoutes = require('./app_api/routes/trips');

const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', travelRoutes);
app.use('/api', apiRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

