import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    partnerType: {
      type: String,
      enum: ['Hotel', 'Restaurant', 'Tourism Board', 'Local Guide', 'Travel Agency'],
      required: true,
    },
    city: {
      type: String,
      default: 'Munnar',
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    trustScore: {
      type: Number,
      default: 98,
    },
    subscriptionTier: {
      type: String,
      enum: ['Starter', 'Pro', 'Enterprise'],
      default: 'Pro',
    },
    apiKey: {
      type: String,
      default: () => 'll_live_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    },
    contactEmail: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      default: '+91 98765 43210',
    },
    website: {
      type: String,
      default: 'https://locallens.ai',
    },
    listingsCount: {
      type: Number,
      default: 5,
    },
    totalImpressions: {
      type: Number,
      default: 48200,
    },
    totalClicks: {
      type: Number,
      default: 3410,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Partner', partnerSchema);
