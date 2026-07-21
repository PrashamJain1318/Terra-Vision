import { ValidationError } from '../utils/AppError.js';

/**
 * Validate incoming request object properties using a custom validator function or library schema.
 * @param {Function} schemaValidator - A function returning { error, value } e.g., Joi/Zod-like validators.
 * @param {string} source - Source property of req to validate (body, query, params).
 */
export const validate = (schemaValidator, source = 'body') => {
  return (req, res, next) => {
    const { error, value } = schemaValidator(req[source]);
    if (error) {
      const details = error.details || error.message;
      return next(new ValidationError('Invalid request input data', details));
    }
    // Reassign sanitised parsed values back to requests
    req[source] = value;
    next();
  };
};

export default validate;
