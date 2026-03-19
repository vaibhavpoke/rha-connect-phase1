const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/rha-connect', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Phase 1 API Routes
// Volunteers
app.use('/api/volunteers', require('./routes/volunteers'));

// Training
app.use('/api/training', require('./routes/training'));

// Drives
app.use('/api/drives', require('./routes/drives'));

// Playbooks
app.use('/api/playbooks', require('./routes/playbooks'));

// Surveys
app.use('/api/surveys', require('./routes/surveys'));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
