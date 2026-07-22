import visionService from '../services/visionService.js';
import imageProcessingService from '../services/imageProcessingService.js';
import visionFormatter from '../utils/visionFormatter.js';

export const visionController = {
  analyze: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { imageUrl = 'https://locallens.ai/sample_landmark.jpg', provider = 'gemini' } = req.body;
      const scan = await visionService.analyzeImage(userId, imageUrl, provider);
      return res.status(200).json(visionFormatter.formatSuccess(scan, 'AI Vision analysis complete'));
    } catch (err) {
      next(err);
    }
  },

  upload: async (req, res, next) => {
    try {
      const file = req.file || { filename: 'landmark_sample.jpg', originalname: 'landmark.jpg', size: 102400 };
      const metadata = await imageProcessingService.processImage(file);
      return res.status(200).json(visionFormatter.formatSuccess(metadata, 'Image uploaded successfully'));
    } catch (err) {
      next(err);
    }
  },

  getHistory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const history = await visionService.getScanHistory(userId);
      return res.status(200).json(visionFormatter.formatSuccess(history, 'Scan history retrieved'));
    } catch (err) {
      next(err);
    }
  },

  getScanById: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { scanId } = req.params;
      const scan = await visionService.getScanById(userId, scanId);
      return res.status(200).json(visionFormatter.formatSuccess(scan, 'Scan detail retrieved'));
    } catch (err) {
      next(err);
    }
  },

  deleteScan: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { scanId } = req.params;
      await visionService.deleteScan(userId, scanId);
      return res.status(200).json(visionFormatter.formatSuccess(null, 'Scan deleted successfully'));
    } catch (err) {
      next(err);
    }
  },

  saveMemory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const memory = await visionService.saveMemory(userId, req.body);
      return res.status(201).json(visionFormatter.formatSuccess(memory, 'Memory saved successfully'));
    } catch (err) {
      next(err);
    }
  },
};

export default visionController;
