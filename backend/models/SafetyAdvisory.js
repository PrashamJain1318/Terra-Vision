import mongoose from 'mongoose';

const safetyAdvisorySchema = new mongoose.Schema(
  {
    destination: { type: String, required: true },
    advisoryText: { type: String, required: true },
    severity: { type: String, enum: ['low', 'moderate', 'high'], default: 'low' },
  },
  { timestamps: true }
);

export default mongoose.models.SafetyAdvisory || mongoose.model('SafetyAdvisory', safetyAdvisorySchema);
