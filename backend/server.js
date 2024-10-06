const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postItRoutes = require('./routes/postitRoutes');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/postits', postItRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/postits', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err.message);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
