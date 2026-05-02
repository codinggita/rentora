const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/properties', propertyRoutes);

// Deployment: Serve frontend static files
const frontendPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendPath));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  // Only serve index.html if it exists (i.e., after npm run build)
  res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('Rentora API is running... (Frontend not built yet)');
    }
  });
});

module.exports = app;
