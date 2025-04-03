const Patient = require('./model');

const registerPatient = async (req, res) => {
    try {
        const { patient_id, name, contact } = req.body;

        // Validate input
        if (!patient_id || !name || !contact) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if patient already exists
        const existingPatient = await Patient.findOne({ patient_id });
        if (existingPatient) {
            return res.status(400).json({ message: "Patient ID already exists." });
        }

        // Save new patient
        const newPatient = new Patient({ patient_id, name, contact });
        await newPatient.save();

        res.status(201).json({ message: "Patient registered successfully", patient: newPatient });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { registerPatient };