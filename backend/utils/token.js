import jwt from 'jsonwebtoken';
import env from '../config/env.js';

/**
 * Generate a short-lived JSON Web Token for API Access.
 * @param {string} userId - User Identifier
 * @param {string} role - User role (e.g. 'user', 'admin')
 * @returns {string} Signed access token
 */
export const generateAccessToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, env.JWT_SECRET, {
    expiresIn: '15m',
  });
};

/**
 * Generate a long-lived JSON Web Token for Session Renewal.
 * @param {string} userId - User Identifier
 * @returns {string} Signed refresh token
 */
export const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId }, env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

/**
 * Verify a JSON Web Token signature and return payload data.
 * @param {string} token - Signed JWT payload
 * @returns {object} Decoded JWT payload properties
 */
export const verifyToken = (token) => {
  return jwt.verify(token, env.JWT_SECRET);
};
