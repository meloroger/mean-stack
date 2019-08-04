const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

const PORT = process.env.PORT || 3000;

// CORS middleware
app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index route
app.get('/', (req, res) => res.send('Under Construction'));

// Server Init
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
