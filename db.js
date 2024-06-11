const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_URL;
const dbName = 'finance_db';

async function connectToDatabase() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  console.log('Connected to database');
  const db = client.db(dbName);
  return db;
}

module.exports = connectToDatabase;
