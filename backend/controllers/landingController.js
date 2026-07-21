import * as landingService from '../services/landingService.js';
import { sendResponse } from '../utils/responseHandler.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';

export const getHero = asyncHandler(async (req, res) => {
  const data = await landingService.getHeroData();
  return sendResponse(res, HTTP_STATUS.OK, 'Hero configurations fetched successfully', data);
});

export const getFeatures = asyncHandler(async (req, res) => {
  const data = await landingService.getFeaturesList();
  return sendResponse(res, HTTP_STATUS.OK, 'Features list fetched successfully', data);
});

export const getStatistics = asyncHandler(async (req, res) => {
  const data = await landingService.getStatisticsList();
  return sendResponse(res, HTTP_STATUS.OK, 'Statistics list fetched successfully', data);
});

export const getTestimonials = asyncHandler(async (req, res) => {
  const data = await landingService.getTestimonialsList();
  return sendResponse(res, HTTP_STATUS.OK, 'Testimonials list fetched successfully', data);
});

export const getFooter = asyncHandler(async (req, res) => {
  const data = await landingService.getFooterData();
  return sendResponse(res, HTTP_STATUS.OK, 'Footer links configuration fetched successfully', data);
});
