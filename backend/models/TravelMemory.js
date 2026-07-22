import mongoose from 'mongoose';

const travelMemorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tripId: { type: String, required: true },
    title: { type: String, required: true },
    destination: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
    theme: { type: String, default: 'Memory Rose' },
    privacy: { type: String, enum: ['public', 'private', 'shared'], default: 'private' },
    isArchived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.TravelMemory || mongoose.model('TravelMemory', travelMemorySchema);
