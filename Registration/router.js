const express = require('express');
const router = express.Router();
const { registerPatient } = require('./controller'); // Import controller

// Define routes
router.post('/register', registerPatient);

module.exports = router;