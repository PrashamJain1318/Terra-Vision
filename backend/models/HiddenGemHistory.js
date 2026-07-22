import mongoose from 'mongoose';

const hiddenGemHistorySchema = new mongoose.Schema(
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
    },
    interests: [{ type: String }],
    provider: {
      type: String,
      default: 'gemini',
    },
  },
  { timestamps: true }
);

const HiddenGemHistory = mongoose.model('HiddenGemHistory', hiddenGemHistorySchema);

export default HiddenGemHistory;
