import mongoose from 'mongoose';

const placeCacheSchema = new mongoose.Schema(
  {
    cityName: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
    },
    category: {
      type: String,
      default: 'all',
    },
    places: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    weather: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours cache
      index: { expires: 0 },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('PlaceCache', placeCacheSchema);
