import mongoose from 'mongoose';

const recommendationExplanationSchema = new mongoose.Schema(
  {
    targetId: { type: String, required: true },
    confidenceScore: { type: Number, required: true },
    reasoning: { type: String, required: true },
  },
  { timestamps: true }
);

export const RecommendationExplanation = mongoose.models.RecommendationExplanation || mongoose.model('RecommendationExplanation', recommendationExplanationSchema);
export default RecommendationExplanation;
