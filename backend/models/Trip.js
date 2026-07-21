import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Trip must belong to a user'],
    },
    title: {
      type: String,
      required: [true, 'Trip title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    destination: {
      name: { type: String, required: [true, 'Destination name is required'] },
      coordinates: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required'],
    },
    status: {
      type: String,
      enum: ['planning', 'upcoming', 'active', 'completed'],
      default: 'planning',
    },
  },
  {
    timestamps: true,
  }
);

// Compound Indexing for query optimization
tripSchema.index({ user: 1, status: 1 });
tripSchema.index({ startDate: 1 });

tripSchema.plugin(softDeletePlugin);

export const Trip = mongoose.model('Trip', tripSchema);
export default Trip;
