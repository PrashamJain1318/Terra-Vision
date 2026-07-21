import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const aiHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    interactionType: {
      type: String,
      enum: ['vision', 'chat', 'recommendation'],
      required: true,
    },
    prompt: {
      type: String,
      required: [true, 'Prompt payload context is required'],
    },
    response: {
      type: String,
      required: [true, 'AI completion response is required'],
    },
    metaData: {
      imageUrl: { type: String }, // Used in Vision modules
      modelUsed: { type: String, default: 'gemini-1.5-flash' },
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for historical queries
aiHistorySchema.index({ user: 1, createdAt: -1 });

aiHistorySchema.plugin(softDeletePlugin);

export const AIHistory = mongoose.model('AIHistory', aiHistorySchema);
export default AIHistory;
