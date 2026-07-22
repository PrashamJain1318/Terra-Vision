import mongoose from 'mongoose';

const mediaItemSchema = new mongoose.Schema({
  url: { type: String, required: true },
  name: { type: String, default: '' },
  type: { type: String, enum: ['image', 'video', 'audio'], default: 'image' },
  size: { type: Number, default: 0 },
});

const travelMemorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tripId: { type: String, default: 'general' },
    title: { type: String, required: true },
    destination: { type: String, required: true },
    description: { type: String, default: '' },
    category: { type: String, default: 'General' },
    date: { type: Date, default: Date.now },
    media: [mediaItemSchema],
    audioNoteUrl: { type: String, default: '' },
    privacy: { type: String, enum: ['public', 'private', 'shared'], default: 'private' },
    isArchived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.TravelMemory || mongoose.model('TravelMemory', travelMemorySchema);
