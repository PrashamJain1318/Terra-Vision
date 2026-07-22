import CommunityFeedService from '../services/CommunityFeedService.js';
import TravelerProfileService from '../services/TravelerProfileService.js';
import TravelGroupService from '../services/TravelGroupService.js';
import CommunityRecommendationService from '../services/CommunityRecommendationService.js';

export const getFeed = async (req, res, next) => {
  try {
    const { page, limit, type } = req.query;
    const posts = await CommunityFeedService.getFeedPosts({ page, limit, type });
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const post = await CommunityFeedService.createPost(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const profile = await TravelerProfileService.getTravelerProfile(req.params.userId || 'user-1');
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    next(error);
  }
};

export const getGroups = async (req, res, next) => {
  try {
    const groups = await TravelGroupService.getActiveGroups();
    res.status(200).json({ success: true, data: groups });
  } catch (error) {
    next(error);
  }
};

export const getRecommendations = async (req, res, next) => {
  try {
    const recs = await CommunityRecommendationService.getRecommendations(req.user?.id || 'guest');
    res.status(200).json({ success: true, data: recs });
  } catch (error) {
    next(error);
  }
};
