import mongoose from 'mongoose';

const foodHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    destination: {
      type: String,
      required: true,
    },
    cuisine: {
      type: String,
      default: 'street_food',
    },
    diet: {
      type: String,
      default: 'vegetarian',
    },
  },
  { timestamps: true }
);

const FoodHistory = mongoose.model('FoodHistory', foodHistorySchema);

export default FoodHistory;
