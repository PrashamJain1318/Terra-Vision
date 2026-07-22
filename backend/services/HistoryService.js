import HiddenGemHistory from '../models/HiddenGemHistory.js';

export const HistoryService = {
  addHistory: async (userId, destination, interests = [], provider = 'gemini') => {
    return await HiddenGemHistory.create({ user: userId, destination, interests, provider });
  },

  getHistory: async (userId, limit = 10) => {
    return await HiddenGemHistory.find({ user: userId }).sort({ createdAt: -1 }).limit(limit);
  },
};

export default HistoryService;
