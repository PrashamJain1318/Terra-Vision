import mongoose from 'mongoose';

const sosRequestSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    destination: { type: String, required: true },
    latitude: { type: Number },
    longitude: { type: Number },
    status: { type: String, enum: ['active', 'dispatched', 'resolved', 'cancelled'], default: 'active' },
  },
  { timestamps: true }
);

export default mongoose.models.SOSRequest || mongoose.model('SOSRequest', sosRequestSchema);
