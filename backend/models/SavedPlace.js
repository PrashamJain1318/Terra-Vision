import mongoose from 'mongoose';

const savedPlaceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      default: 'attraction',
    },
    city: {
      type: String,
      default: 'Shimla, India',
    },
    coordinates: {
      lat: { type: Number, default: 31.1048 },
      lng: { type: Number, default: 77.1734 },
    },
    address: {
      type: String,
      default: '',
    },
    notes: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 4.8,
    },
    reviewsCount: {
      type: Number,
      default: 128,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const SavedPlace = mongoose.model('SavedPlace', savedPlaceSchema);

export default SavedPlace;
