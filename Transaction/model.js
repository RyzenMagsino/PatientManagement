const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    patient_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Patient' },
    amount: { type: Number, required: true },
    payment_method: { type: String, enum: ['cash', 'card', 'insurance'], required: true },
    created_at: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;