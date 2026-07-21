/**
 * Validator schema for User Registration.
 * @param {object} data - Request body data
 */
export const registerValidator = (data) => {
  const errors = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required and must be a non-empty string.');
  } else if (data.name.length > 50) {
    errors.push('Name cannot exceed 50 characters.');
  }

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('A valid email address is required.');
  }

  if (!data.password || typeof data.password !== 'string' || data.password.length < 8) {
    errors.push('Password is required and must be at least 8 characters long.');
  }

  if (errors.length > 0) {
    return { error: { message: errors.join(' ') }, value: data };
  }

  return { error: null, value: data };
};

/**
 * Validator schema for User Login.
 * @param {object} data - Request body data
 */
export const loginValidator = (data) => {
  const errors = [];

  if (!data.email) {
    errors.push('Email is required.');
  }

  if (!data.password) {
    errors.push('Password is required.');
  }

  if (errors.length > 0) {
    return { error: { message: errors.join(' ') }, value: data };
  }

  return { error: null, value: data };
};
