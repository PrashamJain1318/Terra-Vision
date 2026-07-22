import mongoose from 'mongoose';

const safetyAssessmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    destination: { type: String, required: true },
    country: { type: String, default: 'India' },
    city: { type: String, default: 'Amritsar' },
    safetyScore: { type: Number, default: 92 },
    riskLevel: { type: String, enum: ['low', 'moderate', 'high', 'critical'], default: 'low' },
    safetyTips: [{ type: String }],
    emergencyNumbers: { type: Map, of: String },
    created: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.SafetyAssessment || mongoose.model('SafetyAssessment', safetyAssessmentSchema);
