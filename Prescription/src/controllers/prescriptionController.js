const prescriptionService = require('../services/prescriptionService');

const getPatientPrescriptions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prescriptions = await prescriptionService.getPrescriptionsByPatientId(id);

    if (!prescriptions || prescriptions.length === 0) {
      return res.status(404).json({
        message: 'No prescriptions found for this patient',
      });
    }

    res.status(200).json({
      success: true,
      count: prescriptions.length,
      data: prescriptions,
    });
  } catch (error) {
    next(error);
  }
};

const createPrescription = (req, res) => {
  res.send('Create prescription logic here');
};

const getAllPrescriptions = (req, res) => {
  res.send('Get all prescriptions logic here');
};

const getPrescription = (req, res) => {
  res.send(`Get prescription with ID: ${req.params.id}`);
};

const updatePrescription = (req, res) => {
  res.send(`Update prescription with ID: ${req.params.id}`);
};

const deletePrescription = (req, res) => {
  res.send(`Delete prescription with ID: ${req.params.id}`);
};

module.exports = {
  getPatientPrescriptions,
  createPrescription,
  getAllPrescriptions,
  getPrescription,
  updatePrescription,
  deletePrescription,
};