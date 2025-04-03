const Prescription = require('../controllers/Prescription');

const getPrescriptionsByPatientId = async (patientId) => {
  try {
    const prescriptions = await Prescription.find({ patient_id: patientId });
    return prescriptions;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getPrescriptionsByPatientId,
};