const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Route to post a review
router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Review submitted successfully',
    review: req.body
  });
});

module.exports = router;
