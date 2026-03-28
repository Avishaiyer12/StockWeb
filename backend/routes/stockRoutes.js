const express = require('express');
const router = express.Router();
const {
  getStocks,
  getStockById,
  createStock,
  updateStock,
  deleteStock,
} = require('../controllers/stockController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.route('/')
  .get(getStocks)
  .post(protect, admin, createStock);

router.route('/:id')
  .get(getStockById)
  .put(protect, admin, updateStock)
  .delete(protect, admin, deleteStock);

module.exports = router;
