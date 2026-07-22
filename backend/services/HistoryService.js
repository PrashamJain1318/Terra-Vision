import SafetyHistory from '../models/SafetyHistory.js';

export const HistoryService = {
  getHistory: async (userId) => {
    return await SafetyHistory.find({ user: userId }).sort({ createdAt: -1 });
  },
};

export default HistoryService;
