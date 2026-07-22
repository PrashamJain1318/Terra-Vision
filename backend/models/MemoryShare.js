import mongoose from 'mongoose';

const memoryShareSchema = new mongoose.Schema(
  {
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelMemory', required: true },
    shareToken: { type: String, required: true, unique: true },
    isPasscodeProtected: { type: Boolean, default: false },
    passcodeHash: { type: String },
    expiresAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.MemoryShare || mongoose.model('MemoryShare', memoryShareSchema);
