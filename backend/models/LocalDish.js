import mongoose from 'mongoose';

const localDishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisine: {
      type: String,
      default: 'street_food',
    },
    destination: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      default: '',
    },
    priceEstimate: {
      type: String,
      default: '₹150',
    },
    dietCategory: {
      type: String,
      default: 'vegetarian',
    },
    foodStory: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const LocalDish = mongoose.model('LocalDish', localDishSchema);

export default LocalDish;
