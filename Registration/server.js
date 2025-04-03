const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRouter = require('./router'); // Import the routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Failed:", err));

// Use patient routes
app.use('/patient', patientRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});