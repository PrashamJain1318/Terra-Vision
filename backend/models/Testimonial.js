import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: '',
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

testimonialSchema.plugin(softDeletePlugin);

export const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
