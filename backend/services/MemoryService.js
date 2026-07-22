import TravelMemory from '../models/TravelMemory.js';

export const MemoryService = {
  createMemory: async (userId, title, destination, description = '', tripId = `trip-${Date.now()}`) => {
    return await TravelMemory.create({ user: userId, tripId, title, destination, description });
  },

  getMemoryById: async (id) => {
    return await TravelMemory.findById(id);
  },

  getUserMemories: async (userId) => {
    return await TravelMemory.find({ user: userId }).sort({ createdAt: -1 });
  },

  deleteMemory: async (id, userId) => {
    return await TravelMemory.deleteOne({ _id: id, user: userId });
  },
};

export default MemoryService;
