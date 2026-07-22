import MemoryService from '../services/MemoryService.js';
import TimelineService from '../services/TimelineService.js';
import StoryGenerationService from '../services/StoryGenerationService.js';
import GalleryService from '../services/GalleryService.js';
import StatisticsService from '../services/StatisticsService.js';
import ExportService from '../services/ExportService.js';
import ShareService from '../services/ShareService.js';
import ImportService from '../services/ImportService.js';

export const memoryController = {
  createMemory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { title, destination, description, tripId } = req.body;
      const memory = await MemoryService.createMemory(userId, title, destination, description, tripId);
      return res.status(201).json({ success: true, message: 'Travel Memory Capsule created', data: memory });
    } catch (err) {
      next(err);
    }
  },

  importMemories: async (req, res, next) => {
    try {
      const { memoryId, sources } = req.body;
      const result = await ImportService.importFromSources(memoryId, sources);
      return res.status(200).json({ success: true, message: 'Memories imported successfully', data: result });
    } catch (err) {
      next(err);
    }
  },

  generateStory: async (req, res, next) => {
    try {
      const { memoryId, destination, templateId, provider } = req.body;
      const story = await StoryGenerationService.generateStory(memoryId, destination, templateId, provider);
      return res.status(200).json({ success: true, message: 'AI Travel Story generated', data: story });
    } catch (err) {
      next(err);
    }
  },

  getMemoryById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const memory = await MemoryService.getMemoryById(id);
      return res.status(200).json({ success: true, message: 'Memory Capsule details', data: memory });
    } catch (err) {
      next(err);
    }
  },

  getTimeline: async (req, res, next) => {
    try {
      const { memoryId = '6a5fef395c72ccbcfd4405d1' } = req.query;
      const timeline = await TimelineService.getTimeline(memoryId);
      return res.status(200).json({ success: true, message: 'Memory timeline retrieved', data: timeline });
    } catch (err) {
      next(err);
    }
  },

  getGallery: async (req, res, next) => {
    try {
      const { memoryId = '6a5fef395c72ccbcfd4405d1' } = req.query;
      const gallery = await GalleryService.getGallery(memoryId);
      return res.status(200).json({ success: true, message: 'Memory gallery retrieved', data: gallery });
    } catch (err) {
      next(err);
    }
  },

  getStatistics: async (req, res, next) => {
    try {
      const { memoryId = '6a5fef395c72ccbcfd4405d1' } = req.query;
      const stats = await StatisticsService.getStatistics(memoryId);
      return res.status(200).json({ success: true, message: 'Memory statistics retrieved', data: stats });
    } catch (err) {
      next(err);
    }
  },

  exportMemory: async (req, res, next) => {
    try {
      const { memoryId, format } = req.body;
      const exp = await ExportService.createExport(memoryId, format);
      return res.status(200).json({ success: true, message: 'Export requested', data: exp });
    } catch (err) {
      next(err);
    }
  },

  getExportById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const exp = await ExportService.getExportById(id);
      return res.status(200).json({ success: true, message: 'Export details', data: exp });
    } catch (err) {
      next(err);
    }
  },

  shareMemory: async (req, res, next) => {
    try {
      const { memoryId, isPasscodeProtected } = req.body;
      const share = await ShareService.createShareLink(memoryId, isPasscodeProtected);
      return res.status(200).json({ success: true, message: 'Share token generated', data: share });
    } catch (err) {
      next(err);
    }
  },

  getSharedByToken: async (req, res, next) => {
    try {
      const { token } = req.params;
      const shared = await ShareService.getSharedMemoryByToken(token);
      return res.status(200).json({ success: true, message: 'Shared memory capsule', data: shared });
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
