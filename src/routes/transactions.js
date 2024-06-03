const express = require('express');
const router = express.Router();

let transactions = [];

router.get('/', (req, res) => {
    res.json(transactions);
});

router.post('/', (req, res) => {
    const transaction = req.body;
    transactions.push(transaction);
    res.status(201).json(transaction);
});

module.exports = router;