const express = require('express');
const router = express.Router();
const { submitContactForm, getContacts } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.route('/')
  .post(submitContactForm)
  .get(protect, admin, getContacts);

module.exports = router;
