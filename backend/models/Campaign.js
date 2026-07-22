import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema(
  {
    partnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Partner',
      required: true,
      index: true,
    },
    campaignName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Featured Destination', 'Seasonal Discount', 'Restaurant Promo', 'Hotel Package', 'Cultural Tour'],
      required: true,
    },
    cityName: {
      type: String,
      default: 'Munnar',
    },
    status: {
      type: String,
      enum: ['active', 'paused', 'completed', 'draft'],
      default: 'active',
    },
    budgetUSD: {
      type: Number,
      default: 500,
    },
    impressions: {
      type: Number,
      default: 12400,
    },
    clicks: {
      type: Number,
      default: 890,
    },
    conversions: {
      type: Number,
      default: 142,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Campaign', campaignSchema);
