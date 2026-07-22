import mongoose from 'mongoose';

const nutritionProfileSchema = new mongoose.Schema(
  {
    dishName: {
      type: String,
      required: true,
      index: true,
    },
    calories: { type: String, default: '420 kcal' },
    protein: { type: String, default: '14g' },
    carbohydrates: { type: String, default: '58g' },
    fat: { type: String, default: '12g' },
    fiber: { type: String, default: '6g' },
    allergens: [{ type: String }],
  },
  { timestamps: true }
);

const NutritionProfile = mongoose.model('NutritionProfile', nutritionProfileSchema);

export default NutritionProfile;
