import * as authService from '../services/authService.js';
import { sendResponse } from '../utils/responseHandler.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';
import env from '../config/env.js';

const isProduction = env.NODE_ENV === 'production';

// Cookie configurations helper
const getCookieOptions = (maxAgeInMs) => ({
  httpOnly: true,
  secure: isProduction,
  sameSite: 'lax',
  maxAge: maxAgeInMs,
});

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const { user, accessToken, refreshToken } = await authService.registerUser({
    name,
    email,
    password,
  });

  // Attach secure refresh cookies
  res.cookie('accessToken', accessToken, getCookieOptions(15 * 60 * 1000)); // 15 minutes
  res.cookie('refreshToken', refreshToken, getCookieOptions(7 * 24 * 60 * 60 * 1000)); // 7 days

  return sendResponse(res, HTTP_STATUS.CREATED, 'User registration completed successfully', {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: accessToken,
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const { user, accessToken, refreshToken } = await authService.loginUser({
    email,
    password,
  });

  // Attach secure refresh cookies
  res.cookie('accessToken', accessToken, getCookieOptions(15 * 60 * 1000));
  res.cookie('refreshToken', refreshToken, getCookieOptions(7 * 24 * 60 * 60 * 1000));

  return sendResponse(res, HTTP_STATUS.OK, 'Login completed successfully', {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: accessToken,
  });
});

export const refresh = asyncHandler(async (req, res) => {
  const token = req.cookies?.refreshToken;
  const { user, accessToken } = await authService.refreshUserSession(token);

  res.cookie('accessToken', accessToken, getCookieOptions(15 * 60 * 1000));

  return sendResponse(res, HTTP_STATUS.OK, 'Access token refreshed successfully', {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: accessToken,
  });
});

export const logout = asyncHandler(async (req, res) => {
  // Clear access & refresh cookies on logging out
  res.clearCookie('accessToken', getCookieOptions(0));
  res.clearCookie('refreshToken', getCookieOptions(0));

  return sendResponse(res, HTTP_STATUS.OK, 'Logout completed successfully');
});
