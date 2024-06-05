const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const transactionsRouter = require('./src/routes/transactions');
app.use(cors());
app.use(express.json());
app.use('/transactions', transactionsRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost:27017/finance-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));