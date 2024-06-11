const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const transactionsRouter = require('./src/routes/transactions');
app.use(cors());
app.use(express.json());
app.use('/transactions', transactionsRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Connect to the database and then start the server
connectToDatabase()
  .then((db) => {
    app.locals.db = db; // Store the database connection in app.locals for reuse in routes
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit the process if the database connection fails
  });