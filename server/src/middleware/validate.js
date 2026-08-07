/**
 * CPL — Request Validation Middleware
 * Uses express-validator to validate incoming requests.
 */

const { validationResult } = require('express-validator');
const ApiResponse = require('../utils/ApiResponse');

/**
 * Runs after express-validator checks and returns errors if any.
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map((err) => ({
      field: err.path,
      message: err.msg,
    }));

    return ApiResponse.validationError(res, extractedErrors);
  }

  next();
};

module.exports = validate;
