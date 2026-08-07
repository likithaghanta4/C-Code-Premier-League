/**
 * CPL — Express Application Setup
 * Configures middleware, routes, and error handling.
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// ---- Security Middleware ----
app.use(helmet());

// ---- CORS ----
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ---- Body Parsing ----
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ---- Request Logging ----
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ---- API Routes ----
app.use('/api', routes);

// ---- Root Route ----
app.get('/', (req, res) => {
  res.json({
    name: 'CPL API — C Code Premier League',
    version: '1.0.0',
    status: 'running',
    docs: '/api/health',
  });
});

// ---- 404 Handler ----
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// ---- Global Error Handler ----
app.use(errorHandler);

module.exports = app;
