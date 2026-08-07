/**
 * CPL — Standardized API Response Helper
 * Ensures consistent JSON response format across all endpoints.
 */

class ApiResponse {
  /**
   * Success response
   */
  static success(res, data = null, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  /**
   * Created response (201)
   */
  static created(res, data = null, message = 'Created successfully') {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  /**
   * Error response
   */
  static error(res, message = 'Something went wrong', statusCode = 500, errors = null) {
    const response = {
      success: false,
      message,
    };
    if (errors) response.errors = errors;
    return res.status(statusCode).json(response);
  }

  /**
   * Validation error (400)
   */
  static validationError(res, errors, message = 'Validation failed') {
    return res.status(400).json({
      success: false,
      message,
      errors,
    });
  }

  /**
   * Not found (404)
   */
  static notFound(res, message = 'Resource not found') {
    return res.status(404).json({
      success: false,
      message,
    });
  }

  /**
   * Unauthorized (401)
   */
  static unauthorized(res, message = 'Unauthorized') {
    return res.status(401).json({
      success: false,
      message,
    });
  }

  /**
   * Forbidden (403)
   */
  static forbidden(res, message = 'Forbidden') {
    return res.status(403).json({
      success: false,
      message,
    });
  }

  /**
   * Paginated response
   */
  static paginated(res, data, page, limit, total, message = 'Success') {
    return res.status(200).json({
      success: true,
      message,
      data,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  }
}

module.exports = ApiResponse;
