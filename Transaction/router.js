const express = require('express');
const router = express.Router();
const transactionController = require('./controller');

router.post('/patients/:id/pay-bill', transactionController.payBill);

module.exports = router;