import mongoose from 'mongoose';

const memoryTimelineSchema = new mongoose.Schema(
  {
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelMemory', required: true },
    events: [
      {
        type: { type: String, enum: ['photo', 'landmark_scan', 'food', 'hidden_gem', 'route_checkpoint'], required: true },
        title: { type: String, required: true },
        location: { type: String },
        timestamp: { type: Date, default: Date.now },
        description: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.MemoryTimeline || mongoose.model('MemoryTimeline', memoryTimelineSchema);
