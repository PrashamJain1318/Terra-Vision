import mongoose from 'mongoose';

const memoryMediaSchema = new mongoose.Schema(
  {
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelMemory', required: true },
    mediaUrl: { type: String, required: true },
    mediaType: { type: String, enum: ['image', 'video'], default: 'image' },
    caption: { type: String },
    locationName: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.MemoryMedia || mongoose.model('MemoryMedia', memoryMediaSchema);
