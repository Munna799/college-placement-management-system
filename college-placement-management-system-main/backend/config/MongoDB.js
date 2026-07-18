const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

dotenv.config();

const seedDefaultManagementUser = async () => {
  try {
    const existingUser = await User.findOne({ email: 'team44@gmail.com' });
    if (existingUser) return;

    const hashedPassword = await bcrypt.hash('Team44', 10);
    const user = new User({
      first_name: 'Team44',
      email: 'team44@gmail.com',
      number: 9999999999,
      password: hashedPassword,
      role: 'management_admin',
      isProfileCompleted: true,
    });
    await user.save();
    console.log('Default management user created: team44@gmail.com / Team44');
  } catch (error) {
    console.error('Error seeding default management user:', error.message);
  }
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    await seedDefaultManagementUser();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectDB;