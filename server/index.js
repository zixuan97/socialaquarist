const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.uri;
const port = process.env.dev_port;

const app = express();

async function connectDatabase() {
  try {
    await mongoose.connect(uri);
    console.log('You successfully connected to MongoDB!');
  } catch (error) {
    console.error(error);
  }
}

connectDatabase();

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
