const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, toggleWatchlist, getUsers, getCart, addToCart, removeFromCart, updateCartQuantity, checkout } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/').get(protect, admin, getUsers);

router.post('/watchlist', protect, toggleWatchlist);

router.post('/checkout', protect, checkout);

router.route('/cart')
  .get(protect, getCart)
  .post(protect, addToCart)
  .put(protect, updateCartQuantity);

router.delete('/cart/:stockId', protect, removeFromCart);

module.exports = router;
