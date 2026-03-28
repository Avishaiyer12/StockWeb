const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Stock = require('./models/Stock');

dotenv.config({ path: path.join(__dirname, '.env') });

const checkStocks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
    
    const count = await Stock.countDocuments();
    console.log(`Total stocks in DB: ${count}`);
    
    const stocks = await Stock.find({});
    console.log('Stocks found:');
    stocks.forEach(s => console.log(`- ${s.symbol}: ${s.name} ($${s.price})`));
    
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

checkStocks();
