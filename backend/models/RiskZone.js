import mongoose from 'mongoose';

const riskZoneSchema = new mongoose.Schema(
  {
    destination: { type: String, required: true },
    zoneName: { type: String, required: true },
    riskLevel: { type: String, enum: ['low', 'moderate', 'high', 'critical'], default: 'moderate' },
    isSafeZone: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.RiskZone || mongoose.model('RiskZone', riskZoneSchema);
