import mongoose from 'mongoose';

const VoiceIntentSchema = new mongoose.Schema(
  {
    intentCode: { type: String, required: true },
    sampleUtterance: { type: String, required: true },
    targetModule: { type: String, required: true },
    parameters: { type: Array, default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.VoiceIntent || mongoose.model('VoiceIntent', VoiceIntentSchema);
