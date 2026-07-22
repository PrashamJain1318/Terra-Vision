import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    deviceName: {
      type: String,
      required: true,
      trim: true,
    },
    deviceType: {
      type: String,
      enum: ['Phone', 'Tablet', 'Laptop', 'Smartwatch', 'Android Auto', 'Apple CarPlay'],
      required: true,
    },
    platform: {
      type: String,
      enum: ['iOS', 'Android', 'macOS', 'Windows', 'watchOS', 'WearOS', 'CarPlay', 'AndroidAuto'],
      default: 'Android',
    },
    batteryLevel: {
      type: Number,
      min: 0,
      max: 100,
      default: 85,
    },
    syncStatus: {
      type: String,
      enum: ['synced', 'pending', 'offline', 'error'],
      default: 'synced',
    },
    lastSyncTime: {
      type: Date,
      default: Date.now,
    },
    isCurrentDevice: {
      type: Boolean,
      default: false,
    },
    pushToken: {
      type: String,
      default: '',
    },
    offlineStorageUsedMB: {
      type: Number,
      default: 120,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Device', deviceSchema);
