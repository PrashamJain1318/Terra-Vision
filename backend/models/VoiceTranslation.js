import mongoose from 'mongoose';

const VoiceTranslationSchema = new mongoose.Schema(
  {
    sessionId: { type: String },
    originalText: { type: String, required: true },
    translatedText: { type: String, required: true },
    sourceLang: { type: String, required: true },
    targetLang: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.VoiceTranslation || mongoose.model('VoiceTranslation', VoiceTranslationSchema);
