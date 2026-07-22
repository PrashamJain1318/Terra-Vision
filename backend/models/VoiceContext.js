import mongoose from 'mongoose';

const VoiceContextSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true },
    activeDestination: { type: String },
    currentTripId: { type: String },
    lastIntent: { type: String },
    conversationSummary: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.VoiceContext || mongoose.model('VoiceContext', VoiceContextSchema);
