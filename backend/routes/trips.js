const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ name: 'Sample Trip', description: 'Demo', length: 3, perPerson: 999 }]);
});

module.exports = router;
