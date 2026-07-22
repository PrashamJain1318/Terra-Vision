import mongoose from 'mongoose';

const emergencyContactSchema = new mongoose.Schema(
  {
    destination: { type: String, default: 'Global' },
    name: { type: String, required: true },
    role: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, default: 'police' },
  },
  { timestamps: true }
);

export default mongoose.models.EmergencyContact || mongoose.model('EmergencyContact', emergencyContactSchema);
