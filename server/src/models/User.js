const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    rollNumber: {
      type: String,
      required: [true, 'Please provide your roll number'],
      unique: true,
      uppercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    department: {
      type: String,
      required: [true, 'Please select your department'],
      enum: ['CSD', 'CSIT'],
    },
    year: {
      type: Number,
      required: [true, 'Please select your year'],
      default: 1,
    },
    username: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      maxlength: [30, 'Username cannot be more than 30 characters'],
    },
    college: {
      type: String,
      default: 'SRKR Engineering College',
      trim: true,
    },
    bio: {
      type: String,
      maxlength: [250, 'Bio cannot exceed 250 characters'],
      trim: true,
    },
    profilePicture: {
      type: String, // Will store Base64 or URL
      default: '',
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false, // Don't return password by default
    },
    role: {
      type: String,
      enum: ['student', 'admin', 'instructor'],
      default: 'student',
    },

    // Future-ready Gamification & Progress Fields
    xp: {
      type: Number,
      default: 0,
    },
    learnXp: {
      type: Number,
      default: 0,
    },
    practiceXp: {
      type: Number,
      default: 0,
    },
    assessmentXp: {
      type: Number,
      default: 0,
    },
    assessmentScore: {
      type: Number,
      default: 0,
    },
    assessmentProgrammingScore: {
      type: Number,
      default: 0,
    },
    assessmentTimeTaken: {
      type: Number,
      default: 0,
    },
    coins: {
      type: Number,
      default: 0,
    },
    level: {
      type: Number,
      default: 1,
    },
    badges: {
      type: [String],
      default: [],
    },
    streak: {
      current: { type: Number, default: 0 },
      longest: { type: Number, default: 0 },
      lastActiveDate: { type: Date, default: null },
      lastUpdateDate: { type: Date, default: null },
      activeDays: { type: [String], default: [] }
    },
    certificates: [
      {
        courseId: { type: String, required: true },
        type: { type: String, enum: ['learn', 'practice', 'course'], required: true },
        title: { type: String, required: true },
        certificateId: { type: String, required: true, unique: true, sparse: true, index: true },
        issueDate: { type: Date, default: Date.now },
      }
    ],
    completedTopics: {
      type: [String],
      default: [],
    },
    currentTopic: {
      type: String,
      default: null,
    },
    lastVisitedTopic: {
      type: String,
      default: null,
    },
    completedPracticeTopics: {
      type: [String],
      default: [],
    },
    lastVisitedPractice: {
      type: String,
      default: null,
    },
    practiceProgress: [
      {
        lessonId: { type: String, required: true },
        currentQuestion: { type: String },
        completedQuestions: { type: [String], default: [] },
        unlockedQuestions: { type: [String], default: [] },
        lessonCompleted: { type: Boolean, default: false },
        xpEarned: { type: Number, default: 0 },
        accuracy: { type: Number, default: 0 },
        lastAttemptTime: { type: Date, default: Date.now },
      }
    ],
    solvedProblems: {
      type: [String],
      default: [],
    },
    quizHistory: [
      {
        quizId: { type: mongoose.Schema.ObjectId, ref: 'Quiz' },
        score: Number,
        totalQuestions: Number,
        completedAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Encrypt password before saving
userSchema.pre('save', async function () {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) {
    return;
  }

  // Hash the password with cost of 12
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to check if entered password matches the hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  if (!enteredPassword || !this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to safely return user data without sensitive info
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
