const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

router.post('/', async (req, res) => {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
});

module.exports = router;