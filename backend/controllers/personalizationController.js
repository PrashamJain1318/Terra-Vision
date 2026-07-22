import PersonalizedProfileService from '../services/PersonalizedProfileService.js';
import PersonalizedRecommendationService from '../services/PersonalizedRecommendationService.js';
import TravelDnaService from '../services/TravelDnaService.js';

export const getProfile = async (req, res, next) => {
  try {
    const profile = await PersonalizedProfileService.getProfile(req.user?.id);
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    next(error);
  }
};

export const getRecommendations = async (req, res, next) => {
  try {
    const recs = await PersonalizedRecommendationService.getRecommendations(req.user?.id);
    res.status(200).json({ success: true, data: recs });
  } catch (error) {
    next(error);
  }
};

export const getDna = async (req, res, next) => {
  try {
    const dna = await TravelDnaService.getDna(req.user?.id);
    res.status(200).json({ success: true, data: dna });
  } catch (error) {
    next(error);
  }
};
