import mongoose from 'mongoose';

const plannerItinerarySchema = new mongoose.Schema(
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
      trim: true,
    },
    dates: {
      start: { type: String, default: '' },
      end: { type: String, default: '' },
    },
    travelDays: {
      type: Number,
      default: 3,
    },
    travelers: {
      type: Number,
      default: 1,
    },
    travelStyle: {
      type: String,
      default: 'balanced',
    },
    budget: {
      type: String,
      default: 'balanced',
    },
    interests: [{ type: String }],
    accommodationPreference: {
      type: String,
      default: 'comfort',
    },
    transportPreference: {
      type: String,
      default: 'mixed',
    },
    language: {
      type: String,
      default: 'english',
    },
    generatedResponse: {
      tripTitle: { type: String, default: '' },
      destination: { type: String, default: '' },
      days: { type: Number, default: 3 },
      summary: { type: String, default: '' },
      estimatedBudget: { type: String, default: '' },
      itinerary: [
        {
          day: { type: Number },
          title: { type: String },
          morning: { type: String },
          afternoon: { type: String },
          evening: { type: String },
          foodSuggestions: [{ type: String }],
        },
      ],
      travelTips: [{ type: String }],
      packingChecklist: [{ type: String }],
      bestTimeToVisit: { type: String, default: '' },
      localEtiquette: { type: String, default: '' },
      emergencyNumbers: { type: String, default: '' },
    },
    status: {
      type: String,
      enum: ['draft', 'generated', 'saved', 'archived'],
      default: 'generated',
    },
  },
  { timestamps: true }
);

const PlannerItinerary = mongoose.model('PlannerItinerary', plannerItinerarySchema);

export default PlannerItinerary;
