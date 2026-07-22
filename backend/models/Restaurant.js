import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
      index: true,
    },
    location: {
      address: { type: String },
      lat: { type: Number },
      lng: { type: Number },
    },
    cuisine: {
      type: String,
      default: 'street_food',
    },
    openingHours: {
      type: String,
      default: '8:00 AM - 10:00 PM',
    },
    rating: {
      type: Number,
      default: 4.8,
    },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
