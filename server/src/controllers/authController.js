const jwt = require('jsonwebtoken');
const User = require('../models/User');
const notificationService = require('../services/notificationService');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  });
};

/**
 * @desc    Register a new student
 * @route   POST /api/auth/register
 * @access  Public
 */

const register = async (req, res) => {
  try {
    const { fullName, rollNumber, email, department, year, password } = req.body;

    // Check if user exists by email or roll number
    const userExists = await User.findOne({
      $or: [{ email }, { rollNumber: rollNumber.toUpperCase() }]
    });

    if (userExists) {
      const field = userExists.email === email ? 'Email' : 'Roll Number';
      return res.status(400).json({
        success: false,
        message: `${field} is already registered.`,
      });
    }

    // Create user
    const user = await User.create({
      fullName,
      rollNumber,
      email,
      department,
      year,
      password,
    });

    if (user) {
      // Create Welcome Notification
      await notificationService.createNotification(
        user._id,
        'Welcome to CPL!',
        'Your account has been created successfully. Start your C programming journey today!',
        'System'
      );

      res.status(201).json({
        success: true,
        message: 'Registration successful',
        // Note: As per requirements, we do NOT auto-login and return a token here.
        // The user must go to the login page to get their token.
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid user data received',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error during registration',
      error: error.message,
    });
  }
};

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email and password',
      });
    }

    // Check for user email and explicitly select password since it's hidden by default
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    // Generate Token
    const token = generateToken(user._id);

    res.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error during login',
      error: error.message,
    });
  }
};

/**
 * @desc    Get current logged in user profile
 * @route   GET /api/auth/me
 * @access  Private
 */
const getMe = async (req, res) => {
  try {
    // req.user is populated by the protect middleware
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error('REGISTER ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Server Error while fetching profile',
      error: error.message,
    });
  }
};

module.exports = {
  register,
  login,
  getMe,
};
