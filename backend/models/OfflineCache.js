import mongoose from 'mongoose';

const offlineCacheSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Trips', 'Maps', 'Hidden Gems', 'Restaurants', 'Emergency', 'AI Itinerary', 'Voice Commands', 'Translation Pack'],
      required: true,
    },
    cityName: {
      type: String,
      default: 'Munnar',
    },
    sizeMB: {
      type: Number,
      required: true,
    },
    downloadStatus: {
      type: String,
      enum: ['completed', 'downloading', 'available', 'failed'],
      default: 'available',
    },
    downloadProgress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    contentData: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('OfflineCache', offlineCacheSchema);
