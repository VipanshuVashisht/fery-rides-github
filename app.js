const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const rideRoutes = require('./routes/rideRoutes');

const app = express();
app.use(bodyParser.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/feri-rides', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api', userRoutes);
app.use('/api', rideRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
