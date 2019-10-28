const express = require('express');
const mongoose = require('mongoose');

const app = express();

//  Connect to logal database
const db = 'mongodb://Localhost/ioihadb';

// test server
app.get('/', (req, res) => res.send('API running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
