const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const appointmentSchema = new mongoose.Schema({
    patient_id: { type: String, default: uuidv4 },
    doctor_name: { type: String, required: true },
    date_time: { type: String, required: true },
    reason: { type: String, required: true }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;