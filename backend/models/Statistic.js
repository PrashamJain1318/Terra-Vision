import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const statisticSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true, // e.g. 'countries', 'users', 'trips', 'suggestions'
    },
    value: {
      type: String,
      required: true, // e.g. "50+", "10,000+"
    },
    label: {
      type: String,
      required: true, // e.g. "Countries Covered"
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

statisticSchema.index({ displayOrder: 1 });

statisticSchema.plugin(softDeletePlugin);

export const Statistic = mongoose.model('Statistic', statisticSchema);
export default Statistic;
