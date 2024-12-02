// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Import Routes
const projectRoutes = require('./routes/projects');
const messageRoutes = require('./routes/messages');

// Use Routes
app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});