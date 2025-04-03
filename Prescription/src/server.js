const express = require('express');
const mongoose = require('mongoose');
const prescriptionRoutes = require('./routes/prescriptionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/prescriptions', prescriptionRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/prescriptionDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.error('MongoDB connection error:', err));