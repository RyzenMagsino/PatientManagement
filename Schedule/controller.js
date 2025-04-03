const Appointment = require('./model');
const moment = require('moment');

exports.bookAppointment = async (req, res) => {
    try {
        const { doctor_name, date_time, reason } = req.body;
        const formattedDate = moment(date_time, "MM:DD:YYYY, HH:mm").format("MM:DD:YYYY, HH:mm");
        const newAppointment = new Appointment({ doctor_name, date_time: formattedDate, reason });
        await newAppointment.save();
        res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
    } catch (error) {
        res.status(500).json({ message: 'Error booking appointment', error: error.message });
    }
};