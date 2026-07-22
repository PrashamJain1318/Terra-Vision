import mongoose from 'mongoose';

const visionMemorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    visionScan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'VisionScan',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    notes: {
      type: String,
      default: '',
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    tripReference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PlannerItinerary',
      default: null,
    },
  },
  { timestamps: true }
);

const VisionMemory = mongoose.model('VisionMemory', visionMemorySchema);

export default VisionMemory;
