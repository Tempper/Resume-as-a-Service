const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Resume = require('./models/Resume');
 // const resumeRoutes = require('./routes/resumeRoutes');

// load enviroment variables from .env
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// middleware to parse JSON in requests
app.use(express.json());

// Root route
app.get('/', (req, res) =>{
  res.send('Resume-as-a-Service is live')
});

// Resume routes
const resumeRoutes = require('./routes/resumeRoutes');
app.use('/resume', resumeRoutes);


//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
  console.log('Server running on http://localhost:${PORT}');
});