import mongoose from 'mongoose';

const memoryCollectionSchema = new mongoose.Schema(
  {
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelMemory', required: true },
    collectionName: { type: String, required: true },
    tags: [{ type: String }],
    itemsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.MemoryCollection || mongoose.model('MemoryCollection', memoryCollectionSchema);
