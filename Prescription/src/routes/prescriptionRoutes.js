const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController');

// CRUD routes
router.post('/', prescriptionController.createPrescription);
router.get('/', prescriptionController.getAllPrescriptions);
router.get('/:id', prescriptionController.getPrescription);
router.put('/:id', prescriptionController.updatePrescription);
router.delete('/:id', prescriptionController.deletePrescription);

module.exports = router;