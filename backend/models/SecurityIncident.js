import mongoose from 'mongoose';

const securityIncidentSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    severity: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'], default: 'MEDIUM' },
    details: { type: String, required: true },
    ipAddress: { type: String, default: '127.0.0.1' },
    resolved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const SecurityIncident = mongoose.models.SecurityIncident || mongoose.model('SecurityIncident', securityIncidentSchema);
export default SecurityIncident;
