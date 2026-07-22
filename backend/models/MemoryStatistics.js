import mongoose from 'mongoose';

const memoryStatisticsSchema = new mongoose.Schema(
  {
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelMemory', required: true },
    photosImported: { type: Number, default: 0 },
    landmarksScanned: { type: Number, default: 0 },
    foodsTried: { type: Number, default: 0 },
    hiddenGemsVisited: { type: Number, default: 0 },
    distanceTraveledKm: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.MemoryStatistics || mongoose.model('MemoryStatistics', memoryStatisticsSchema);
