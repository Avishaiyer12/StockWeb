const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('./models/User');

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/myapp_stock');
    console.log('Connected to MongoDB');

    const email = 'admin@myapp.com';
    const password = 'admin';

    let admin = await User.findOne({ email });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (admin) {
      admin.role = 'admin';
      admin.password = hashedPassword;
      await admin.save();
      console.log('Existing user updated to Admin.');
    } else {
      await User.create({
        name: 'System Admin',
        email,
        password: hashedPassword,
        role: 'admin'
      });
      console.log('New Admin user created.');
    }
    process.exit();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

createAdmin();
