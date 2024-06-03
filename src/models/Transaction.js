const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    date: Date,
    amount: Number,
    category: String,
    description: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
