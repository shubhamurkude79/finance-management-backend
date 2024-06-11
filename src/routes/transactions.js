const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', async (req, res) => {
  const db = req.app.locals.db;
    try {
        const transactions = await db.collection('transactions').find({}).toArray();
        res.json(transactions);
        // res.status(200).send(transactions);
      } catch (err) {
        // res.status(500).send(error);
        console.error('Failed to get transactions:', err);
        res.status(500).json({ error: 'Failed to get transactions' });
      }
});

router.post('/', async (req, res) => {
  const db = req.app.locals.db;
  const newTransaction = new Transaction(req.body);
    // const transaction = new Transaction(req.body);
    try {
        // await transaction.save();
        // res.status(201).send(transaction);
        const result = await db.collection('transactions').insertOne(newTransaction);
        res.status(201).json(result.ops[0]);
      } catch (err) {
        // res.status(400).send(error);
        console.error('Failed to add transaction:', err);
        res.status(500).json({ error: 'Failed to add transaction' });
      }    
});

module.exports = router;