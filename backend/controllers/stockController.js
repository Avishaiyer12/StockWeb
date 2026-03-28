const Stock = require('../models/Stock');

const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find({});
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);

    if (stock) {
      res.json(stock);
    } else {
      res.status(404).json({ message: 'Stock not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStock = async (req, res) => {
  const { symbol, name, price, description, volume } = req.body;

  try {
    const stockExists = await Stock.findOne({ symbol });

    if (stockExists) {
      return res.status(400).json({ message: 'Stock already exists' });
    }

    const stock = new Stock({
      symbol,
      name,
      price,
      description,
      volume,
    });

    const createdStock = await stock.save();
    res.status(201).json(createdStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStock = async (req, res) => {
  const { symbol, name, price, description, volume } = req.body;

  try {
    const stock = await Stock.findById(req.params.id);

    if (stock) {
      stock.symbol = symbol || stock.symbol;
      stock.name = name || stock.name;
      stock.price = price || stock.price;
      stock.description = description || stock.description;
      stock.volume = volume || stock.volume;

      const updatedStock = await stock.save();
      res.json(updatedStock);
    } else {
      res.status(404).json({ message: 'Stock not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);

    if (stock) {
      await stock.deleteOne();
      res.json({ message: 'Stock removed' });
    } else {
      res.status(404).json({ message: 'Stock not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStocks,
  getStockById,
  createStock,
  updateStock,
  deleteStock,
};
