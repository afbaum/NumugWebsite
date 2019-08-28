const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DAtabase
connectDB();

app.get('/', (req, res) => res.send('API running'));

// Define Routes
app.use('api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
