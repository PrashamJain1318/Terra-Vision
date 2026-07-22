import mongoose from 'mongoose';

const memoryStorySchema = new mongoose.Schema(
  {
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelMemory', required: true },
    provider: { type: String, default: 'gemini' },
    templateId: { type: String, default: 'poetic' },
    storyContent: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.MemoryStory || mongoose.model('MemoryStory', memoryStorySchema);
