const Transaction = require('./model');

exports.payBill = async (req, res) => {
    try {
        const { amount, payment_method } = req.body;
        const patient_id = req.params.id;
        
        const transaction = new Transaction({ patient_id, amount, payment_method });
        await transaction.save();
        
        res.status(201).json({ message: 'Payment recorded successfully', transaction });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};