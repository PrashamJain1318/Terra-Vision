import recognitionService from './recognitionService.js';
import VisionScan from '../models/VisionScan.js';
import VisionMemory from '../models/VisionMemory.js';

export const visionService = {
  analyzeImage: async (userId, imageUrl, providerType = 'gemini') => {
    const result = await recognitionService.recognize(imageUrl, providerType);

    const scanRecord = await VisionScan.create({
      user: userId,
      imageUrl,
      provider: result.provider,
      recognitionType: result.recognitionType,
      recognizedObject: result.recognizedObject,
      confidence: result.confidence,
      description: result.description,
      historicalInfo: result.historicalInfo,
      location: result.location,
      nearbyPlaces: result.nearbyPlaces,
      travelTips: result.travelTips,
    });

    return scanRecord;
  },

  getScanHistory: async (userId, limit = 10) => {
    return await VisionScan.find({ user: userId }).sort({ createdAt: -1 }).limit(limit);
  },

  getScanById: async (userId, scanId) => {
    return await VisionScan.findOne({ _id: scanId, user: userId });
  },

  deleteScan: async (userId, scanId) => {
    return await VisionScan.deleteOne({ _id: scanId, user: userId });
  },

  saveMemory: async (userId, memoryData) => {
    const record = await VisionMemory.create({
      user: userId,
      visionScan: memoryData.scanId,
      title: memoryData.title,
      notes: memoryData.notes || '',
      favorite: memoryData.favorite || false,
    });
    return record;
  },
};

export default visionService;
