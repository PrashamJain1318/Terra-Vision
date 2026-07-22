import mongoose from 'mongoose';

const BetaEventSchema = new mongoose.Schema({
  eventType: { type: String, required: true }, // search_performed, place_opened, route_started, place_saved, ai_summary_viewed, voice_search, hidden_gem_discovered
  userId: { type: String, default: 'anonymous' },
  city: { type: String },
  placeName: { type: String },
  deviceInfo: {
    browser: String,
    os: String,
    screenSize: String,
  },
  latencyMs: { type: Number },
  timestamp: { type: Date, default: Date.now },
});

const FeedbackSchema = new mongoose.Schema({
  userId: { type: String, default: 'anonymous' },
  type: { type: String, enum: ['bug', 'feature', 'ui_rating', 'ai_quality', 'general'], default: 'general' },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  screenshotUrl: { type: String },
  browserInfo: { type: String },
  osInfo: { type: String },
  status: { type: String, enum: ['open', 'in_review', 'resolved'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
});

const FeatureFlagSchema = new mongoose.Schema({
  flagKey: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  enabled: { type: Boolean, default: false },
  rolloutPercentage: { type: Number, default: 100 },
  createdAt: { type: Date, default: Date.now },
});

const BetaAnalytics = mongoose.model('BetaAnalytics', new mongoose.Schema({
  events: [BetaEventSchema],
  feedbacks: [FeedbackSchema],
  featureFlags: [FeatureFlagSchema],
}));

export default BetaAnalytics;
export { BetaEventSchema, FeedbackSchema, FeatureFlagSchema };
