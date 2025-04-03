const express = require('express');
const { bookAppointment } = require('./controller');
const router = express.Router();

router.post('/appointments/book', bookAppointment);

module.exports = router;