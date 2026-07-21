import * as dashboardService from '../services/dashboardService.js';
import * as dashboardFormatter from '../utils/dashboardFormatter.js';
import User from '../models/User.js';
import { sendResponse } from '../utils/responseHandler.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';

export const getOverview = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  const stats = await dashboardService.getAggregatedStats(userId);
  
  const payload = dashboardFormatter.formatOverview(user, stats, stats.upcomingTrips);
  return sendResponse(res, HTTP_STATUS.OK, 'Overview metrics fetched successfully', payload);
});

export const getQuickActions = asyncHandler(async (req, res) => {
  const payload = dashboardFormatter.formatQuickActions();
  return sendResponse(res, HTTP_STATUS.OK, 'Quick actions list fetched successfully', payload);
});

export const getStatistics = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const stats = await dashboardService.getAggregatedStats(userId);
  
  const payload = dashboardFormatter.formatStatistics(stats);
  return sendResponse(res, HTTP_STATUS.OK, 'Statistics metrics fetched successfully', payload);
});

export const getRecentTrips = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const data = await dashboardService.getRecentTrips(userId);
  return sendResponse(res, HTTP_STATUS.OK, 'Recent trips fetched successfully', data);
});

export const getRecentMemories = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const data = await dashboardService.getRecentMemories(userId);
  return sendResponse(res, HTTP_STATUS.OK, 'Recent memories fetched successfully', data);
});

export const getSavedPlaces = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const data = await dashboardService.getSavedPlaces(userId);
  return sendResponse(res, HTTP_STATUS.OK, 'Saved places fetched successfully', data);
});

export const getNotifications = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const data = await dashboardService.getNotifications(userId);
  return sendResponse(res, HTTP_STATUS.OK, 'Notifications fetched successfully', data);
});

export const getActivity = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const data = await dashboardService.getActivityTimeline(userId);
  return sendResponse(res, HTTP_STATUS.OK, 'Activity timeline fetched successfully', data);
});
