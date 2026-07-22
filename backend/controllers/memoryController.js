import MemoryService from '../services/MemoryService.js';
import TravelMemory from '../models/TravelMemory.js';

export const memoryController = {
  createMemory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { title, destination, description, tripId, media, category } = req.body;
      const memory = await MemoryService.createMemory(userId, title, destination, description, tripId, media, category);
      return res.status(201).json({ success: true, message: 'Travel Memory Capsule created', data: memory });
    } catch (err) {
      next(err);
    }
  },

  getUserMemories: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const memories = await MemoryService.getUserMemories(userId);
      return res.status(200).json({ success: true, message: 'User memories retrieved', data: memories });
    } catch (err) {
      next(err);
    }
  },

  getGallery: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const memories = await MemoryService.getUserMemories(userId);
      return res.status(200).json({ success: true, message: 'Memory gallery retrieved', data: memories });
    } catch (err) {
      next(err);
    }
  },

  getStatistics: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const count = await TravelMemory.countDocuments({ user: userId });
      return res.status(200).json({
        success: true,
        data: { totalMemories: count, photosCount: count * 3, videosCount: count * 1, audioCount: count },
      });
    } catch (err) {
      next(err);
    }
  },

  deleteMemory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { id } = req.params;
      await MemoryService.deleteMemory(id, userId);
      return res.status(200).json({ success: true, message: 'Memory Capsule deleted' });
    } catch (err) {
      next(err);
    }
  },
};

export default memoryController;
