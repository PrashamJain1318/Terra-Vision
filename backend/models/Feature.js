import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const featureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Feature title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Feature description is required'],
    },
    icon: {
      type: String,
      required: [true, 'Icon reference is required'],
    },
    highlight: {
      type: Boolean,
      default: false,
    },
    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

featureSchema.index({ displayOrder: 1 });

featureSchema.plugin(softDeletePlugin);

export const Feature = mongoose.model('Feature', featureSchema);
export default Feature;
