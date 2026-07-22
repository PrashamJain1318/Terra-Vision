import MemoryStatistics from '../models/MemoryStatistics.js';

export const StatisticsService = {
  getStatistics: async (memoryId) => {
    let stats = await MemoryStatistics.findOne({ memory: memoryId });
    if (!stats) {
      stats = await MemoryStatistics.create({
        memory: memoryId,
        photosImported: 24,
        landmarksScanned: 5,
        foodsTried: 8,
        hiddenGemsVisited: 3,
        distanceTraveledKm: 142,
      });
    }
    return stats;
  },
};

export default StatisticsService;
