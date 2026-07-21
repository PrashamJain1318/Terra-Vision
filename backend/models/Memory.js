import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const mediaAssetSchema = new mongoose.Schema({
  url: { type: String, required: true },
  publicId: { type: String, required: true }, // Cloudinary asset ID
  type: { type: String, enum: ['image', 'video'], default: 'image' },
});

const memorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Memory title is required'],
      trim: true,
    },
    description: {
      type: String,
    },
    media: [mediaAssetSchema],
    location: {
      name: { type: String },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
memorySchema.index({ trip: 1 });
memorySchema.index({ user: 1 });

memorySchema.plugin(softDeletePlugin);

export const Memory = mongoose.model('Memory', memorySchema);
export default Memory;
