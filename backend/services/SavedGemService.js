import SavedHiddenGem from '../models/SavedHiddenGem.js';

export const SavedGemService = {
  saveGem: async (userId, gemId, title, notes = '') => {
    return await SavedHiddenGem.create({ user: userId, hiddenGem: gemId, title, notes });
  },

  getSavedGems: async (userId) => {
    return await SavedHiddenGem.find({ user: userId }).populate('hiddenGem');
  },

  deleteSavedGem: async (userId, savedId) => {
    return await SavedHiddenGem.deleteOne({ _id: savedId, user: userId });
  },
};

export default SavedGemService;
