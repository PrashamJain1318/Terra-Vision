import mongoose from 'mongoose';

const recommendationCacheSchema = new mongoose.Schema(
  {
    cacheKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    destination: {
      type: String,
      required: true,
    },
    recommendations: [
      {
        name: { type: String },
        category: { type: String },
        description: { type: String },
        experienceScore: { type: Number },
        crowdLevel: { type: String },
        bestVisitTime: { type: String },
        aiStory: { type: String },
      },
    ],
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
  },
  { timestamps: true }
);

const RecommendationCache = mongoose.model('RecommendationCache', recommendationCacheSchema);

export default RecommendationCache;
