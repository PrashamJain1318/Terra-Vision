import mongoose from 'mongoose';

const VoiceMessageSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true },
    sender: { type: String, enum: ['user', 'assistant'], required: true },
    text: { type: String, required: true },
    intent: { type: String },
    targetModule: { type: String },
    audioUrl: { type: String },
    confidence: { type: Number, default: 0.95 },
  },
  { timestamps: true }
);

export default mongoose.models.VoiceMessage || mongoose.model('VoiceMessage', VoiceMessageSchema);
