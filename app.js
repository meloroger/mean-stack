const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// Require database string for connection
const config = require('./config/database');

// Connect to database via mongoose with connection string using { useNewUrlParser: true } to avoid deprecation warning
mongoose.connect(config.databaseMD, { useNewUrlParser: true });

// Confirmation of connection or error
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});
mongoose.connection.on('error', err => {
  console.log(err);
});

const app = express();

const users = require('./routes/users');

const PORT = process.env.PORT || 3000;

// CORS middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index route
app.get('/', (req, res) => res.send('Under Construction'));

// Server Init
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
