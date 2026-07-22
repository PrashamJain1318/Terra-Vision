import RecommendationService from '../services/RecommendationService.js';
import SavedGemService from '../services/SavedGemService.js';
import HistoryService from '../services/HistoryService.js';

export const hiddenGemsController = {
  discover: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { destination = 'Shimla, Himachal Pradesh', interests = [], provider = 'gemini' } = req.body;
      const recommendations = await RecommendationService.discover(userId, destination, interests, provider);
      return res.status(200).json({ success: true, message: 'Hidden gems discovered', data: recommendations });
    } catch (err) {
      next(err);
    }
  },

  recommend: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { destination = 'Shimla, Himachal Pradesh' } = req.body;
      const recommendations = await RecommendationService.discover(userId, destination);
      return res.status(200).json({ success: true, message: 'Personalized recommendations', data: recommendations });
    } catch (err) {
      next(err);
    }
  },

  getHistory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const history = await HistoryService.getHistory(userId);
      return res.status(200).json({ success: true, message: 'Discovery history retrieved', data: history });
    } catch (err) {
      next(err);
    }
  },

  saveGem: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { gemId, title, notes } = req.body;
      const saved = await SavedGemService.saveGem(userId, gemId, title, notes);
      return res.status(201).json({ success: true, message: 'Gem saved successfully', data: saved });
    } catch (err) {
      next(err);
    }
  },

  getSavedGems: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const saved = await SavedGemService.getSavedGems(userId);
      return res.status(200).json({ success: true, message: 'Saved gems retrieved', data: saved });
    } catch (err) {
      next(err);
    }
  },

  deleteSavedGem: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { id } = req.params;
      await SavedGemService.deleteSavedGem(userId, id);
      return res.status(200).json({ success: true, message: 'Saved gem deleted' });
    } catch (err) {
      next(err);
    }
  },
};

export default hiddenGemsController;
