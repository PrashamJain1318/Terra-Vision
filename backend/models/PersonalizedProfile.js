import mongoose from 'mongoose';

const personalizedProfileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true, index: true },
    travelPersonality: { type: String, default: 'Adventure Seeker' },
    budgetPreference: { type: String, default: 'Moderate' },
    favoriteCuisines: [{ type: String }],
    travelDna: {
      explorer: { type: Number, default: 89 },
      foodie: { type: Number, default: 92 },
      nature: { type: Number, default: 76 },
      luxury: { type: Number, default: 34 },
      adventure: { type: Number, default: 95 },
      history: { type: Number, default: 81 },
    },
    privacyOptOut: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const PersonalizedProfile = mongoose.models.PersonalizedProfile || mongoose.model('PersonalizedProfile', personalizedProfileSchema);
export default PersonalizedProfile;
