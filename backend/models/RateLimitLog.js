import mongoose from 'mongoose';

const rateLimitLogSchema = new mongoose.Schema(
  {
    ipAddress: { type: String, required: true, index: true },
    endpoint: { type: String, required: true },
    requestCount: { type: Number, default: 1 },
    blocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const RateLimitLog = mongoose.models.RateLimitLog || mongoose.model('RateLimitLog', rateLimitLogSchema);
export default RateLimitLog;
