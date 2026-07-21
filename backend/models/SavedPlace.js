import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const savedPlaceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    placeId: {
      type: String,
      required: [true, 'Google Maps Place ID is required'],
    },
    name: {
      type: String,
      required: [true, 'Place name is required'],
      trim: true,
    },
    address: {
      type: String,
    },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    category: {
      type: String,
      enum: ['restaurant', 'attraction', 'hotel', 'transit', 'shopping', 'other'],
      default: 'other',
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

// Compound Index to prevent duplicate place saving per User
savedPlaceSchema.index({ user: 1, placeId: 1 }, { unique: true });

savedPlaceSchema.plugin(softDeletePlugin);

export const SavedPlace = mongoose.model('SavedPlace', savedPlaceSchema);
export default SavedPlace;
