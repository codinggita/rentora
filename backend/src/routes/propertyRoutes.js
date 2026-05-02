const express = require('express');
const router = express.Router();
const { getProperties, getPropertyById, createProperty } = require('../controllers/propertyController');
const auth = require('../middleware/authMiddleware');

router.get('/', getProperties);
router.get('/:id', getPropertyById);
router.post('/', createProperty);

module.exports = router;
