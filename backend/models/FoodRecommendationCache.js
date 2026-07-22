import mongoose from 'mongoose';

const foodRecommendationCacheSchema = new mongoose.Schema(
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
        cuisine: { type: String },
        restaurantName: { type: String },
        location: { type: String },
        description: { type: String },
        priceEstimate: { type: String },
        rating: { type: Number },
        dietaryTags: [{ type: String }],
        nutritionInfo: {
          calories: { type: String },
          protein: { type: String },
          carbs: { type: String },
        },
        foodStory: { type: String },
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

const FoodRecommendationCache = mongoose.model('FoodRecommendationCache', foodRecommendationCacheSchema);

export default FoodRecommendationCache;
