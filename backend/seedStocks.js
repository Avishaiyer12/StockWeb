const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Stock = require('./models/Stock');

dotenv.config({ path: path.join(__dirname, '.env') });

const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 214.15, description: "Technology giant", volume: 1000000 },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 420.55, description: "Software leader", volume: 800000 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 175.20, description: "Search and software", volume: 600000 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 250.30, description: "Electric vehicles", volume: 900000 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 185.15, description: "E-commerce and cloud", volume: 750000 },
  { symbol: "NVDA", name: "NVIDIA Corporation", price: 125.40, description: "GPU and AI chips", volume: 2000000 },
  { symbol: "JPM", name: "JPMorgan Chase & Co.", price: 195.80, description: "Banking and finance", volume: 400000 },
  { symbol: "V", name: "Visa Inc.", price: 280.45, description: "Payments processing", volume: 300000 },
  { symbol: "JNJ", name: "Johnson & Johnson", price: 160.20, description: "Healthcare", volume: 350000 },
  { symbol: "WMT", name: "Walmart Inc.", price: 65.10, description: "Retail leader", volume: 500000 },
  { symbol: "PG", name: "Procter & Gamble Co.", price: 168.30, description: "Consumer goods", volume: 300000 },
  { symbol: "DIS", name: "The Walt Disney Company", price: 105.75, description: "Entertainment", volume: 450000 },
  { symbol: "MA", name: "Mastercard Inc.", price: 460.10, description: "Payments technology", volume: 250000 },
  { symbol: "PYPL", name: "PayPal Holdings Inc.", price: 65.40, description: "Digital payments", volume: 550000 },
  { symbol: "NFLX", name: "Netflix Inc.", price: 630.25, description: "Streaming service", volume: 200000 },
];

const seedStocks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
    
    // Clear existing stocks
    await Stock.deleteMany({});
    console.log('Cleared existing stocks');
    
    // Insert new stocks
    await Stock.insertMany(stocks);
    console.log('Seeded stocks successfully!');
    
    process.exit();
  } catch (error) {
    console.error('Error seeding stocks:', error);
    process.exit(1);
  }
};

seedStocks();
