import mongoose from 'mongoose';

const hiddenGemSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      address: { type: String },
      lat: { type: Number },
      lng: { type: Number },
    },
    category: {
      type: String,
      default: 'nature',
    },
    tags: [{ type: String }],
    description: {
      type: String,
      default: '',
    },
    experienceScore: {
      type: Number,
      default: 9.2,
    },
    crowdLevel: {
      type: String,
      default: 'very_low',
    },
    bestVisitTime: {
      type: String,
      default: '7:30 AM - 10:00 AM',
    },
    estimatedBudget: {
      type: String,
      default: 'Moderate',
    },
    aiStory: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const HiddenGem = mongoose.model('HiddenGem', hiddenGemSchema);

export default HiddenGem;
