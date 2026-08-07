/**
 * CPL — Server Entry Point
 * Loads environment, connects to MongoDB, and starts Express.
 */

require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
  // Connect to MongoDB
  await connectDB();

  app.listen(PORT, () => {
    console.log('');
    console.log('🚀 ═══════════════════════════════════════════');
    console.log(`🚀  CPL Server running on port ${PORT}`);
    console.log(`🚀  Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🚀  Health: http://localhost:${PORT}/api/health`);
    console.log('🚀 ═══════════════════════════════════════════');
    console.log('');
  });
};

startServer();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err.message);
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err.message);
  process.exit(1);
});
