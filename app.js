const express = require('express');
const path = require('path');

const app = express();

// Set up handlebars view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
const travelRouter = require('./app_server/routes/travel');
app.use('/travel', travelRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Travlr app running on http://localhost:${port}`);
});
