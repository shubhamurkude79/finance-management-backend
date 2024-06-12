const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', async (req, res) => {
  const db = req.app.locals.db;
    try {
        const transactions = await db.collection('transactions').find({}).toArray();
        res.json(transactions);
      } catch (err) {
        console.error('Failed to get transactions:', err);
        res.status(500).json({ error: 'Failed to get transactions' });
      }
});

router.post('/', async (req, res) => {
  const db = req.app.locals.db;
  const newTransaction = new Transaction(req.body);
    try {
        const result = await db.collection('transactions').insertOne(newTransaction);
        res.status(201).json(result.ops[0]);
      } catch (err) {
        console.error('Failed to add transaction:', err);
        res.status(500).json({ error: 'Failed to add transaction' });
      }    
});

module.exports = router;