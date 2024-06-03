const express = require('express');
const app = express();
const port = 3000;

const transactionsRouter = require('./src/routes/transactions')

app.use(express.json());
app.use('/transactions', transactionsRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});