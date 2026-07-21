import mongoose from 'mongoose';
import softDeletePlugin from '../utils/softDeletePlugin.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
    },
    profileImage: {
      type: String,
      default: '',
    },
    preferences: {
      travelStyle: {
        type: String,
        enum: ['adventure', 'leisure', 'cultural', 'luxury', 'budget', 'backpacker'],
        default: 'leisure',
      },
      interests: [{ type: String }],
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
userSchema.index({ email: 1 });

// Soft Delete Plugin
userSchema.plugin(softDeletePlugin);

export const User = mongoose.model('User', userSchema);
export default User;
