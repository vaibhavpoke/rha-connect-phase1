const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

// Routes
const volunteerRoutes = require('./routes/volunteers');
const trainingRoutes = require('./routes/training');
const driveRoutes = require('./routes/drives');
const playbookRoutes = require('./routes/playbooks');
const surveyRoutes = require('./routes/surveys');

app.use('/api/volunteers', volunteerRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/drives', driveRoutes);
app.use('/api/playbooks', playbookRoutes);
app.use('/api/surveys', surveyRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});