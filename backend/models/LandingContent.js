import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const landingContentSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
      unique: true, // e.g. 'hero' or 'footer'
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

landingContentSchema.plugin(softDeletePlugin);

export const LandingContent = mongoose.model('LandingContent', landingContentSchema);
export default LandingContent;
