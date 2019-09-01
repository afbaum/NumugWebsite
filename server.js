const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

const app = express();

// Body Parser middleware
app.use(express.json({extended: false}));

// Connect DAtabase
// connectDB();

// DB Config local
const db = 'mongodb://localhost/numugdev';

// Connect to  MongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('API running'));


// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
