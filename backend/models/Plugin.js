import mongoose from 'mongoose';

const pluginSchema = new mongoose.Schema(
  {
    developerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    pluginName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['Navigation', 'Accommodation', 'Culinary', 'Translation', 'Weather', 'Finance', 'Analytics', 'Social'],
      default: 'Navigation',
    },
    version: {
      type: String,
      default: '1.0.0',
    },
    status: {
      type: String,
      enum: ['active', 'pending_review', 'disabled'],
      default: 'active',
    },
    webhookUrl: {
      type: String,
      default: '',
    },
    installCount: {
      type: Number,
      default: 1420,
    },
    rating: {
      type: Number,
      default: 4.8,
    },
    description: {
      type: String,
      default: 'Official LocalLens OS Plugin',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Plugin', pluginSchema);
