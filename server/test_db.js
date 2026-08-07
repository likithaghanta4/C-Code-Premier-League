require('dotenv').config();
const mongoose = require('mongoose');

const testDb = async () => {
  try {
    const originalUri = process.env.MONGODB_URI;
    // Extract credentials and host
    const match = originalUri.match(/mongodb\+srv:\/\/([^:]+):([^@]+)@([^/]+)\/([^?]+)/);
    
    if (match) {
      const username = match[1];
      const password = match[2];
      const host = match[3];
      const db = match[4];
      
      const parts = host.split('.');
      const cluster = parts[0]; // cluster0
      const domain = parts.slice(1).join('.'); // 8jzvukc.mongodb.net
      
      const replicaSet = 'atlas-xxxxxx-shard-0'; // not strictly needed if we just pass replicaSet in options or let mongoose discover
      
      const standardUri = `mongodb://${username}:${password}@${cluster}-shard-00-00.${domain}:27017,${cluster}-shard-00-01.${domain}:27017,${cluster}-shard-00-02.${domain}:27017/${db}?ssl=true&replicaSet=atlas-qj2392-shard-0&authSource=admin&retryWrites=true&w=majority`;
      
      console.log('Testing alternative standard URI (masked):', standardUri.replace(/:([^:@]+)@/, ':****@'));
      
      // I don't know the exact replicaSet name, but often mongoose can connect if we omit replicaSet param, or we can just try without replicaSet.
      const fallbackUri = `mongodb://${username}:${password}@${cluster}-shard-00-00.${domain}:27017,${cluster}-shard-00-01.${domain}:27017,${cluster}-shard-00-02.${domain}:27017/${db}?ssl=true&authSource=admin&retryWrites=true&w=majority`;
      
      console.log('Connecting to fallback URI...');
      await mongoose.connect(fallbackUri, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log('SUCCESS with fallback URI!');
      process.exit(0);
    }
  } catch (err) {
    console.error('FAILED with fallback URI:');
    console.error(err);
    process.exit(1);
  }
};

testDb();
