import User from '../models/User.js';
import { generateAccessToken, generateRefreshToken, verifyToken } from '../utils/jwt.js';
import AppError from '../utils/AppError.js';
import { HTTP_STATUS, ERROR_CODES } from '../utils/constants.js';

export const registerUser = async ({ name, email, password }) => {
  // Check if email already registered
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new AppError(
      'An account with this email address already exists.',
      HTTP_STATUS.CONFLICT,
      ERROR_CODES.DATABASE_ERROR
    );
  }

  // Create User document
  const user = await User.create({
    name,
    email,
    password,
  });

  const accessToken = generateAccessToken(user._id, user.role);
  const refreshToken = generateRefreshToken(user._id);

  return { user, accessToken, refreshToken };
};

export const loginUser = async ({ email, password }) => {
  // Find user and select password explicitly
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new AppError(
      'Invalid email or password combination.',
      HTTP_STATUS.UNAUTHORIZED,
      ERROR_CODES.UNAUTHORIZED
    );
  }

  const accessToken = generateAccessToken(user._id, user.role);
  const refreshToken = generateRefreshToken(user._id);

  return { user, accessToken, refreshToken };
};

export const refreshUserSession = async (token) => {
  if (!token) {
    throw new AppError(
      'Session token required. Please log in again.',
      HTTP_STATUS.UNAUTHORIZED,
      ERROR_CODES.UNAUTHORIZED
    );
  }

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new AppError(
        'User account no longer exists.',
        HTTP_STATUS.UNAUTHORIZED,
        ERROR_CODES.UNAUTHORIZED
      );
    }

    const accessToken = generateAccessToken(user._id, user.role);
    return { user, accessToken };
  } catch (error) {
    throw new AppError(
      'Expired or invalid session. Please log in again.',
      HTTP_STATUS.UNAUTHORIZED,
      ERROR_CODES.UNAUTHORIZED
    );
  }
};
