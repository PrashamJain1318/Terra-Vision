import mongoose from 'mongoose';

const safetyNotificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, required: true },
    type: { type: String, default: 'scam_alert' },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.SafetyNotification || mongoose.model('SafetyNotification', safetyNotificationSchema);
