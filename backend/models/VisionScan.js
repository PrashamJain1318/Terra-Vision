import mongoose from 'mongoose';

const visionScanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      default: 'gemini',
    },
    recognitionType: {
      type: String,
      default: 'landmark',
    },
    recognizedObject: {
      type: String,
      required: true,
    },
    confidence: {
      type: Number,
      default: 0.95,
    },
    description: {
      type: String,
      default: '',
    },
    historicalInfo: {
      builtYear: { type: Number },
      architect: { type: String },
      significance: { type: String },
    },
    location: {
      name: { type: String },
      lat: { type: Number },
      lng: { type: Number },
    },
    nearbyPlaces: [
      {
        name: { type: String },
        distance: { type: String },
      },
    ],
    travelTips: [{ type: String }],
  },
  { timestamps: true }
);

const VisionScan = mongoose.model('VisionScan', visionScanSchema);

export default VisionScan;
