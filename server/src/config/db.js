/**
 * CPL — MongoDB Connection Configuration
 * Connects to MongoDB Atlas (or local) using Mongoose.
 */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 4. Verify dotenv is loading correctly (if MONGODB_URI exists, it loaded)
    console.log('\n--- MongoDB Diagnostic Logs ---');
    console.log('1. Checking if dotenv loaded: ', process.env.MONGODB_URI ? '✅ Yes' : '❌ No');
    
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      console.warn('⚠️  MONGODB_URI not set. Running without database.');
      return null;
    }

    // Mask password in URI
    const maskedUri = uri.replace(/:([^:@]+)@/, ':****@');
    console.log(`2. MONGODB_URI exists: ✅ Yes`);
    console.log(`3. Masked URI: ${maskedUri}`);
    
    // Check if database name is cpl
    const dbNameMatch = uri.match(/\.net\/([^?]+)/);
    const dbName = dbNameMatch ? dbNameMatch[1] : 'unknown';
    console.log(`4. Database Name: ${dbName === 'cpl' ? '✅ cpl' : `❌ ${dbName}`}`);

    console.log('5. Attempting to connect to MongoDB Atlas...');
    console.log('-------------------------------\n');

    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4 // Force IPv4 to fix potential DNS SRV ECONNREFUSED issues on Windows/Node 18+
    });

    console.log(`✅ MongoDB Connected Successfully!`);
    console.log(`📡 Host: ${conn.connection.host}`);
    console.log(`🗄️  Database: ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`\n❌ MongoDB Connection Failed!`);
    console.error(`Error Name: ${error.name}`);
    console.error(`Error Message: ${error.message}`);
    console.error(`Error Code: ${error.code}`);
    console.error(`\n--- FULL ERROR STACK ---`);
    console.error(error.stack);
    console.error(`------------------------\n`);
    
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    return null;
  }
};

module.exports = connectDB;
