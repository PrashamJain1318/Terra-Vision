import mongoose from 'mongoose';

const communityReviewSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    authorName: { type: String, required: true },
    targetType: {
      type: String,
      enum: ['hidden_gem', 'restaurant', 'attraction', 'hotel', 'route'],
      required: true,
    },
    targetName: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    reviewText: { type: String, required: true },
    helpfulCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const CommunityReview = mongoose.models.CommunityReview || mongoose.model('CommunityReview', communityReviewSchema);
export default CommunityReview;
