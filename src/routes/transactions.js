const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).send(transactions);
      } catch (error) {
        res.status(500).send(error);
      }
});

router.post('/', async (req, res) => {
    const transaction = new Transaction(req.body);
    try {
        await transaction.save();
        res.status(201).send(transaction);
      } catch (error) {
        res.status(400).send(error);
      }    
});

module.exports = router;