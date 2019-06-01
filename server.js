const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));