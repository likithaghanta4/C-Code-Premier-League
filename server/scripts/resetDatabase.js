require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require('mongoose');
const User = require('../src/models/User');
const Notification = require('../src/models/Notification');

async function resetDatabase() {
  console.log('⚠️  Starting Database Reset for Production...');
  
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI is missing in .env file');
    process.exit(1);
  }

  try {
    // 1. Connect to MongoDB
    console.log(`Connecting to MongoDB...`);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Successfully.');

    // 2. Delete all Users (which includes progress, certificates, streak, XP, etc)
    const userResult = await User.deleteMany({});
    console.log(`🗑️  Deleted ${userResult.deletedCount} User records (including progress, certificates, streaks).`);

    // 3. Delete all Notifications
    const notifResult = await Notification.deleteMany({});
    console.log(`🗑️  Deleted ${notifResult.deletedCount} Notification records.`);

    console.log('✅ Database reset completed successfully!');
    console.log('🚀 The platform is now completely clean and ready for production users.');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database Reset Failed:', error);
    process.exit(1);
  }
}

resetDatabase();
