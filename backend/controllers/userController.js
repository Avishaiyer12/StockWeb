const User = require('../models/User');
const Stock = require('../models/Stock');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('watchlist');

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        watchlist: user.watchlist,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        const bcrypt = require('bcryptjs');
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const toggleWatchlist = async (req, res) => {
  const { stockId } = req.body;

  try {
    const user = await User.findById(req.user._id);
    const stock = await Stock.findById(stockId);

    if (!user || !stock) {
      return res.status(404).json({ message: 'User or Stock not found' });
    }

    const isStockInWatchlist = user.watchlist.includes(stockId);

    if (isStockInWatchlist) {
      user.watchlist = user.watchlist.filter((id) => id.toString() !== stockId);
    } else {
      user.watchlist.push(stockId);
    }

    await user.save();

    const updatedUser = await User.findById(req.user._id).populate('watchlist');
    res.json(updatedUser.watchlist);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('cart.stock');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToCart = async (req, res) => {
  const { symbol } = req.body;
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'User not found, please login again' });
    }
    console.log(`Add to Cart Request: symbol=${symbol}, user=${req.user._id}`);
    
    const user = await User.findById(req.user._id);
    const stock = await Stock.findOne({ 
      $or: [
        { symbol: { $regex: new RegExp(`^${symbol}$`, 'i') } },
        { name: { $regex: new RegExp(`^${symbol}$`, 'i') } }
      ]
    });

    if (!user || !stock) {
      console.log(`Stock matching '${symbol}' not found in DB`);
      return res.status(404).json({ message: `Stock '${symbol}' not found in database` });
    }
    console.log(`Found stock: ${stock.symbol} (${stock._id})`);

    const cartItemIndex = user.cart.findIndex(
      (item) => item.stock.toString() === stock._id.toString()
    );

    if (cartItemIndex > -1) {
      user.cart[cartItemIndex].quantity += 1;
    } else {
      user.cart.push({ stock: stock._id, quantity: 1 });
    }

    await user.save();
    const updatedUser = await User.findById(req.user._id).populate('cart.stock');
    res.json(updatedUser.cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromCart = async (req, res) => {
  const { stockId } = req.params;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.cart = user.cart.filter((item) => item.stock.toString() !== stockId);
    await user.save();
    
    const updatedUser = await User.findById(req.user._id).populate('cart.stock');
    res.json(updatedUser.cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCartQuantity = async (req, res) => {
  const { stockId, quantity } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cartItemIndex = user.cart.findIndex(
      (item) => item.stock.toString() === stockId
    );

    if (cartItemIndex > -1) {
      user.cart[cartItemIndex].quantity = Math.max(1, quantity);
      await user.save();
    } else {
      return res.status(404).json({ message: 'Item not in cart' });
    }

    const updatedUser = await User.findById(req.user._id).populate('cart.stock');
    res.json(updatedUser.cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const checkout = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user || user.cart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    user.cart = [];
    await user.save();

    res.status(200).json({ message: 'Checkout successful (Cart cleared)' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  toggleWatchlist,
  getUsers,
  getCart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  checkout
};
