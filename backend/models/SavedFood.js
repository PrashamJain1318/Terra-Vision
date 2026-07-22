import mongoose from 'mongoose';

const savedFoodSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    foodId: {
      type: String,
      required: true,
    },
    dishName: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const SavedFood = mongoose.model('SavedFood', savedFoodSchema);

export default SavedFood;
