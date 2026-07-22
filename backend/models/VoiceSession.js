import mongoose from 'mongoose';

const VoiceSessionSchema = new mongoose.Schema(
  {
    userId: { type: String, default: 'anonymous_user' },
    sessionId: { type: String, required: true, unique: true },
    activeLanguage: { type: String, default: 'en-US' },
    audioMode: { type: String, default: 'push_to_talk' },
    selectedProvider: { type: String, default: 'gemini-voice' },
    status: { type: String, enum: ['active', 'paused', 'closed'], default: 'active' },
    metadata: { type: Map, of: String, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.VoiceSession || mongoose.model('VoiceSession', VoiceSessionSchema);
