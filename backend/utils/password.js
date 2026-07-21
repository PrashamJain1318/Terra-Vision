import bcrypt from 'bcrypt';

/**
 * Hash a plain text password using bcrypt.
 * @param {string} password - Plain text password
 * @returns {Promise<string>} Hashed password string
 */
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

/**
 * Compare plain text password against database hashed password.
 * @param {string} plainPassword - User entered password
 * @param {string} hashedPassword - Encrypted password in DB
 * @returns {Promise<boolean>} Match status
 */
export const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
