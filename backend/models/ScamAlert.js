import mongoose from 'mongoose';

const scamAlertSchema = new mongoose.Schema(
  {
    destination: { type: String, required: true },
    scamType: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    severity: { type: String, enum: ['low', 'moderate', 'high', 'critical'], default: 'moderate' },
    location: { type: String },
    verified: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.ScamAlert || mongoose.model('ScamAlert', scamAlertSchema);
