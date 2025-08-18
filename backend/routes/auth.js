const express = require('express');
const router = express.Router();

// TODO: replace with real JWT login later
router.post('/login', (req, res) => {
  res.json({ message: 'Login route works (placeholder)' });
});

module.exports = router;
