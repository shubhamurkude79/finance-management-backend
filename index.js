const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');
const app = express();

const transactionsRouter = require('./src/routes/transactions');
app.use(cors());
app.use(express.json());
app.use('/transactions', transactionsRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

connectToDatabase()
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));