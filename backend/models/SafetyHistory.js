import mongoose from 'mongoose';

const safetyHistorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    destination: { type: String, required: true },
    queryType: { type: String, default: 'analysis' },
  },
  { timestamps: true }
);

export default mongoose.models.SafetyHistory || mongoose.model('SafetyHistory', safetyHistorySchema);
