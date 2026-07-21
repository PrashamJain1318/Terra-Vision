import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  time: { type: String }, // e.g. "09:00 AM" or ISO string
  location: {
    name: { type: String },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  cost: { type: Number, default: 0 },
});

const dayItinerarySchema = new mongoose.Schema({
  dayNumber: { type: Number, required: true },
  date: { type: Date },
  activities: [activitySchema],
});

const plannerSchema = new mongoose.Schema(
  {
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip',
      required: [true, 'Planner must be linked to a Trip'],
      unique: true, // One planner itinerary mapping per Trip document
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Planner must belong to a User'],
    },
    itinerary: [dayItinerarySchema],
    totalEstimatedCost: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
plannerSchema.index({ trip: 1 });
plannerSchema.index({ user: 1 });

plannerSchema.plugin(softDeletePlugin);

export const Planner = mongoose.model('Planner', plannerSchema);
export default Planner;
