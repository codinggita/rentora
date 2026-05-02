const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Protected route to post a review
router.post('/', authMiddleware, (req, res) => {
  res.status(201).json({
    message: 'Review submitted successfully',
    userId: req.user.id,
    review: req.body
  });
});

module.exports = router;
